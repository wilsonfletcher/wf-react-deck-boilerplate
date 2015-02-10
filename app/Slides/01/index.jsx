// vendor modules require
var React = require("react/addons");

// If more complex styles are needed
// create a index.scss file in the same folder
// require("./index.scss");

var Slide = React.createClass({
  render: function () {
    var slideStyle = {};

    return (
      <article className="SlideItem bg-secondary" data-id={this.props.id} style={slideStyle}>
        <div className="SlideItem-text g-center g-wrapper">
          <h1>Living in <br />a front-end world</h1>
          <h4>What is going on?</h4>
        </div>
      </article>
    );
  }
});

module.exports = Slide;