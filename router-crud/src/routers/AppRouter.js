import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import {getAuth, onAuthStateChanged } from "firebase/auth";

export default function AppRouter() {

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         //console.log(user)
         setIsLoggedIn(true)
         
        }
        else{
         setIsLoggedIn(false)
        }

        setChecking(false)
    })
  }, [setIsLoggedIn,setChecking])


if(checking){
  return(
      <h1>Espere...</h1>
  )
}


  return (
    <Router>
        <Routes>
       
        <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login/> 
                    </PublicRoute>
                } />


                <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Registro/>
                    </PublicRoute>
                } />

               
                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRouter/>
                    </PrivateRoute>
                }/>
        </Routes>
    </Router>
  );
}
