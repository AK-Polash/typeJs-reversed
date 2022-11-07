let type = document.querySelectorAll(".type");
let typeArr = Array.from(type);
let currentIndex;
// let a;

// function myFu(x) {
//   a = typeArr[x].dataset.names.split(", ");
//   console.log(a);
// }

typeArr.map((item, index) => {
  // myFu(index);
  let text = item.innerHTML;
  let textArr;
  let count = 0;
  let runOneTime = true;
  item.innerHTML = "";
  console.log("ami bahire", currentIndex);
  // eikhane "currentIndex" undefined dekhay kano...? "post_share" project e same way te currentIndex ke globaly scope korsilam tokhon kaj korsilo

  window.addEventListener("scroll", () => {
    currentIndex = index;
    console.log("ami vitore", currentIndex);
    let viewPort = typeArr[index].getBoundingClientRect();

    if (isInViewPort() && runOneTime) {
      runOneTime = false;
      function typeJs() {
        if (count < text.length) {
          typeArr[index].innerHTML += text.charAt(count);
          count++;
          textArr = text.split("");
        } else {
          if (textArr.length > 0) {
            textArr.pop();
            let convertedText = textArr.join("");
            typeArr[index].innerHTML = convertedText;
          } else {
            count = 0;
          }
        }
      }

      setInterval(() => {
        typeJs();
      }, typeArr[index].dataset.time);
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
});
