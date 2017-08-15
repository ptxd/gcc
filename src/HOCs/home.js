import React, { Component } from 'react';
import {Jumbotron,Container, Row, Col} from 'reactstrap';
import HamburgerMenu from '../components/menubar/hamburger_menu';
import BannerButton from '../components/button/banner_button';
import TextAnimateOut from '../components/text_animation/text_animate_out';
import ScrollDown from '../components/scroll/scroll_down';

class Home extends Component {
    render() {
        return (
            <div className="body-wrapper">
                <header><HamburgerMenu/></header>
                <Jumbotron className="jumbo-img">
                    <Container className="jumbo-wrapper">
                            <Row>
                                <Col><TextAnimateOut text="GUILD OF CRYPTOCURRENCIES"/></Col>
                            </Row>
                            <Row className="b-btn-wrapper">
                                <Col >
                                    <BannerButton bbutton="Learn More"/>
                                    <BannerButton bbutton="White Paper"/>
                                </Col>    
                            </Row>
                            <Row>
                                <Col className="sd-wrapper">
                                    <ScrollDown/>
                                </Col>
                            </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;

