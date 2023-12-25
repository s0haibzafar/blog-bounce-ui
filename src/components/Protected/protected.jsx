import { Navigate } from "react-router-dom";

function Protected({isAtuh , children}){

    if(isAtuh){
        return children;

    }else{
        return <Navigate to="/login"/>
    }

}

export default Protected;