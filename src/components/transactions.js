import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react"
import { Transaction } from "../models";

const initialState = {
    amount: '',
    label: ''
}

export const Transactions = () => {
    const [formState, setFormState] = useState(initialState);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    async function fetchTransactions() {
        const models = await DataStore.query(Transaction);
        setTransactions(models);
    };

    async function addTransaction() {
        if (!formState.label || !formState.amount) {
            return;
        }
        const transaction = {...formState};
        setTransactions([...transactions, transaction]);
        setFormState(initialState);

        await DataStore.save(
            new Transaction({
                label: transaction.label,
                amount: parseFloat(transaction.amount)
            })
        );

        await fetchTransactions();
    }

    function setInput(key, value) {
        setFormState({
            ...formState,
            [key]: value
        });
    }

    return (
        <div>
            <h1>
                Balance: {
                    transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0)
                }
            </h1>
            <h2>Transactions</h2>
            <input
                onChange={event => setInput('label', event.target.value)}
                value={formState.label}
                placeholder="Label"
            />
            <input
                onChange={event => setInput('amount', event.target.value)}
                value={formState.value}
                placeholder="Amount"
            />
            <button
                onClick={addTransaction}>Create Transaction</button>
            <hr />
            <div>
                {
                    transactions.map((transaction) => (
                        <div key={transaction.id}>
                            {transaction.label}: {transaction.amount}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}