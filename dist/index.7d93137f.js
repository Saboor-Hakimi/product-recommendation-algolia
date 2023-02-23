// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5J8Fp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "b5ec41889fd9c8ba20f8d3037d93137f";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3coI7":[function(require,module,exports) {
var _algoliaAutocompleteJs = require('@algolia/autocomplete-js');
var _algoliaRecommend = require('@algolia/recommend');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _algoliaRecommendDefault = _parcelHelpers.interopDefault(_algoliaRecommend);
var _algoliaRecommendJs = require('@algolia/recommend-js');
var _algoliaUiComponentsHorizontalSliderJs = require('@algolia/ui-components-horizontal-slider-js');
var _algoliasearch = require('algoliasearch');
var _algoliasearchDefault = _parcelHelpers.interopDefault(_algoliasearch);
var _preact = require('preact');
var _searchInsights = require('search-insights');
var _searchInsightsDefault = _parcelHelpers.interopDefault(_searchInsights);
var _RelatedItem = require('./RelatedItem');
require('@algolia/autocomplete-theme-classic');
require('@algolia/ui-components-horizontal-slider-theme');
var _jsxFileName = "/project/sandbox/app.tsx";
const appId = 'XX85YRZZMV';
const apiKey = '098f71f9e2267178bdfc08cc986d2999';
const indexName = 'test_FLAGSHIP_ECOM_recommend';
const searchClient = _algoliasearchDefault.default(appId, apiKey);
const recommendClient = _algoliaRecommendDefault.default(appId, apiKey);
_searchInsightsDefault.default('init', {
  appId,
  apiKey
});
_searchInsightsDefault.default('setUserToken', 'user-token-1');
function updateReferenceItem(item) {
  _preact.render(_preact.h(ReferenceItem, {
    item: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), document.querySelector('#referenceHit'));
  renderRecommendations(item);
}
_algoliaAutocompleteJs.autocomplete({
  container: '#autocomplete',
  placeholder: 'Search for a product',
  openOnFocus: true,
  defaultActiveItemId: 0,
  getSources({query}) {
    return [{
      sourceId: 'suggestions',
      getItems() {
        return _algoliaAutocompleteJs.getAlgoliaResults({
          searchClient,
          queries: [{
            indexName,
            query,
            params: {
              hitsPerPage: 5
            }
          }]
        });
      },
      getItemInputValue({item}) {
        return item.name;
      },
      onSelect({item}) {
        updateReferenceItem(item);
      },
      templates: {
        item({item, components}) {
          return _preact.h("div", {
            className: "aa-ItemWrapper",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }
          }, _preact.h("div", {
            className: "aa-ItemContent",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }
          }, _preact.h("div", {
            className: "aa-ItemIcon aa-ItemIcon--picture aa-ItemIcon--alignTop",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 19
            }
          }, _preact.h("img", {
            src: item.image_urls[0],
            alt: item.name,
            width: "40",
            height: "40",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 21
            }
          })), _preact.h("div", {
            className: "aa-ItemContentBody",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 19
            }
          }, _preact.h("div", {
            className: "aa-ItemContentTitle",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 21
            }
          }, _preact.h(components.Highlight, {
            hit: item,
            attribute: "name",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 23
            }
          })), _preact.h("div", {
            className: "aa-ItemContentDescription",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 21
            }
          }, "In ", _preact.h("strong", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 26
            }
          }, item.brand)))));
        }
      }
    }];
  }
});
function ReferenceItem({item}) {
  return _preact.h("div", {
    className: "my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, _preact.h("div", {
    className: "grid gap-4",
    style: {
      gridTemplateColumns: '150px 1fr'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, _preact.h("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, _preact.h("img", {
    src: item.image_urls[0],
    alt: item.name,
    className: "max-w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  })), _preact.h("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, _preact.h("div", {
    className: "text-sm text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, item.brand), _preact.h("div", {
    className: "text-gray-900 font-semibold mb-1 whitespace-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, item.name), Boolean(item.reviewScore) && _preact.h("div", {
    className: "items-center flex flex-grow text-sm text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, _preact.h("svg", {
    className: "mr-1 text-orange-400",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, _preact.h("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  })), _preact.h("span", {
    className: "mr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, item.reviewScore.toFixed(1) || '--'), _preact.h("span", {
    className: "text-gray-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "(", item.reviewCount, " reviews)")), _preact.h("div", {
    className: "my-2 font-semibold text-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, "$", item.price))));
}
function renderRecommendations(selectedProduct) {
  _algoliaRecommendJs.frequentlyBoughtTogether({
    container: '#frequentlyBoughtTogether',
    recommendClient,
    indexName,
    objectIDs: [selectedProduct.objectID],
    itemComponent({item}) {
      return _preact.h(_RelatedItem.RelatedItem, {
        item: item,
        insights: _searchInsightsDefault.default,
        onSelect: updateReferenceItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 9
        }
      });
    },
    maxRecommendations: 3,
    queryParameters: {
      analytics: true,
      clickAnalytics: true
    },
    fallbackComponent() {
      return _algoliaRecommendJs.relatedProducts({
        recommendClient,
        indexName,
        objectIDs: [selectedProduct.objectID],
        itemComponent({item}) {
          return _preact.h(_RelatedItem.RelatedItem, {
            item: item,
            insights: _searchInsightsDefault.default,
            onSelect: updateReferenceItem,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 13
            }
          });
        },
        view: _algoliaUiComponentsHorizontalSliderJs.horizontalSlider,
        maxRecommendations: 10,
        translations: {
          title: 'Related products (fallback)'
        },
        fallbackParameters: {
          facetFilters: [`hierarchical_categories.lvl2:${selectedProduct.hierarchical_categories.lvl2}`]
        },
        queryParameters: {
          analytics: true,
          clickAnalytics: true,
          facetFilters: [`hierarchical_categories.lvl0:${selectedProduct.hierarchical_categories.lvl0}`]
        }
      });
    }
  });
  _algoliaRecommendJs.relatedProducts({
    container: '#relatedProducts',
    recommendClient,
    indexName,
    objectIDs: [selectedProduct.objectID],
    itemComponent({item}) {
      return _preact.h(_RelatedItem.RelatedItem, {
        item: item,
        insights: _searchInsightsDefault.default,
        onSelect: updateReferenceItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }
      });
    },
    view: _algoliaUiComponentsHorizontalSliderJs.horizontalSlider,
    maxRecommendations: 10,
    translations: {
      title: 'Related products'
    },
    fallbackParameters: {
      facetFilters: [`hierarchical_categories.lvl2:${selectedProduct.hierarchical_categories.lvl2}`]
    },
    queryParameters: {
      analytics: true,
      clickAnalytics: true,
      facetFilters: [`hierarchical_categories.lvl0:${selectedProduct.hierarchical_categories.lvl0}`]
    }
  });
}

},{"@algolia/autocomplete-js":"3Dm7o","@algolia/recommend":"1qech","@algolia/recommend-js":"bH9vr","@algolia/ui-components-horizontal-slider-js":"7lCBC","algoliasearch":"3TTCe","preact":"4L2dE","search-insights":"7K0MY","./RelatedItem":"AF0vV","@algolia/autocomplete-theme-classic":"4ZOnh","@algolia/ui-components-horizontal-slider-theme":"7H5jl","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3Dm7o":[function(require,module,exports) {
var define;
/*! @algolia/autocomplete-js 1.7.0 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/autocomplete*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self)["@algolia/autocomplete-js"] = {});
})(this, function (e) {
  "use strict";
  function t(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = null != arguments[n] ? arguments[n] : {};
      n % 2 ? t(Object(r), !0).forEach(function (t) {
        o(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function r(e) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, r(e));
  }
  function o(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function i() {
    return (i = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }), i.apply(this, arguments));
  }
  function u(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function a(e, t) {
    return (function (e) {
      if (Array.isArray(e)) return e;
    })(e) || (function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null == n) return;
      var r, o, i = [], u = !0, a = !1;
      try {
        for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0) ;
      } catch (e) {
        (a = !0, o = e);
      } finally {
        try {
          u || null == n.return || n.return();
        } finally {
          if (a) throw o;
        }
      }
      return i;
    })(e, t) || l(e, t) || (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function c(e) {
    return (function (e) {
      if (Array.isArray(e)) return s(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || l(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function l(e, t) {
    if (e) {
      if ("string" == typeof e) return s(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n) ? s(e, t) : void 0);
    }
  }
  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function p(e) {
    return {
      current: e
    };
  }
  function f(e, t) {
    var n = void 0;
    return function () {
      for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
      (n && clearTimeout(n), n = setTimeout(function () {
        return e.apply(void 0, o);
      }, t));
    };
  }
  function d(e) {
    return e.reduce(function (e, t) {
      return e.concat(t);
    }, []);
  }
  var m = 0;
  function v() {
    return ("autocomplete-").concat(m++);
  }
  function h(e, t) {
    return t.reduce(function (e, t) {
      return e && e[t];
    }, e);
  }
  function g(e) {
    return 0 === e.collections.length ? 0 : e.collections.reduce(function (e, t) {
      return e + t.items.length;
    }, 0);
  }
  var y = function () {}, b = "1.7.0", O = [{
    segment: "autocomplete-core",
    version: b
  }];
  function _(e, t) {
    var n = t;
    return {
      then: function (t, r) {
        return _(e.then(j(t, n, e), j(r, n, e)), n);
      },
      catch: function (t) {
        return _(e.catch(j(t, n, e)), n);
      },
      finally: function (t) {
        return (t && n.onCancelList.push(t), _(e.finally(j(t && (function () {
          return (n.onCancelList = [], t());
        }), n, e)), n));
      },
      cancel: function () {
        n.isCanceled = !0;
        var e = n.onCancelList;
        (n.onCancelList = [], e.forEach(function (e) {
          e();
        }));
      },
      isCanceled: function () {
        return !0 === n.isCanceled;
      }
    };
  }
  function P(e) {
    return _(e, {
      isCanceled: !1,
      onCancelList: []
    });
  }
  function j(e, t, n) {
    return e ? function (n) {
      return t.isCanceled ? n : e(n);
    } : n;
  }
  function w(e, t, n, r) {
    if (!n) return null;
    if (e < 0 && (null === t || null !== r && 0 === t)) return n + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= n ? null === r ? null : 0 : o;
  }
  function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function I(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function E(e, t) {
    var n = [];
    return Promise.resolve(e(t)).then(function (e) {
      return Promise.all(e.filter(function (e) {
        return Boolean(e);
      }).map(function (e) {
        if ((e.sourceId, n.includes(e.sourceId))) throw new Error(("[Autocomplete] The `sourceId` ").concat(JSON.stringify(e.sourceId), " is not unique."));
        n.push(e.sourceId);
        var t = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? S(Object(n), !0).forEach(function (t) {
              I(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
          return e;
        })({
          getItemInputValue: function (e) {
            return e.state.query;
          },
          getItemUrl: function () {},
          onSelect: function (e) {
            (0, e.setIsOpen)(!1);
          },
          onActive: y
        }, e);
        return Promise.resolve(t);
      }));
    });
  }
  function A(e) {
    var t = (function (e) {
      var t = e.collections.map(function (e) {
        return e.items.length;
      }).reduce(function (e, t, n) {
        var r = (e[n - 1] || 0) + t;
        return (e.push(r), e);
      }, []).reduce(function (t, n) {
        return n <= e.activeItemId ? t + 1 : t;
      }, 0);
      return e.collections[t];
    })(e);
    if (!t) return null;
    var n = t.items[(function (e) {
      for (var t = e.state, n = e.collection, r = !1, o = 0, i = 0; !1 === r; ) {
        var u = t.collections[o];
        if (u === n) {
          r = !0;
          break;
        }
        (i += u.items.length, o++);
      }
      return t.activeItemId - i;
    })({
      state: e,
      collection: t
    })], r = t.source;
    return {
      item: n,
      itemInputValue: r.getItemInputValue({
        item: n,
        state: e
      }),
      itemUrl: r.getItemUrl({
        item: n,
        state: e
      }),
      source: r
    };
  }
  var C = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
  function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function k(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? D(Object(n), !0).forEach(function (t) {
        x(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function x(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function q(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function R(e, t, n) {
    var r, o = t.initialState;
    return {
      getState: function () {
        return o;
      },
      dispatch: function (r, i) {
        var u = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? N(Object(n), !0).forEach(function (t) {
              q(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
          return e;
        })({}, o);
        (o = e(o, {
          type: r,
          props: t,
          payload: i
        }), n({
          state: o,
          prevState: u
        }));
      },
      pendingRequests: (r = [], {
        add: function (e) {
          return (r.push(e), e.finally(function () {
            r = r.filter(function (t) {
              return t !== e;
            });
          }));
        },
        cancelAll: function () {
          r.forEach(function (e) {
            return e.cancel();
          });
        },
        isEmpty: function () {
          return 0 === r.length;
        }
      })
    };
  }
  function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? T(Object(n), !0).forEach(function (t) {
        B(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function B(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function F(e) {
    return (function (e) {
      if (Array.isArray(e)) return M(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return M(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return M(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function M(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function H(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? U(Object(n), !0).forEach(function (t) {
        V(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function V(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? W(Object(n), !0).forEach(function (t) {
        $(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function $(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function z(e) {
    return (function (e) {
      if (Array.isArray(e)) return G(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return G(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return G(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function G(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function J(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? K(Object(n), !0).forEach(function (t) {
        Y(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Y(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function X(e) {
    return Boolean(e.execute);
  }
  function Z(e, t) {
    return (n = e, Boolean(null == n ? void 0 : n.execute) ? J(J({}, e), {}, {
      requests: e.queries.map(function (n) {
        return {
          query: n,
          sourceId: t,
          transformResponse: e.transformResponse
        };
      })
    }) : {
      items: e,
      sourceId: t
    });
    var n;
  }
  function ee(e) {
    var t = e.reduce(function (e, t) {
      if (!X(t)) return (e.push(t), e);
      var n = t.searchClient, r = t.execute, o = t.requesterId, i = t.requests, u = e.find(function (e) {
        return X(t) && X(e) && e.searchClient === n && Boolean(o) && e.requesterId === o;
      });
      if (u) {
        var a;
        (a = u.items).push.apply(a, z(i));
      } else {
        var c = {
          execute: r,
          requesterId: o,
          items: i,
          searchClient: n
        };
        e.push(c);
      }
      return e;
    }, []).map(function (e) {
      if (!X(e)) return Promise.resolve(e);
      var t = e, n = t.execute, r = t.items;
      return n({
        searchClient: t.searchClient,
        requests: r
      });
    });
    return Promise.all(t).then(function (e) {
      return d(e);
    });
  }
  function te(e, t) {
    return t.map(function (t) {
      var n = e.filter(function (e) {
        return e.sourceId === t.sourceId;
      }), r = n.map(function (e) {
        return e.items;
      }), o = n[0].transformResponse, i = o ? o((function (e) {
        var t = e.map(function (e) {
          var t;
          return k(k({}, e), {}, {
            hits: null === (t = e.hits) || void 0 === t ? void 0 : t.map(function (t) {
              return k(k({}, t), {}, {
                __autocomplete_indexName: e.index,
                __autocomplete_queryID: e.queryID
              });
            })
          });
        });
        return {
          results: t,
          hits: t.map(function (e) {
            return e.hits;
          }).filter(Boolean),
          facetHits: t.map(function (e) {
            var t;
            return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map(function (e) {
              return {
                label: e.value,
                count: e.count,
                _highlightResult: {
                  label: {
                    value: e.highlighted
                  }
                }
              };
            });
          }).filter(Boolean)
        };
      })(r)) : r;
      return (i.every(Boolean), ('The `getItems` function from source "').concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
        source: t,
        items: i
      });
    });
  }
  var ne = ["event", "nextState", "props", "query", "refresh", "store"];
  function re(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function oe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? re(Object(n), !0).forEach(function (t) {
        ie(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function ie(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function ue(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  var ae, ce, le, se = null, pe = (ae = -1, ce = -1, le = void 0, function (e) {
    var t = ++ae;
    return Promise.resolve(e).then(function (e) {
      return le && t < ce ? le : (ce = t, le = e, e);
    });
  });
  function fe(e) {
    var t = e.event, n = e.nextState, r = void 0 === n ? {} : n, o = e.props, i = e.query, u = e.refresh, a = e.store, c = ue(e, ne);
    se && o.environment.clearTimeout(se);
    var l = c.setCollections, s = c.setIsOpen, p = c.setQuery, f = c.setActiveItemId, m = c.setStatus;
    if ((p(i), f(o.defaultActiveItemId), !i && !1 === o.openOnFocus)) {
      var v, h = a.getState().collections.map(function (e) {
        return oe(oe({}, e), {}, {
          items: []
        });
      });
      (m("idle"), l(h), s(null !== (v = r.isOpen) && void 0 !== v ? v : o.shouldPanelOpen({
        state: a.getState()
      })));
      var g = P(pe(h).then(function () {
        return Promise.resolve();
      }));
      return a.pendingRequests.add(g);
    }
    (m("loading"), se = o.environment.setTimeout(function () {
      m("stalled");
    }, o.stallThreshold));
    var y = P(pe(o.getSources(oe({
      query: i,
      refresh: u,
      state: a.getState()
    }, c)).then(function (e) {
      return Promise.all(e.map(function (e) {
        return Promise.resolve(e.getItems(oe({
          query: i,
          refresh: u,
          state: a.getState()
        }, c))).then(function (t) {
          return Z(t, e.sourceId);
        });
      })).then(ee).then(function (t) {
        return te(t, e);
      }).then(function (e) {
        return (function (e) {
          var t = e.collections, n = e.props, r = e.state, o = t.reduce(function (e, t) {
            return Q(Q({}, e), {}, $({}, t.source.sourceId, Q(Q({}, t.source), {}, {
              getItems: function () {
                return d(t.items);
              }
            })));
          }, {});
          return d(n.reshape({
            sources: Object.values(o),
            sourcesBySourceId: o,
            state: r
          })).filter(Boolean).map(function (e) {
            return {
              source: e,
              items: e.getItems()
            };
          });
        })({
          collections: e,
          props: o,
          state: a.getState()
        });
      });
    }))).then(function (e) {
      var n;
      (m("idle"), l(e));
      var p = o.shouldPanelOpen({
        state: a.getState()
      });
      s(null !== (n = r.isOpen) && void 0 !== n ? n : o.openOnFocus && !i && p || p);
      var f = A(a.getState());
      if (null !== a.getState().activeItemId && f) {
        var d = f.item, v = f.itemInputValue, h = f.itemUrl, g = f.source;
        g.onActive(oe({
          event: t,
          item: d,
          itemInputValue: v,
          itemUrl: h,
          refresh: u,
          source: g,
          state: a.getState()
        }, c));
      }
    }).finally(function () {
      (m("idle"), se && o.environment.clearTimeout(se));
    });
    return a.pendingRequests.add(y);
  }
  var de = ["event", "props", "refresh", "store"];
  function me(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function ve(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? me(Object(n), !0).forEach(function (t) {
        he(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function he(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function ge(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  var ye = ["props", "refresh", "store"], be = ["inputElement", "formElement", "panelElement"], Oe = ["inputElement"], _e = ["inputElement", "maxLength"], Pe = ["item", "source"];
  function je(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function we(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? je(Object(n), !0).forEach(function (t) {
        Se(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Se(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function Ie(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function Ee(e) {
    var t = e.props, n = e.refresh, r = e.store, o = Ie(e, ye);
    return {
      getEnvironmentProps: function (e) {
        var n = e.inputElement, o = e.formElement, i = e.panelElement;
        function u(e) {
          !r.getState().isOpen && r.pendingRequests.isEmpty() || e.target === n || !1 === [o, i].some(function (t) {
            return (n = t, r = e.target, n === r || n.contains(r));
            var n, r;
          }) && (r.dispatch("blur", null), t.debug || r.pendingRequests.cancelAll());
        }
        return we({
          onTouchStart: u,
          onMouseDown: u,
          onTouchMove: function (e) {
            !1 !== r.getState().isOpen && n === t.environment.document.activeElement && e.target !== n && n.blur();
          }
        }, Ie(e, be));
      },
      getRootProps: function (e) {
        return we({
          role: "combobox",
          "aria-expanded": r.getState().isOpen,
          "aria-haspopup": "listbox",
          "aria-owns": r.getState().isOpen ? ("").concat(t.id, "-list") : void 0,
          "aria-labelledby": ("").concat(t.id, "-label")
        }, e);
      },
      getFormProps: function (e) {
        return (e.inputElement, we({
          action: "",
          noValidate: !0,
          role: "search",
          onSubmit: function (i) {
            var u;
            (i.preventDefault(), t.onSubmit(we({
              event: i,
              refresh: n,
              state: r.getState()
            }, o)), r.dispatch("submit", null), null === (u = e.inputElement) || void 0 === u || u.blur());
          },
          onReset: function (i) {
            var u;
            (i.preventDefault(), t.onReset(we({
              event: i,
              refresh: n,
              state: r.getState()
            }, o)), r.dispatch("reset", null), null === (u = e.inputElement) || void 0 === u || u.focus());
          }
        }, Ie(e, Oe)));
      },
      getLabelProps: function (e) {
        return we({
          htmlFor: ("").concat(t.id, "-input"),
          id: ("").concat(t.id, "-label")
        }, e);
      },
      getInputProps: function (e) {
        var i;
        function u(e) {
          ((t.openOnFocus || Boolean(r.getState().query)) && fe(we({
            event: e,
            props: t,
            query: r.getState().completion || r.getState().query,
            refresh: n,
            store: r
          }, o)), r.dispatch("focus", null));
        }
        var a = e || ({});
        a.inputElement;
        var c = a.maxLength, l = void 0 === c ? 512 : c, s = Ie(a, _e), p = A(r.getState()), f = (function (e) {
          return Boolean(e && e.match(C));
        })(null === (i = t.environment.navigator) || void 0 === i ? void 0 : i.userAgent), d = null != p && p.itemUrl && !f ? "go" : "search";
        return we({
          "aria-autocomplete": "both",
          "aria-activedescendant": r.getState().isOpen && null !== r.getState().activeItemId ? ("").concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0,
          "aria-controls": r.getState().isOpen ? ("").concat(t.id, "-list") : void 0,
          "aria-labelledby": ("").concat(t.id, "-label"),
          value: r.getState().completion || r.getState().query,
          id: ("").concat(t.id, "-input"),
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          enterKeyHint: d,
          spellCheck: "false",
          autoFocus: t.autoFocus,
          placeholder: t.placeholder,
          maxLength: l,
          type: "search",
          onChange: function (e) {
            fe(we({
              event: e,
              props: t,
              query: e.currentTarget.value.slice(0, l),
              refresh: n,
              store: r
            }, o));
          },
          onKeyDown: function (e) {
            !(function (e) {
              var t = e.event, n = e.props, r = e.refresh, o = e.store, i = ge(e, de);
              if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                var u = function () {
                  var e = n.environment.document.getElementById(("").concat(n.id, "-item-").concat(o.getState().activeItemId));
                  e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1));
                }, a = function () {
                  var e = A(o.getState());
                  if (null !== o.getState().activeItemId && e) {
                    var n = e.item, u = e.itemInputValue, a = e.itemUrl, c = e.source;
                    c.onActive(ve({
                      event: t,
                      item: n,
                      itemInputValue: u,
                      itemUrl: a,
                      refresh: r,
                      source: c,
                      state: o.getState()
                    }, i));
                  }
                };
                (t.preventDefault(), !1 === o.getState().isOpen && (n.openOnFocus || Boolean(o.getState().query)) ? fe(ve({
                  event: t,
                  props: n,
                  query: o.getState().query,
                  refresh: r,
                  store: o
                }, i)).then(function () {
                  (o.dispatch(t.key, {
                    nextActiveItemId: n.defaultActiveItemId
                  }), a(), setTimeout(u, 0));
                }) : (o.dispatch(t.key, {}), a(), u()));
              } else if ("Escape" === t.key) (t.preventDefault(), o.dispatch(t.key, null), o.pendingRequests.cancelAll()); else if ("Tab" === t.key) (o.dispatch("blur", null), o.pendingRequests.cancelAll()); else if ("Enter" === t.key) {
                if (null === o.getState().activeItemId || o.getState().collections.every(function (e) {
                  return 0 === e.items.length;
                })) return void (n.debug || o.pendingRequests.cancelAll());
                t.preventDefault();
                var c = A(o.getState()), l = c.item, s = c.itemInputValue, p = c.itemUrl, f = c.source;
                if (t.metaKey || t.ctrlKey) void 0 !== p && (f.onSelect(ve({
                  event: t,
                  item: l,
                  itemInputValue: s,
                  itemUrl: p,
                  refresh: r,
                  source: f,
                  state: o.getState()
                }, i)), n.navigator.navigateNewTab({
                  itemUrl: p,
                  item: l,
                  state: o.getState()
                })); else if (t.shiftKey) void 0 !== p && (f.onSelect(ve({
                  event: t,
                  item: l,
                  itemInputValue: s,
                  itemUrl: p,
                  refresh: r,
                  source: f,
                  state: o.getState()
                }, i)), n.navigator.navigateNewWindow({
                  itemUrl: p,
                  item: l,
                  state: o.getState()
                })); else if (t.altKey) ; else {
                  if (void 0 !== p) return (f.onSelect(ve({
                    event: t,
                    item: l,
                    itemInputValue: s,
                    itemUrl: p,
                    refresh: r,
                    source: f,
                    state: o.getState()
                  }, i)), void n.navigator.navigate({
                    itemUrl: p,
                    item: l,
                    state: o.getState()
                  }));
                  fe(ve({
                    event: t,
                    nextState: {
                      isOpen: !1
                    },
                    props: n,
                    query: s,
                    refresh: r,
                    store: o
                  }, i)).then(function () {
                    f.onSelect(ve({
                      event: t,
                      item: l,
                      itemInputValue: s,
                      itemUrl: p,
                      refresh: r,
                      source: f,
                      state: o.getState()
                    }, i));
                  });
                }
              }
            })(we({
              event: e,
              props: t,
              refresh: n,
              store: r
            }, o));
          },
          onFocus: u,
          onBlur: y,
          onClick: function (n) {
            e.inputElement !== t.environment.document.activeElement || r.getState().isOpen || u(n);
          }
        }, s);
      },
      getPanelProps: function (e) {
        return we({
          onMouseDown: function (e) {
            e.preventDefault();
          },
          onMouseLeave: function () {
            r.dispatch("mouseleave", null);
          }
        }, e);
      },
      getListProps: function (e) {
        return we({
          role: "listbox",
          "aria-labelledby": ("").concat(t.id, "-label"),
          id: ("").concat(t.id, "-list")
        }, e);
      },
      getItemProps: function (e) {
        var i = e.item, u = e.source, a = Ie(e, Pe);
        return we({
          id: ("").concat(t.id, "-item-").concat(i.__autocomplete_id),
          role: "option",
          "aria-selected": r.getState().activeItemId === i.__autocomplete_id,
          onMouseMove: function (e) {
            if (i.__autocomplete_id !== r.getState().activeItemId) {
              r.dispatch("mousemove", i.__autocomplete_id);
              var t = A(r.getState());
              if (null !== r.getState().activeItemId && t) {
                var u = t.item, a = t.itemInputValue, c = t.itemUrl, l = t.source;
                l.onActive(we({
                  event: e,
                  item: u,
                  itemInputValue: a,
                  itemUrl: c,
                  refresh: n,
                  source: l,
                  state: r.getState()
                }, o));
              }
            }
          },
          onMouseDown: function (e) {
            e.preventDefault();
          },
          onClick: function (e) {
            var a = u.getItemInputValue({
              item: i,
              state: r.getState()
            }), c = u.getItemUrl({
              item: i,
              state: r.getState()
            });
            (c ? Promise.resolve() : fe(we({
              event: e,
              nextState: {
                isOpen: !1
              },
              props: t,
              query: a,
              refresh: n,
              store: r
            }, o))).then(function () {
              u.onSelect(we({
                event: e,
                item: i,
                itemInputValue: a,
                itemUrl: c,
                refresh: n,
                source: u,
                state: r.getState()
              }, o));
            });
          }
        }, a);
      }
    };
  }
  function Ae(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Ce(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ae(Object(n), !0).forEach(function (t) {
        De(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function De(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function ke(e) {
    var t, n, r, o, i = e.plugins, u = e.options, a = null === (t = ((null === (n = u.__autocomplete_metadata) || void 0 === n ? void 0 : n.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment, c = a ? De({}, a, Object.keys((null === (r = u.__autocomplete_metadata) || void 0 === r ? void 0 : r.options) || ({}))) : {};
    return {
      plugins: i.map(function (e) {
        return {
          name: e.name,
          options: Object.keys(e.__autocomplete_pluginOptions || [])
        };
      }),
      options: Ce({
        "autocomplete-core": Object.keys(u)
      }, c),
      ua: O.concat((null === (o = u.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || [])
    };
  }
  function xe(e) {
    var t, n = e.state;
    return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = A(n)) || void 0 === t ? void 0 : t.itemInputValue) || null;
  }
  function Ne(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function qe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ne(Object(n), !0).forEach(function (t) {
        Re(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Re(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  var Te = function (e, t) {
    switch (t.type) {
      case "setActiveItemId":
      case "mousemove":
        return qe(qe({}, e), {}, {
          activeItemId: t.payload
        });
      case "setQuery":
        return qe(qe({}, e), {}, {
          query: t.payload,
          completion: null
        });
      case "setCollections":
        return qe(qe({}, e), {}, {
          collections: t.payload
        });
      case "setIsOpen":
        return qe(qe({}, e), {}, {
          isOpen: t.payload
        });
      case "setStatus":
        return qe(qe({}, e), {}, {
          status: t.payload
        });
      case "setContext":
        return qe(qe({}, e), {}, {
          context: qe(qe({}, e.context), t.payload)
        });
      case "ArrowDown":
        var n = qe(qe({}, e), {}, {
          activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : w(1, e.activeItemId, g(e), t.props.defaultActiveItemId)
        });
        return qe(qe({}, n), {}, {
          completion: xe({
            state: n
          })
        });
      case "ArrowUp":
        var r = qe(qe({}, e), {}, {
          activeItemId: w(-1, e.activeItemId, g(e), t.props.defaultActiveItemId)
        });
        return qe(qe({}, r), {}, {
          completion: xe({
            state: r
          })
        });
      case "Escape":
        return e.isOpen ? qe(qe({}, e), {}, {
          activeItemId: null,
          isOpen: !1,
          completion: null
        }) : qe(qe({}, e), {}, {
          activeItemId: null,
          query: "",
          status: "idle",
          collections: []
        });
      case "submit":
        return qe(qe({}, e), {}, {
          activeItemId: null,
          isOpen: !1,
          status: "idle"
        });
      case "reset":
        return qe(qe({}, e), {}, {
          activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
          status: "idle",
          query: ""
        });
      case "focus":
        return qe(qe({}, e), {}, {
          activeItemId: t.props.defaultActiveItemId,
          isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
            state: e
          })
        });
      case "blur":
        return t.props.debug ? e : qe(qe({}, e), {}, {
          isOpen: !1,
          activeItemId: null
        });
      case "mouseleave":
        return qe(qe({}, e), {}, {
          activeItemId: t.props.defaultActiveItemId
        });
      default:
        return (("The reducer action ").concat(JSON.stringify(t.type), " is not supported."), e);
    }
  };
  function Le(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Be(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Le(Object(n), !0).forEach(function (t) {
        Fe(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Fe(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function Me(e) {
    var t = [], n = (function (e, t) {
      var n, r = "undefined" != typeof window ? window : {}, o = e.plugins || [];
      return H(H({
        debug: !1,
        openOnFocus: !1,
        placeholder: "",
        autoFocus: !1,
        defaultActiveItemId: null,
        stallThreshold: 300,
        environment: r,
        shouldPanelOpen: function (e) {
          return g(e.state) > 0;
        },
        reshape: function (e) {
          return e.sources;
        }
      }, e), {}, {
        id: null !== (n = e.id) && void 0 !== n ? n : v(),
        plugins: o,
        initialState: H({
          activeItemId: null,
          query: "",
          completion: null,
          collections: [],
          isOpen: !1,
          status: "idle",
          context: {}
        }, e.initialState),
        onStateChange: function (t) {
          var n;
          (null === (n = e.onStateChange) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onStateChange) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        onSubmit: function (t) {
          var n;
          (null === (n = e.onSubmit) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onSubmit) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        onReset: function (t) {
          var n;
          (null === (n = e.onReset) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onReset) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        getSources: function (n) {
          return Promise.all([].concat(F(o.map(function (e) {
            return e.getSources;
          })), [e.getSources]).filter(Boolean).map(function (e) {
            return E(e, n);
          })).then(function (e) {
            return d(e);
          }).then(function (e) {
            return e.map(function (e) {
              return H(H({}, e), {}, {
                onSelect: function (n) {
                  (e.onSelect(n), t.forEach(function (e) {
                    var t;
                    return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, n);
                  }));
                },
                onActive: function (n) {
                  (e.onActive(n), t.forEach(function (e) {
                    var t;
                    return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, n);
                  }));
                }
              });
            });
          });
        },
        navigator: H({
          navigate: function (e) {
            var t = e.itemUrl;
            r.location.assign(t);
          },
          navigateNewTab: function (e) {
            var t = e.itemUrl, n = r.open(t, "_blank", "noopener");
            null == n || n.focus();
          },
          navigateNewWindow: function (e) {
            var t = e.itemUrl;
            r.open(t, "_blank", "noopener");
          }
        }, e.navigator)
      });
    })(e, t), r = R(Te, n, function (e) {
      var t = e.prevState, r = e.state;
      n.onStateChange(Be({
        prevState: t,
        state: r,
        refresh: u
      }, o));
    }), o = (function (e) {
      var t = e.store;
      return {
        setActiveItemId: function (e) {
          t.dispatch("setActiveItemId", e);
        },
        setQuery: function (e) {
          t.dispatch("setQuery", e);
        },
        setCollections: function (e) {
          var n = 0, r = e.map(function (e) {
            return L(L({}, e), {}, {
              items: d(e.items).map(function (e) {
                return L(L({}, e), {}, {
                  __autocomplete_id: n++
                });
              })
            });
          });
          t.dispatch("setCollections", r);
        },
        setIsOpen: function (e) {
          t.dispatch("setIsOpen", e);
        },
        setStatus: function (e) {
          t.dispatch("setStatus", e);
        },
        setContext: function (e) {
          t.dispatch("setContext", e);
        }
      };
    })({
      store: r
    }), i = Ee(Be({
      props: n,
      refresh: u,
      store: r
    }, o));
    function u() {
      return fe(Be({
        event: new Event("input"),
        nextState: {
          isOpen: r.getState().isOpen
        },
        props: n,
        query: r.getState().query,
        refresh: u,
        store: r
      }, o));
    }
    return (n.plugins.forEach(function (e) {
      var n;
      return null === (n = e.subscribe) || void 0 === n ? void 0 : n.call(e, Be(Be({}, o), {}, {
        refresh: u,
        onSelect: function (e) {
          t.push({
            onSelect: e
          });
        },
        onActive: function (e) {
          t.push({
            onActive: e
          });
        }
      }));
    }), (function (e) {
      var t, n = e.metadata, r = e.environment;
      if (null === (t = r.navigator) || void 0 === t ? void 0 : t.userAgent.includes("Algolia Crawler")) {
        var o = r.document.createElement("meta"), i = r.document.querySelector("head");
        (o.name = "algolia:metadata", setTimeout(function () {
          (o.content = JSON.stringify(n), i.appendChild(o));
        }, 0));
      }
    })({
      metadata: ke({
        plugins: n.plugins,
        options: e
      }),
      environment: n.environment
    }), Be(Be({
      refresh: u
    }, i), o));
  }
  var Ue = function (e, t, n, r) {
    var o;
    t[0] = 0;
    for (var i = 1; i < t.length; i++) {
      var u = t[i++], a = t[i] ? (t[0] |= u ? 1 : 2, n[t[i++]]) : t[++i];
      3 === u ? r[0] = a : 4 === u ? r[1] = Object.assign(r[1] || ({}), a) : 5 === u ? (r[1] = r[1] || ({}))[t[++i]] = a : 6 === u ? r[1][t[++i]] += a + "" : u ? (o = e.apply(a, Ue(e, a, n, ["", null])), r.push(o), a[0] ? t[0] |= 2 : (t[i - 2] = 0, t[i] = o)) : r.push(a);
    }
    return r;
  }, He = new Map();
  function Ve(e) {
    var t = He.get(this);
    return (t || (t = new Map(), He.set(this, t)), (t = Ue(this, t.get(e) || (t.set(e, t = (function (e) {
      for (var t, n, r = 1, o = "", i = "", u = [0], a = function (e) {
        (1 === r && (e || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? u.push(0, e, o) : 3 === r && (e || o) ? (u.push(3, e, o), r = 2) : 2 === r && "..." === o && e ? u.push(4, e, 0) : 2 === r && o && !e ? u.push(5, 0, !0, o) : r >= 5 && ((o || !e && 5 === r) && (u.push(r, 0, o, n), r = 6), e && (u.push(r, e, 0, n), r = 6)), o = "");
      }, c = 0; c < e.length; c++) {
        c && (1 === r && a(), a(c));
        for (var l = 0; l < e[c].length; l++) (t = e[c][l], 1 === r ? "<" === t ? (a(), u = [u], r = 3) : o += t : 4 === r ? "--" === o && ">" === t ? (r = 1, o = "") : o = t + o[0] : i ? t === i ? i = "" : o += t : '"' === t || "'" === t ? i = t : ">" === t ? (a(), r = 1) : r && ("=" === t ? (r = 5, n = o, o = "") : "/" === t && (r < 5 || ">" === e[c][l + 1]) ? (a(), 3 === r && (u = u[0]), r = u, (u = u[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (a(), r = 2) : o += t), 3 === r && "!--" === o && (r = 4, u = u[0]));
      }
      return (a(), u);
    })(e)), t), arguments, [])).length > 1 ? t : t[0]);
  }
  var We = function (e) {
    var t = e.environment, n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (n.setAttribute("class", "aa-ClearIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "18"), n.setAttribute("height", "18"), n.setAttribute("fill", "currentColor"));
    var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (r.setAttribute("d", "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"), n.appendChild(r), n);
  };
  function Qe(e, t) {
    if ("string" == typeof t) {
      var n = e.document.querySelector(t);
      return (("The element ").concat(JSON.stringify(t), " is not in the document."), n);
    }
    return t;
  }
  function $e() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce(function (e, t) {
      return (Object.keys(t).forEach(function (n) {
        var r = e[n], o = t[n];
        r !== o && (e[n] = [r, o].filter(Boolean).join(" "));
      }), e);
    }, {});
  }
  var ze = function (e) {
    return e && "object" === r(e) && "[object Object]" === Object.prototype.toString.call(e);
  };
  function Ge() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce(function (e, t) {
      return (Object.keys(t).forEach(function (n) {
        var r = e[n], o = t[n];
        Array.isArray(r) && Array.isArray(o) ? e[n] = r.concat.apply(r, c(o)) : ze(r) && ze(o) ? e[n] = Ge(r, o) : e[n] = o;
      }), e);
    }, {});
  }
  function Ke(e, t) {
    return Object.entries(e).reduce(function (e, r) {
      var i = a(r, 2), u = i[0], c = i[1];
      return t({
        key: u,
        value: c
      }) ? n(n({}, e), {}, o({}, u, c)) : e;
    }, {});
  }
  var Je = ["ontouchstart", "ontouchend", "ontouchmove", "ontouchcancel"];
  function Ye(e, t, n) {
    e[t] = null === n ? "" : "number" != typeof n ? n : n + "px";
  }
  function Xe(e) {
    this._listeners[e.type](e);
  }
  function Ze(e, t, n) {
    var r, o, i = e[t];
    if ("style" === t) if ("string" == typeof n) e.style = n; else if (null === n) e.style = ""; else for (t in n) i && n[t] === i[t] || Ye(e.style, t, n[t]); else "o" === t[0] && "n" === t[1] ? (r = t !== (t = t.replace(/Capture$/, "")), (((o = t.toLowerCase()) in e) || Je.includes(o)) && (t = o), t = t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t] = n, n ? i || e.addEventListener(t, Xe, r) : e.removeEventListener(t, Xe, r)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && (t in e) ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (null == n || !1 === n && !(/^ar/).test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
  }
  function et(e) {
    return "onChange" === e ? "onInput" : e;
  }
  function tt(e, t) {
    for (var n in t) Ze(e, et(n), t[n]);
  }
  function nt(e, t) {
    for (var n in t) "o" === n[0] && "n" === n[1] || Ze(e, et(n), t[n]);
  }
  var rt = ["children"];
  function ot(e) {
    return function (t, n) {
      var r = n.children, o = void 0 === r ? [] : r, i = u(n, rt), a = e.document.createElement(t);
      return (tt(a, i), a.append.apply(a, c(o)), a);
    };
  }
  var it = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "isDetached", "state"], ut = function (e) {
    var t = e.environment.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return (t.setAttribute("class", "aa-LoadingIcon"), t.setAttribute("viewBox", "0 0 100 100"), t.setAttribute("width", "20"), t.setAttribute("height", "20"), t.innerHTML = '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>', t);
  }, at = function (e) {
    var t = e.environment, n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (n.setAttribute("class", "aa-SubmitIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "20"), n.setAttribute("height", "20"), n.setAttribute("fill", "currentColor"));
    var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (r.setAttribute("d", "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"), n.appendChild(r), n);
  };
  function ct(e) {
    var t = e.autocomplete, r = e.autocompleteScopeApi, o = e.classNames, i = e.environment, a = e.isDetached, c = e.placeholder, l = void 0 === c ? "Search" : c, s = e.propGetters, p = e.setIsModalOpen, f = e.state, d = e.translations, m = ot(i), v = s.getRootProps(n({
      state: f,
      props: t.getRootProps({})
    }, r)), h = m("div", n({
      class: o.root
    }, v)), g = m("div", {
      class: o.detachedContainer,
      onMouseDown: function (e) {
        e.stopPropagation();
      }
    }), y = m("div", {
      class: o.detachedOverlay,
      children: [g],
      onMouseDown: function () {
        (p(!1), t.setIsOpen(!1));
      }
    }), b = s.getLabelProps(n({
      state: f,
      props: t.getLabelProps({})
    }, r)), O = m("button", {
      class: o.submitButton,
      type: "submit",
      title: d.submitButtonTitle,
      children: [at({
        environment: i
      })]
    }), _ = m("label", n({
      class: o.label,
      children: [O]
    }, b)), P = m("button", {
      class: o.clearButton,
      type: "reset",
      title: d.clearButtonTitle,
      children: [We({
        environment: i
      })]
    }), j = m("div", {
      class: o.loadingIndicator,
      children: [ut({
        environment: i
      })]
    }), w = (function (e) {
      var t = e.autocompleteScopeApi, r = e.environment;
      e.classNames;
      var o = e.getInputProps, i = e.getInputPropsCore, a = e.isDetached, c = e.state, l = u(e, it), s = ot(r)("input", l), p = o(n({
        state: c,
        props: i({
          inputElement: s
        }),
        inputElement: s
      }, t));
      return (tt(s, n(n({}, p), {}, {
        onKeyDown: function (e) {
          a && "Tab" === e.key || p.onKeyDown(e);
        }
      })), s);
    })({
      class: o.input,
      environment: i,
      state: f,
      getInputProps: s.getInputProps,
      getInputPropsCore: t.getInputProps,
      autocompleteScopeApi: r,
      isDetached: a
    }), S = m("div", {
      class: o.inputWrapperPrefix,
      children: [_, j]
    }), I = m("div", {
      class: o.inputWrapperSuffix,
      children: [P]
    }), E = m("div", {
      class: o.inputWrapper,
      children: [w]
    }), A = s.getFormProps(n({
      state: f,
      props: t.getFormProps({
        inputElement: w
      })
    }, r)), C = m("form", n({
      class: o.form,
      children: [S, E, I]
    }, A)), D = s.getPanelProps(n({
      state: f,
      props: t.getPanelProps({})
    }, r)), k = m("div", n({
      class: o.panel
    }, D));
    if (a) {
      var x = m("div", {
        class: o.detachedSearchButtonIcon,
        children: [at({
          environment: i
        })]
      }), N = m("div", {
        class: o.detachedSearchButtonPlaceholder,
        textContent: l
      }), q = m("button", {
        type: "button",
        class: o.detachedSearchButton,
        onClick: function () {
          p(!0);
        },
        children: [x, N]
      }), R = m("button", {
        type: "button",
        class: o.detachedCancelButton,
        textContent: d.detachedCancelButtonText,
        onTouchStart: function (e) {
          e.stopPropagation();
        },
        onClick: function () {
          (t.setIsOpen(!1), p(!1));
        }
      }), T = m("div", {
        class: o.detachedFormContainer,
        children: [C, R]
      });
      (g.appendChild(T), h.appendChild(q));
    } else h.appendChild(C);
    return {
      detachedContainer: g,
      detachedOverlay: y,
      inputWrapper: E,
      input: w,
      root: h,
      form: C,
      label: _,
      submitButton: O,
      clearButton: P,
      loadingIndicator: j,
      panel: k
    };
  }
  var lt, st, pt, ft, dt, mt, vt = {}, ht = [], gt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function yt(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function bt(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function Ot(e, t, n) {
    var r, o, i, u = {};
    for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : u[i] = t[i];
    if ((arguments.length > 2 && (u.children = arguments.length > 3 ? lt.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === u[i] && (u[i] = e.defaultProps[i]);
    return _t(e, u, r, o, null);
  }
  function _t(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++pt : o
    };
    return (null == o && null != st.vnode && st.vnode(i), i);
  }
  function Pt(e) {
    return e.children;
  }
  function jt(e, t) {
    (this.props = e, this.context = t);
  }
  function wt(e, t) {
    if (null == t) return e.__ ? wt(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? wt(e) : null;
  }
  function St(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for ((e.__e = e.__c.base = null, t = 0); t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
      return St(e);
    }
  }
  function It(e) {
    (!e.__d && (e.__d = !0) && ft.push(e) && !Et.__r++ || mt !== st.debounceRendering) && ((mt = st.debounceRendering) || dt)(Et);
  }
  function Et() {
    for (var e; Et.__r = ft.length; ) (e = ft.sort(function (e, t) {
      return e.__v.__b - t.__v.__b;
    }), ft = [], e.some(function (e) {
      var t, n, r, o, i, u;
      e.__d && (i = (o = (t = e).__v).__e, (u = t.__P) && (n = [], (r = yt({}, o)).__v = o.__v + 1, Rt(u, o, r, t.__n, void 0 !== u.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? wt(o) : i, o.__h), Tt(n, o), o.__e != i && St(o)));
    }));
  }
  function At(e, t, n, r, o, i, u, a, c, l) {
    var s, p, f, d, m, v, h, g = r && r.__k || ht, y = g.length;
    for ((n.__k = [], s = 0); s < t.length; s++) if (null != (d = n.__k[s] = null == (d = t[s]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? _t(null, d, null, null, d) : Array.isArray(d) ? _t(Pt, {
      children: d
    }, null, null, null) : d.__b > 0 ? _t(d.type, d.props, d.key, null, d.__v) : d)) {
      if ((d.__ = n, d.__b = n.__b + 1, null === (f = g[s]) || f && d.key == f.key && d.type === f.type)) g[s] = void 0; else for (p = 0; p < y; p++) {
        if ((f = g[p]) && d.key == f.key && d.type === f.type) {
          g[p] = void 0;
          break;
        }
        f = null;
      }
      (Rt(e, d, f = f || vt, o, i, u, a, c, l), m = d.__e, (p = d.ref) && f.ref != p && (h || (h = []), f.ref && h.push(f.ref, null, d), h.push(p, d.__c || m, d)), null != m ? (null == v && (v = m), "function" == typeof d.type && d.__k === f.__k ? d.__d = c = Ct(d, c, e) : c = Dt(e, d, f, g, m, c), "function" == typeof n.type && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = wt(f)));
    }
    for ((n.__e = v, s = y); s--; ) null != g[s] && ("function" == typeof n.type && null != g[s].__e && g[s].__e == n.__d && (n.__d = wt(r, s + 1)), Ft(g[s], g[s]));
    if (h) for (s = 0; s < h.length; s++) Bt(h[s], h[++s], h[++s]);
  }
  function Ct(e, t, n) {
    for (var r, o = e.__k, i = 0; o && i < o.length; i++) (r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? Ct(r, t, n) : Dt(n, r, r, o, r.__e, t));
    return t;
  }
  function Dt(e, t, n, r, o, i) {
    var u, a, c;
    if (void 0 !== t.__d) (u = t.__d, t.__d = void 0); else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) (e.appendChild(o), u = null); else {
      for ((a = i, c = 0); (a = a.nextSibling) && c < r.length; c += 2) if (a == o) break e;
      (e.insertBefore(o, i), u = i);
    }
    return void 0 !== u ? u : o.nextSibling;
  }
  function kt(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || gt.test(t) ? n : n + "px";
  }
  function xt(e, t, n, r, o) {
    var i;
    e: if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
      if (("string" == typeof r && (e.style.cssText = r = ""), r)) for (t in r) n && (t in n) || kt(e.style, t, "");
      if (n) for (t in n) r && n[t] === r[t] || kt(e.style, t, n[t]);
    } else if ("o" === t[0] && "n" === t[1]) (i = t !== (t = t.replace(/Capture$/, "")), t = (t.toLowerCase() in e) ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? qt : Nt, i) : e.removeEventListener(t, i ? qt : Nt, i)); else if ("dangerouslySetInnerHTML" !== t) {
      if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s"); else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && (t in e)) try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (e) {}
      "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
  }
  function Nt(e) {
    this.l[e.type + !1](st.event ? st.event(e) : e);
  }
  function qt(e) {
    this.l[e.type + !0](st.event ? st.event(e) : e);
  }
  function Rt(e, t, n, r, o, i, u, a, c) {
    var l, s, p, f, d, m, v, h, g, y, b, O = t.type;
    if (void 0 !== t.constructor) return null;
    (null != n.__h && (c = n.__h, a = t.__e = n.__e, t.__h = null, i = [a]), (l = st.__b) && l(t));
    try {
      e: if ("function" == typeof O) {
        if ((h = t.props, g = (l = O.contextType) && r[l.__c], y = l ? g ? g.props.value : l.__ : r, n.__c ? v = (s = t.__c = n.__c).__ = s.__E : (("prototype" in O) && O.prototype.render ? t.__c = s = new O(h, y) : (t.__c = s = new jt(h, y), s.constructor = O, s.render = Mt), g && g.sub(s), s.props = h, s.state || (s.state = {}), s.context = y, s.__n = r, p = s.__d = !0, s.__h = []), null == s.__s && (s.__s = s.state), null != O.getDerivedStateFromProps && (s.__s == s.state && (s.__s = yt({}, s.__s)), yt(s.__s, O.getDerivedStateFromProps(h, s.__s))), f = s.props, d = s.state, p)) (null == O.getDerivedStateFromProps && null != s.componentWillMount && s.componentWillMount(), null != s.componentDidMount && s.__h.push(s.componentDidMount)); else {
          if ((null == O.getDerivedStateFromProps && h !== f && null != s.componentWillReceiveProps && s.componentWillReceiveProps(h, y), !s.__e && null != s.shouldComponentUpdate && !1 === s.shouldComponentUpdate(h, s.__s, y) || t.__v === n.__v)) {
            (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function (e) {
              e && (e.__ = t);
            }), s.__h.length && u.push(s));
            break e;
          }
          (null != s.componentWillUpdate && s.componentWillUpdate(h, s.__s, y), null != s.componentDidUpdate && s.__h.push(function () {
            s.componentDidUpdate(f, d, m);
          }));
        }
        (s.context = y, s.props = h, s.state = s.__s, (l = st.__r) && l(t), s.__d = !1, s.__v = t, s.__P = e, l = s.render(s.props, s.state, s.context), s.state = s.__s, null != s.getChildContext && (r = yt(yt({}, r), s.getChildContext())), p || null == s.getSnapshotBeforeUpdate || (m = s.getSnapshotBeforeUpdate(f, d)), b = null != l && l.type === Pt && null == l.key ? l.props.children : l, At(e, Array.isArray(b) ? b : [b], t, n, r, o, i, u, a, c), s.base = t.__e, t.__h = null, s.__h.length && u.push(s), v && (s.__E = s.__ = null), s.__e = !1);
      } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Lt(n.__e, t, n, r, o, i, u, c);
      (l = st.diffed) && l(t);
    } catch (e) {
      (t.__v = null, (c || null != i) && (t.__e = a, t.__h = !!c, i[i.indexOf(a)] = null), st.__e(e, t, n));
    }
  }
  function Tt(e, t) {
    (st.__c && st.__c(t, e), e.some(function (t) {
      try {
        (e = t.__h, t.__h = [], e.some(function (e) {
          e.call(t);
        }));
      } catch (e) {
        st.__e(e, t.__v);
      }
    }));
  }
  function Lt(e, t, n, r, o, i, u, a) {
    var c, l, s, p = n.props, f = t.props, d = t.type, m = 0;
    if (("svg" === d && (o = !0), null != i)) for (; m < i.length; m++) if ((c = i[m]) && ("setAttribute" in c) == !!d && (d ? c.localName === d : 3 === c.nodeType)) {
      (e = c, i[m] = null);
      break;
    }
    if (null == e) {
      if (null === d) return document.createTextNode(f);
      (e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), i = null, a = !1);
    }
    if (null === d) p === f || a && e.data === f || (e.data = f); else {
      if ((i = i && lt.call(e.childNodes), l = (p = n.props || vt).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a)) {
        if (null != i) for ((p = {}, m = 0); m < e.attributes.length; m++) p[e.attributes[m].name] = e.attributes[m].value;
        (s || l) && (s && (l && s.__html == l.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
      }
      if (((function (e, t, n, r, o) {
        var i;
        for (i in n) "children" === i || "key" === i || (i in t) || xt(e, i, null, n[i], r);
        for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || xt(e, i, t[i], n[i], r);
      })(e, f, p, o, a), s)) t.__k = []; else if ((m = t.props.children, At(e, Array.isArray(m) ? m : [m], t, n, r, o && "foreignObject" !== d, i, u, i ? i[0] : n.__k && wt(n, 0), a), null != i)) for (m = i.length; m--; ) null != i[m] && bt(i[m]);
      a || (("value" in f) && void 0 !== (m = f.value) && (m !== p.value || m !== e.value || "progress" === d && !m) && xt(e, "value", m, p.value, !1), ("checked" in f) && void 0 !== (m = f.checked) && m !== e.checked && xt(e, "checked", m, p.checked, !1));
    }
    return e;
  }
  function Bt(e, t, n) {
    try {
      "function" == typeof e ? e(t) : e.current = t;
    } catch (e) {
      st.__e(e, n);
    }
  }
  function Ft(e, t, n) {
    var r, o;
    if ((st.unmount && st.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Bt(r, null, t)), null != (r = e.__c))) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount();
      } catch (e) {
        st.__e(e, t);
      }
      r.base = r.__P = null;
    }
    if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Ft(r[o], t, "function" != typeof e.type);
    (n || null == e.__e || bt(e.__e), e.__e = e.__d = void 0);
  }
  function Mt(e, t, n) {
    return this.constructor(e, n);
  }
  (lt = ht.slice, st = {
    __e: function (e, t) {
      for (var n, r, o; t = t.__; ) if ((n = t.__c) && !n.__) try {
        if (((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o)) return n.__E = n;
      } catch (t) {
        e = t;
      }
      throw e;
    }
  }, pt = 0, jt.prototype.setState = function (e, t) {
    var n;
    (n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = yt({}, this.state), "function" == typeof e && (e = e(yt({}, n), this.props)), e && yt(n, e), null != e && this.__v && (t && this.__h.push(t), It(this)));
  }, jt.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), It(this));
  }, jt.prototype.render = Pt, ft = [], dt = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Et.__r = 0);
  var Ut = "__aa-highlight__", Ht = "__/aa-highlight__";
  function Vt(e) {
    var t = e.highlightedValue.split(Ut), n = t.shift(), r = (function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return {
        get: function () {
          return e;
        },
        add: function (t) {
          var n = e[e.length - 1];
          (null == n ? void 0 : n.isHighlighted) === t.isHighlighted ? e[e.length - 1] = {
            value: n.value + t.value,
            isHighlighted: n.isHighlighted
          } : e.push(t);
        }
      };
    })(n ? [{
      value: n,
      isHighlighted: !1
    }] : []);
    return (t.forEach(function (e) {
      var t = e.split(Ht);
      (r.add({
        value: t[0],
        isHighlighted: !0
      }), "" !== t[1] && r.add({
        value: t[1],
        isHighlighted: !1
      }));
    }), r.get());
  }
  function Wt(e) {
    return (function (e) {
      if (Array.isArray(e)) return Qt(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Qt(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return Qt(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Qt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function $t(e) {
    var t = e.hit, n = e.attribute, r = Array.isArray(n) ? n : [n], o = h(t, ["_highlightResult"].concat(Wt(r), ["value"]));
    return ("string" != typeof o && (o = h(t, r) || ""), Vt({
      highlightedValue: o
    }));
  }
  var zt = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  }, Gt = new RegExp(/\w/i), Kt = /&(amp|quot|lt|gt|#39);/g, Jt = RegExp(Kt.source);
  function Yt(e, t) {
    var n, r, o, i = e[t], u = (null === (n = e[t + 1]) || void 0 === n ? void 0 : n.isHighlighted) || !0, a = (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.isHighlighted) || !0;
    return Gt.test((o = i.value) && Jt.test(o) ? o.replace(Kt, function (e) {
      return zt[e];
    }) : o) || a !== u ? i.isHighlighted : a;
  }
  function Xt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Zt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Xt(Object(n), !0).forEach(function (t) {
        en(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xt(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function en(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function tn(e) {
    return e.some(function (e) {
      return e.isHighlighted;
    }) ? e.map(function (t, n) {
      return Zt(Zt({}, t), {}, {
        isHighlighted: !Yt(e, n)
      });
    }) : e.map(function (e) {
      return Zt(Zt({}, e), {}, {
        isHighlighted: !1
      });
    });
  }
  function nn(e) {
    return (function (e) {
      if (Array.isArray(e)) return rn(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return rn(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return rn(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function rn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function on(e) {
    var t = e.hit, n = e.attribute, r = Array.isArray(n) ? n : [n], o = h(t, ["_snippetResult"].concat(nn(r), ["value"]));
    return ("string" != typeof o && (o = h(t, r) || ""), Vt({
      highlightedValue: o
    }));
  }
  function un(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function an(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? un(Object(n), !0).forEach(function (t) {
        cn(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : un(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function cn(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  var ln = ["params"];
  function sn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function pn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? sn(Object(n), !0).forEach(function (t) {
        fn(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sn(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function fn(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function dn(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function mn(e) {
    return (function (e) {
      if (Array.isArray(e)) return vn(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return vn(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return vn(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function vn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function hn(e) {
    var t = e.createElement, n = e.Fragment;
    function r(e) {
      var r = e.hit, o = e.attribute, i = e.tagName, u = void 0 === i ? "mark" : i;
      return t(n, {}, $t({
        hit: r,
        attribute: o
      }).map(function (e, n) {
        return e.isHighlighted ? t(u, {
          key: n
        }, e.value) : e.value;
      }));
    }
    return (r.__autocomplete_componentName = "Highlight", r);
  }
  function gn(e) {
    var t = e.createElement, n = e.Fragment;
    function r(e) {
      var r, o = e.hit, i = e.attribute, u = e.tagName, a = void 0 === u ? "mark" : u;
      return t(n, {}, (r = {
        hit: o,
        attribute: i
      }, tn($t(r))).map(function (e, n) {
        return e.isHighlighted ? t(a, {
          key: n
        }, e.value) : e.value;
      }));
    }
    return (r.__autocomplete_componentName = "ReverseHighlight", r);
  }
  function yn(e) {
    var t = e.createElement, n = e.Fragment;
    function r(e) {
      var r, o = e.hit, i = e.attribute, u = e.tagName, a = void 0 === u ? "mark" : u;
      return t(n, {}, (r = {
        hit: o,
        attribute: i
      }, tn(on(r))).map(function (e, n) {
        return e.isHighlighted ? t(a, {
          key: n
        }, e.value) : e.value;
      }));
    }
    return (r.__autocomplete_componentName = "ReverseSnippet", r);
  }
  function bn(e) {
    var t = e.createElement, n = e.Fragment;
    function r(e) {
      var r = e.hit, o = e.attribute, i = e.tagName, u = void 0 === i ? "mark" : i;
      return t(n, {}, on({
        hit: r,
        attribute: o
      }).map(function (e, n) {
        return e.isHighlighted ? t(u, {
          key: n
        }, e.value) : e.value;
      }));
    }
    return (r.__autocomplete_componentName = "Snippet", r);
  }
  var On = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"], _n = {
    clearButton: "aa-ClearButton",
    detachedCancelButton: "aa-DetachedCancelButton",
    detachedContainer: "aa-DetachedContainer",
    detachedFormContainer: "aa-DetachedFormContainer",
    detachedOverlay: "aa-DetachedOverlay",
    detachedSearchButton: "aa-DetachedSearchButton",
    detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
    detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
    form: "aa-Form",
    input: "aa-Input",
    inputWrapper: "aa-InputWrapper",
    inputWrapperPrefix: "aa-InputWrapperPrefix",
    inputWrapperSuffix: "aa-InputWrapperSuffix",
    item: "aa-Item",
    label: "aa-Label",
    list: "aa-List",
    loadingIndicator: "aa-LoadingIndicator",
    panel: "aa-Panel",
    panelLayout: "aa-PanelLayout aa-Panel--scrollable",
    root: "aa-Autocomplete",
    source: "aa-Source",
    sourceFooter: "aa-SourceFooter",
    sourceHeader: "aa-SourceHeader",
    sourceNoResults: "aa-SourceNoResults",
    submitButton: "aa-SubmitButton"
  }, Pn = function (e, t) {
    var n = e.children;
    (0, e.render)(n, t);
  }, jn = {
    createElement: Ot,
    Fragment: Pt,
    render: function (e, t, n) {
      var r, o, i;
      (st.__ && st.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, i = [], Rt(t, e = (!r && n || t).__k = Ot(Pt, null, [e]), o || vt, vt, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? lt.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), Tt(i, e));
    }
  };
  function wn(e) {
    var t = e.panelPlacement, n = e.container, r = e.form, o = e.environment, i = n.getBoundingClientRect(), u = (o.pageYOffset || o.document.documentElement.scrollTop || o.document.body.scrollTop || 0) + i.top + i.height;
    switch (t) {
      case "start":
        return {
          top: u,
          left: i.left
        };
      case "end":
        return {
          top: u,
          right: o.document.documentElement.clientWidth - (i.left + i.width)
        };
      case "full-width":
        return {
          top: u,
          left: 0,
          right: 0,
          width: "unset",
          maxWidth: "unset"
        };
      case "input-wrapper-width":
        var a = r.getBoundingClientRect();
        return {
          top: u,
          left: a.left,
          right: o.document.documentElement.clientWidth - (a.left + a.width),
          width: "unset",
          maxWidth: "unset"
        };
      default:
        throw new Error(("[Autocomplete] The `panelPlacement` value ").concat(JSON.stringify(t), " is not valid."));
    }
  }
  var Sn = [{
    segment: "autocomplete-js",
    version: b
  }], In = ["components"];
  var En = (function (e, t) {
    function n(t) {
      return e({
        searchClient: t.searchClient,
        queries: t.requests.map(function (e) {
          return e.query;
        })
      }).then(function (e) {
        return e.map(function (e, n) {
          var r = t.requests[n];
          return {
            items: e,
            sourceId: r.sourceId,
            transformResponse: r.transformResponse
          };
        });
      });
    }
    return function (e) {
      return function (r) {
        return an(an({
          requesterId: t,
          execute: n
        }, e), r);
      };
    };
  })(function (e) {
    return (function (e) {
      var t = e.searchClient, n = e.queries, r = e.userAgents, o = void 0 === r ? [] : r;
      return ("function" == typeof t.addAlgoliaAgent && [].concat(mn(O), mn(o)).forEach(function (e) {
        var n = e.segment, r = e.version;
        t.addAlgoliaAgent(n, r);
      }), t.search(n.map(function (e) {
        var t = e.params;
        return pn(pn({}, dn(e, ln)), {}, {
          params: pn({
            hitsPerPage: 5,
            highlightPreTag: Ut,
            highlightPostTag: Ht
          }, t)
        });
      })).then(function (e) {
        return e.results;
      }));
    })(n(n({}, e), {}, {
      userAgents: Sn
    }));
  }, "algolia");
  var An = En({
    transformResponse: function (e) {
      return e.hits;
    }
  });
  (e.autocomplete = function (e) {
    var t, r = (function () {
      var e = [], t = [];
      function n(n) {
        e.push(n);
        var r = n();
        t.push(r);
      }
      return {
        runEffect: n,
        cleanupEffects: function () {
          var e = t;
          (t = [], e.forEach(function (e) {
            e();
          }));
        },
        runEffects: function () {
          var t = e;
          (e = [], t.forEach(function (e) {
            n(e);
          }));
        }
      };
    })(), a = r.runEffect, c = r.cleanupEffects, l = r.runEffects, s = (t = [], {
      reactive: function (e) {
        var n = e(), r = {
          _fn: e,
          _ref: {
            current: n
          },
          get value() {
            return this._ref.current;
          },
          set value(e) {
            this._ref.current = e;
          }
        };
        return (t.push(r), r);
      },
      runReactives: function () {
        t.forEach(function (e) {
          e._ref.current = e._fn();
        });
      }
    }), d = s.reactive, m = s.runReactives, h = p(!1), y = p(e), b = p(void 0), O = d(function () {
      return (function (e) {
        var t, r = e.classNames, o = e.container, i = e.getEnvironmentProps, a = e.getFormProps, c = e.getInputProps, l = e.getItemProps, s = e.getLabelProps, p = e.getListProps, f = e.getPanelProps, d = e.getRootProps, m = e.panelContainer, h = e.panelPlacement, g = e.render, y = e.renderNoResults, b = e.renderer, O = e.detachedMediaQuery, _ = e.components, P = e.translations, j = u(e, On), w = "undefined" != typeof window ? window : {}, S = Qe(w, o);
        S.tagName;
        var I = n(n({}, jn), b), E = {
          Highlight: hn(I),
          ReverseHighlight: gn(I),
          ReverseSnippet: yn(I),
          Snippet: bn(I)
        };
        return {
          renderer: {
            classNames: $e(_n, null != r ? r : {}),
            container: S,
            getEnvironmentProps: null != i ? i : function (e) {
              return e.props;
            },
            getFormProps: null != a ? a : function (e) {
              return e.props;
            },
            getInputProps: null != c ? c : function (e) {
              return e.props;
            },
            getItemProps: null != l ? l : function (e) {
              return e.props;
            },
            getLabelProps: null != s ? s : function (e) {
              return e.props;
            },
            getListProps: null != p ? p : function (e) {
              return e.props;
            },
            getPanelProps: null != f ? f : function (e) {
              return e.props;
            },
            getRootProps: null != d ? d : function (e) {
              return e.props;
            },
            panelContainer: m ? Qe(w, m) : w.document.body,
            panelPlacement: null != h ? h : "input-wrapper-width",
            render: null != g ? g : Pn,
            renderNoResults: y,
            renderer: I,
            detachedMediaQuery: null != O ? O : getComputedStyle(w.document.documentElement).getPropertyValue("--aa-detached-media-query"),
            components: n(n({}, E), _),
            translations: n(n({}, {
              clearButtonTitle: "Clear",
              detachedCancelButtonText: "Cancel",
              submitButtonTitle: "Submit"
            }), P)
          },
          core: n(n({}, j), {}, {
            id: null !== (t = j.id) && void 0 !== t ? t : v(),
            environment: w
          })
        };
      })(y.current);
    }), _ = d(function () {
      return O.value.core.environment.matchMedia(O.value.renderer.detachedMediaQuery).matches;
    }), P = d(function () {
      return Me(n(n({}, O.value.core), {}, {
        onStateChange: function (e) {
          var t, n, r;
          (h.current = e.state.collections.some(function (e) {
            return e.source.templates.noResults;
          }), null === (t = b.current) || void 0 === t || t.call(b, e), null === (n = (r = O.value.core).onStateChange) || void 0 === n || n.call(r, e));
        },
        shouldPanelOpen: y.current.shouldPanelOpen || (function (e) {
          var t = e.state;
          if (_.value) return !0;
          var n = g(t) > 0;
          if (!O.value.core.openOnFocus && !t.query) return n;
          var r = Boolean(h.current || O.value.renderer.renderNoResults);
          return !n && r || n;
        }),
        __autocomplete_metadata: {
          userAgents: Sn,
          options: e
        }
      }));
    }), j = p(n({
      collections: [],
      completion: null,
      context: {},
      isOpen: !1,
      query: "",
      activeItemId: null,
      status: "idle"
    }, O.value.core.initialState)), w = {
      getEnvironmentProps: O.value.renderer.getEnvironmentProps,
      getFormProps: O.value.renderer.getFormProps,
      getInputProps: O.value.renderer.getInputProps,
      getItemProps: O.value.renderer.getItemProps,
      getLabelProps: O.value.renderer.getLabelProps,
      getListProps: O.value.renderer.getListProps,
      getPanelProps: O.value.renderer.getPanelProps,
      getRootProps: O.value.renderer.getRootProps
    }, S = {
      setActiveItemId: P.value.setActiveItemId,
      setQuery: P.value.setQuery,
      setCollections: P.value.setCollections,
      setIsOpen: P.value.setIsOpen,
      setStatus: P.value.setStatus,
      setContext: P.value.setContext,
      refresh: P.value.refresh
    }, I = d(function () {
      return Ve.bind(O.value.renderer.renderer.createElement);
    }), E = d(function () {
      return ct({
        autocomplete: P.value,
        autocompleteScopeApi: S,
        classNames: O.value.renderer.classNames,
        environment: O.value.core.environment,
        isDetached: _.value,
        placeholder: O.value.core.placeholder,
        propGetters: w,
        setIsModalOpen: k,
        state: j.current,
        translations: O.value.renderer.translations
      });
    });
    function A() {
      tt(E.value.panel, {
        style: _.value ? {} : wn({
          panelPlacement: O.value.renderer.panelPlacement,
          container: E.value.root,
          form: E.value.form,
          environment: O.value.core.environment
        })
      });
    }
    function C(e) {
      j.current = e;
      var t = {
        autocomplete: P.value,
        autocompleteScopeApi: S,
        classNames: O.value.renderer.classNames,
        components: O.value.renderer.components,
        container: O.value.renderer.container,
        html: I.value,
        dom: E.value,
        panelContainer: _.value ? E.value.detachedContainer : O.value.renderer.panelContainer,
        propGetters: w,
        state: j.current,
        renderer: O.value.renderer.renderer
      }, r = !g(e) && !h.current && O.value.renderer.renderNoResults || O.value.renderer.render;
      (!(function (e) {
        var t = e.autocomplete, r = e.autocompleteScopeApi, o = e.dom, i = e.propGetters, u = e.state;
        (nt(o.root, i.getRootProps(n({
          state: u,
          props: t.getRootProps({})
        }, r))), nt(o.input, i.getInputProps(n({
          state: u,
          props: t.getInputProps({
            inputElement: o.input
          }),
          inputElement: o.input
        }, r))), tt(o.label, {
          hidden: "stalled" === u.status
        }), tt(o.loadingIndicator, {
          hidden: "stalled" !== u.status
        }), tt(o.clearButton, {
          hidden: !u.query
        }));
      })(t), (function (e, t) {
        var r = t.autocomplete, o = t.autocompleteScopeApi, u = t.classNames, a = t.html, c = t.dom, l = t.panelContainer, s = t.propGetters, p = t.state, f = t.components, d = t.renderer;
        if (p.isOpen) {
          (l.contains(c.panel) || "loading" === p.status || l.appendChild(c.panel), c.panel.classList.toggle("aa-Panel--stalled", "stalled" === p.status));
          var m = p.collections.filter(function (e) {
            var t = e.source, n = e.items;
            return t.templates.noResults || n.length > 0;
          }).map(function (e, t) {
            var c = e.source, l = e.items;
            return d.createElement("section", {
              key: t,
              className: u.source,
              "data-autocomplete-source-id": c.sourceId
            }, c.templates.header && d.createElement("div", {
              className: u.sourceHeader
            }, c.templates.header({
              components: f,
              createElement: d.createElement,
              Fragment: d.Fragment,
              items: l,
              source: c,
              state: p,
              html: a
            })), c.templates.noResults && 0 === l.length ? d.createElement("div", {
              className: u.sourceNoResults
            }, c.templates.noResults({
              components: f,
              createElement: d.createElement,
              Fragment: d.Fragment,
              source: c,
              state: p,
              html: a
            })) : d.createElement("ul", i({
              className: u.list
            }, s.getListProps(n({
              state: p,
              props: r.getListProps({})
            }, o))), l.map(function (e) {
              var t = r.getItemProps({
                item: e,
                source: c
              });
              return d.createElement("li", i({
                key: t.id,
                className: u.item
              }, s.getItemProps(n({
                state: p,
                props: t
              }, o))), c.templates.item({
                components: f,
                createElement: d.createElement,
                Fragment: d.Fragment,
                item: e,
                state: p,
                html: a
              }));
            })), c.templates.footer && d.createElement("div", {
              className: u.sourceFooter
            }, c.templates.footer({
              components: f,
              createElement: d.createElement,
              Fragment: d.Fragment,
              items: l,
              source: c,
              state: p,
              html: a
            })));
          }), v = d.createElement(d.Fragment, null, d.createElement("div", {
            className: u.panelLayout
          }, m), d.createElement("div", {
            className: "aa-GradientBottom"
          })), h = m.reduce(function (e, t) {
            return (e[t.props["data-autocomplete-source-id"]] = t, e);
          }, {});
          e(n(n({
            children: v,
            state: p,
            sections: m,
            elements: h
          }, d), {}, {
            components: f,
            html: a
          }, o), c.panel);
        } else l.contains(c.panel) && l.removeChild(c.panel);
      })(r, t));
    }
    function D() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      c();
      var t = O.value.renderer, n = t.components, r = u(t, In);
      (y.current = Ge(r, O.value.core, {
        components: Ke(n, function (e) {
          return !e.value.hasOwnProperty("__autocomplete_componentName");
        }),
        initialState: j.current
      }, e), m(), l(), P.value.refresh().then(function () {
        C(j.current);
      }));
    }
    function k(e) {
      requestAnimationFrame(function () {
        var t = O.value.core.environment.document.body.contains(E.value.detachedOverlay);
        e !== t && (e ? (O.value.core.environment.document.body.appendChild(E.value.detachedOverlay), O.value.core.environment.document.body.classList.add("aa-Detached"), E.value.input.focus()) : (O.value.core.environment.document.body.removeChild(E.value.detachedOverlay), O.value.core.environment.document.body.classList.remove("aa-Detached"), P.value.setQuery(""), P.value.refresh()));
      });
    }
    return (a(function () {
      var e = P.value.getEnvironmentProps({
        formElement: E.value.form,
        panelElement: E.value.panel,
        inputElement: E.value.input
      });
      return (tt(O.value.core.environment, e), function () {
        tt(O.value.core.environment, Object.keys(e).reduce(function (e, t) {
          return n(n({}, e), {}, o({}, t, void 0));
        }, {}));
      });
    }), a(function () {
      var e = _.value ? O.value.core.environment.document.body : O.value.renderer.panelContainer, t = _.value ? E.value.detachedOverlay : E.value.panel;
      return (_.value && j.current.isOpen && k(!0), C(j.current), function () {
        e.contains(t) && e.removeChild(t);
      });
    }), a(function () {
      var e = O.value.renderer.container;
      return (e.appendChild(E.value.root), function () {
        e.removeChild(E.value.root);
      });
    }), a(function () {
      var e = f(function (e) {
        C(e.state);
      }, 0);
      return (b.current = function (t) {
        var n = t.state, r = t.prevState;
        (_.value && r.isOpen !== n.isOpen && k(n.isOpen), _.value || !n.isOpen || r.isOpen || A(), n.query !== r.query) && O.value.core.environment.document.querySelectorAll(".aa-Panel--scrollable").forEach(function (e) {
          0 !== e.scrollTop && (e.scrollTop = 0);
        });
        e({
          state: n
        });
      }, function () {
        b.current = void 0;
      });
    }), a(function () {
      var e = f(function () {
        var e = _.value;
        (_.value = O.value.core.environment.matchMedia(O.value.renderer.detachedMediaQuery).matches, e !== _.value ? D({}) : requestAnimationFrame(A));
      }, 20);
      return (O.value.core.environment.addEventListener("resize", e), function () {
        O.value.core.environment.removeEventListener("resize", e);
      });
    }), a(function () {
      if (!_.value) return function () {};
      function e(e) {
        E.value.detachedContainer.classList.toggle("aa-DetachedContainer--modal", e);
      }
      function t(t) {
        e(t.matches);
      }
      var n = O.value.core.environment.matchMedia(getComputedStyle(O.value.core.environment.document.documentElement).getPropertyValue("--aa-detached-modal-media-query"));
      e(n.matches);
      var r = Boolean(n.addEventListener);
      return (r ? n.addEventListener("change", t) : n.addListener(t), function () {
        r ? n.removeEventListener("change", t) : n.removeListener(t);
      });
    }), a(function () {
      return (requestAnimationFrame(A), function () {});
    }), n(n({}, S), {}, {
      update: D,
      destroy: function () {
        c();
      }
    }));
  }, e.getAlgoliaFacets = function (e) {
    var t = En({
      transformResponse: function (e) {
        return e.facetHits;
      }
    }), r = e.queries.map(function (e) {
      return n(n({}, e), {}, {
        type: "facet"
      });
    });
    return t(n(n({}, e), {}, {
      queries: r
    }));
  }, e.getAlgoliaResults = An, Object.defineProperty(e, "__esModule", {
    value: !0
  }));
});

},{}],"1qech":[function(require,module,exports) {
var define;
/*! recommend.umd.js | 4.14.3 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self)["@algolia/recommend"] = t();
})(this, function () {
  "use strict";
  function e(e, t, r) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e);
  }
  function t(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n));
    }
    return r;
  }
  function r(r) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      n % 2 ? t(Object(o), !0).forEach(function (t) {
        e(r, t, o[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }
    return r;
  }
  function n(e, t) {
    return (function (e) {
      if (Array.isArray(e)) return e;
    })(e) || (function (e, t) {
      if (!((Symbol.iterator in Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var r = [], n = !0, o = !1, a = void 0;
      try {
        for (var u, i = e[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), !t || r.length !== t); n = !0) ;
      } catch (e) {
        (o = !0, a = e);
      } finally {
        try {
          n || null == i.return || i.return();
        } finally {
          if (o) throw a;
        }
      }
      return r;
    })(e, t) || (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    })();
  }
  function o(e) {
    return (function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
      }
    })(e) || (function (e) {
      if ((Symbol.iterator in Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    })();
  }
  function a(e) {
    var t, r = ("algoliasearch-client-js-").concat(e.key), o = function () {
      return (void 0 === t && (t = e.localStorage || window.localStorage), t);
    }, a = function () {
      return JSON.parse(o().getItem(r) || "{}");
    };
    return {
      get: function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        };
        return Promise.resolve().then(function () {
          var r = JSON.stringify(e), n = a()[r];
          return Promise.all([n || t(), void 0 !== n]);
        }).then(function (e) {
          var t = n(e, 2), o = t[0], a = t[1];
          return Promise.all([o, a || r.miss(o)]);
        }).then(function (e) {
          return n(e, 1)[0];
        });
      },
      set: function (e, t) {
        return Promise.resolve().then(function () {
          var n = a();
          return (n[JSON.stringify(e)] = t, o().setItem(r, JSON.stringify(n)), t);
        });
      },
      delete: function (e) {
        return Promise.resolve().then(function () {
          var t = a();
          (delete t[JSON.stringify(e)], o().setItem(r, JSON.stringify(t)));
        });
      },
      clear: function () {
        return Promise.resolve().then(function () {
          o().removeItem(r);
        });
      }
    };
  }
  function u(e) {
    var t = o(e.caches), r = t.shift();
    return void 0 === r ? {
      get: function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        }, o = t();
        return o.then(function (e) {
          return Promise.all([e, r.miss(e)]);
        }).then(function (e) {
          return n(e, 1)[0];
        });
      },
      set: function (e, t) {
        return Promise.resolve(t);
      },
      delete: function (e) {
        return Promise.resolve();
      },
      clear: function () {
        return Promise.resolve();
      }
    } : {
      get: function (e, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        };
        return r.get(e, n, o).catch(function () {
          return u({
            caches: t
          }).get(e, n, o);
        });
      },
      set: function (e, n) {
        return r.set(e, n).catch(function () {
          return u({
            caches: t
          }).set(e, n);
        });
      },
      delete: function (e) {
        return r.delete(e).catch(function () {
          return u({
            caches: t
          }).delete(e);
        });
      },
      clear: function () {
        return r.clear().catch(function () {
          return u({
            caches: t
          }).clear();
        });
      }
    };
  }
  function i() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      serializable: !0
    }, t = {};
    return {
      get: function (r, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        }, a = JSON.stringify(r);
        if ((a in t)) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
        var u = n(), i = o && o.miss || (function () {
          return Promise.resolve();
        });
        return u.then(function (e) {
          return i(e);
        }).then(function () {
          return u;
        });
      },
      set: function (r, n) {
        return (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n, Promise.resolve(n));
      },
      delete: function (e) {
        return (delete t[JSON.stringify(e)], Promise.resolve());
      },
      clear: function () {
        return (t = {}, Promise.resolve());
      }
    };
  }
  function s(e) {
    for (var t = e.length - 1; t > 0; t--) {
      var r = Math.floor(Math.random() * (t + 1)), n = e[t];
      (e[t] = e[r], e[r] = n);
    }
    return e;
  }
  var c = {
    WithinQueryParameters: 0,
    WithinHeaders: 1
  }, l = 1, f = 2, d = 3;
  function h(e, t) {
    var r = e || ({}), n = r.data || ({});
    return (Object.keys(r).forEach(function (e) {
      -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (n[e] = r[e]);
    }), {
      data: Object.entries(n).length > 0 ? n : void 0,
      timeout: r.timeout || t,
      headers: r.headers || ({}),
      queryParameters: r.queryParameters || ({}),
      cacheable: r.cacheable
    });
  }
  var m = {
    Read: 1,
    Write: 2,
    Any: 3
  }, p = 1, g = 2, v = 3;
  function y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
    return r(r({}, e), {}, {
      status: t,
      lastUpdate: Date.now()
    });
  }
  function b(e) {
    return "string" == typeof e ? {
      protocol: "https",
      url: e,
      accept: m.Any
    } : {
      protocol: e.protocol || "https",
      url: e.url,
      accept: e.accept || m.Any
    };
  }
  var P = "GET", O = "POST";
  function q(e, t) {
    return Promise.all(t.map(function (t) {
      return e.get(t, function () {
        return Promise.resolve(y(t));
      });
    })).then(function (e) {
      var r = e.filter(function (e) {
        return (function (e) {
          return e.status === p || Date.now() - e.lastUpdate > 12e4;
        })(e);
      }), n = e.filter(function (e) {
        return (function (e) {
          return e.status === v && Date.now() - e.lastUpdate <= 12e4;
        })(e);
      }), a = [].concat(o(r), o(n));
      return {
        getTimeout: function (e, t) {
          return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
        },
        statelessHosts: a.length > 0 ? a.map(function (e) {
          return b(e);
        }) : t
      };
    });
  }
  function S(e, t, n, a) {
    var u = [], i = (function (e, t) {
      if (e.method === P || void 0 === e.data && void 0 === t.data) return;
      var n = Array.isArray(e.data) ? e.data : r(r({}, e.data), t.data);
      return JSON.stringify(n);
    })(n, a), s = (function (e, t) {
      var n = r(r({}, e.headers), t.headers), o = {};
      return (Object.keys(n).forEach(function (e) {
        var t = n[e];
        o[e.toLowerCase()] = t;
      }), o);
    })(e, a), c = n.method, l = n.method !== P ? {} : r(r({}, n.data), a.data), f = r(r(r({
      "x-algolia-agent": e.userAgent.value
    }, e.queryParameters), l), a.queryParameters), d = 0, h = function t(r, o) {
      var l = r.pop();
      if (void 0 === l) throw {
        name: "RetryError",
        message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
        transporterStackTrace: T(u)
      };
      var h = {
        data: i,
        headers: s,
        method: c,
        url: w(l, n.path, f),
        connectTimeout: o(d, e.timeouts.connect),
        responseTimeout: o(d, a.timeout)
      }, m = function (e) {
        var t = {
          request: h,
          response: e,
          host: l,
          triesLeft: r.length
        };
        return (u.push(t), t);
      }, p = {
        onSuccess: function (e) {
          return (function (e) {
            try {
              return JSON.parse(e.content);
            } catch (t) {
              throw (function (e, t) {
                return {
                  name: "DeserializationError",
                  message: e,
                  response: t
                };
              })(t.message, e);
            }
          })(e);
        },
        onRetry: function (n) {
          var a = m(n);
          return (n.isTimedOut && d++, Promise.all([e.logger.info("Retryable failure", A(a)), e.hostsCache.set(l, y(l, n.isTimedOut ? v : g))]).then(function () {
            return t(r, o);
          }));
        },
        onFail: function (e) {
          throw (m(e), (function (e, t) {
            var r = e.content, n = e.status, o = r;
            try {
              o = JSON.parse(r).message;
            } catch (e) {}
            return (function (e, t, r) {
              return {
                name: "ApiError",
                message: e,
                status: t,
                transporterStackTrace: r
              };
            })(o, n, t);
          })(e, T(u)));
        }
      };
      return e.requester.send(h).then(function (e) {
        return (function (e, t) {
          return (function (e) {
            var t = e.status;
            return e.isTimedOut || (function (e) {
              var t = e.isTimedOut, r = e.status;
              return !t && 0 == ~~r;
            })(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100);
          })(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSuccess(e) : t.onFail(e);
        })(e, p);
      });
    };
    return q(e.hostsCache, t).then(function (e) {
      return h(o(e.statelessHosts).reverse(), e.getTimeout);
    });
  }
  function j(e) {
    var t = {
      value: ("Algolia for JavaScript (").concat(e, ")"),
      add: function (e) {
        var r = ("; ").concat(e.segment).concat(void 0 !== e.version ? (" (").concat(e.version, ")") : "");
        return (-1 === t.value.indexOf(r) && (t.value = ("").concat(t.value).concat(r)), t);
      }
    };
    return t;
  }
  function w(e, t, r) {
    var n, o = (n = r, Object.keys(n).map(function (e) {
      return (function (e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        var o = 0;
        return e.replace(/%s/g, function () {
          return encodeURIComponent(r[o++]);
        });
      })("%s=%s", e, (t = n[e], "[object Object]" === Object.prototype.toString.call(t) || "[object Array]" === Object.prototype.toString.call(t) ? JSON.stringify(n[e]) : n[e]));
      var t;
    }).join("&")), a = ("").concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
    return (o.length && (a += ("?").concat(o)), a);
  }
  function T(e) {
    return e.map(function (e) {
      return A(e);
    });
  }
  function A(e) {
    var t = e.request.headers["x-algolia-api-key"] ? {
      "x-algolia-api-key": "*****"
    } : {};
    return r(r({}, e), {}, {
      request: r(r({}, e.request), {}, {
        headers: r(r({}, e.request.headers), t)
      })
    });
  }
  var C = function (e) {
    var t = e.appId, o = (function (e, t, r) {
      var n = {
        "x-algolia-api-key": r,
        "x-algolia-application-id": t
      };
      return {
        headers: function () {
          return e === c.WithinHeaders ? n : {};
        },
        queryParameters: function () {
          return e === c.WithinQueryParameters ? n : {};
        }
      };
    })(void 0 !== e.authMode ? e.authMode : c.WithinHeaders, t, e.apiKey), a = (function (e) {
      var t = e.hostsCache, r = e.logger, o = e.requester, a = e.requestsCache, u = e.responsesCache, i = e.timeouts, s = e.userAgent, c = e.hosts, l = e.queryParameters, f = {
        hostsCache: t,
        logger: r,
        requester: o,
        requestsCache: a,
        responsesCache: u,
        timeouts: i,
        userAgent: s,
        headers: e.headers,
        queryParameters: l,
        hosts: c.map(function (e) {
          return b(e);
        }),
        read: function (e, t) {
          var r = h(t, f.timeouts.read), o = function () {
            return S(f, f.hosts.filter(function (e) {
              return 0 != (e.accept & m.Read);
            }), e, r);
          };
          if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return o();
          var a = {
            request: e,
            mappedRequestOptions: r,
            transporter: {
              queryParameters: f.queryParameters,
              headers: f.headers
            }
          };
          return f.responsesCache.get(a, function () {
            return f.requestsCache.get(a, function () {
              return f.requestsCache.set(a, o()).then(function (e) {
                return Promise.all([f.requestsCache.delete(a), e]);
              }, function (e) {
                return Promise.all([f.requestsCache.delete(a), Promise.reject(e)]);
              }).then(function (e) {
                var t = n(e, 2);
                t[0];
                return t[1];
              });
            });
          }, {
            miss: function (e) {
              return f.responsesCache.set(a, e);
            }
          });
        },
        write: function (e, t) {
          return S(f, f.hosts.filter(function (e) {
            return 0 != (e.accept & m.Write);
          }), e, h(t, f.timeouts.write));
        }
      };
      return f;
    })(r(r({
      hosts: [{
        url: ("").concat(t, "-dsn.algolia.net"),
        accept: m.Read
      }, {
        url: ("").concat(t, ".algolia.net"),
        accept: m.Write
      }].concat(s([{
        url: ("").concat(t, "-1.algolianet.com")
      }, {
        url: ("").concat(t, "-2.algolianet.com")
      }, {
        url: ("").concat(t, "-3.algolianet.com")
      }]))
    }, e), {}, {
      headers: r(r(r({}, o.headers()), {
        "content-type": "application/x-www-form-urlencoded"
      }), e.headers),
      queryParameters: r(r({}, o.queryParameters()), e.queryParameters)
    }));
    return (function (e, t) {
      return t ? (Object.keys(t).forEach(function (r) {
        e[r] = t[r](e);
      }), e) : e;
    })({
      transporter: a,
      appId: t,
      addAlgoliaAgent: function (e, t) {
        a.userAgent.add({
          segment: e,
          version: t
        });
      },
      clearCache: function () {
        return Promise.all([a.requestsCache.clear(), a.responsesCache.clear()]).then(function () {});
      }
    }, e.methods);
  }, N = function (e) {
    return function (t, n) {
      var o = t.map(function (e) {
        return r(r({}, e), {}, {
          threshold: e.threshold || 0
        });
      });
      return e.transporter.read({
        method: O,
        path: "1/indexes/*/recommendations",
        data: {
          requests: o
        },
        cacheable: !0
      }, n);
    };
  }, k = function (e) {
    return function (t, n) {
      return N(e)(t.map(function (e) {
        return r(r({}, e), {}, {
          fallbackParameters: {},
          model: "bought-together"
        });
      }), n);
    };
  }, x = function (e) {
    return function (t, n) {
      return N(e)(t.map(function (e) {
        return r(r({}, e), {}, {
          model: "related-products"
        });
      }), n);
    };
  }, J = function (e) {
    return function (t, n) {
      var o = t.map(function (e) {
        return r(r({}, e), {}, {
          model: "trending-facets",
          threshold: e.threshold || 0
        });
      });
      return e.transporter.read({
        method: O,
        path: "1/indexes/*/recommendations",
        data: {
          requests: o
        },
        cacheable: !0
      }, n);
    };
  }, E = function (e) {
    return function (t, n) {
      var o = t.map(function (e) {
        return r(r({}, e), {}, {
          model: "trending-items",
          threshold: e.threshold || 0
        });
      });
      return e.transporter.read({
        method: O,
        path: "1/indexes/*/recommendations",
        data: {
          requests: o
        },
        cacheable: !0
      }, n);
    };
  };
  function R(e, t, n) {
    var o, s = {
      appId: e,
      apiKey: t,
      timeouts: {
        connect: 1,
        read: 2,
        write: 30
      },
      requester: {
        send: function (e) {
          return new Promise(function (t) {
            var r = new XMLHttpRequest();
            (r.open(e.method, e.url, !0), Object.keys(e.headers).forEach(function (t) {
              return r.setRequestHeader(t, e.headers[t]);
            }));
            var n, o = function (e, n) {
              return setTimeout(function () {
                (r.abort(), t({
                  status: 0,
                  content: n,
                  isTimedOut: !0
                }));
              }, 1e3 * e);
            }, a = o(e.connectTimeout, "Connection timeout");
            (r.onreadystatechange = function () {
              r.readyState > r.OPENED && void 0 === n && (clearTimeout(a), n = o(e.responseTimeout, "Socket timeout"));
            }, r.onerror = function () {
              0 === r.status && (clearTimeout(a), clearTimeout(n), t({
                content: r.responseText || "Network request failed",
                status: r.status,
                isTimedOut: !1
              }));
            }, r.onload = function () {
              (clearTimeout(a), clearTimeout(n), t({
                content: r.responseText,
                status: r.status,
                isTimedOut: !1
              }));
            }, r.send(e.data));
          });
        }
      },
      logger: (o = d, {
        debug: function (e, t) {
          return (l >= o && console.debug(e, t), Promise.resolve());
        },
        info: function (e, t) {
          return (f >= o && console.info(e, t), Promise.resolve());
        },
        error: function (e, t) {
          return (console.error(e, t), Promise.resolve());
        }
      }),
      responsesCache: i(),
      requestsCache: i({
        serializable: !1
      }),
      hostsCache: u({
        caches: [a({
          key: ("").concat("4.14.3", "-").concat(e)
        }), i()]
      }),
      userAgent: j("4.14.3").add({
        segment: "Recommend",
        version: "4.14.3"
      }).add({
        segment: "Browser"
      }),
      authMode: c.WithinQueryParameters
    };
    return C(r(r(r({}, s), n), {}, {
      methods: {
        getFrequentlyBoughtTogether: k,
        getRecommendations: N,
        getRelatedProducts: x,
        getTrendingFacets: J,
        getTrendingItems: E
      }
    }));
  }
  return (R.version = "4.14.3", R);
});

},{}],"bH9vr":[function(require,module,exports) {
var define;
/*! @algolia/recommend-js 1.8.1 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/recommend*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self)["@algolia/recommend-js"] = {});
})(this, function (e) {
  "use strict";
  function t(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function n() {
    return (n = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }), n.apply(this, arguments));
  }
  function r(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function i(e, t) {
    if (e) {
      if ("string" == typeof e) return o(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n) ? o(e, t) : void 0);
    }
  }
  function a(e, t) {
    return (function (e) {
      if (Array.isArray(e)) return e;
    })(e) || (function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != n) {
        var r, o, i = [], a = !0, c = !1;
        try {
          for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
        } catch (e) {
          (c = !0, o = e);
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (c) throw o;
          }
        }
        return i;
      }
    })(e, t) || i(e, t) || (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function c(e) {
    var t = e.hits, n = e.maxRecommendations, r = e.nrOfObjs, o = {};
    t.forEach(function (e) {
      e.forEach(function (e, t) {
        o[e.objectID] ? o[e.objectID] = {
          indexSum: o[e.objectID].indexSum + t,
          nr: o[e.objectID].nr + 1
        } : o[e.objectID] = {
          indexSum: t,
          nr: 1
        };
      });
    });
    var i = (function (e, t) {
      for (var n = [], r = 0, o = Object.keys(e); r < o.length; r++) {
        var i = o[r];
        (e[i].nr < 2 && (e[i].indexSum += 100), n.push({
          objectID: i,
          avgOfIndices: e[i].indexSum / t
        }));
      }
      return n.sort(function (e, t) {
        return e.avgOfIndices > t.avgOfIndices ? 1 : -1;
      });
    })(o, r);
    return i.reduce(function (e, n) {
      var r = t.flat().find(function (e) {
        return e.objectID === n.objectID;
      });
      return r ? e.concat(r) : e;
    }, []).slice(0, n && n > 0 ? n : void 0);
  }
  function l(e) {
    return (function (e) {
      if (Array.isArray(e)) return o(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || i(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function u(e) {
    var t, n, r, o = e.hits, i = e.maxRecommendations;
    return (t = function (e, t) {
      return (e._score || 0) > (t._score || 0) ? -1 : 1;
    }, n = o, r = l(n), r.sort(t), r).slice(0, i && i > 0 ? i : void 0);
  }
  var s = "1.8.1";
  function m() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.filter(Boolean).join(" ");
  }
  function _(e) {
    var t = e.createElement, n = e.Fragment;
    return function (e) {
      return 0 === e.recommendations.length && "idle" === e.status ? t(e.Fallback, null) : t("section", {
        className: m("auc-Recommend", e.classNames.root)
      }, t(e.Header, {
        classNames: e.classNames,
        recommendations: e.recommendations,
        translations: e.translations,
        createElement: t,
        Fragment: n
      }), t(e.View, null));
    };
  }
  function f(e) {
    var t = e.createElement;
    return function (e) {
      return !e.recommendations || e.recommendations.length < 1 ? null : e.translations.title ? t("h3", {
        className: m("auc-Recommend-title", e.classNames.title)
      }, e.translations.title) : null;
    };
  }
  function p(e) {
    var t = e.createElement, n = e.Fragment;
    return function (e) {
      return t("div", {
        className: m("auc-Recommend-container", e.classNames.container)
      }, t("ol", {
        className: m("auc-Recommend-list", e.classNames.list)
      }, e.items.map(function (r) {
        return t("li", {
          key: r.objectID,
          className: m("auc-Recommend-item", e.classNames.item)
        }, t(e.itemComponent, {
          createElement: t,
          Fragment: n,
          item: r
        }));
      })));
    };
  }
  function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  var y, g, O, j, w = {}, P = [], k = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function C(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function E(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function D(e, t, n) {
    var r, o, i, a = arguments, c = {};
    for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : c[i] = t[i];
    if (arguments.length > 3) for ((n = [n], i = 3); i < arguments.length; i++) n.push(a[i]);
    if ((null != n && (c.children = n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === c[i] && (c[i] = e.defaultProps[i]);
    return S(e, c, r, o, null);
  }
  function S(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++y.__v : o
    };
    return (null != y.vnode && y.vnode(i), i);
  }
  function F(e) {
    return e.children;
  }
  function N(e, t) {
    (this.props = e, this.context = t);
  }
  function x(e, t) {
    if (null == t) return e.__ ? x(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? x(e) : null;
  }
  function A(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for ((e.__e = e.__c.base = null, t = 0); t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
      return A(e);
    }
  }
  function I(e) {
    (!e.__d && (e.__d = !0) && g.push(e) && !R.__r++ || j !== y.debounceRendering) && ((j = y.debounceRendering) || O)(R);
  }
  function R() {
    for (var e; R.__r = g.length; ) (e = g.sort(function (e, t) {
      return e.__v.__b - t.__v.__b;
    }), g = [], e.some(function (e) {
      var t, n, r, o, i, a;
      e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = C({}, o)).__v = o.__v + 1, W(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? x(o) : i, o.__h), B(n, o), o.__e != i && A(o)));
    }));
  }
  function T(e, t, n, r, o, i, a, c, l, u) {
    var s, m, _, f, p, d, h, v = r && r.__k || P, b = v.length;
    for ((n.__k = [], s = 0); s < t.length; s++) if (null != (f = n.__k[s] = null == (f = t[s]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? S(null, f, null, null, f) : Array.isArray(f) ? S(F, {
      children: f
    }, null, null, null) : f.__b > 0 ? S(f.type, f.props, f.key, null, f.__v) : f)) {
      if ((f.__ = n, f.__b = n.__b + 1, null === (_ = v[s]) || _ && f.key == _.key && f.type === _.type)) v[s] = void 0; else for (m = 0; m < b; m++) {
        if ((_ = v[m]) && f.key == _.key && f.type === _.type) {
          v[m] = void 0;
          break;
        }
        _ = null;
      }
      (W(e, f, _ = _ || w, o, i, a, c, l, u), p = f.__e, (m = f.ref) && _.ref != m && (h || (h = []), _.ref && h.push(_.ref, null, f), h.push(m, f.__c || p, f)), null != p ? (null == d && (d = p), "function" == typeof f.type && null != f.__k && f.__k === _.__k ? f.__d = l = H(f, l, e) : l = q(e, f, _, v, p, l), u || "option" !== n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && _.__e == l && l.parentNode != e && (l = x(_)));
    }
    for ((n.__e = d, s = b); s--; ) null != v[s] && ("function" == typeof n.type && null != v[s].__e && v[s].__e == n.__d && (n.__d = x(r, s + 1)), z(v[s], v[s]));
    if (h) for (s = 0; s < h.length; s++) G(h[s], h[++s], h[++s]);
  }
  function H(e, t, n) {
    var r, o;
    for (r = 0; r < e.__k.length; r++) (o = e.__k[r]) && (o.__ = e, t = "function" == typeof o.type ? H(o, t, n) : q(n, o, o, e.__k, o.__e, t));
    return t;
  }
  function q(e, t, n, r, o, i) {
    var a, c, l;
    if (void 0 !== t.__d) (a = t.__d, t.__d = void 0); else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) (e.appendChild(o), a = null); else {
      for ((c = i, l = 0); (c = c.nextSibling) && l < r.length; l += 2) if (c == o) break e;
      (e.insertBefore(o, i), a = i);
    }
    return void 0 !== a ? a : o.nextSibling;
  }
  function M(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || k.test(t) ? n : n + "px";
  }
  function L(e, t, n, r, o) {
    var i;
    e: if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
      if (("string" == typeof r && (e.style.cssText = r = ""), r)) for (t in r) n && (t in n) || M(e.style, t, "");
      if (n) for (t in n) r && n[t] === r[t] || M(e.style, t, n[t]);
    } else if ("o" === t[0] && "n" === t[1]) (i = t !== (t = t.replace(/Capture$/, "")), t = (t.toLowerCase() in e) ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? V : U, i) : e.removeEventListener(t, i ? V : U, i)); else if ("dangerouslySetInnerHTML" !== t) {
      if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s"); else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && (t in e)) try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (e) {}
      "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
  }
  function U(e) {
    this.l[e.type + !1](y.event ? y.event(e) : e);
  }
  function V(e) {
    this.l[e.type + !0](y.event ? y.event(e) : e);
  }
  function W(e, t, n, r, o, i, a, c, l) {
    var u, s, m, _, f, p, d, h, v, b, g, O = t.type;
    if (void 0 !== t.constructor) return null;
    (null != n.__h && (l = n.__h, c = t.__e = n.__e, t.__h = null, i = [c]), (u = y.__b) && u(t));
    try {
      e: if ("function" == typeof O) {
        if ((h = t.props, v = (u = O.contextType) && r[u.__c], b = u ? v ? v.props.value : u.__ : r, n.__c ? d = (s = t.__c = n.__c).__ = s.__E : (("prototype" in O) && O.prototype.render ? t.__c = s = new O(h, b) : (t.__c = s = new N(h, b), s.constructor = O, s.render = J), v && v.sub(s), s.props = h, s.state || (s.state = {}), s.context = b, s.__n = r, m = s.__d = !0, s.__h = []), null == s.__s && (s.__s = s.state), null != O.getDerivedStateFromProps && (s.__s == s.state && (s.__s = C({}, s.__s)), C(s.__s, O.getDerivedStateFromProps(h, s.__s))), _ = s.props, f = s.state, m)) (null == O.getDerivedStateFromProps && null != s.componentWillMount && s.componentWillMount(), null != s.componentDidMount && s.__h.push(s.componentDidMount)); else {
          if ((null == O.getDerivedStateFromProps && h !== _ && null != s.componentWillReceiveProps && s.componentWillReceiveProps(h, b), !s.__e && null != s.shouldComponentUpdate && !1 === s.shouldComponentUpdate(h, s.__s, b) || t.__v === n.__v)) {
            (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function (e) {
              e && (e.__ = t);
            }), s.__h.length && a.push(s));
            break e;
          }
          (null != s.componentWillUpdate && s.componentWillUpdate(h, s.__s, b), null != s.componentDidUpdate && s.__h.push(function () {
            s.componentDidUpdate(_, f, p);
          }));
        }
        (s.context = b, s.props = h, s.state = s.__s, (u = y.__r) && u(t), s.__d = !1, s.__v = t, s.__P = e, u = s.render(s.props, s.state, s.context), s.state = s.__s, null != s.getChildContext && (r = C(C({}, r), s.getChildContext())), m || null == s.getSnapshotBeforeUpdate || (p = s.getSnapshotBeforeUpdate(_, f)), g = null != u && u.type === F && null == u.key ? u.props.children : u, T(e, Array.isArray(g) ? g : [g], t, n, r, o, i, a, c, l), s.base = t.__e, t.__h = null, s.__h.length && a.push(s), d && (s.__E = s.__ = null), s.__e = !1);
      } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = $(n.__e, t, n, r, o, i, a, l);
      (u = y.diffed) && u(t);
    } catch (e) {
      (t.__v = null, (l || null != i) && (t.__e = c, t.__h = !!l, i[i.indexOf(c)] = null), y.__e(e, t, n));
    }
  }
  function B(e, t) {
    (y.__c && y.__c(t, e), e.some(function (t) {
      try {
        (e = t.__h, t.__h = [], e.some(function (e) {
          e.call(t);
        }));
      } catch (e) {
        y.__e(e, t.__v);
      }
    }));
  }
  function $(e, t, n, r, o, i, a, c) {
    var l, u, s, m, _ = n.props, f = t.props, p = t.type, d = 0;
    if (("svg" === p && (o = !0), null != i)) for (; d < i.length; d++) if ((l = i[d]) && (l === e || (p ? l.localName == p : 3 == l.nodeType))) {
      (e = l, i[d] = null);
      break;
    }
    if (null == e) {
      if (null === p) return document.createTextNode(f);
      (e = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, f.is && f), i = null, c = !1);
    }
    if (null === p) _ === f || c && e.data === f || (e.data = f); else {
      if ((i = i && P.slice.call(e.childNodes), u = (_ = n.props || w).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !c)) {
        if (null != i) for ((_ = {}, m = 0); m < e.attributes.length; m++) _[e.attributes[m].name] = e.attributes[m].value;
        (s || u) && (s && (u && s.__html == u.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
      }
      if (((function (e, t, n, r, o) {
        var i;
        for (i in n) "children" === i || "key" === i || (i in t) || L(e, i, null, n[i], r);
        for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || L(e, i, t[i], n[i], r);
      })(e, f, _, o, c), s)) t.__k = []; else if ((d = t.props.children, T(e, Array.isArray(d) ? d : [d], t, n, r, o && "foreignObject" !== p, i, a, e.firstChild, c), null != i)) for (d = i.length; d--; ) null != i[d] && E(i[d]);
      c || (("value" in f) && void 0 !== (d = f.value) && (d !== e.value || "progress" === p && !d) && L(e, "value", d, _.value, !1), ("checked" in f) && void 0 !== (d = f.checked) && d !== e.checked && L(e, "checked", d, _.checked, !1));
    }
    return e;
  }
  function G(e, t, n) {
    try {
      "function" == typeof e ? e(t) : e.current = t;
    } catch (e) {
      y.__e(e, n);
    }
  }
  function z(e, t, n) {
    var r, o, i;
    if ((y.unmount && y.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || G(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c))) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount();
      } catch (e) {
        y.__e(e, t);
      }
      r.base = r.__P = null;
    }
    if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && z(r[i], t, n);
    null != o && E(o);
  }
  function J(e, t, n) {
    return this.constructor(e, n);
  }
  function K(e, t, n) {
    var r, o, i;
    (y.__ && y.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, i = [], W(t, e = (!r && n || t).__k = D(F, null, [e]), o || w, w, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? P.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), B(i, e));
  }
  (y = {
    __e: function (e, t) {
      for (var n, r, o; t = t.__; ) if ((n = t.__c) && !n.__) try {
        if (((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o)) return n.__E = n;
      } catch (t) {
        e = t;
      }
      throw e;
    },
    __v: 0
  }, N.prototype.setState = function (e, t) {
    var n;
    (n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = C({}, this.state), "function" == typeof e && (e = e(C({}, n), this.props)), e && C(n, e), null != e && this.__v && (t && this.__h.push(t), I(this)));
  }, N.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), I(this));
  }, N.prototype.render = F, g = [], O = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, R.__r = 0);
  var Q = function (e, t, n, r) {
    var o;
    t[0] = 0;
    for (var i = 1; i < t.length; i++) {
      var a = t[i++], c = t[i] ? (t[0] |= a ? 1 : 2, n[t[i++]]) : t[++i];
      3 === a ? r[0] = c : 4 === a ? r[1] = Object.assign(r[1] || ({}), c) : 5 === a ? (r[1] = r[1] || ({}))[t[++i]] = c : 6 === a ? r[1][t[++i]] += c + "" : a ? (o = e.apply(c, Q(e, c, n, ["", null])), r.push(o), c[0] ? t[0] |= 2 : (t[i - 2] = 0, t[i] = o)) : r.push(c);
    }
    return r;
  }, X = new Map();
  var Y, Z, ee, te = (function (e) {
    var t = X.get(this);
    return (t || (t = new Map(), X.set(this, t)), (t = Q(this, t.get(e) || (t.set(e, t = (function (e) {
      for (var t, n, r = 1, o = "", i = "", a = [0], c = function (e) {
        (1 === r && (e || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, e, o) : 3 === r && (e || o) ? (a.push(3, e, o), r = 2) : 2 === r && "..." === o && e ? a.push(4, e, 0) : 2 === r && o && !e ? a.push(5, 0, !0, o) : r >= 5 && ((o || !e && 5 === r) && (a.push(r, 0, o, n), r = 6), e && (a.push(r, e, 0, n), r = 6)), o = "");
      }, l = 0; l < e.length; l++) {
        l && (1 === r && c(), c(l));
        for (var u = 0; u < e[l].length; u++) (t = e[l][u], 1 === r ? "<" === t ? (c(), a = [a], r = 3) : o += t : 4 === r ? "--" === o && ">" === t ? (r = 1, o = "") : o = t + o[0] : i ? t === i ? i = "" : o += t : '"' === t || "'" === t ? i = t : ">" === t ? (c(), r = 1) : r && ("=" === t ? (r = 5, n = o, o = "") : "/" === t && (r < 5 || ">" === e[l][u + 1]) ? (c(), 3 === r && (a = a[0]), r = a, (a = a[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (c(), r = 2) : o += t), 3 === r && "!--" === o && (r = 4, a = a[0]));
      }
      return (c(), a);
    })(e)), t), arguments, [])).length > 1 ? t : t[0]);
  }).bind(D), ne = 0, re = [], oe = y.__b, ie = y.__r, ae = y.diffed, ce = y.__c, le = y.unmount;
  function ue(e, t) {
    (y.__h && y.__h(Z, e, ne || t), ne = 0);
    var n = Z.__H || (Z.__H = {
      __: [],
      __h: []
    });
    return (e >= n.__.length && n.__.push({}), n.__[e]);
  }
  function se(e) {
    return (ne = 1, (function (e, t, n) {
      var r = ue(Y++, 2);
      return (r.t = e, r.__c || (r.__ = [n ? n(t) : be(void 0, t), function (e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}));
      }], r.__c = Z), r.__);
    })(be, e));
  }
  function me(e, t) {
    var n = ue(Y++, 3);
    !y.__s && ve(n.__H, t) && (n.__ = e, n.__H = t, Z.__H.__h.push(n));
  }
  function _e(e) {
    return (ne = 5, (function (e, t) {
      var n = ue(Y++, 7);
      return (ve(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__);
    })(function () {
      return {
        current: e
      };
    }, []));
  }
  function fe() {
    (re.forEach(function (e) {
      if (e.__P) try {
        (e.__H.__h.forEach(de), e.__H.__h.forEach(he), e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = [], y.__e(t, e.__v));
      }
    }), re = []);
  }
  (y.__b = function (e) {
    (Z = null, oe && oe(e));
  }, y.__r = function (e) {
    (ie && ie(e), Y = 0);
    var t = (Z = e.__c).__H;
    t && (t.__h.forEach(de), t.__h.forEach(he), t.__h = []);
  }, y.diffed = function (e) {
    ae && ae(e);
    var t = e.__c;
    (t && t.__H && t.__H.__h.length && (1 !== re.push(t) && ee === y.requestAnimationFrame || ((ee = y.requestAnimationFrame) || (function (e) {
      var t, n = function () {
        (clearTimeout(r), pe && cancelAnimationFrame(t), setTimeout(e));
      }, r = setTimeout(n, 100);
      pe && (t = requestAnimationFrame(n));
    }))(fe)), Z = void 0);
  }, y.__c = function (e, t) {
    (t.some(function (e) {
      try {
        (e.__h.forEach(de), e.__h = e.__h.filter(function (e) {
          return !e.__ || he(e);
        }));
      } catch (n) {
        (t.some(function (e) {
          e.__h && (e.__h = []);
        }), t = [], y.__e(n, e.__v));
      }
    }), ce && ce(e, t));
  }, y.unmount = function (e) {
    le && le(e);
    var t = e.__c;
    if (t && t.__H) try {
      t.__H.__.forEach(de);
    } catch (e) {
      y.__e(e, t.__v);
    }
  });
  var pe = "function" == typeof requestAnimationFrame;
  function de(e) {
    var t = Z;
    ("function" == typeof e.__c && e.__c(), Z = t);
  }
  function he(e) {
    var t = Z;
    (e.__c = e.__(), Z = t);
  }
  function ve(e, t) {
    return !e || e.length !== t.length || t.some(function (t, n) {
      return t !== e[n];
    });
  }
  function be(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function ye(e, t) {
    return "string" == typeof e ? t.document.querySelector(e) : e;
  }
  function ge(e) {
    me(function () {
      e.recommendClient.addAlgoliaAgent("recommend-js", "1.8.1");
    }, [e.recommendClient]);
  }
  function Oe(e) {
    var t = _e(void 0), n = a(se(e), 2), r = n[0], o = n[1];
    return (me(function () {
      ("stalled" !== r && t.current && clearTimeout(t.current), "loading" === r && (t.current = setTimeout(function () {
        o("stalled");
      }, 300)));
    }, [r]), {
      status: r,
      setStatus: o
    });
  }
  function je(e) {
    return function (t) {
      return D(e, n({}, t, {
        html: te
      }));
    };
  }
  var we = ["container", "environment", "itemComponent", "fallbackComponent", "headerComponent", "view", "children"];
  function Pe(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function ke(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Pe(Object(n), !0).forEach(function (t) {
        r(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  var Ce, Ee, De, Se = (Ee = (Ce = {
    createElement: D,
    Fragment: F
  }).createElement, De = Ce.Fragment, function (e) {
    var t, o, i, a, c, l = (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? d(Object(n), !0).forEach(function (t) {
          r(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    })({
      title: "Frequently bought together",
      sliderLabel: "Frequently bought together products"
    }, e.translations), u = null !== (t = e.classNames) && void 0 !== t ? t : {}, s = null !== (o = e.children) && void 0 !== o ? o : _({
      createElement: Ee,
      Fragment: De
    }), m = null !== (i = e.fallbackComponent) && void 0 !== i ? i : function () {
      return null;
    }, h = null !== (a = e.headerComponent) && void 0 !== a ? a : f({
      createElement: Ee,
      Fragment: De
    }), v = null !== (c = e.view) && void 0 !== c ? c : p({
      createElement: Ee,
      Fragment: De
    });
    return s({
      classNames: u,
      Fallback: function () {
        return Ee(m, {
          Fragment: De,
          createElement: Ee
        });
      },
      Header: h,
      recommendations: e.items,
      status: e.status,
      translations: l,
      View: function (t) {
        return Ee(v, n({
          classNames: u,
          itemComponent: e.itemComponent,
          items: e.items,
          translations: l,
          Fragment: De,
          createElement: Ee
        }, t));
      }
    });
  });
  function Fe(e) {
    var t = a(se({
      recommendations: []
    }), 2), n = t[0], r = t[1], o = Oe("loading"), i = o.status, l = o.setStatus;
    return (ge({
      recommendClient: e.recommendClient
    }), me(function () {
      (l("loading"), (function (e) {
        var t = e.objectIDs, n = e.recommendClient, r = e.transformItems, o = void 0 === r ? function (e) {
          return e;
        } : r, i = e.indexName, a = e.maxRecommendations, l = e.queryParameters, u = e.threshold, m = t.map(function (e) {
          return {
            indexName: i,
            maxRecommendations: a,
            objectID: e,
            queryParameters: l,
            threshold: u
          };
        });
        return (n.addAlgoliaAgent("recommend-core", s), n.getFrequentlyBoughtTogether(m).then(function (e) {
          return c({
            maxRecommendations: a,
            hits: e.results.map(function (e) {
              return e.hits;
            }),
            nrOfObjs: t.length
          });
        }).then(function (e) {
          return {
            recommendations: o(e)
          };
        }));
      })(e).then(function (e) {
        (r(e), l("idle"));
      }));
    }, [e, l]), ke(ke({}, n), {}, {
      status: i
    }));
  }
  function Ne(e) {
    var t = Fe(e), r = t.recommendations, o = t.status;
    return D(Se, n({}, e, {
      items: r,
      status: o
    }));
  }
  var xe = ["container", "environment", "itemComponent", "fallbackComponent", "headerComponent", "view", "children"];
  function Ae(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ae(Object(n), !0).forEach(function (t) {
        r(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  var Re = (function (e) {
    var t = e.createElement, o = e.Fragment;
    return function (e) {
      var i, a, c, l, u, s = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? h(Object(n), !0).forEach(function (t) {
            r(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      })({
        title: "Related products",
        sliderLabel: "Related products"
      }, e.translations), m = null !== (i = e.classNames) && void 0 !== i ? i : {}, d = null !== (a = e.children) && void 0 !== a ? a : _({
        createElement: t,
        Fragment: o
      }), v = null !== (c = e.fallbackComponent) && void 0 !== c ? c : function () {
        return null;
      }, b = null !== (l = e.headerComponent) && void 0 !== l ? l : f({
        createElement: t,
        Fragment: o
      }), y = null !== (u = e.view) && void 0 !== u ? u : p({
        createElement: t,
        Fragment: o
      });
      return d({
        classNames: m,
        Fallback: function () {
          return t(v, {
            Fragment: o,
            createElement: t
          });
        },
        Header: b,
        recommendations: e.items,
        status: e.status,
        translations: s,
        View: function (r) {
          return t(y, n({
            classNames: m,
            itemComponent: e.itemComponent,
            items: e.items,
            translations: s,
            Fragment: o,
            createElement: t
          }, r));
        }
      });
    };
  })({
    createElement: D,
    Fragment: F
  });
  function Te(e) {
    var t = a(se({
      recommendations: []
    }), 2), n = t[0], r = t[1], o = Oe("loading"), i = o.status, l = o.setStatus;
    return (ge({
      recommendClient: e.recommendClient
    }), me(function () {
      (l("loading"), (function (e) {
        var t = e.objectIDs, n = e.recommendClient, r = e.transformItems, o = void 0 === r ? function (e) {
          return e;
        } : r, i = e.fallbackParameters, a = e.indexName, l = e.maxRecommendations, u = e.queryParameters, m = e.threshold, _ = t.map(function (e) {
          return {
            fallbackParameters: i,
            indexName: a,
            maxRecommendations: l,
            objectID: e,
            queryParameters: u,
            threshold: m
          };
        });
        return (n.addAlgoliaAgent("recommend-core", s), n.getRelatedProducts(_).then(function (e) {
          return c({
            maxRecommendations: l,
            hits: e.results.map(function (e) {
              return e.hits;
            }),
            nrOfObjs: t.length
          });
        }).then(function (e) {
          return {
            recommendations: o(e)
          };
        }));
      })(e).then(function (e) {
        (r(e), l("idle"));
      }));
    }, [e, l]), Ie(Ie({}, n), {}, {
      status: i
    }));
  }
  function He(e) {
    var t = Te(e), r = t.recommendations, o = t.status;
    return D(Re, n({}, e, {
      items: r,
      status: o
    }));
  }
  var qe = ["container", "environment", "itemComponent", "fallbackComponent", "headerComponent", "view", "children"];
  function Me(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Le(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Me(Object(n), !0).forEach(function (t) {
        r(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  var Ue = (function (e) {
    var t = e.createElement, o = e.Fragment;
    return function (e) {
      var i, a, c, l, u, s = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? v(Object(n), !0).forEach(function (t) {
            r(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      })({
        title: "Trending facets",
        sliderLabel: "Trending facets"
      }, e.translations), p = null !== (i = e.classNames) && void 0 !== i ? i : {}, d = null !== (a = e.children) && void 0 !== a ? a : _({
        createElement: t,
        Fragment: o
      }), h = null !== (c = e.fallbackComponent) && void 0 !== c ? c : function () {
        return null;
      }, b = null !== (l = e.headerComponent) && void 0 !== l ? l : f({
        createElement: t,
        Fragment: o
      }), y = null !== (u = e.view) && void 0 !== u ? u : (function (e) {
        var t = e.createElement, n = e.Fragment;
        return function (e) {
          return t("div", {
            className: m("auc-Recommend-container", e.classNames.container)
          }, t("ol", {
            className: m("auc-Recommend-list", e.classNames.list)
          }, e.items.map(function (r) {
            return t("li", {
              key: r.facetValue,
              className: m("auc-Recommend-item", e.classNames.item)
            }, t(e.itemComponent, {
              createElement: t,
              Fragment: n,
              item: r
            }));
          })));
        };
      })({
        createElement: t,
        Fragment: o
      });
      return d({
        classNames: p,
        Fallback: function () {
          return t(h, {
            Fragment: o,
            createElement: t
          });
        },
        Header: b,
        recommendations: e.items,
        status: e.status,
        translations: s,
        View: function (r) {
          return t(y, n({
            classNames: p,
            itemComponent: e.itemComponent,
            items: e.items,
            translations: s,
            Fragment: o,
            createElement: t
          }, r));
        }
      });
    };
  })({
    createElement: D,
    Fragment: F
  });
  function Ve(e) {
    var t = a(se({
      recommendations: []
    }), 2), n = t[0], r = t[1], o = Oe("loading"), i = o.status, c = o.setStatus;
    return (ge({
      recommendClient: e.recommendClient
    }), me(function () {
      (c("loading"), (function (e) {
        var t = e.recommendClient, n = e.transformItems, r = void 0 === n ? function (e) {
          return e;
        } : n, o = e.indexName, i = e.maxRecommendations, a = e.threshold, c = e.facetName, l = {
          indexName: o,
          maxRecommendations: i,
          threshold: a,
          facetName: c
        };
        return (t.addAlgoliaAgent("recommend-core", s), t.getTrendingFacets([l]).then(function (e) {
          return u({
            maxRecommendations: i,
            hits: e.results.map(function (e) {
              return e.hits;
            }).flat()
          });
        }).then(function (e) {
          return {
            recommendations: r(e)
          };
        }));
      })(e).then(function (e) {
        (r(e), c("idle"));
      }));
    }, [e, c]), Le(Le({}, n), {}, {
      status: i
    }));
  }
  function We(e) {
    var t = Ve(e), r = t.recommendations, o = t.status;
    return D(Ue, n({}, e, {
      items: r,
      status: o
    }));
  }
  var Be = ["container", "environment", "itemComponent", "fallbackComponent", "headerComponent", "view", "children"];
  function $e(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Ge(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? $e(Object(n), !0).forEach(function (t) {
        r(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $e(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  var ze = (function (e) {
    var t = e.createElement, o = e.Fragment;
    return function (e) {
      var i, a, c, l, u, s = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? b(Object(n), !0).forEach(function (t) {
            r(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      })({
        title: "Trending items",
        sliderLabel: "Trending items"
      }, e.translations), m = null !== (i = e.classNames) && void 0 !== i ? i : {}, d = null !== (a = e.children) && void 0 !== a ? a : _({
        createElement: t,
        Fragment: o
      }), h = null !== (c = e.fallbackComponent) && void 0 !== c ? c : function () {
        return null;
      }, v = null !== (l = e.headerComponent) && void 0 !== l ? l : f({
        createElement: t,
        Fragment: o
      }), y = null !== (u = e.view) && void 0 !== u ? u : p({
        createElement: t,
        Fragment: o
      });
      return d({
        classNames: m,
        Fallback: function () {
          return t(h, {
            Fragment: o,
            createElement: t
          });
        },
        Header: v,
        recommendations: e.items,
        status: e.status,
        translations: s,
        View: function (r) {
          return t(y, n({
            classNames: m,
            itemComponent: e.itemComponent,
            items: e.items,
            translations: s,
            Fragment: o,
            createElement: t
          }, r));
        }
      });
    };
  })({
    createElement: D,
    Fragment: F
  });
  function Je(e) {
    var t = a(se({
      recommendations: []
    }), 2), n = t[0], r = t[1], o = Oe("loading"), i = o.status, c = o.setStatus;
    return (ge({
      recommendClient: e.recommendClient
    }), me(function () {
      (c("loading"), (function (e) {
        var t = e.recommendClient, n = e.transformItems, r = void 0 === n ? function (e) {
          return e;
        } : n, o = e.fallbackParameters, i = e.indexName, a = e.maxRecommendations, c = e.queryParameters, m = e.threshold, _ = e.facetName, f = e.facetValue, p = {
          fallbackParameters: o,
          indexName: i,
          maxRecommendations: a,
          queryParameters: c,
          threshold: m,
          facetName: _,
          facetValue: f
        };
        return (t.addAlgoliaAgent("recommend-core", s), t.getTrendingItems([p]).then(function (e) {
          return u({
            maxRecommendations: a,
            hits: (t = "objectID", n = e.results.map(function (e) {
              return e.hits;
            }).flat(), l(new Map(n.map(function (e) {
              return [e[t], e];
            })).values()))
          });
          var t, n;
        }).then(function (e) {
          return {
            recommendations: r(e)
          };
        }));
      })(e).then(function (e) {
        (r(e), c("idle"));
      }));
    }, [e, c]), Ge(Ge({}, n), {}, {
      status: i
    }));
  }
  function Ke(e) {
    var t = Je(e), r = t.recommendations, o = t.status;
    return D(ze, n({}, e, {
      items: r,
      status: o
    }));
  }
  (e.frequentlyBoughtTogether = function (e) {
    var r = e.container, o = e.environment, i = void 0 === o ? window : o, a = e.itemComponent, c = e.fallbackComponent, l = e.headerComponent, u = e.view, s = e.children, m = D(Ne, n({}, t(e, we), {
      view: u && je(u),
      itemComponent: a && je(a),
      headerComponent: l && je(l),
      fallbackComponent: c && je(c)
    }), s ? function (e) {
      return s(ke(ke({}, e), {}, {
        html: te
      }));
    } : void 0);
    return r ? (K(m, ye(r, i)), null) : m;
  }, e.relatedProducts = function (e) {
    var r = e.container, o = e.environment, i = void 0 === o ? window : o, a = e.itemComponent, c = e.fallbackComponent, l = e.headerComponent, u = e.view, s = e.children, m = D(He, n({}, t(e, xe), {
      view: u && je(u),
      itemComponent: a && je(a),
      headerComponent: l && je(l),
      fallbackComponent: c && je(c)
    }), s ? function (e) {
      return s(Ie(Ie({}, e), {}, {
        html: te
      }));
    } : void 0);
    return r ? (K(m, ye(r, i)), null) : m;
  }, e.trendingFacets = function (e) {
    var r = e.container, o = e.environment, i = void 0 === o ? window : o, a = e.itemComponent, c = e.fallbackComponent, l = e.headerComponent, u = e.view, s = e.children, m = D(We, n({}, t(e, qe), {
      view: u && je(u),
      itemComponent: a && je(a),
      headerComponent: l && je(l),
      fallbackComponent: c && je(c)
    }), s ? function (e) {
      return s(Le(Le({}, e), {}, {
        html: te
      }));
    } : void 0);
    return r ? (K(m, ye(r, i)), null) : m;
  }, e.trendingItems = function (e) {
    var r = e.container, o = e.environment, i = void 0 === o ? window : o, a = e.itemComponent, c = e.fallbackComponent, l = e.headerComponent, u = e.view, s = e.children, m = D(Ke, n({}, t(e, Be), {
      view: u && je(u),
      itemComponent: a && je(a),
      headerComponent: l && je(l),
      fallbackComponent: c && je(c)
    }), s ? function (e) {
      return s(Ge(Ge({}, e), {}, {
        html: te
      }));
    } : void 0);
    return r ? (K(m, ye(r, i)), null) : m;
  }, Object.defineProperty(e, "__esModule", {
    value: !0
  }));
});

},{}],"7lCBC":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _horizontalSlider = require('./horizontalSlider');
_parcelHelpers.exportAll(_horizontalSlider, exports);

},{"./horizontalSlider":"7Afnt","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7Afnt":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "horizontalSlider", function () {
  return horizontalSlider;
});
var _babelRuntimeHelpersObjectWithoutProperties = require("@babel/runtime/helpers/objectWithoutProperties");
var _babelRuntimeHelpersObjectWithoutPropertiesDefault = _parcelHelpers.interopDefault(_babelRuntimeHelpersObjectWithoutProperties);
var _babelRuntimeHelpersExtends = require("@babel/runtime/helpers/extends");
var _babelRuntimeHelpersExtendsDefault = _parcelHelpers.interopDefault(_babelRuntimeHelpersExtends);
var _algoliaUiComponentsHorizontalSliderVdom = require('@algolia/ui-components-horizontal-slider-vdom');
var _preact = require('preact');
var _preactHooks = require('preact/hooks');
var _getHTMLElement = require('./getHTMLElement');
var _excluded = ["container", "environment"];
var UncontrolledHorizontalSlider = _algoliaUiComponentsHorizontalSliderVdom.createHorizontalSliderComponent({
  createElement: _preact.createElement,
  Fragment: _preact.Fragment
});
function HorizontalSlider(props) {
  var listRef = _preactHooks.useRef(null);
  var nextButtonRef = _preactHooks.useRef(null);
  var previousButtonRef = _preactHooks.useRef(null);
  var sliderIdRef = _preactHooks.useRef(_algoliaUiComponentsHorizontalSliderVdom.generateHorizontalSliderId());
  _preactHooks.useEffect(function () {
    _algoliaUiComponentsHorizontalSliderVdom.updateNavigationButtonsProps({
      listRef: listRef,
      nextButtonRef: nextButtonRef,
      previousButtonRef: previousButtonRef
    });
  });
  return _preact.h(UncontrolledHorizontalSlider, _babelRuntimeHelpersExtendsDefault.default({}, props, {
    listRef: listRef,
    nextButtonRef: nextButtonRef,
    previousButtonRef: previousButtonRef,
    sliderIdRef: sliderIdRef,
    updateNavigationButtonsProps: function updateNavigationButtonsProps() {
      return _algoliaUiComponentsHorizontalSliderVdom.updateNavigationButtonsProps({
        listRef: listRef,
        nextButtonRef: nextButtonRef,
        previousButtonRef: previousButtonRef
      });
    }
  }));
}
function horizontalSlider(_ref) {
  var container = _ref.container, _ref$environment = _ref.environment, environment = _ref$environment === void 0 ? window : _ref$environment, props = _babelRuntimeHelpersObjectWithoutPropertiesDefault.default(_ref, _excluded);
  var children = _preact.h(HorizontalSlider, props);
  if (!container) {
    return children;
  }
  _preact.render(children, _getHTMLElement.getHTMLElement(container, environment));
  return undefined;
}

},{"@babel/runtime/helpers/objectWithoutProperties":"5JZkE","@babel/runtime/helpers/extends":"3krLJ","@algolia/ui-components-horizontal-slider-vdom":"15CkA","preact":"4VMxY","preact/hooks":"79Gq9","./getHTMLElement":"4b0mD","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5JZkE":[function(require,module,exports) {
var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./objectWithoutPropertiesLoose.js":"3Yx9V"}],"3Yx9V":[function(require,module,exports) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"3krLJ":[function(require,module,exports) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"15CkA":[function(require,module,exports) {
var define;
/*! @algolia/ui-components-horizontal-slider-vdom 1.0.0 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/ui-components*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self)["@algolia/ui-components-horizontal-slider-vdom"] = {});
})(this, function (e) {
  "use strict";
  function t(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function n(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  var r = 0;
  function i() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.filter(Boolean).join(" ");
  }
  (e.createHorizontalSliderComponent = function (e) {
    var r = e.createElement;
    return function (e) {
      var o, l = e.listRef, a = e.nextButtonRef, u = e.previousButtonRef, c = e.sliderIdRef, s = e.updateNavigationButtonsProps, f = (function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var i = null != arguments[r] ? arguments[r] : {};
          r % 2 ? n(Object(i), !0).forEach(function (n) {
            t(e, n, i[n]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
        }
        return e;
      })({
        sliderLabel: "Items",
        nextButtonLabel: "Next",
        nextButtonTitle: "Next",
        previousButtonLabel: "Previous",
        previousButtonTitle: "Previous"
      }, e.translations), d = null !== (o = e.classNames) && void 0 !== o ? o : {};
      function p() {
        l.current && (l.current.scrollLeft -= .75 * l.current.offsetWidth);
      }
      function v() {
        l.current && (l.current.scrollLeft += .75 * l.current.offsetWidth);
      }
      return 0 === e.items.length ? null : r("div", {
        className: i("uic-HorizontalSlider-container", d.root)
      }, r("button", {
        ref: u,
        title: f.previousButtonTitle,
        "aria-label": f.previousButtonLabel,
        "aria-controls": c.current,
        className: i("uic-HorizontalSlider-navigation", "uic-HorizontalSlider-navigation--previous", d.navigation, d.navigationPrevious),
        onClick: function (e) {
          (e.preventDefault(), p());
        }
      }, r("svg", {
        width: "8",
        height: "16",
        viewBox: "0 0 8 16",
        fill: "none"
      }, r("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.13809 0.744078C7.39844 1.06951 7.39844 1.59715 7.13809 1.92259L2.27616 8L7.13809 14.0774C7.39844 14.4028 7.39844 14.9305 7.13809 15.2559C6.87774 15.5814 6.45563 15.5814 6.19528 15.2559L0.861949 8.58926C0.6016 8.26382 0.6016 7.73618 0.861949 7.41074L6.19528 0.744078C6.45563 0.418641 6.87774 0.418641 7.13809 0.744078Z",
        fill: "currentColor"
      }))), r("ol", {
        className: i("uic-HorizontalSlider-list", d.list),
        ref: l,
        tabIndex: 0,
        id: c.current,
        "aria-roledescription": "carousel",
        "aria-label": f.sliderLabel,
        "aria-live": "polite",
        onScroll: s,
        onKeyDown: function (e) {
          "ArrowLeft" === e.key ? (e.preventDefault(), p()) : "ArrowRight" === e.key && (e.preventDefault(), v());
        }
      }, e.items.map(function (t, n) {
        return r("li", {
          key: t.objectID,
          className: i("uic-HorizontalSlider-item", d.item),
          "aria-roledescription": "slide",
          "aria-label": ("").concat(n + 1, " of ").concat(e.items.length)
        }, r(e.itemComponent, {
          item: t
        }));
      })), r("button", {
        ref: a,
        title: f.nextButtonTitle,
        "aria-label": f.nextButtonLabel,
        "aria-controls": c.current,
        className: i("uic-HorizontalSlider-navigation", "uic-HorizontalSlider-navigation--next", d.navigation, d.navigationNext),
        onClick: function (e) {
          (e.preventDefault(), v());
        }
      }, r("svg", {
        width: "8",
        height: "16",
        viewBox: "0 0 8 16",
        fill: "none"
      }, r("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.861908 15.2559C0.601559 14.9305 0.601559 14.4028 0.861908 14.0774L5.72384 8L0.861908 1.92259C0.601559 1.59715 0.601559 1.06952 0.861908 0.744079C1.12226 0.418642 1.54437 0.418642 1.80472 0.744079L7.13805 7.41074C7.3984 7.73618 7.3984 8.26382 7.13805 8.58926L1.80472 15.2559C1.54437 15.5814 1.12226 15.5814 0.861908 15.2559Z",
        fill: "currentColor"
      }))));
    };
  }, e.generateHorizontalSliderId = function () {
    return ("uic-horizontal-slider-").concat(r++);
  }, e.updateNavigationButtonsProps = function (e) {
    var t = e.listRef, n = e.nextButtonRef, r = e.previousButtonRef;
    t.current && r.current && n.current && (r.current.hidden = t.current.scrollLeft <= 0, n.current.hidden = t.current.scrollLeft + t.current.clientWidth >= t.current.scrollWidth);
  }, Object.defineProperty(e, "__esModule", {
    value: !0
  }));
});

},{}],"4VMxY":[function(require,module,exports) {
var n,l,u,t,i,r,o,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,t){var i,r,o,f={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y(l,f,i,r,null)}function y(n,t,i,r,o){var f={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function d(n){return n.children}function _(n,l,u,t,i){var r;for(r in u)"children"===r||"key"===r||r in l||x(n,r,null,u[r],t);for(r in l)i&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||x(n,r,l[r],u[r],t)}function k(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a.test(l)?u:u+"px"}function x(n,l,u,t,i){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||k(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||k(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t||n.addEventListener(l,r?g:b,r):n.removeEventListener(l,r?g:b,r);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u))}}function b(n){i=!0;try{return this.l[n.type+!1](l.event?l.event(n):n)}finally{i=!1}}function g(n){i=!0;try{return this.l[n.type+!0](l.event?l.event(n):n)}finally{i=!1}}function m(n,l){this.props=n,this.context=l}function w(n,l){if(null==l)return n.__?w(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?w(n):null}function A(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return A(n)}}function P(n){i?setTimeout(n):f(n)}function C(n){(!n.__d&&(n.__d=!0)&&r.push(n)&&!T.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||P)(T)}function T(){var n,l,u,t,i,o,f,e;for(r.sort(function(n,l){return n.__v.__b-l.__v.__b});n=r.shift();)n.__d&&(l=r.length,t=void 0,i=void 0,f=(o=(u=n).__v).__e,(e=u.__P)&&(t=[],(i=h({},o)).__v=o.__v+1,z(e,o,i,u.__n,void 0!==e.ownerSVGElement,null!=o.__h?[f]:null,t,null==f?w(o):f,o.__h),L(t,o),o.__e!=f&&A(o)),r.length>l&&r.sort(function(n,l){return n.__v.__b-l.__v.__b}));T.__r=0}function $(n,l,u,t,i,r,o,f,e,a){var h,p,v,_,k,x,b,g=t&&t.__k||s,m=g.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(v=g[h])||v&&_.key==v.key&&_.type===v.type)g[h]=void 0;else for(p=0;p<m;p++){if((v=g[p])&&_.key==v.key&&_.type===v.type){g[p]=void 0;break}v=null}z(n,_,v=v||c,i,r,o,f,e,a),k=_.__e,(p=_.ref)&&v.ref!=p&&(b||(b=[]),v.ref&&b.push(v.ref,null,_),b.push(p,_.__c||k,_)),null!=k?(null==x&&(x=k),"function"==typeof _.type&&_.__k===v.__k?_.__d=e=H(_,e,n):e=I(n,_,v,g,k,e),"function"==typeof u.type&&(u.__d=e)):e&&v.__e==e&&e.parentNode!=n&&(e=w(v))}for(u.__e=x,h=m;h--;)null!=g[h]&&("function"==typeof u.type&&null!=g[h].__e&&g[h].__e==u.__d&&(u.__d=j(t).nextSibling),O(g[h],g[h]));if(b)for(h=0;h<b.length;h++)N(b[h],b[++h],b[++h])}function H(n,l,u){for(var t,i=n.__k,r=0;i&&r<i.length;r++)(t=i[r])&&(t.__=n,l="function"==typeof t.type?H(t,l,u):I(u,t,t,i,t.__e,l));return l}function I(n,l,u,t,i,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||i!=r||null==i.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(i),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<t.length;e+=1)if(f==i)break n;n.insertBefore(i,r),o=r}return void 0!==o?o:i.nextSibling}function j(n){var l,u,t;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(t=j(u)))return t;return null}function z(n,u,t,i,r,o,f,e,c){var s,a,p,v,y,_,k,x,b,g,w,A,P,C,T,H=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(c=t.__h,e=u.__e=t.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof H){if(x=u.props,b=(s=H.contextType)&&i[s.__c],g=s?b?b.props.value:s.__:i,t.__c?k=(a=u.__c=t.__c).__=a.__E:("prototype"in H&&H.prototype.render?u.__c=a=new H(x,g):(u.__c=a=new m(x,g),a.constructor=H,a.render=S),b&&b.sub(a),a.props=x,a.state||(a.state={}),a.context=g,a.__n=i,p=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=H.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,H.getDerivedStateFromProps(x,a.__s))),v=a.props,y=a.state,a.__v=u,p)null==H.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==H.getDerivedStateFromProps&&x!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(x,g),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(x,a.__s,g)||u.__v===t.__v){for(u.__v!==t.__v&&(a.props=x,a.state=a.__s,a.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),w=0;w<a._sb.length;w++)a.__h.push(a._sb[w]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(x,a.__s,g),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(v,y,_)})}if(a.context=g,a.props=x,a.__P=n,A=l.__r,P=0,"prototype"in H&&H.prototype.render){for(a.state=a.__s,a.__d=!1,A&&A(u),s=a.render(a.props,a.state,a.context),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[]}else do{a.__d=!1,A&&A(u),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++P<25);a.state=a.__s,null!=a.getChildContext&&(i=h(h({},i),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(_=a.getSnapshotBeforeUpdate(v,y)),T=null!=s&&s.type===d&&null==s.key?s.props.children:s,$(n,Array.isArray(T)?T:[T],u,t,i,r,o,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),k&&(a.__E=a.__=null),a.__e=!1}else null==o&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=M(t.__e,u,t,i,r,o,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,t)}}function L(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function M(l,u,t,i,r,o,f,e){var s,a,h,v=t.props,y=u.props,d=u.type,k=0;if("svg"===d&&(r=!0),null!=o)for(;k<o.length;k++)if((s=o[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[k]=null;break}if(null==l){if(null===d)return document.createTextNode(y);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,y.is&&y),o=null,e=!1}if(null===d)v===y||e&&l.data===y||(l.data=y);else{if(o=o&&n.call(l.childNodes),a=(v=t.props||c).dangerouslySetInnerHTML,h=y.dangerouslySetInnerHTML,!e){if(null!=o)for(v={},k=0;k<l.attributes.length;k++)v[l.attributes[k].name]=l.attributes[k].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""))}if(_(l,y,v,r,e),h)u.__k=[];else if(k=u.props.children,$(l,Array.isArray(k)?k:[k],u,t,i,r&&"foreignObject"!==d,o,f,o?o[0]:t.__k&&w(t,0),e),null!=o)for(k=o.length;k--;)null!=o[k]&&p(o[k]);e||("value"in y&&void 0!==(k=y.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==v.value)&&x(l,"value",k,v.value,!1),"checked"in y&&void 0!==(k=y.checked)&&k!==l.checked&&x(l,"checked",k,v.checked,!1))}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,t)}}function O(n,u,t){var i,r;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null,n.__c=void 0}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&O(i[r],u,t||"function"!=typeof n.type);t||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0}function S(n,l,u){return this.constructor(n,u)}function q(u,t,i){var r,o,f;l.__&&l.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,f=[],z(t,u=(!r&&i||t).__k=v(d,null,[u]),o||c,c,void 0!==t.ownerSVGElement,!r&&i?[i]:o?null:t.firstChild?n.call(t.childNodes):null,f,!r&&i?i:o?o.__e:t.firstChild,r),L(f,u)}n=s.slice,l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&void 0===n.constructor},i=!1,m.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},u),this.props)),n&&h(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),C(this))},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),C(this))},m.prototype.render=d,r=[],f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,T.__r=0,e=0,exports.Component=m,exports.Fragment=d,exports.cloneElement=function(l,u,t){var i,r,o,f=h({},l.props);for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),y(l.type,f,i||l.key,r||l.ref,null)},exports.createContext=function(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,C(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},exports.createElement=v,exports.createRef=function(){return{current:null}},exports.h=v,exports.hydrate=function n(l,u){q(l,u,n)},exports.isValidElement=t,exports.options=l,exports.render=q,exports.toChildArray=function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(Array.isArray(l)?l.some(function(l){n(l,u)}):u.push(l)),u};

},{}],"79Gq9":[function(require,module,exports) {
var n,t,r,u,o=require("preact"),i=0,f=[],c=[],e=o.options.__b,a=o.options.__r,v=o.options.diffed,l=o.options.__c,s=o.options.unmount;function p(n,r){o.options.__h&&o.options.__h(t,n,i||r),i=0;var u=t.__H||(t.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function x(n){return i=1,m(P,n)}function m(r,u,o){var i=p(n++,2);if(i.t=r,!i.__c&&(i.__=[o?o(u):P(void 0,u),function(n){var t=i.__N?i.__N[0]:i.__[0],r=i.t(t,n);t!==r&&(i.__N=[r,i.__[1]],i.__c.setState({}))}],i.__c=t,!t.u)){t.u=!0;var f=t.shouldComponentUpdate;t.shouldComponentUpdate=function(n,t,r){if(!i.__c.__H)return!0;var u=i.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!f||f.call(this,n,t,r);var o=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(o=!0)}}),!(!o&&i.__c.props===n)&&(!f||f.call(this,n,t,r))}}return i.__N||i.__}function d(r,u){var i=p(n++,4);!o.options.__s&&T(i.__H,u)&&(i.__=r,i.o=u,t.__h.push(i))}function y(t,r){var u=p(n++,7);return T(u.__H,r)?(u.__V=t(),u.o=r,u.__h=t,u.__V):u.__}function h(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(A),n.__H.__h.forEach(F),n.__H.__h=[]}catch(t){n.__H.__h=[],o.options.__e(t,n.__v)}}o.options.__b=function(n){t=null,e&&e(n)},o.options.__r=function(u){a&&a(u),n=0;var o=(t=u.__c).__H;o&&(r===t?(o.__h=[],t.__h=[],o.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.o=void 0})):(o.__h.forEach(A),o.__h.forEach(F),o.__h=[])),r=t},o.options.diffed=function(n){v&&v(n);var i=n.__c;i&&i.__H&&(i.__H.__h.length&&(1!==f.push(i)&&u===o.options.requestAnimationFrame||((u=o.options.requestAnimationFrame)||q)(h)),i.__H.__.forEach(function(n){n.o&&(n.__H=n.o),n.__V!==c&&(n.__=n.__V),n.o=void 0,n.__V=c})),r=t=null},o.options.__c=function(n,t){t.some(function(n){try{n.__h.forEach(A),n.__h=n.__h.filter(function(n){return!n.__||F(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],o.options.__e(r,n.__v)}}),l&&l(n,t)},o.options.unmount=function(n){s&&s(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{A(n)}catch(n){t=n}}),r.__H=void 0,t&&o.options.__e(t,r.__v))};var _="function"==typeof requestAnimationFrame;function q(n){var t,r=function(){clearTimeout(u),_&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);_&&(t=requestAnimationFrame(r))}function A(n){var r=t,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),t=r}function F(n){var r=t;n.__c=n.__(),t=r}function T(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function P(n,t){return"function"==typeof t?t(n):t}exports.useCallback=function(n,t){return i=8,y(function(){return n},t)},exports.useContext=function(r){var u=t.context[r.__c],o=p(n++,9);return o.c=r,u?(null==o.__&&(o.__=!0,u.sub(t)),u.props.value):r.__},exports.useDebugValue=function(n,t){o.options.useDebugValue&&o.options.useDebugValue(t?t(n):n)},exports.useEffect=function(r,u){var i=p(n++,3);!o.options.__s&&T(i.__H,u)&&(i.__=r,i.o=u,t.__H.__h.push(i))},exports.useErrorBoundary=function(r){var u=p(n++,10),o=x();return u.__=r,t.componentDidCatch||(t.componentDidCatch=function(n,t){u.__&&u.__(n,t),o[1](n)}),[o[0],function(){o[1](void 0)}]},exports.useId=function(){var r=p(n++,11);if(!r.__){for(var u=t.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var o=u.__m||(u.__m=[0,0]);r.__="P"+o[0]+"-"+o[1]++}return r.__},exports.useImperativeHandle=function(n,t,r){i=6,d(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))},exports.useLayoutEffect=d,exports.useMemo=y,exports.useReducer=m,exports.useRef=function(n){return i=5,y(function(){return{current:n}},[])},exports.useState=x;

},{"preact":"4VMxY"}],"4b0mD":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "getHTMLElement", function () {
  return getHTMLElement;
});
function getHTMLElement(value, environment) {
  if (typeof value === 'string') {
    return environment.document.querySelector(value);
  }
  return value;
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"3TTCe":[function(require,module,exports) {
var define;
/*! algoliasearch.umd.js | 4.10.5 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript*/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).algoliasearch = e();
})(this, function () {
  "use strict";
  function t(t, e, r) {
    return ((e in t) ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t);
  }
  function e(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      (e && (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), r.push.apply(r, n));
    }
    return r;
  }
  function r(r) {
    for (var n = 1; n < arguments.length; n++) {
      var a = null != arguments[n] ? arguments[n] : {};
      n % 2 ? e(Object(a), !0).forEach(function (e) {
        t(r, e, a[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach(function (t) {
        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
      });
    }
    return r;
  }
  function n(t, e) {
    if (null == t) return {};
    var r, n, a = (function (t, e) {
      if (null == t) return {};
      var r, n, a = {}, o = Object.keys(t);
      for (n = 0; n < o.length; n++) (r = o[n], e.indexOf(r) >= 0 || (a[r] = t[r]));
      return a;
    })(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (n = 0; n < o.length; n++) (r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]));
    }
    return a;
  }
  function a(t, e) {
    return (function (t) {
      if (Array.isArray(t)) return t;
    })(t) || (function (t, e) {
      if (!((Symbol.iterator in Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
      var r = [], n = !0, a = !1, o = void 0;
      try {
        for (var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0) ;
      } catch (t) {
        (a = !0, o = t);
      } finally {
        try {
          n || null == u.return || u.return();
        } finally {
          if (a) throw o;
        }
      }
      return r;
    })(t, e) || (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    })();
  }
  function o(t) {
    return (function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
      }
    })(t) || (function (t) {
      if ((Symbol.iterator in Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    })(t) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    })();
  }
  function i(t) {
    var e, r = ("algoliasearch-client-js-").concat(t.key), n = function () {
      return (void 0 === e && (e = t.localStorage || window.localStorage), e);
    }, o = function () {
      return JSON.parse(n().getItem(r) || "{}");
    };
    return {
      get: function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        };
        return Promise.resolve().then(function () {
          var r = JSON.stringify(t), n = o()[r];
          return Promise.all([n || e(), void 0 !== n]);
        }).then(function (t) {
          var e = a(t, 2), n = e[0], o = e[1];
          return Promise.all([n, o || r.miss(n)]);
        }).then(function (t) {
          return a(t, 1)[0];
        });
      },
      set: function (t, e) {
        return Promise.resolve().then(function () {
          var a = o();
          return (a[JSON.stringify(t)] = e, n().setItem(r, JSON.stringify(a)), e);
        });
      },
      delete: function (t) {
        return Promise.resolve().then(function () {
          var e = o();
          (delete e[JSON.stringify(t)], n().setItem(r, JSON.stringify(e)));
        });
      },
      clear: function () {
        return Promise.resolve().then(function () {
          n().removeItem(r);
        });
      }
    };
  }
  function u(t) {
    var e = o(t.caches), r = e.shift();
    return void 0 === r ? {
      get: function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        }, n = e();
        return n.then(function (t) {
          return Promise.all([t, r.miss(t)]);
        }).then(function (t) {
          return a(t, 1)[0];
        });
      },
      set: function (t, e) {
        return Promise.resolve(e);
      },
      delete: function (t) {
        return Promise.resolve();
      },
      clear: function () {
        return Promise.resolve();
      }
    } : {
      get: function (t, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        };
        return r.get(t, n, a).catch(function () {
          return u({
            caches: e
          }).get(t, n, a);
        });
      },
      set: function (t, n) {
        return r.set(t, n).catch(function () {
          return u({
            caches: e
          }).set(t, n);
        });
      },
      delete: function (t) {
        return r.delete(t).catch(function () {
          return u({
            caches: e
          }).delete(t);
        });
      },
      clear: function () {
        return r.clear().catch(function () {
          return u({
            caches: e
          }).clear();
        });
      }
    };
  }
  function s() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      serializable: !0
    }, e = {};
    return {
      get: function (r, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        }, o = JSON.stringify(r);
        if ((o in e)) return Promise.resolve(t.serializable ? JSON.parse(e[o]) : e[o]);
        var i = n(), u = a && a.miss || (function () {
          return Promise.resolve();
        });
        return i.then(function (t) {
          return u(t);
        }).then(function () {
          return i;
        });
      },
      set: function (r, n) {
        return (e[JSON.stringify(r)] = t.serializable ? JSON.stringify(n) : n, Promise.resolve(n));
      },
      delete: function (t) {
        return (delete e[JSON.stringify(t)], Promise.resolve());
      },
      clear: function () {
        return (e = {}, Promise.resolve());
      }
    };
  }
  function c(t, e, r) {
    var n = {
      "x-algolia-api-key": r,
      "x-algolia-application-id": e
    };
    return {
      headers: function () {
        return t === m.WithinHeaders ? n : {};
      },
      queryParameters: function () {
        return t === m.WithinQueryParameters ? n : {};
      }
    };
  }
  function f(t) {
    var e = 0;
    return t(function r() {
      return (e++, new Promise(function (n) {
        setTimeout(function () {
          n(t(r));
        }, Math.min(100 * e, 1e3));
      }));
    });
  }
  function d(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (t, e) {
      return Promise.resolve();
    };
    return Object.assign(t, {
      wait: function (r) {
        return d(t.then(function (t) {
          return Promise.all([e(t, r), t]);
        }).then(function (t) {
          return t[1];
        }));
      }
    });
  }
  function l(t) {
    for (var e = t.length - 1; e > 0; e--) {
      var r = Math.floor(Math.random() * (e + 1)), n = t[e];
      (t[e] = t[r], t[r] = n);
    }
    return t;
  }
  function p(t, e) {
    return e ? (Object.keys(e).forEach(function (r) {
      t[r] = e[r](t);
    }), t) : t;
  }
  function h(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
    var a = 0;
    return t.replace(/%s/g, function () {
      return encodeURIComponent(r[a++]);
    });
  }
  var m = {
    WithinQueryParameters: 0,
    WithinHeaders: 1
  };
  function y(t, e) {
    var r = t || ({}), n = r.data || ({});
    return (Object.keys(r).forEach(function (t) {
      -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(t) && (n[t] = r[t]);
    }), {
      data: Object.entries(n).length > 0 ? n : void 0,
      timeout: r.timeout || e,
      headers: r.headers || ({}),
      queryParameters: r.queryParameters || ({}),
      cacheable: r.cacheable
    });
  }
  var g = {
    Read: 1,
    Write: 2,
    Any: 3
  }, v = 1, b = 2, P = 3;
  function w(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
    return r(r({}, t), {}, {
      status: e,
      lastUpdate: Date.now()
    });
  }
  function O(t) {
    return "string" == typeof t ? {
      protocol: "https",
      url: t,
      accept: g.Any
    } : {
      protocol: t.protocol || "https",
      url: t.url,
      accept: t.accept || g.Any
    };
  }
  var I = "DELETE", x = "GET", j = "POST", D = "PUT";
  function q(t, e) {
    return Promise.all(e.map(function (e) {
      return t.get(e, function () {
        return Promise.resolve(w(e));
      });
    })).then(function (t) {
      var r = t.filter(function (t) {
        return (function (t) {
          return t.status === v || Date.now() - t.lastUpdate > 12e4;
        })(t);
      }), n = t.filter(function (t) {
        return (function (t) {
          return t.status === P && Date.now() - t.lastUpdate <= 12e4;
        })(t);
      }), a = [].concat(o(r), o(n));
      return {
        getTimeout: function (t, e) {
          return (0 === n.length && 0 === t ? 1 : n.length + 3 + t) * e;
        },
        statelessHosts: a.length > 0 ? a.map(function (t) {
          return O(t);
        }) : e
      };
    });
  }
  function S(t, e, n, a) {
    var i = [], u = (function (t, e) {
      if (t.method === x || void 0 === t.data && void 0 === e.data) return;
      var n = Array.isArray(t.data) ? t.data : r(r({}, t.data), e.data);
      return JSON.stringify(n);
    })(n, a), s = (function (t, e) {
      var n = r(r({}, t.headers), e.headers), a = {};
      return (Object.keys(n).forEach(function (t) {
        var e = n[t];
        a[t.toLowerCase()] = e;
      }), a);
    })(t, a), c = n.method, f = n.method !== x ? {} : r(r({}, n.data), a.data), d = r(r(r({
      "x-algolia-agent": t.userAgent.value
    }, t.queryParameters), f), a.queryParameters), l = 0, p = function e(r, o) {
      var f = r.pop();
      if (void 0 === f) throw {
        name: "RetryError",
        message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
        transporterStackTrace: R(i)
      };
      var p = {
        data: u,
        headers: s,
        method: c,
        url: N(f, n.path, d),
        connectTimeout: o(l, t.timeouts.connect),
        responseTimeout: o(l, a.timeout)
      }, h = function (t) {
        var e = {
          request: p,
          response: t,
          host: f,
          triesLeft: r.length
        };
        return (i.push(e), e);
      }, m = {
        onSuccess: function (t) {
          return (function (t) {
            try {
              return JSON.parse(t.content);
            } catch (e) {
              throw (function (t, e) {
                return {
                  name: "DeserializationError",
                  message: t,
                  response: e
                };
              })(e.message, t);
            }
          })(t);
        },
        onRetry: function (n) {
          var a = h(n);
          return (n.isTimedOut && l++, Promise.all([t.logger.info("Retryable failure", A(a)), t.hostsCache.set(f, w(f, n.isTimedOut ? P : b))]).then(function () {
            return e(r, o);
          }));
        },
        onFail: function (t) {
          throw (h(t), (function (t, e) {
            var r = t.content, n = t.status, a = r;
            try {
              a = JSON.parse(r).message;
            } catch (t) {}
            return (function (t, e, r) {
              return {
                name: "ApiError",
                message: t,
                status: e,
                transporterStackTrace: r
              };
            })(a, n, e);
          })(t, R(i)));
        }
      };
      return t.requester.send(p).then(function (t) {
        return (function (t, e) {
          return (function (t) {
            var e = t.status;
            return t.isTimedOut || (function (t) {
              var e = t.isTimedOut, r = t.status;
              return !e && 0 == ~~r;
            })(t) || 2 != ~~(e / 100) && 4 != ~~(e / 100);
          })(t) ? e.onRetry(t) : 2 == ~~(t.status / 100) ? e.onSuccess(t) : e.onFail(t);
        })(t, m);
      });
    };
    return q(t.hostsCache, e).then(function (t) {
      return p(o(t.statelessHosts).reverse(), t.getTimeout);
    });
  }
  function k(t) {
    var e = t.hostsCache, r = t.logger, n = t.requester, o = t.requestsCache, i = t.responsesCache, u = t.timeouts, s = t.userAgent, c = t.hosts, f = t.queryParameters, d = {
      hostsCache: e,
      logger: r,
      requester: n,
      requestsCache: o,
      responsesCache: i,
      timeouts: u,
      userAgent: s,
      headers: t.headers,
      queryParameters: f,
      hosts: c.map(function (t) {
        return O(t);
      }),
      read: function (t, e) {
        var r = y(e, d.timeouts.read), n = function () {
          return S(d, d.hosts.filter(function (t) {
            return 0 != (t.accept & g.Read);
          }), t, r);
        };
        if (!0 !== (void 0 !== r.cacheable ? r.cacheable : t.cacheable)) return n();
        var o = {
          request: t,
          mappedRequestOptions: r,
          transporter: {
            queryParameters: d.queryParameters,
            headers: d.headers
          }
        };
        return d.responsesCache.get(o, function () {
          return d.requestsCache.get(o, function () {
            return d.requestsCache.set(o, n()).then(function (t) {
              return Promise.all([d.requestsCache.delete(o), t]);
            }, function (t) {
              return Promise.all([d.requestsCache.delete(o), Promise.reject(t)]);
            }).then(function (t) {
              var e = a(t, 2);
              e[0];
              return e[1];
            });
          });
        }, {
          miss: function (t) {
            return d.responsesCache.set(o, t);
          }
        });
      },
      write: function (t, e) {
        return S(d, d.hosts.filter(function (t) {
          return 0 != (t.accept & g.Write);
        }), t, y(e, d.timeouts.write));
      }
    };
    return d;
  }
  function T(t) {
    var e = {
      value: ("Algolia for JavaScript (").concat(t, ")"),
      add: function (t) {
        var r = ("; ").concat(t.segment).concat(void 0 !== t.version ? (" (").concat(t.version, ")") : "");
        return (-1 === e.value.indexOf(r) && (e.value = ("").concat(e.value).concat(r)), e);
      }
    };
    return e;
  }
  function N(t, e, r) {
    var n = E(r), a = ("").concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
    return (n.length && (a += ("?").concat(n)), a);
  }
  function E(t) {
    return Object.keys(t).map(function (e) {
      return h("%s=%s", e, (r = t[e], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(t[e]) : t[e]));
      var r;
    }).join("&");
  }
  function R(t) {
    return t.map(function (t) {
      return A(t);
    });
  }
  function A(t) {
    var e = t.request.headers["x-algolia-api-key"] ? {
      "x-algolia-api-key": "*****"
    } : {};
    return r(r({}, t), {}, {
      request: r(r({}, t.request), {}, {
        headers: r(r({}, t.request.headers), e)
      })
    });
  }
  var C = function (t) {
    return function (e, r) {
      return t.transporter.write({
        method: j,
        path: "2/abtests",
        data: e
      }, r);
    };
  }, U = function (t) {
    return function (e, r) {
      return t.transporter.write({
        method: I,
        path: h("2/abtests/%s", e)
      }, r);
    };
  }, z = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: x,
        path: h("2/abtests/%s", e)
      }, r);
    };
  }, J = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "2/abtests"
      }, e);
    };
  }, F = function (t) {
    return function (e, r) {
      return t.transporter.write({
        method: j,
        path: h("2/abtests/%s/stop", e)
      }, r);
    };
  }, H = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "1/strategies/personalization"
      }, e);
    };
  }, M = function (t) {
    return function (e, r) {
      return t.transporter.write({
        method: j,
        path: "1/strategies/personalization",
        data: e
      }, r);
    };
  };
  function K(t) {
    return (function e(r) {
      return t.request(r).then(function (n) {
        if ((void 0 !== t.batch && t.batch(n.hits), !t.shouldStop(n))) return n.cursor ? e({
          cursor: n.cursor
        }) : e({
          page: (r.page || 0) + 1
        });
      });
    })({});
  }
  var W = function (t) {
    return function (e, a) {
      var o = a || ({}), i = o.queryParameters, u = n(o, ["queryParameters"]), s = r({
        acl: e
      }, void 0 !== i ? {
        queryParameters: i
      } : {});
      return d(t.transporter.write({
        method: j,
        path: "1/keys",
        data: s
      }, u), function (e, r) {
        return f(function (n) {
          return $(t)(e.key, r).catch(function (t) {
            if (404 !== t.status) throw t;
            return n();
          });
        });
      });
    };
  }, B = function (t) {
    return function (e, r, n) {
      var a = y(n);
      return (a.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
        method: j,
        path: "1/clusters/mapping",
        data: {
          cluster: r
        }
      }, a));
    };
  }, Q = function (t) {
    return function (e, r, n) {
      return t.transporter.write({
        method: j,
        path: "1/clusters/mapping/batch",
        data: {
          users: e,
          cluster: r
        }
      }, n);
    };
  }, G = function (t) {
    return function (e, r) {
      return d(t.transporter.write({
        method: j,
        path: h("/1/dictionaries/%s/batch", e),
        data: {
          clearExistingDictionaryEntries: !0,
          requests: {
            action: "addEntry",
            body: []
          }
        }
      }, r), function (e, r) {
        return xt(t)(e.taskID, r);
      });
    };
  }, L = function (t) {
    return function (e, r, n) {
      return d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/operation", e),
        data: {
          operation: "copy",
          destination: r
        }
      }, n), function (r, n) {
        return it(t)(e, {
          methods: {
            waitTask: fe
          }
        }).waitTask(r.taskID, n);
      });
    };
  }, V = function (t) {
    return function (e, n, a) {
      return L(t)(e, n, r(r({}, a), {}, {
        scope: [le.Rules]
      }));
    };
  }, _ = function (t) {
    return function (e, n, a) {
      return L(t)(e, n, r(r({}, a), {}, {
        scope: [le.Settings]
      }));
    };
  }, X = function (t) {
    return function (e, n, a) {
      return L(t)(e, n, r(r({}, a), {}, {
        scope: [le.Synonyms]
      }));
    };
  }, Y = function (t) {
    return function (e, r) {
      return d(t.transporter.write({
        method: I,
        path: h("1/keys/%s", e)
      }, r), function (r, n) {
        return f(function (r) {
          return $(t)(e, n).then(r).catch(function (t) {
            if (404 !== t.status) throw t;
          });
        });
      });
    };
  }, Z = function (t) {
    return function (e, r, n) {
      var a = r.map(function (t) {
        return {
          action: "deleteEntry",
          body: {
            objectID: t
          }
        };
      });
      return d(t.transporter.write({
        method: j,
        path: h("/1/dictionaries/%s/batch", e),
        data: {
          clearExistingDictionaryEntries: !1,
          requests: a
        }
      }, n), function (e, r) {
        return xt(t)(e.taskID, r);
      });
    };
  }, $ = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: x,
        path: h("1/keys/%s", e)
      }, r);
    };
  }, tt = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "/1/dictionaries/*/settings"
      }, e);
    };
  }, et = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "1/logs"
      }, e);
    };
  }, rt = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "1/clusters/mapping/top"
      }, e);
    };
  }, nt = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: x,
        path: h("1/task/%s", e.toString())
      }, r);
    };
  }, at = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: x,
        path: h("1/clusters/mapping/%s", e)
      }, r);
    };
  }, ot = function (t) {
    return function (e) {
      var r = e || ({}), a = r.retrieveMappings, o = n(r, ["retrieveMappings"]);
      return (!0 === a && (o.getClusters = !0), t.transporter.read({
        method: x,
        path: "1/clusters/mapping/pending"
      }, o));
    };
  }, it = function (t) {
    return function (e) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
        transporter: t.transporter,
        appId: t.appId,
        indexName: e
      };
      return p(n, r.methods);
    };
  }, ut = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "1/keys"
      }, e);
    };
  }, st = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "1/clusters"
      }, e);
    };
  }, ct = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "1/indexes"
      }, e);
    };
  }, ft = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: "1/clusters/mapping"
      }, e);
    };
  }, dt = function (t) {
    return function (e, r, n) {
      return d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/operation", e),
        data: {
          operation: "move",
          destination: r
        }
      }, n), function (r, n) {
        return it(t)(e, {
          methods: {
            waitTask: fe
          }
        }).waitTask(r.taskID, n);
      });
    };
  }, lt = function (t) {
    return function (e, r) {
      return d(t.transporter.write({
        method: j,
        path: "1/indexes/*/batch",
        data: {
          requests: e
        }
      }, r), function (e, r) {
        return Promise.all(Object.keys(e.taskID).map(function (n) {
          return it(t)(n, {
            methods: {
              waitTask: fe
            }
          }).waitTask(e.taskID[n], r);
        }));
      });
    };
  }, pt = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: j,
        path: "1/indexes/*/objects",
        data: {
          requests: e
        }
      }, r);
    };
  }, ht = function (t) {
    return function (e, n) {
      var a = e.map(function (t) {
        return r(r({}, t), {}, {
          params: E(t.params || ({}))
        });
      });
      return t.transporter.read({
        method: j,
        path: "1/indexes/*/queries",
        data: {
          requests: a
        },
        cacheable: !0
      }, n);
    };
  }, mt = function (t) {
    return function (e, a) {
      return Promise.all(e.map(function (e) {
        var o = e.params, i = o.facetName, u = o.facetQuery, s = n(o, ["facetName", "facetQuery"]);
        return it(t)(e.indexName, {
          methods: {
            searchForFacetValues: ie
          }
        }).searchForFacetValues(i, u, r(r({}, a), s));
      }));
    };
  }, yt = function (t) {
    return function (e, r) {
      var n = y(r);
      return (n.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
        method: I,
        path: "1/clusters/mapping"
      }, n));
    };
  }, gt = function (t) {
    return function (e, r, n) {
      var a = r.map(function (t) {
        return {
          action: "addEntry",
          body: t
        };
      });
      return d(t.transporter.write({
        method: j,
        path: h("/1/dictionaries/%s/batch", e),
        data: {
          clearExistingDictionaryEntries: !0,
          requests: a
        }
      }, n), function (e, r) {
        return xt(t)(e.taskID, r);
      });
    };
  }, vt = function (t) {
    return function (e, r) {
      return d(t.transporter.write({
        method: j,
        path: h("1/keys/%s/restore", e)
      }, r), function (r, n) {
        return f(function (r) {
          return $(t)(e, n).catch(function (t) {
            if (404 !== t.status) throw t;
            return r();
          });
        });
      });
    };
  }, bt = function (t) {
    return function (e, r, n) {
      var a = r.map(function (t) {
        return {
          action: "addEntry",
          body: t
        };
      });
      return d(t.transporter.write({
        method: j,
        path: h("/1/dictionaries/%s/batch", e),
        data: {
          clearExistingDictionaryEntries: !1,
          requests: a
        }
      }, n), function (e, r) {
        return xt(t)(e.taskID, r);
      });
    };
  }, Pt = function (t) {
    return function (e, r, n) {
      return t.transporter.read({
        method: j,
        path: h("/1/dictionaries/%s/search", e),
        data: {
          query: r
        },
        cacheable: !0
      }, n);
    };
  }, wt = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: j,
        path: "1/clusters/mapping/search",
        data: {
          query: e
        }
      }, r);
    };
  }, Ot = function (t) {
    return function (e, r) {
      return d(t.transporter.write({
        method: D,
        path: "/1/dictionaries/*/settings",
        data: e
      }, r), function (e, r) {
        return xt(t)(e.taskID, r);
      });
    };
  }, It = function (t) {
    return function (e, r) {
      var a = Object.assign({}, r), o = r || ({}), i = o.queryParameters, u = n(o, ["queryParameters"]), s = i ? {
        queryParameters: i
      } : {}, c = ["acl", "indexes", "referers", "restrictSources", "queryParameters", "description", "maxQueriesPerIPPerHour", "maxHitsPerQuery"];
      return d(t.transporter.write({
        method: D,
        path: h("1/keys/%s", e),
        data: s
      }, u), function (r, n) {
        return f(function (r) {
          return $(t)(e, n).then(function (t) {
            return (function (t) {
              return Object.keys(a).filter(function (t) {
                return -1 !== c.indexOf(t);
              }).every(function (e) {
                return t[e] === a[e];
              });
            })(t) ? Promise.resolve() : r();
          });
        });
      });
    };
  }, xt = function (t) {
    return function (e, r) {
      return f(function (n) {
        return nt(t)(e, r).then(function (t) {
          return "published" !== t.status ? n() : void 0;
        });
      });
    };
  }, jt = function (t) {
    return function (e, r) {
      return d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/batch", t.indexName),
        data: {
          requests: e
        }
      }, r), function (e, r) {
        return fe(t)(e.taskID, r);
      });
    };
  }, Dt = function (t) {
    return function (e) {
      return K(r(r({
        shouldStop: function (t) {
          return void 0 === t.cursor;
        }
      }, e), {}, {
        request: function (r) {
          return t.transporter.read({
            method: j,
            path: h("1/indexes/%s/browse", t.indexName),
            data: r
          }, e);
        }
      }));
    };
  }, qt = function (t) {
    return function (e) {
      var n = r({
        hitsPerPage: 1e3
      }, e);
      return K(r(r({
        shouldStop: function (t) {
          return t.hits.length < n.hitsPerPage;
        }
      }, n), {}, {
        request: function (e) {
          return ue(t)("", r(r({}, n), e)).then(function (t) {
            return r(r({}, t), {}, {
              hits: t.hits.map(function (t) {
                return (delete t._highlightResult, t);
              })
            });
          });
        }
      }));
    };
  }, St = function (t) {
    return function (e) {
      var n = r({
        hitsPerPage: 1e3
      }, e);
      return K(r(r({
        shouldStop: function (t) {
          return t.hits.length < n.hitsPerPage;
        }
      }, n), {}, {
        request: function (e) {
          return se(t)("", r(r({}, n), e)).then(function (t) {
            return r(r({}, t), {}, {
              hits: t.hits.map(function (t) {
                return (delete t._highlightResult, t);
              })
            });
          });
        }
      }));
    };
  }, kt = function (t) {
    return function (e, r, a) {
      var o = a || ({}), i = o.batchSize, u = n(o, ["batchSize"]), s = {
        taskIDs: [],
        objectIDs: []
      };
      return d((function n() {
        var a, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, c = [];
        for (a = o; a < e.length && (c.push(e[a]), c.length !== (i || 1e3)); a++) ;
        return 0 === c.length ? Promise.resolve(s) : jt(t)(c.map(function (t) {
          return {
            action: r,
            body: t
          };
        }), u).then(function (t) {
          return (s.objectIDs = s.objectIDs.concat(t.objectIDs), s.taskIDs.push(t.taskID), a++, n(a));
        });
      })(), function (e, r) {
        return Promise.all(e.taskIDs.map(function (e) {
          return fe(t)(e, r);
        }));
      });
    };
  }, Tt = function (t) {
    return function (e) {
      return d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/clear", t.indexName)
      }, e), function (e, r) {
        return fe(t)(e.taskID, r);
      });
    };
  }, Nt = function (t) {
    return function (e) {
      var r = e || ({}), a = r.forwardToReplicas, o = y(n(r, ["forwardToReplicas"]));
      return (a && (o.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/rules/clear", t.indexName)
      }, o), function (e, r) {
        return fe(t)(e.taskID, r);
      }));
    };
  }, Et = function (t) {
    return function (e) {
      var r = e || ({}), a = r.forwardToReplicas, o = y(n(r, ["forwardToReplicas"]));
      return (a && (o.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/synonyms/clear", t.indexName)
      }, o), function (e, r) {
        return fe(t)(e.taskID, r);
      }));
    };
  }, Rt = function (t) {
    return function (e, r) {
      return d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/deleteByQuery", t.indexName),
        data: e
      }, r), function (e, r) {
        return fe(t)(e.taskID, r);
      });
    };
  }, At = function (t) {
    return function (e) {
      return d(t.transporter.write({
        method: I,
        path: h("1/indexes/%s", t.indexName)
      }, e), function (e, r) {
        return fe(t)(e.taskID, r);
      });
    };
  }, Ct = function (t) {
    return function (e, r) {
      return d(Ut(t)([e], r).then(function (t) {
        return {
          taskID: t.taskIDs[0]
        };
      }), function (e, r) {
        return fe(t)(e.taskID, r);
      });
    };
  }, Ut = function (t) {
    return function (e, r) {
      var n = e.map(function (t) {
        return {
          objectID: t
        };
      });
      return kt(t)(n, de.DeleteObject, r);
    };
  }, zt = function (t) {
    return function (e, r) {
      var a = r || ({}), o = a.forwardToReplicas, i = y(n(a, ["forwardToReplicas"]));
      return (o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
        method: I,
        path: h("1/indexes/%s/rules/%s", t.indexName, e)
      }, i), function (e, r) {
        return fe(t)(e.taskID, r);
      }));
    };
  }, Jt = function (t) {
    return function (e, r) {
      var a = r || ({}), o = a.forwardToReplicas, i = y(n(a, ["forwardToReplicas"]));
      return (o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
        method: I,
        path: h("1/indexes/%s/synonyms/%s", t.indexName, e)
      }, i), function (e, r) {
        return fe(t)(e.taskID, r);
      }));
    };
  }, Ft = function (t) {
    return function (e) {
      return Gt(t)(e).then(function () {
        return !0;
      }).catch(function (t) {
        if (404 !== t.status) throw t;
        return !1;
      });
    };
  }, Ht = function (t) {
    return function (e, r, n) {
      return t.transporter.read({
        method: j,
        path: h("1/answers/%s/prediction", t.indexName),
        data: {
          query: e,
          queryLanguages: r
        },
        cacheable: !0
      }, n);
    };
  }, Mt = function (t) {
    return function (e, o) {
      var i = o || ({}), u = i.query, s = i.paginate, c = n(i, ["query", "paginate"]), f = 0;
      return (function n() {
        return oe(t)(u || "", r(r({}, c), {}, {
          page: f
        })).then(function (t) {
          for (var r = 0, o = Object.entries(t.hits); r < o.length; r++) {
            var i = a(o[r], 2), u = i[0], c = i[1];
            if (e(c)) return {
              object: c,
              position: parseInt(u, 10),
              page: f
            };
          }
          if ((f++, !1 === s || f >= t.nbPages)) throw {
            name: "ObjectNotFoundError",
            message: "Object not found."
          };
          return n();
        });
      })();
    };
  }, Kt = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: x,
        path: h("1/indexes/%s/%s", t.indexName, e)
      }, r);
    };
  }, Wt = function () {
    return function (t, e) {
      for (var r = 0, n = Object.entries(t.hits); r < n.length; r++) {
        var o = a(n[r], 2), i = o[0];
        if (o[1].objectID === e) return parseInt(i, 10);
      }
      return -1;
    };
  }, Bt = function (t) {
    return function (e, a) {
      var o = a || ({}), i = o.attributesToRetrieve, u = n(o, ["attributesToRetrieve"]), s = e.map(function (e) {
        return r({
          indexName: t.indexName,
          objectID: e
        }, i ? {
          attributesToRetrieve: i
        } : {});
      });
      return t.transporter.read({
        method: j,
        path: "1/indexes/*/objects",
        data: {
          requests: s
        }
      }, u);
    };
  }, Qt = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: x,
        path: h("1/indexes/%s/rules/%s", t.indexName, e)
      }, r);
    };
  }, Gt = function (t) {
    return function (e) {
      return t.transporter.read({
        method: x,
        path: h("1/indexes/%s/settings", t.indexName),
        data: {
          getVersion: 2
        }
      }, e);
    };
  }, Lt = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: x,
        path: h("1/indexes/%s/synonyms/%s", t.indexName, e)
      }, r);
    };
  }, Vt = function (t) {
    return function (e, r) {
      return d(_t(t)([e], r).then(function (t) {
        return {
          objectID: t.objectIDs[0],
          taskID: t.taskIDs[0]
        };
      }), function (e, r) {
        return fe(t)(e.taskID, r);
      });
    };
  }, _t = function (t) {
    return function (e, r) {
      var a = r || ({}), o = a.createIfNotExists, i = n(a, ["createIfNotExists"]), u = o ? de.PartialUpdateObject : de.PartialUpdateObjectNoCreate;
      return kt(t)(e, u, i);
    };
  }, Xt = function (t) {
    return function (e, i) {
      var u = i || ({}), s = u.safe, c = u.autoGenerateObjectIDIfNotExist, f = u.batchSize, l = n(u, ["safe", "autoGenerateObjectIDIfNotExist", "batchSize"]), p = function (e, r, n, a) {
        return d(t.transporter.write({
          method: j,
          path: h("1/indexes/%s/operation", e),
          data: {
            operation: n,
            destination: r
          }
        }, a), function (e, r) {
          return fe(t)(e.taskID, r);
        });
      }, m = Math.random().toString(36).substring(7), y = ("").concat(t.indexName, "_tmp_").concat(m), g = te({
        appId: t.appId,
        transporter: t.transporter,
        indexName: y
      }), v = [], b = p(t.indexName, y, "copy", r(r({}, l), {}, {
        scope: ["settings", "synonyms", "rules"]
      }));
      return (v.push(b), d((s ? b.wait(l) : b).then(function () {
        var t = g(e, r(r({}, l), {}, {
          autoGenerateObjectIDIfNotExist: c,
          batchSize: f
        }));
        return (v.push(t), s ? t.wait(l) : t);
      }).then(function () {
        var e = p(y, t.indexName, "move", l);
        return (v.push(e), s ? e.wait(l) : e);
      }).then(function () {
        return Promise.all(v);
      }).then(function (t) {
        var e = a(t, 3), r = e[0], n = e[1], i = e[2];
        return {
          objectIDs: n.objectIDs,
          taskIDs: [r.taskID].concat(o(n.taskIDs), [i.taskID])
        };
      }), function (t, e) {
        return Promise.all(v.map(function (t) {
          return t.wait(e);
        }));
      }));
    };
  }, Yt = function (t) {
    return function (e, n) {
      return re(t)(e, r(r({}, n), {}, {
        clearExistingRules: !0
      }));
    };
  }, Zt = function (t) {
    return function (e, n) {
      return ae(t)(e, r(r({}, n), {}, {
        clearExistingSynonyms: !0
      }));
    };
  }, $t = function (t) {
    return function (e, r) {
      return d(te(t)([e], r).then(function (t) {
        return {
          objectID: t.objectIDs[0],
          taskID: t.taskIDs[0]
        };
      }), function (e, r) {
        return fe(t)(e.taskID, r);
      });
    };
  }, te = function (t) {
    return function (e, r) {
      var a = r || ({}), o = a.autoGenerateObjectIDIfNotExist, i = n(a, ["autoGenerateObjectIDIfNotExist"]), u = o ? de.AddObject : de.UpdateObject;
      if (u === de.UpdateObject) {
        var s = !0, c = !1, f = void 0;
        try {
          for (var l, p = e[Symbol.iterator](); !(s = (l = p.next()).done); s = !0) {
            if (void 0 === l.value.objectID) return d(Promise.reject({
              name: "MissingObjectIDError",
              message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
            }));
          }
        } catch (t) {
          (c = !0, f = t);
        } finally {
          try {
            s || null == p.return || p.return();
          } finally {
            if (c) throw f;
          }
        }
      }
      return kt(t)(e, u, i);
    };
  }, ee = function (t) {
    return function (e, r) {
      return re(t)([e], r);
    };
  }, re = function (t) {
    return function (e, r) {
      var a = r || ({}), o = a.forwardToReplicas, i = a.clearExistingRules, u = y(n(a, ["forwardToReplicas", "clearExistingRules"]));
      return (o && (u.queryParameters.forwardToReplicas = 1), i && (u.queryParameters.clearExistingRules = 1), d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/rules/batch", t.indexName),
        data: e
      }, u), function (e, r) {
        return fe(t)(e.taskID, r);
      }));
    };
  }, ne = function (t) {
    return function (e, r) {
      return ae(t)([e], r);
    };
  }, ae = function (t) {
    return function (e, r) {
      var a = r || ({}), o = a.forwardToReplicas, i = a.clearExistingSynonyms, u = a.replaceExistingSynonyms, s = y(n(a, ["forwardToReplicas", "clearExistingSynonyms", "replaceExistingSynonyms"]));
      return (o && (s.queryParameters.forwardToReplicas = 1), (u || i) && (s.queryParameters.replaceExistingSynonyms = 1), d(t.transporter.write({
        method: j,
        path: h("1/indexes/%s/synonyms/batch", t.indexName),
        data: e
      }, s), function (e, r) {
        return fe(t)(e.taskID, r);
      }));
    };
  }, oe = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: j,
        path: h("1/indexes/%s/query", t.indexName),
        data: {
          query: e
        },
        cacheable: !0
      }, r);
    };
  }, ie = function (t) {
    return function (e, r, n) {
      return t.transporter.read({
        method: j,
        path: h("1/indexes/%s/facets/%s/query", t.indexName, e),
        data: {
          facetQuery: r
        },
        cacheable: !0
      }, n);
    };
  }, ue = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: j,
        path: h("1/indexes/%s/rules/search", t.indexName),
        data: {
          query: e
        }
      }, r);
    };
  }, se = function (t) {
    return function (e, r) {
      return t.transporter.read({
        method: j,
        path: h("1/indexes/%s/synonyms/search", t.indexName),
        data: {
          query: e
        }
      }, r);
    };
  }, ce = function (t) {
    return function (e, r) {
      var a = r || ({}), o = a.forwardToReplicas, i = y(n(a, ["forwardToReplicas"]));
      return (o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
        method: D,
        path: h("1/indexes/%s/settings", t.indexName),
        data: e
      }, i), function (e, r) {
        return fe(t)(e.taskID, r);
      }));
    };
  }, fe = function (t) {
    return function (e, r) {
      return f(function (n) {
        return (function (t) {
          return function (e, r) {
            return t.transporter.read({
              method: x,
              path: h("1/indexes/%s/task/%s", t.indexName, e.toString())
            }, r);
          };
        })(t)(e, r).then(function (t) {
          return "published" !== t.status ? n() : void 0;
        });
      });
    };
  }, de = {
    AddObject: "addObject",
    UpdateObject: "updateObject",
    PartialUpdateObject: "partialUpdateObject",
    PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
    DeleteObject: "deleteObject",
    DeleteIndex: "delete",
    ClearIndex: "clear"
  }, le = {
    Settings: "settings",
    Synonyms: "synonyms",
    Rules: "rules"
  }, pe = 1, he = 2, me = 3;
  function ye(t, e, n) {
    var a, o = {
      appId: t,
      apiKey: e,
      timeouts: {
        connect: 1,
        read: 2,
        write: 30
      },
      requester: {
        send: function (t) {
          return new Promise(function (e) {
            var r = new XMLHttpRequest();
            (r.open(t.method, t.url, !0), Object.keys(t.headers).forEach(function (e) {
              return r.setRequestHeader(e, t.headers[e]);
            }));
            var n, a = function (t, n) {
              return setTimeout(function () {
                (r.abort(), e({
                  status: 0,
                  content: n,
                  isTimedOut: !0
                }));
              }, 1e3 * t);
            }, o = a(t.connectTimeout, "Connection timeout");
            (r.onreadystatechange = function () {
              r.readyState > r.OPENED && void 0 === n && (clearTimeout(o), n = a(t.responseTimeout, "Socket timeout"));
            }, r.onerror = function () {
              0 === r.status && (clearTimeout(o), clearTimeout(n), e({
                content: r.responseText || "Network request failed",
                status: r.status,
                isTimedOut: !1
              }));
            }, r.onload = function () {
              (clearTimeout(o), clearTimeout(n), e({
                content: r.responseText,
                status: r.status,
                isTimedOut: !1
              }));
            }, r.send(t.data));
          });
        }
      },
      logger: (a = me, {
        debug: function (t, e) {
          return (pe >= a && console.debug(t, e), Promise.resolve());
        },
        info: function (t, e) {
          return (he >= a && console.info(t, e), Promise.resolve());
        },
        error: function (t, e) {
          return (console.error(t, e), Promise.resolve());
        }
      }),
      responsesCache: s(),
      requestsCache: s({
        serializable: !1
      }),
      hostsCache: u({
        caches: [i({
          key: ("").concat("4.10.5", "-").concat(t)
        }), s()]
      }),
      userAgent: T("4.10.5").add({
        segment: "Browser"
      })
    }, f = r(r({}, o), n), d = function () {
      return function (t) {
        return (function (t) {
          var e = t.region || "us", n = c(m.WithinHeaders, t.appId, t.apiKey), a = k(r(r({
            hosts: [{
              url: ("personalization.").concat(e, ".algolia.com")
            }]
          }, t), {}, {
            headers: r(r(r({}, n.headers()), {
              "content-type": "application/json"
            }), t.headers),
            queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
          }));
          return p({
            appId: t.appId,
            transporter: a
          }, t.methods);
        })(r(r(r({}, o), t), {}, {
          methods: {
            getPersonalizationStrategy: H,
            setPersonalizationStrategy: M
          }
        }));
      };
    };
    return (function (t) {
      var e = t.appId, n = c(void 0 !== t.authMode ? t.authMode : m.WithinHeaders, e, t.apiKey), a = k(r(r({
        hosts: [{
          url: ("").concat(e, "-dsn.algolia.net"),
          accept: g.Read
        }, {
          url: ("").concat(e, ".algolia.net"),
          accept: g.Write
        }].concat(l([{
          url: ("").concat(e, "-1.algolianet.com")
        }, {
          url: ("").concat(e, "-2.algolianet.com")
        }, {
          url: ("").concat(e, "-3.algolianet.com")
        }]))
      }, t), {}, {
        headers: r(r(r({}, n.headers()), {
          "content-type": "application/x-www-form-urlencoded"
        }), t.headers),
        queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
      }));
      return p({
        transporter: a,
        appId: e,
        addAlgoliaAgent: function (t, e) {
          a.userAgent.add({
            segment: t,
            version: e
          });
        },
        clearCache: function () {
          return Promise.all([a.requestsCache.clear(), a.responsesCache.clear()]).then(function () {});
        }
      }, t.methods);
    })(r(r({}, f), {}, {
      methods: {
        search: ht,
        searchForFacetValues: mt,
        multipleBatch: lt,
        multipleGetObjects: pt,
        multipleQueries: ht,
        copyIndex: L,
        copySettings: _,
        copySynonyms: X,
        copyRules: V,
        moveIndex: dt,
        listIndices: ct,
        getLogs: et,
        listClusters: st,
        multipleSearchForFacetValues: mt,
        getApiKey: $,
        addApiKey: W,
        listApiKeys: ut,
        updateApiKey: It,
        deleteApiKey: Y,
        restoreApiKey: vt,
        assignUserID: B,
        assignUserIDs: Q,
        getUserID: at,
        searchUserIDs: wt,
        listUserIDs: ft,
        getTopUserIDs: rt,
        removeUserID: yt,
        hasPendingMappings: ot,
        clearDictionaryEntries: G,
        deleteDictionaryEntries: Z,
        getDictionarySettings: tt,
        getAppTask: nt,
        replaceDictionaryEntries: gt,
        saveDictionaryEntries: bt,
        searchDictionaryEntries: Pt,
        setDictionarySettings: Ot,
        waitAppTask: xt,
        initIndex: function (t) {
          return function (e) {
            return it(t)(e, {
              methods: {
                batch: jt,
                delete: At,
                findAnswers: Ht,
                getObject: Kt,
                getObjects: Bt,
                saveObject: $t,
                saveObjects: te,
                search: oe,
                searchForFacetValues: ie,
                waitTask: fe,
                setSettings: ce,
                getSettings: Gt,
                partialUpdateObject: Vt,
                partialUpdateObjects: _t,
                deleteObject: Ct,
                deleteObjects: Ut,
                deleteBy: Rt,
                clearObjects: Tt,
                browseObjects: Dt,
                getObjectPosition: Wt,
                findObject: Mt,
                exists: Ft,
                saveSynonym: ne,
                saveSynonyms: ae,
                getSynonym: Lt,
                searchSynonyms: se,
                browseSynonyms: St,
                deleteSynonym: Jt,
                clearSynonyms: Et,
                replaceAllObjects: Xt,
                replaceAllSynonyms: Zt,
                searchRules: ue,
                getRule: Qt,
                deleteRule: zt,
                saveRule: ee,
                saveRules: re,
                replaceAllRules: Yt,
                browseRules: qt,
                clearRules: Nt
              }
            });
          };
        },
        initAnalytics: function () {
          return function (t) {
            return (function (t) {
              var e = t.region || "us", n = c(m.WithinHeaders, t.appId, t.apiKey), a = k(r(r({
                hosts: [{
                  url: ("analytics.").concat(e, ".algolia.com")
                }]
              }, t), {}, {
                headers: r(r(r({}, n.headers()), {
                  "content-type": "application/json"
                }), t.headers),
                queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
              }));
              return p({
                appId: t.appId,
                transporter: a
              }, t.methods);
            })(r(r(r({}, o), t), {}, {
              methods: {
                addABTest: C,
                getABTest: z,
                getABTests: J,
                stopABTest: F,
                deleteABTest: U
              }
            }));
          };
        },
        initPersonalization: d,
        initRecommendation: function () {
          return function (t) {
            return (f.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), d()(t));
          };
        }
      }
    }));
  }
  return (ye.version = "4.10.5", ye);
});

},{}],"4L2dE":[function(require,module,exports) {
var n,l,u,t,i,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var t,i,o,r=arguments,f={};for(o in l)"key"==o?t=l[o]:"ref"==o?i=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,t,i,null)}function v(l,u,t,i,o){var r={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function p(n){return n.children}function h(n,l){this.props=n,this.context=l}function y(n,l){if(null==l)return n.__?y(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?y(n):null}function d(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return d(n)}}function _(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!k.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(k)}function k(){for(var n;k.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,t,i,o,r;n.__d&&(o=(i=(l=n).__v).__e,(r=l.__P)&&(u=[],(t=c({},i)).__v=i.__v+1,$(r,i,t,l.__n,void 0!==r.ownerSVGElement,null!=i.__h?[o]:null,u,null==o?y(i):o,i.__h),H(u,i),i.__e!=o&&d(i)))})}function x(n,l,u,t,i,o,e,c,s,a){var h,d,_,k,x,g,w,A=t&&t.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(d=0;d<P;d++){if((_=A[d])&&k.key==_.key&&k.type===_.type){A[d]=void 0;break}_=null}$(n,k,_=_||r,i,o,e,c,s,a),x=k.__e,(d=k.ref)&&_.ref!=d&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(d,k.__c||x,k)),null!=x?(null==g&&(g=x),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=b(k,s,n):s=m(n,k,_,A,x,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=y(_))}for(u.__e=g,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=y(t,h+1)),j(A[h],A[h]));if(w)for(h=0;h<w.length;h++)T(w[h],w[++h],w[++h])}function b(n,l,u){var t,i;for(t=0;t<n.__k.length;t++)(i=n.__k[t])&&(i.__=n,l="function"==typeof i.type?b(i,l,u):m(u,i,i,n.__k,i.__e,l));return l}function m(n,l,u,t,i,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||i!=o||null==i.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(i),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<t.length;e+=2)if(f==i)break n;n.insertBefore(i,o),r=o}return void 0!==r?r:i.nextSibling}function g(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||A(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||A(n,o,l[o],u[o],t)}function w(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||w(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||w(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t||n.addEventListener(l,o?C:P,o):n.removeEventListener(l,o?C:P,o);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function P(l){this.l[l.type+!1](n.event?n.event(l):l)}function C(l){this.l[l.type+!0](n.event?n.event(l):l)}function $(l,u,t,i,o,r,f,e,s){var a,v,y,d,_,k,b,m,g,w,A,P=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(s=t.__h,e=u.__e=t.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(m=u.props,g=(a=P.contextType)&&i[a.__c],w=a?g?g.props.value:a.__:i,t.__c?b=(v=u.__c=t.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(m,w):(u.__c=v=new h(m,w),v.constructor=P,v.render=z),g&&g.sub(v),v.props=m,v.state||(v.state={}),v.context=w,v.__n=i,y=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(m,v.__s))),d=v.props,_=v.state,y)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(m,w),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(m,v.__s,w)||u.__v===t.__v){v.props=m,v.state=v.__s,u.__v!==t.__v&&(v.__d=!1),v.__v=u,u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(m,v.__s,w),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=w,v.props=m,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(i=c(c({},i),v.getChildContext())),y||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===p&&null==a.key?a.props.children:a,x(l,Array.isArray(A)?A:[A],u,t,i,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=I(t.__e,u,t,i,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,t)}}function H(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function I(n,l,u,t,i,o,e,c){var a,v,p,h,y=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(i=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)y===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(y=u.props||r).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},h=0;h<n.attributes.length;h++)y[n.attributes[h].name]=n.attributes[h].value;(p||v)&&(p&&(v&&p.__html==v.__html||p.__html===n.innerHTML)||(n.innerHTML=p&&p.__html||""))}if(g(n,d,y,i,c),p)l.__k=[];else if(k=l.props.children,x(n,Array.isArray(k)?k:[k],l,u,t,i&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&A(n,"value",k,y.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&A(n,"checked",k,y.checked,!1))}return n}function T(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function j(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&(i.current&&i.current!==l.__e||T(i,null,u)),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&j(i[r],u,t);null!=o&&s(o)}function z(n,l,u){return this.constructor(n,u)}function L(l,u,t){var i,o,e;n.__&&n.__(l,u),o=(i="function"==typeof t)?null:t&&t.__k||u.__k,e=[],$(u,l=(!i&&t||u).__k=a(p,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!i&&t?[t]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!i&&t?t:o?o.__e:u.firstChild,i),H(e,l)}n={__e:function(n,l){for(var u,t,i;l=l.__;)if((u=l.__c)&&!u.__)try{if((t=u.constructor)&&null!=t.getDerivedStateFromError&&(u.setState(t.getDerivedStateFromError(n)),i=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),i=u.__d),i)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},h.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),_(this))},h.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),_(this))},h.prototype.render=p,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,o=0,exports.render=L,exports.hydrate=function n(l,u){L(l,u,n)},exports.createElement=a,exports.h=a,exports.Fragment=p,exports.createRef=function(){return{current:null}},exports.isValidElement=l,exports.Component=h,exports.cloneElement=function(n,l,u){var t,i,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?t=l[o]:"ref"==o?i=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,t||n.key,i||n.ref,null)},exports.createContext=function(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(_)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},exports.toChildArray=function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(Array.isArray(l)?l.some(function(l){n(l,u)}):u.push(l)),u},exports.options=n;

},{}],"7K0MY":[function(require,module,exports) {
const aa = require("./dist/search-insights-browser.cjs.min.js");

module.exports = aa.default;
Object.keys(aa).forEach(key => {
  if (key !== "default") {
    module.exports[key] = aa[key];
  }
});

},{"./dist/search-insights-browser.cjs.min.js":"16QIM"}],"16QIM":[function(require,module,exports) {
"use strict";function objectAssignPolyfill(){"function"!=typeof Object.assign&&(Object.assign=function(e,t){var r=arguments;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),o=1;o<arguments.length;o++){var i=r[o];if(null!=i)for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n})}function objectKeysPolyfill(){var e,t,r,n;Object.keys||(Object.keys=(e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),n=(r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(o){if("function"!=typeof o&&("object"!=typeof o||null===o))throw new TypeError("Object.keys called on non-object");var i,s,a=[];for(i in o)e.call(o,i)&&a.push(i);if(t)for(s=0;s<n;s++)e.call(o,r[s])&&a.push(r[s]);return a}))}Object.defineProperty(exports,"__esModule",{value:!0});var supportsCookies=function(){try{return Boolean(navigator.cookieEnabled)}catch(e){return!1}},supportsSendBeacon=function(){try{return Boolean(navigator.sendBeacon)}catch(e){return!1}},supportsXMLHttpRequest=function(){try{return Boolean(XMLHttpRequest)}catch(e){return!1}},supportsNodeHttpModule=function(){try{var e=require("http").request,t=require("https").request;return Boolean(e)&&Boolean(t)}catch(e){return!1}},isUndefined=function(e){return void 0===e},isString=function(e){return"string"==typeof e},isNumber=function(e){return"number"==typeof e},isFunction=function(e){return"function"==typeof e};function makeSendEvent(e){return function(t,r){if(!this._userHasOptedOut){if(!this._hasCredentials)throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");if(""===r.userToken||""===this._userToken)throw new Error("`userToken` cannot be an empty string.");var n=r.userToken||this._userToken;if(isUndefined(n))throw new Error("Before calling any methods on the analytics, you first need to call 'setUserToken' function or include 'userToken' in the event payload.");if(!isString(r.index))throw new TypeError("expected required parameter `index` to be a string");if(!isString(r.eventName))throw new TypeError("expected required parameter `eventName` to be a string");if(!isUndefined(r.userToken)&&!isString(r.userToken))throw new TypeError("expected optional parameter `userToken` to be a string");var o={eventType:t,eventName:r.eventName,userToken:n,index:r.index};if(!isUndefined(r.timestamp)){if(!isNumber(r.timestamp))throw new TypeError("expected optional parameter `timestamp` to be a number");o.timestamp=r.timestamp}if(!isUndefined(r.queryID)){if(!isString(r.queryID))throw new TypeError("expected optional parameter `queryID` to be a string");o.queryID=r.queryID}if(!isUndefined(r.objectIDs)){if(!Array.isArray(r.objectIDs))throw new TypeError("expected optional parameter `objectIDs` to be an array");o.objectIDs=r.objectIDs}if(!isUndefined(r.positions)){if(!Array.isArray(r.positions))throw new TypeError("expected optional parameter `positions` to be an array");if(isUndefined(r.objectIDs))throw new Error("cannot use `positions` without providing `objectIDs`");if(r.objectIDs.length!==r.positions.length)throw new Error("objectIDs and positions need to be of the same size");o.positions=r.positions}if(!isUndefined(r.filters)){if(!isUndefined(r.objectIDs))throw new Error("cannot use `objectIDs` and `filters` for the same event");if(!Array.isArray(r.filters))throw new TypeError("expected optional parameter `filters` to be an array");o.filters=r.filters}if(isUndefined(r.objectIDs)&&isUndefined(r.filters))throw new Error("expected either `objectIDs` or `filters` to be provided");return bulkSendEvent(e,this._appId,this._apiKey,this._uaURIEncoded,this._endpointOrigin,[o])}}}function bulkSendEvent(e,t,r,n,o,i){return e(o+"/1/events?X-Algolia-Application-Id="+t+"&X-Algolia-API-Key="+r+"&X-Algolia-Agent="+n,{events:i})}var version="2.0.0",DEFAULT_ALGOLIA_AGENT="insights-js ("+version+")";function addAlgoliaAgent(e){-1===this._ua.indexOf("; "+e)&&(this._ua+="; "+e,this._uaURIEncoded=encodeURIComponent(this._ua))}var SUPPORTED_REGIONS=["de","us"],MONTH=2592e6;function init(e){var t;if(!e)throw new Error("Init function should be called with an object argument containing your apiKey and appId");if(isUndefined(e.apiKey)||!isString(e.apiKey))throw new Error("apiKey is missing, please provide it so we can authenticate the application");if(isUndefined(e.appId)||!isString(e.appId))throw new Error("appId is missing, please provide it, so we can properly attribute data to your application");if(!isUndefined(e.region)&&-1===SUPPORTED_REGIONS.indexOf(e.region))throw new Error("optional region is incorrect, please provide either one of: "+SUPPORTED_REGIONS.join(", ")+".");if(!(isUndefined(e.cookieDuration)||isNumber(e.cookieDuration)&&isFinite(e.cookieDuration)&&Math.floor(e.cookieDuration)===e.cookieDuration))throw new Error("optional cookieDuration is incorrect, expected an integer.");this._apiKey=e.apiKey,this._appId=e.appId,this._userHasOptedOut=!!e.userHasOptedOut,this._region=e.region,this._endpointOrigin=e.region?"https://insights."+e.region+".algolia.io":"https://insights.algolia.io",this._useCookie=null!==(t=e.useCookie)&&void 0!==t&&t,this._cookieDuration=e.cookieDuration?e.cookieDuration:6*MONTH,this._hasCredentials=!0,this._ua=DEFAULT_ALGOLIA_AGENT,this._uaURIEncoded=encodeURIComponent(DEFAULT_ALGOLIA_AGENT),e.userToken?this.setUserToken(e.userToken):this._userToken||this._userHasOptedOut||!this._useCookie||this.setAnonymousUserToken()}function initSearch(e){if(!this._hasCredentials)throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");if(!e)throw new Error("initSearch function requires an argument with getQueryID and hitsContainer arguments");if(!e.getQueryID||"function"!=typeof e.getQueryID)throw new Error("getQueryID must be a function that returns the queryID of the last search operation");this.getQueryID=e.getQueryID}function getVersion(e){isFunction(e)&&e(this.version)}function clickedObjectIDsAfterSearch(e){if(!e)throw new Error("No params were sent to clickedObjectIDsAfterSearch function, please provide `queryID`,  `objectIDs` and `positions` to be reported");if(!e.queryID)throw new Error("required queryID parameter was not sent, click event can not be properly sent without");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, click event can not be properly sent without");if(!e.positions)throw new Error("required positions parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}function clickedObjectIDs(e){if(!e)throw new Error("No params were sent to clickedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required `objectIDs` parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}function clickedFilters(e){if(!e)throw new Error("No params were sent to clickedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required `filters` parameter was not sent, click event can not be properly sent without");this.sendEvent("click",e)}function convertedObjectIDsAfterSearch(e){if(!e)throw new Error("No params were sent to convertedObjectIDsAfterSearch function, please provide `queryID` and `objectIDs` to be reported");if(!e.queryID)throw new Error("required queryID parameter was not sent, conversion event can not be properly sent without");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}function convertedObjectIDs(e){if(!e)throw new Error("No params were sent to convertedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}function convertedFilters(e){if(!e)throw new Error("No params were sent to convertedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required filters parameter was not sent, conversion event can not be properly sent without");this.sendEvent("conversion",e)}function viewedObjectIDs(e){if(!e)throw new Error("No params were sent to viewedObjectIDs function, please provide `objectIDs` to be reported");if(!e.objectIDs)throw new Error("required objectIDs parameter was not sent, view event can not be properly sent without");this.sendEvent("view",e)}function viewedFilters(e){if(!e)throw new Error("No params were sent to viewedFilters function, please provide `filters` to be reported");if(!e.filters)throw new Error("required filters parameter was not sent, view event can not be properly sent without");this.sendEvent("view",e)}var createUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},COOKIE_KEY="_ALGOLIA",setCookie=function(e,t,r){var n=new Date;n.setTime(n.getTime()+r);var o="expires="+n.toUTCString();document.cookie=e+"="+t+";"+o+";path=/"},getCookie=function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""};function setAnonymousUserToken(){if(supportsCookies()){var e=getCookie(COOKIE_KEY);e&&""!==e&&0===e.indexOf("anonymous-")?this.setUserToken(e):(this.setUserToken("anonymous-"+createUUID()),setCookie(COOKIE_KEY,this._userToken,this._cookieDuration))}}function setUserToken(e){this._userToken=e,isFunction(this._onUserTokenChangeCallback)&&this._onUserTokenChangeCallback(this._userToken)}function getUserToken(e,t){return isFunction(t)&&t(null,this._userToken),this._userToken}function onUserTokenChange(e,t){this._onUserTokenChangeCallback=e,t&&t.immediate&&isFunction(this._onUserTokenChangeCallback)&&this._onUserTokenChangeCallback(this._userToken)}objectKeysPolyfill(),objectAssignPolyfill();var AlgoliaAnalytics=function(e){var t=e.requestFn;this._ua="",this._uaURIEncoded="",this.version=version,this._hasCredentials=!1,this.sendEvent=makeSendEvent(t).bind(this),this.init=init.bind(this),this.initSearch=initSearch.bind(this),this.addAlgoliaAgent=addAlgoliaAgent.bind(this),this.setUserToken=setUserToken.bind(this),this.setAnonymousUserToken=setAnonymousUserToken.bind(this),this.getUserToken=getUserToken.bind(this),this.onUserTokenChange=onUserTokenChange.bind(this),this.clickedObjectIDsAfterSearch=clickedObjectIDsAfterSearch.bind(this),this.clickedObjectIDs=clickedObjectIDs.bind(this),this.clickedFilters=clickedFilters.bind(this),this.convertedObjectIDsAfterSearch=convertedObjectIDsAfterSearch.bind(this),this.convertedObjectIDs=convertedObjectIDs.bind(this),this.convertedFilters=convertedFilters.bind(this),this.viewedObjectIDs=viewedObjectIDs.bind(this),this.viewedFilters=viewedFilters.bind(this),this.getVersion=getVersion.bind(this)};function getFunctionalInterface(e){return function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];t&&isFunction(e[t])?e[t].apply(e,r):console.warn("The method `"+t+"` doesn't exist.")}}var requestWithSendBeacon=function(e,t){var r=JSON.stringify(t);navigator.sendBeacon(e,r)},requestWithXMLHttpRequest=function(e,t){var r=JSON.stringify(t),n=new XMLHttpRequest;n.open("POST",e),n.send(r)},requestWithNodeHttpModule=function(e,t){var r=JSON.stringify(t),n=require("url").parse(e),o={protocol:n.protocol,host:n.host,path:n.path,method:"POST",headers:{"Content-Type":"application/json","Content-Length":r.length}},i=(0,(0===e.indexOf("https://")?require("https"):require("http")).request)(o);i.on("error",function(e){console.error(e)}),i.write(r),i.end()};function getRequesterForBrowser(){if(supportsSendBeacon())return requestWithSendBeacon;if(supportsXMLHttpRequest())return requestWithXMLHttpRequest;throw new Error("Could not find a supported HTTP request client in this environment.")}function getRequesterForNode(){if(supportsNodeHttpModule())return requestWithNodeHttpModule;throw new Error("Could not find a supported HTTP request client in this environment.")}function createInsightsClient(e){return getFunctionalInterface(new AlgoliaAnalytics({requestFn:e}))}var entryBrowserCjs=createInsightsClient(getRequesterForBrowser());exports.createInsightsClient=createInsightsClient,exports.default=entryBrowserCjs,exports.getRequesterForBrowser=getRequesterForBrowser,exports.getRequesterForNode=getRequesterForNode;

},{"http":"2uALp","https":"5cL8c","url":"1sX4F"}],"2uALp":[function(require,module,exports) {
var global = arguments[3];
var ClientRequest = require('./lib/request');
var response = require('./lib/response');
var extend = require('xtend');
var statusCodes = require('builtin-status-codes');
var url = require('url');
var http = exports;
http.request = function (opts, cb) {
  if (typeof opts === 'string') opts = url.parse(opts); else opts = extend(opts);
  // Normally, the page is loaded from http or https, so not specifying a protocol
  // will result in a (valid) protocol-relative url. However, this won't work if
  // the protocol is something else, like 'file:'
  var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : '';
  var protocol = opts.protocol || defaultProtocol;
  var host = opts.hostname || opts.host;
  var port = opts.port;
  var path = opts.path || '/';
  // Necessary for IPv6 addresses
  if (host && host.indexOf(':') !== -1) host = '[' + host + ']';
  // This may be a relative url. The browser should always be able to interpret it correctly.
  opts.url = (host ? protocol + '//' + host : '') + (port ? ':' + port : '') + path;
  opts.method = (opts.method || 'GET').toUpperCase();
  opts.headers = opts.headers || ({});
  // Also valid opts.auth, opts.mode
  var req = new ClientRequest(opts);
  if (cb) req.on('response', cb);
  return req;
};
http.get = function get(opts, cb) {
  var req = http.request(opts, cb);
  req.end();
  return req;
};
http.ClientRequest = ClientRequest;
http.IncomingMessage = response.IncomingMessage;
http.Agent = function () {};
http.Agent.defaultMaxSockets = 4;
http.globalAgent = new http.Agent();
http.STATUS_CODES = statusCodes;
http.METHODS = ['CHECKOUT', 'CONNECT', 'COPY', 'DELETE', 'GET', 'HEAD', 'LOCK', 'M-SEARCH', 'MERGE', 'MKACTIVITY', 'MKCOL', 'MOVE', 'NOTIFY', 'OPTIONS', 'PATCH', 'POST', 'PROPFIND', 'PROPPATCH', 'PURGE', 'PUT', 'REPORT', 'SEARCH', 'SUBSCRIBE', 'TRACE', 'UNLOCK', 'UNSUBSCRIBE'];

},{"./lib/request":"1P3b7","./lib/response":"7pUfL","xtend":"3IaBi","builtin-status-codes":"1Frao","url":"1sX4F"}],"1P3b7":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var global = arguments[3];
var process = require("process");
var capability = require('./capability');
var inherits = require('inherits');
var response = require('./response');
var stream = require('readable-stream');
var IncomingMessage = response.IncomingMessage;
var rStates = response.readyStates;
function decideMode(preferBinary, useFetch) {
  if (capability.fetch && useFetch) {
    return 'fetch';
  } else if (capability.mozchunkedarraybuffer) {
    return 'moz-chunked-arraybuffer';
  } else if (capability.msstream) {
    return 'ms-stream';
  } else if (capability.arraybuffer && preferBinary) {
    return 'arraybuffer';
  } else {
    return 'text';
  }
}
var ClientRequest = module.exports = function (opts) {
  var self = this;
  stream.Writable.call(self);
  self._opts = opts;
  self._body = [];
  self._headers = {};
  if (opts.auth) self.setHeader('Authorization', 'Basic ' + Buffer.from(opts.auth).toString('base64'));
  Object.keys(opts.headers).forEach(function (name) {
    self.setHeader(name, opts.headers[name]);
  });
  var preferBinary;
  var useFetch = true;
  if (opts.mode === 'disable-fetch' || ('requestTimeout' in opts) && !capability.abortController) {
    // If the use of XHR should be preferred. Not typically needed.
    useFetch = false;
    preferBinary = true;
  } else if (opts.mode === 'prefer-streaming') {
    // If streaming is a high priority but binary compatibility and
    // the accuracy of the 'content-type' header aren't
    preferBinary = false;
  } else if (opts.mode === 'allow-wrong-content-type') {
    // If streaming is more important than preserving the 'content-type' header
    preferBinary = !capability.overrideMimeType;
  } else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
    // Use binary if text streaming may corrupt data or the content-type header, or for speed
    preferBinary = true;
  } else {
    throw new Error('Invalid value for opts.mode');
  }
  self._mode = decideMode(preferBinary, useFetch);
  self._fetchTimer = null;
  self._socketTimeout = null;
  self._socketTimer = null;
  self.on('finish', function () {
    self._onFinish();
  });
};
inherits(ClientRequest, stream.Writable);
ClientRequest.prototype.setHeader = function (name, value) {
  var self = this;
  var lowerName = name.toLowerCase();
  // This check is not necessary, but it prevents warnings from browsers about setting unsafe
  // headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
  // http-browserify did it, so I will too.
  if (unsafeHeaders.indexOf(lowerName) !== -1) return;
  self._headers[lowerName] = {
    name: name,
    value: value
  };
};
ClientRequest.prototype.getHeader = function (name) {
  var header = this._headers[name.toLowerCase()];
  if (header) return header.value;
  return null;
};
ClientRequest.prototype.removeHeader = function (name) {
  var self = this;
  delete self._headers[name.toLowerCase()];
};
ClientRequest.prototype._onFinish = function () {
  var self = this;
  if (self._destroyed) return;
  var opts = self._opts;
  if (('timeout' in opts) && opts.timeout !== 0) {
    self.setTimeout(opts.timeout);
  }
  var headersObj = self._headers;
  var body = null;
  if (opts.method !== 'GET' && opts.method !== 'HEAD') {
    body = new Blob(self._body, {
      type: (headersObj['content-type'] || ({})).value || ''
    });
  }
  // create flattened list of headers
  var headersList = [];
  Object.keys(headersObj).forEach(function (keyName) {
    var name = headersObj[keyName].name;
    var value = headersObj[keyName].value;
    if (Array.isArray(value)) {
      value.forEach(function (v) {
        headersList.push([name, v]);
      });
    } else {
      headersList.push([name, value]);
    }
  });
  if (self._mode === 'fetch') {
    var signal = null;
    if (capability.abortController) {
      var controller = new AbortController();
      signal = controller.signal;
      self._fetchAbortController = controller;
      if (('requestTimeout' in opts) && opts.requestTimeout !== 0) {
        self._fetchTimer = global.setTimeout(function () {
          self.emit('requestTimeout');
          if (self._fetchAbortController) self._fetchAbortController.abort();
        }, opts.requestTimeout);
      }
    }
    global.fetch(self._opts.url, {
      method: self._opts.method,
      headers: headersList,
      body: body || undefined,
      mode: 'cors',
      credentials: opts.withCredentials ? 'include' : 'same-origin',
      signal: signal
    }).then(function (response) {
      self._fetchResponse = response;
      self._resetTimers(false);
      self._connect();
    }, function (reason) {
      self._resetTimers(true);
      if (!self._destroyed) self.emit('error', reason);
    });
  } else {
    var xhr = self._xhr = new global.XMLHttpRequest();
    try {
      xhr.open(self._opts.method, self._opts.url, true);
    } catch (err) {
      process.nextTick(function () {
        self.emit('error', err);
      });
      return;
    }
    // Can't set responseType on really old browsers
    if (('responseType' in xhr)) xhr.responseType = self._mode;
    if (('withCredentials' in xhr)) xhr.withCredentials = !!opts.withCredentials;
    if (self._mode === 'text' && ('overrideMimeType' in xhr)) xhr.overrideMimeType('text/plain; charset=x-user-defined');
    if (('requestTimeout' in opts)) {
      xhr.timeout = opts.requestTimeout;
      xhr.ontimeout = function () {
        self.emit('requestTimeout');
      };
    }
    headersList.forEach(function (header) {
      xhr.setRequestHeader(header[0], header[1]);
    });
    self._response = null;
    xhr.onreadystatechange = function () {
      switch (xhr.readyState) {
        case rStates.LOADING:
        case rStates.DONE:
          self._onXHRProgress();
          break;
      }
    };
    // Necessary for streaming in Firefox, since xhr.response is ONLY defined
    // in onprogress, not in onreadystatechange with xhr.readyState = 3
    if (self._mode === 'moz-chunked-arraybuffer') {
      xhr.onprogress = function () {
        self._onXHRProgress();
      };
    }
    xhr.onerror = function () {
      if (self._destroyed) return;
      self._resetTimers(true);
      self.emit('error', new Error('XHR error'));
    };
    try {
      xhr.send(body);
    } catch (err) {
      process.nextTick(function () {
        self.emit('error', err);
      });
      return;
    }
  }
};
/**
* Checks if xhr.status is readable and non-zero, indicating no error.
* Even though the spec says it should be available in readyState 3,
* accessing it throws an exception in IE8
*/
function statusValid(xhr) {
  try {
    var status = xhr.status;
    return status !== null && status !== 0;
  } catch (e) {
    return false;
  }
}
ClientRequest.prototype._onXHRProgress = function () {
  var self = this;
  self._resetTimers(false);
  if (!statusValid(self._xhr) || self._destroyed) return;
  if (!self._response) self._connect();
  self._response._onXHRProgress(self._resetTimers.bind(self));
};
ClientRequest.prototype._connect = function () {
  var self = this;
  if (self._destroyed) return;
  self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode, self._resetTimers.bind(self));
  self._response.on('error', function (err) {
    self.emit('error', err);
  });
  self.emit('response', self._response);
};
ClientRequest.prototype._write = function (chunk, encoding, cb) {
  var self = this;
  self._body.push(chunk);
  cb();
};
ClientRequest.prototype._resetTimers = function (done) {
  var self = this;
  global.clearTimeout(self._socketTimer);
  self._socketTimer = null;
  if (done) {
    global.clearTimeout(self._fetchTimer);
    self._fetchTimer = null;
  } else if (self._socketTimeout) {
    self._socketTimer = global.setTimeout(function () {
      self.emit('timeout');
    }, self._socketTimeout);
  }
};
ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function (err) {
  var self = this;
  self._destroyed = true;
  self._resetTimers(true);
  if (self._response) self._response._destroyed = true;
  if (self._xhr) self._xhr.abort(); else if (self._fetchAbortController) self._fetchAbortController.abort();
  if (err) self.emit('error', err);
};
ClientRequest.prototype.end = function (data, encoding, cb) {
  var self = this;
  if (typeof data === 'function') {
    cb = data;
    data = undefined;
  }
  stream.Writable.prototype.end.call(self, data, encoding, cb);
};
ClientRequest.prototype.setTimeout = function (timeout, cb) {
  var self = this;
  if (cb) self.once('timeout', cb);
  self._socketTimeout = timeout;
  self._resetTimers(false);
};
ClientRequest.prototype.flushHeaders = function () {};
ClientRequest.prototype.setNoDelay = function () {};
ClientRequest.prototype.setSocketKeepAlive = function () {};
// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var unsafeHeaders = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'via'];

},{"buffer":"3susO","process":"7AgFc","./capability":"2UahP","inherits":"1EUwN","./response":"7pUfL","readable-stream":"4aHDY"}],"3susO":[function(require,module,exports) {
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
/*eslint-disable no-proto*/
"use strict";
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
* If `Buffer.TYPED_ARRAY_SUPPORT`:
*   === true    Use Uint8Array implementation (fastest)
*   === false   Print warning and recommend using `buffer` v4.x which has an Object
*               implementation (most compatible, even IE6)
*
* Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
* Opera 11.6+, iOS 4.2+.
*
* We report that the browser does not support typed arrays if the are not subclassable
* using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
* (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
* for __proto__ and has a buggy typed array implementation.
*/
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}
function typedArraySupport() {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1);
    var proto = {
      foo: function () {
        return 42;
      }
    };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}
Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.buffer;
  }
});
Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.byteOffset;
  }
});
function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}
/**
* The Buffer constructor returns instances of `Uint8Array` that have their
* prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
* `Uint8Array`, so the returned instances will have all the node `Buffer` methods
* and the `Uint8Array` methods. Square bracket notation works as expected -- it
* returns a single octet.
*
* The `Uint8Array` prototype remains unmodified.
*/
function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }
    return allocUnsafe(arg);
  }
  return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192;
