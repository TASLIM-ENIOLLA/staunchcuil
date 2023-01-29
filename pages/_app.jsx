import {Fragment} from 'react'
import Script from 'next/script'

import '/public/css/globals.css'

export default function App({Component, pageProps}){
    return (
        <Fragment>
            <Component {...pageProps} />
            <Script src = '/js/hash-links.js'></Script>
        </Fragment>
    )
}
