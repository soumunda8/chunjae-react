import React, {useState} from 'react'

const Test02 = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const {username, message} = form;   // 폼 객체 분리
    // 이벤트 기술
    const onChange = (e) => {
        setTimeout(() => console.log(e), 500);
        const nextForm = {              // 폼 객체
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {            // onClick 이벤트 기술
        alert("이름 : " + username + ", 메세지 : " + message);
        setForm({
            username : '',
            message : ''
        });
    };
    const onKeyPress = (e) => {        // Enter Key 입력시 onClick 이벤트 발생 -> 이벤트 트리거
        if(e.key === 'Enter') {
            onClick();
        }
    };
  return (
    <div className='App'>
        <h1>복수의 컨트롤 이벤트</h1>
        <input type='text' name='username' placeholder='이름 입력' value={username} onChange={onChange} />
        <input type='text' name='message' placeholder='메세지 입력' value={message} onChange={onChange} onKeyPress={onKeyPress} />
        <button onClick={onClick}>전송</button>
    </div>
  )
}

export default Test02