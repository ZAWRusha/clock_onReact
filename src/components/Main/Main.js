import React from 'react'
import ClockBox from './Clockbox/Clockbox'
import './main.css'

const Main = () => (
	<div className="main">
		<div className="container">
			<ClockBox />
			<ClockBox />
		</div>
	</div>
)

export default Main