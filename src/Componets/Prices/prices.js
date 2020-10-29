import React from 'react'
import { Container, } from 'react-bootstrap';

function Prices(props) {
    return (
        <div>
            <Container>
                <h5>Prices</h5>
                <ul>
                    <li>
                    $10 per trip
                    </li>
                    <li>
                    $40 per Kayak
                    </li>
                    <li>
                    $40 per Canoe
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Prices;