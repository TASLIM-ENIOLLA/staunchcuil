import {Fragment} from 'react'
import Script from 'next/script'

import '/public/css/globals.css'

export default function App({Component, pageProps}){
    return (
        <Fragment>
            <Script src = '/js/hash-links.js'></Script>
            <Component {...pageProps} />
        </Fragment>
    )
}
