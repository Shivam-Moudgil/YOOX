import React, { useState } from "react";
import "./Signup.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import SmFooter from "../../SmallNav/SmFooter";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

export const Signup = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);


  const responseSuccessGoogle = (response) => {
    console.log("res", response.Lu);
    axios({
      method: "POST",
      url: "http://localhost:9002/register",
      data: {
        first_name: response.Lu.iY,
        last_name: response.Lu.wW,
        email: response.Lu.Bv,
      },
    }).then((response) => {
      alert(response.data.message);
      nav("/login");
    });
  };
  const responseErrorGoogle = (respone) => {
    console.log("err", respone);
  };

  const nav = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
    number: "",
  });
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    const { first_name, last_name, email, password, dob, number } = user;
    if (first_name && last_name && email && password && dob && number) {
      axios
        .post("https://yooxapi.herokuapp.com/user/register", user)
        .then((res) => console.log(res));
      alert("Succesfully Added");
      nav("/login");
    } else {
      alert("Fill all the input fields");
    }
  };

  const Hr = styled.hr`
  `;

  return (
    <div className="polo">
      <div>
        <div className="myox">
          <div className="oklo">
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bolder",
                fontFamily: "cursive",
              }}
            >
              MYOOX
            </h3>
            <h2>REGISTRATION</h2>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "bolder",
              }}
            >
              Take advantage of a faster checkout and enjoy promotions for
              registered customers only
            </p>
            <h4>Discover all the benefits</h4>
            <br />
          </div>
          <div className="form">
            <h3>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</h3>
            <GoogleLogin
              clientId="739317188642-qmnkdd4sei6hbpcth0n3m91q9sgbpikp.apps.googleusercontent.com"
              buttonText="Login With Google"
              className="gg"
              onSuccess={responseSuccessGoogle}
              onFailure={responseErrorGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <br />
            <br />
            <h3 style={{marginTop: "-10px"}}>OR </h3>
            <h3>WITH YOUR EMAIL</h3>
            <Input
              pr="4.5rem"
              type="text"
              name="first_name"
              value={user.first_name}
              placeholder="Enter first name"
              onChange={handleChange}
            />
            {/* <input
              color="black"
              className="inpsignup"
              type="text"
              name="first_name"
              value={user.first_name}
              placeholder="FIRST NAME"
              onChange={handleChange}
              // required
            /> */}
            <br />
            <br />
            <Input
              pr="4.5rem"
              type="text"
              name="last_name"
              value={user.last_name}
              placeholder="Enter last name"
              onChange={handleChange}
            />
            {/* <input
              className="inpsignup"
              type="text"
              name="last_name"
              value={user.last_name}
              placeholder="LAST NAME"
              onChange={handleChange}
              // required
            /> */}
            <br />
            <br />
            <Input
              pr="4.5rem"
              type="text"
              name="email"
              value={user.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            {/* <input
              className="inpsignup"
              type="text"
              name="email"
              value={user.email}
              placeholder="E-MAIL"
              onChange={handleChange}
              // required
            /> */}
            <br />
            <br />
            <InputGroup>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                name="password"
                value={user.password}
                placeholder="Enter password"
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <p className="myoxp">Personalize your shopping experience</p>
            <div className="checkbox">
              <input
                style={{width: "20px", height: "20px"}}
                type="radio"
                name="gender"
                value="male"
              />
              <p>Female</p>
              <input
                style={{height: "20px", width: "20px"}}
                type="radio"
                name="gender"
                value="female"
              />
              <p>Male</p>
            </div>

            <p className="myoxp" style={{padding: "0 10px"}}>
              If you are over 18 years old, celebrate your birthday with us: We
              have a surprise for you.
            </p>
            <Input
              placeholder="DOB"
              type="date"
              name="dob"
              value={user.dob}
              onChange={handleChange}
            />
            {/* <input
              className="inpsignup"
              type="date"
              name="dob"
              value={user.dob}
              placeholder="DATE OF BIRTH"
              onChange={handleChange}
              // required
            /> */}
            <InputGroup mt={3}>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Tooltip label="Phone number" fontSize="md">
                    <PhoneIcon color="gray.300" />
                  </Tooltip>
                }
              />

              <Input
                type="tel"
                placeholder="Phone number"
                name="number"
                value={user.number}
                onChange={handleChange}
              />
            </InputGroup>
            {/* <p >CELL PHONE</p>
            <input
              style={{ paddingLeft: "20px"}}
              className="inpsignup"
              placeholder="Contact Number"
              type="number"
              name="number"
              value={user.number}
              onChange={handleChange}
              // required
            /> */}
            <p className="myoxp">
              By entering your phone number, you agree to be contacted by SMS
              for marketing and promotional purposes.
            </p>
            <div>
              <span className="spansignup">
                I declare that I have read and accept the MYOOX Terms and
                Conditions of Use
              </span>
              <div className="chekbox">
                <input
                  style={{marginTop: "0px", margin: "20px"}}
                  className="inpsignup"
                  type="checkbox"
                />
                <p
                  style={{
                    fontSize: "11px",
                    position: "relative",
                    right: "20px",
                  }}
                >
                  I agree to the use of my personal data in order to be updated
                  on new arrivals, informed about exclusive items and contacted
                  as part of targeted marketing initiatives related to services
                  offered by YOOX. By analyzing my personal data, order history
                  and browsing habits, YOOX can improve my shopping experience
                  with suggestions that correspond to my interests. For further
                  information, please consult the Privacy Policy.
                </p>
              </div>
            </div>
            <button className="register" type="submit" onClick={register}>
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
