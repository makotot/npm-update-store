const React = require('react'),
  _ = require('lodash');

var pkg = require('./../../package.json'),
  dependencies = pkg.dependencies;

console.log(_)

var DependenciesList = React.createClass({
  getInitialState: function () {
    return {
      data: this.props.data
    };
  },
  render: function () {
    var list = this.state.data.map(function (item) {
      return <li>{ item }</li>;
    });

    return <ul>{ list }</ul>
  }
});

React.render(<DependenciesList data={dependencies} />, document.body);

