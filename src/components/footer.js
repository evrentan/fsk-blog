import React from "react";

const Footer = () => {
    return (

        <div className="container">
            <footer className="text-center text-lg-start text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a style={{display: 'inline-block', textDecoration: 'none'}} href="https://twitter.com/0xfsk" target="_blank" className="me-4 text-reset">
                            <p className="twitter">Twitter</p>
                        </a>
                        <a style={{display: 'inline-block', textDecoration: 'none'}} href="https://instagram.com/furkansahinkulaksiz" target="_blank" className="me-4 text-reset">
                            <p className="instagram">Instagram</p>
                        </a>
                        <a style={{display: 'inline-block', textDecoration: 'none'}} href="https://github.com/fsk" target="_blank" className="me-4 text-reset">
                            <p className="github">Github</p>
                        </a>
                        <a style={{display: 'inline-block', textDecoration: 'none'}} href="https://superpeer.com/fsk" target="_blank" className="me-4 text-reset">
                            <p className="superpeer">Superpeer</p>
                        </a>
                        <a style={{display: 'inline-block', textDecoration: 'none'}} href="https://superpeer.com/fskdev" target="_blank" className="me-4 text-reset">
                            <p className="medium">Medium</p>
                        </a>
                    </div>

                </section>

                <div className="text-center p-4">
                    © 2022 Copyright
                    <p className="text-reset fw-bold">All Right Reserved by FSK</p>
                </div>

            </footer>
        </div>
    )
};

export default Footer;