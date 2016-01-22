
function ExampleDependency() {
}

ExampleDependency.prototype.process = function(name) {
  return name.toLowerCase();
};

module.exports = ExampleDependency;
