import {Fragment} from 'react'

import About from '/components/pages/About'
import Header from '/components/pages/Header'
import NavBar from '/components/pages/NavBar'
import HeroBg from '/components/pages/HeroBg'
import Footer from '/components/pages/Footer'
import Features from '/components/pages/Features'
import Services from '/components/pages/Services'
import MoreServices from '/components/pages/MoreServices'

export default function Index(){
    return (
        <Fragment>
            <Header />
            <NavBar />
            <HeroBg />
            <Features />
            <About />
            <Services />
            <MoreServices />
            <Footer />
        </Fragment>
    )
}
