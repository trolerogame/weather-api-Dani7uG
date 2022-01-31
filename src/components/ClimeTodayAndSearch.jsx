import React from 'react'
import { ContainClimeSearch } from '../styles/styleClimeSearch'
import ClimeToday from './ClimeToday'
import SearchCountry from './SearchCountry'
const ClimeTodayAndSearch = ({ getClime,country, clime, search, setSearch }) => {
	return (
		<ContainClimeSearch>
			{search ? (
				<SearchCountry getClime={getClime} setSearch={setSearch}/>
			) : (
				<ClimeToday
					setSearch={setSearch}
					country={country}
					{...clime}
				/>
			)}
		</ContainClimeSearch>
	)
}

export default ClimeTodayAndSearch
