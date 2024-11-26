import React, { useState } from 'react';

function ClickCounter() {
    const [num, setNum] = useState(0);
    return (
        <div>
            <div>
                {num}
            </div>
            <button onClick={e => setNum(num + 1)}>
                Click here!
            </button>
        </div>
    );
}

export default ClickCounter;