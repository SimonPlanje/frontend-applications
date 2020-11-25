
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
        <div>
            <form className='filterFrom'>
                <input onChange={showAll} name='radio' type="radio" /><label>Alle parkeerplaatsen </label>
                <input onChange={showInvalid} name='radio' type="radio"/><label>Invaliden parkeerplaatsen </label>
                <input onChange={showCharge} name='radio' type="radio"/><label>Oplaad parkeerplaatsen </label>
            </form>
        </div>
    )
}

export default Filter