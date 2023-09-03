const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const passwordLength = 15;
const generatePasswordBtn = document.getElementById("gen-password-btn");
const password1Box = document.getElementById("password1");
const password2Box = document.getElementById("password2");
let password1Status;
let password2Status;

function generatePassword() {
  let newPassword = "";
  for (let i = 0; i <= passwordLength; i++) {
    newPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  return newPassword;
}

generatePasswordBtn.addEventListener("click", () => {
  if (!password1Box.textContent) {
    password1Box.textContent = generatePassword();
    password1Status = "new";
  } else if (!password2Box.textContent) {
    password2Box.textContent = generatePassword();
    password1Status = "old";
    password2Status = "new";
  } else if (password1Status === "old" && password2Status === "new") {
    password1Box.textContent = generatePassword();
    password1Status = "new";
    password2Status = "old";
  } else if (password1Status === "new" && password2Status === "old") {
    password2Box.textContent = generatePassword();
    password2Status = "new";
    password1Status = "old";
  }
});
