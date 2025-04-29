// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

function checkNumber() {
  let userNumber = parseInt(document.getElementById("user-number").value)
  let week = document.getElementById("week").value
  let message = ""

  if (
    week === "Tuesday" ||
    week === "Thursday" ||
    (userNumber > 12 && userNumber < 21)
  ) {
    message = "You're eligible for student pricing!"
  } else {
    message = "You must pay regular price."
  }

  // Set the message in the HTML
  document.getElementById("message").innerText = message
}

