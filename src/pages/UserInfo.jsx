import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((user) => {setUser(user);});
  }, []);

  const boxStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:"12px",
    marginTop :"100px",
    padding: "50px",
    background:  "#E8F7FD",
}

  return (
    <>
    <div style={boxStyle}>
        {user
        ? user.message ? <div> {user.message} </div> :
            <>
            <div>First Name - {user.firstName}</div>
            <div>Last Name - {user.lastName} </div>
            <div>Age - {user.age}</div>
            <div>Gender - {user.gender}</div>
            <div>Email - {user.email}</div>
            <div>Phone - {user.phone} </div>
            </>
        : <div>Loading......</div>}
        <Button variant="outlined" color="primary" startIcon={<ArrowBackIcon />} onClick={()=> navigate("/")}>
            Back
        </Button>
    </div>
    </>
  );
};

export default UserInfo;
