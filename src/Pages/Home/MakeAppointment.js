import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-120px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 '>
                <h3 className='text-xxl text-primary font-bold py-3'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment today</h2>
                <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officiis incidunt omnis maiores temporibus fugiat illum recusandae eaque neque unde totam nostrum quae natus consectetur, exercitationem animi repellat, id assumenda?
                    sit amet consectetur adipisicing elit. Necessitatibus, officiis incidunt omnis maiores temporibus fugiat illum recusandae eaque neque unde totam nostrum quae natus consectetur, exercitationem animi repellat, id assumenda?
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;