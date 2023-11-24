import React, {useState, useEffect} from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import Input from '../components/Input';


const SignIn = () => {

const [name, setName] = useState('');
const [phone, setPhone] = useState('');

const handleSubmit = () => {
    alert('clicked')

}

return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <input class="form-control" type="text" placeholder="Enter userName" aria-label="default input example" />
    <input class="form-control" type="text" placeholder="Enter password" aria-label="default input example" />
    <input type='submit'/>
    </form>
    </div>
    </>
)    

}

export default SignIn;