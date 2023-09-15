// 클래스형의 state(상태정보)
import { Component } from "react"

class Test08 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        };
    }
    render() {
        const {number} = this.state;
        return (
            <div className="App">
                <h2>{number}</h2>
                <button onClick={() => this.setState({number:number+1})}>증가</button>
                <hr />
            </div>
        )
    }
}

export default Test08