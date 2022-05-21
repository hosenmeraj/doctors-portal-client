import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
    const { name, specialty, img, email } = doctor
    // const handleDelete = (email) => {
    //     fetch(`https://serene-oasis-75824.herokuapp.com/doctor/${email}`, {
    //         method: "DELETE",
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount) {
    //                 // const confrim = window.confrim(`are you want to delete?`)
    //                 toast.success(`Doctor: is ${name} is deleted`)
    //                 // setDeleteDoctor(null)
    //                 refetch()
    //             }
    //         })

    // }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><label onClick={() => setDeleteDoctor(doctor)} for="booking-modal" class="btn btn-xs btn-error">Delete</label></td>

        </tr>
    );
};

export default DoctorRow;