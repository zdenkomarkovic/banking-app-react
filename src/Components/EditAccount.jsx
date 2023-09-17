import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import Layout from './Layout';

const EditAccount = () => {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    phone: '',
    deposit: '',
  });
  const { users, setUsers } = useContext(UserContext);
  const redirect = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setInputData(users.find(user => user.id === +id));
  }, []);

  const inputHandler = e => {
    let copyInputData = { ...inputData };
    copyInputData[e.target.name] = e.target.value;
    setInputData(copyInputData);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setUsers(
      users.map(user => {
        if (user.id === inputData.id) {
          return inputData;
        } else {
          return user;
        }
      })
    );

    redirect('/EditDeleteAccount');
  };
  return (
    <Layout title={'Edit Account'}>
      <form onSubmit={handleSubmit}>
        <input
          onInput={inputHandler}
          value={inputData.name}
          type='text'
          name='name'
          className='form-control mb-2'
          placeholder='Name'
        />
        <input
          onInput={inputHandler}
          value={inputData.email}
          type='email'
          name='email'
          className='form-control mb-2'
          placeholder='Email'
        />
        <input
          onInput={inputHandler}
          value={inputData.phone}
          type='text'
          name='phone'
          className='form-control mb-2'
          placeholder='Phone'
        />
        <input
          onInput={inputHandler}
          value={inputData.deposit}
          type='text'
          name='deposit'
          className='form-control mb-2'
          placeholder='Deposit'
        />
        <button className='btn btn-primary px-5'>UPDATE USER</button>
      </form>
    </Layout>
  );
};

export default EditAccount;
