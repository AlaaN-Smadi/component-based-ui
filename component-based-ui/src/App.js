import logo from './logo.svg';
import './App.scss';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import FormComponent from './component/form/FormComponent';
import Result from './component/result/Result';
// import React, { useState } from 'react';


import React, { Component } from 'react'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  submitFun = (e) => {
    e.preventDefault();
    let myData = e.target.email.value
    this.setState({ data: `get ${myData}` })
  }
  render() {
    return (
      <div className="App">
        <Header theHeader={'RESTy'} />
        <FormComponent submitFun={this.submitFun} />
        <Result data={this.state.data} />
        <Footer thefooter={'© 2018 Code Fellows'} />
      </div>
    )
  }
}
export default App


// function App() {


//   const [data, setData] = useState(
//     []
//   );


//   const submitFun = (e) =>{
//     e.preventDefault();

//     let myData = e.target.email.value



//     setData(`get :  ${myData}`)


//   }

//   return (
//     <div className="App">
//       <Header myHeader={'RESTy'} />
//       <FormComponent submitFun={submitFun} />
//       <Result data={data} />

//       <Footer myFooter={'© 2018 Code Fellows'} />
//     </div>
//   );
// }

// export default App;
