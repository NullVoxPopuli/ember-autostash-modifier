import Modifier from 'ember-modifier';
import { get, set, action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';

import AutostashStore from 'autostash/services/autostash/store';

type StashableElement = HTMLInputElement | HTMLTextAreaElement;
type Key = string | number;

interface Args {
  positional: [Key],
  named: {};
}

const LS_KEY = '__AutoStash__';

export default class Autostash extends Modifier<Args> {
  @service('autostash/store') store!: AutostashStore;

  lastWhen?: Key;

  didInstall() {
    this.lastWhen = guidFor(this.args.positional[0]);

    this.element?.addEventListener('input', this.didReceiveArguments)
  }

  @action
  didReceiveArguments() {
    if (!this.lastWhen) return;
    if (!this.element) return;
    if (!hasValue(this.element)) return;

    let when = guidFor(this.args.positional[0]);

    if (when === this.lastWhen) {
      let data = this.element.value;

      this.store.record(when, data);
      return;
    }

    // this.element.value = lookup(when);
    this.element.value = this.store.lookup(when) || '';

    this.element?.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));

    this.lastWhen = when;
  }

  willRemove() {
    this.element?.removeEventListener('input', this.didReceiveArguments);
  }
}

// function set(key: Key, value: string) {
//   let lsKey = `${LS_KEY}${key}`;

//   window.localStorage.setItem(lsKey, value);
// }

// function lookup(key: Key) {
//   let lsKey = `${LS_KEY}${key}`;

//   return window.localStorage.getItem(lsKey) || '';
// }


function hasValue(element: Element): element is StashableElement {
  if ('value' in element) return true;

  return false;
}
