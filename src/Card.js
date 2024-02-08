import React from 'react';

function Card({card, getNextCard, loadNewCards}) {
	const [flipped, setFlipped] = React.useState(false);
	
	const handleClick = function() {
		if (!flipped) {
			setFlipped(true);
		} else {
			setFlipped(false);
			getNextCard();
		}
	}
	
    return (
		<>
		  <div className="content" onClick={handleClick}>
			<div className="card-front">
				<h2>{card.front}</h2>
			</div>
			<div className="card-back">
				{flipped ? (	
				  <h2 >{card.back}</h2>
				) : (
				  null
				)}
			</div>
			</div>
			<div className="footer" onClick={handleClick}>
				{flipped ? (
				  <div className="button-div">Next</div>
				) : (
				  <div className="button-div">Flip</div>
				)}
			</div>
		</>
	);
}

export default Card;
