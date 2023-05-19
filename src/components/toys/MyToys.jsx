import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('MyToys')
    return (
        <div>
            <p>MyToy compo</p>
        </div>
    );
};

export default MyToys;