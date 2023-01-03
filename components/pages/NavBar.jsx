import {useRouter} from 'next/router'

const URL = [
    {uri: ['/', '#home'], name: 'home'},
    {uri: ['/about', '#about'], name: 'about us'},
    {uri: ['/services', '#services'], name: 'services'},
    {uri: ['/book-appointment'], name: 'contact us'},
    {uri: ['/join'], name: 'join'},
]

function appropriateURI(asPath, uri){
    if(asPath === '/' && !uri[1]) return uri[0]
    else return uri[1]
}

export default function NavBar(){
    const {asPath} = useRouter()

	return (
		<nav className = 'd-none d-md-block bg-dark shadow py-4 position-sticky left-0 top-0' style = {{zIndex: 100}}>
            <div className = 'container'>
                <div className = 'row text-white'>{
                    URL.map(({name, uri}) => (
                        <div className = 'col-auto' key = {uri}>
                            <a href = {appropriateURI(asPath, uri)} className = {`${asPath === '/' ? 'hash-links' : ''} text-capitalize mr-4`}>{name}</a>
                        </div>
                    ))
                }</div>
            </div>
        </nav>
	)
}