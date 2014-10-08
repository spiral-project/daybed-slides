/** @jsx React.DOM */
"use strict";

var React = require("react");
// var SlidesMenuBar = require("./SlidesMenuBar");
var SlidesList = require("./SlidesList");
var initial = require("../data/initial");
var uuid4 = require("../utils").uuid4;


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

  create: function() {
    var slides = this.state.slides.concat([{
      id: uuid4(),
      title: "New item"
    }]);
    this.save(slides);
  },

  remove: function(id) {
    this.save(this.state.slides.filter(function(slideshow) {
      return slideshow.id !== id;
    }));
  },

  render: function() {
    return (
      <div>
        <h1>Your slides</h1>
        <SlidesList slides={this.state.slides}
                    loadSamples={this.loadSamples}
                    create={this.create}
                    remove={this.remove} />
      </div>
    );
  }
});

module.exports = SlidesApp;
