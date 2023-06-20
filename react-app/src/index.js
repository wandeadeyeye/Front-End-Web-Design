import React from 'react';
import ReactDOM from 'react-dom/client';
import profile1 from './image/img1.jpg';
import profile2 from './image/img2.jpg';
import profile3 from './image/img3.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comment'>
            <UserCard>
                <SingleComment 
                    name='Jane'
                    date='Today at 4:00PM'
                    text='It is amazing'
                    picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Chad'
                    date='Today at 5:00PM'
                    text='thanks for the update'
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Sarah'
                    date='Today at 6:00PM'
                    text='nice work bro'
                    picture={profile3}
                />
            </UserCard>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);