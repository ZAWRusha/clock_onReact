import React from 'react'
import './Clockbox.css'

const ClockBox = () => (
	<div className="clock-box" id="clock1">

		<div className="clock-face">
			<div className="arrow-hour"></div>
			<div className="arrow-min"></div>
			<div className="arrow-sec"></div>
		</div>

		<div className="digital-box">
			<div className="clock-digital"></div>
		</div>

		<form method="post" name="formTown">
			<select className="current-town" name="selectTown">
				<option value="0">Местное время</option>
				<option value="10">Владивосток</option>
				<option value="2">Калининград</option>
				<option value="7">Красноярск</option>
				<option value="3">Москва</option>
			</select>
		</form>
	</div>

	// <div className="clock-box" id="clock2">

	// 	<div className="clock-face">
	// 		<div className="arrow-hour"></div>
	// 		<div className="arrow-min"></div>
	// 		<div className="arrow-sec"></div>
	// 	</div>

	// 	<div className="digital-box">
	// 		<div className="clock-digital"></div>
	// 	</div>

	// 	<form method="post" name="formTown">
	// 		<select className="current-town" name="selectTown">
	// 			<option value="" selected>Местное время</option>
	// 			<option value="10">Владивосток</option>
	// 			<option value="2">Калининград</option>
	// 			<option value="7">Красноярск</option>
	// 			<option value="3">Москва</option>
	// 		</select>
	// 	</form>
	// </div>

)

export default ClockBox