import React from "react";
import profile1 from './image/img1.jpg';
import profile2 from './image/img2.jpg';
import profile3 from './image/img3.jpg';

const SingleComment = (props) => {
    return(
        <div className='ui comment'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={props.picture} alt="Profile" />
                </a>
                <div className='content'>
                    <a href="/" className='authur'>
                        {props.name}
                    </a>
                    <div className='metadata'>
                        <span className='data'>
                            {props.date}
                        </span>
                    </div>
                    <div className='text'>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComment;
