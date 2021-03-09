import React from "react";
import "./Contacts.css";

const Contacts = () => {
    return (
        <div className="contacts">
            <p className="text-center font-weight-bold">Контакты</p>
            <p className="text-justify">Книжный интернет-магазин «Book-store»</p>
            <p className="text-justify">115419, Москва, 2-й Рощинский проезд, дом 8, строение 4.</p>
            <p className="text-justify">Электронная почта: shop@bookstoremail.ru</p>
            <p className="text-justify">График работы операторской службы:</p>
            <p className="text-justify">Ежедневно, круглосуточно.</p>
            <p className="text-justify">Бесплатный звонок по России (с мобильных и городских):</p>
            <p className="text-justify">8 800 600-95-25</p>
        </div>
    );
};

export default Contacts