ember-autostash-modifier
==============================================================================

A modifier for stashing changes, binding those changes to a key, and restoring those changes
based on that key.

View [Documentation Here](https://nullvoxpopuli.github.io/ember-autostash-modifier/)

Useful for chat apps, where you'd want to persist incomplete messages on a contact's
page while the user navigates between other contacts before finishing and submitting a message.
Also useful if you want to bind component data based on the URL.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.15 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-autostash-modifier
```


Usage
------------------------------------------------------------------------------

See [documentation for interactive demo](https://nullvoxpopuli.github.io/ember-autostash-modifier/)


Usage in [emberclear.io](https://emberclear.io):

```hbs
<textarea
  {{autostash this.text when=@to.id restore=this.updateText}}

  {{!-- other useful modifiers --}}
  {{autofocus this.isDisabled}}
  {{autoresize this.text}}

  {{on 'input' this.onInput}}
  {{on 'keypress' this.onKeyPress}}

  rows='1'
  value={{this.text}}
/>
```

Other useful modifiers:
 - [autofocus](https://github.com/qonto/ember-autofocus-modifier)
 - [autoresize](https://github.com/jelhan/ember-autoresize-modifier)

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