// not used by this implementation
function from(value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }
  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value);
  }
  if (value == null) {
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  }
  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }
  var valueOf = value.valueOf && value.valueOf();
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }
  var b = fromObject(value);
  if (b) return b;
  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
  }
  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
}
/**
* Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
* if value is a number.
* Buffer.from(str[, encoding])
* Buffer.from(array)
* Buffer.from(buffer)
* Buffer.from(arrayBuffer[, byteOffset[, length]])
**/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}
function alloc(size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }
  return createBuffer(size);
}
/**
* Creates a new filled Buffer instance.
* alloc(size[, fill[, encoding]])
**/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
* Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
**/
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size);
};
/**
* Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
*/
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size);
};
function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }
  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding);
  }
  var length = byteLength(string, encoding) | 0;
  var buf = createBuffer(length);
  var actual = buf.write(string, encoding);
  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }
  return buf;
}
function fromArrayLike(array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(length);
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}
function fromArrayView(arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    var copy = new Uint8Array(arrayView);
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
  }
  return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }
  var buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}
function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(len);
    if (buf.length === 0) {
      return buf;
    }
    obj.copy(buf, 0, 0, len);
    return buf;
  }
  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }
    return fromArrayLike(obj);
  }
  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}
function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }
  return length | 0;
}
function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype;
};
Buffer.compare = function compare(a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }
  if (a === b) return 0;
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer.alloc(0);
  }
  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }
  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        Buffer.from(buf).copy(buffer, pos);
      } else {
        Uint8Array.prototype.set.call(buffer, buf, pos);
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    } else {
      buf.copy(buffer, pos);
    }
    pos += buf.length;
  }
  return buffer;
};
function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
  }
  var len = string.length;
  var mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0;
  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length;
        }
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
  var loweredCase = false;
  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }
  if (end === undefined || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return '';
  }
  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return '';
  }
  if (!encoding) encoding = 'utf8';
  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);
      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);
      case 'ascii':
        return asciiSlice(this, start, end);
      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);
      case 'base64':
        return base64Slice(this, start, end);
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString() {
  var length = this.length;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  if (this.length > max) str += ' ... ';
  return '<Buffer ' + str + '>';
};
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength);
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
  }
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);
  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
