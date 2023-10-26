import React, { useState,useEffect } from "react";
import Login2 from "./components/pages/registration/Login2";
import Home from "./components/pages/registration/Home";
import Activate from './components/pages/registration/Activate';

// import ResetPasswordConfirm from './components/pages/registration/ResetPasswordConfirm';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Layout from "./hocs/Layout";
import UserHome from "./components/pages/userside/UserHome";
import { Provider } from "react-redux";
import Signup from "./components/pages/registration/Signup";
import MentorList from "./components/pages/userside/Mentors";
import BecomeMentor from "./components/pages/userside/BecomeMentor";
import { Navigate } from "react-router-dom";
import Forbiden from "./components/pages/404/404";
import { PremiumProvider } from "./components/pages/userside/PremiumContext";
import ForgotPassword from "../src/components/pages/registration/forgotpassword";
import Reset from '../src/components/pages/registration/resetpassword'

import { getLocal } from '../../login/src/actions/auth';
import jwtDecode from "jwt-decode";
import AdminRoute from "./components/Routers/admin";
import MentorRoute from "./components/Routers/mentor";
import UserRoutes from "./components/Routers/user";
// import Pay from '../src/components/pages/userside/payment/pay'


function App() {
  //  
  
  const token = getLocal('authToken');
  const [premium, setPremium] = useState(false);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.is_premium) {
        setPremium(true);
      }
    }
  }, [token]);

  return (
    <div>
   
   <Router>
   <PremiumProvider value={premium}>
      <Routes>


          {/* AUTNETICATION REGISTRATION PASSWORD MANAGEMENT */}
        
          
          <Route path="/*" element={< UserRoutes/>} />
          {/* <Route path="/pay" element={<Pay />} /> */}
         

         
          {/* <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>} /> */}
          <Route path="/activate/:uid/:token" element={<Activate/>} />


          <Route path='forgot-password/' element={<ForgotPassword />} />
          <Route path='reset-password/' element={<Reset />} />
          {/* PAGES ROTES */}
          <Route path="/admin/*" element={<AdminRoute/>}></Route>
          <Route path="/mentor/*" element={<MentorRoute/>}></Route>
          {/* <Route path="/user" element={<UserRoutes/>}></Route> */}
          
          


          
          

          {/* FORBIDEN404 PAGES */}
          <Route path="/forbiden" element={<Forbiden />} />
      </Routes>
      </PremiumProvider>
    </Router>
    </div>
  );
}

export default App;