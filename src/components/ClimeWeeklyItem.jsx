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
						src={`../weather-api-Dani7uG/${clime.weather_state_name.replaceAll(
							' ',
							''
						)}.png`}
						alt=""
					/>
					<ContainMaxMinTemp>
						<p>
							{celsius
								? `${Math.ceil(clime.max_temp)}°C`
								: `${Math.ceil(clime.max_temp * 1.8 + 32)}°F`}
						</p>
						<b>
							{celsius
								? `${Math.ceil(clime.min_temp)}°C`
								: `${Math.ceil(clime.min_temp * 1.8 + 32)}°F`}
						</b>
					</ContainMaxMinTemp>
				</ContainDataClime>
			))}
		</ContainClimes>
	)
}

export default ClimeWeeklyItem