// 
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;
  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;
  // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1; else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0; else return -1;
  }
  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }
  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF;
    // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;
  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }
  return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  var strLen = string.length;
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  } else if (isFinite(offset)) {
    offset = offset >>> 0;
    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }
  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }
  if (!encoding) encoding = 'utf8';
  var loweredCase = false;
  for (; ; ) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);
      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);
      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length);
      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);
      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';
  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (var i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start) end = start;
  var newBuf = this.subarray(start, end);
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype);
  return newBuf;
};
/*
* Need to make sure that buffer isn't trying to write out of bounds.
*/
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }
  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }
  return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }
  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }
  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 0xff;
  return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }
  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }
  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;
  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;
  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');
  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  var len = end - start;
  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  }
  return len;
};
// Usage:
// buffer.fill(number[, offset[, end]])
// buffer.fill(buffer[, offset[, end]])
// buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } else if (typeof val === 'boolean') {
    val = Number(val);
  }
  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
    var len = bytes.length;
    if (len === 0) {
      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0];
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];
  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }
        // valid lead
        leadSurrogate = codePoint;
        continue;
      }
      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }
      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }
    leadSurrogate = null;
    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = (function () {
  var alphabet = '0123456789abcdef';
  var table = new Array(256);
  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16;
    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j];
    }
  }
  return table;
})();

},{"base64-js":"6UXZh","ieee754":"6YlQP"}],"6UXZh":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"6YlQP":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"7AgFc":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    // normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    // normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = '';
// empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

},{}],"2UahP":[function(require,module,exports) {
var global = arguments[3];
exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream);
exports.writableStream = isFunction(global.WritableStream);
exports.abortController = isFunction(global.AbortController);
// The xhr request to example.com may violate some restrictive CSP configurations,
// so if we're running in a browser that supports `fetch`, avoid calling getXHR()
// and assume support for certain features below.
var xhr;
function getXHR() {
  // Cache the xhr value
  if (xhr !== undefined) return xhr;
  if (global.XMLHttpRequest) {
    xhr = new global.XMLHttpRequest();
    // If XDomainRequest is available (ie only, where xhr might not work
    // cross domain), use the page location. Otherwise use example.com
    // Note: this doesn't actually make an http request.
    try {
      xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com');
    } catch (e) {
      xhr = null;
    }
  } else {
    // Service workers don't have XHR
    xhr = null;
  }
  return xhr;
}
function checkTypeSupport(type) {
  var xhr = getXHR();
  if (!xhr) return false;
  try {
    xhr.responseType = type;
    return xhr.responseType === type;
  } catch (e) {}
  return false;
}
// If fetch is supported, then arraybuffer will be supported too. Skip calling
// checkTypeSupport(), since that calls getXHR().
exports.arraybuffer = exports.fetch || checkTypeSupport('arraybuffer');
// These next two tests unavoidably show warnings in Chrome. Since fetch will always
// be used if it's available, just return false for these to avoid the warnings.
exports.msstream = !exports.fetch && checkTypeSupport('ms-stream');
exports.mozchunkedarraybuffer = !exports.fetch && checkTypeSupport('moz-chunked-arraybuffer');
// If fetch is supported, then overrideMimeType will be supported too. Skip calling
// getXHR().
exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false);
function isFunction(value) {
  return typeof value === 'function';
}
xhr = null;

},{}],"1EUwN":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}

},{}],"7pUfL":[function(require,module,exports) {
var process = require("process");
var Buffer = require("buffer").Buffer;
var global = arguments[3];
var capability = require('./capability');
var inherits = require('inherits');
var stream = require('readable-stream');
var rStates = exports.readyStates = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4
};
var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode, resetTimers) {
  var self = this;
  stream.Readable.call(self);
  self._mode = mode;
  self.headers = {};
  self.rawHeaders = [];
  self.trailers = {};
  self.rawTrailers = [];
  // Fake the 'close' event, but only once 'end' fires
  self.on('end', function () {
    // The nextTick is necessary to prevent the 'request' module from causing an infinite loop
    process.nextTick(function () {
      self.emit('close');
    });
  });
  if (mode === 'fetch') {
    self._fetchResponse = response;
    self.url = response.url;
    self.statusCode = response.status;
    self.statusMessage = response.statusText;
    response.headers.forEach(function (header, key) {
      self.headers[key.toLowerCase()] = header;
      self.rawHeaders.push(key, header);
    });
    if (capability.writableStream) {
      var writable = new WritableStream({
        write: function (chunk) {
          resetTimers(false);
          return new Promise(function (resolve, reject) {
            if (self._destroyed) {
              reject();
            } else if (self.push(Buffer.from(chunk))) {
              resolve();
            } else {
              self._resumeFetch = resolve;
            }
          });
        },
        close: function () {
          resetTimers(true);
          if (!self._destroyed) self.push(null);
        },
        abort: function (err) {
          resetTimers(true);
          if (!self._destroyed) self.emit('error', err);
        }
      });
      try {
        response.body.pipeTo(writable).catch(function (err) {
          resetTimers(true);
          if (!self._destroyed) self.emit('error', err);
        });
        return;
      } catch (e) {}
    }
    // fallback for when writableStream or pipeTo aren't available
    var reader = response.body.getReader();
    function read() {
      reader.read().then(function (result) {
        if (self._destroyed) return;
        resetTimers(result.done);
        if (result.done) {
          self.push(null);
          return;
        }
        self.push(Buffer.from(result.value));
        read();
      }).catch(function (err) {
        resetTimers(true);
        if (!self._destroyed) self.emit('error', err);
      });
    }
    read();
  } else {
    self._xhr = xhr;
    self._pos = 0;
    self.url = xhr.responseURL;
    self.statusCode = xhr.status;
    self.statusMessage = xhr.statusText;
    var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
    headers.forEach(function (header) {
      var matches = header.match(/^([^:]+):\s*(.*)/);
      if (matches) {
        var key = matches[1].toLowerCase();
        if (key === 'set-cookie') {
          if (self.headers[key] === undefined) {
            self.headers[key] = [];
          }
          self.headers[key].push(matches[2]);
        } else if (self.headers[key] !== undefined) {
          self.headers[key] += ', ' + matches[2];
        } else {
          self.headers[key] = matches[2];
        }
        self.rawHeaders.push(matches[1], matches[2]);
      }
    });
    self._charset = 'x-user-defined';
    if (!capability.overrideMimeType) {
      var mimeType = self.rawHeaders['mime-type'];
      if (mimeType) {
        var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
        if (charsetMatch) {
          self._charset = charsetMatch[1].toLowerCase();
        }
      }
      if (!self._charset) self._charset = 'utf-8';
    }
  }
};
inherits(IncomingMessage, stream.Readable);
IncomingMessage.prototype._read = function () {
  var self = this;
  var resolve = self._resumeFetch;
  if (resolve) {
    self._resumeFetch = null;
    resolve();
  }
};
IncomingMessage.prototype._onXHRProgress = function (resetTimers) {
  var self = this;
  var xhr = self._xhr;
  var response = null;
  switch (self._mode) {
    case 'text':
      response = xhr.responseText;
      if (response.length > self._pos) {
        var newData = response.substr(self._pos);
        if (self._charset === 'x-user-defined') {
          var buffer = Buffer.alloc(newData.length);
          for (var i = 0; i < newData.length; i++) buffer[i] = newData.charCodeAt(i) & 0xff;
          self.push(buffer);
        } else {
          self.push(newData, self._charset);
        }
        self._pos = response.length;
      }
      break;
    case 'arraybuffer':
      if (xhr.readyState !== rStates.DONE || !xhr.response) break;
      response = xhr.response;
      self.push(Buffer.from(new Uint8Array(response)));
      break;
    case 'moz-chunked-arraybuffer':
      // take whole
      response = xhr.response;
      if (xhr.readyState !== rStates.LOADING || !response) break;
      self.push(Buffer.from(new Uint8Array(response)));
      break;
    case 'ms-stream':
      response = xhr.response;
      if (xhr.readyState !== rStates.LOADING) break;
      var reader = new global.MSStreamReader();
      reader.onprogress = function () {
        if (reader.result.byteLength > self._pos) {
          self.push(Buffer.from(new Uint8Array(reader.result.slice(self._pos))));
          self._pos = reader.result.byteLength;
        }
      };
      reader.onload = function () {
        resetTimers(true);
        self.push(null);
      };
      // reader.onerror = ??? // TODO: this
      reader.readAsArrayBuffer(response);
      break;
  }
  // The ms-stream case handles end separately in reader.onload()
  if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
    resetTimers(true);
    self.push(null);
  }
};

},{"process":"7AgFc","buffer":"3susO","./capability":"2UahP","inherits":"1EUwN","readable-stream":"4aHDY"}],"4aHDY":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
exports.finished = require('./lib/internal/streams/end-of-stream.js');
exports.pipeline = require('./lib/internal/streams/pipeline.js');

},{"./lib/_stream_readable.js":"7nYxY","./lib/_stream_writable.js":"3qzuo","./lib/_stream_duplex.js":"uRelU","./lib/_stream_transform.js":"CgeIy","./lib/_stream_passthrough.js":"5Rp0N","./lib/internal/streams/end-of-stream.js":"7LVux","./lib/internal/streams/pipeline.js":"1IR5a"}],"7nYxY":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
// 
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var global = arguments[3];
var process = require("process");
module.exports = Readable;
/*<replacement>*/
var Duplex;
/*</replacement>*/
Readable.ReadableState = ReadableState;
/*<replacement>*/
const EE = require('events').EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/
/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/
const Buffer = require('buffer').Buffer;
const OurUint8Array = (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || (function () {});
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/
const debugUtil = require('util');
let debug;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/
const BufferList = require('./internal/streams/buffer_list');
const destroyImpl = require('./internal/streams/destroy');
const _require = require('./internal/streams/state'), getHighWaterMark = _require.getHighWaterMark;
const _require$codes = require('../errors').codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
// Lazy loaded to improve the startup performance.
let StringDecoder;
let createReadableStreamAsyncIterator;
let from;
require('inherits')(Readable, Stream);
const errorOrDestroy = destroyImpl.errorOrDestroy;
const kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];
function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn); else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn); else emitter._events[event] = [fn, emitter._events[event]];
}
function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || ({});
  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;
  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex);
  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;
  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true;
  // Should close be emitted on destroy. Defaults to true.
  this.emitClose = options.emitClose !== false;
  // Should .destroy() be called after 'end' (and potentially 'finish')
  this.autoDestroy = !!options.autoDestroy;
  // has it been destroyed
  this.destroyed = false;
  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';
  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;
  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');
  if (!(this instanceof Readable)) return new Readable(options);
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5
  const isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex);
  // legacy
  this.readable = true;
  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }
  Stream.call(this);
}
Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get() {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }
    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;
  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }
  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT()); else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false); else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  }
  // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.
  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk); else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }
  return er;
}
Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  const decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder;
  // If setEncoding(null), decoder.encoding equals utf8
  this._readableState.encoding = this._readableState.decoder.encoding;
  // Iterate over current buffer to convert already stored Buffers:
  let p = this._readableState.buffer.head;
  let content = '';
  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }
  this._readableState.buffer.clear();
  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
};
// Don't raise the hwm > 1GB
const MAX_HWM = 0x40000000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length; else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false;
  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this); else emitReadable(this);
    return null;
  }
  n = howMuchToRead(n, state);
  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }
  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  // 
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  // 
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  // 
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);
  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }
  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }
  var ret;
  if (n > 0) ret = fromList(n, state); else ret = null;
  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }
  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;
    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }
  if (ret !== null) this.emit('data', ret);
  return ret;
};
function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;
  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;
    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}
