import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DemoController extends Controller {
  @tracked value = '';

  @action restore(text) {
    this.value = text;
  }

  @action onInput(e) {
    this.value = e.target.value;
  }
}
