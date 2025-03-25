import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const TopRoutes = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <div>
                            <span>
                                From
                            </span>
                            <span>
                                To
                            </span>
                        </div>
                        <span>
                            Date and time
                        </span>
                        <span>
                            Book now
                        </span>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default TopRoutes
