import Link from 'next/link'

export default function HeroBg(){
	return (
		<section className = 'hero-bg'>
           <div className = 'container h-100 py-5'>
                <div className = 'row a-i-c' style = {{minHeight: '250px', maxHeight: '450px'}}>
                    <div className = 'col-md-9 col-lg-6 text-white'>
                        <h1 className = 'text-capitalize bold mb-5'>best free website template</h1>
                        <h5 className = 'half-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent</h5>
                        <Link href = '/book-appointment' className = 'btn bg-teal bold text-white text-capitalize px-5 py-3'>
                            book appointment
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hero-bg{
                    background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/slider_1.jpg);
                    background-size: cover;
                    background-position: center;
                }
                .image-filter{
                    filter: contrast(1) brightness(.5);
                }
            `}</style>
        </section>
	)
}
