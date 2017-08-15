import React, { Component } from 'react';
import {Jumbotron,Container, Row, Col,CardDeck} from 'reactstrap';
import HamburgerMenu from '../components/menubar/hamburger_menu';
import BannerButton from '../components/button/banner_button';
import TextAnimateOut from '../components/text_animation/text_animate_out';
import ScrollDown from '../components/scroll/scroll_down';
import imageEth from '../images/icons8-Ethereum.svg';
import imageCollab from '../images/networking.svg';
import RectCard from '../components/cards/rect_card';

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
                <Container className="c1">
                    <h1>The Guild</h1>
                    <CardDeck>
                        <RectCard 
                            image="http://www.gaiscioch.com/images/saighdear/ucc.png" 
                            title="Lorem Ipsum"
                            subtitle="Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                            text="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                        />
                        <RectCard 
                            image={imageEth} 
                            title="Lorem Ipsum"
                            subtitle="Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                            text="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                        />
                        <RectCard 
                            image={imageCollab} 
                            title="Lorem Ipsum"
                            subtitle="Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                            text="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                        />
                    </CardDeck>
                    <div className="c1-div1">
                        <h1>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </h1>
                        <h3>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h3>
                        <h3>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h3>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;

