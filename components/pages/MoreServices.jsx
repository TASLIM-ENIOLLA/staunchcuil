import {Fragment} from 'react'

export default function MoreServices(){
	return (
		<section className = 'bg-light py-5'>
            <div className = 'container'>
                <div className = 'row py-5'>
                    <div className = 'col-12 mb-5 text-center'>
                        <h1 className = 'text-capitalize'>our services</h1>
                    </div>{
                        Array(10).fill('').map((_, index) => (
                            <div className = 'col-lg-3 col-md-6 col-12 mb-5' key = {index}>
                                <ServicesCard />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
	)
}

function ServicesCard(){
    return (
        <Fragment>
            <div className = 'row a-i-c mb-3'>
                <div className = 'col-auto'>
                    <span className = 'bi-lightbulb-fill fa-2x'></span>
                </div>
                <div className = 'col'>
                    <div className = 'bold text-capitalize fo-s-15'>UI Designing</div>
                </div>
            </div>
            <p className = 'text-capitalize text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit mi, sed convallis nisi eleifend eget. Morbi vel magna odio.
            </p>
            <div>
                <a href = '#' className = 'text-capitalize text-teal underline'>read more</a>
            </div>
        </Fragment>
    )
}