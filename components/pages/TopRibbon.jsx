export default function TopRibbon(){
	return (
		<section className = 'bg-dark py-2'>
            <div className = 'container text-white'>
                <div className = 'row a-i-c j-c-space-between'>
                    <div className = 'col-auto'>
                        <div className = 'row a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'text-1xl bi-envelope-fill'></span>
                            </div>
                            <div className = 'col-auto'>
                                <a className = 'half-bold' href = 'mailto://mymail@mydomain.com'>mymail@mydomain.com</a>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-auto'>
                        <div className = 'row a-i-c'>
                            <div className = 'col-auto'>
                                <span className = 'text-1xl bi-telephone-fill'></span>
                            </div>
                            <div className = 'col-auto'>
                                <a className = 'half-bold' href = 'mailto://565 7567567 657'>565 7567567 657</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	)
}