import React from 'react';
import Banner from './Banner';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
           <p>This is Home </p>
        </div>
    );
};

export default Home;