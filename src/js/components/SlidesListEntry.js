/** @jsx React.DOM */

"use strict";

var React = require("react");

var SlidesListEntry = React.createClass({
  handleClickDelete: function() {
    if (!confirm("Are you sure?"))
      return;
    this.props.remove(this.props.id);
  },

  render: function() {
    return (
      <div>
        <span>{this.props.title}</span>
        <button>Edit</button>
        <button onClick={this.handleClickDelete}>Remove</button>
      </div>
    );
  }
});

module.exports = SlidesListEntry;
