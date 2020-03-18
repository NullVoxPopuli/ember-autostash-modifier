import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, find, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('{{autostash}}', function(hooks) {
  setupRenderingTest(hooks);

  module('<input>', function() {
    test('it works', async function(assert) {
      this.setProperties({ key: 1 });

      await render(hbs`<input data-test-input {{autostash this.key}}>`);

      await fillIn('[data-test-input]', 'one');

      let input = find('[data-test-input]') as HTMLInputElement;

      assert.equal(input.value, 'one');

      this.setProperties({ key: 2 });
      await settled();

      assert.equal(input.value, '');

      this.setProperties({ key: 1 });
      await settled();

      assert.equal(input.value, 'one');
    });
  });

  module('<textarea>', function() {
    test('it works', async function(assert) {

    });
  });
});
