import React from "react";
import { GroupsIcon, TasklistIcon, StatusOnlineIcon } from "../Styles/Styles";
import GenericHeader from "../Components/GenericHeader";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function About({ display }) {
    return (
        <>
            {!display && <GenericHeader title="About Me" page="About Me" />}
            <section className="About">
                <div id="partOne">
                    <div id="aboutPart" className="py-4">
                        <h3 className="py-2">About myself</h3>
                        <p> Hi, I’m Rivojidin. Nice to meet you.</p>
                        <div className="welcome-text">
                            I like to code things from scratch, and enjoy
                            bringing ideas to life in the browser. Since
                            beginning my journey as a web developer nearly a
                            year ago, I've done remote work for small agencies,
                            consulted for small-scale startups, and collaborated
                            with talented people to create digital products for
                            both business and consumer use. I'm quietly
                            confident, naturally curious, and perpetually
                            working on improving my chops one problem at a time.
                        </div>
                        <div className="flexWrapper">
                            <div className="work-item">
                                <StatusOnlineIcon />
                                <p>7 </p>
                                <p>Total Courses </p>
                            </div>
                            <div className="work-item">
                                <TasklistIcon />
                                <p>15 </p>
                                <p>Total Projects</p>
                            </div>
                            <div className="work-item">
                                <GroupsIcon />
                                <p>5 </p>
                                <p>Total Volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="partTwo">
                    <div className="toolsExpert">
                        <h4 className="p-4">SKILLS EXPERTNESS</h4>
                        <p className="text">React.js &#10139; 80%</p>
                        <div className="Progress">
                            <div
                                id="react"
                                className="Progress-bar"
                                role="Progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">JavaScript &#10139; 85%</p>
                        <div className="Progress">
                            <div
                                id="javascript"
                                className="Progress-bar"
                                role="Progressbar"
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">Git &#10139; 90%</p>
                        <div className="Progress">
                            <div
                                id="git"
                                className="Progress-bar"
                                role="Progressbar"
                                aria-valuenow="95"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">Html5 &#10139; 99%</p>
                        <div className="Progress">
                            <div
                                id="html"
                                className="Progress-bar"
                                role="Progressbar"
                                aria-valuenow="99"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">Css3 &#10139; 95%</p>
                        <div className="Progress">
                            <div
                                id="CSS"
                                className="Progress-bar"
                                role="Progressbar"
                                aria-valuenow="95"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <p className="text">Bootstrap &#10139; 80%</p>
                        <div className="Progress">
                            <div
                                id="bootstrap"
                                className="Progress-bar"
                                role="Progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
            {!display && (
                <div className="fullWidth">
                    <Link to="/" className="center bannerBtn">
                        back to home
                    </Link>
                </div>
            )}
            {!display && <Footer />}
        </>
    );
}
