
let button = document.getElementById("button");



button.addEventListener("click", () => {
  let setTheme = document.body

  setTheme.classList.toggle("dark-mode")
  let theme;
  if(setTheme.classList.contains("dark-mode")){
    console.log("dark-mode")
    theme = "DARK"
  }else{
    theme = "WHITE"
    console.log("white")
    localStorage.setItem("PageMode" , JSON.stringify(theme))
  }
});
let getItem = JSON.parse(localStorage.getItem("PageMode"))
console.log(getItem)
// let getItem = JSON.parse(localStorage.getItem("key"))
// console.log(getItem)
// if(getItem == "DARK"){
//     document.body.style.backgroundColor = "black"

if(getItem === "DARK"){
  document.body.classList = "dark-mode"
}
