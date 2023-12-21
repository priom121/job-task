import { createContext, useEffect } from "react";
import app from "../Hooks/firebase.config";
import { useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword,
 getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

 export const AuthContext = createContext(app)
 const auth = getAuth(app);
 const AUthProvider =({children})=>{
   const [user,setUser] = useState([])                           
   const [loading,setLoading] = useState(true) 
  
   const createUser= (email,password)=>{ 
 setLoading(true)
 return createUserWithEmailAndPassword (auth,email,password)
 }

 const signIn = (email,password)=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
 }

 const provider = new GoogleAuthProvider()
 const googleLogIn =()=>{
  setLoading(true)
  return signInWithPopup(auth,provider)
 }

 const logOut =()=>{
 setLoading(true)
 return signOut(auth)
 }

 const updateUserProfile =(name,photo)=>{
return updateProfile(auth.currentUser, {
  displayName: name, photoURL:photo
 })
                              
}

useEffect(() => {
 const unsubscribe = onAuthStateChanged(auth, currentUser => {
 setUser(currentUser);
console.log('current user', currentUser);
setLoading(false)
});
return () => {
 unsubscribe();
 };
}, [])

   const authInfo ={user , loading,createUser,signIn,googleLogIn,logOut,updateUserProfile}
   return (
 <AuthContext.Provider value={authInfo}>
 {children}                                                                                    
</AuthContext.Provider>
);
 }
 export default AUthProvider