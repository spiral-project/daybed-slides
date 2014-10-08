/** @jsx React.DOM */

"use strict";

var React = require("react");


var SlidesList = React.createClass({
  render: function() {
    return (<div className="slidesList">
      <table>
        {this.props.slides.map(function(slide) {
          return (
            <tr>
              <th>{slide.title}</th>
              <td><button data-id={slide.id}>Edit</button><button data-id={slide.id}>Remove</button></td>
             </tr>
           );
         })}
      </table>
      <button onClick={this.props.addSlideshow}>Add a new Slideshow</button>
      <button onClick={this.props.loadSamples}>Load Sample Data</button>
    </div>);
  }
});

module.exports = SlidesList;
