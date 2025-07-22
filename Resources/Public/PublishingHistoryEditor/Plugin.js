"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js
  var init_manifest = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js
  var init_createConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"() {
      init_manifest();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js
  var init_AbstractRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"() {
    }
  });

  // node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var init_positionalArraySorter = __esm({
    "node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js
  var init_SynchronousRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"() {
      init_AbstractRegistry();
      init_positionalArraySorter();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js
  var init_SynchronousMetaRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"() {
      init_SynchronousRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js
  var init_registry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js"() {
      init_SynchronousRegistry();
      init_SynchronousMetaRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default;
  var init_dist = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/index.js"() {
      init_createConsumerApi();
      init_readFromConsumerApi();
      init_registry();
      dist_default = readFromConsumerApi("manifest");
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // css-modules:css-modules://dNI4yA008y_o9ygCpZIDWFxX_XTLSb6B1zJ1jAOMwi8.css
  var init_ = __esm({
    "css-modules:css-modules://dNI4yA008y_o9ygCpZIDWFxX_XTLSb6B1zJ1jAOMwi8.css"() {
    }
  });

  // src/style.module.css
  var style_module_default;
  var init_style_module = __esm({
    "src/style.module.css"() {
      "use strict";
      init_();
      style_module_default = { "headline": "qDLCEG_headline", "emptyList": "qDLCEG_emptyList" };
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js
  var require_neos_ui_i18n = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-i18n/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiI18n;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // css-modules:css-modules://kaNtjSPzShyneb9HuNvOjb0K8e16k2FqgGNkBxMhf2g.css
  var init_2 = __esm({
    "css-modules:css-modules://kaNtjSPzShyneb9HuNvOjb0K8e16k2FqgGNkBxMhf2g.css"() {
    }
  });

  // src/components/PublishingHistoryTable.module.css
  var PublishingHistoryTable_module_default;
  var init_PublishingHistoryTable_module = __esm({
    "src/components/PublishingHistoryTable.module.css"() {
      "use strict";
      init_2();
      PublishingHistoryTable_module_default = { "table": "wqZCnW_table", "publisherColumn": "wqZCnW_publisherColumn" };
    }
  });

  // src/components/PublishingHistoryTable.js
  var import_react, import_prop_types, import_neos_ui_decorators, import_neos_ui_i18n, import_react_ui_components, PublishingHistoryTable, PublishingHistoryTable_default;
  var init_PublishingHistoryTable = __esm({
    "src/components/PublishingHistoryTable.js"() {
      "use strict";
      import_react = __toESM(require_react());
      import_prop_types = __toESM(require_prop_types());
      import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
      import_neos_ui_i18n = __toESM(require_neos_ui_i18n());
      import_react_ui_components = __toESM(require_react_ui_components());
      init_PublishingHistoryTable_module();
      PublishingHistoryTable = ({ publishingInformations, i18nRegistry }) => {
        const formatDate = (isoString, withTime = false) => {
          const date = new Date(isoString);
          return withTime ? date.toLocaleString() : date.toLocaleDateString();
        };
        const labels = {
          publishingDate: i18nRegistry.translate(
            "PublishingHistoryEditor.publishingHistoryTable.publishingDate",
            "Publishing Date",
            [],
            "Main",
            "Flownative.LastPublisher"
          ),
          publisher: i18nRegistry.translate(
            "PublishingHistoryEditor.publishingHistoryTable.publisher",
            "Publisher",
            [],
            "Main",
            "Flownative.LastPublisher"
          ),
          targetWorkspace: i18nRegistry.translate(
            "PublishingHistoryEditor.publishingHistoryTable.targetWorkspace",
            "Target Workspace",
            [],
            "Main",
            "Flownative.LastPublisher"
          )
        };
        return /* @__PURE__ */ import_react.default.createElement("table", { className: PublishingHistoryTable_module_default.table }, /* @__PURE__ */ import_react.default.createElement("thead", null, /* @__PURE__ */ import_react.default.createElement("tr", null, /* @__PURE__ */ import_react.default.createElement("th", { title: labels.publishingDate }, /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.Icon, { icon: "clock", size: "s" })), /* @__PURE__ */ import_react.default.createElement("th", { title: labels.publisher, className: PublishingHistoryTable_module_default.publisherColumn }, /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.Icon, { icon: "user", size: "s" }), /* @__PURE__ */ import_react.default.createElement("span", null, labels.publisher)), /* @__PURE__ */ import_react.default.createElement("th", { title: labels.targetWorkspace }, /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.Icon, { icon: "th-large", size: "s" })))), /* @__PURE__ */ import_react.default.createElement("tbody", null, publishingInformations.map((info, index) => /* @__PURE__ */ import_react.default.createElement("tr", { key: index }, /* @__PURE__ */ import_react.default.createElement("td", { title: formatDate(info.publishingDate, true) }, formatDate(info.publishingDate, false)), /* @__PURE__ */ import_react.default.createElement("td", null, info.publisher), /* @__PURE__ */ import_react.default.createElement("td", null, info.targetWorkspace)))));
      };
      PublishingHistoryTable.propTypes = {
        publishingInformations: import_prop_types.default.arrayOf(
          import_prop_types.default.shape({
            publisher: import_prop_types.default.string.isRequired,
            targetWorkspace: import_prop_types.default.string.isRequired,
            publishingDate: import_prop_types.default.string.isRequired
          })
        ).isRequired,
        i18nRegistry: import_prop_types.default.object.isRequired
      };
      PublishingHistoryTable_default = (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
        i18nRegistry: globalRegistry.get("i18n")
      }))(PublishingHistoryTable);
    }
  });

  // src/PublishingHistoryEditor.js
  var import_react2, import_react_ui_components2, import_neos_ui_i18n2, PublishingHistoryEditor;
  var init_PublishingHistoryEditor = __esm({
    "src/PublishingHistoryEditor.js"() {
      "use strict";
      import_react2 = __toESM(require_react());
      init_style_module();
      import_react_ui_components2 = __toESM(require_react_ui_components());
      import_neos_ui_i18n2 = __toESM(require_neos_ui_i18n());
      init_PublishingHistoryTable();
      PublishingHistoryEditor = class extends import_react2.Component {
        render() {
          const { value, options } = this.props;
          if (!Array.isArray(value) || value.length === 0) {
            return /* @__PURE__ */ import_react2.default.createElement("div", { className: style_module_default.emptyList }, /* @__PURE__ */ import_react2.default.createElement(import_react_ui_components2.Icon, { icon: "exclamation-circle", size: "s" }), /* @__PURE__ */ import_react2.default.createElement("span", null, /* @__PURE__ */ import_react2.default.createElement(
              import_neos_ui_i18n2.default,
              {
                id: "PublishingHistoryEditor.noPublishingHistory",
                sourceName: "Main",
                packageKey: "Flownative.LastPublisher",
                fallback: "The Element has no publishing history entries."
              }
            )));
          }
          const { maximumItems } = options || {};
          const sortedItems = [...value].sort((a, b) => new Date(a.publishingDate) - new Date(b.publishingDate));
          const filteredItems = typeof maximumItems === "number" ? sortedItems.slice(0, maximumItems) : sortedItems;
          return /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement(PublishingHistoryTable_default, { publishingInformations: filteredItems }));
        }
      };
    }
  });

  // src/manifest.js
  var manifest_exports = {};
  var init_manifest2 = __esm({
    "src/manifest.js"() {
      "use strict";
      init_dist();
      init_PublishingHistoryEditor();
      dist_default("Flownative.LastPublisher:PublishingHistoryEditor", {}, (globalRegistry) => {
        const editorsRegistry = globalRegistry.get("inspector").get("editors");
        editorsRegistry.set("Flownative.LastPublisher/PublishingHistoryEditor", {
          component: PublishingHistoryEditor
        });
      });
    }
  });

  // src/index.js
  init_manifest2();
})();
