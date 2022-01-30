import React, { useEffect, useState } from 'react'
import { StyleGlobal } from './styles/styleGlobal'
import ClimeTodayAndSearch from './components/ClimeTodayAndSearch'
import ClimeWeeklyHightlights from './components/ClimeWeeklyHightlights'
import { fetchClime } from './utils/fetchClime'
const App = () => {
	const [clime, setClime] = useState([])
	const [country, setCountry] = useState('')
	const [search, setSearch] = useState(false)
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
				country={country}
				clime={clime[0]}
				search={search}
				setSearch={setSearch}
			/>
			<ClimeWeeklyHightlights />
		</>
	)
}

export default App
