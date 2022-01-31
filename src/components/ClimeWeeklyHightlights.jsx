import React from 'react'
import ClimeWeeklyItem from './ClimeWeeklyItem'
import HightlightsItem from './HightlightsItem.jsx'
import {
	ContainClimesHighlight,
	Text
} from '../styles/styleClimesHightlights'

const ClimeWeeklyHightlights = ({ climes }) => {
	return (
		<ContainClimesHighlight>
			<div className='flex justify-center'>
				<ClimeWeeklyItem climes={climes} />
			</div>
			<h3>Today's Hightlights</h3>
			<HightlightsItem {...climes[0]}/>
			<Text style={{marginTop:40,marginBottom:10}}>created by <b>Dani7uG</b> - devChallenges.io</Text>
		</ContainClimesHighlight>
	)
}

export default ClimeWeeklyHightlights
