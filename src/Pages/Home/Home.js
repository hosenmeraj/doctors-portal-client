import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Tesimonials from './Tesimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Tesimonials></Tesimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;