let type = document.querySelector(".type");
let text = type.innerHTML;
let textArr = text.split("");
let count = 0;
type.innerHTML = "";

function typeJs() {
  if (count < text.length) {
    type.innerHTML += text.charAt(count);
    count++;
    textArr = text.split("");
  } else {
    if (textArr.length > 0) {
      textArr.pop();
      let convertedText = textArr.join("");
      type.innerHTML = convertedText;
    } else {
      count = 0;
    }
  }
  console.log(count);
}

setInterval(() => {
  typeJs();
}, 300);
