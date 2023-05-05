import '../App.css'
import { Row, Col, Card,Form, Button, ListGroup } from 'react-bootstrap'
import CodeLogo from '../Asset/codewarslogo.svg'
import CodeReserve from '../Asset/CodeReserveLogo-removebg-preview.png'
import React, {useState, useContext} from "react";
import { MyContext } from '../MyContext';
import { useNavigate } from 'react-router-dom';
import { login } from "../Services/DataServices";
import { Link } from 'react-router-dom';
import CodewarsProfile from './CodewarsProfileComponent/CodeWarsProfile';



const SignIn = (): JSX.Element => {
    const { setUser } = useContext(MyContext);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();
        
    const handleLogin = async (name: any) => {
        let userData = {
            Username,
            Password
        }
        setUser(Username);
        console.log(Username)
        try {
            let token = await login(userData);
            if (token.token != null) {
                localStorage.setItem("Token", token.token);
                navigate('/CodewarsProfile', { state: {Username} });
            }
        } catch (error) {
            console.error(error);
            
        }
    }

    return (
        <>
            <div className="brColor">

                <Row className='moveCard'>
                    <Col className='cBody'>
                        <Card className='cuzCard'>
                            <Card.Body>
                                <Row>
                                    <Col className='d-flex justify-content-center align-items-start pt-3'>
                                        <div>
                                            <img src={CodeReserve} height='auto' width='165px' alt='ReserveLogo' />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div>
                                            <p className=' align-self-start text-white text-center fs-2'>CodeReserve</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col  className="enterLogin">
                                        <div  >
                                        <Form className='logForm'>
                                    <Form.Group>
                                        <input className='loginINputAndBtn loginInput' onChange={({ target: { value } }) => setUsername(value)} type='text' value={Username} placeholder='Username'/>
                                    </Form.Group>
                                    <Form.Group >
                                        <input className='mb-10 loginINputAndBtn loginInput' type='password' onChange={({ target: { value } }) => setPassword(value)} placeholder='Password' />
                                    </Form.Group>
                                </Form>
                                <Button className="btn btn-primary loginBtn loginINputAndBtn" onClick={() => handleLogin(Username)} variant=''>Login</Button>
                                        </div>
                                        <div>
                                    <p className='text-white text-center pt-3'><Link to="/SignUp" className='signUp loginSignUp'>Sign up</Link> if you don't have an account already</p>
                                    </div>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}


export default SignIn;