import React, { useEffect, useState } from 'react';

const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue ] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log('setting new timeout');
            setDebouncedValue(value);
        }, delay);

        return () => {
            console.log('clearing the timeout');
            clearTimeout(timerId);
        }

    },[value, delay]);
    
    return debouncedValue;
}

export default useDebounce;