import {Fragment, useState, useEffect, useRef} from 'react'
import Link from 'next/link'

import * as API from '/api'

import Countries from '/data/countries'
import Socials from '/data/socials'

import Header from '/components/pages/Header'
import Footer from '/components/pages/Footer'

export default function BookAppointment(){
	const [formData, setFormData] = useState({
		full_name: '', phone: '', email: '', address: '',
		postal_code: '', dob: '', referree: '', social_links: []
	})

	const handleFormSubmit = (e) => {
		e.preventDefault()

		console.log(formData)
	}

	return (
		<Fragment>
			<Header />
			<section className = 'py-5'>
				<div className = 'container'>
					<div className = 'row j-c-c py-5'>
						<div className = 'col-lg-7'>
							<div className = 'row'>
								<div className="col-12">
									<div className="row">
										<div className="col-auto">
											<Link href='/' className="row a-i-c">
												<div className="col-auto">
													<span className="bi-arrow-left fo-s-16"></span>
												</div>
												<span className='text-capitalize underline'>back</span>
											</Link>
										</div>
									</div>
								</div>
								<div className = 'col-12 text-center mb-5'>
									<h1 className = 'text-capitalize bold theme-color'>join us</h1>
		                        	<h5 className = 'text-sentence text-muted'>be a part of our growing community</h5>
								</div>
								<div className = 'col-12'>
									<form onSubmit = {handleFormSubmit} className = 'row'>
										<div className = 'col-lg-6 mb-4'>
											<h6 className = 'text-capitalize'>full name *</h6>
											<input
												value = {formData.full_name}
												onChange = {({target: {value}}) => setFormData({...formData, full_name: value})}
												type = 'text'
												name = 'full_name'
												className = 'd-block w-100 p-3 rounded-lg border border-dark' />
										</div>
										<div className = 'col-lg-6 mb-4'>
											<h6 className = 'text-capitalize'>phone number *</h6>
											<PhoneInput
												value = {formData.phone}
												onChange = {({value}) => setFormData({...formData, phone: value})} />
										</div>
										<div className = 'col-12 mb-4'>
											<h6 className = 'text-capitalize'>email address *</h6>
											<input
												value = {formData.email}
												onChange = {({target: {value}}) => setFormData({...formData, email: value})}
												type = 'email'
												name = 'email'
												className = 'd-block w-100 p-3 rounded-lg border border-dark' />
										</div>
										<div className = 'col-12 mb-4'>
											<h6 className = 'text-capitalize'>address *</h6>
											<input
												value = {formData.address}
												onChange = {({target: {value}}) => setFormData({...formData, address: value})}
												type = 'text'
												name = 'address'
												className = 'd-block w-100 p-3 rounded-lg border border-dark' />
										</div>
										<div className = 'col-lg-6 mb-4'>
											<h6 className = 'text-capitalize'>postal code *</h6>
											<input
												value = {formData.postal_code}
												onChange = {({target: {value}}) => setFormData({...formData, postal_code: value})}
												type = 'number'
												name = 'postal_code'
												className = 'd-block w-100 p-3 rounded-lg border border-dark' />
										</div>
										<div className = 'col-lg-6 mb-4'>
											<h6 className = 'text-capitalize'>date of birth *</h6>
											<input
												value = {formData.dob}
												onChange = {({target: {value}}) => setFormData({...formData, dob: value})}
												type = 'date'
												name = 'dob'
												className = 'd-block w-100 p-3 rounded-lg border border-dark' />
										</div>
										<div className = 'col-12 mb-4'>
											<h6 className = 'text-capitalize'>referree</h6>
											<input
												value = {formData.referree}
												onChange = {({target: {value}}) => setFormData({...formData, referree: value})}
												type = 'text'
												name = 'referree'
												className = 'd-block w-100 p-3 rounded-lg border border-dark' />
										</div>
										<div className = 'col-12 mb-5'>
											<h6 className = 'text-capitalize'>social media links</h6>
											<SocialLinks value = {formData.social_links} onChange = {({links}) => setFormData({...formData, social_links: links})} />
										</div>
										<div className = 'col-12 mb-5'>
											<h6 className = 'text-capitalize'>attach document</h6>
											<AttachDocument />
										</div>
										<div className = 'col-lg-6 mb-4'>
											<button type = 'submit' className = 'p-3 text-capitalize bold theme-bg text-white border-0 d-block w-100 rounded-lg'>
												join
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

function AttachDocument(){
	const [file, setFile] = useState()

	return (
		<div className="container-fluid border border-dark bg-light rounded-lg overflow-0">
			<div className="row a-i-c">
				<label className='col-auto m-0 cursor-pointer bold text-capitalize text-white theme-bg p-3'>
					{file && file instanceof File ? (
						<span>1 file selected</span>	
					) : (
						<span>select file</span>
					)}
					<input onChange = {(e) => {
						const file = e.target.files[0]

						if(file instanceof File) setFile(file)
						else alert('File doesn\'t seem to be valid')
					}} type="file" hidden = {true} />
				</label>
				{file && file instanceof File && (
					<Fragment>
						<span className="col text-sentence bold one-line">{file.name}</span>
						<button onClick={() => setFile()} className = 'col-auto border-0 bg-clear'>
							<span className = 'bi-x fa-2x'></span>
						</button>
					</Fragment>
				)}
				{!file && (
					<span className="col text-muted text-sentence bold">no file selected</span>
				)}
			</div>
		</div>
	)
}

function SocialLinks({value = [], onChange}){
	const [links, setLinks] = useState([])
	const [socials, setSocials] = useState(Socials)
	const [linkData, setLinkData] = useState({url: '', icon: ''})

	useEffect(() => {
		if(typeof onChange === 'function')
			onChange({links})
		setLinkData({url: '', icon: ''})
		setSocials((currentValue) => Socials.filter(({icon}) => !links.map(({icon: _icon}) => _icon).includes(icon)))
	}, [links])

	return (
		<Fragment>
			<div className = 'container-fluid'>{
				links && Array.isArray(links) && links.length > 0 && (
					<div className = 'row pb-3'>{
						links.map(({url, icon}) => (
							<div className = 'col-auto mr-3 mb-3' key = {icon}>
								<div className = 'row a-i-c py-2 rounded-1x bg-light'>
									<div className = 'col-auto'>
										<span className = {`bi-${icon} fo-s-18`}></span>
									</div>
									<div className = 'col px-0'>
										<a
											href = {`${url}`}
											className = 'underline'>
											{url}	
										</a>
									</div>
									<div className = 'col-auto'>
										<button
											onClick = {() => setLinks((currentValue) => currentValue.filter(({icon: _icon}) => _icon !== icon))}
											type = 'button'
											className = 'border-0 bi-x fo-s-18'></button>
									</div>
								</div>
							</div>
						))
					}</div>
				)
			}</div>
			<div className = 'container-fluid border border-dark overflow-0 rounded-lg'>
				<div className = 'row'>
					<select
						value = {linkData.icon}
						onChange = {({target: {value}}) => setLinkData((currentValue) => ({...currentValue, icon: value}))}
						className = 'text-capitalize col-auto py-3 px-2 border-0 theme-bg text-center text-white'>
						<option value = ''>---</option>{
							socials.map(({name, icon}) => (
								<option value = {icon} key = {icon}>{name}</option>
							))
						}
					</select>
					<input
						type = 'text'
						value = {linkData.url}
						onChange = {({target: {value}}) => setLinkData((currentValue) => ({...currentValue, url: value}))}
						name = 'links'
						className = 'col d-block col p-3 rounded-lg border-0 bg-clear' />
					<button
						onClick = {() => {
							if (!Object.values(linkData).includes('')){
								setLinks((currentValue) => ([...currentValue, {...linkData}]))
							}
						}}
						type = 'button'
						className = {`${Object.values(linkData).includes('') ? 'disabled' : ''} px-4 py-3 theme-bg border-0 text-white text-capitalize transit`}>
						add
					</button>
				</div>
			</div>
		</Fragment>
	)
}

function PhoneInput({value = '', onChange}){
	const [inputValue, setInputValue] = useState({
		dial_code: '',
		number: value
	})

	useEffect(() => typeof onChange === 'function' && (console.log(inputValue) || onChange({value: Object.values(inputValue).join('')})), [inputValue])

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
					onChange = {({target: {value}}) => setInputValue((currentValue) => ({...currentValue, number: Number(value) || ''}))}
					type = 'phone'
					name = 'phone'
					className = 'd-block col p-3 rounded-lg border-0 bg-clear' />
			</div>
		</div>
	)
}
