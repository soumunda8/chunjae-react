// useReducer : 현재 상태변수(state) 객체와 행동 (action) 객체를 인자로 받아, 새로운 상태를 반환하는 훅(hook)
// useState 보다 더 복잡하고, 다양한 변수나 객체를 관리할 수 있도록 하는 훅
import React, {useReducer} from 'react'

const Test07 = ({step=1, min=0, max=10}) => {
    const initState = { count:0 };                      // useReducer를 위한 초기화
    const reducer = (state, action) => {
        switch(action.type){
            case "COUNTUP" :
                return state.count < action.max ? {count : state.count + action.step} : state;
            case "COUNTDOWN" :
                return state.count > action.min ? {count : state.count - action.step} : state;
            case "RANDOM" :
                return {
                    count : Math.floor(Math.random() * (action.max - action.min)) + action.min,
                    // Math.floor(Math.random() * 10) + 5;  // 예시
                    // Math.floor(Math.random() * (최댓값 - 최소값)) + 최소값 => Math.rendom()이 실수임 / Math.floor()은 올림, Math.Round()은 반올림
                };
            case "RESET" :
                return initState;
            default : throw new Error("action.type 에러 : " + action.type);
        }
    }
    const [state, dispatch] = useReducer(reducer, initState);   // initState : 초기값 / state, dispatch는 reducer 안으로
    return (
        <>
            <p>단계 : {step}, 최대 : {max}, 최소 : {min}</p>
            <h2>현재값 : {state.count}</h2>
            <hr />
            <button onClick={() => dispatch({type:"COUNTUP", step, max})}>증가</button>
            <button onClick={() => dispatch({type:"COUNTDOWN", step, min})}>감소</button>
            <button onClick={() => dispatch({type:"RANDOM", max, min})}>랜덤</button>
            <button onClick={() => dispatch({type:"RESET"})}>초기화</button>
        </>
    )
}

export default Test07