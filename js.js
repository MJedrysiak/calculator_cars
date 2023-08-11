
amkup.value = 0;
amnkup.value = 0;
explkup.value = 0;
explnkup.value = 0;
inskup.value = 0;
insnkup.value = 0;
kupFinal.value = 0;
nkupFinal.value = 0;

paliwoNetInput.value = 0;
paliwoVatInput.value = 0;
paliwoGrossInput.value = 0;
naprawyNetInput.value = 0;
naprawyVatInput.value = 0;
naprawyGrossInput.value = 0;
zamienneNetInput.value = 0;
zamienneVatInput.value = 0;
zamienneGrossInput.value = 0;

olejeNetInput.value = 0;
olejeVatInput.value = 0;
olejeGrossInput.value = 0;
parkingNetInput.value = 0;
parkingVatInput.value = 0;
parkingGrossInput.value = 0
autostradaNetInput.value = 0;
autostradaVatInput.value = 0;
autostradaGrossInput.value = 0;

initialValue.addEventListener("input", function () {
  var initial1 = Number(initialValue.value);
  var initial2 = Number(initialValue.value);
});

amortization.addEventListener("input", function () {
  var elecProp1 = Number(amortization.value);
  var elecProp2 = Number(amortization.value);
});

function calculateKupFinal() {
  var explkupValue = parseFloat(explkup.value) || 0;
  var inskupValue = parseFloat(inskup.value) || 0;
  var amkupValue = parseFloat(amkup.value) || 0;

  var kupFinalValue = explkupValue + inskupValue + amkupValue;
  kupFinal.value = kupFinalValue.toFixed(2);
}

function calculatenKupFinal() {
  var explnkupValue = parseFloat(explnkup.value) || 0;
  var insnkupValue = parseFloat(insnkup.value) || 0;
  var amnkupValue = parseFloat(amnkup.value) || 0;

  var nkupFinalValue = explnkupValue + insnkupValue + amnkupValue;
  nkupFinal.value = nkupFinalValue.toFixed(2);
}
buttonAm.addEventListener(
  "click",
  function () {
    if (tirYes.checked === true) {
      amkup.value = Number(amortization.value).toFixed(2);
      amnkup.value = 0;
    }
    if (
      tirYes.checked === false &&
      electricYes.checked === true &&
      Number(initialValue.value) <= 225000
    ) {
      amkup.value = Number(amortization.value).toFixed(2);
      amnkup.value = 0;
    }
    if (
      tirYes.checked === false &&
      electricYes.checked === true &&
      Number(initialValue.value) > 225000
    ) {
      let initial = Number(initialValue.value);
      let amoValue = Number(amortization.value);
      let elecProp = amoValue * (225000 / initial);
      amkup.value = elecProp.toFixed(2);
      let diff = amoValue - elecProp;
      amnkup.value = diff.toFixed(2);
    }
    if (
      tirYes.checked === false &&
      electricYes.checked === false &&
      Number(initialValue.value) <= 150000
    ) {
      amkup.value = Number(amortization.value);
      amnkup.value = 0;
    }
    if (
      tirYes.checked === false &&
      electricYes.checked === false &&
      Number(initialValue.value) > 150000
    ) {
      let initial = Number(initialValue.value);
      let amoValue = Number(amortization.value);
      let elecProp = amoValue * (150000 / initial);
      amkup.value = elecProp.toFixed(2);
      let diff = amoValue - elecProp;
      amnkup.value = diff.toFixed(2);
    }
    calculateKupFinal();
    calculatenKupFinal();
  },
  (once = false)
);

buttonIns.addEventListener(
  "click",
  function () {
    var insuranceTotal =
      parseFloat(ac.value) +
      parseFloat(nnw.value) +
      parseFloat(assistance.value) +
      parseFloat(other.value) +
      parseFloat(oc.value);
    initialValue.addEventListener("input", function () {
      var propIni = parseFloat(initialValue.value);
    });
    var proportion = 150000 / parseFloat(initialValue.value);
    if (proportion < 1) {
      var ubproportion =
        (parseFloat(ac.value) +
          parseFloat(nnw.value) +
          parseFloat(assistance.value) +
          parseFloat(other.value)) *
        proportion;
      var insurancekup = parseFloat(oc.value) + ubproportion;
      inskup.value = insurancekup;
      var insurancenkup = insuranceTotal - parseFloat(inskup.value);
      insnkup.value = insurancenkup;
    } else {
      inskup.value = insuranceTotal;
      insnkup.value = 0;
    }
    calculateKupFinal();
    calculatenKupFinal();
  },
  (once = false)
);


buttonExpl.addEventListener(
  "click",
  function () {
    var totalnetexpl =
      Number(paliwoNetInput.value) +
      Number(naprawyNetInput.value) +
      Number(zamienneNetInput.value) +
      Number(olejeNetInput.value) +
      Number(parkingNetInput.value) +
      Number(autostradaNetInput.value);
    var totalvatexpl =
      Number(paliwoVatInput.value) +
      Number(naprawyVatInput.value) +
      Number(zamienneVatInput.value) +
      Number(olejeVatInput.value) +
      Number(parkingVatInput.value) +
      Number(autostradaVatInput.value);
    var totalgrossexpl =
      Number(paliwoGrossInput.value) +
      Number(naprawyGrossInput.value) +
      Number(zamienneGrossInput.value) +
      Number(olejeGrossInput.value) +
      Number(parkingGrossInput.value) +
      Number(autostradaGrossInput.value);
    if (
      vatYes.checked != true &&
      (tirYes.checked === true || kmNo.checked != false)
    ) {
      explkup.value = totalgrossexpl;
      explnkup.value = 0;
    }
    if (
      (tirYes.checked === true || kmYes.checked === true) &&
      vatYes.checked === true
    ) {
      explnkup.value = 0;
      explkup.value = totalnetexpl + 0.5 * totalvatexpl;
    }
    if (
      (tirYes.checked != true || kmYes.checked != true) &&
      vatYes.checked != true
    ) {
      explnkup.value = 0.25 * totalnetexpl;
      explkup.value = 0.75 * totalnetexpl + totalvatexpl;
    }
    if (
      (tirYes.checked === false || kmYes.checked === false) &&
      vatYes.checked === true
    ) {
      explnkup.value = 0.25 * totalnetexpl + 0.5 * totalvatexpl;
      explkup.value = 0.75 * totalnetexpl + 0.5 * totalvatexpl;
    }
    calculateKupFinal();
    calculatenKupFinal();
  },
  (once = false)
);

buttonAm.addEventListener("mousedown", function() {
  buttonAm.classList.add('buttonClicked')
})

buttonAm.addEventListener("mouseup", function() {
  buttonAm.classList.remove('buttonClicked')
})
buttonExpl.addEventListener("mousedown", function () {
  buttonExpl.classList.add("buttonClicked");
});

buttonExpl.addEventListener("mouseup", function () {
  buttonExpl.classList.remove("buttonClicked");
});

buttonIns.addEventListener("mousedown", function () {
  buttonIns.classList.add("buttonClicked");
});

buttonINs.addEventListener("mouseup", function () {
  buttonIns.classList.remove("buttonClicked");
});

explkup.addEventListener("input", calculateKupFinal);
explnkup.addEventListener("input", calculatenKupFinal);
