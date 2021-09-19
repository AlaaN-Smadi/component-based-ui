import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import FormComponent from './component/FormComponent';
import Result from './component/Result';
import React, { useState } from 'react';


function App() {
  

  const [email, setEmail] = useState(
    'Email !'
  );
  const [userName, setUserName] = useState(
    'User Name!'
  );

  const submitFun = (e) =>{
    e.preventDefault();

    let email = e.target.email.value
    let userName = e.target.userName.value


    setEmail(' Email => ' + email)
    setUserName(' User Name => ' + userName)

  }

  return (
    <div className="App">
      <Header />
      <FormComponent submitFun={submitFun} />
      <Result email={email} userName={userName}  />
      
      <Footer />
    </div>
  );
}

export default App;
