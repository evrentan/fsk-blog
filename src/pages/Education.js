import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";


const Education = () => {

    return (
        <div className="container">
            <Header />
            <hr></hr>
            <ul class="list-group list-group-flush" style={{ marginTop: '20px' }}>
                <li class="list-group-item">
                    <h4>Yüksek Lisans</h4>
                    <p>Konya Teknik Üniversitesi<br />Bilgisayar Mühendisliği Anabilim Dalı<br/>Yazılım Mühendisliği Programı<br/>Ders Aşaması<br />2021 - Devam</p>
                </li>
                <br></br>
                <li class="list-group-item">
                    <h4>Lisans</h4>
                    <p>Konya Selçuk Üniversitesi<br />Mühendislik Fakültesi - Bilgisayar Mühendisliği<br/>2.79 Ortalama<br/>2014 - 2019<br /></p>
                </li>
                <br></br>
                <li class="list-group-item">
                    <h4>Lise</h4>
                    <p>Elvankent Bilgi Anadolu Lisesi<br />2009 - 2013<br /></p>
                </li>
            </ul>

            <br></br>
            <hr></hr>

            <Footer />
        </div>
    );
}

export default Education;