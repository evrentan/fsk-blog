import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";


const AboutMe = () => {

    return (
        <div className="container" style={{ fontSize: '10px' }}>
            <Header />
            <div className="row">

                <img
                    style={{ width: '150px', height: '170px', padding: '0px', marginTop: '20px', border: '2px solid linear-gradient(red, yellow)' }}
                    src={`../../profil.PNG`}
                    alt=""
                    className="rounded-circle mx-auto d-block" />

                <div style={{ fontFamily: 'JetBrains Mono', marginTop: '10px' }}>
                    <h3 style={{ display: 'inline-block' }}>Selam Herkese</h3>

                    <p>
                        Ben Furkan Şahin KULAKSIZ (FSK) <br></br>
                        Aslında basit bir Software Developer'ım. VBT Yazılım'da ARGE ekibinde Software Developer olarak çalışıyorum. <br></br>
                        Genellikle JVM (Genelde Java - Spring Boot) ve Javascript dillerinde / frameworklerinde kendimi geliştiriyorum.<br></br>
                        Aynı Zamanda <a style={{ textDecoration: 'none' }} href="https://www.turkeyjava.com/">Turkey Java Community</a> nin Co-Founder'iyim
                    </p>
                </div>

            </div>

            <hr />
            <Footer />
        </div>
    );

}

export default AboutMe;