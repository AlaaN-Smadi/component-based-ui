import { Form, Button } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './Form.scss'

function FormComponent(props) {
    return (
        <>
            <Form onSubmit={props.submitFun}>
                <Form.Group id="myLink" className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Url link : </Form.Label>
                    <Form.Control id="input_Link" name="email" type="text" placeholder="Enter Link" />

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <br/>

                <ButtonGroup aria-label=" Methods ">
                    <Button className="axiosBtn" variant="secondary"> Get </Button>
                    <Button className="axiosBtn" variant="secondary"> Post </Button>
                    <Button className="axiosBtn" variant="secondary"> Delete </Button>
                    <Button className="axiosBtn" variant="secondary"> Put </Button>
                </ButtonGroup>
               
                
            </Form>
        </>
    );
}

export default FormComponent;