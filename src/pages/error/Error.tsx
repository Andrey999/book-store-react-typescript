import React, { useState } from 'react';

export const Error = () => {
    const[error, setError] = useState(false);
    return (
        <div>Что то пошло не так =/</div>
    )
};