import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';

import Modifier from 'ember-modifier';

import type AutostashStore from 'ember-autostash-modifier/services/autostash/store';

type StashableElement = HTMLInputElement | HTMLTextAreaElement;

type Key = string | number;
type GetValue = () => string | boolean;
type SetValue = (value: string | boolean) => void;

interface Args {
  positional: [Key];
  // eslint-disable-next-line @typescript-eslint/ban-types
  named: {};
}

export default class Autostash extends Modifier<Args> {
  @service('autostash/store') store!: AutostashStore;

  lastKey?: string;
  lastValue?: string | boolean;

  getValue: GetValue = () => (this.element as StashableElement).value;
  setValue: SetValue = (value: string) => ((this.element as StashableElement).value = value);

  didInstall() {
    this.lastKey = keyFor(this.args.positional[0], this.element);

    this.element?.addEventListener('input', this.didReceiveArguments);

    if (isCheckbox(this.element)) {
      this.getValue = () => (this.element as HTMLInputElement).checked;
      this.setValue = (value: boolean) => ((this.element as HTMLInputElement).checked = value);
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

function keyFor(key: string | number, element?: Element | null) {
  return `__${guidFor(key)}-${guidFor(element)}__`;
}

function isCheckbox(element?: Element | null): element is HTMLInputElement {
  if (!element) return false;

  return element.getAttribute('type') === 'checkbox';
}
