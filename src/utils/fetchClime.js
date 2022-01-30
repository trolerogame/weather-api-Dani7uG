export const fetchClime = async url => {
    const data = await fetch(url)
    return await data.json()
}