import {json} from 'd3'

const fetchData = (setGeoMap, setGarages, setRoutes, setFilterData, filterData) =>{
    const mapData = 'https://www.webuildinternet.com/articles/2015-07-19-geojson-data-of-the-netherlands/townships.geojson'
    const RDWData = 'https://raw.githubusercontent.com/SimonPlanje/frontend-data/main/onlineData/longLatDisabled.json'
    const routeData = 'https://raw.githubusercontent.com/SimonPlanje/frontend-data/main/geoData_0.json'

    json(mapData).then(data => {
        setGeoMap(data)
    })
    json(RDWData).then(data => {
        setGarages(data)
        setFilterData(data)

    })
    json(routeData).then(data => {
        setRoutes(data)
    })

}

export default fetchData