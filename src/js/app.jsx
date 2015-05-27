const React = require('react'),
  _ = require('lodash');

var pkg = require('./../../package.json'),
  dependencies = pkg.dependencies;



var DependenciesList = React.createClass({
  render: function () {
    function item (content) {
      return <li>{ content.pkg } {content.version }</li>;
    }

    var deps = [];

    _.forEach(this.props.items, function (val, key) {
      deps.push({
        pkg: key,
        version: val
      });
    });

    return (
      <ul>{ deps.map(item) }</ul>
    );
  }
});


var Package = React.createClass({
  render: function () {
    return (
      <div>
        <h2>{ pkg.name }</h2>
        <DependenciesList items={ dependencies } />
      </div>
    );
  }
});


React.render(<Package />, document.getElementById('package-list'));

