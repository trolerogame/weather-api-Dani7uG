import React from 'react'
import {
	ContainClimes,
	Text,
	ContainDataClimeToday,
	InfoClimeToday,
	ContainCompass,
	ContainHumidity,
	HumidityPercentage,
	Humidity,
} from '../styles/styleClimesHightlights'
const HightlightsItem = ({
	wind_degree,
	wind_mph,
	humidity,
	vis_miles,
	pressure_mb,
}) => {
	return (
		<ContainClimes center>
			<ContainDataClimeToday>
				<Text>Wind status</Text>
				<InfoClimeToday>
					{Math.ceil(wind_mph)} <p>mph</p>
				</InfoClimeToday>
				<ContainCompass deg={Math.ceil(wind_degree)}>
					<div>
						<img src="../weather-api-Dani7uG/location-arrow-solid.svg" alt="" />
					</div>
					<Text>{wind_degree}°</Text>
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
					{Math.ceil(vis_miles)} <p>miles</p>
				</InfoClimeToday>
			</ContainDataClimeToday>
			<ContainDataClimeToday>
				<Text>Air Pressure</Text>
				<InfoClimeToday>
					{Math.ceil(pressure_mb)} <p>mb</p>
				</InfoClimeToday>
			</ContainDataClimeToday>
		</ContainClimes>
	)
}

export default HightlightsItem
