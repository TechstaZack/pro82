canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouse_event = "";
var last_posx, last_posy;
var colour = "blue";
var width = 1;
var radius = 2;

canvas.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
    colour = document.getElementById("colour").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouse_event = "mouse_down";

}

canvas.addEventListener("mouseup", mouseUp);

function mouseUp(e) {
    mouse_event = "mouse_up";
}



canvas.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
    curr_posx = e.clientX - canvas.offsetLeft;
    curr_posy = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouse_down") {
        console.log("current pos of X and Y = ");
        console.log("x = " + curr_posx + "y = " +curr_posy);

        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(curr_posx, curr_posy, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_posx = curr_posx;
    last_posy = curr_posy;
}

canvas.addEventListener("mouseleave", mouseLeave);

function mouseLeave(e) {
    mouse_event = "mouse_leave";
}

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}