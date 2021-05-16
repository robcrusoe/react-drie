import Button from '../UI/Button';
import Card from './../UI/Card';

import classes from './AddUser.module.css';

const AddUser = props => {

    const addUserHandler = event => {
        event.preventDefault();


    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>User Name: </label>
                <input type='text' id='username' />

                <label htmlFor='age'>Age (Years): </label>
                <input type='number' id='age' />

                <Button type='submit' onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;