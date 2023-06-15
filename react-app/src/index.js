import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonAction = 'Click Me!';
    return(
        <div>
            <label for="name" className="label">enter e-mail</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'red', color:'white'}}>
                {buttonAction}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)