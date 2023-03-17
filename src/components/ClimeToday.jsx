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
	temp_c,
	temp_f,
	celsius,
	condition
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
					src={condition.icon}
					alt=""
				/>
			</ContainImgClime>
			<ContainDegrees>
				<p>{Math.ceil(celsius ? temp_c : temp_f)}</p>
				<b>{celsius ? '°C' : '°F'}</b>
			</ContainDegrees>
			<WeatherState>{condition.text}</WeatherState>
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
