import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointBanner from './AppointBanner';
import AppointmentAvilable from './AppointmentAvilable';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AppointmentAvilable date={date}></AppointmentAvilable>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;