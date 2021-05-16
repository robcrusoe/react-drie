import { useState } from 'react';

import Button from '../UI/Button';
import Card from './../UI/Card';

import classes from './AddUser.module.css';

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();

        /* Input validations */
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 1) {
            return;
        }

        /* Do something with entered user data */
        props.onAddUser({
            name: enteredUsername,
            age: enteredAge
        });

        /* Reset form */
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value.trim());
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>User Name: </label>
                <input type='text' id='username' onChange={usernameChangeHandler} value={enteredUsername} />

                <label htmlFor='age'>Age (Years): </label>
                <input type='number' id='age' onChange={ageChangeHandler} value={enteredAge} />

                <Button type='submit' onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;