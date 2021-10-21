import React from "react";
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector((state) => state.userReducer.user);
    return (
        <div>
            <div id="gradient" />
            <div id="card">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43604/profile/profile-512_1.jpg" />
                <h2>{user.name}</h2>

                <p>{user.phone}</p>
                <span className="left bottom">{user.phone}</span>
                <span className="right bottom">{user.email}</span>
            </div>
        </div>
    );
}

export default Profile;
