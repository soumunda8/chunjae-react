// 구조 분할(분리)
const Test06 = (props) => {
    const {nm, age, addr} = props;      // 객체 구조 분할
    //const [nm, age, addr] = props;    // 배열 구조 분할
    return (
        <div className="App">
            <h2>저의 이름은 {nm} 입니다.</h2>
            <h2>나이는 {age} 세 입니다.</h2>
            <h2>사는 곳은 {addr} 입니다.</h2>
            <hr/>
        </div>
    )
}

export default Test06;