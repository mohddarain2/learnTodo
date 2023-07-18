import React, { useState } from 'react'
import Header from './Component/Header'
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storeData, setStoredata] = useState([]);

  const fun = () => {
    setStoredata([...storeData, { email, name }])
    setName("")
    setEmail("")
  }
  const deletefun=(index)=>{
    storeData.splice(index,1);
    setStoredata([...storeData]);
  }
  return (
    <div className=''>
      <Header />
      <div className='inputs'>
        <Stack direction="row" spacing={2}>
          <TextField id="filled-basic" label="Name" variant="filled" value={name} onChange={(e) => { setName(e.target.value) }} />
          <TextField id="filled-basic" label="Email" variant="filled" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <Button variant="contained" color="success" onClick={fun}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className='container' >
        <div className='data-container'>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
        </div>
        {
          storeData && storeData.map((element, index) => (
            <div className='mapData' key={index+element}>
              <div>{element.name}</div>
              <div>{element.email}</div>
              <Button variant="outlined" color="error" onClick={()=>deletefun(index)}>
             <DeleteIcon/>
              </Button>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default App

