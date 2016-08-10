function foo() {
  var bar;
  quux = 1; //No (var) per instruction. quux is made into global var
  function zip() {
    var quux = 2; 
  }
}