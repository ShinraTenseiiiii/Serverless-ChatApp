import axios from 'axios';
const AuthPage = (props) => {  // the prop is the onAuth funtion from App.jsx which sets the value of user
    const onSubmit = (e) => {
      e.preventDefault(); //Preventing Page Reload
      const { value } = e.target[0];  // e.target represents the element that triggered the event, which in this case is the form element.
      axios.post('http://localhost:3001/authenticate', 
    {"username": value})
    .then((response) => props.onAuth({ ...response.data, secret : value})) 
    .catch((error) => console.log(error));
      
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Login 💬</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;