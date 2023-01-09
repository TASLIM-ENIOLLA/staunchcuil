import Link from 'next/link'
import { Fragment, useState } from 'react'

export const Carousel = [
    {
        component: <Fragment>
            <h1 className = 'text-capitalize bold mb-5 text-white'>
                software design and development
            </h1>
            <h5 className = 'half-bold mb-5 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
            </h5>
            <Link href = '/book-appointment' className = 'btn bg-teal bold text-white text-capitalize px-5 py-3'>
                book appointment
            </Link>
        </Fragment>,
        image: '/images/services/software development.png'
    },
    {
        component: <Fragment>
            <h1 className = 'text-capitalize bold mb-5 text-white'>
                software training
            </h1>
            <h5 className = 'half-bold mb-5 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
            </h5>
            <Link href = '/book-appointment' className = 'btn bg-teal bold text-white text-capitalize px-5 py-3'>
                book appointment
            </Link>
        </Fragment>,
        image: '/images/services/software training.jpg'
    },
    {
        component: <Fragment>
            <h1 className = 'text-capitalize bold mb-5 text-white'>
                health insurance
            </h1>
            <h5 className = 'half-bold mb-5 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
            </h5>
            <Link href = '/book-appointment' className = 'btn bg-teal bold text-white text-capitalize px-5 py-3'>
                book appointment
            </Link>
        </Fragment>,
        image: '/images/services/health insurance.jpg'
    },
    {
        component: <Fragment>
            <h1 className = 'text-capitalize bold mb-5 text-white'>
                life insurance
            </h1>
            <h5 className = 'half-bold mb-5 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
            </h5>
            <Link href = '/book-appointment' className = 'btn bg-teal bold text-white text-capitalize px-5 py-3'>
                book appointment
            </Link>
        </Fragment>,
        image: '/images/services/life insurance.jpg'
    },
    {
        component: <Fragment>
            <h1 className = 'text-capitalize bold mb-5 text-white'>
                real estate
            </h1>
            <h5 className = 'half-bold mb-5 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
            </h5>
            <Link href = '/book-appointment' className = 'btn bg-teal bold text-white text-capitalize px-5 py-3'>
                book appointment
            </Link>
        </Fragment>,
        image: '/images/services/real estate.jpg'
    },
]