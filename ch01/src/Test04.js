import { Component} from "react";
import Test01 from "./Test01";
import Test02 from "./Test02";
import Test03 from "./Test03";

class Test04 extends Component {
    render() {
        return (
            <div className="App">
                <Test01 />
                <Test02 />
                <Test03 />
            </div>
        );
    }
}

export default Test04;