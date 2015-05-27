const React = require('react'),
  _ = require('lodash'),
  semver = require('semver'),
  packageJson = require('package-json');

var pkg = require('./../../package.json'),
  dependencies = pkg.dependencies;



function getPackageInfo (pkgName) {

  return new Promise(function (resolve, reject) {
    packageJson(pkgName, function (err, json) {
      if (err) {
        reject(err);
      }

      resolve(json);
    });
  });
}



Object.keys(dependencies).forEach(function (name) {
  getPackageInfo(name)
    .then(function (res) {
      console.log(res)
    })
    .catch(function (err) {
      throw err;
    });
});



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

