import React, { FormEvent, useState } from 'react';
import { userLogin } from '../../Services/client/userLogin';
import { useAppDispatch } from '../../Redux/hooks';
import { useNavigate } from 'react-router-dom';
import { updateUserCredentials } from '../../Redux/client/userSlice';
import { ToastContainer, toast } from 'react-toastify';



const UserLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [apiError, setApiError] = useState<string>('');
  const [resError, setResError] = useState<string | undefined>(undefined)
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const loginForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset previous error messages
    setEmailError('');
    setPasswordError('');
    setApiError('');

    try {
      const User = await userLogin(email, password);
      if (User) {
        console.log(User.userToken,'here is the user token');
        
        const { userToken, user } = User;
        console.log(userToken,'here is the accessToken is comming properly');
        
        dispatch(updateUserCredentials({ accessToken: userToken.token, userName: user?.name }));
        navigate('/index');
      }
    } catch (error:any) {
      console.log(error.response.data.message);
      
      setResError(error.response.data.message)
      toast.error(resError, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    }
  };

  return (
    <div>
      <section className="signUp">
        <div className="container_login" style={{ marginTop: "100px" }}>
          <div className="signUp-content">
            <div className="signUp-form">
              <h2 className="form-title text-lavender">Login</h2>
              <form method="POST" className="register-form" id="register-form" onSubmit={loginForm}>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                  />
                  <span className="text-red-500 text-sm">{emailError}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Please enter your password"
                    id="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                  />
                  <span className="text-red-500 text-sm">{passwordError}</span>
                </div>

                <div className="form-group form-button">
                  <button
                    type="submit"
                    className="w-full text-white bg-lavender hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Login
                  </button>

                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <a onClick={() => { navigate('/signup'); }} className="text-midnight hover:underline cursor-pointer dark:text-blue-500">Create account</a>
                  </div>

                  <span className="text-red-500 text-sm">{apiError}</span>
                </div>
              </form>
            </div>
            <div className="signUp-image">
              <figure>
                <img src='https://i.pinimg.com/564x/04/4a/22/044a22586da10fb5b88bfbb6da4b61c9.jpg' alt="sign up image" />
              </figure>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserLogin;
