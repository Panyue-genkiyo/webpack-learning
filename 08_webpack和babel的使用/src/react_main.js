import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const ReactMain = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={() => setCount(c => c + 1)}>click to plus one</button>
        </div>
    );
};

ReactDOM.render(<ReactMain/>,document.querySelector("#app"));



export default ReactMain;