function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);
  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  }
  // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  // care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  // another readable later.
  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}
function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  // 
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  // is responsible for filling the buffer with enough data if such data
  // is available. If highWaterMark is 0 and we are not in the flowing mode
  // we should _not_ attempt to buffer any extra data. We'll get more data
  // when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  // the loop below is responsible for ensuring read() is called. Failing to
  // call read here would abort the flow and there's no other mechanism for
  // continuing the flow if the stream consumer has just subscribed to the
  // 'data' event.
  // 
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  // case where the the stream has called the implementation defined _read()
  // method, but they are processing the call asynchronously and have _not_
  // called push() with new data. In this case we skip performing more
  // read()s. The execution ends in this method again after the _read() ends
  // up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    const len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
    break;
  }
  state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;
  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn); else src.once('end', endFn);
  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }
  function onend() {
    debug('onend');
    dest.end();
  }
  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true;
    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);
    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }
      src.pause();
    }
  }
  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  }
  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);
  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);
  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }
  // tell the dest that it's being piped to
  dest.emit('pipe', src);
  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }
  return dest;
};
function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}
Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  };
  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;
  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes;
    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }
  // slow case. multiple pipe destinations.
  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    for (var i = 0; i < len; i++) dests[i].emit('unpipe', this, {
      hasUnpiped: false
    });
    return this;
  }
  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  const res = Stream.prototype.on.call(this, ev, fn);
  const state = this._readableState;
  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0;
    // Try start flowing on next tick if stream isn't explicitly paused
    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);
      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }
  return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function (ev, fn) {
  const res = Stream.prototype.removeListener.call(this, ev, fn);
  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }
  return res;
};
Readable.prototype.removeAllListeners = function (ev) {
  const res = Stream.prototype.removeAllListeners.apply(this, arguments);
  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }
  return res;
};
function updateReadableListening(self) {
  const state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;
  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true;
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}
function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()
    state.flowing = !state.readableListening;
    resume(this, state);
  }
  state.paused = false;
  return this;
};
function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}
function resume_(stream, state) {
  debug('resume', state.reading);
  if (!state.reading) {
    stream.read(0);
  }
  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  this._readableState.paused = true;
  return this;
};
function flow(stream) {
  const state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) ;
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;
  stream.on('end', () => {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) this.push(chunk);
    }
    this.push(null);
  });
  stream.on('data', chunk => {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);
    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return; else if (!state.objectMode && (!chunk || !chunk.length)) return;
    var ret = this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });
  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = (function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      })(i);
    }
  }
  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }
  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = n => {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };
  return this;
};
if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = require('./internal/streams/async_iterator');
    }
    return createReadableStreamAsyncIterator(this);
  };
}
Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get() {
    return this._readableState.length;
  }
});
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift(); else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join(''); else if (state.buffer.length === 1) ret = state.buffer.first(); else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}
function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);
  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}
