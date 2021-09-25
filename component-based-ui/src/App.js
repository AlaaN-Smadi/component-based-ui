import logo from './logo.svg';
import './App.scss';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import FormComponent from './component/form/FormComponent';
import Result from './component/result/Result';

import { useEffect , useState } from 'react';
import axios from 'axios';
import Loading from './component/loading/loading';



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: { headers: 'headers', data: "Results" },
//       method: 'get',
//       loading: false
//     }
//   }


// //   useEffect(() => {
// //     async function getApiData () {
// //       console.log(requestParams)
// //       if(requestParams.url){
// // const{url,method,reqBody}=requestParams

// //        const data = await axios.get(url);
// //        console.log(data.data);
// //   setdata(data)
// //       }
// //       }
// //     getApiData ();
// //   }, [requestParams])

//   submitFun = async (e) => {
//     e.preventDefault();
//     let myData = e.target.email.value

//     let myButton = e.target.myButton.textContent
//     // console.log(myButton)
//     let resultData
//     this.setState({ loading: true })
//     try {
//       if (myButton === 'get') {
//         console.log('get')
//         resultData = await axios.get(myData)
//       } else if (myButton === 'post') {
//         console.log('post')
//         resultData = await axios.post(myData)
//       } else if (myButton === 'delete') {
//         console.log('delete')
//         resultData = await axios.delete(myData)
//       } else if (myButton === 'put') {
//         console.log('put')
//         resultData = await axios.put(myData)
//       }
//       let lastResult = resultData
//       console.log(resultData);
//       this.setState({
//         method: myButton,
//         loading: false,
//         data: lastResult
//       })
//     } catch (err) {
//       let newObj = {
//         headers: `Faild to ${myButton} this link ${myData}`,
//         data: err
//       }
//       let lastResult = newObj
//       this.setState({
//         method: myButton,
//         loading: false,
//         data: lastResult
//       })
//       console.log(err);
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <Header myHeader={'RESTRy'} />
//         <FormComponent submitFun={this.submitFun} />

//         {
//           this.state.loading &&
//           <Loading />
//         }

//         <Result method={this.state.method} data={this.state.data} />


//         <Footer myFooter={'© 2018 Code Fellows'} />
//       </div>
//     )
//   }
// }




function App() {
  const [data, setData] = useState(
    { headers: 'headers', data: "Results" }
  );
  const [method, setMethod] = useState(
    'get'
  );
  const [loading, setloading] = useState(
    false
  );

  const [requestInfo, setRequestInfo] = useState(
    {
      method:'get',
      url:'link',
      reqBody:{}
    }
  );

  const myAPIFun = (myAPI) =>{
    setRequestInfo(myAPI)
  }

  
  useEffect(() => {
    async function getApiData() {
      console.log(requestInfo)
      if (requestInfo.url) {
        const { url, method, reqBody } = requestInfo
        //////////
        let formData = url
        let myButton = method
        // console.log(myButton)
        let resultData
        setloading(true)
        try {
          if (myButton === 'get') {
            console.log('get')
            resultData = await axios.get(formData)
          } else if (myButton === 'post') {
            console.log('post')
            resultData = await axios.post(formData)
          } else if (myButton === 'delete') {
            console.log('delete')
            resultData = await axios.delete(formData)
          } else if (myButton === 'put') {
            console.log('put')
            resultData = await axios.put(formData)
          }
          let lastResult = resultData
          console.log(resultData);
          setMethod(myButton)
          setloading(false)
          setData(lastResult)
        } catch (err) {
          let newObj = {
            headers: `Faild to ${myButton} this link ${formData}`,
            data: err
          }
          let lastResult = newObj
          setMethod(myButton)
          setloading(false)
          setData(lastResult)
          console.log(err);
        }
        
      }
    }
    getApiData();
  }, [requestInfo])

  return (
    <div className="App">
      <Header myHeader={'RESTRy'} />
      <FormComponent myAPIFun={myAPIFun} />

      {
        loading &&
        <Loading />
      }

      <Result method={method} data={data} />


      <Footer myFooter={'© 2018 Code Fellows'} />
    </div>
  );
}


export default App
