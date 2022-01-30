import React from 'react'
import { ContainClimeSearch } from '../styles/styleClimeSearch'
import ClimeToday from './ClimeToday'
const ClimeTodayAndSearch = ({ country, clime, search, setSearch }) => {
	return (
		<ContainClimeSearch>
			{search ? (
				<div></div>
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
