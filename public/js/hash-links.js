document.querySelectorAll('.hash-links')
.forEach((each) => each.addEventListener(
	'click',
	(e) => {
		e.preventDefault()

		const {hash} = e.target
		const section = document.querySelector(hash)
		console.log(hash, section)
		if(section) section.scrollIntoView({behavior: 'smooth'})
	}
))