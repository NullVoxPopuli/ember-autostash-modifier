import Modifier from 'ember-modifier';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import { keyFor, isCheckbox } from 'ember-autostash-modifier/-private/utils';

type AutostashStore = import('ember-autostash-modifier/services/autostash/store').default;

type StashableElement =
  | HTMLInputElement
  | HTMLTextAreaElement;

type Key = string | number;
type GetValue = () => string | boolean;
type SetValue = (value: string | boolean) => void;

interface Args {
  positional: [Key],
  named: {};
}

export default class Autostash extends Modifier<Args> {
  @service('autostash/store') store!: AutostashStore;

  lastKey?: string;
  lastValue?: string | boolean;

  getValue: GetValue = () => (this.element as StashableElement).value;
  setValue: SetValue = (value: string) => (this.element as StashableElement).value = value;

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

    this.store.record(key, data);
  }

  restore(key: string) {
    this.setValue(this.store.lookup(key) || '');

    this.lastKey = key;
    this.element?.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
  }
}
