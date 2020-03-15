import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MyComponent extends Component {
  @tracked value = '';

  @action restore(text) {
    this.value = text || '';
  }

  @action onInput(e) {
    this.value = e.target.value;
  }
}
