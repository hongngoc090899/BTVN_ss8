const btn1 = document.getElementById("btn1");
const div1 = document.getElementById("div1");
btn1.onclick = function(){
    if (div1.style.display === "none") {
        div1.style.display = "block";
      } else {
        div1.style.display = "none";
      }

}




const btn2 = document.getElementById("btn2");
const div2 = document.getElementById("div2");
// const colors = [
//     "#00aefd",
//     "#ffa400",
//     "#07a787",
//     "#ff7870",
//     "blue",
//     "pink",
//     "yellow",
//     "#e74c3c",
//     "#2979ff",
//   ];
btn2.onclick = function(){
   const randomColor = (Math.random().toString(16) + "000000").substring(2,8);
   div2.style.backgroundColor = "#" + randomColor;

}


const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
btn3.onclick = function(){
  var text = div3.innerHTML;
  div3.innerHTML = div4.innerHTML;
  div4.innerHTML = text;

}


const btn4 = document.getElementById("btn4");
const div5 = document.getElementById("div5");
const content = div5.innerText;
let fSize = 14;
btn4.onclick = function(){
  div5.style.fontSize = `${++fSize}px`;
  div5.innerText = `${content} cỡ chữ hiện tại là ${fSize}`;
}







