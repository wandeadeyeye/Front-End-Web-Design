import React from "react";
import profile1 from './image/img1.jpg';

const SingleComment = () => {
    return(
        <div className='ui comment'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={profile1} alt="Profile Picture" width={60}/>
                </a>
                <div className='content'>
                    <a href="/" className='authur'>
                        John
                    </a>
                    <div className='metadata'>
                        <span className='data'>
                            Today at 6:45PM
                        </span>
                    </div>
                    <div className='text'>
                        its amazing
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComment;