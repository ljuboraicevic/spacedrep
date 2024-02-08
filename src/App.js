import React from 'react';

import './App.css';
import Card from './Card.js';
import Uploader from './Uploader.js';

function App() {

  const repReminder = 50;

  const [cards, setCards] = React.useState([{"front": "Upload a file", "back": "At the top of the page", }]);
  
  const [randomCard, setRandomCard] = React.useState(cards[0]);
  
  const [repCount, setRepCount] = React.useState(0);
  
  const getNextCard = function() {
	  
	  setRepCount(repCount + 1);
	  if (repCount % repReminder === 0 && repCount > 0) {
		  alert(`You've done ${repCount} repetitions!`);
	  }
	  
	  if (cards.length === 0) {
		  alert("You've reached the end of the deck!");
		  return;
	  }
	  
	  // currently we simply pick a random card
	  const randomIndex = Math.floor(Math.random() * (cards.length));
	  setRandomCard(cards[randomIndex]);
	  // remove the chosen card from the deck
	  const filteredCards = cards.filter(card => card.front !== randomCard.front);
	  setCards(filteredCards);
  }
  	
  return (
    <div className="app">
		<div className="header">
			<Uploader loadNewCards={setCards} />
			<span>Rep count: {repCount}</span>
		</div>
		<Card
			card={randomCard}
			getNextCard={getNextCard}
		/>
    </div>
  );
}

export default App;
