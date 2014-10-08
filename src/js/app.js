/** @jsx React.DOM */

"use strict";

var React = require("react");
var SlidesApp = require("./components/SlidesApp");
var LocalStore = require("./store");
var store = new LocalStore();

React.renderComponent(<SlidesApp store={store} />,
                      document.getElementById('app'));
