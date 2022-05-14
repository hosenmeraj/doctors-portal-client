import { format } from 'date-fns';
import React from 'react';

const BookingAppointment = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment
    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for :{name}</h3>
                    <form onSubmit={handleSubmit} className='mt-4 grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" readOnly disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingAppointment;