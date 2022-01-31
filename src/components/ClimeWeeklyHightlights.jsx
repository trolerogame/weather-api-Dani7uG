import React from 'react'
import ClimeWeeklyItem from './ClimeWeeklyItem'
import HightlightsItem from './HightlightsItem.jsx'
import {
	ContainClimesHighlight,
} from '../styles/styleClimesHightlights'

const ClimeWeeklyHightlights = ({ climes }) => {
	return (
		<ContainClimesHighlight>
			<div className='flex justify-center'>
				<ClimeWeeklyItem climes={climes} />
			</div>
			<h3>Today's Hightlights</h3>
			<HightlightsItem {...climes[0]}/>
		</ContainClimesHighlight>
	)
}

export default ClimeWeeklyHightlights
