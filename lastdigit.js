function digit() {
  x = document.getElementById("one").value;
  y = document.getElementById("two").value;
  z = document.getElementById("three").value;
  console.log(x);
  console.log(y);
  console.log(z);
  
  if (x % 10 === y % 10 &&  y%10 === z % 10 ) {
    console.log("values are same");
  } else {
    console.log("values are different");
  }
}
