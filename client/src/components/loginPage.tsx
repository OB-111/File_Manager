import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userModel } from "../redux/models/user.model";
import axios from "axios";

const LoginPage: React.FC = () => {
    const [users,setUsers] = useState<userModel[]>([]);

    useEffect(()=>{
        try {
            axios.get('http://localhost:3000/users').then((res)=>console.log(res.data));
            
        } catch (error) {
            console.error(error);    
        }
    },[])
    return ''
}

export default LoginPage;