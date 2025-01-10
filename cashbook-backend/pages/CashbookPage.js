import React, { useEffect, useState } from 'react';

const CashbookPage = () => {
    const [cashbookEntries, setCashbookEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/cashbook/all') // Adjust to your backend URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setCashbookEntries(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Cashbook Entries</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Opening Balance</th>
                        <th>Closing Balance</th>
                        <th>Credits</th>
                        <th>Debits</th>
                    </tr>
                </thead>
                <tbody>
                    {cashbookEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.openingBalance}</td>
                            <td>{entry.closingBalance}</td>
                            <td>
                                <ul>
                                    {entry.credits.map((credit, i) => (
                                        <li key={i}>
                                            {credit.head}: Cash - {credit.cash}, Bank - {credit.bank}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {entry.debits.map((debit, i) => (
                                        <li key={i}>
                                            {debit.head}: Cash - {debit.cash}, Bank - {debit.bank}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CashbookPage;
