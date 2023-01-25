const btn = document.getElementById("btn");
const btnSocket = document.getElementById("btnSocket");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify({
            "school": "ENS",
        }),
        headers: {
        "Content-Type": "application/json;charset=utf-8"
        }
    }).then(d => {
        return d.json()
    }).then(dd => {
        console.log(dd);
    })
});

const socket = io("http://localhost:3000");

btnSocket.addEventListener("click", () => {
    socket.emit("message", 
    {
        msg: "Hi 👋"
    })
});

// document.addEventListener("mousemove", (e) => {
//     console.log({x: e.pageX, y: e.pageY});
//     socket.emit("mouse", {x: e.pageX, y:e.pageY})
// })

socket.on("data", (data) => {
    console.log(socket.id); 
    const li = document.createElement('li');
    li.innerText = data.msg;
    ul.append(li);
})

// const m = document.createElement('span');
// m.style.backgroundColor = "red";
// m.style.width = "20px";
// m.style.height = "20px";
// m.style.display = "inline-block";
// m.style.position = "absolute";

// const body = document.querySelector("body");
// body.appendChild(m);

// socket.on("mouseM", (e) => {
//     console.log(e);
//     m.style.right = e.x;
//     m.style.bottom = e.y;
// });


