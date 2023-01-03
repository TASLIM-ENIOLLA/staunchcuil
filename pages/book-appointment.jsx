import {Fragment, useState, useEffect, useRef} from 'react'

import * as API from '/api'

import Countries from '/data/countries'

import Header from '/components/pages/Header'
// import NavBar from '/components/pages/NavBar'
import Footer from '/components/pages/Footer'

export default function BookAppointment(){
	const [formData, setFormData] = useState({
		full_name: '', phone: '', email: '', message: ''
	})

	const handleFormSubmit = (e) => {
		e.preventDefault()

		fetch(API.BOOK_APPOINTMENT, {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {'Content-type': 'application/json'}
		})
		.then((e) => console.log(e))
	}

	return (
		<Fragment>
			<Header />
			{/* <NavBar /> */}
			<section className = 'py-5'>
				<div className = 'container'>
					<div className = 'row j-c-c py-5'>
						<div className = 'col-lg-7'>
							<div className = 'row'>
								<div className="col-12">
									<div className="row">
										<div className="col-auto">
											<a href='/' className="row a-i-c">
												<div className="col-auto">
													<span className="bi-arrow-left fo-s-16"></span>
												</div>
												<span className='text-capitalize underline'>back</span>
											</a>
										</div>
									</div>
								</div>
								<div className = 'col-12 text-center mb-5'>
									<h1 className = 'text-capitalize bold theme-color'>book appointment</h1>
		                        	<h5 className = 'text-sentence text-muted'>lorem ipsum dolor sit amet consectetur adipiscing</h5>
								</div>
								<div className = 'col-12'>
									<form onSubmit = {handleFormSubmit} className = 'row'>
										<div className = 'col-lg-6 mb-4'>
											<h6 className = 'text-capitalize'>full name</h6>
											<input
												value = {formData.full_name}
												onChange = {({target: {value}}) => setFormData({...formData, full_name: value})}
												type = 'text'
												name = 'full_name'
												className = 'd-block w-100 p-3 rounded-lg border border-dark' />
										</div>
										<div className = 'col-lg-6 mb-4'>
											<h6 className = 'text-capitalize'>phone number</h6>
											<PhoneInput
												value = {formData.phone}
												onChange = {({value}) => setFormData({...formData, phone: value})} />
										</div>
										<div className = 'col-12 mb-4'>
											<h6 className = 'text-capitalize'>email address</h6>
											<input
												value = {formData.email}
												onChange = {({target: {value}}) => setFormData({...formData, email: value})}
												type = 'email'
												name = 'email'
												className = 'd-block w-100 p-3 rounded-lg border border-dark' />
										</div>
										<div className = 'col-12 mb-5'>
											<h6 className = 'text-capitalize'>leave a message</h6>
											<textarea
												value = {formData.message}
												onKeyUp = {(e) => {
													if(formData.message < 200) return

													e.preventDefault()
												}}
												onChange = {({target: {value}}) => (
													(value.length < 200)
													? setFormData({...formData, message: value})
													: undefined
												)}
												name = 'message'
												className = 'd-block w-100 p-3 resize-0 rounded-lg border border-dark'
												rows = '5' />
											<p className = 'mt-2 text-muted bold half-bold'>{
												formData.message.length === 0
												? 'Maximum of 200 characters'
												: `${200 - formData.message.length} characters remaining`
											}</p>
										</div>
										<div className = 'col-lg-6 mb-4'>
											<button type = 'submit' className = 'p-3 text-capitalize bold theme-bg text-white border-0 d-block w-100 rounded-lg'>
												submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	)
}


function PhoneInput({value = '', onChange}){
	const [inputValue, setInputValue] = useState({
		dial_code: '',
		number: value
	})

	useEffect(() => typeof onChange === 'function' && onChange({value: Object.values(inputValue).join('')}), [inputValue])

	return(
		<div
			className = 'container-fluid rounded-lg border bg-clear border-dark overflow-y-auto'>
			<div className = 'row'>
				<select
					onChange = {({target: {value}}) => setInputValue((currentValue) => ({...currentValue, dial_code: value}))}
					className = 'col-auto d-block py-3 px-0 text-center border-0 theme-bg text-white'>
						<option value = ''>---</option>{
						Countries.map(({dial_code, code}) => (
							<option key = {code} value = {dial_code}>{dial_code}</option>
						))
					}
				</select>
				<input
					value = {inputValue.number}
					onChange = {({target: {value}}) => setInputValue((currentValue) => ({...currentValue, number: parseInt(value)}))}
					type = 'phone'
					name = 'phone'
					className = 'd-block col p-3 rounded-lg border-0 bg-clear' />
			</div>
		</div>
	)
}