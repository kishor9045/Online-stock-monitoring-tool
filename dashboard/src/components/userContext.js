import { useState } from "react";
import {createContext} from "react";

export const userContext = createContext({
    setUserDetails: {id: "", username: "", email: ""},
    setAccessToken: "",
    AccessToken: "",
    userDetails: "",
});

const UserContextProvider = (props) => {
    const [userDetails, setUserDetails] = useState({id: "", username: "", email: ""});
    const [AccessToken, setAccessToken] = useState("");

    return (
        <userContext.Provider value={{userDetails: userDetails, setUserDetails: setUserDetails, AccessToken: AccessToken, setAccessToken: setAccessToken}}>{props.children}</userContext.Provider>
    );
}

export {UserContextProvider};