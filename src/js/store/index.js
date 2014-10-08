"use strict";
var STORAGE_KEY = "daybed.slides.local";

function LocalStore(options) {
  options = options || {};
  this._store = options.store || localStorage;
}

LocalStore.prototype = {
  load: function() {
    var data = this._store.getItem(STORAGE_KEY);
    if (!data) {
      console.error("empty stored local data:", data);
      return [];
    }
    try {
      return JSON.parse(data) || [];
    } catch (e) {
      console.error("failed parsing local data:", data, e);
      return [];
    }
  },

  save: function(data) {
    try {
      this._store[STORAGE_KEY] = JSON.stringify(data);
    } catch (e) {
      console.error("failed saving local data", e);
    }
  }
};

module.exports = LocalStore;
