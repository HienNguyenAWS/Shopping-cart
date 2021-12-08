import React from 'react';

const CardBg = ({ shoeImg }) => {

	return (
		<div className="cardBg">
			<img src={shoeImg} alt="Shoe" />
		</div>
	)
}

export default CardBg;