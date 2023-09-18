// useRef : setter가 없으며, 자체가 객체이며, 해당 데이터는 current라는 속상에 의해서 활용하며, 자체적으로 렌더링이 되지 않음
// useState : field, settter가 병립되며, 하나의 값만 저장되고 전달됨. 자체적으로 렌더링 기능이 내포되어 있음
import React, {useRef, useState} from 'react'

const Test03 = () => {
    const korScore = useRef(0);
    const [engScore, setEngScore] = useState(0);
    const onUseRef = (e) => {
        korScore.current += 10;
        console.log("국어 : " + korScore.current);
    }
    const onUseState = (e) => {
        setEngScore(engScore + 10);
        console.log("영어 : " + engScore);
    }
    return (
        <div className='App'>
            <button onClick={onUseRef}>useRef</button>
            <button onClick={onUseState}>useState</button>
            <hr />
            <h2>{`국어 : ${korScore.current}`}</h2>
            <hr />
            <h2>{`영어 : ${engScore}`}</h2>
        </div>
    )
}

export default Test03