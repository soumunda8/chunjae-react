// 구조 할당(props)의 사용
const Test05 = (props) => {
  return (
    <div className="App">
        <h2>저의 이름은 {props.nm} 입니다.</h2>
        <h2>나이는 {props.age} 세 입니다.</h2>
        <h2>사는 곳은 {props.addr} 입니다.</h2>
        <hr/>
    </div>
  )
}

Test05.defaultProps = {
    nm : '몬스타엑스',
    age : 20,
    addr : '내 마음속'
}

export default Test05