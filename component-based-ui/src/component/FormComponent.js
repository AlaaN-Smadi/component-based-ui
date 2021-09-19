import {Form,  Button} from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';

function FormComponent(props) {
    return (
        <>
            <Form onSubmit={props.submitFun}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Email </Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> User Name </Form.Label>
                    <Form.Control name="userName" type="text" placeholder="User Name" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default FormComponent;