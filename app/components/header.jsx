import React from 'react'
import FilterTile from './filtertile'
function Header() {
    return (
        <div className='fixed top-0 rounded-b-lg shadow-md w-full px-10 py-2 bg-slate-100 '>
            <div className='flex flex-row  '>
                <FilterTile />
            </div>

        </div>
    )
}

export default Header