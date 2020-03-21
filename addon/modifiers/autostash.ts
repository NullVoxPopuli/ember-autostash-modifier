import Modifier from 'ember-modifier';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import { keyFor, isCheckbox } from 'ember-autostash-modifier/-private/utils';

type AutostashStore = import('ember-autostash-modifier/services/autostash/store').default;
type Key = import('ember-autostash-modifier/-private/utils').Key;
type Serializable = import('ember-autostash-modifier/-private/utils').Serializable;

type StashableElement =
  | HTMLInputElement
  | HTMLTextAreaElement;

type GetValue = () => Serializable;
type SetValue = (value: Serializable) => void;

interface Args {
  positional: [Key],
  named: {
    persist?: boolean;
  };
}

export default class Autostash extends Modifier<Args> {
  @service('autostash/store') store!: AutostashStore;

  lastKey?: string;
  lastValue?: Serializable;

  getValue: GetValue = () => (this.element as StashableElement).value;
  setValue: SetValue = (value: string) => (this.element as StashableElement).value = value;

  get persist() {
    return this.args.named.persist;
  }

  didInstall() {
    this.lastKey = keyFor(this.args.positional[0], this.element);

    this.element?.addEventListener('input', this.didReceiveArguments)

    if (isCheckbox(this.element)) {
      this.getValue = () => (this.element as HTMLInputElement).checked;
      this.setValue = (value: boolean) => (this.element as HTMLInputElement).checked = value;
    }
  }

  @action
  didReceiveArguments() {
    if (!this.lastKey) return;
    if (!this.element) return;
    if (this.lastValue === this.getValue()) return;

    let key = keyFor(this.args.positional[0], this.element);

    if (key === this.lastKey) {
      this.record(key);
      return;
    }

    this.restore(key);
  }

  willRemove() {
    this.element?.removeEventListener('input', this.didReceiveArguments);
  }

  record(key: string) {
    let data = this.getValue();

    this.store.record(key, data, { persist: this.persist });
  }

  restore(key: string) {
    this.setValue(this.store.lookup(key, { didPersist: this.persist }) || '');

    this.lastKey = key;
    this.element?.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
  }
}
