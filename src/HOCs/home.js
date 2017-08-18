import React, { Component } from 'react';
import {Jumbotron,Container, Row, Col,CardDeck} from 'reactstrap';
import HamburgerMenu from '../components/menubar/hamburger_menu';
import BannerButton from '../components/button/banner_button';
import TextAnimateOut from '../components/text_animation/text_animate_out';
import ScrollDown from '../components/scroll/scroll_down';
import imageEth from '../images/icons8-Ethereum.svg';
import imageCollab from '../images/networking.svg';
import RectCard from '../components/cards/rect_card';
import Ipad from '../images/ipad.svg';
import Exchange from '../images/exchange.svg';
import Tablet from '../images/tablet.svg';
import Map from '../images/map.svg';

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
                            title="Hub"
                            subtitle="GCC Hub & Guild Center"
                            text="The Guild will build and run hubs which will be at the forefront of technology. The hubs will combine local culture and technology to create an environment to support regional growth towards the implementation of cryptocurrencies as a medium of trade and finance."
                        />
                        <RectCard 
                            image={imageEth} 
                            title="Cryptocurrencies"
                            subtitle="Blockchain & Cryptocurrencies"
                            text="Utilizing the power of the blockchain technology to bring cryptocurrencies into mainstream trade and commerce. By supporting various technology development and real-world use cases to build a financial world run on "
                        />
                        <RectCard 
                            image={imageCollab} 
                            title="Community"
                            subtitle="Decentralized Organization"
                            text="Through a decentralized platform, guild members will get to decide and vote on the direction the guild will take and set the course of it's future. Guild members will have the ability to contribute services to the hubs"
                        />
                    </CardDeck>
                    <div className="c1-div1">
                        <h1>You Have Been Invited To Join The Guild of GCC!</h1>
                        <h3>GCC is an exclusive guild of like minded individuals who support the disruptive nature of cryptocurencies into mainstream commerce and finance. It acts as a forum and space for the unrepresented and represented communities in the cryptocurrency space. Through borderless collaboration between its members, GCC aims to make cryptocurrencies the mainstream currency of the future.
                        </h3>
                    </div>
                    <div  className="c1-div2-title">
                        <h1>WHAT WE AIM TO ACHIEVE</h1>
                    </div>
                    <div className="c1-div2">
                        <CardDeck>
                            <RectCard
                                image={Ipad}
                                subtitle="Hubs and forums to share and implement ideas."

                            />
                            <RectCard
                                image={Exchange}
                                subtitle="Facilitate exchange between crypto and fiat currencies."

                            />
                            <RectCard
                                image={Tablet}
                                subtitle="Cryptocurrency based services to support trade and commerce."
                            />
                            <RectCard
                                image={Map}
                                subtitle="Establish networks of crossborder collaboration."
                            />
                        </CardDeck>
                    </div>
                    <div className="c1-div3">
                        <h1>Five Cities - Five Decentralized Hubs</h1>
                        <div className="c1-div3-bd">
                            <div className="img-bd"> 
                                <img src="https://peiwc-test1445460803.netdna-ssl.com/wp-content/uploads/2016/02/san-francisco-is-americas-snobbiest-city-according-to-the-rest-of-the-country.jpg" alt="san-francisco"/>
                                <div className="overlay">
                                    <span>San Francisco</span>
                                </div>
                            </div>
                            <div className="img-bd">
                                <img src="http://hdqwalls.com/wallpapers/shanghai-cityscape.jpg" alt="shanghai"/>
                                <div className="overlay">
                                    <span>Shanghai</span>
                                </div>
                            </div>
                            <div className="img-bd">
                                <img src="https://s-media-cache-ak0.pinimg.com/originals/e9/c3/08/e9c3082b5da703b75d65003bc00e3f68.jpg" alt="new-york"/>
                                <div className="overlay">
                                    <span>New York</span>
                                </div>
                            </div>
                            <div className="img-bd">
                                <img src="https://ak8.picdn.net/shutterstock/videos/311344/thumb/1.jpg" alt="zurich"/>
                                <div className="overlay">
                                    <span>Zurich</span>
                                </div>
                            </div>
                            <div className="img-bd">
                                <img src="http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOP10/top-10-short-things-to-do-in-bangkok/teaserMultiLarge/imageHilight/teaser.jpeg.jpg" alt="singapore"/>
                                <div className="overlay">
                                    <span>Bangkok</span>
                                </div>
                            </div>
                            <div className="img-bd">
                                <img src="https://www.industry.nsw.gov.au/__data/assets/image/0011/56837/aerial-sydney.jpg" alt="singapore"/>
                                <div className="overlay">
                                    <span>Sydney</span>
                                </div>
                            </div>
                        </div>
                        <h3>Blockchain powered decentralized guild hubs for facilitating trade and exchange between cyptocurrencies. <br/>Multicity hubs powered by cryptocurrencies using real-world scenarios in support of the implementation of cryptocurrencies into mainstream finance and commerce.
                        </h3>
                    </div>
                    <div  className="c1-div4-title">
                        <h1>THE CAMPAIGN</h1>
                    </div>
                    <div className="c1-div4">
                        <h1>Be Part Of The Change!</h1>
                    </div>
                    <div  className="c1-div5-title">
                        <h1>JOIN THE GUILD</h1>
                    </div>
                    <div className="c1-div5">
                        <h1>Be Part Of The Change</h1>
                        <div className="test-div">
                        <div className="test">ETH</div>
                        <div className="test">GNO</div>
                        <div className="test">NEO</div>
                        <div className="test">BCC</div>
                        <div className="test">BTC</div>
                        <div className="test">XRP</div>
                        <div className="test">LTC</div>
                        <div className="test">DAO</div>
                        <div className="test">STR</div>
                        <div className="test">EOS</div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;

