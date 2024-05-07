import React from 'react'


function FilterTile({value}) {
    return (
        <select value={"test"} className='px-3 py-1 md:px-5 rounded-lg border-2 border-gray-400 '>
            {Object.entries(value).forEach(([key, value]) => (<option value={value[key]} selected >{key}</option>))}


        </select>
    )
}

export default FilterTile