import { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {registroAsincrono} from './redux/actions/actionRegistro'
import { useDispatch } from 'react-redux';

export const Registro = () => {


    const dispatch = useDispatch();

    const [registro, setRegistro] = useState({
        nombre: 'Jenny',
        email: 'jenny@gmail.com',
        pass1: '123456',
        pass2: '123456'
    });


    const {nombre,email,pass1,pass2} = registro;

    const handleInputChanged = ({target}) => {
         setRegistro({
             ...registro,
             [target.name]: target.value
         })
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(registroAsincrono(email,pass1,nombre))
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChanged}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChanged}
                  
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChanged}
                  
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChanged}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/">Login</Link>

            </Form>

        </div>
    )
}