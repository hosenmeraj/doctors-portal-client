import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AppointmentAvilable = ({ date }) => {
    const [services, setServices] = useState([])
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
            <div>
                {
                    services.map(service => <li key={service._id}>{service.name}</li>)
                }
            </div>
        </div>
    );
};

export default AppointmentAvilable;