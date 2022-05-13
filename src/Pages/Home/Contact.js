import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${appointment})` }}>

            <div className="card flex-shrink-0 w-full max-w-sm ">
                <div className='text-center'>
                    <h3 className='text-primary text-xl'>Contact Us</h3>
                    <h2 className='text-white text-3xl'>Stay Connected With Us</h2>
                </div>
                <div className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="Email address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <textarea className="textarea textarea-bordered h-24" placeholder="Your message"></textarea>
                    </div>
                    <div className="form-control mt-6 mx-auto w-50">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;