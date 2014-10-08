/** @jsx React.DOM */

"use strict";

var React = require("react");
var SlidesListEntry = require('./SlidesListEntry');

var SlidesList = React.createClass({
  render: function() {
    return (<div className="slidesList">
      <table>
        {this.props.slides.map(function(slide) {
          return <SlidesListEntry title={slide.title}
                                  id={slide.id}
                                  remove={this.props.remove}/>;
         }.bind(this))}
      </table>
      <button onClick={this.props.create}>Add a new Slideshow</button>
      <button onClick={this.props.loadSamples}>Load Sample Data</button>
    </div>);
  }
});

module.exports = SlidesList;
