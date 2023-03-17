import React, { useEffect, useState } from 'react'
import { StyleGlobal } from './styles/styleGlobal'
import ClimeTodayAndSearch from './components/ClimeTodayAndSearch'
import ClimeWeeklyHightlights from './components/ClimeWeeklyHightlights'
import { fetchClime } from './utils/fetchClime'
const App = () => {
	const [clime, setClime] = useState({})
	const [country, setCountry] = useState('')
	const [search, setSearch] = useState(false)
	const [celsius,setCelsius] = useState(true)
	const getClime = async (city, lat, log) => {
		const json = await fetchClime(
			'forecast',
			lat && log ? `${lat},${log}` : `/${city || 'Argentina'}`,
			'&days=7&aqi=no&alerts=no'
		)     
		setCountry(json.location.country)
		setClime(json)
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
				clime={clime}
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
