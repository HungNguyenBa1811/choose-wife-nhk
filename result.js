let nhk = {
    "NhuQuynh": 0,
    "NguyenChau": 0,
    "MinhTrang": 0
}
let data = JSON.parse(localStorage.getItem("Poll"))
if (!data){
    data = nhk
}
document.querySelector("#nhuquynh").innerHTML = data["NhuQuynh"]
document.querySelector("#nguyenchau").innerHTML = data["NguyenChau"]
document.querySelector("#minhtrang").innerHTML = data["MinhTrang"]

let array = [data["NhuQuynh"], data["NguyenChau"], data["MinhTrang"]]
let max = Math.max.apply(null, array)

if(max == data["NhuQuynh"]){
    document.querySelector(".winner").innerHTML = "Nhu Quynh"
} else if(max == data["NguyenChau"]){
    document.querySelector(".winner").innerHTML = "Nguyen Chau"
} else if(max == data["MinhTrang"]) {
    document.querySelector(".winner").innerHTML = "Minh Trang"
}

document.querySelector(".prestige").addEventListener("click", (e) => {
    localStorage.setItem("Poll", JSON.stringify(nhk))
    alert("Done!")
    window.location.href = './index.html'
})
