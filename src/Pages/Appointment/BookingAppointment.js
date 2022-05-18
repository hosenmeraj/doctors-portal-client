import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingAppointment = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment
    const [user, loading, error] = useAuthState(auth);
    const formatDate = format(date, "PP")
    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appoinment is set ${formatDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an Appoinment  ${data.booking?.date} on ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)
            })
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
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
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