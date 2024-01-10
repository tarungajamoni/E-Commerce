import { isRejected } from "@reduxjs/toolkit";

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    });
    const data = await response.json();
    //TODO: only few info of user will return on server
    resolve({ data })
  }
  );
}


export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch('http://localhost:8080/users?email='+email);
    const data = await response.json();
    console.log({data})
    if(data.length) {
      if(password === data[0].password){
        resolve({ data:data[0] })
      }
      else {
        reject({message: 'wrong credentials'})
      }
     
    } else {
reject({message: 'user not found'})
    }
    //TODO: only few info of user will return on server
    
  }
  );
}
