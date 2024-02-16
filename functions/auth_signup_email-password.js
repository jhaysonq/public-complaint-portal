import { useEffect, useState } from 'react';
import { app } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export default function auth_signin_password() {
  let auth = getAuth();
  const [data, setData] = useState({});

  const handleInputs = (event) => {
    let newInput= { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput })
  }

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then ((response ) => {
      console.log(response.user)
    })
    .catch((err) => {
      alert(err.message)
    });
  };
  
  
};

