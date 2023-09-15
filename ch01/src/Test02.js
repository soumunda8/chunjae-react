// 표현식과 내부 스타일링, 인라인 스타일링, 조건 연산자, if 문을 활용하여 컨포넌트 만들기
const Test02 = () => {
    const name = "몬스타엑스";
    const title = undefined;
    const style = {
        backgroundColor : "blue",
        color : "white",
        fontSize : "32px",
        fontWeight : "bold",
        padding : 10
    }
    return (
        <div className="App">
            <h2 style={{fontSize:"60px",color:"skyblue"}}>{name}</h2>
            <h3 style={{fontSize:"2.5rem",color:"skyblue"}}>{name === "손현우" ? "오빠" : "사랑해"}</h3>
            <h3 style={{fontSize:"2.5rem",color:"skyblue"}}>{title || "군백기..ㅎ"}</h3>
            <p style={style}>보고싶다</p>
        </div>
    )
}

export default Test02;