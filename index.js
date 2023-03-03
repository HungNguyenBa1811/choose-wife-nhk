// fetch data
let data = localStorage.getItem("Poll")
let nhk = {
    "NhuQuynh": 0,
    "NguyenChau": 0,
    "MinhTrang": 0
}
if(data){
    nhk = JSON.parse(data)
} else {
    localStorage.setItem("Poll", JSON.stringify(nhk))
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
    long["NguyenChau"] += 1
    localStorage.setItem("Poll", JSON.stringify(long))
    // alert("You have voted for Nguyen Chau!!!!")
    document.querySelector("#result").classList.remove("hidden")
})

lon3.addEventListener("click", () => {
    long["MinhTrang"] += 1
    localStorage.setItem("Poll", JSON.stringify(long))
    // alert("You have voted for Minh Trang!!!!!")
    document.querySelector("#result").classList.remove("hidden")
})

document.querySelector(".react").addEventListener("click", ()=> {
    document.querySelector("#baque").classList.remove("hide")
})
