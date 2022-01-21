

let r = document.getElementsByName("shapeselector")
let g = document.getElementsByName("numselector")
let sizing = ["Small", "Normal", "Large", "Extra Large"]
let bgelem = ["Black", "WithoutNum", "Round"]

let toshowsecond = false

let obj = {
    colorBG: "Black", 
    shape: "Square",
    nums: true,
    color: {
        hour: "#ffffff",
        minute: "#e9c4c4",
        second: "#bafff9"
    },
    size: {
        hour: ["20%", "30%"],
        minute: ["30%", "20%"],
        second: ["25%", "25%"]
    },
    extra: {
        second: "block",
        title: "New Clock"
    }
}

function updateBG(color, num, shape) {
    bgelem[0] = color
    bgelem[1] = num
    bgelem[2] = shape
    clockpre.style.backgroundImage = `url(/Assets/Clock_${bgelem[1]}_${bgelem[0]}_${bgelem[2]}.png)`

    obj.colorBG = color
    obj.shape = shape
    obj.nums = num

}

window.onload = () => {
    updateBG("Black", "WithNum", "Square")
    document.title = "Clock - " + titlee.value
}

setInterval(() => {
    let htime = new Date().getHours();
    let mtime = new Date().getMinutes();
    let stime = new Date().getSeconds();
    let hrt = 30 * htime + mtime / 2;
    let mrt = 6 * mtime;
    let srt = 6 * stime;
    document.getElementById("seconds").style.transform = `rotate(${srt}deg)`;
    document.getElementById("hours").style.transform = `rotate(${hrt}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${mrt}deg)`;
}, 1000);


// Input for Shape Selector 

for (let index = 0; index < r.length; index++) {
    const element = r[index];

    element.addEventListener("input", function () {
        let val = element.getAttribute("data-clock-shapeselector")
        updateBG(bgelem[0], bgelem[1], val)
    })
}

// Input for Color Selector

let sel = document.querySelector("#colorselector")

sel.addEventListener("input", function () {
    let val = colorselector.value
    updateBG(val, bgelem[1], bgelem[2])
})

// Input For Num Selector

for (let index = 0; index < g.length; index++) {
    const element = g[index];
    element.addEventListener("input", function () {
        let val = element.getAttribute("data-clock-numselector")
        updateBG(bgelem[0], val, bgelem[2])
    })
}

colorforhour.addEventListener("input", function () {
    hours.style.backgroundColor = colorforhour.value
    obj.color.hour = colorforhour.value
})
colorforminute.addEventListener("input", function () {
    minutes.style.backgroundColor = colorforminute.value
    obj.color.minute = colorforminute.value
})
colorforsecond.addEventListener("input", function () {
    seconds.style.backgroundColor = colorforsecond.value
    obj.color.second = colorforsecond.value
})

sizeforhour.addEventListener("input", function () {
    if (sizeforhour.value == "1") {
        hours.style.height = "10%"
        hours.style.top = "40%"
        p1.innerHTML = `${sizing[0]}`

        obj.size.hour = ["10%", "40%"]
    } else if (sizeforhour.value == "2") {
        hours.style.height = "20%"
        hours.style.top = "30%"
        p1.innerHTML = `${sizing[1]}`

        obj.size.hour = ["20%", "30%"]
    } else if (sizeforhour.value == "3") {
        hours.style.height = "30%"
        hours.style.top = "20%"
        p1.innerHTML = `${sizing[2]}`

        obj.size.hour = ["30%", "20%"]
    } else if (sizeforhour.value == "4") {
        hours.style.height = "40%"
        hours.style.top = "10%"
        p1.innerHTML = `${sizing[3]}`

        obj.size.hour = ["40%", "10%"]
    }
})
sizeforminute.addEventListener("input", function () {
    if (sizeforminute.value == "1") {
        minutes.style.height = "20%"
        minutes.style.top = "30%"
        p2.innerHTML = `${sizing[0]}`

        obj.size.minute = ["20%", "30%"]
    } else if (sizeforminute.value == "2") {
        minutes.style.height = "30%"
        minutes.style.top = "20%"
        p2.innerHTML = `${sizing[1]}`

        obj.size.minute = ["30%", "20%"]
    } else if (sizeforminute.value == "3") {
        minutes.style.height = "40%"
        minutes.style.top = "10%"
        p2.innerHTML = `${sizing[2]}`

        obj.size.minute = ["40%", "10%"]
    } else if (sizeforminute.value == "4") {
        minutes.style.height = "50%"
        minutes.style.top = "0%"
        p2.innerHTML = `${sizing[3]}`

        obj.size.minute = ["50%", "00%"]
    }
})

