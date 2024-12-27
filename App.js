const textbox = document.getElementById("textbox");
const faren = document.getElementById("tofarenhite");
const cel = document.getElementById("toCalcius");
const res = document.getElementById("result");
let temp;
function convert() {
  if (faren.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    res.textContent = temp.toFixed(1) + " F";
  } else if (cel.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    res.textContent = temp.toFixed(1) + " C";
  } else {
    res.textContent = "Please Select Any Buttons ";
  }
}
