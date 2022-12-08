import classes from './ProfileForm.module.css';
import {useContext, useRef} from "react";
import authContext from "../../store/auth-context";

const ProfileForm = () => {

  const enteredNewPasswordRef = useRef()
  const authCtx = useContext(authContext)

  const submitHandler = (event) => {
    event.preventDefault()

    const newPassword = enteredNewPasswordRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBVBA9Fvl5rZ1swluI6UvyNZpyLc-9fP9M',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {

    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={enteredNewPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
