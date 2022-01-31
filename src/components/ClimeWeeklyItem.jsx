import React from 'react'
import {
	ContainClimes,
	ContainDataClime,
	Text,
	ImgClime,
	ContainMaxMinTemp
} from '../styles/styleClimesHightlights'
import { formatDate } from '../utils/formatDate'
const ClimeWeeklyItem = ({climes}) => {
	return (
		<ContainClimes center>
			{climes.slice(1, climes.length).map((clime, i) => (
				<ContainDataClime key={i}>
					<Text>
						{i == 0
							? 'Tomorrow'
							: formatDate(clime.applicable_date)}
					</Text>
					<ImgClime
						src={`../${clime.weather_state_name.replaceAll(
							' ',
							''
						)}.png`}
						alt=""
					/>
					<ContainMaxMinTemp>
						<p>{Math.ceil(clime.max_temp)}°C</p>
						<b>{Math.ceil(clime.min_temp)}°C</b>
					</ContainMaxMinTemp>
				</ContainDataClime>
			))}
		</ContainClimes>
	)
}

export default ClimeWeeklyItem
