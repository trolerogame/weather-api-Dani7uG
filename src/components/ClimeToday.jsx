import React from 'react'
import {
	ContainButtons,
	ButtonSearch,
	Pointer,
	ContainImgClime,
	ContainDegrees,
	WeatherState,
	Time,
	Country,
} from '../styles/styleClimeSearch'
import { formatDate } from '../utils/formatDate'
const ClimeToday = ({
	country,
	setSearch,
	applicable_date,
	the_temp,
	weather_state_name,
	celsius
}) => {
	const today = formatDate(applicable_date)
	return (
		<>
			<ContainButtons>
				<ButtonSearch onClick={() => setSearch(true)}>
					Search for places
				</ButtonSearch>
				<Pointer>
					<img src="" alt="" />
				</Pointer>
			</ContainButtons>
			<ContainImgClime>
				<img
					src={`../weather-api-Dani7uG/${
						weather_state_name
							? weather_state_name.replaceAll(' ', '')
							: 'Clear'
					}.png`}
					alt=""
				/>
			</ContainImgClime>
			<ContainDegrees>
				<p>{celsius ? Math.ceil(the_temp) : Math.ceil(the_temp * 1.8 + 32)}</p>
				<b>{celsius ? '°C' : '°F'}</b>
			</ContainDegrees>
			<WeatherState>Shower</WeatherState>
			<Time>
				Today <span>•</span> {today}
			</Time>
			<Country>
				<img src="../weather-api-Dani7uG/map-marker-alt-solid.svg" alt="" /> {country}
			</Country>
		</>
	)
}
export default ClimeToday