function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length);
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      const wState = stream._writableState;
      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}
if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = require('./internal/streams/from');
    }
    return from(Readable, iterable, opts);
  };
}
function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

},{"process":"7AgFc","events":"1LHgi","./internal/streams/stream":"6qEoq","buffer":"3susO","util":"2RD6T","./internal/streams/buffer_list":"2vHub","./internal/streams/destroy":"2wLaP","./internal/streams/state":"6fqJ5","../errors":"5mxXe","inherits":"1EUwN","./_stream_duplex":"uRelU","string_decoder/":"5Jatk","./internal/streams/async_iterator":"6R4wQ","./internal/streams/from":"7xfk2"}],"1LHgi":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}],"6qEoq":[function(require,module,exports) {
module.exports = require('events').EventEmitter;

},{"events":"1LHgi"}],"2RD6T":[function(require,module,exports) {
"use strict";
},{}],"2vHub":[function(require,module,exports) {
"use strict";
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    (enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols));
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if ((key in obj)) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
const _require = require('buffer'), Buffer = _require.Buffer;
const _require2 = require('util'), inspect = _require2.inspect;
const custom = inspect && inspect.custom || 'inspect';
function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}
module.exports = class BufferList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(v) {
    const entry = {
      data: v,
      next: null
    };
    if (this.length > 0) this.tail.next = entry; else this.head = entry;
    this.tail = entry;
    ++this.length;
  }
  unshift(v) {
    const entry = {
      data: v,
      next: this.head
    };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  }
  shift() {
    if (this.length === 0) return;
    const ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null; else this.head = this.head.next;
    --this.length;
    return ret;
  }
  clear() {
    this.head = this.tail = null;
    this.length = 0;
  }
  join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) ret += s + p.data;
    return ret;
  }
  concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    const ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  }
  /*Consumes a specified amount of bytes or characters from the buffered data.*/
  consume(n, hasStrings) {
    var ret;
    if (n < this.head.data.length) {
      // `slice` is the same for buffers and strings.
      ret = this.head.data.slice(0, n);
      this.head.data = this.head.data.slice(n);
    } else if (n === this.head.data.length) {
      // First chunk is a perfect match.
      ret = this.shift();
    } else {
      // Result spans more than one buffer.
      ret = hasStrings ? this._getString(n) : this._getBuffer(n);
    }
    return ret;
  }
  first() {
    return this.head.data;
  }
  /*Consumes a specified amount of characters from the buffered data.*/
  _getString(n) {
    var p = this.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while (p = p.next) {
      const str = p.data;
      const nb = n > str.length ? str.length : n;
      if (nb === str.length) ret += str; else ret += str.slice(0, n);
      n -= nb;
      if (n === 0) {
        if (nb === str.length) {
          ++c;
          if (p.next) this.head = p.next; else this.head = this.tail = null;
        } else {
          this.head = p;
          p.data = str.slice(nb);
        }
        break;
      }
      ++c;
    }
    this.length -= c;
    return ret;
  }
  /*Consumes a specified amount of bytes from the buffered data.*/
  _getBuffer(n) {
    const ret = Buffer.allocUnsafe(n);
    var p = this.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while (p = p.next) {
      const buf = p.data;
      const nb = n > buf.length ? buf.length : n;
      buf.copy(ret, ret.length - n, 0, nb);
      n -= nb;
      if (n === 0) {
        if (nb === buf.length) {
          ++c;
          if (p.next) this.head = p.next; else this.head = this.tail = null;
        } else {
          this.head = p;
          p.data = buf.slice(nb);
        }
        break;
      }
      ++c;
    }
    this.length -= c;
    return ret;
  }
  /*Make sure the linked list only shows the minimal necessary information.*/
  [custom](_, options) {
    return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: false
    }));
  }
};

},{"buffer":"3susO","util":"2RD6T"}],"2wLaP":[function(require,module,exports) {
"use strict";
var process = require("process");
// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  const readableDestroyed = this._readableState && this._readableState.destroyed;
  const writableDestroyed = this._writableState && this._writableState.destroyed;
  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }
    return this;
  }
  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks
  if (this._readableState) {
    this._readableState.destroyed = true;
  }
  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }
  this._destroy(err || null, err => {
    if (!cb && err) {
      if (!this._writableState) {
        process.nextTick(emitErrorAndCloseNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, this, err);
      } else {
        process.nextTick(emitCloseNT, this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, this);
    }
  });
  return this;
}
function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}
function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}
function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }
  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}
