import React from 'react';
import './Spinner.css';

export const Spinner = () => {
    return (
        <div className="spinner__color spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};  