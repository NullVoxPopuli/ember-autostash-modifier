"use strict"
define("dummy/app",["exports","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,r){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?a(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){function n(){var e,o
u(this,n)
for(var f=arguments.length,c=new Array(f),s=0;s<f;s++)c[s]=arguments[s]
return d(a(o=i(this,(e=l(n)).call.apply(e,[this].concat(c)))),"modulePrefix",r.default.modulePrefix),d(a(o),"podModulePrefix",r.default.podModulePrefix),d(a(o),"Resolver",t.default),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,Ember.Application),n}()
e.default=c,(0,n.default)(c,r.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/code-block",["exports","ember-prism/components/code-block"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/components/code-inline",["exports","ember-prism/components/code-inline"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/components/uk-badge",["exports","ember-uikit/components/uk-badge"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-button",["exports","ember-uikit/components/uk-button"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-card",["exports","ember-uikit/components/uk-card"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-card/body",["exports","ember-uikit/components/uk-card/body"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-card/footer",["exports","ember-uikit/components/uk-card/footer"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-card/header",["exports","ember-uikit/components/uk-card/header"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-card/title",["exports","ember-uikit/components/uk-card/title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-flex",["exports","ember-uikit/components/uk-flex"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-icon",["exports","ember-uikit/components/uk-icon"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-label",["exports","ember-uikit/components/uk-label"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-list",["exports","ember-uikit/components/uk-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-list/item",["exports","ember-uikit/components/uk-list/item"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-modal",["exports","ember-uikit/components/uk-modal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-modal/body",["exports","ember-uikit/components/uk-modal/body"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-modal/footer",["exports","ember-uikit/components/uk-modal/footer"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-modal/header",["exports","ember-uikit/components/uk-modal/header"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-sortable",["exports","ember-uikit/components/uk-sortable"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-spinner",["exports","ember-uikit/components/uk-spinner"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-subnav",["exports","ember-uikit/components/uk-subnav"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-subnav/item",["exports","ember-uikit/components/uk-subnav/item"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-subnav/link-item",["exports","ember-uikit/components/uk-subnav/link-item"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-switcher",["exports","ember-uikit/components/uk-switcher"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-switcher/content",["exports","ember-uikit/components/uk-switcher/content"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-switcher/content/item",["exports","ember-uikit/components/uk-switcher/content/item"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-switcher/nav",["exports","ember-uikit/components/uk-switcher/nav"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-tab",["exports","ember-uikit/components/uk-tab"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("dummy/components/uk-tab/item",["exports","ember-uikit/components/uk-tab/item"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-tab/link-item",["exports","ember-uikit/components/uk-tab/link-item"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-toggle-switch",["exports","ember-uikit/components/uk-toggle-switch"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/uk-width",["exports","ember-uikit/components/uk-width"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/x-toggle-label",["exports","ember-toggle/components/x-toggle-label/component"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/x-toggle-switch",["exports","ember-toggle/components/x-toggle-switch/component"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/x-toggle",["exports","ember-toggle/components/x-toggle/component","dummy/config/environment"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=n.default["ember-toggle"]||{},o=t.default.extend({theme:r.defaultTheme||"default",defaultOffLabel:r.defaultOffLabel||"Off::off",defaultOnLabel:r.defaultOnLabel||"On::on",showLabels:r.defaultShowLabels||!1,size:r.defaultSize||"medium"})
e.default=o})),define("dummy/config/environment.d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=config
e.default=t})),define("dummy/controllers/demo",["exports"],(function(e){var t,n
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,n,r,o){var u={}
return Object.keys(r).forEach((function(e){u[e]=r[e]})),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),u),o&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(o):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(e,t,u),u=null),u}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=(n=c((t=function(e){function t(){var e,r
u(this,t)
for(var i=arguments.length,d=new Array(i),c=0;c<i;c++)d[c]=arguments[c]
return o(f(r=l(this,(e=a(t)).call.apply(e,[this].concat(d)))),"value",n,f(r)),r}var r,c,s
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,Ember.Controller),r=t,(c=[{key:"restore",value:function(e){this.value=e||""}},{key:"onInput",value:function(e){this.value=e.target.value}}])&&i(r.prototype,c),s&&i(r,s),t}()).prototype,"value",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c(t.prototype,"restore",[Ember._action],Object.getOwnPropertyDescriptor(t.prototype,"restore"),t.prototype),c(t.prototype,"onInput",[Ember._action],Object.getOwnPropertyDescriptor(t.prototype,"onInput"),t.prototype),t)
e.default=s})),define("dummy/ember-gestures/recognizers/pan",["exports","ember-gestures/recognizers/pan"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/ember-gestures/recognizers/pinch",["exports","ember-gestures/recognizers/pinch"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/ember-gestures/recognizers/press",["exports","ember-gestures/recognizers/press"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/ember-gestures/recognizers/rotate",["exports","ember-gestures/recognizers/rotate"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/ember-gestures/recognizers/swipe",["exports","ember-gestures/recognizers/swipe"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/ember-gestures/recognizers/tap",["exports","ember-gestures/recognizers/tap"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/ember-gestures/recognizers/vertical-pan",["exports","ember-gestures/recognizers/vertical-pan"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/ember-gestures/recognizers/vertical-swipe",["exports","ember-gestures/recognizers/vertical-swipe"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/event_dispatcher",["exports","ember-gestures/event_dispatcher","dummy/config/environment"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.assign||Ember.merge,o=r({},{emberUseCapture:!1,removeTracking:!1,useFastPaths:!1})
o=r(o,n.default.gestures)
var u=t.default.extend({useCapture:o.emberUseCapture,removeTracking:o.removeTracking,useFastPaths:o.useFastPaths})
e.default=u})),define("dummy/helpers/-clear-element",["exports","ember-in-element-polyfill/helpers/-clear-element"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"clearElement",{enumerable:!0,get:function(){return t.clearElement}})})),define("dummy/helpers/get-code-snippet",["exports","ember-code-snippet/helpers/get-code-snippet"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("dummy/instance-initializers/ember-gestures",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-gestures",initialize:function(e){"function"==typeof e.lookup?e.lookup("service:-gestures"):Ember.getOwner(e).lookup("service:-gestures")}}
e.default=t})),define("dummy/modifiers/autostash",["exports","ember-autostash-modifier/modifiers/autostash"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/focus-trap",["exports","ember-focus-trap/modifiers/focus-trap"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/recognize-gesture",["exports","ember-gestures/modifiers/recognize-gesture"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/router",["exports","dummy/config/environment"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?i(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){function n(){var e,l
r(this,n)
for(var f=arguments.length,d=new Array(f),c=0;c<f;c++)d[c]=arguments[c]
return a(i(l=o(this,(e=u(n)).call.apply(e,[this].concat(d)))),"location",t.default.locationType),a(i(l),"rootURL",t.default.rootURL),l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,Ember.Router),n}()
e.default=f,f.map((function(){this.route("demo",{path:":id"})}))})),define("dummy/routes/index",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){function t(){return n(this,t),o(this,u(t).apply(this,arguments))}var l,a,f
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,Ember.Route),l=t,(a=[{key:"beforeModel",value:function(){this.transitionTo("demo",1)}}])&&r(l.prototype,a),f&&r(l,f),t}()
e.default=l})),define("dummy/routes/route",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){function t(){return n(this,t),o(this,u(t).apply(this,arguments))}var l,a,f
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,Ember.Route),l=t,(a=[{key:"model",value:function(e){return{id:e.id}}}])&&r(l.prototype,a),f&&r(l,f),t}()
e.default=l})),define("dummy/services/-gestures",["exports","dummy/config/environment","ember-gestures/services/-gestures"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.assign||Ember.merge,o=r({},{useCapture:!1})
o=r(o,t.default.gestures)
var u=n.default.extend({useCapture:o.useCapture})
e.default=u}))
define("dummy/services/autostash/store",["exports","ember-autostash-modifier/services/autostash/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/notification",["exports","ember-uikit/services/notification"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/snippets/demo-input",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"XYTtV3Vo",block:'{"symbols":["@model"],"statements":[[9,"input",false],[23,"type","text",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,1],["id"]]],null],[10],[11],[1,1,0,0,"\\n"],[9,"input",false],[23,"type","checkbox",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,1],["id"]]],null],[10],[11],[1,1,0,0,"\\n"],[9,"textarea",false],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,1],["id"]]],null],[10],[11],[1,1,0,0,"\\n"]],"hasEval":false,"upvars":["autostash"]}',meta:{moduleName:"dummy/snippets/demo-input.hbs"}})
e.default=t})),define("dummy/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"jziBzKvl",block:'{"symbols":[],"statements":[[1,1,0,0,"\\n\\n"],[9,"main",true],[12,"class","uk-flex uk-flex-middle uk-flex-column uk-margin-top",null],[10],[1,1,0,0,"\\n  "],[9,"h1",true],[12,"class","uk-heading-small uk-margin-top uk-margin-bottom",null],[10],[1,1,0,0,"ember-autostash-modifier"],[11],[1,1,0,0,"\\n\\n  "],[1,0,0,0,[31,0,0,[27,[26,1,"CallHead"],[]],[[31,0,0,[27,[26,0,"CallHead"],[]],null,null]],null]],[1,1,0,0,"\\n\\n  "],[9,"footer",true],[12,"class","uk-margin-top uk-margin-bottom",null],[10],[1,1,0,0,"\\n    "],[9,"a",true],[12,"href","https://github.com/nullvoxpopuli/ember-autostash-modifier",null],[10],[1,1,0,0,"GitHub Repo"],[11],[1,1,0,0," |\\n    "],[9,"a",true],[12,"href","https://twitter.com/nullvoxpopuli",null],[10],[1,1,0,0,"@NullVoxPopuli"],[11],[1,1,0,0,"\\n  "],[11],[1,1,0,0,"\\n"],[11],[1,1,0,0,"\\n\\n"]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t})),define("dummy/templates/demo",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"K/YMCU+c",block:'{"symbols":["snippet","@model"],"statements":[[9,"div",true],[12,"class","\\n  uk-card uk-card-default uk-card-hover\\n  uk-card-large\\n",null],[10],[1,1,0,0,"\\n  "],[9,"div",true],[12,"class","uk-card-header",null],[10],[1,1,0,0,"\\n    "],[7,"code-block",[],[["@code"],["ember install ember-autostash-modifier"]],null],[1,1,0,0,"\\n  "],[11],[1,1,0,0,"\\n  "],[9,"div",true],[12,"class","uk-card-body",null],[10],[1,1,0,0,"\\n      "],[9,"label",true],[12,"class","uk-form-label",null],[12,"for","demo-input",null],[10],[1,1,0,0,"Type here, and then change routes"],[11],[1,1,0,0,"\\n      "],[9,"input",false],[23,"id","demo-input",null],[23,"class","uk-input",null],[23,"placeholder","Type something here",null],[23,"type","text",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,2],["id"]]],null],[10],[11],[1,1,0,0,"\\n      "],[9,"br",true],[10],[11],[9,"br",true],[10],[11],[1,1,0,0,"\\n\\n      "],[9,"label",true],[12,"class","uk-form-label",null],[12,"for","demo-checkbox",null],[10],[1,1,0,0,"Check the box"],[11],[1,1,0,0,"\\n      "],[9,"input",false],[23,"id","demo-checkbox",null],[23,"class","uk-checkbox",null],[23,"type","checkbox",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,2],["id"]]],null],[10],[11],[1,1,0,0,"\\n\\n      "],[9,"br",true],[10],[11],[9,"br",true],[10],[11],[1,1,0,0,"\\n\\n      "],[9,"label",true],[12,"class","uk-form-label",null],[12,"for","demo-textarea",null],[10],[1,1,0,0,"Type some text"],[11],[1,1,0,0,"\\n      "],[9,"textarea",false],[23,"id","demo-textarea",null],[23,"class","uk-textarea",null],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,2],["id"]]],null],[10],[11],[1,1,0,0,"    "],[9,"p",true],[10],[1,1,0,0,"\\n      Routes:\\n      "],[7,"link-to",[],[["@route","@model"],["demo",1]],[["default"],[{"statements":[[1,1,0,0,"One: /1"]],"parameters":[]}]]],[1,1,0,0,",\\n      "],[7,"link-to",[],[["@route","@model"],["demo",2]],[["default"],[{"statements":[[1,1,0,0,"Two: /2"]],"parameters":[]}]]],[1,1,0,0,",\\n      "],[7,"link-to",[],[["@route","@model"],["demo",3]],[["default"],[{"statements":[[1,1,0,0,"Three: /3"]],"parameters":[]}]]],[1,1,0,0,"\\n    "],[11],[1,1,0,0,"\\n  "],[11],[1,1,0,0,"\\n\\n  "],[9,"div",true],[12,"class","uk-card-footer",null],[10],[1,1,0,0,"\\n\\n"],[5,[27,[26,2,"BlockHead"],[]],[[31,1100,16,[27,[26,1,"CallHead"],[]],["demo-input.hbs"],null]],null,[["default"],[{"statements":[[1,1,0,0,"      "],[7,"code-block",[],[["@code","@language"],[[27,[24,1],["source"]],"handlebars"]],null],[1,1,0,0,"\\n"]],"parameters":[1]}]]],[1,1,0,0,"  "],[11],[1,1,0,0,"\\n"],[11],[1,1,0,0,"\\n"]],"hasEval":false,"upvars":["autostash","get-code-snippet","let"]}',meta:{moduleName:"dummy/templates/demo.hbs"}})
e.default=t})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})
