import React from 'react';
import { useDispatch } from 'react-redux';
import { AppActions } from '../../actions/index';
import './InputComponent.css';

export const InputComponent = () => {
    let dispatch = useDispatch();

    return (
        <div className="input__group-custom input-group">
            <input
                type="text"
                className="form__control-custom form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search Book..."
                onChange={(e) => dispatch(AppActions.searchBooks(e.target.value))}
            />
        </div>
    );
};   