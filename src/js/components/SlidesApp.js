/** @jsx React.DOM */

"use strict";

var React = require("react");
// var SlidesMenuBar = require("./SlidesMenuBar");
var SlidesList = require("./SlidesList");
// var initial = require("../data/initial");

var SlidesApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Your slides</h1>
        <SlidesList />
      </div>
    );
  }
});

module.exports = SlidesApp;
