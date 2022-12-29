export default function Header(){
	return (
		<section className = 'theme-bg position-sticky top-0 shadow py-4'>
            <div className = 'container py-2'>
                <div className = 'row a-i-c j-c-space-between'>
                    <div className = 'col-auto'>
                        <img src = '/vercel.svg' width = '100' />
                    </div>
                    <div className = 'col-auto text-capitalize text-white'>
                        <a className = 'mx-4 d-inline-block' href = '/home'>home</a>
                        <a className = 'mx-4 d-inline-block' href = '/about'>about us</a>
                        <a className = 'mx-4 d-inline-block' href = '/services'>services</a>
                        <a className = 'mx-4 d-inline-block' href = '/contact'>contact us</a>
                        <a className = 'mx-4 d-inline-block' href = '/join'>join</a>
                    </div>
                </div>
            </div>
        </section>
	)
}