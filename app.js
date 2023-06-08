let main = document.getElementById("main")
let text = document.getElementById("text")


function
colors() {

    let color_hex = Math.round(Math.random() * 10000)
    let color = Math.round(Math.random() * 20000)
    let hex = "#" + color
    let hex_text = "#" + color_hex
    text.style.color = hex
    main.style.background = hex_text
    console.log(hex);
    console.log(hex_text);

}

colors()

setInterval(() => {
    colors()

}, 1000)