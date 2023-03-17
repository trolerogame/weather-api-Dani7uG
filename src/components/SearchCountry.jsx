import React, { useState, useRef } from 'react'
import { fetchClime } from '../utils/fetchClime'
import { ContainSearch , ContainInputSearch,ContainItemsSearch,Close, } from '../styles/styleClimeSearch'
const SearchCountry = ({ getClime,setSearch }) => {
	const [countries, setCoutries] = useState([])
	const input = useRef(null)

	const getCountries = async (e) => {
		e.preventDefault()
		const json = await fetchClime(
			'search',input.current.value
		)
		setCoutries(json)
	}

	const updateClime = (city) => {
		getClime(city)
		input.current.value = ''
		setCoutries([])
	}

	return (
		<ContainSearch>
			<Close src="../weather-api-Dani7uG/times-solid.svg" alt="times-solid" onClick={() => setSearch(false)}  />
			<ContainInputSearch>
				<input type="text" ref={input} placeholder="search location" />
				<button onClick={getCountries}>Search</button>
			</ContainInputSearch>
			<ContainItemsSearch>
				{countries.map((country, i) => (
					<button onClick={() => updateClime(country.name)} key={i}>
						<p>{country.name}</p> <img src="../weather-api-Dani7uG/angle-right-solid.svg" alt="" />
					</button>
				))}
			</ContainItemsSearch>
		</ContainSearch>
	)
}

export default SearchCountry
