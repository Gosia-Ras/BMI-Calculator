{
  const form = document.querySelector(".form");

  function measureBMI() {
    let unit = document.getElementById("bmi-metric").checked,
      weight = document.getElementById("bmi-weight"),
      weightUnit = document.getElementById("bmi-weight-unit"),
      height = document.getElementById("bmi-height"),
      heightUnit = document.getElementById("bmi-height-unit");

    if (unit) {
      weightUnit.innerHTML = "KG";
      weight.min = 1;
      heightUnit.innerHTML = "CM";
      height.min = 54;
    } else {
      weightUnit.innerHTML = "LBS";
      weight.min = 2;
      heightUnit.innerHTML = "IN";
      height.min = 21;
    }
  }

  const calculateBMI = () => {
    let bmi = null,
      unit = document.getElementById("bmi-metric").checked,
      weight = parseInt(document.getElementById("bmi-weight").value),
      height = parseInt(document.getElementById("bmi-height").value),
      results = document.getElementById("bmi-results");

    if (unit) {
      height = height / 100;
      bmi = weight / (height * height);
    } else {
      bmi = 703 * (weight / (height * height));
    }
    bmi = Math.round(bmi * 100) / 100;

    if (bmi < 18.5) {
      results.innerHTML = bmi + " - Underweight";
      results.classList.add("form__result--crimson");
    } else if (bmi < 25) {
      results.innerHTML = bmi + " - Normal weight";
      results.classList.add("form__result--teal");
    } else if (bmi < 30) {
      results.innerHTML = bmi + " - Pre-obesity";
      results.classList.add("form__result--crimson");
    } else if (bmi < 35) {
      results.innerHTML = bmi + " - Obesity class I";
      results.classList.add("form__result--crimson");
    } else if (bmi < 40) {
      results.innerHTML = bmi + " - Obesity class II";
      results.classList.add("form__result--crimson");
    } else {
      results.innerHTML = bmi + " - Obesity class III";
      results.classList.add("form__result--crimson");
    }
    return false;
  };

  const displayTable = () => {
    document.getElementById("js-container").style.display = "block";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateBMI();
    displayTable();
  };

  const init = () => {
    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
