import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingAppointment from './BookingAppointment';
import Service from './Service';

const AppointmentAvilable = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h4 className='text-xl text-center text-secondary'>Available Appoinment : {format(date, 'PP')}</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingAppointment treatment={treatment}></BookingAppointment>}
        </div>
    );
};

export default AppointmentAvilable;