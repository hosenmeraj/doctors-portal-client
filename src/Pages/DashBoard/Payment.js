import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51L1OI3BttZZ9bKT2tLH3kiQMEFunkYUPfYJ7Ierjjbgn9gCttfMUWQL9knE2VGFHR3j9vtTuQqqo5TkZNJBWqXmL00Z1YgB2Bc');

const Payment = () => {
    const { id } = useParams()
    const url = `https://serene-oasis-75824.herokuapp.com/booking/${id}`
    const { data: appointment, isLoading } = useQuery(["booking", id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 bg-base-100 shadow-xl my-6">
                <div class="card-body">
                    <h3 className='text-secondary font-bold'>Hello,{appointment.patientName}</h3>
                    <h2 class="card-title">Pay for : {appointment.treatment}</h2>
                    <p>We will see you <span className='text-red-500'>{appointment.date} at {appointment.slot}</span></p>
                    <p>Please Pay: ${appointment.price}</p>

                </div>
            </div>
            <div class="card flex-shrink-0  max-w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;