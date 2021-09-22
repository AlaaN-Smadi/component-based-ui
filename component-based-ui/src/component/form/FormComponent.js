import { Form, Button } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './Form.scss'

import React, { useState } from 'react';

function FormComponent(props) {
    const [method, setMethod] = useState(
        'get'
    );

    
    return (
        <>
            <Form onSubmit={props.submitFun}>
                <Form.Group id="myLink" className="mb-3" >
                    <Form.Label> Url link : </Form.Label>
                    <Form.Control id="input_Link" name="email" type="text" placeholder="Enter Link" />
                    
                </Form.Group>

                <Button name="myButton" variant="primary" type="submit">
                {method}
                </Button>
                <Form.Label>  </Form.Label>
                <br />

                <ButtonGroup aria-label=" Methods ">
                    <Button onClick={()=>setMethod('get')} className="axiosBtn" variant="secondary"> Get </Button>
                    <Button onClick={()=>setMethod('post')} className="axiosBtn" variant="secondary"> Post </Button>
                    <Button onClick={()=>setMethod('delete')} className="axiosBtn" variant="secondary"> Delete </Button>
                    <Button onClick={()=>setMethod('put')} className="axiosBtn" variant="secondary"> Put </Button>
                </ButtonGroup>
                {/* <Button onClick={methodFun} > Test </Button> */}



            </Form>
        </>
    );
}

export default FormComponent;