import React from 'react'
import './Test02.scss'

const Test02 = () => {
    let arr = Array.from({length:1000}, () => 0)
    return (
        <div>
            {
                arr.map((el, i) => (
                    <div key={i} className='snow'></div>
                ))
            }
        </div>
    )
}

export default Test02