export default function Services(){
	return (
		<section id = 'services' className = 'bg-teal py-5'>
            <div className = 'container'>
                <div className = 'row pt-5'>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>software development</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>software training</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>health insurance</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>life insurance</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>real estate</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>E-Tendering</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>Planning and Construction</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>Realtor</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                    <div className = 'col-lg-3 col-md-6 col-12 mb-5'>
                        <div className = 'text-center text-white'>
                            <PercentageComponent percentage = '74' />
                            <h5 className = 'bold text-capitalize mb-4'>Building Elevation and Drawings</h5>
                            <p className = 'text-capitalize half-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	)
}

function PercentageComponent({percentage}){
    return (
        <div style = {{border: '4px solid white', width: '100px', height: '100px'}} className = 'rounded-circle d-inline-flex a-i-c j-c-c bold mb-4 fo-s-18'>{parseInt(percentage)}%</div>
    )
}