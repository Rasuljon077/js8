function array() {
    let a = []
    let user = +prompt("komanda nechchi martta ishlasin")

for (let i = 0; i < user ; i++) {
    let b = prompt("1-Komandani kirgazing || ortadagi qiymatni korsatadi")

    let c = b.split("")
    if (c[1] == ",") {
        let d = b.slice(2,-2)
       console.log(d);
    }else if(c[0] < c[2]){
        let e = b.slice(1,-1)
        console.log(e);
    }else if (c == "" || c == "0") {
        console.log(null);
    }else{
        let k = c.join("")
        console.log(k);
    }
    
}

return a
}
console.log(array());

alert("1 vazifa tugadi")

const arrayThecond = []

let user = prompt("2 - Komandani kiriting va u SPACE bln ishlaydi || katta sonlarni aniqlaydi")

// while (isNaN(user)) {
//     user = prompt("2 - komandani kiriting")
// }

let a = user.split(" ")

a.sort((a,b)=>b-a)
let b = a.slice(0,2)
console.log(b);
