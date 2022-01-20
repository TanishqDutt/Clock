let r = document.getElementsByName("shapeselector")
let sizing = ["Small", "Normal", "Large", "Extra Large"]
// important for clock running 👇👇👇👇

setInterval(() => {
    let htime = new Date().getHours();
    let mtime = new Date().getMinutes();
    let stime = new Date().getSeconds();
    let hrt = 30*htime + mtime/2;
    let mrt = 6*mtime;
    let srt = 6*stime;
    document.getElementById("seconds").style.transform = `rotate(${srt}deg)`;
    document.getElementById("hours").style.transform = `rotate(${hrt}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${mrt}deg)`;
}, 1000);


// Input for Shape Selector 👇👇👇👇

for (let index = 0; index < r.length; index++) {
    const element = r[index];
    
    element.addEventListener("input", function(){
        let val = element.getAttribute("data-clock-shapeselector")
    })
}

// Input for Color Selector 👇👇👇👇

let sel = document.querySelector("#colorselector")

sel.addEventListener("input", function(){
    let val = colorselector

})

colorforhour.addEventListener("input", function(){
    hours.style.backgroundColor = colorforhour.value
})
colorforminute.addEventListener("input", function(){
    minutes.style.backgroundColor = colorforminute.value
})
colorforsecond.addEventListener("input", function(){
    seconds.style.backgroundColor = colorforsecond.value
})

sizeforhour.addEventListener("input", function(){
    if(sizeforhour.value=="1"){
        hours.style.height = "10%"
        hours.style.top = "40%"
        p1.innerHTML = `${sizing[0]}`
    }else if(sizeforhour.value=="2"){
        hours.style.height = "20%"
        hours.style.top = "30%"
        p1.innerHTML = `${sizing[1]}`
    }else if(sizeforhour.value=="3"){
        hours.style.height = "30%"
        hours.style.top = "20%"
        p1.innerHTML = `${sizing[2]}`
    }else if(sizeforhour.value=="4"){
        hours.style.height = "40%"
        hours.style.top = "10%"
        p1.innerHTML = `${sizing[3]}`
    }
})

function fun1(){
    colorforhour.value = "#ffffff"
    hours.style.backgroundColor = colorforhour.value
}
function fun2(){
    colorforminute.value = "#e9c4c4"
    minutes.style.backgroundColor = colorforminute.value
}
function fun3(){
    colorforsecond.value = "#bafff9"
    seconds.style.backgroundColor = colorforsecond.value
}