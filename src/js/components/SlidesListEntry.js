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
      <tr>
        <th>{this.props.title}</th>
        <td>
          <button>Edit</button>
          <button onClick={this.handleClickDelete}>Remove</button>
        </td>
      </tr>
    );
  }
});

module.exports = SlidesListEntry;
