document.querySelectorAll('.hash-links')
.forEach((each) => each.addEventListener(
	'click',
	(e) => {
		const {hash} = e.target
		
		if(!!hash){
			e.preventDefault()
			const section = document.querySelector(hash)
			if(section) section.scrollIntoView({behavior: 'smooth'})
		}
	}
))

window.onload = () => {
	const {search} = window.location

	const section = document.querySelector(`#${search}`).scrollIntoView({behavior: 'smooth'})
}