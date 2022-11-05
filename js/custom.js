let type = document.querySelector(".type");
let text = type.innerHTML;
let textArr;
let count = 0;
let runOneTime = true;
type.innerHTML = "";

window.addEventListener("scroll", () => {
  let viewPort = type.getBoundingClientRect();
  if (isInViewPort() && runOneTime) {
    runOneTime = false;
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
    }

    setInterval(() => {
      typeJs();
    }, type.dataset.time);
  }

  function isInViewPort() {
    return (
      viewPort.top >= 0 &&
      viewPort.left >= 0 &&
      viewPort.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      viewPort.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
