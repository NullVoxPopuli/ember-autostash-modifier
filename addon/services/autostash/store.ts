import Service from '@ember/service';

type Dict = {
  [key: string]: string | boolean;
};

export default class AutostashStore extends Service {
  stash: Dict = {};

  record(key: string, value: string | boolean) {
    this.stash[key] = value;
  }

  lookup(key: string) {
    return this.stash[key];
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'autostash/store': AutostashStore;
  }
}
