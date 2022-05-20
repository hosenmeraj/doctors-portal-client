import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteDoctorModal from './DeleteDoctorModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () =>
        fetch('http://localhost:5000/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctor: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avator</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                setDeleteDoctor={setDeleteDoctor}
                                refetch={refetch}></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteDoctorModal
                deleteDoctor={deleteDoctor}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
            ></DeleteDoctorModal>}
        </div>
    );
};

export default ManageDoctor;