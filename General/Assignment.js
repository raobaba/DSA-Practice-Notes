function Person(name){
  this.name = name;
  this.sayName = function(){
    console.log(this.name);
  }
}
var rajan = new Person("Rajan");;
var dhanjee = new Person("Dhanjee");
rajan.sayName();
dhanjee.sayName();
