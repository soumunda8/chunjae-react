// 이벤트(Event) : 사용자가 특정 요소를 건드리는 사건
// 이벤트의 종류 : Mouse, Keyboard, Form, Touch, File, Image, Video, ...
// React는 해당 개체(특정 요소)의 성격에 따라 무수히 많은 이벤트를 지원
// 이벤트 참고 : https://facebook.github.io/react/docs/events.html

import React, {Component} from 'react'

class Test01 extends Component {
    state = {message : ''} 
    render() {
        return (
            <div className='App'>
                <h1>이벤트</h1>
                <input type='text' name='message' value= {this.state.message} placeholder='메세지 입력' onChange={(e) => {
                    //console.log(e.target.value);
                    this.setState({message : e.target.value});
                }} />
                <button onClick={() => {this.setState({message : ''})}}>지우기</button>
                <button onClick={() => {if(this.state.message === "ㅇㅇㅇ") {
                    alert("맞음");
                }else {
                    alert("틀림");
                }}}>확인</button>
            </div>
        )
    }
}

export default Test01