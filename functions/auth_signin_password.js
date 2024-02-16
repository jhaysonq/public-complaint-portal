import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function AuthSigninPassword() {
  const auth = getAuth();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleInputs = (event) => {
    const newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  }

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <input type="email" name="email" value={data.email} onChange={handleInputs} />
      <input type="password" name="password" value={data.password} onChange={handleInputs} />
      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
}

export default AuthSigninPassword;
