import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Tesimonials = () => {
    const reviews = [
        { _id: 1, name: 'miru', location: 'Dhaka', description: "", img: people1 },
        { _id: 2, name: 'miru', location: 'Dhaka', description: "", img: people2 },
        { _id: 3, name: 'miru', location: 'Dhaka', description: "", img: people3 },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-bold text-primary'>Testimonials</h3>
                    <h2 className='text-3xl'>What Ours Patients Says</h2>
                </div>
                <div>
                    <img className=' w-24 lg:w-48' src={qoute} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Tesimonials;