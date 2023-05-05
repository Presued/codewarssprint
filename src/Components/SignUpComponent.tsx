import '../App.css'
import { Row, Col, Card, ListGroup,Form, Button } from 'react-bootstrap'
import CodeLogo from '../Asset/codewarslogo.svg'
import CodeReserve from '../Asset/CodeReserveLogo-removebg-preview.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import SignIn from './SignInComponent'
import { createAcc } from '../Services/DataServices'
import { useState } from 'react'



const SignUp = (): JSX.Element => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

const handleInputChange = (event: any) => {
    setUsername(event.target.value);
}

const handleInputPassword = (event: any) => {
    setPassword(event.target.value);
}
  
    const handleSubmit = async () => {
      let userData = {
          Id: 0,
          Username: Username,
          Password: Password,
          IsAdmin: false
      }
    //   createAcc(userData)
      const GetLoggedInData = async () => {
          let result = await createAcc(userData)

          if (result) {
              navigate('/');
          } else {
          }
      }
      console.log(Username)
      console.log(Password)
      GetLoggedInData()
      }
  

    return (
        <>
            <div className="brColor">
                <Row className='moveCard'>
                    <Col className='cBody'>
                        <Card className='cuzCard'>
                            <Card.Body className='cardBody'>
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
                                    <Col>
                                        <div>
                                            <ListGroup className='cusLi'>
                                                <Form.Control onChange={handleInputChange}  className='listCuz' type="email" placeholder="Codewars Login"/>
                                                <Form.Control onChange={handleInputPassword}  className='listCuz' type="email" placeholder="password"/>
                                                <Form.Control  className='listCuz' type="email" placeholder="Confirm Password"/>
                                            </ListGroup>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className='d-flex justify-content-center pt-4'>
                                            <Button onClick={handleSubmit} className='signInButton'>Create Account</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <div>
                                    <p className='text-white text-center pt-5'> <Link className='loginSignUp' to="/">Log in </Link> <span>if you have an account already </span> </p>
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

export default SignUp;