import React, { createContext,useEffect,useState} from 'react';

import {   createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Fire/Fire';

export const AuthProvid=createContext(null)
const AuthProviders = ({children}) => {
     const [users,setUsers]=useState(null)
     const[loading,setLoading]=useState(true)
     const providers=new GoogleAuthProvider()

     const handleRegisters= (email,password)=>{
          setLoading(true)
          return  createUserWithEmailAndPassword(auth, email, password)
     }
     const handleLoginUSers= (email,password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }
     const handleGoogle=()=>{
       return   signInWithPopup(auth,providers)
     }
     const handleSingOut=()=>{
          return signOut(auth)
     }
     const updateProfileess =(name,image)=>{
        

          return updateProfile(auth.currentUser,{
               displayName:name,photoURL:image
          })

     }
          useEffect(()=>{
             const unsubscrbe= onAuthStateChanged(auth,currentUser=>{
              
               setUsers(currentUser)
               setLoading(false)
             })
              
               return ()=>{
                    unsubscrbe();
               }
          },[])

     const authInfo={
          users,
          loading,
          handleRegisters,
          handleLoginUSers,
          handleSingOut,
          updateProfileess,
          handleGoogle,
    
          

     }
     return (
          
          <AuthProvid.Provider value={authInfo}>
               {children}
          </AuthProvid.Provider>
     );
};

export default AuthProviders;