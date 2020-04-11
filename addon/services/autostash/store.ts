import Service from '@ember/service';
import { recordInlocalStorage, lookupFromLocalStorage } from 'ember-autostash-modifier/-private/utils';

type Serializable = import('ember-autostash-modifier/-private/utils').Serializable;

type Dict = {
  [key: string]: Serializable;
};

interface RecordOptions {
  persist?: boolean;
}

interface LookupOptions {
  didPersist?: boolean;
}

export default class AutostashStore extends Service {
  stash: Dict = {};

  record(key: string, value: Serializable, options?: RecordOptions) {

    if (options?.persist) {
      recordInlocalStorage(key, value);
      return;
    }

    this.stash[key] = value;
  }

  lookup(key: string, options?: LookupOptions) {
    if (options?.didPersist) {
      return lookupFromLocalStorage(key);
    }

    return this.stash[key];
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'autostash/store': AutostashStore;
  }
}
