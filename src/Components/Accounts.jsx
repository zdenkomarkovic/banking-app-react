import React, { useContext } from 'react';
import { UserContext } from '../App';
import Layout from './Layout';

const Accounts = () => {
  const { users } = useContext(UserContext);
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Accounts;
