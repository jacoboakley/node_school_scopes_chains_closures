function foo() {
  var bar;
    return(zip)
  quux = 1; //No (var) per instruction in lesson 3. 
            //quux is made into global var
  function zip() {
    var quux = 2;
    bar = true;
  }
}