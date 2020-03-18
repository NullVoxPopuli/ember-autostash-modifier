import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, find, settled, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import 'qunit-dom'; // types

module('{{autostash}}', function(hooks) {
  setupRenderingTest(hooks);

  module('<input {{autostash this.key}}>', function() {
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

  module('<textarea  {{autostash this.key}}>', function() {
    test('it works', async function(assert) {
      this.setProperties({ key: 1 });

      await render(hbs`
        <textarea data-test-input {{autostash this.key}} />
      `);

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

  module('<input type="checkbox {{autostash this.key}}>', function() {
    test('it works', async function(assert) {
      this.setProperties({ key: 1 });

      await render(hbs`
        <input type='checkbox' data-test-input {{autostash this.key}} />
      `);

      await click('[data-test-input]');

      assert.dom('[data-test-input]').isChecked();

      this.setProperties({ key: 2 });
      await settled();

      assert.dom('[data-test-input]').isNotChecked();

      this.setProperties({ key: 1 });
      await settled();

      assert.dom('[data-test-input]').isChecked();
    });
  });
});
