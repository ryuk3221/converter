const obj = {
  "q": "й",
  "w": "ц",
  "e": "у",
  "r": "к",
  "t": "е",
  "y": "н",
  "u": "г",
  "i": "ш",
  "o": "щ",
  "p": "з",
  "[": "х",
  "{": "х",
  "]": "ъ",
  "}": "ъ",
  "a": "ф",
  "s": "ы",
  "d": "в",
  "f": "а",
  "g": "п",
  "h": "р",
  "j": "о",
  "k": "л",
  "l": "д",
  ";": "ж",
  ":": "ж",
  "'": "э",
  "\"": "э",
  "z": "я",
  "x": "ч",
  "c": "с",
  "v": "м",
  "b": "и",
  "n": "т",
  "m": "ь",
  ",": "б",
  "<": "б",
  ".": "ю",
  ">": "ю",
}


const  myBtn = document.querySelector('button');

const convert = () => {
  let value = document.querySelector('input').value;
  value = value.toLocaleLowerCase();
  let result = "";
  for (let i of value) {
    if (obj[i]) {
      result += obj[i];
    }
    else {
      result += i;
    }
  }
  document.querySelector("h2").innerHTML = result;
}

myBtn.onclick = convert;
