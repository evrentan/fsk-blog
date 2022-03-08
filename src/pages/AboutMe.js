import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";


const AboutMe = () => {

    return (
        <div className="container">
            <Header />
            <hr></hr>
            <div className="row" style={{ fontSize: '20px' }}>

                {/* <img
                    style={{ width: '150px', height: '170px', padding: '2px', float: 'left', marginRight: '30px' }}
                    src={`../../profil.PNG`}
                    alt=""
                    className="rounded-circle mx-auto d-block" /> */}

                <div style={{ fontFamily: 'JetBrains Mono', marginTop: '10px' }}>
                    <h3 style={{ display: 'inline-block' }}>Selam Herkese</h3>

                    <p>
                        Ben Furkan Şahin KULAKSIZ (FSK) (: <br></br>
                        Aslında basit bir Software Developer'ım. VBT Yazılım'da ARGE ekibinde Software Developer olarak çalışıyorum. <br></br>
                        Genellikle JVM (Genelde Java - Spring Boot) ve Javascript dillerinde / frameworklerinde kendimi geliştiriyorum.<br></br>
                        Aynı Zamanda <a style={{ textDecoration: 'none' }} href="https://www.turkeyjava.com/">Turkey Java Community</a> nin Co-Founder'iyim.
                         <br /><br />
                        <p>Kendimi bildim bileli <b>Matematik Sanatı</b>'na karşı bir ilgim vardır. <a href="https://beyinsizler.net" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>beyinsizler.net</a>
                        sayfasında Matematik üzerine metin yazarlığı yaptım. Tarihini tam hatırlamamakla birlikte bulabildiğim yazılarım aslında şunlar;
                        <ul>
                            <li><a href="https://beyinsizler.net/e-sayisi-nedir" rel="noreferrer" style={{ textDecoration: 'none' }}>E Sayısı Nedir.?</a></li>
                            <li><a href="https://beyinsizler.net/tesekkur-etmemiz-gereken-denklemler-ve-denklemlerin-kullanim-alanlari/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>Teşekkür Etmemiz Gereken Denklemler</a></li>
                            <li><a href="https://beyinsizler.net/integral/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>Integral</a></li>
                            <li><a href="https://beyinsizler.net/trigonometri-nedir-3-kenarli-metride-olcu-trigonometri-tarihi/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>3 Kenarlı Metride Ölçü - Trigonometri</a></li>
                        </ul></p>

                        <br />
                        <b>Satranc</b>a karşı da çok özel bir ilgim vardır. 8 yaşımdan beri amatörce oynarım. İlkokulda bir kaç kere öğretmenlerimizin turnuvaya götürdüğünü hatırlıyorum. Ama, ilk majör turnuvam 2009 senesinde Lise1'de yapılan 
                        Ankara Liselerarası turnuvasıydı. Sanırım Ankara genelinde 156. olmuştum. (: Ama bir sonraki sene Ankara Etimesgut ilçesinde takım halinde ilçe şampiyonu olmuştuk. (:

                        <br /><br />
                        Üniversite yıllarında ise yine aktif olmaya çalıştım. Topluluklara üye oldum, hatta kendim topluluk kurdum. Burada bahsetmem gereken topluluk ise <b><i>Bilgisayar bilimlerinin en büyük organizasyonu olan ACM (Association for Computing Machinery)
                        Topluluğu</i></b> nun Selçuk Temsilciliğini almak oldu. Önce <b>Grafik Sanat Yazılım Topluluğu</b> adında faaliyet gösterdik. Sonrasında <b>ACM</b> adı altında faaliyetlerimize devam ettik.

                        <br></br><br></br>
                        Üniversiteden mezun olduktan sonra da faaliyetlere devam ettim aslında. Önce yüksek lisansa kabul aldım. Sonrasında Turkey Java Community'yi Evren Tan Abim ile birlikte kurduk. Aslına bakarsanız kendisinin mental anlamda da 
                        tedrisatından geçiyorum diyebilirim. Ona layık olabilirsem kariyerimde ne mutlu bana. (: Sektörden çok önemli isimler tanıdım bu komünite sayesinde. Serkan Bingöl Abi olsun, Umut Kahraman olsun, Serhat Can olsun hepsiyle muhabbetim genişledi. Umarım çok güzel günler bizi bekliyor. (:


                        <br></br><br></br>
                        <b><i><ins>SON OLARAK</ins></i></b><br></br>
                        Kariyerinde Software Architect olmak isteyen birisiyim ve bu yolda çalışmalarıma son hızla devam ediyorum. (:
                    </p>
                </div>

            </div>

            <hr />
            <Footer />
        </div>
    );

}

export default AboutMe;