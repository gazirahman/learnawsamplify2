import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react"
import { Transaction } from "../models";
import { TransactionItemCollection } from '../ui-components';

const initialState = {
    amount: '',
    label: ''
}

export const Transactions = () => {
    const [formState, setFormState] = useState(initialState);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const subscription = DataStore.observeQuery(
            Transaction,
        ).subscribe(snapshot => {
            const {items, isSynced} = snapshot;
            setTransactions(items);
        });
        //fetchTransactions();

        return () => subscription.unsubscribe();
    }, []);

    // async function fetchTransactions() {
    //     const models = await DataStore.query(Transaction);
    //     setTransactions(models);
    // };

    async function addTransaction() {
        if (!formState.label || !formState.amount) {
            return;
        }
        const transaction = {...formState};
        // setTransactions([...transactions, transaction]);
        setFormState(initialState);

        await DataStore.save(
            new Transaction({
                label: transaction.label,
                amount: parseFloat(transaction.amount)
            })
        );

        // await fetchTransactions();
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
                <TransactionItemCollection style={{alignItems: 'center'}} />
            </div>
        </div>
    );
}