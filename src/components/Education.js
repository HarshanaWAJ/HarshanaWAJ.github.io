import React from 'react';
import { Container } from "react-bootstrap";
import sliitLogo from '../assets/img/SLIIT_Logo_Crest.png';
import kmvLogo from '../assets/img/kmv-logo.jpeg';

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <div className="edu-header">
                    <center>
                        <h1>Education</h1>
                    </center>
                </div>
                <div className="timeline">
                    <div className="edu-item left">
                        <div className="edu-content">
                            <h3>BSc. (Hons.) in Information Technology</h3>
                            <p>Sri Lanka Institute of Information Technology</p>
                            <p>Currently, pursuing a BSc(Hons) degree programme specialising in software engineering in Sri Lanka Institute of Information Technology</p>
                            <span className="edu-date">July 2021 - Present</span>
                        </div>
                        <div className="edu-logo">
                            <img src={sliitLogo} alt="SLIIT" />
                        </div>
                    </div>
                    <div className="edu-item right">
                        <div className="edu-logo">
                            <img src={kmvLogo} alt="KMV" />
                        </div>
                        <div className="edu-content">
                            <h3>Advanced Level</h3>
                            <p>Kothalawala Maha Vidyalaya, Kaduwela</p>
                            <p>Passed General Certificate of Education Advanced Level Exam - (Commerce Stream) Economy - B, Information & Communication Technology - B, Accounting - C</p>
                            <span className="edu-date">2017 - 2019</span>
                        </div>
                    </div>
                    <div className="edu-item left">
                        <div className="edu-content">
                            <h3>Ordinary Level</h3>
                            <p>Kothalawala Maha Vidyalaya, Kaduwela</p>
                            <p>Passed General Certificate of Education Ordinary Level Exam with 5 As and 4Cs</p>
                            <span className="edu-date">2014 - 2016</span>
                        </div>
                        <div className="edu-logo">
                            <img src={kmvLogo} alt="KMV" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
