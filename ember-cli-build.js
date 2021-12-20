'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    hinting: false,

    // Add options here
    snippetPaths: ['tests/dummy/app/snippets'],

    'ember-prism': {
      theme: 'okaidia',
      components: ['markup-templating', 'handlebars', 'javascript'],
      plugins: ['normalize-whitespace', 'remove-initial-line-feed'],
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');

  return maybeEmbroider(app, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
