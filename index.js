function isleap(year) {
  if (year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return true;
    }
    return false;
  }
}

function myfunction() {
  const date = document.getElementById("date").value;
  const month = document.getElementById("month").value;

  const year = document.getElementById("year").value;

  if (
    (month == "jan" && date <= 31) ||
    (month == "feb" && date <= 28 && !(isleap(year))) ||
    (month == "mar" && date <= 31) ||
    (month == "apr" && date <= 30) ||
    (month == "may" && date <= 31) ||
    (month == "jun" && date <= 30) ||
    (month == "jul" && date <= 31) ||
    (month == "aug" && date <= 31) ||
    (month == "sep" && date <= 30) ||
    (month == "oct" && date <= 31) ||
    (month == "nov" && date <= 30) ||
    (month == "dec" && date <= 31)
  ) {
    console.log(date);
    console.log(month);
    console.log(year);
    const mp = new Map([
      ["jan", 1],
      ["feb", 4],
      ["mar", 4],
      ["apr", 0],
      ["may", 2],
      ["jun", 5],
      ["jul", 0],
      ["aug", 3],
      ["sep", 6],
      ["oct", 1],
      ["nov", 4],
      ["dec", 6],
    ]);

    let year_map = year;
    while (parseInt(year_map) >= 2100) {
      year_map = parseInt(year_map) - 400;
    }
    while (parseInt(year_map) < 1700) {
      year_map = parseInt(year_map) + 400;
    }

    console.log(year_map);

    if (year_map >= 1700 && year_map < 1800) {
      year_map = 4;
    } else if (year_map >= 1800 && year_map < 1900) {
      year_map = 2;
    } else if (year_map >= 1900 && year_map < 2000) {
      year_map = 0;
    } else if (year_map >= 2000 && year_map < 2100) {
      year_map = 6;
    }

    console.log(year_map);
    const days = [
      "saturday",
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
    ];
    const last_digit_of_year = year % 100;
    console.log("last digiti", last_digit_of_year);
    const quaterly = Math.trunc(last_digit_of_year / 4);
    console.log("quaterly", quaterly);
    const add_date = quaterly + parseInt(date);
    console.log("add_date", add_date);

    let add_month = add_date + mp.get(month);
    console.log("add-month", add_month);

    if (isleap(year) && (month == "jan" || month == "feb")) {
      add_month = add_month - 1;
    }

    const add_year = add_month + year_map;
    console.log("addyear", add_year);
    const add_last_digit_of_year = add_year + last_digit_of_year;
    console.log("add_last_digit_of_year", add_last_digit_of_year);
    const week = add_last_digit_of_year % 7;
    console.log("week", week);

    if (week >= 0 && week <= 6) {
      const day = days[week];

      console.log(day);

      document.getElementById("demo").innerHTML = day;
    }
  } else {
    alert("invalid date");
  }
}
