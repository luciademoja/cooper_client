function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
}

Person.prototype.assessment = function() {
  cooper = new CooperTest();
  cooper.testResults(this);
};
