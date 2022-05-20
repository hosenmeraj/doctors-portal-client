import React from 'react';
import { toast } from 'react-toastify';

const DeleteDoctorModal = ({ refetch, deleteDoctor, setDeleteDoctor }) => {
    const { name, email } = deleteDoctor
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    // const confrim = window.confrim(`are you want to delete?`)
                    toast.success(`Doctor: is ${name} is deleted`)
                    setDeleteDoctor(null)
                    refetch()
                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are Sure want to delete {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="booking-modal" class="btn btn-xs">Cancle</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteDoctorModal;