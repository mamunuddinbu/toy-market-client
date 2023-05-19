import React from 'react';
import useTitle from '../../hooks/useTitle';

const ToyItem = () => {
    useTitle('ToyItem')
    return (
        <div>
            <p>This is toyItem page</p>
        </div>
    );
};

export default ToyItem;