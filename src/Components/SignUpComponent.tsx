import '../App.css'
import { Row, Col, Card, ListGroup,Form, Button } from 'react-bootstrap'
import CodeLogo from '../Asset/codewarslogo.svg'
import CodeReserve from '../Asset/CodeReserveLogo-removebg-preview.png'

const SignUp = (): JSX.Element => {
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
                                    <Col>
                                        <div>
                                            <ListGroup className='cusLi'>
                                                <Form.Control  className='listCuz' type="email" placeholder="username"/>
                                                <Form.Control  className='listCuz' type="email" placeholder="password"/>
                                            </ListGroup>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <div className='d-flex justify-content-center pt-4'>
                                            <Button className='signInButton'>Sign In</Button>
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