import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// useState를 이용한 객체의 배열 추가/제거
const Test02 = () => {
    const [names, setNames] = useState([
        {id : 1, text : '손현우'},
        {id : 2, text : '이민혁'},
        {id : 3, text : '유기현'},
        {id : 4, text : '채형원'},
        {id : 5, text : '이주헌'},
        {id : 6, text : '임창균'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const onRemove = (id) => {  // 사용하는 곳보다 위에 선언!
        const nexNames = names.filter(data => data.id !== id);
        setNames(nexNames);
    }
    const onChange = (e) => { setInputText(e.target.value); }
    const onClick = (e) => {            // 하나의 객체 생성
        const nexNames = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId + 1);          // 아이디를 하나 증가
        setNames(nexNames);             // 객체를 배열에 추가
        setInputText('');
    }
    const nameList = names.map((data) => (<ListGroup.Item key={data.id} onDoubleClick={() => onRemove(data.id)}>{data.id} : {data.text}</ListGroup.Item>));
    return (
        <div className='App'>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ListGroup>{nameList}</ListGroup>
        </div>
    )
}

export default Test02