function emitErrorNT(self, err) {
  self.emit('error', err);
}
function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  const rState = stream._readableState;
  const wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err); else stream.emit('error', err);
}
module.exports = {
  destroy,
  undestroy,
  errorOrDestroy
};

},{"process":"7AgFc"}],"6fqJ5":[function(require,module,exports) {
'use strict';

const ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
  const hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      const name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }
    return Math.floor(hwm);
  }

  // Default value
  return state.objectMode ? 16 : 16 * 1024;
}
module.exports = {
  getHighWaterMark
};
},{"../../../errors":"5mxXe"}],"5mxXe":[function(require,module,exports) {
'use strict';

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;

},{}],"uRelU":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
// 
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
"use strict";
var process = require("process");
/*<replacement>*/
var objectKeys = Object.keys || (function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
});
/*</replacement>*/
module.exports = Duplex;
const Readable = require('./_stream_readable');
const Writable = require('./_stream_writable');
require('inherits')(Duplex, Readable);
{
  // Allow the keys array to be GC'ed.
  const keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    const method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}
function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;
  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;
    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}
Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get() {
    return this._writableState.length;
  }
});
// the no-half-open enforcer
function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return;
  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(onEndNT, this);
}
function onEndNT(self) {
  self.end();
}
Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }
    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

},{"process":"7AgFc","./_stream_readable":"7nYxY","./_stream_writable":"3qzuo","inherits":"1EUwN"}],"3qzuo":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
// 
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
"use strict";
var global = arguments[3];
var process = require("process");
module.exports = Writable;
/*<replacement>*/
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  this.next = null;
  this.entry = null;
  this.finish = () => {
    onCorkedFinish(this, state);
  };
}
/*</replacement>*/
/*<replacement>*/
var Duplex;
/*</replacement>*/
Writable.WritableState = WritableState;
/*<replacement>*/
const internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/
/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/
const Buffer = require('buffer').Buffer;
const OurUint8Array = (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || (function () {});
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
const destroyImpl = require('./internal/streams/destroy');
const _require = require('./internal/streams/state'), getHighWaterMark = _require.getHighWaterMark;
const _require$codes = require('../errors').codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
const errorOrDestroy = destroyImpl.errorOrDestroy;
require('inherits')(Writable, Stream);
function nop() {}
function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || ({});
  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;
  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex);
  // if _final has been called
  this.finalCalled = false;
  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;
  // has it been destroyed
  this.destroyed = false;
  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;
  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';
  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;
  // a flag to see when we're in the middle of a write.
  this.writing = false;
  // when true all writes will be buffered until .uncork() call
  this.corked = 0;
  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;
  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;
  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };
  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;
  // the amount that is being written when _write is called.
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;
  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;
  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
  // Should close be emitted on destroy. Defaults to true.
  this.emitClose = options.emitClose !== false;
  // Should .destroy() be called after 'finish' (and potentially 'end')
  this.autoDestroy = !!options.autoDestroy;
  // count buffered requests
  this.bufferedRequestCount = 0;
  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};
