import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import './sign-in-and-sign-up.scss';

const SignInSignUp = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInSignUp;
