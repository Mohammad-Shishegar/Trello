import React, { Component } from "react"
import { FaSearch, FaBookmark, FaComment, FaComments, FaHome, FaPlaneDeparture, FaKey, FaMap, FaStar, FaMapMarkedAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa"
import "./sass/main.scss";

class Trello extends Component {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <img src={require("../image/logo.png")} alt={"trillo logo"} className="logo" />
                    <form action="#" className="search">
                        <input type={"text"} className="search__input" placeholder="Search hotels" />
                        <button className="search__button">
                            <FaSearch className="search__icon" color={"#999"} />
                        </button>
                    </form>

                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <FaBookmark className="user-nav__icon" color={"#777"} />
                            <span className="user-nav__notification">7</span>
                        </div>
                        <div className="user-nav__icon-box">
                            <FaComments className="user-nav__icon" color={"#777"} />
                            <span className="user-nav__notification">13</span>
                        </div>
                        <div className="user-nav__user">
                            <img src={require("../image/user.jpg")} alt="User photo" className="user-nav__user-photo" />
                            <span className="user-nav__user-name">Jonas</span>
                        </div>
                    </nav>
                </header>
                <div className="content">
                    <nav className="sidebar">
                        <ul className="side-nav">
                            <li className="side-nav__item side-nav__item__active">
                                <a href="#" className="side-nav__link">
                                    <FaHome className="side-nav__icon" />
                                    <span>Hotel</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <FaPlaneDeparture className="side-nav__icon" />
                                    <span>Flight</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <FaKey className="side-nav__icon i-font" />
                                    <span className="i-font">Car Rental</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <FaMap className="side-nav__icon" />
                                    <span>Tours</span>
                                </a>
                            </li>
                        </ul>
                        <div className="legal">
                            &copy; 2017 by trillo. All right reserved.
                        </div>
                    </nav>


                    <main className="hotel-view">
                        <div className="gallery">
                            <figure className="gallery__item">
                                <img src={require("../image/hotel-1.jpg")} alt="photo of hotel 1" className="gallery__photo" />
                            </figure>
                            <figure className="gallery__item">
                                <img src={require("../image/hotel-2.jpg")} alt="photo of hotel 2" className="gallery__photo" />
                            </figure>
                            <figure className="gallery__item">
                                <img src={require("../image/hotel-3.jpg")} alt="photo of hotel 3" className="gallery__photo" />
                            </figure>
                        </div>

                        <div className="overview">
                            <h1 className="overview__heading">
                                Hotel Las Palmas
                            </h1>
                            <div className="overview__stars">
                                <FaStar className="overview__icon-star" />
                                <FaStar className="overview__icon-star" />
                                <FaStar className="overview__icon-star" />
                                <FaStar className="overview__icon-star" />
                                <FaStar className="overview__icon-star" />
                            </div>
                            <div className="overview__location">
                                <FaMapMarkerAlt className="overview__icon-location" />
                                <button className="btn-inline">Albufeira, Portugal</button>
                            </div>
                            <div className="overview__rating">
                                <div className="overview__rating-average">8.6</div>
                                <div className="overview__rating-count">429 votes</div>
                            </div>
                        </div>

                        <div className="detail">
                            <div className="description">
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui, neque iure exercitationem vitae
                                    hic placeat, recusandae deserunt, nostrum eius autem. Dolorum adipisci obcaecati omnis quia at saepe,
                                    amet, repudiandae porro dolor expedita nemo? Obcaecati eum itaque iusto sequi inventore.
                                </p>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui, neque iure exercitationem vitae
                                    Dolorum adipisci obcaecati omnis quia at saepe,
                                    amet, repudiandae porro dolor expedita nemo? Obcaecati eum itaque iusto sequi inventore.
                                </p>
                                <ul className="list">
                                    <li className="list__item"><FaChevronRight className="list__icon" /> Close to the beach</li>
                                    <li className="list__item"><FaChevronRight className="list__icon" /> Breakfast included</li>
                                    <li className="list__item"><FaChevronRight className="list__icon" /> Free airport shuttle</li>
                                    <li className="list__item"><FaChevronRight className="list__icon" /> Free wifi in al rooms</li>
                                    <li className="list__item"><FaChevronRight className="list__icon" /> Air conditioning and heating</li>
                                    <li className="list__item"><FaChevronRight className="list__icon" /> Pets allowed</li>
                                    <li className="list__item"><FaChevronRight className="list__icon" /> Perfect for families</li>
                                </ul>
                                <div className="recommend">
                                    <p className="recommend__count">
                                        Lucy and 3 other friends recommend this hotel
                                    </p>
                                    <div className="recommend__friends">
                                        <img src={require("../image/user-3.jpg")} alt="Friend 1" className="recommend__photo" />
                                        <img src={require("../image/user-4.jpg")} alt="Friend 2" className="recommend__photo" />
                                        <img src={require("../image/user-5.jpg")} alt="Friend 3" className="recommend__photo" />
                                        <img src={require("../image/user-6.jpg")} alt="Friend 4" className="recommend__photo" />
                                    </div>
                                </div>
                            </div>
                            <div className="user-reviews">
                                <figure className="review">
                                    <blockquote className="review__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique ex quasi dolor alias,
                                    </blockquote>
                                    <figcaption className="review__user">
                                        <img src={require("../image/user-1.jpg")} alt="user 1" className="review__photo" />
                                        <div className="review__user-box">
                                            <p className="review__user-name">Nick Smith</p>
                                            <p className="review__user-date">Feb 23rd, 2017</p>
                                        </div>
                                        <div className="review__rating">7.8</div>
                                    </figcaption>
                                </figure>
                                <figure className="review">
                                    <blockquote className="review__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique ex quasi dolor alias,
                                    </blockquote>
                                    <figcaption className="review__user">
                                        <img src={require("../image/user-2.jpg")} alt="user 1" className="review__photo" />
                                        <div className="review__user-box">
                                            <p className="review__user-name">Mary Thomas</p>
                                            <p className="review__user-date">Sept 13th, 2017</p>
                                        </div>
                                        <div className="review__rating">9.3</div>
                                    </figcaption>
                                </figure>
                                <button className="btn-inline">Show all <span>&rarr;</span></button>
                            </div>

                        </div>
                        <div className="cta">
                            <h2 className="cta__book-now">
                                Good news! We have 4 free rooms for your selected dates!
                                </h2>
                            <button className="btn">
                                <span className="btn__visible">Book now</span>
                                <span className="btn__invisible">only 4 rooms left</span>

                            </button>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Trello