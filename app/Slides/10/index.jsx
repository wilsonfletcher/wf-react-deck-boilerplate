// vendor modules require
var React = require("react/addons"),
    Router = require("react-router");

// app modules require

// shorthands
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { CSSTransitionGroup } = React.addons;

// style
require("./index.scss");


var Slide = React.createClass({
  render: function () {
    var cx = React.addons.classSet;

    return (
      <article className="SlideItem" data-id={this.props.id}>
        <div className="SlideItem-text g-center g-wrapper">
          <h2>Dependencies downloaders</h2>
          <h4>Bower, npm</h4>
          <p>Given a library name, they download it with all required dependencies.</p>
          <figure>
            <img src={ require("./image.svg") } />
          </figure>
        </div>
      </article>
    );
  }
});





module.exports = Slide;