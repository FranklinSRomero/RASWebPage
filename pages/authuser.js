import ModalNotification from "../components/ModalNotification";
import ConnectionState from "../components/ConnectionState";
import { translateForm } from "./js/funcional_login";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function AuthUser() {
  const [modalLogin, setModalLogin] = useState({
    status: "FAILED",
    color: "var(--main-carmine)",
    text: "Sign-up failed. Please try again.",
    show: false,
  });

  function submitForm() {}

  return (
    <>
      <Head>
        <title>Auth User - RAS Uniandes</title>
      </Head>
      <div className="container-authuser bg-raven" id="container-authuser">
        <div className="form-container sign-up-container">
          <form action="#" className="bg-raven">
            <div className="inputs-container">
              <h1>Create Account</h1>
              <span>Let's sign you up quickly</span>
              <input
                type="text"
                name="userName"
                placeholder="Type your name"
                id="userName"
                className="bg-raven"
              />
              <input
                type="email"
                name="userEmail"
                placeholder="Type your email"
                id="userEmail"
                className="bg-raven"
              />
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder="Type yout password"
                className="bg-raven"
              />
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Confirm your password"
                className="bg-raven"
              />
              <div>
                <button onClick={submitForm}>Sign Up</button>
              </div>
              <div className="change-form-movile">
                <p>
                  already have an account?{" "}
                  <span id="SingInMovile" onClick={translateForm}>
                    log-in
                  </span>
                </p>
              </div>
            </div>
          </form>
          <ConnectionState modalPosition="absolute"/>
          <ModalNotification notification={modalLogin} />
        </div>

        <div className="form-container sign-in-container">
          <form action="#" className="bg-raven">
            <div className="inputs-container">
              <h1>Sign In</h1>
              <span>Let’s log you in quickly</span>

              <input
                type="email"
                name="userEmail-login"
                placeholder="Type your email"
                id="userEmail-login"
                className="bg-raven"
              />
              <input
                type="password"
                name="userPassword"
                id="userPassword-login"
                placeholder="Type yout password"
                className="bg-raven"
              />
              <div>
                <button>Login</button>
              </div>
              <div className="change-form-movile">
                <p>
                  don’t have an account?{" "}
                  <span onClick={translateForm} id="SingUpMovile">
                    sign-up
                  </span>
                </p>
              </div>

              <a href="">Forgot Password?</a>
            </div>
          </form>
          <ModalNotification notification={modalLogin} />
          <ConnectionState modalPosition="absolute"/>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome back!</h1>
              <p>
                To keep connected with us please login with tour personal info
              </p>
              <button className="ghost" id="signIn" onClick={translateForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello friend!!</h1>
              <p>Enter you personal details and start journey with us</p>

              <button className="ghost" id="signUp" onClick={translateForm}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="close">
            <Link href="./">
              <img src="./x-svgrepo-com.svg" alt="" id="close" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
