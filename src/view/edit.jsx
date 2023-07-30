import React,{useState} from 'react'
import { editUser } from '../reducers/userSlice';
import {useDispatch ,useSelector} from 'react-redux'
import {useNavigate,useParams} from 'react-router-dom';

function edit() {
  

    const dispatch  = useDispatch();
    const users = useSelector(store=>store.users);
    const navigate = useNavigate();

    const {id: userId} = useParams();
    console.log(userId);
    const existingUser = users.userList.filter(f=>f.id=== +userId)
    //const existingUser = users.userList[userId-1].id === +userId
    const{name,username,email} = existingUser[0];

    const[uname,setName] = useState(name);
    const[uusername,setuserName] = useState(username);
    const[uemail,setEmail] = useState(email);

    console.log(users);
    console.log(existingUser);

    //console.log(users.userList.length);

    const handleUpdate = (e)=>{
        e.preventDefault()
        dispatch(editUser({
            id:userId,
            name:uname,
            username : uusername ,
            email: uemail}));
        navigate('/');
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h1>Edit User numer {userId}</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='enter name...'
                    value={uname} onChange={e=>(setName(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor='username'>User name:</label>
                    <input type='text' name='username' className='form-control' placeholder='enter user name...'
                    value={uusername} onChange={e=>(setuserName(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' className='form-control' placeholder='enter email...'
                    value={uemail} onChange={e=>(setEmail(e.target.value))}/>
                </div><br/>
                <button className='btn btn-info'>Edit</button>

            </form>

        </div>

    </div>
  )
}

export default edit