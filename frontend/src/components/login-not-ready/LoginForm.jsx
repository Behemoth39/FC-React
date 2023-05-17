import "./loginform.css";

const LoginForm = () => {
  return (
    <>
      <div class='loginContainer hidden' id='login-menu'>
        <div id='closebtn'>X</div>
        <h1 id='h1-sign-in'>Sign In</h1>
        <h1 class='hidden' id='h1-sign-up'>
          Sign Up
        </h1>
        <form id='login-form' class='login-windows'>
          <p id='error-msg-login' class='error-msg'>
            Invalid Username/Password!
          </p>
          <p id='error-msg-create' class='error-msg'>
            Username and password needs to be at least 5 characters in lenght!
          </p>
          <input
            id='user'
            class='login-window'
            name='array[]'
            placeholder='User Name'
            type='text'
          />
          <input
            id='pass'
            class='login-window'
            name='array[]'
            placeholder='Password'
            type='password'
          />
          <div class='btn-row'>
            <div>
              <input type='button' value='SIGN IN' id='login-btn-in' class='btn' />
            </div>
            <div>
              <input type='button' value='SIGN UP' id='login-btn-up' class='btn' />
            </div>
            <div>
              <input type='button' value='Create Account' id='create-btn' class='btn hidden' />
            </div>
            <div>
              <input type='button' value='Back' id='back-btn' class='btn hidden' />
            </div>
          </div>
        </form>
      </div>
      ;
    </>
  );
};

export default LoginForm;
