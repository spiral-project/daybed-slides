/** @jsx React.DOM */
var SlidesList = React.createClass({
  getInitialState: function () {
    return {
      slides: [{title: "Markdown pour les nuls", id: 1},
               {title: "ReST pour les nuls", id: 2}]
    };
  },

  render: function() {
    return (<div className="slidesList">
      <table>
        {this.state.slides.map(function(slide) {
          return (
            <tr>
              <th>{slide.title}</th>
              <td><button data-id={slide.id}>Edit</button><button data-id={slide.id}>Remove</button></td>
             </tr>
           );
         })}
      </table>
      <button onClick={this.addSlideshow}>Add a new Slideshow</button>
    </div>);
  },

  addSlideshow: function() {
    this.setState({
      slides: this.state.slides.concat([{title: "New", id: 3}])
    });
  }
});


React.renderComponent(
  <div>
    <h1>Your slides</h1>
    <SlidesList />
  </div>,
  document.getElementById('work')
);
