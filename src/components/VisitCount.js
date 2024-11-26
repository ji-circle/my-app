import React, { useState, useEffect } from 'react';

function VisitCount() {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        try {
            const storedCount = localStorage.getItem('visitCount');
            const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
            setVisitCount(newCount);
            localStorage.setItem('visitCount', newCount);
        } catch (error) {
            console.error('Failed to update visit count:', error);
        }
    }, []);

    // useEffect(() => {
    //     const storedCount = localStorage.getItem('visitCount');
    //     const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    //     setVisitCount(newCount);
    //     localStorage.setItem('visitCount', newCount);
    // }, []);

    return <div className="visit-count">
        Total Visits: {visitCount}
    </div>;
}
export default VisitCount;