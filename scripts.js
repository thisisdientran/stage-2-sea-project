/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

function fetchData(){
  return fetch('./data.json')
  .then(response => response.json())
  // .then(data =>{
  //   console.log("Display fetch data: " + data);
  // })
  // // For testing
  .catch(error => {
    console.log("Fetch got error: ", error);
    return [];
  });
}

function filterStyles(data, filters) {
  try {
    return data.filter(item => {
      return Object.keys(filters).every(key => {
        return filters[key] === "" || item[key] === filters[key];
      });
    });
  } catch (error) {
    console.error("Filter error:", error);
    return [];
  }
}

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  fetchData().then(data => {
    for (const item of data) {
      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, item.id, item.occasion); // Edit title and image
      cardContainer.appendChild(nextCard); // Add new card to the container
    }
  });
}

function editCardContent(card, newId, newOccasion) {
  card.style.display = "block";

  const nextCard = card.querySelector(".id");
  nextCard.textContent = newId;

  const cardOccasion = card.querySelector(".occasion");
  cardOccasion.textContent = newOccasion;

  console.log("new card:", newId, " ", newOccasion, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

function filterCategory(category){
  for(let i = 1; i<=10;i++){

  }
}

function sortCategory(){
  
}