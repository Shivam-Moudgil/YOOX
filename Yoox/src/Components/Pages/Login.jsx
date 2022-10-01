import React from "react";
import "./Login.css";
import {useState} from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
// import {useDispatch} from "react-redux";
// import {store} from "../../redux/store";
// import {isAuthAction} from "../../redux/isAuth/action";
// import {useNavigate} from "react-router-dom";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios.get("http://localhost:9002/users").then(function (res) {
      console.log(res);
      var nw = res.data.filter((e) => {
        if (
          e.first_name == response.Lu.iY &&
          e.last_name == response.Lu.wW &&
          e.email == response.Lu.Bv
        ) {
          return true;
        }
      });
      console.log("nw", nw[0].email);
      if (nw[0].email === response.Lu.Bv) {
        alert(`Succesfully logged in ${response.Lu.iY}`);
      }
    });
  };
  const responseErrorGoogle = (respone) => {
    console.log("err", respone);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  };

  const login = async() => {
  await axios.post("https://yooxapi.herokuapp.com/user/login", user).then((res) => {
      console.log(res.data.user._id);
      // alert(res.data.message);
      // localStorage.setItem(
      //   "userEmailyoox",
      //   JSON.stringify(res.data.user.email)
      // );
      // localStorage.setItem("userIdyoox", JSON.stringify(res.data.user._id));
      // let userid = localStorage.getItem("userIdyoox");
      // dispatch(isAuthAction(userid));
      // navigate("/");
    });
  };
  return (
    <div style={{textAlign: "center", padding: "10px"}}>
      {console.log("user", user)}
      <p style={{fontSize: "20px", fontWeight: "bold"}}>
        Its great to see you again
      </p>
      <div className="firstSpan">
        <p>Log in with</p>
        <div className="ggg">
          <GoogleLogin
            style={{fontWeight: "bold", textDecoration: "uppercase"}}
            clientId="739317188642-qmnkdd4sei6hbpcth0n3m91q9sgbpikp.apps.googleusercontent.com"
            buttonText="Login"
            className="ggg"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <p>or with your e-mail address</p>
        <input
          className="inp"
          type="email"
          name="email"
          value={user.email}
          placeholder="E-MAIL"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          className="inp"
          type="password"
          name="password"
          value={user.password}
          placeholder="PASSWORD"
          onChange={handleChange}
        />
        <br />
        <button className="login" onClick={login}>
          LOG IN
        </button>
      </div>
    </div>
  );
};
