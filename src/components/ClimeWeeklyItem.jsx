import React from 'react'
import {
	ContainClimes,
	ContainDataClime,
	Text,
	ImgClime,
	ContainMaxMinTemp,
} from '../styles/styleClimesHightlights'
import { formatDate } from '../utils/formatDate'
const ClimeWeeklyItem = ({ climes, celsius }) => {
	// console.log(climes)
	return (
		<ContainClimes center>
			{climes && climes.slice(1, 6).map(({date,day}, i) => (
				<ContainDataClime key={i}>
					<Text>
						{i == 0
							? 'Tomorrow'
							: formatDate(date)}
					</Text>
					<ImgClime
						src={day.condition.icon}
						alt=""
					/>
					<ContainMaxMinTemp>
						<p>
							{celsius
								? `${Math.ceil(day.maxtemp_c)}°C`
								: `${Math.ceil(day.maxtemp_f)}°F`}
						</p>
						<b>
							{celsius
								? `${Math.ceil(day.mintemp_c)}°C`
								: `${Math.ceil(day.mintemp_f)}°F`}
						</b>
					</ContainMaxMinTemp>
				</ContainDataClime>
			))}
		</ContainClimes>
	)
}

export default ClimeWeeklyItem
