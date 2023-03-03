// fetch data
let data = localStorage.getItem("Poll")
let long = {
    "NhuQuynh": 0,
    "MinhHang": 0,
    "ThuyHong": 0
}
if(data){
    long = JSON.parse(data)
} else {
    localStorage.setItem("Poll", JSON.stringify(long))
}

// poll
let lon1 = document.querySelector(".lon1")
let lon2 = document.querySelector(".lon2")
let lon3 = document.querySelector(".lon3")

lon1.addEventListener("click", () => {
    long["NhuQuynh"] += 1
    localStorage.setItem("Poll", JSON.stringify(long))
    // alert("You have voted for Nhu Quynh!!!")
    document.querySelector("#result").classList.remove("hidden")
})

lon2.addEventListener("click", () => {
    long["MinhHang"] += 1
    localStorage.setItem("Poll", JSON.stringify(long))
    // alert("You have voted for Minh Hang!!!!")
    document.querySelector("#result").classList.remove("hidden")
})

lon3.addEventListener("click", () => {
    long["ThuyHong"] += 1
    localStorage.setItem("Poll", JSON.stringify(long))
    // alert("You have voted for Thuy Hong!!!!!")
    document.querySelector("#result").classList.remove("hidden")
})

document.querySelector(".react").addEventListener("click", ()=> {
    document.querySelector("#baque").classList.remove("hide")
})