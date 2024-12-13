import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/style.css'
import groupImg from '../assets/images/Group.png'
import iconImg from '../assets/images/Icon.png'
import featureImg from '../assets/images/main.png'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import fbImg from '../assets/images/fb.png'
import inImg from '../assets/images/in.png'
import twitterImg from '../assets/images/twitter.png'
import utubeImg from '../assets/images/utube.png'
import instaImg from '../assets/images/Instagram.png'


const cardData = [
    {
        id: 1,
        img: card1,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 2,
        img: card2,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 3,
        img: card3,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        hasButton: true,
    },
];

const Boot = () => {
    // const [expanded, setExpanded] = useState(false);

    // const handleToggle = () => {
    //     setExpanded(!expanded);

    const [expanded, setExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
            {/* <Navbar
                expand={false}
                className="container col-12 d-flex justify-content-between align-items-center"
                expanded={expanded}
            >
                <Navbar.Brand href="#" className="fw-bold">
                    Logo
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleToggle}
                    className="border-0"
                    style={{ marginRight: "1rem" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <div className="d-flex flex-column flex-lg-row gap-2">
                        <Button variant="primary" className="buy-now">
                            Purchase Item
                        </Button>
                        <Button variant="secondary" className="buy-now">
                            Login
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar> */}
            {/* Navbar */}
            <Navbar
                expand={false}
                className="container navbar-container col-12 d-flex justify-content-between align-items-center"
                expanded={expanded}
            >
                <Navbar.Brand href="#" className="fw-bold">
                    Logo
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleToggle}
                    className="border-0"
                    style={{ marginRight: "1rem" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <div className="className=d-flex flex-wrap  justify-content-start">
                        <Button variant="primary" className="buy-now me-3" onClick={handleShowModal}>
                            Purchase Item
                        </Button>
                        <Button variant="secondary" className="buy-now">
                            Login
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Purchase Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Please Enter the Item Deatails</h3>
                    <form>

                        <div className="mb-3">
                            <label htmlFor="itemName" className="form-label fw-bold">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="itemName"
                                placeholder="Enter the item name..."
                                className="form-control"
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="itemPrice" className="form-label fw-bold">
                                Price:
                            </label>
                            <input
                                type="number"
                                id="itemPrice"
                                placeholder="Enter the price..."
                                className="form-control"
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="itemDescription" className="form-label fw-bold">
                                Description:
                            </label>
                            <input
                                type="text"
                                id="itemDescription"
                                placeholder="Enter the description..."
                                className="form-control"
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Confirm Purchase
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="container-fluid main-section ">
                <div className="row align-items-center   d-flex justify-content-center align-items-center">
                    <div className="col-lg-8 col-xl-8 col-md-12 mt-md-5 col-sm-12 col-xs-12 mt-sm-5   hero-section ">
                        <h1 className="fw-bold">Introduce Your Product<br></br> Quickly & Efficiently</h1>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
                        </p>
                        <p className="text-muted">
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <div className=" hero-button gap-3">
                            <button className=" purchase-btn">Purchase UI Kit</button>
                            <button className=" light-button">Learn More</button>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12  col-sm-12 col-xs-12  d-none d-md-block  img-container text-center">
                        <img src={groupImg} alt="Hero" className="img-fluid hero-img" />
                    </div>
                </div>
            </div >
            <div className="container card-container d-xl-flex d-lg-flex">
                <div className="row features-section">
                    {/* Text Section */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  features-text ">
                        <h2 className="fw-bold mb-4">Light, Fast & Powerful</h2>
                        <h6 className="text-muted">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h6>
                    </div>


                    <div className=" features-card d-xl-flex d-lg-flex  ">
                        <div className="feature-card col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12 me-3">
                            <img src={iconImg} alt="Featured Icon 1" className="mb-3" />
                            <h3 className="fw-bold">Title Goes Here sddcdf</h3>
                            <h6 className="text-muted">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </h6>
                        </div>
                        <div className="feature-card  col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src={iconImg} alt="Feature Icon 2" className="mb-3" />
                            <h3 className="fw-bold">Title Goes Here</h3>
                            <h6 className="text-muted">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </h6>
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-none d-md-block feature-img">
                        <img src={featureImg} alt="Feature Img" className='img-md-sm-fluid' />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4 info-container">
                    {cardData.map((card) => (
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 info-card  " key={card.id}>
                            <div className="card h-100  " style={{ border: "none", boxShadow: "none", height: "auto" }}>
                                <div className="row g-0" style={{
                                    height: "auto",
                                }}>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-sm-3 col-12">
                                        <div className="info-img me-5">
                                            <img src={card.img} alt={`Card ${card.id}`} className="card-img-top img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="card-body">
                                            <h2 className="card-title h5">{card.title}</h2>
                                            <h6 className="card-description text-muted">{card.description}</h6>
                                            {card.hasButton && (
                                                <button className="button-primary">Purchase Now</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-fluid">
                <div className="row pricing-container mt-sm-5">

                    <div className="col-12 text-center">
                        <div className="pricing-text">
                            <h2>A Price To Suit Everyone</h2>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            </h6>
                        </div>
                    </div>


                    <div className="col-12 text-center">
                        <div className="pricing-design">
                            <h3>$40</h3>
                            <h5>UI Design Kit</h5>
                        </div>
                    </div>


                    <div className="col-12 text-center">
                        <div className="pricing-button">
                            <p>See, One price. Simple.</p>
                            <button className="btn btn-primary">Purchase UI Kit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <div className="container">
                    <div className="row footer-container">

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-wrapper">
                            <p>new Company</p>
                            <h2>Landing</h2>
                            <button className="btn btn-primary">Purchase Now</button>
                        </div>


                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-wrapper">
                            <div className="footer-wrapper-content">
                                <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>


                            <div className="footer-icons-list  ">
                                <a href="#" className="me-3">
                                    <img src={fbImg} alt="fb-icon" />
                                </a>
                                <a href="#" className="me-3">
                                    <img src={inImg} alt="in-icon" />
                                </a>
                                <a href="#" className="me-3">
                                    <img src={twitterImg} alt="twitter-icon" />
                                </a>
                                <a href="#" className="me-3">
                                    <img src={utubeImg} alt="youtube-icon" />
                                </a>
                                <a href="#" className="me-3">
                                    <img src={instaImg} alt="instagram-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Boot


