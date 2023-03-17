import React from 'react'
import { ContainClimeSearch } from '../styles/styleClimeSearch'
import ClimeToday from './ClimeToday'
import SearchCountry from './SearchCountry'
const ClimeTodayAndSearch = ({ getClime,country, clime, search, setSearch,celsius }) => {
	return (
		<ContainClimeSearch>
			{search ? (
				<SearchCountry getClime={getClime} setSearch={setSearch}/>
			) : (
				<>{clime.current && <ClimeToday
					setSearch={setSearch}
					country={country}
					celsius={celsius}
					{...clime.current}	
				/>}</>
			)}
		</ContainClimeSearch>
	)
}

export default ClimeTodayAndSearch
