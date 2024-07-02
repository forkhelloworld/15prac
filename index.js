for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}

logIn();

function logIn() {
  const correctPassword = "qwerty";
  let password;

  do {
    password = prompt("Enter password");
    if (password === correctPassword) {
      return console.log("Ви успішно увійшли в систему");
    }
  } while (true);
  {
  }
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

for (let i = 10; i <= 50; i += 5) {
  console.log(i);
}

let size = Number(prompt("Enter the size of the triangle: "));

for (let i = 1; i <= size; i++) {
  console.log("*".repeat(i));
}

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || j === size - 1 - i) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}