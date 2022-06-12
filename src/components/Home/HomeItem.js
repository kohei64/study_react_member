import React from 'react'

const HomeItem = ({user}) => {
    return(
        <div className=''>
            <h2>こんにちは,{user.name}</h2>
        </div>        
    )
}

export default HomeItem
