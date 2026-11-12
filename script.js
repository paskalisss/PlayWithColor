const heading = document.getElementById("heading1");
const btn = document.getElementById("btn1");
const slidecontainer = document.getElementById("colorSlider");

heading.style.fontSize = "50px";
heading.style.textAlign = "center";

function updateBkgroundColor() {
    document.body.style.backgroundColor = `hsl(${slidecontainer.value}, 100%, 50%)`;
}

slidecontainer.addEventListener("input", updateBkgroundColor);

btn.addEventListener("click", function() { 
    slidecontainer.value = Math.floor(Math.random() * 361);
    updateBkgroundColor();
});

updateBkgroundColor();