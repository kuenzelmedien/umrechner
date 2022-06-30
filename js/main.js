// Kategorien und zugehörige Einheiten anlegen
var categories = {};
categories["Gewichte"] = ["Kilogramm (kg)", "Gramm (g)", "Milligramm (mg)", "Tonnen (t)", "Megatonnen (mt)"];
categories["Längen"] = ["Meter (m)", "Kilometer (km)", "Zentimeter (cm)", "Millimeter (mm)"];
categories["Temperaturen"] = ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°Rank)", "Réaumure (°R)"];
categories["Zeiten"] = ["Tage", "Stunden", "Minuten", "Sekunden", "Millisekunden"];

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
}

// Einheiten beim Wechseln der Kategorie ändern
function units() {
    var categorySelector = document.getElementById("category-selector");
    var category = categorySelector.options[categorySelector.selectedIndex].text;
    var sourceUnitSelector = document.getElementById("source-unit");
    var goalUnitSelector = document.getElementById("goal-unit");
    sourceUnitSelector.innerHTML = "";
    goalUnitSelector.innerHTML = "";
    categories[category].forEach((cat) => {
        var el = document.createElement("option").cloneNode(true);
        el.textContent = cat;
        el.value = cat;
        sourceUnitSelector.appendChild(el);
        goalUnitSelector.appendChild(el.cloneNode(true));
    });
}

// Werte von Quelleingabe zu Zieleingabe kopieren.
var sourceValueInput = document.getElementById("source-value");
var goalValueInput = document.getElementById("goal-value");

sourceValueInput.onkeyup = function () {
    var sourceUnitSelector = document.getElementById("source-unit");
    var sourceUnit = sourceUnitSelector.options[sourceUnitSelector.selectedIndex].text;
    var goalUnitSelector = document.getElementById("goal-unit");
    var goalUnit = goalUnitSelector.options[goalUnitSelector.selectedIndex].text;
    var sourceValue = sourceValueInput.value;
    sourceValue.replace(",", ".");
    if (sourceUnit == goalUnit) {
        goalValueInput.value = sourceValue;
    }
    if (sourceUnit == "Kilogramm (kg)" && goalUnit == "Gramm (g)") {
        goalValueInput.value = parseInt(sourceValue * 1000);
    }
};
