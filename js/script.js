// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servcie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-04-JS/sw.js", {
    scope: "/ICS2O-Unit3-04-JS/",
  })
}

/**
 * This function converts fahrenheit to celsius.
 */
function convert() {
  //input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  //process
  const celsius = (fahrenheit - 32) * (5.0 / 9.0)

  //output
  document.getElementById("celsius").innerHTML = `Celsius: ${celsius.toFixed(2)} °C`
}