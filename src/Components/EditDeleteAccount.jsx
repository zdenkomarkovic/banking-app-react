import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import Layout from './Layout';

const EditDeleteAccount = () => {
  const { users, setUsers } = useContext(UserContext);

  const handleDelete = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Layout title={'Accounts'}>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Deposit</th>
            <th>Edit - Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.deposit}</td>
                <td>
                  <Link
                    className='btn btn-warning me-2'
                    to={'/editAccount/' + user.id}
                  >
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default EditDeleteAccount;
