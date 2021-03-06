import React, { useEffect, useState } from 'react'
import { StyleGlobal } from './styles/styleGlobal'
import ClimeTodayAndSearch from './components/ClimeTodayAndSearch'
import ClimeWeeklyHightlights from './components/ClimeWeeklyHightlights'
import { fetchClime } from './utils/fetchClime'
const App = () => {
	const [clime, setClime] = useState([])
	const [country, setCountry] = useState('')
	const [search, setSearch] = useState(false)
	const [celsius,setCelsius] = useState(true)
	const getClime = async (woeid, lat, log) => {
		if (!woeid && lat && log)
			woeid = (
				await fetchClime(
					`https://www.metaweather.com/api/location/search?lattlong=${lat},${log}`
				)
			)[0]['woeid']
		const json = await fetchClime(
			`https://www.metaweather.com/api/location/${woeid || 44418}`
		)
		setCountry(json.title)
		setClime(json.consolidated_weather)
	}

	useEffect(() => {
		if ('geolocation' in navigator) {
			return navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords
				getClime(null, latitude, longitude)
			})
		}
		getClime()
	}, [])

	return (
		<>
			<StyleGlobal />
			<ClimeTodayAndSearch
				getClime={getClime}
				country={country}
				clime={clime[0]}
				search={search}
				setSearch={setSearch}
				celsius={celsius}
			/>
			<ClimeWeeklyHightlights 
				climes={clime} 
				celsius={celsius}
				setCelsius={setCelsius}
			/>
		</>
	)
}

export default App
