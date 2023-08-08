import React from "react";

const UserCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">Jane Hopp</div>
                <div className="description">
                    {props.children}
                </div>
            </div>
            <div className="ui botton bottton">
                <i className="add icon"></i>
                Add Friend
            </div>
        </div>
    )
}

export default UserCard;
