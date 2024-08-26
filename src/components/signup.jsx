import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
export function Signup(){
    const navigate = useNavigate()
    return(
        <div className='bg-custom-background6 bg-cover bg-center w-full h-screen flex items-center justify-center'>
    
            <GoogleLogin 
  onSuccess={credentialResponse => {
    try{
    console.log(credentialResponse);
    const decoded_code = jwtDecode(credentialResponse?.credential)
    console.log(decoded_code)
    navigate("/")
    }
    catch{
        console.log("error")
    }
  }}
  onError={() => {
    console.log('Login Failed');
  }}></GoogleLogin>
    </div>
    )
}

