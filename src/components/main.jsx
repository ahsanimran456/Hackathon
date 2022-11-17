import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./assests/images/JAV03145.JPG"
import imageanimate from "./assests/images/11.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faG } from "@fortawesome/free-solid-svg-icons";
import Accordion from 'react-bootstrap/Accordion';

function Main() {
    return (
        <div className="mainsection">
            <div className="background"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <span className="title1">
                            I'm
                        </span>
                        <h3 className="title2">
                            Muhammad Ahsan
                        </h3>
                        <p className="title3">
                            Front-End-Developer
                        </p>
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="" className="fb"><FontAwesomeIcon icon={faFacebook} /></a>

                                </li>
                                <li>
                                    <a href="" className="insta"> <FontAwesomeIcon icon={faInstagram} /></a>

                                </li>
                                <li>
                                    <a href="" className=" gmail"><FontAwesomeIcon icon={faG} /></a>

                                </li>
                                <li>
                                    <a href="" className="whatsapp "><FontAwesomeIcon icon={faWhatsapp} /></a>

                                </li>
                                <li>
                                    <a href="" className=" linkdin"><FontAwesomeIcon icon={faLinkedin} /></a>

                                </li>
                                <li>
                                    <a href="" className=" github"><FontAwesomeIcon icon={faGithub} /></a>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 right">
                        <div className="right">
                            <div className="profile"></div>
                            <span className="animate1"></span>
                            <span className="animate2"></span>
                            <span className="animate3"></span>
                        </div>
                    </div>
                </div>
            </div>
            <span className="backanimate">
                <img src={imageanimate} alt="" />
            </span>
            <span className="backanimate2">
                <img src={imageanimate} alt="" />
            </span>
            <span className="backanimate3">
                <img src={imageanimate} alt="" />
            </span>
            <span className="backanimate4">
                <img src={imageanimate} alt="" />
            </span>
        </div>
    )
}

function Data() {
    return (
        <div className="data">
            <div className="container">
                <div className="content">
                    <Accordion>
                        <Accordion.Item eventKey="0" className="contentdata">
                            <Accordion.Header>
                                <div className="headerdiv">
                                    <div className="icon"></div>
                                    <div className="acordheading">
                                        Aboutme
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className="acordbody">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="contentdata">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey="3" className="contentdata">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="contentdata">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                </div>
            </div>
        </div>
    )
}
export { Main, Data }