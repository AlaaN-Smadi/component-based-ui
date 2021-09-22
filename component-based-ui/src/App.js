import logo from './logo.svg';
import './styles/App.scss';
import Footer from './component/Footer';
import Header from './component/Header';
import FormComponent from './component/FormComponent';
import Result from './component/Result';
import React, { useState } from 'react';
import axios from 'axios';
import Loading from './component/loading';


function App() {


  const [data, setData] = useState(
    {headers:'headers', data:"Results"}
  );

  const [method, setMethod] = useState(
    'get'
  );

  const [loading, setLoading] = useState(
    false
  );

  const submitFun = async (e) => {
    e.preventDefault();

    let myData = e.target.email.value

    let myButton = e.target.myButton.textContent

    // console.log(myButton)
    let resultData

    setLoading(true)

    try{
      if(myButton === 'get'){
        console.log('get')
        resultData = await axios.get(myData)
      }else if(myButton === 'post'){
        console.log('post')
        resultData = await axios.post(myData)
  
      }else if(myButton === 'delete'){
        console.log('delete')
        resultData = await axios.delete(myData)
  
      }else if(myButton === 'put'){
        console.log('put')
        resultData = await axios.put(myData)
  
      }
  
      setMethod(myButton)
      setLoading(false)
      let lastResult = resultData
      setData(lastResult)
  
      console.log(resultData);
  
  
    }catch(err){
      setMethod(myButton)
  
      setLoading(false)
      let newObj = {
        headers: `Faild to ${myButton} this link ${myData}`,
        data: err
      }
      let lastResult = newObj
      setData(lastResult)
  
      console.log(err);
  
    }
    
  }

  return (
    <div className="App">
      <Header myHeader={'RESTy'} />
      <FormComponent submitFun={submitFun} />
      {
        loading &&
         <Loading />
      }
     
      <Result method={method} data={data} />

      <Footer myFooter={'© 2018 Code Fellows'} />
    </div>
  );
}

export default App;
