/** @jsx React.DOM */

"use strict";

var React = require("react");
var SlidesApp = require("./components/SlidesApp");
// var SlidesStore = require("./store");
// var store = new SlidesStore();

// store={store}
React.renderComponent(<SlidesApp />,
                      document.getElementById('app'));
