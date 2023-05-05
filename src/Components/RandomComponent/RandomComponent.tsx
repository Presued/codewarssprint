import Footer from '../FooterComponent/FooterComponent';
import '../RandomComponent/RandomComponent.css'
import { Button, Row, Col, Container } from "react-bootstrap";

export default function RandomComponent() {
    return (
        <Container className='randomContainer'>
            <div className='randomCard'>
                <Row className='randomFirstRow'>
                    <Col className='randomFirstCol'>
                        <p className='randomTitle'>Random Challenge</p>
                        <Button className='languageBtn'>Choose a language</Button>
                        <Button className='reserveBtn'>Reserve Kata</Button>
                    </Col>
                </Row>
                <div className='randomKataCard'>
                    <Row className='randomKataRow'>
                        <p className='kyuNum'>7 Kyu</p>
                        <p className='randomKata'>Randomly Chosen Kata</p>
                    </Row>
                </div>
            </div>
            <Footer />
        </Container>
    );
}