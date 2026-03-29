import {userContext} from "./userContext.js";
import { useContext } from "react";

const Profile = () => {
    const {userDetails} = useContext(userContext);
    return (
        <div style={{margin: "1rem 2.5rem"}}>
            <h2 style={{fontSize: "2rem", fontWeight: 500, marginTop: 0}}><u>Profile Details: </u></h2>
            <p style={{marginBottom: "35px"}}><b>Username: </b> {userDetails.username}</p>
            <p><b>Email: </b> {userDetails.email}</p>
        </div>
    )
};

export default Profile;