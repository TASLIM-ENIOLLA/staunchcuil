import {Fragment} from 'react'
import Header from '/components/pages/Header'
import Features from '/components/pages/Features'
import TopRibbon from '/components/pages/TopRibbon'

export default function Index(){
    return (
        <Fragment>
            <header id = 'home' className = 'theme-bg py-4'>
                <div className = 'container'>
                    <div className = 'row j-c-space-between'>
                        <div className = 'col-auto'>
                            <img width = '100' src = '/vercel.svg' />
                        </div>
                        <div className = 'col-auto'>
                            <div className = 'row a-i-c text-white'>
                                <div className = 'col-auto mx-3'>
                                    <a href = 'mailto://staunchcuilservices@gmail'>staunchcuilservices@gmail</a>
                                </div>
                                <div className = 'col-auto mx-3'>
                                    <a href = 'tel://+91-9010-123-200'>+91-9010-123-200</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className = 'bg-dark py-4 position-sticky left-0 top-0' style = {{zIndex: 100}}>
                <div className = 'container'>
                    <div className = 'row text-white'>
                        <div className = 'col-auto'>
                            <a href = '#home' className = 'hash-links text-capitalize mr-4'>home</a>
                        </div>
                        <div className = 'col-auto'>
                            <a href = '#about' className = 'hash-links text-capitalize mr-4'>about us</a>
                        </div>
                        <div className = 'col-auto'>
                            <a href = '#services' className = 'hash-links text-capitalize mr-4'>services</a>
                        </div>
                        <div className = 'col-auto'>
                            <a href = '#contact' className = 'hash-links text-capitalize mr-4'>contact us</a>
                        </div>
                        <div className = 'col-auto'>
                            <a href = '#join' className = 'hash-links text-capitalize mr-4'>join</a>
                        </div>
                    </div>
                </div>
            </nav>
            <section className = 'hero-bg'>
               <div className = 'container h-100 py-5'>
                    <div className = 'row a-i-c' style = {{minHeight: '250px', height: '70vw', maxHeight: '450px'}}>
                        <div className = 'col-md-9 col-lg-6 text-white'>
                            <h1 className = 'text-capitalize bold mb-5'>best free website template</h1>
                            <h5 className = 'half-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent</h5>
                            <button className = 'btn bg-teal bold text-white text-capitalize px-5 py-3'>
                                book appointment
                            </button>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .hero-bg{
                        background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/slider_1.jpg);
                        background-size: cover;
                        background-position: center;
                    }
                    .image-filter{
                        filter: contrast(1) brightness(.5);
                    }
                `}</style>
            </section>
            <section className = 'bg-white py-5'>
                <div className = 'py-5 container'>
                    <div className = 'row'>
                        <div className = 'col-12 mb-5 text-center pb-4'>
                            <h1 className = 'text-capitalize bold theme-color'>features</h1>
                            <h5 className = 'text-sentence text-muted'>lorem ipsum dolor sit amet consectetur adipiscing</h5>
                        </div>
                        <div className = 'col-12 col-md-6 col-lg-4 col-xl-3 mb-5'>
                            <div className = 'border rounded-2x'>
                                <div className = 'text-muted py-5 text-center text-justify px-4'>
                                    <h5 className = 'text-dark text-capitalize bold mb-4'>programing experts</h5>
                                    <p className = 'm-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-12 col-md-6 col-lg-4 col-xl-3 mb-5'>
                            <div className = 'border rounded-2x'>
                                <div className = 'text-muted py-5 text-center text-justify px-4'>
                                    <h5 className = 'text-dark text-capitalize bold mb-4'>programing experts</h5>
                                    <p className = 'm-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-12 col-md-6 col-lg-4 col-xl-3 mb-5'>
                            <div className = 'border rounded-2x'>
                                <div className = 'text-muted py-5 text-center text-justify px-4'>
                                    <h5 className = 'text-dark text-capitalize bold mb-4'>programing experts</h5>
                                    <p className = 'm-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id = 'about' className = 'py-5 bg-light'>
                <div className = 'container'>
                    <div className = 'row a-i-c py-5'>
                        <div className = 'col-lg-7 mb-5'>
                            <h1 className = 'text-capitalize bold theme-color mb-4'>about us</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit mi, sed convallis nisi eleifend eget. Morbi vel magna odio. Lorem ipsum dolor consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est ipsum dolor sit arcu.
                            </p>
                            <p>
                                Ut ullamcorper ac eros nec molestie. Curabitur luctus dui fringilla magna laoreet lacinia. Pellentesque velit ante, convallis quis justo vel, condimentum tempus diam. Donec vitae pretium lectus. Nullam faucibus nulla sit amet tincidunt gravida. Maecenas posuere pharetra tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent molestie lectus in arcu pharetra pulvinar. Donec cursus diam id quam accumsan maximus. Morbi ac tincidunt quam, quis cursus urna. Pellentesque in consectetur ante, a efficitur nisi.
                            </p>
                        </div>
                        <div className = 'col-lg-5 mb-5'>
                            <img src = '/images/about.jpg' className = 'bg-white p-2 rounded-lg shadow d-block w-100' />
                        </div>
                    </div>
                </div>
            </section>
            <section id = 'services' className = 'bg-teal py-5'>
                <div className = 'container'>
                    <div className = 'row pt-5'>
                        <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                            <div className = 'text-center text-white'>
                                <PrcentageComponent percentage = '74' />
                                <h5 className = 'bold text-capitalize mb-4'>software development</h5>
                                <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                            </div>
                        </div>
                        <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                            <div className = 'text-center text-white'>
                                <PrcentageComponent percentage = '74' />
                                <h5 className = 'bold text-capitalize mb-4'>software training</h5>
                                <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                            </div>
                        </div>
                        <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                            <div className = 'text-center text-white'>
                                <PrcentageComponent percentage = '74' />
                                <h5 className = 'bold text-capitalize mb-4'>health insurance</h5>
                                <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                            </div>
                        </div>
                        <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                            <div className = 'text-center text-white'>
                                <PrcentageComponent percentage = '74' />
                                <h5 className = 'bold text-capitalize mb-4'>life insurance</h5>
                                <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                            </div>
                        </div>
                        <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                            <div className = 'text-center text-white'>
                                <PrcentageComponent percentage = '74' />
                                <h5 className = 'bold text-capitalize mb-4'>real estate</h5>
                                <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className = 'bg-light py-5'>
                <div className = 'container'>
                    <div className = 'row py-5'>
                        <div className = 'col-12 mb-5 text-center'>
                            <h1 className = 'text-capitalize'>our services</h1>
                        </div>{
                            Array(10).fill('').map((_, index) => (
                                <div className = 'col-lg-3 col-md-6 col-12 mb-5' key = {index}>
                                    <ServicesCard />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <footer className = 'py-5 bg-dark text-white'>
                <div className = 'container'>
                    <div className = 'row py-5'>
                        <div className = 'col-lg-4 mb-5'>
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
                                    <a className = 'd-block mb-1' href = 'mailto://info@smarteyeapps.com'>info@smarteyeapps.com</a>
                                    <a className = 'd-block mb-1' href = 'mailto://sales@smarteyeapps.com'>sales@smarteyeapps.com</a>
                                </div>
                            </div>
                            <div className = 'row py-3 a-i-c'>
                                <div className = 'col-auto'>
                                    <span className = 'bi-phone fo-s-20'></span>
                                </div>
                                <div className = 'col'>
                                    <a className = 'd-block mb-1' href = 'tel://+23 323 43434'>+23 323 43434</a>
                                    <a className = 'd-block mb-1' href = 'tel://+1 3232 434 55'>+1 3232 434 55</a>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-4 mb-5'>
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
                        <div className = 'col-lg-4 mb-5'>
                            <h5 className = 'text-capitalize bold mb-4'>easy tags</h5>
                            <div className = 'row'>
                                <div className = 'col-auto mb-4'>
                                    <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>finance</div>
                                </div>
                                <div className = 'col-auto mb-4'>
                                    <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>web design</div>
                                </div>
                                <div className = 'col-auto mb-4'>
                                    <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>internet pro</div>
                                </div>
                                <div className = 'col-auto mb-4'>
                                    <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>node js</div>
                                </div>
                                <div className = 'col-auto mb-4'>
                                    <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>java swing</div>
                                </div>
                                <div className = 'col-auto mb-4'>
                                    <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>angular js</div>
                                </div>
                                <div className = 'col-auto mb-4'>
                                    <div className = 'border border-white rounded-lg px-3 py-2 text-capitalize'>vue js</div>
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
                                    <span className = 'bi-facebook fo-s-18'></span>
                                </div>
                                <div className = 'col-auto'>
                                    <span className = 'bi-github fo-s-18'></span>
                                </div>
                                <div className = 'col-auto'>
                                    <span className = 'bi-pinterest fo-s-18'></span>
                                </div>
                                <div className = 'col-auto'>
                                    <span className = 'bi-twitter fo-s-18'></span>
                                </div>
                                <div className = 'col-auto'>
                                    <span className = 'bi-google fo-s-18'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

function PrcentageComponent({percentage}){
    return (
        <div style = {{border: '4px solid white', width: '100px', height: '100px'}} className = 'rounded-circle d-inline-flex a-i-c j-c-c bold mb-4 fo-s-18'>{parseInt(percentage)}%</div>
    )
}

function ServicesCard(){
    return (
        <Fragment>
            <div className = 'row a-i-c mb-3'>
                <div className = 'col-auto'>
                    <span className = 'bi-lightbulb-fill fa-2x'></span>
                </div>
                <div className = 'col'>
                    <div className = 'bold text-capitalize fo-s-15'>UI Designing</div>
                </div>
            </div>
            <p className = 'text-capitalize text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit mi, sed convallis nisi eleifend eget. Morbi vel magna odio.
            </p>
            <div>
                <a href = '#' className = 'text-capitalize text-teal underline'>read more</a>
            </div>
        </Fragment>
    )
}