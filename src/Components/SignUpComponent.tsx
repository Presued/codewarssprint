import '../App.css'
import { Row, Col, Card } from 'react-bootstrap'
import CodeLogo from '../Asset/codewarslogo.svg'

const SignUp = (): JSX.Element => {
    return (
        <>
            <div className="brColor">
                <Row>
                    <Col>
                        <h3 className='d-flex justify-content-center pt-5 text-white'>CodeReserve <span className='mLogo'> <img src={CodeLogo} height='30px' alt='CodeWarsLogo' /> </span> </h3>
                    </Col>
                </Row>

                <Row>
                    <Col className='cBody'>
                        <Card className='cuzCard'>
                            <Card.Body>
                            <Card.Body className='infoColor'>

                            </Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SignUp;