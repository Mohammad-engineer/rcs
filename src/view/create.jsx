import React,{useState} from 'react'
import { addUser } from '../reducers/userSlice';
import {useDispatch ,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

function create() {
    const[name,setName] = useState('')
    const[username,setuserName] = useState('')
    const[email,setEmail] = useState('');

    const dispatch  = useDispatch();
    const users = useSelector(store=>store.users);
    const navigate = useNavigate();

    console.log(users.userList.length);

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addUser({id:users.userList.length +1,name, username , email}));
        navigate('/');
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h1>Add New User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='enter name...'
                    value={name} onChange={e=>(setName(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor='username'>User name:</label>
                    <input type='text' name='username' className='form-control' placeholder='enter user name...'
                    value={username} onChange={e=>(setuserName(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' className='form-control' placeholder='enter email...'
                    value={email} onChange={e=>(setEmail(e.target.value))}/>
                </div><br/>
                <button className='btn btn-info'>submit</button>

            </form>

        </div>

    </div>
  )
}

export default create