import {useRouter} from 'next/router'
import {URL} from '/data/URL'

function appropriateURI(asPath, uri){
    if(asPath === '/' && !uri[1]) return uri[0]
    else return uri[1]
}

export default function Header(){
    const {route} = useRouter()

	return (
		<header id = 'home' className = 'theme-bg py-3 position-sticky top-0 left-0' style = {{zIndex: 10}}>
            <div className = 'container'>
                <div className = 'row a-i-c j-c-space-between'>
                    <div className = 'col-auto'>
                        <img width = '140' src = '/logo-2.png' />
                    </div>
                    <div className = 'col-auto d-md-none'>
                        <button className = 'bg-clear border-0'>
                            <span className = 'bi-border-width fa-2x text-white'></span>
                        </button>
                    </div>
                    <div className = 'col-auto d-none d-md-block'>
                        <div className = 'row text-white'>{
                            URL.map(({name, uri}) => (
                                <div className = 'col-auto' key = {uri}>
                                    <a href = {appropriateURI(route, uri)} className = {`${route === '/' ? 'hash-links' : ''} text-capitalize mr-4`}>{name}</a>
                                </div>
                            ))
                        }</div>
                    </div>
                </div>
            </div>
        </header>
	)
}