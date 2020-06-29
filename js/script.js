let outfits = [{
    outfitId: 1,
    imgSrc: 'images/1.jpg',
    rank: 0,
    rejectedCounter: 0,
    items: [0,1,2,3,4,5],
    tags: ['sport', ' classic']
  },
  {
    outfitId: 2,
    imgSrc: 'images/2.jpg',
    rank: 0,
    rejectedCounter: 0,
    items: [1,2,3],
    tags: ['sport', ' classic']
  },
  {
    outfitId: 3,
    imgSrc: 'images/3.jpg',
    rank: 0,
    rejectedCounter: 0,
    items: [1,2,4,5],
    tags: ['sport', ' classic']
  },
  {
    outfitId: 4,
    imgSrc: 'images/4.jpg',
    rank: 0,
    rejectedCounter: 0,
    items: [2],
    tags: ['sport', ' classic']
  },
  {
    outfitId: 5,
    imgSrc: 'images/5.jpg',
    rank: 0,
    rejectedCounter: 0,
    items: [1,2,3],
    tags: ['sport', ' classic']
  },
  {
    outfitId: 6,
    imgSrc: 'images/6.jpg',
    rank: 0,
    rejectedCounter: 0,
    items: [2],
    tags: ['sport', ' classic']
  },
  {
    outfitId: 7,
    imgSrc: 'images/5.jpg',
    rank: 0,
    rejectedCounter: 0,
    items: [1,2,3],
    tags: ['sport', ' classic']
  }
];

let links = [
  {
    id: 0,
    name: 'silk blouse',
    src: 'https://www.asos.com/search/?q=white+sneakers' 
  },
  {
    id: 1,
    name: 'beige trousers',
    src: 'https://www.asos.com/search/?q=white+sneakers'
  },
  {
    id: 2,
    name: 'belt',
    src: 'https://www.asos.com/search/?q=white+sneakers'
  },
   {
    id: 3,
    name: 'loafers',
    src: 'https://www.asos.com/search/?q=white+sneakers'
  },
  {
    id: 4,
    name: 'sunglasses',
    src: 'https://www.asos.com/search/?q=white+sneakers' 
  },
  {
    id: 5,
    name: 'tote bag',
    src: 'https://www.asos.com/search/?q=white+sneakers'
  }
];

let liked = [];
let likedUniq=[];
let leftOutfit = 0;
let rightOutfit = 1; 
let steps = 1;
let totalResult = 0;
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', displayContent);
let leftClickCounter = 0;
let rightClickCounter = 0;
let x=0;
let n=0;

function displayContent() {
  if (steps <= 5) {
    displayQuiz();
  } else {
      displayResult();
    }
};

function displayQuiz () {
  const main = document.getElementById('main');
  quizDiv = document.createElement("div");
  quizDiv.setAttribute("class", "quiz");
  
  main.innerHTML = `
    <h1 class="headers">Select outfit you’re preferring</h1>
    <div class="quiz">
    <div id="leftPic" class="picWrapper">
      <a>
        <img src=${outfits[leftOutfit].imgSrc} class="image">
      </a>
      <div class="middle">
        <div class="text">❤️</div>
      </div>
    </div>
    <div id="spliter" class="splitter"></div>
    <div id="rightPic" class="picWrapper">
      <a>
       <img src=${outfits[rightOutfit].imgSrc} class="image">
      </a>
        <div class="middle">
          <div class="text">❤️</div>
        </div>
    </div> 
    </div>
    <div class="headers"><h1>${steps}/20(only 5 in test)</h1></div>
    <footer>
  <p>ReDi 2020 </p>
  </footer>
  `;
  voteRight = document.getElementById("rightPic");
  voteRight.addEventListener('click', voteCounterRight);
  voteLeft = document.getElementById("leftPic");
  voteLeft.addEventListener('click', voteCounterLeft);
};

function displayResult() {
  removeDuplicates();
  leftOutfit = 0;
  rightOutfit = 1;
  steps = 0; 
  table = document.getElementById('resultTable');
  table.innerHTML = `<h1>Here is the most liked outfits:</h1>
  `;
  main.innerHTML = `
  `; 
  for (let x = 0; x < likedUniq.length; x++) {
    outfitCard = document.createElement("div");
    outfitCard.setAttribute("class", "resultBlock");
    outfitCard.innerHTML = `
      <img src=${likedUniq[x].imgSrc}>    
    `;
    table.appendChild(outfitCard);
    linksBlock = document.createElement("div");
    outfitCard.appendChild(linksBlock);
    linksBlock.setAttribute("class", "desc");
      for (n = 0; n< likedUniq[x].items.length; n++) {
        linksList = document.createElement("h3");
        console.log(x,n);
        linksList.innerHTML = `
        <a href ="https://www.asos.com/search/?q=${links[likedUniq[x].items[n]].name}" target="_blank">
        ${links[likedUniq[x].items[n]].name}
        `;
        linksBlock.appendChild(linksList);
      }
  } 
};

function voteCounterLeft() {
  rightClickCounter = 0;
  liked.push(outfits[leftOutfit]);
  if (leftOutfit == 0 && rightOutfit == 1) {
    rightOutfit = leftOutfit + 2;
  } else if (leftClickCounter == 0) {
      rightOutfit = leftOutfit + 1;
  } else  {
      rightOutfit++;
      } 
  steps++;
  leftClickCounter++;
  totalResult = leftOutfit;
  outfits[leftOutfit].rank++;
  displayContent();
};

function voteCounterRight() {
  leftClickCounter = 0;
  liked.push(outfits[rightOutfit]);
  if (leftOutfit == 0 && rightOutfit == 1) {
    leftOutfit = rightOutfit + 1;
  } else if (rightClickCounter == 0) {
    leftOutfit = rightOutfit + 1;
  } else {
    leftOutfit++;
  }
  steps++;
  rightClickCounter++;
  totalResult = rightOutfit;
  outfits[rightOutfit].rank++;
  displayContent();
};

function removeDuplicates() {
  for (let i = 0; i < liked.length; i++) {
    if (liked[i]!=liked[i+1]) {
      likedUniq.push(liked[i]);
    }
  }
  return likedUniq;
};


