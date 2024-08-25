import React, { useEffect } from 'react';
import { useState } from 'react';
function Display1(){
  const [characters,setCharacters]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://users-backend-0ljr.onrender.com/get-user');
     const data=await res.json();
        setCharacters(data[data.length-1])
        //  console.log(data)
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, []); // empty dependency array to run only once

return(
<div>
<h3>Hi <a href=''>{characters.emailId} </a> you've successfully signed in</h3>
<h3>Your password is:{characters.password}</h3>
</div>

)}
export default Display1;