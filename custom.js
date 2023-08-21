let dayOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let input = document.querySelector(".date");
let button = document.querySelector(".btn");

button.onclick = function () {
  let inputDate = new Date(input.value);
  let today = new Date();
  let years, months, days;

  let one = {
    day: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let two = {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  };

  checkMonth(two.year);

  if (
    one.year > two.year ||
    (one.year == two.year && one.month > two.month) ||
    (one.year == two.year && one.month == two.month && one.day > two.day)
  ) {
    alert("Not Born Yet");
    display("-", "-", "-");
    return;
  }

  years = two.year - one.year;

  if (two.month >= one.month) {
    months = two.month - one.month;
  } else {
    years--;
    months = 12 + two.month - one.month;
  }

  if (two.day >= one.day) {
    days = two.day - one.day;
  } else {
    months--;
    let dd = dayOfMonths[two.month - 2];
    days = dd + two.day - one.day;
    if (months < 0) {
      months = 11;
      years--;
    }
  }

  display(years, months, days);
};

function display(year, month, day) {
  document.getElementById("years").textContent = year;
  document.getElementById("months").textContent = month;
  document.getElementById("days").textContent = day;
}

function checkMonth(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    dayOfMonths[1] = 29;
  } else {
    dayOfMonths[1] = 28;
  }
}
