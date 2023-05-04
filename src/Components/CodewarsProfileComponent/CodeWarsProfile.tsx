import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CodeWarsProfile.css';

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
    const [userData, setUserData] = useState<UserData>({});
    const [kyuLevel, setKyuLevel] = useState<number | null>(null);
    const [kyuColor, setKyuColor] = useState<string>('transparent');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.codewars.com/api/v1/users/${userId}`);
            const data: UserData = await response.json();
            setUserData(data);

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
        codeChallenges: { totalCompleted: totalCompletedKata, totalAuthored: totalAuthoredKata } = { totalCompleted: 0, totalAuthored: 0 },
    } = userData;

    return (
        <Container className="profile-container">
            <Container className='text-container'>
                <Row className="row-title">
                    <Col xs={6}>
                        <span className="kyu text" style={{ color: kyuColor }}>{kyuLevel} Kyu</span>
                        {userData.username}
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="kyu-color-bar"></div>
                    </Col>
                </Row>
            </Container>
            <Row className='space-between-rows'></Row>
            <Row className="row-data">
                <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Name:</span> {name}</Col>
                <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Honor:</span> {honor}</Col>
                <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Clan:</span> {clan}</Col>
            </Row>
            <Row className="row-data">
                <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Total Completed Kata:</span> {totalCompletedKata}</Col>
                <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Leaderboard Position:</span> #{(leaderboardPosition ?? 0).toLocaleString()}</Col>
                <Col xs={4}><span style={{ color: "#999999", fontFamily: "LatoBold" }}>Total Authored Kata:</span> {totalAuthoredKata}</Col>
            </Row>
        </Container>
    );
};

export default CodewarsProfile;