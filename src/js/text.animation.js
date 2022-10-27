function updateTextEl(el, data) {
  $(el).text(data);
}

function typing(elText, animationTextList, speed) {
  let text = $(elText).text();
  let idx = 0;
  let numOfList = animationTextList.length;
  let offset = 0;
  let sText = [...text];
  let len = sText.length;

  let handle = setInterval(function () {
    if (offset >= numOfList) {
      offset = 0;
    }

    len = [...animationTextList[offset]].length;

    if (idx > len) {
      idx = 0;
      offset++;
    } else {
      let data = animationTextList[offset].slice(0, idx + 1);
      updateTextEl(elText, data);
      idx++;
    }
  }, speed);

  return handle;
}

function textAnimationProcess(elText, animationText) {}
