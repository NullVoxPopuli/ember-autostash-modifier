import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DemoController extends Controller {
  @tracked value = '';

  @action restore(text) {
    this.value = text || '';
  }

  @action onInput(e) {
    this.value = e.target.value;
  }
}
