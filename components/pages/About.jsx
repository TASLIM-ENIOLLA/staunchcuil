export default function About(){
	return (
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
	)
}