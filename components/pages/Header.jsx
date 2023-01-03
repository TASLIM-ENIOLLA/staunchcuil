export default function Header(){
	return (
		<header id = 'home' className = 'theme-bg py-3'>
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
                        <div className = 'row a-i-c text-white'>
                            <div className = 'col-auto mx-3'>
                                <a href = 'mailto://staunchcuilservices@gmail'>staunchcuilservices@gmail</a>
                            </div>
                            <div className = 'col-auto mx-3'>
                                <a href = 'tel://+91-9010-123-200'>+91-9010-123-200</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
	)
}