(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}
function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');
  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5
  const isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex);
  // legacy.
  this.writable = true;
  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }
  Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END();
  // TODO: defer error events consistently everywhere, not just the cb
  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var er;
  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }
  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }
  return true;
}
Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);
  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }
  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }
  if (isBuf) encoding = 'buffer'; else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb); else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};
Writable.prototype.cork = function () {
  this._writableState.corked++;
};
Writable.prototype.uncork = function () {
  var state = this._writableState;
  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};
Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}
Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;
  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk,
      encoding,
      isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }
  return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write')); else if (writev) stream._writev(chunk, state.onwrite); else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}
function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}
function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb); else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;
    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }
    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}
function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;
  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish);
    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }
    if (entry === null) state.lastBufferedRequest = null;
  }
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}
Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;
  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }
  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }
  // ignore unnecessary end() calls.
  if (!state.ending) endWritable(this, state, cb);
  return this;
};
Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get() {
    return this._writableState.length;
  }
});
function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(err => {
    state.pendingcb--;
    if (err) {
      errorOrDestroy(stream, err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}
function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        const rState = stream._readableState;
        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }
  return need;
}
function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) process.nextTick(cb); else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  // reuse the free corkReq.
  state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get() {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }
    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  cb(err);
};

},{"process":"7AgFc","util-deprecate":"5VWxV","./internal/streams/stream":"6qEoq","buffer":"3susO","./internal/streams/destroy":"2wLaP","./internal/streams/state":"6fqJ5","../errors":"5mxXe","inherits":"1EUwN","./_stream_duplex":"uRelU"}],"5VWxV":[function(require,module,exports) {
var global = arguments[3];
/**
* Module exports.
*/
module.exports = deprecate;
/**
* Mark that a method should not be used.
* Returns a modified function which warns once by default.
*
* If `localStorage.noDeprecation = true` is set, then it is a no-op.
*
* If `localStorage.throwDeprecation = true` is set, then deprecated functions
* will throw an Error when invoked.
*
* If `localStorage.traceDeprecation = true` is set, then deprecated functions
* will invoke `console.trace()` instead of `console.error()`.
*
* @param {Function} fn - the function to deprecate
* @param {String} msg - the string to print to the console when `fn` is invoked
* @returns {Function} a new "deprecated" version of `fn`
* @api public
*/
function deprecate(fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
/**
* Checks `localStorage` for boolean values for the given `name`.
*
* @param {String} name
* @returns {Boolean}
* @api private
*/
function config(name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

},{}],"5Jatk":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
// 
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
/*<replacement>*/
var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/
var isEncoding = Buffer.isEncoding || (function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
    case 'raw':
      return true;
    default:
      return false;
  }
});
function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return;
        // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}
