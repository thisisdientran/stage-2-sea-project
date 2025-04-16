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
let itemData = [];
let filter = [];

function fetchData(){
  return fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    itemData = data;
    console.log("Fetched Data:", itemData);
    return data;
  })
  .catch(error => {
    console.log("Fetch got error: ", error);
    return [];
  });
}

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
// function showCards() {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";
//   const templateCard = document.querySelector(".card");

//   for (let i = 0; i < itemData.length; i++) {
//     const nextCard = templateCard.cloneNode(true); // Copy the template card
//     const item = itemData[i];
//     editCardContent(nextCard, item.image, item.id, item.occasion, item.vibe, item.season); // Edit title and image
//     cardContainer.appendChild(nextCard); // Add new card to the container
//   }
// }

function showCards(filter) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < filter.length; i++) {
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    const item = filter[i];
    editCardContent(nextCard, item.image, item.id, item.occasion, item.vibe, item.season); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newImage, newId, newOccasion, newVibe, newSeason) {
  card.style.display = "block";
  
  const cardImage = card.querySelector("img");
  cardImage.src = newImage;

  const cardID = card.querySelector(".id");
  cardID.textContent = newId;

  const cardOccasion = card.querySelector(".occasion");
  cardOccasion.textContent = newOccasion;

  const cardVibe = card.querySelector(".vibe");
  cardVibe.textContent = newVibe;

  const cardSeason = card.querySelector(".season");
  cardSeason.textContent = newSeason;

  console.log("new card:", newId, " ", newOccasion, " ", newVibe, " ", newSeason, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
fetchData().then(() => {
  filterCategory();
});

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  // const cardContainer = document.getElementById("card-container");

  if(itemData.length > 0){
    itemData.pop();
  }
  showCards(itemData); // Call showCards again to refresh
}

function filterCategory(){
  if (filter.length == 0) {
    showCards(itemData); 
  }

  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      const filterCategory = button.getAttribute("data-category");
      const filterValue = button.getAttribute("data-value");

      filter = [];

      for (let i = 0; i < itemData.length; i++) {
        const item = itemData[i];
        if (item[filterCategory] === filterValue) {
          filter.push(item);
        }
      }
      showCards(filter);
    });
  });
}