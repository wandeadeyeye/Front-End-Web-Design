import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/img1.jpg';
import SingleComment from './SingleComment';

const App = () => {
    return(
        <div className='ui comment'>
            <SingleComment/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)