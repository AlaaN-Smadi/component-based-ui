import logo from './logo.svg';
import './styles/App.scss';
import Footer from './component/Footer';
import Header from './component/Header';
import FormComponent from './component/FormComponent';
import Result from './component/Result';
import React, { useState } from 'react';


function App() {
  

  const [data, setData] = useState(
    []
  );
  

  const submitFun = (e) =>{
    e.preventDefault();

    let myData = e.target.email.value
    


    setData(`get :  ${myData}`)
    

  }

  return (
    <div className="App">
      <Header myHeader={'RESTy'} />
      <FormComponent submitFun={submitFun} />
      <Result data={data} />
      
      <Footer myFooter={'© 2018 Code Fellows'} />
    </div>
  );
}

export default App;
