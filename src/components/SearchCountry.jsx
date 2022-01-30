import React,{useState,useRef} from 'react'
import { fetchClime } from '../utils/fetchClime'
const SearchCountry = ({getClime}) => {
	const [countries,setCoutries] = useState([])
	const input = useRef(null)
	const getCountries = async () => {
		const json = await fetchClime(`https://www.metaweather.com/api/location/search?query=${input.currentValue.value}`)
		setCoutries(json)
	}
	return <div>
		<form action=""><input type="text" ref={input} /><button onClick={getCountries}>Send</button></form>
		<div>
			{countries.map((country,i) => <button onClick={() => getClime(country.woeid)} key={i}>{country.title}</button>)}
		</div>
	</div>
}

export default SearchCountry
