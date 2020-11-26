
function Filter({garages, setFilterData}){

function showAll(){
    setFilterData(garages)
}

function showInvalid(){
    const invalidGarage = garages.filter(d => d.id == 'disabled' || d.id == 'both')
    setFilterData(invalidGarage)
}

function showCharge(){
    const showCharge = garages.filter(d => d.id == 'charging' || d.id == 'both')
    setFilterData(showCharge)
}
    return(
        <div className='filter'>
            <div className='staticLegenda'>
                    <ul>
                        <li>Startpunten wandelingen</li>
                        <li>Parkeerplaatsen</li>

                    </ul>
            </div>
            <form className='filterForm'>
                <label><input onChange={showAll} name='radio' type="radio" />Alle parkeerplaatsen </label>
                <label><input onChange={showInvalid} name='radio' type="radio"/>Invaliden parkeerplaatsen </label>
                <label><input onChange={showCharge} name='radio' type="radio"/>Oplaad parkeerplaatsen </label>
            </form>
        </div>
    )
}

export default Filter