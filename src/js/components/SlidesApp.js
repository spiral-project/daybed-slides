/** @jsx React.DOM */

"use strict";

var React = require("react");
// var SlidesMenuBar = require("./SlidesMenuBar");
var SlidesList = require("./SlidesList");
var initial = require("../data/initial");

var SlidesApp = React.createClass({
  getInitialState: function () {
    return {
      slides: this.props.store.load()
    };
  },

  save: function(slides) {
    this.props.store.save(slides);
    this.setState({slides: slides});
  },

  loadSamples: function() {
    this.save(initial);
  },

  render: function() {
    return (
      <div>
        <h1>Your slides</h1>
        <SlidesList slides={this.state.slides}
                    loadSamples={this.loadSamples} />
      </div>
    );
  }
});

module.exports = SlidesApp;
