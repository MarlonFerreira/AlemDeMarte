import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Col, Row, Input, InputGroup, Button } from 'reactstrap'

import utilAjax from '../utils/utilAjax'

let URL = 'http://localhost:8082/usuario';


function initialState() {
    return { name: '' }
}

// class Login extends Component {
const Login = (props) => {
    const [values, setValues] = useState(initialState);

    function onChange(event) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]: value
        });
    }

    const history = useHistory();

    async function handleClick() {
        const { lastID } = await utilAjax.requisicaoAjaxPostJson(URL, { nome: values.name })
        history.push(`/home/${lastID}`);
    }

    return (
        <div className="row justify-content-center align-items-center" style={{ marginTop: "300px" }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        <div style={{ marginLeft: "110px" }}>
                            <h1>Seja bem vindo</h1>
                        </div>
                        <InputGroup style={{ marginTop: "65px" }} className="mb-3 justify-content-center">
                            <Input type="text" name="name" onChange={onChange} >
                            </Input>
                        </InputGroup>
                        <InputGroup style={{ marginTop: "65px" }} className="justify-content-center">
                            <Button color="primary" onClick={handleClick}>Entrar</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login