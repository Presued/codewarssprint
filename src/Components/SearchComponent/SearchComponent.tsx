import CodeWarsProfile from '../CodewarsProfileComponent/CodeWarsProfile';
import '../SearchComponent/SearchComponent.css';
import { Container,  } from "react-bootstrap";

export default function SearchComponent () {
    return (
        <Container>
            <CodeWarsProfile userId='12345'/>
            <div className='searchCard'>

            </div>
        </Container>
    );
}