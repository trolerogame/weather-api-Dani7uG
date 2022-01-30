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
const ClimeToday = ({
	country,
	setSearch,
	applicable_date,
	the_temp,
	weather_state_name,
}) => {
	const today = new Date(applicable_date || new Date().toString())
		.toString()
		.split(' ')
		.slice(0, 3)
		.join(' ')
		.replace(' ', ', ')
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
					src={`../${
						weather_state_name
							? weather_state_name.replaceAll(' ', '')
							: ''
					}.png`}
					alt=""
				/>
			</ContainImgClime>
			<ContainDegrees>
				<p>{Math.ceil(the_temp || 0)}</p>
				<b>°C</b>
			</ContainDegrees>
			<WeatherState>Shower</WeatherState>
			<Time>
				Today <span>•</span> {today}
			</Time>
			<Country>
				<img src="../map-marker-alt-solid.svg" alt="" /> {country}
			</Country>
		</>
	)
}
export default ClimeToday
