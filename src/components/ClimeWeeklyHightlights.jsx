import React from 'react'
import ClimeWeeklyItem from './ClimeWeeklyItem'
import HightlightsItem from './HightlightsItem.jsx'
import {
	ContainClimesHighlight,
	Text,
	ContainButtonsDeg,
	ButtonDeg
} from '../styles/styleClimesHightlights'

const ClimeWeeklyHightlights = ({ climes,setCelsius,celsius }) => {
	return (
		<ContainClimesHighlight>
			<div id='container'>
				<ContainButtonsDeg>
					<ButtonDeg deg={celsius === true} onClick={() => setCelsius(true)}>°C</ButtonDeg>
					<ButtonDeg deg={celsius === false} onClick={() => setCelsius(false)}>°F</ButtonDeg>
				</ContainButtonsDeg>
				<div className='flex justify-center'>	
					<ClimeWeeklyItem climes={climes} celsius={celsius} />
				</div>
				<h3>Today's Hightlights</h3>
				<HightlightsItem {...climes[0]}/>
				<Text style={{marginTop:40,marginBottom:10}}>created by <b>Dani7uG</b> - devChallenges.io</Text>
			</div>
		</ContainClimesHighlight>
	)
}

export default ClimeWeeklyHightlights
