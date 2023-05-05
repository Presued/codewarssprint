import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AdminProfileComponent.css';
import Footer from '../FooterComponent/FooterComponent';
import Header from '../HeaderComponent/HeaderComponent';
import Username from "../SignInComponent";
import { useLocation } from 'react-router-dom';


interface UserData {
    username?: string;
    name?: string;
    honor?: number;
    clan?: string;
    leaderboardPosition?: number;
    codeChallenges?: {
        totalCompleted?: number;
        totalAuthored?: number;
    };
    ranks?: {
        overall: {
            rank: number;
            color: string;
        };
    };
}

interface Props {
    userId: string;
}

const CodewarsProfile: React.FC<Props> = ({ userId }) => {
    const location = useLocation();
    const Username = location.state?.Username;
    const [userData, setUserData] = useState<UserData>({});
    const [kyuLevel, setKyuLevel] = useState<number | null>(null);
    const [kyuColor, setKyuColor] = useState<string>('transparent');


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.codewars.com/api/v1/users/${Username}`);
            const data: UserData = await response.json();
            setUserData(data);
            console.log(data)

            const kyuRank = Math.abs(data.ranks?.overall?.rank ?? 0);
            setKyuLevel(kyuRank);
            const kyuColor = data.ranks?.overall?.color ?? 'transparent';
            setKyuColor(kyuColor);
        };

        fetchData();
    }, [userId]);

    const {
        username,
        name,
        honor,
        clan,
        leaderboardPosition,
        codeChallenges: { totalCompleted: totalCompletedKata, totalAuthored: totalAuthoredKata } = {},
    } = userData;

    return (
        <>
            <Header />
            <Container className="profile-container">
                <Container className='text-container'>
                    <Row className="row-title">
                        <Col xs={6}>
                            <span className="kyu text" style={{ color: kyuColor }}>{kyuLevel} Kyu</span>
                            {userData.username}
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
                <Row className='space-between-rows'></Row>
                <Row className="row-data">
                    <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Name:</span> {name || 'Brandon'}</Col>
                    <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Honor:</span> {honor || '200'}</Col>
                    <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Clan:</span> {clan || 'BestClanName'}</Col>
                </Row>
                <Row className="row-data">
                    <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Total Completed Kata:</span> {totalCompletedKata || '10'}</Col>
                    <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Leaderboard Position:</span> #{leaderboardPosition?.toLocaleString() || '100,000'}</Col>
                    <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Total Authored Kata:</span> {totalAuthoredKata || '0'}</Col>
                </Row>
            </Container>
            <Footer />
        </>

    );
};

export default CodewarsProfile;