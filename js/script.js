// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

function checkNumber() {
  // Get the age entered by the user
  const age = parseInt(document.getElementById("user-number").value);

  // Validate if the age is a number between 1 and 100
  if (isNaN(age) || age < 1 || age > 100) {
    alert("Please enter a valid age between 1 and 100.");
    return; // Exit the function if age is invalid
  }

  // Get the selected day based on the radio buttons
  let selectedDay = "";

  // Check each radio button for being checked
  if (document.getElementById("monday").checked) {
    selectedDay = "Monday";
  } else if (document.getElementById("tuesday").checked) {
    selectedDay = "Tuesday";
  } else if (document.getElementById("wednesday").checked) {
    selectedDay = "Wednesday";
  } else if (document.getElementById("thursday").checked) {
    selectedDay = "Thursday";
  } else if (document.getElementById("friday").checked) {
    selectedDay = "Friday";
  } else if (document.getElementById("saturday").checked) {
    selectedDay = "Saturday";
  } else if (document.getElementById("sunday").checked) {
    selectedDay = "Sunday";
  }

  // Initialize the discount message
  let discountMessage = "";

  // Determine discount based on age
  if (age < 18 || age > 65) {
    discountMessage = "You are eligible for a free entry discount!";
  } else {
    discountMessage = "You are not eligible for a free entry discount.";
  }

  // Apply special offers based on the selected day
  if (selectedDay === "Wednesday") {
    discountMessage += " Special offer: 20% off on Wednesday!";
  } else if (selectedDay === "Monday") {
    discountMessage += " Special offer: 10% off on Monday!";
  }

  // Display the discount message in the result div
  document.getElementById("result").innerHTML = discountMessage;
}
