import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteUser} from '../reducers/userSlice'

function userListview() {

    const users = useSelector(store=>store.users);
    console.log(users);

    const dispatch = useDispatch();
    const handleDelete = (id)=>{
        dispatch(deleteUser({id:id}))
    }


  return (
    <div className='container'>
        <h2>crud app with jason server</h2>
        <Link to="./create" className='btn btn-success my-3'>create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {users.userList.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>edit</Link>
                            <button onClick={()=> handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>

        </table>
    </div>
  )
}

export default userListview