import Accounts from '../Components/Accounts';
import AddAccount from '../Components/AddAccount';
import EditAccount from '../Components/EditAccount';
import EditDeleteAccount from '../Components/EditDeleteAccount';

export const appChildren = [
  {
    path: '/',
    element: <Accounts />,
  },
  {
    path: '/AddAccount',
    element: <AddAccount />,
  },
  {
    path: '/EditDeleteAccount',
    element: <EditDeleteAccount />,
  },
  {
    path: '/EditAccount/:id',
    element: <EditAccount />,
  },
];
