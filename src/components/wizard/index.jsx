import React, { useState, useRef } from 'react';

const Wizard = ({ city = 'swansea' }) => {
	return (
		<div>
			<label>Today's weather in:</label>
			<select id="cities" name="cities">
				<option value={city}>{city}</option>
			</select>
		</div>
	);
};

export default Wizard;
