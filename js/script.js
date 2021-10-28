{
  const form = document.querySelector(".js-form");

  const changeUnit = () => {
    const paragraphWeightElement = document.querySelector(".js-weightSpan");
    const paragraphHeightElement = document.querySelector(".js-heightSpan");

    const units = {
      metric: { weight: "KG", height: "CM" },
      imperial: { weight: "LBS", height: "IN" },
    };

    form.addEventListener("input", (event) => {
      const checked = form.querySelector("[name=units]:checked");
      paragraphWeightElement.innerText = units[checked.value].weight;
      paragraphHeightElement.innerText = units[checked.value].height;
    });
  };

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
    const tableContainer = document.getElementById("js-container");
    tableContainer.classList.remove("tableContainer");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateBMI();
    displayTable();
  };

  const init = () => {
    form.addEventListener("submit", onFormSubmit);
    changeUnit();
  };

  init();
}
