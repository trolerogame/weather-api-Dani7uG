import React from 'react'
import ClimeWeeklyItem from './ClimeWeeklyItem'
import {
	ContainClimesHighlight,
	ContainClimes,
	Text,
	ContainDataClimeToday,
	InfoClimeToday,
	ContainCompass,
	ContainHumidity,
	HumidityPercentage,
	Humidity
} from '../styles/styleClimesHightlights'

const ClimeWeeklyHightlights = ({ climes }) => {
	console.log(climes[0])
	const {
		wind_direction_compass,
		wind_direction,
		humidity,
		visibility,
		air_pressure,
	} = climes.length && climes[0]
	return (
		<ContainClimesHighlight>
			<ClimeWeeklyItem climes={climes} />
			<h3>Today's Hightlights</h3>
			<ContainClimes>
				<ContainDataClimeToday>
					<Text>Wind status</Text>
					<InfoClimeToday>
						{Math.ceil(wind_direction)} <p>mph</p>
					</InfoClimeToday>
					<ContainCompass deg={Math.ceil(wind_direction)}>
						<div>
							<img src="../location-arrow-solid.svg" alt="" />
						</div>
						<Text>{wind_direction_compass}</Text>
					</ContainCompass>
				</ContainDataClimeToday>

				<ContainDataClimeToday>
					<Text>Humidity</Text>
					<InfoClimeToday>
						{humidity} <p>%</p>
					</InfoClimeToday>
					<ContainHumidity>
						<HumidityPercentage>
							<span>0</span>
							<span>50</span>
							<span>100</span>
						</HumidityPercentage>
						<Humidity porcentage={humidity} />
					</ContainHumidity>
				</ContainDataClimeToday>
				<ContainDataClimeToday>
					<Text>Visibility</Text>
					<InfoClimeToday>
						{Math.ceil(visibility)} <p>miles</p>
					</InfoClimeToday>
				</ContainDataClimeToday>
				<ContainDataClimeToday>
					<Text>Air Pressure</Text>
					<InfoClimeToday>
						{Math.ceil(air_pressure)} <p>mb</p>
					</InfoClimeToday>
				</ContainDataClimeToday>
			</ContainClimes>
		</ContainClimesHighlight>
	)
}

export default ClimeWeeklyHightlights
