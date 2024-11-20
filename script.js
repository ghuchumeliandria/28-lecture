
let button = document.getElementById("button");

let boolen = true;


button.addEventListener("click", () => {
  localStorage.setItem('key' , JSON.stringify(boolen))
  
  let getItem = JSON.parse(localStorage.getItem("key"))
  if(getItem == true){
    document.body.style.backgroundColor = "black";
    boolen = false
  }else{
    document.body.style.backgroundColor = "white";
    boolen = true;
  }
});
