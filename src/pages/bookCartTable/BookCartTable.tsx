import React from "react";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// import { addToCard, onDecrease, onDelete } from '../../actions/index';
import { CartPageActions }  from '../../actions';
import './BookCartTable.css';
import { AppState } from '../../store';

const BookCartTable = () => {
    const { items, totalPrice } = useSelector((state: AppState) => ({
        items: state.cartPage.items,
        totalPrice: state.cartPage.totalPrice
    }), shallowEqual);

    if(!items) return null;

    const dispatch = useDispatch();
    if(!items.length) return <h2 className="empty__cart text-center">Your cart is empty =/</h2>

    return (
        <div className="book__cart-table">
            <h2 className="text-center mb-4">Your order</h2>
            <table className="table table__custom">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Book title</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, ind) => {
                        return (
                            <tr key={item.id}>
                                <td className="font-weight-bold">{ind + 1}</td>
                                <td className="font-weight-normal">{item.title}</td>
                                <td>{item.count}</td>
                                <td>{item.price}$</td>
                                <td>
                                    <button
                                        className="btn btn-outline-warning"
                                        onClick={() => dispatch(CartPageActions.onDecrease(item.id))}
                                    >
                                        <i className="fa fa-minus-circle" />
                                    </button>
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => dispatch(CartPageActions.addToCard(item.id))}
                                    >
                                        <i className="fa fa-plus-circle" />
                                    </button>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => dispatch(CartPageActions.onDelete(item.id))}
                                    >
                                        <i className="fa fa-trash-o" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="total">Total: {totalPrice}$</div>
        </div>
    );
};

export default BookCartTable