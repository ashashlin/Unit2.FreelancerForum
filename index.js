/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === generate the freelancer object ===

function makeFreelancer() {
  const randomNameIndex = Math.floor(Math.random() * 5);
  const randomOccupationIndex = Math.floor(Math.random() * 5);
  const name = NAMES[randomNameIndex];
  const occupation = OCCUPATIONS[randomOccupationIndex];
  const rate = Math.floor(Math.random() * 181) + 20;

  return {
    name,
    occupation,
    rate,
  };
}

// === freelancers array ===

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

// === get average rate for each freelancer ===

function getAverageRate(array) {
  let total = 0;
  for (const item of array) {
    total += item.rate;
  }
  const averageRate = total / array.length;

  return averageRate;
}

const averageRate = getAverageRate(freelancers);

// === generate html for each freelancer ===

function freelancer(freelancers) {
  const freelancerContainer = document.createElement("div");
  freelancerContainer.classList.add("freelancer");
  freelancerContainer.innerHTML = `
    <span class="name">${freelancers.name}</span>
    <span class="occupation">${freelancers.occupation}</span>
    <span class="rate">${freelancers.rate}</span>
  `;

  return freelancerContainer;
}

// === render h1 and the average rate para ===

const app = document.querySelector("#app");

const h1 = document.createElement("h1");
h1.textContent = "Freelancer Forum";
app.append(h1);
app.append(renderAverageRate());

// === render the entire freelancer table ===

function renderFreelancerTable() {
  const freelancerTable = document.createElement("div");
  freelancerTable.classList.add("freelancer-table");
  freelancerTable.innerHTML = `
    <header class="freelancer-header">
      <span class="name">NAME</span>
      <span class="occupation">OCCUPATION</span>
      <span class="rate">RATE</span>
    </header>

    <div class="freelancers"></div>
  `;

  app.append(freelancerTable);
}

renderFreelancerTable();

// === render the freelancers' details inside the table ===

function renderFreelancerDetails() {
  const freelancersArray = freelancers.map(freelancer);
  const freelancersContainer = document.querySelector(".freelancers");
  freelancersContainer.append(...freelancersArray);
}

renderFreelancerDetails();

// === create the average rate paragraph, rendered above with h1 ===

function renderAverageRate() {
  const para = document.createElement("p");
  para.classList.add("average-rate");
  para.innerText = `The average rate is $${averageRate}.`;

  return para;
}

// note: I rendered as I go so at this point all elements have been rendered on the page
