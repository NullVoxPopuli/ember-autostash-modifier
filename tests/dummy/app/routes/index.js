import Route from '@ember/routing/route';

export default class DemoRoute extends Route {
  beforeModel() {
    this.transitionTo('demo', 1);
  }
}