sizeforsecond.addEventListener("input", function () {
    if (sizeforsecond.value == "1") {
        seconds.style.height = "15%"
        seconds.style.top = "35%"
        p3.innerHTML = `${sizing[0]}`

        obj.size.second = ["15%", "35%"]
    } else if (sizeforsecond.value == "2") {
        seconds.style.height = "25%"
        seconds.style.top = "25%"
        p3.innerHTML = `${sizing[1]}`

        obj.size.second = ["25%", "25%"]
    } else if (sizeforsecond.value == "3") {
        seconds.style.height = "35%"
        seconds.style.top = "15%"
        p3.innerHTML = `${sizing[2]}`

        obj.size.second = ["35%", "15%"]
    } else if (sizeforsecond.value == "4") {
        seconds.style.height = "45%"
        seconds.style.top = "5%"
        p3.innerHTML = `${sizing[3]}`

        obj.size.second = ["45%", "5%"]
    }
})

function fun1() {
    colorforhour.value = "#ffffff"
    hours.style.backgroundColor = colorforhour.value
    obj.color.hour = "#ffffff"
}
function fun2() {
    colorforminute.value = "#e9c4c4"
    minutes.style.backgroundColor = colorforminute.value
    obj.color.minute = "#e9c4c4"
}
function fun3() {
    colorforsecond.value = "#bafff9"
    seconds.style.backgroundColor = colorforsecond.value
    obj.color.second = "#bafff9"
}

function fun4() {
    hours.style.height = "20%"
    hours.style.top = "30%"
    p1.innerHTML = `${sizing[1]}`
    sizeforhour.value = 2

    obj.size.hour = ["20%", "30%"]

}
function fun5() {
    minutes.style.height = "30%"
    minutes.style.top = "20%"
    p2.innerHTML = `${sizing[1]}`
    sizeforminute.value = 2

    obj.size.minute = ["30%", "20%"]
}
function fun6() {
    seconds.style.height = "25%"
    seconds.style.top = "25%"
    p3.innerHTML = `${sizing[1]}`
    sizeforsecond.value = 2

    obj.size.second = ["25%", "25%"]
}

titlee.addEventListener("input", function(){
    document.title = "Clock - " + titlee.value
    obj.extra.title = titlee.value
})

secondshow.addEventListener("input", function(){
    if(toshowsecond){
        seconds.style.display = "block"
        obj.extra.second = "block"
        toshowsecond = false
    }else{
        seconds.style.display = "none"
        obj.extra.second = "none"
        toshowsecond = true
    }
})

function newWindow(){

    let html = `
    <html>
        <head>
            <title>${obj.extra.title}</title>


            <style>
            /*
                Note: This CSS is Generated By Coder Clock Genrator
            */
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            div.clockpreview{
                position: relative;
                justify-self: center;
                width: 100vh;
                height: 100vh;
                background-image: url(/Assets/Clock_${obj.nums}_${obj.colorBG}_${obj.shape}.png);
                background-size: cover;
                align-self: center;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            div.clockpreview div.hours{
                position: absolute;
                height: ${obj.size.hour[0]};
                width: 1%;
                background-color: ${obj.color.hour};
                top: ${obj.size.hour[1]};
                transform-origin: bottom;
            }
            div.minutes{
                position: absolute;
                height: ${obj.size.minute[0]};
                width: 1%;
                background-color: ${obj.color.minute};
                top:${obj.size.minute[1]};
                transform-origin: bottom;
            }
            div.clockpreview div.seconds{
                position: absolute;
                height: ${obj.size.second[0]};
                width: 0.5%;
                background-color: ${obj.color.second};
                top: ${obj.size.second[1]};
                transform-origin: bottom;
                display: ${obj.extra.second};
            }
            </style>
        </head>
        <body>
        
        <!-- Note this HTML is genrated by Coder Clock Genrator -->


            <div class="clockpreview" id="clockpre">
                <div class="hours" id="hours"></div>
                <div class="minutes" id="minutes"></div>
                <div class="seconds" id="seconds"></div>
            </div>
        </body>
        <script>
            // Note this script is genrated by Coder Clock Genrator
            setInterval(() => {
                let htime = new Date().getHours();
                let mtime = new Date().getMinutes();
                let stime = new Date().getSeconds();
                let hrt = 30 * htime + mtime / 2;
                let mrt = 6 * mtime;
                let srt = 6 * stime;
                document.getElementById("seconds").style.transform = 'rotate('+srt+'deg)';
                document.getElementById("hours").style.transform = 'rotate('+hrt+'deg)';
                document.getElementById("minutes").style.transform = 'rotate('+mrt+'deg)';
            }, 1000);
        </script>
    </html>
    `

    let win = open("", "CoderClock", "width=500, height=500")
    win.document.write(html)
}

