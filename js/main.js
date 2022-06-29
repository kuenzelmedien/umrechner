// Kategorien und zugehörige Einheiten anlegen

var categories = {};
categories["Gewichte"] = [
  "Kilogramm (kg)",
  "Gramm (g)",
  "Milligramm (mg)",
  "Tonnen (t)",
  "Megatonnen (mt)",
];
categories["Längen"] = [
  "Meter (m)",
  "Kilometer (km)",
  "Zentimeter (cm)",
  "Millimeter (mm)",
];
categories["Temperaturen"] = [
  "Celsius (°C)",
  "Fahrenheit (°F)",
  "Kelvin (K)",
  "Rankine (°Rank)",
  "Réaumure (°R)",
];

// Dropdown für Kategorieauswahl befüllen
function addCategories() {
  var categorySelector = document.getElementById("category-selector");
  Object.keys(categories).forEach((cat) => {
    var el = document.createElement("option");
    el.textContent = cat;
    el.value = cat;
    categorySelector.appendChild(el);
  });
}

// Überschrift beim Wechseln der Kategorie ändern
function changeCategory() {
  var categorySelector = document.getElementById("category-selector");
  var category = categorySelector.options[categorySelector.selectedIndex].text;
  var categoryHeading = document.getElementById("category-heading");
  categoryHeading.innerHTML = category;
  return category;
}

// Quell Einheiten beim Wechseln der Kategorie ändern
function sourceUnits() {
  var categorySelector = document.getElementById("category-selector");
  var category = categorySelector.options[categorySelector.selectedIndex].text;
  var sourceUnit = document.getElementById("source-unit");
  sourceUnit.innerHTML = "";
  categories[category].forEach((cat) => {
    var el = document.createElement("option");
    el.textContent = cat;
    el.value = cat;
    sourceUnit.appendChild(el);
  });
}

// Ziel Einheiten beim Wechseln der Kategorie ändern
function goalUnits() {
  var categorySelector = document.getElementById("category-selector");
  var category = categorySelector.options[categorySelector.selectedIndex].text;
  var sourceUnit = document.getElementById("goal-unit");
  sourceUnit.innerHTML = "";
  categories[category].forEach((cat) => {
    var el = document.createElement("option");
    el.textContent = cat;
    el.value = cat;
    sourceUnit.appendChild(el);
  });
}
