import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { locales } from '../locales/locales';

// register locale
locales();

// switch between locales
numeral.locale('inr');

const ExpenseListItem =  ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')} 
            - 
            {moment(createdAt).format('Do MMMM, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem; 