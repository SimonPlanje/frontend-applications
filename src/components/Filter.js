
function Filter({garages}){
    
function showAll(){
    return garages.map(d => d.id )
}

function showInvalid(){
    const invalidGarage = garages.map(d => d.id == 'disabled' || d.id == 'both')
    console.log(invalidGarage)
}

function showCharge(){
    // consgarages.map(d => d.id == 'charging' || d.id == 'both')

}
    return(
        <div>
            <form className='filterFrom'>
                <input onChange={showAll} name='radio' type="radio"/><label>Alle parkeerplaatsen </label>
                <input onChange={showInvalid} name='radio' type="radio"/><label>Invaliden parkeerplaatsen </label>
                <input onChange={showCharge} name='radio' type="radio"/><label>Oplaad parkeerplaatsen </label>
            </form>
        </div>
    )
}

export default Filter