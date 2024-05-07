import React from 'react'

function Header() {
    return (
        <div className='fixed top-0 rounded-b-lg shadow-md w-full px-10 py-2 bg-slate-100 '>
            <div className='flex flex-row  '>
                <select value={"test"} className='px-3 py-1 md:px-5 rounded-lg border-2 border-gray-400 '>
                    <option value={"test"} selected >test</option>

                </select>
            </div>

        </div>
    )
}

export default Header