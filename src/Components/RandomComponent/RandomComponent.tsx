import { useState } from 'react';
import '../RandomComponent/RandomComponent.css'
import { Button, Row, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

export default function RandomComponent() {
    return (
        <Container className='randomContainer'>
            <div className='randomCard'>
                <Row className='randomFirstRow'>
                    <p className='randomTitle'>Random Challenge</p>
                    <Button className='languageBtn'>Choose a language</Button>
                    <Button className='reserveBtn'>Reserve Kata</Button>
                </Row>
                <Row className='randomKataRow'>
                    <div className='kyuCol'>
                        <p className='kyuNum'>7 Kyu</p>
                        <p className='randomKata'>Randomly Chosen Kata</p>
                    </div>
                    <div>
                        <div className='kataDiv'>
                            <p className='authorTitle'>Author of this Kata</p>
                            <p className='descTitle'>Kata Description</p>
                            <p className='descriptionTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.</p>
                        </div>
                    </div>
                </Row>
            </div>

            {/* SearchCommponent */}

            <div className='searchComponent'>
                <p className='filterTitle'>Filters</p>
                <input className='inputBox'></input>
                <p className='sortTitle'>Sort By</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdownBox'>
                    Alphabetically
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdownMenu'>
                        <Dropdown.Item className='dropdownItem' href="#/action-1">A-Z</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-2">Z-A</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-3">More</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <p className='lanuageTitle'>Languages</p>
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdownBox'>
                    Choose a language
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdownMenuLang'>
                        <Dropdown.Item className='dropdownItem' href="#/action-1">C#</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-2">JavaScript</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-3">Python</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-4">Ruby</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-5">Typescript</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <p className='diffTitle'>Difficulty</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdownBox'>
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdownMenuKyu'>
                        <Dropdown.Item className='dropdownItem' href="#/action-1">8 Kyu</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-2">6 Kyu</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-3">4 Kyu</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-4">2 Kyu</Dropdown.Item>
                        <Dropdown.Item className='dropdownItem' href="#/action-5">1 Kyu</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>


        </Container >
    );
}