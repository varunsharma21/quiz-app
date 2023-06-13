import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const onClickHandler = () => {
    console.log("Test Started!");
  };

  return (
    // Here we have not used onSubmit={} bcoz it only does one thing
    // navigate to another page bcoz we used 'Link' there.
    // But we want to navigate as well as do something here. Hence, used onClick={}.
    <form>
      <div className="input-fields">
        <label>Name: </label>
        <input type="text" />
      </div>
      <div className="input-fields">
        <label>Password: </label>
        <input type="password" />
      </div>
      <Link to="quiz">
        <button
          type="submit"
          className="submit-button"
          onClick={onClickHandler}
        >
          Start Test
        </button>
      </Link>
    </form>
  );
}

export default Login;
