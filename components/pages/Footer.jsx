export default function Footer(){
	return (
		<footer className = 'py-5 bg-dark text-white'>
            <div className = 'container'>
                <div className = 'row py-5'>
                    <div className = 'col-lg-4 col-md-6 mb-5'>
                        <h5 className = 'text-capitalize bold mb-4'>about us</h5>
                        <p>Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non scelerisque augue. Proin et sollicitudin velit.</p>
                        <div className = 'row py-3 a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'bi-geo-alt fo-s-20'></span>
                            </div>
                            <div className = 'col'>
                                <div>BlueDart Marthandam (K.K District) Tamil Nadu, IND</div>
                            </div>
                        </div>
                        <div className = 'row py-3 a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'bi-envelope-open fo-s-20'></span>
                            </div>
                            <div className = 'col'>
                                <a href = 'mailto://staunchcuilservices@gmail'>staunchcuilservices@gmail</a>
                            </div>
                        </div>
                        <div className = 'row py-3 a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'bi-phone fo-s-20'></span>
                            </div>
                            <div className = 'col'>
                                <a href = 'tel://+91-9010-123-200'>+91-9010-123-200</a>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-lg-4 col-md-6 mb-5'>
                        <h5 className = 'text-capitalize bold mb-4'>links</h5>
                        <div className = 'row pb-4 a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'bi-chevron-double-right fo-s-18'></span>
                            </div>
                            <div className = 'col'>
                                <a className = 'text-capitalize bold hash-links' href = 'home'>home</a>
                            </div>
                        </div>
                        <div className = 'row pb-4 a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'bi-chevron-double-right fo-s-18'></span>
                            </div>
                            <div className = 'col'>
                                <a className = 'text-capitalize bold hash-links' href = 'about'>about us</a>
                            </div>
                        </div>
                        <div className = 'row pb-4 a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'bi-chevron-double-right fo-s-18'></span>
                            </div>
                            <div className = 'col'>
                                <a className = 'text-capitalize bold hash-links' href = 'services'>services</a>
                            </div>
                        </div>
                        <div className = 'row pb-4 a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'bi-chevron-double-right fo-s-18'></span>
                            </div>
                            <div className = 'col'>
                                <a className = 'text-capitalize bold hash-links' href = 'contact'>contact us</a>
                            </div>
                        </div>
                        <div className = 'row pb-4 a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'bi-chevron-double-right fo-s-18'></span>
                            </div>
                            <div className = 'col'>
                                <a className = 'text-capitalize bold hash-links' href = 'join'>join</a>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-lg-4 col-md-6 mb-5'>
                        <h5 className = 'text-capitalize bold mb-4'>features</h5>
                        <div className = 'row'>
                            <div className = 'col-auto mb-4'>
                                <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>web design</div>
                            </div>
                            <div className = 'col-auto mb-4'>
                                <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>web development</div>
                            </div>
                            <div className = 'col-auto mb-4'>
                                <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>software development</div>
                            </div>
                            <div className = 'col-auto mb-4'>
                                <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>life insurance</div>
                            </div>
                            <div className = 'col-auto mb-4'>
                                <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>real estate</div>
                            </div>
                            <div className = 'col-auto mb-4'>
                                <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>health insurance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'container'>
                <div className = 'row a-i-c j-c-space-between'>
                    <div className = 'col-lg-auto py-2'>
                        <div>{new Date().getFullYear()} &copy; All Rights Reserved | Designed and Developed by Taslim Eniolla</div>
                    </div>
                    <div className = 'col-lg-auto'>
                        <div className = 'row'>
                            <div className = 'col-auto'>
                                <a href = ''>
                                    <span className = 'bi-facebook fo-s-18'></span>
                                </a>
                            </div>
                            <div className = 'col-auto'>
                                <a href = ''>
                                    <span className = 'bi-github fo-s-18'></span>
                                </a>
                            </div>
                            <div className = 'col-auto'>
                                <a href = ''>
                                    <span className = 'bi-pinterest fo-s-18'></span>
                                </a>
                            </div>
                            <div className = 'col-auto'>
                                <a href = ''>
                                    <span className = 'bi-twitter fo-s-18'></span>
                                </a>
                            </div>
                            <div className = 'col-auto'>
                                <a href = ''>
                                    <span className = 'bi-google fo-s-18'></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
	)
}