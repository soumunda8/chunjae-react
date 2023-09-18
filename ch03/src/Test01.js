import React from 'react'

const Test01 = () => {
    const names = ['손현우', '이민혁', '유기현', '채형원', '이주헌', '임창균']
    const nameList = names.map((data) => <li>{data}</li>);
    return (
        <div className='App'>
            <ul>{nameList}</ul>
        </div>
    )
}

export default Test01