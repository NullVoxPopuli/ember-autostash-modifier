import Route from '@ember/routing/route';

export default class DemoRoute extends Route {
  model({ id }) {
    return { id };
  }
}
