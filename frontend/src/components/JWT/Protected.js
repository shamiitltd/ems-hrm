import React, { useState, useEffect } from 'react';
import { getProtectedData } from '../api';

const Protected = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProtectedData();
                setData(result);
            } catch (err) {
                setError('You are not authorized to view this content.');
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default Protected;
