import React from 'react'
import { Companies } from '../constant/company.catagory'
function FilterTile() {
    return (
        <select value={"test"} className='px-3 py-1 md:px-5 rounded-lg border-2 border-gray-400 '>
            {Object.keys(Companies).forEach(key => (<option value={Companies[key]} selected >{key}</option>))}


        </select>
    )
}

export default FilterTile