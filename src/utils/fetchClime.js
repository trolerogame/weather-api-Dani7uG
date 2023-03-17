export const fetchClime = async (operation,q,confg = '') => {
    const data = 
        await fetch(`http://api.weatherapi.com/v1/${operation}.json?key=aa607b2c5d7b467185a144234231703&q=${q}${confg}`)
    return await data.json()
}