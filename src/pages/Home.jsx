import {useState} from 'react';
import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
    const [userID, setUserID] = useState(0);
    const navigate = useNavigate();
    const boxStyle = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop: "100px",
    }
  return (
    <>
    <div style={boxStyle}>
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter User ID"
        inputProps={{ "aria-label": "Enter User ID" }}
        onInput={e => setUserID(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={()=> navigate(`/UserInfo/${userID}`)}>
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
    </>
  );
};
export default Home;
