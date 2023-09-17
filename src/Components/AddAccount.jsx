import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Layout from './Layout';

const AddAccount = () => {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    phone: '',
    deposit: '',
  });
  const { users, setUsers } = useContext(UserContext);
  const redirect = useNavigate();
  const inputHandler = e => {
    let copyInputData = { ...inputData };
    copyInputData[e.target.name] = e.target.value;
    setInputData(copyInputData);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setUsers([...users, { ...inputData, id: new Date().getTime() }]);
    redirect('/');
  };
  return (
    <Layout title={'Add Accounts'}>
      <form onSubmit={handleSubmit}>
        <input
          onInput={inputHandler}
          type='text'
          name='name'
          className='form-control mb-2'
          placeholder='Name'
        />
        <input
          onInput={inputHandler}
          type='email'
          name='email'
          className='form-control mb-2'
          placeholder='Email'
        />
        <input
          onInput={inputHandler}
          type='text'
          name='phone'
          className='form-control mb-2'
          placeholder='Phone'
        />
        <input
          onInput={inputHandler}
          type='text'
          name='deposit'
          className='form-control mb-2'
          placeholder='Deposit'
        />
        <button className='btn btn-primary px-5'>ADD USER</button>
      </form>
    </Layout>
  );
};

export default AddAccount;