;
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0; else if (byte >> 5 === 0x06) return 2; else if (byte >> 4 === 0x0E) return 3; else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0; else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}
function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}
function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}
function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

},{"safe-buffer":"3zZ8y"}],"3zZ8y":[function(require,module,exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource>*/
/*eslint-disable node/no-deprecated-api*/
var buffer = require('buffer');
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number');
  }
  return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  var buf = Buffer(size);
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf;
};
SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  return buffer.SlowBuffer(size);
};

},{"buffer":"3susO"}],"6R4wQ":[function(require,module,exports) {
"use strict";
var process = require("process");
const finished = require('./end-of-stream');
const kLastResolve = Symbol('lastResolve');
const kLastReject = Symbol('lastReject');
const kError = Symbol('error');
const kEnded = Symbol('ended');
const kLastPromise = Symbol('lastPromise');
const kHandlePromise = Symbol('handlePromise');
const kStream = Symbol('stream');
function createIterResult(value, done) {
  return {
    value,
    done
  };
}
function readAndResolve(iter) {
  const resolve = iter[kLastResolve];
  if (resolve !== null) {
    const data = iter[kStream].read();
    // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'
    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}
function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
  return (resolve, reject) => {
    lastPromise.then(() => {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }
      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}
const AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
const ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf({
  get stream() {
    return this[kStream];
  },
  next() {
    // if we have detected an error in the meanwhile
    // reject straight away
    const error = this[kError];
    if (error !== null) {
      return Promise.reject(error);
    }
    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }
    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise((resolve, reject) => {
        process.nextTick(() => {
          if (this[kError]) {
            reject(this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    }
    // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time
    const lastPromise = this[kLastPromise];
    let promise;
    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      const data = this[kStream].read();
      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }
      promise = new Promise(this[kHandlePromise]);
    }
    this[kLastPromise] = promise;
    return promise;
  },
  [Symbol.asyncIterator]() {
    return this;
  },
  return() {
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise((resolve, reject) => {
      this[kStream].destroy(null, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve(createIterResult(undefined, true));
      });
    });
  }
}, AsyncIteratorPrototype);
const createReadableStreamAsyncIterator = stream => {
  const iterator = Object.create(ReadableStreamAsyncIteratorPrototype, {
    [kStream]: {
      value: stream,
      writable: true
    },
    [kLastResolve]: {
      value: null,
      writable: true
    },
    [kLastReject]: {
      value: null,
      writable: true
    },
    [kError]: {
      value: null,
      writable: true
    },
    [kEnded]: {
      value: stream._readableState.endEmitted,
      writable: true
    },
    // the function passed to new Promise
    // is cached so we avoid allocating a new
    // closure at every run
    [kHandlePromise]: {
      value: (resolve, reject) => {
        const data = iterator[kStream].read();
        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(data, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }
  });
  iterator[kLastPromise] = null;
  finished(stream, err => {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      const reject = iterator[kLastReject];
      // reject if we are waiting for data in the Promise
      // returned by next() and store the error
      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }
      iterator[kError] = err;
      return;
    }
    const resolve = iterator[kLastResolve];
    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }
    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};
module.exports = createReadableStreamAsyncIterator;

},{"process":"7AgFc","./end-of-stream":"7LVux"}],"7LVux":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).

'use strict';

const ERR_STREAM_PREMATURE_CLOSE = require('../../../errors').codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
  let called = false;
  return function () {
    if (called) return;
    called = true;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callback.apply(this, args);
  };
}
function noop() {}
function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}
function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  let readable = opts.readable || opts.readable !== false && stream.readable;
  let writable = opts.writable || opts.writable !== false && stream.writable;
  const onlegacyfinish = () => {
    if (!stream.writable) onfinish();
  };
  var writableEnded = stream._writableState && stream._writableState.finished;
  const onfinish = () => {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };
  var readableEnded = stream._readableState && stream._readableState.endEmitted;
  const onend = () => {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };
  const onerror = err => {
    callback.call(stream, err);
  };
  const onclose = () => {
    let err;
    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };
  const onrequest = () => {
    stream.req.on('finish', onfinish);
  };
  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }
  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}
module.exports = eos;
},{"../../../errors":"5mxXe"}],"7xfk2":[function(require,module,exports) {
module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};

},{}],"CgeIy":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;
const _require$codes = require('../errors').codes,
  ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
  ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
  ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
const Duplex = require('./_stream_duplex');
require('inherits')(Transform, Duplex);
function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }
  ts.writechunk = null;
  ts.writecb = null;
  if (data != null)
    // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}
function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}
function prefinish() {
  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush((er, data) => {
      done(this, er, data);
    });
  } else {
    done(this, null, null);
  }
}
Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};
Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;
  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};
Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, err2 => {
    cb(err2);
  });
};
function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null)
    // single equals check for both `null` and `undefined`
    stream.push(data);

  // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}
},{"../errors":"5mxXe","./_stream_duplex":"uRelU","inherits":"1EUwN"}],"5Rp0N":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;
const Transform = require('./_stream_transform');
require('inherits')(PassThrough, Transform);
function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}
PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":"CgeIy","inherits":"1EUwN"}],"1IR5a":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).

'use strict';

let eos;
function once(callback) {
  let called = false;
  return function () {
    if (called) return;
    called = true;
    callback(...arguments);
  };
}
const _require$codes = require('../../../errors').codes,
  ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
  ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}
function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}
function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  let closed = false;
  stream.on('close', () => {
    closed = true;
  });
  if (eos === undefined) eos = require('./end-of-stream');
  eos(stream, {
    readable: reading,
    writable: writing
  }, err => {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  let destroyed = false;
  return err => {
    if (closed) return;
    if (destroyed) return;
    destroyed = true;

    // request.destroy just do .end - .abort is what we want
    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}
function call(fn) {
  fn();
}
function pipe(from, to) {
  return from.pipe(to);
}
function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}
function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }
  const callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }
  let error;
  const destroys = streams.map(function (stream, i) {
    const reading = i < streams.length - 1;
    const writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}
module.exports = pipeline;
},{"../../../errors":"5mxXe","./end-of-stream":"7LVux"}],"3IaBi":[function(require,module,exports) {
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"1Frao":[function(require,module,exports) {
module.exports = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
}

},{}],"1sX4F":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var punycode = require('punycode');
var util = require('./util');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

},{"punycode":"4W3UY","./util":"68vzu","querystring":"2PcI0"}],"4W3UY":[function(require,module,exports) {
var global = arguments[3];
var define;
/*! https://mths.be/punycode v1.4.1 by @mathias*/
;
(function (root) {
  /** Detect free variables*/
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  var freeModule = typeof module == 'object' && module && !module.nodeType && module;
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
    root = freeGlobal;
  }
  /**
  * The `punycode` object.
  * @name punycode
  * @type Object
  */
  var punycode, /** Highest positive signed 32-bit float value*/
  maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
  /** Bootstring parameters*/
  base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, // 0x80
  delimiter = '-', // '\x2D'
  /** Regular expressions*/
  regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
  regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
  /** Error messages*/
  errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  }, /** Convenience shortcuts*/
  baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, /** Temporary variable*/
  key;
  /*--------------------------------------------------------------------------*/
  /**
  * A generic error utility function.
  * @private
  * @param {String} type The error type.
  * @returns {Error} Throws a `RangeError` with the applicable error message.
  */
  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
  * A generic `Array#map` utility function.
  * @private
  * @param {Array} array The array to iterate over.
  * @param {Function} callback The function that gets called for every array
  * item.
  * @returns {Array} A new array of values returned by the callback function.
  */
  function map(array, fn) {
    var length = array.length;
    var result = [];
    while (length--) {
      result[length] = fn(array[length]);
    }
    return result;
  }
  /**
  * A simple `Array#map`-like wrapper to work with domain name strings or email
  * addresses.
  * @private
  * @param {String} domain The domain name or email address.
  * @param {Function} callback The function that gets called for every
  * character.
  * @returns {Array} A new string of characters returned by the callback
  * function.
  */
  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';
    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    }
    // Avoid `split(regex)` for IE8 compatibility. See #17.
    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  /**
  * Creates an array containing the numeric code points of each Unicode
  * character in the string. While JavaScript uses UCS-2 internally,
  * this function will convert a pair of surrogate halves (each of which
  * UCS-2 exposes as separate characters) into a single code point,
  * matching UTF-16.
  * @see `punycode.ucs2.encode`
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode.ucs2
  * @name decode
  * @param {String} string The Unicode input string (UCS-2).
  * @returns {Array} The new array of code points.
  */
  function ucs2decode(string) {
    var output = [], counter = 0, length = string.length, value, extra;
    while (counter < length) {
      value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) {
          // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  /**
  * Creates a string based on an array of numeric code points.
  * @see `punycode.ucs2.decode`
  * @memberOf punycode.ucs2
  * @name encode
  * @param {Array} codePoints The array of numeric code points.
  * @returns {String} The new Unicode string (UCS-2).
  */
  function ucs2encode(array) {
    return map(array, function (value) {
      var output = '';
      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }
      output += stringFromCharCode(value);
      return output;
    }).join('');
  }
  /**
  * Converts a basic code point into a digit/integer.
  * @see `digitToBasic()`
  * @private
  * @param {Number} codePoint The basic numeric code point value.
  * @returns {Number} The numeric value of a basic code point (for use in
  * representing integers) in the range `0` to `base - 1`, or `base` if
  * the code point does not represent a value.
  */
  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }
    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }
    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }
    return base;
  }
  /**
  * Converts a digit/integer into a basic code point.
  * @see `basicToDigit()`
  * @private
  * @param {Number} digit The numeric value of a basic code point.
  * @returns {Number} The basic code point whose value (when used for
  * representing integers) is `digit`, which needs to be in the range
  * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
  * used; else, the lowercase form is used. The behavior is undefined
  * if `flag` is non-zero and `digit` has no uppercase form.
  */
  function digitToBasic(digit, flag) {
    // 0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  /**
  * Bias adaptation function as per section 3.4 of RFC 3492.
  * https://tools.ietf.org/html/rfc3492#section-3.4
  * @private
  */
  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  /**
  * Converts a Punycode string of ASCII-only symbols to a string of Unicode
  * symbols.
  * @memberOf punycode
  * @param {String} input The Punycode string of ASCII-only symbols.
  * @returns {String} The resulting string of Unicode symbols.
  */
  function decode(input) {
    // Don't use UCS-2
    var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, /** Cached calculation results*/
    baseMinusT;
    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.
    basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
      basic = 0;
    }
    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }
      output.push(input.charCodeAt(j));
    }
    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.
    for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for ((oldi = i, w = 1, k = base); ; k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }
        digit = basicToDigit(input.charCodeAt(index++));
        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }
        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
        if (digit < t) {
          break;
        }
        baseMinusT = base - t;
        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }
        w *= baseMinusT;
      }
      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0);
      // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:
      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }
      n += floor(i / out);
      i %= out;
      // Insert `n` at position `i` of the output
      output.splice(i++, 0, n);
    }
    return ucs2encode(output);
  }
  /**
  * Converts a string of Unicode symbols (e.g. a domain name label) to a
  * Punycode string of ASCII-only symbols.
  * @memberOf punycode
  * @param {String} input The string of Unicode symbols.
  * @returns {String} The resulting Punycode string of ASCII-only symbols.
  */
  function encode(input) {
    var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], /** `inputLength` will hold the number of code points in `input`.*/
    inputLength, /** Cached calculation results*/
    handledCPCountPlusOne, baseMinusT, qMinusT;
    // Convert the input in UCS-2 to Unicode
    input = ucs2decode(input);
    // Cache the length
    inputLength = input.length;
    // Initialize the state
    n = initialN;
    delta = 0;
    bias = initialBias;
    // Handle the basic code points
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }
    handledCPCount = basicLength = output.length;
    // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string - if it is not empty - with a delimiter
    if (basicLength) {
      output.push(delimiter);
    }
    // Main encoding loop:
    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for ((m = maxInt, j = 0); j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }
      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow
      handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }
        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for ((q = delta, k = base); ; k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) {
              break;
            }
            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }
          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n;
    }
    return output.join('');
  }
  /**
  * Converts a Punycode string representing a domain name or an email address
  * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
  * it doesn't matter if you call it on a string that has already been
  * converted to Unicode.
  * @memberOf punycode
  * @param {String} input The Punycoded domain name or email address to
  * convert to Unicode.
  * @returns {String} The Unicode representation of the given Punycode
  * string.
  */
  function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  }
  /**
  * Converts a Unicode string representing a domain name or an email address to
  * Punycode. Only the non-ASCII parts of the domain name will be converted,
  * i.e. it doesn't matter if you call it with a domain that's already in
  * ASCII.
  * @memberOf punycode
  * @param {String} input The domain name or email address to convert, as a
  * Unicode string.
  * @returns {String} The Punycode representation of the given domain name or
  * email address.
  */
  function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  }
  /*--------------------------------------------------------------------------*/
  /** Define the public API*/
  punycode = {
    /**
    * A string representing the current Punycode.js version number.
    * @memberOf punycode
    * @type String
    */
    'version': '1.4.1',
    /**
    * An object of methods to convert from JavaScript's internal character
    * representation (UCS-2) to Unicode code points, and back.
    * @see <https://mathiasbynens.be/notes/javascript-encoding>
    * @memberOf punycode
    * @type Object
    */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };
  /** Expose `punycode`*/
  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    define('punycode', function () {
      return punycode;
    });
  } else if (freeExports && freeModule) {
    if (module.exports == freeExports) {
      // in Node.js, io.js, or RingoJS v0.8.0+
      freeModule.exports = punycode;
    } else {
      // in Narwhal or RingoJS v0.7.0-
      for (key in punycode) {
        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
      }
    }
  } else {
    // in Rhino or a web browser
    root.punycode = punycode;
  }
})(this);

},{}],"68vzu":[function(require,module,exports) {
'use strict';

module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};

},{}],"2PcI0":[function(require,module,exports) {
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":"6T2sX","./encode":"4aSn0"}],"6T2sX":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],"4aSn0":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],"5cL8c":[function(require,module,exports) {
var http = require('http')
var url = require('url')

var https = module.exports

for (var key in http) {
  if (http.hasOwnProperty(key)) https[key] = http[key]
}

https.request = function (params, cb) {
  params = validateParams(params)
  return http.request.call(this, params, cb)
}

https.get = function (params, cb) {
  params = validateParams(params)
  return http.get.call(this, params, cb)
}

function validateParams (params) {
  if (typeof params === 'string') {
    params = url.parse(params)
  }
  if (!params.protocol) {
    params.protocol = 'https:'
  }
  if (params.protocol !== 'https:') {
    throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"')
  }
  return params
}

},{"http":"2uALp","url":"1sX4F"}],"AF0vV":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "RelatedItem", function () {
  return RelatedItem;
});
var _preact = require('preact');
var _jsxFileName = "/project/sandbox/RelatedItem.tsx";
function RelatedItem({item, insights, onSelect}) {
  return _preact.h("a", {
    className: "RelatedItem grid gap-2 color-inherit no-underline",
    href: item.url,
    onClick: event => {
      event.preventDefault();
      // eslint-disable-next-line no-console
      console.log(item.objectID);
      onSelect(item);
      insights('clickedObjectIDs', {
        objectIDs: [item.objectID],
        positions: [item.__position],
        eventName: 'Product Clicked',
        queryID: item.__queryID,
        index: item.__indexName
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, _preact.h("div", {
    className: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, _preact.h("img", {
    src: item.image_urls[0],
    alt: item.name,
    className: "max-w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), _preact.h("div", {
    className: "RelatedItem-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, item._score && _preact.h("div", {
    className: "flex items-center absolute right-0 top-0 text-gray-500 font-semibold text-xs rounded-lg m-2 py-1 px-2",
    style: {
      background: 'rgb(255 255 255 / 92%)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, _preact.h("svg", {
    className: "inline-block mr-1",
    width: "18",
    viewBox: "0 0 24 24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, _preact.h("path", {
    fill: "currentColor",
    d: "M18.984 9.984h2.016v4.031h-2.016v-4.031zM15 18v-12h2.016v12h-2.016zM3 14.016v-4.031h2.016v4.031h-2.016zM11.016 21.984v-19.969h1.969v19.969h-1.969zM6.984 18v-12h2.016v12h-2.016z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), item._score), _preact.h("div", {
    className: "flex items-center absolute right-0 bottom-0 text-gray-500 font-semibold text-xs rounded-lg m-2 py-1 px-2",
    style: {
      background: 'rgb(255 255 255 / 92%)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, item.objectID))), _preact.h("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, _preact.h("div", {
    className: "text-sm text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, item.brand), _preact.h("div", {
    className: "text-gray-900 font-semibold mb-1 whitespace-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, item.name), Boolean(item.reviewScore) && _preact.h("div", {
    className: "items-center flex flex-grow text-sm text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, _preact.h("svg", {
    className: "mr-1 text-orange-400",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, _preact.h("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })), _preact.h("span", {
    className: "mr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, item.reviewScore.toFixed(1) || '--'), _preact.h("span", {
    className: "text-gray-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "(", item.reviewCount, " reviews)")), _preact.h("div", {
    className: "my-2 font-semibold text-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, item.price.value, " ", item.price.currency), _preact.h("button", {
    className: "flex items-center justify-center w-full bg-white border-nebula-500 border-solid border rounded text-nebula-900 cursor-pointer py-1 px-2 font-semibold",
    onClick: event => {
      event.preventDefault();
      insights('convertedObjectIDsAfterSearch', {
        objectIDs: [item.objectID],
        eventName: 'Product Added To Cart',
        queryID: item.__queryID,
        index: item.__indexName
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Add to cart")));
}

},{"preact":"4L2dE","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4ZOnh":[function() {},{}],"7H5jl":[function() {},{}]},["5J8Fp","3coI7"], "3coI7", "parcelRequire6cfa")

//# sourceMappingURL=index.7d93137f.js.map
