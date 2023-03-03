data = JSON.parse(localStorage.getItem("Poll"))
document.querySelector("#nhuquynh").innerHTML = data["NhuQuynh"]
document.querySelector("#minhhang").innerHTML = data["MinhHang"]
document.querySelector("#thuyhong").innerHTML = data["ThuyHong"]

let long = {
    "NhuQuynh": 0,
    "MinhHang": 0,
    "ThuyHong": 0
}

let array = [data["NhuQuynh"], data["MinhHang"], data["ThuyHong"]]
let max = Math.max.apply(null, array)

if(max == data["NhuQuynh"]){
    document.querySelector(".winner").innerHTML = "Nhu Quynh"
} else if(max == data["MinhHang"]){
    document.querySelector(".winner").innerHTML = "Minh Hang"
} else if(max == data["ThuyHong"]) {
    document.querySelector(".winner").innerHTML = "Thuy Hong"
}

document.querySelector(".prestige").addEventListener("click", (e) => {
    localStorage.setItem("Poll", JSON.stringify(long))
    alert("Done!")
    window.location.href = './index.html'
})