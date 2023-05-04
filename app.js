const quotes = [
  {
    author: "J.R.R. Tolkien",
    quote: "Fantasy is escapist, and that is its glory. If a soldier is imprisioned by the enemy, don't we consider it his duty to escape?. . .If we value the freedom of mind and soul, if we're partisans of liberty, then it's our plain duty to escape, and to take as many people with us as we can!",
    imgPath: "https://github.com/beebsis/DaBeebs/blob/main/assets/blob.svg?raw=true",
  },
];

function randomQuote() {
  console.log(quotes);

  for (let { author, quote} of quotes) {
    let cardContainer = document.getElementById("wrapper");

    console.log(quote);
    // containers & frames
    const card = `
            <div class="card">
            <div class="card__frame__1"></div>

            <div class="card__frame__2">
              <div>
                  <div class="circle">
                    <div><i class="fa-solid fa-moon"></i></div>
                  </div>
              </div>
            </div>

            <div class="card__frame__3">
              <div class="card__frame__4">
                  <div class="card__frame__5">
                    <div class="cardContainer">

                        <div class="quoteContainer">
                          <div class="position__quote">
                            <p id="quote">${quote}</p>
                          </div>
                        </div>

                        <div class="figures__frame">
                          <div class="Diamond1">
                            <div><img src="./diamond.svg" /></div>
                          </div>
                          <div class="Diamond2">
                            <div><img src="./diamond.svg" /></div>
                          </div>
                          <div class="Diamond3">
                            <div><img src="./diamond.svg" /></div>
                          </div>
                          <div class="Diamond4">
                            <div><img src="./diamond.svg" /></div>
                          </div>
                          <div class="triangle1">
                            <div><img src="./triangle.svg" /></div>
                          </div>
                          <div class="triangle2">
                            <div><img src="./triangle.svg" /></div>
                          </div>
                          <div class="triangle3">
                            <div><img src="./triangle.svg" /></div>
                          </div>
                          <div class="triangle4">
                            <div><img src="./triangle.svg" /></div>
                          </div>
                          <div class="circle1">
                            <div><img src="./circle.svg" /></div>
                          </div>
                          <div class="circle2">
                            <div><img src="./circle.svg" /></div>
                          </div>
                          <div class="circle3">
                            <div><img src="./circle.svg" /></div>
                          </div>
                          <div class="circle4">
                            <div><img src="./circle.svg" /></div>
                          </div>
                        </div>
                        
                        <div class="authorGrouper">
                          <div class="card__frame__6"></div>
                          <div class="card__frame__7"></div>
                          <div class="card__quote__author">
                              <small id="author">${author}</small>
                          </div>
                        </div>

                    </div>
                  </div>
              </div>
            </div>
        </div>
        `
    
    /*
      Used to get imgPath within the card.
      <div class="card__img">
        <img src=${imgPath} />
      </div>
    */

    // Appending
    cardContainer.insertAdjacentHTML('beforeend', card);
  }
}
randomQuote();
