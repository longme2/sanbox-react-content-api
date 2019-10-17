//如果要把一个参数n从f1，f2，f3，f4一直往下传要怎么传？必须要层层的往下传
//如果我希望嵌套在最内层的函数获得这个参数，就需要每一层把这个参数传一遍
function f1(n1) {
  console.log(1, n1);
  f2(n1);
}

function f2(n2) {
  console.log(2, n2);
  f3(n2);
}

function f3(n3) {
  console.log(3, n3);
  f4(n3);
}

function f4(n4) {
  console.log(4, n4);
}

{
  let n = 100;
  f1(n);
  console.log("done");
}
