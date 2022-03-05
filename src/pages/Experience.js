import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";


const Experience = () => {

    return (
        <div className="container">
            <Header />

            <hr></hr>

            <br></br>

            <div className="col text-center">
                <button 
                    type="button" 
                    class="btn btn-outline-primary">
                        <a style={{textDecoration: 'none'}} download={`Furkan_Sahin_Kulaksiz`} href={`../../cv.pdf`}>Downlad My CV</a>
                </button>
            </div>
            <ul class="list-group list-group-flush" style={{ marginTop: '20px' }}>
                <li class="list-group-item">
                    <h4>VBT Yazılım A.Ş.</h4>
                    <p>
                        17.05.2021 - Devam
                        <br />Arge Yazılım Mühendisi<br />
                        Geliştirmekte olduğumuz görüntülü konuşma sistemine yeni feature'ların eklenmesi ve bugların fixlenmesi<br />
                        <i>Node.JS - Vue.JS - Electron.JS - Docker - MongoDB</i>
                    </p>
                </li>
                <br></br>
                <li class="list-group-item">
                    <h4>Çekino Savunma</h4>
                    <p>
                        01.12.2021  -  01.02.2022
                        <br />Yazılım Mühendisi<br />
                        Var olan Siber Güvenlik ürününde geliiştirmelerin yapılması<br />
                        <i>Core Java - React - PostgreSQL</i>
                    </p>
                </li>
                <br></br>
                <li class="list-group-item">
                <h4>Vektörel Bilişim Akademi</h4>
                    <p>
                        10.2020 - 05.2021
                        <br />Part Time Java Eğitmenliği<br />
                        Yazılıma en temelden başlayan öğrenciler için yazılım eğitmenliği. Bu kapsamda aşağıdaki teknolojilerin
                        bazıları temel düzeyde, bazıları ise orta düzeyde olacak şekilde öğrencilere aktarılmıştır.<br />
                        <i>Java - PostgreSQL - JDBC - Java Swing - Spring Boot - HTML - CSS - Bootstrap - JavaScript - TypeScript - Kotlin</i>
                    </p>
                </li>
                <br></br>
                <li class="list-group-item">
                <h4>Keydata Bilişim Teknolojileri</h4>
                    <p>
                        01.11.2019 - 30.11.2020
                        <br />Junior Developer<br />
                        Var olan Hastane Bilgi Yönetim Sistemi (HBYS) ürününde bugfixlerin yapılması ya da kullanıcılardan gelen
                        istekler doğrultusunda geliştirmelerin ve güncellemelerin yapılması.<br />
                        <i>Java - EJB - Ext.JS - Oracle</i><br />
                    </p>
                </li>
                <br></br>
                <li class="list-group-item">
                <h4>IND Bilişim</h4>
                    <p>
                        07.2019 - 09.2020
                        <br />Stajer<br />
                        Şirketin istekleri doğrultusunda geliştirmelerin yapılması<br />
                        <i>Java - EJB - Ext.JS - Oracle</i>
                    </p>
                </li>
                <br></br>
                <li class="list-group-item">
                <h4>AArtı Yazılım</h4>
                    <p>
                        10.2018 - 12.2018
                        <br />Gönüllü Çalışan<br />
                        Sektörü deneyimlemek için kısa süreli çalıştığım bir firma. Var olan ürünün veritabanında istekler ya da
                        ihtiyaçlar doğrultusunda sorguların yazılması<br />
                        <i>MsSQL</i>
                    </p>
                </li>
                <br></br>
                <li class="list-group-item">
                <h4>Konya Selçuk Üniversitesi Bilgi İşlem</h4>
                    <p>
                        06.2018 - 09.2018
                        <br />Stajyer<br />
                        İlk zorunlu stajım. Web Teknolojilerine ilgim bu stajımda başladı. Mesleki anlamda Yazılım Teknolojilerinin
                        sektörde nasıl kullanıldığıyla alakalı ilk çalışmalarımı burada yaptım.<br />
                        <i>HTML - CSS - Bootstrap - JavaScript - .net Core - LINQ</i>
                    </p>
                </li>
            </ul>
            <br></br>

            <hr></hr>

            <Footer />
        </div>
    );
}

export default Experience;