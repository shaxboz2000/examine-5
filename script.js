const con1  = document.querySelector(".con1");
const con2  = document.querySelector(".con2");
const con3  = document.querySelector(".con3");
const boxs1 = document.querySelector(".boxs1");
const boxs2 = document.querySelector(".boxs2");
const boxs3 = document.querySelector(".boxs3");
const btn1  = document.querySelector(".btn1");
const btn2  = document.querySelector(".btn2");
const btn3  = document.querySelector(".btn3");
  
  btn1.addEventListener("click", () => {
    let box1 = document.createElement("div");
    box1.className = "box1";
    boxs1.appendChild(box1);
  })
  
  btn2.addEventListener("click", () => {
    let box2 = document.createElement("div");
    box2.className = "box2";
    boxs2.appendChild(box2);
  })

  btn3.addEventListener("click", () => {
    let box3 = document.createElement("div");
    box3.className = "box3";
    boxs3.appendChild(box3);
  })
