import '../Random/RandomComponent.css';
import React from "react";
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
            </div>
        </Container>
    );
}