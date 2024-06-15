import ModalNotification from "../components/ModalNotification";
import ConnectionState from "../components/ConnectionState";
import { translateForm } from "./js/funcional_login";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';

export default function AuthUser() {

  const router = useRouter();

  const [modalLogin, setModalLogin] = useState({
    status: "FAILED",
    color: "var(--main-carmine)",
    text: "Please try later.",
    show: false,
    position: "absolute",
  });

  const submitForm = async (e) => {
    e.preventDefault();

    let formData = {
      successMessage: "Successfuly.",
      failedMessage: "Please try later.",
    };

    const $signUp = document.getElementById("sign-up-form"),
      $signIn = document.getElementById("sign-in-form"),
      $signUpButtonForm = document.getElementById("signUpButtonForm"),
      $signInButtonForm = document.getElementById("signInButtonForm");

    document.addEventListener("click", async (e) => {
      if (e.target == $signInButtonForm) {
        formData = {
          email: $signIn.userEmail.value,
          password: $signIn.userPassword.value,
          route: '/api/login',
          successMessage: "Sign-In successfuly.",
          failedMessage: "Sign-In failed. Please try again.",
        };
      } else if (e.target == $signUpButtonForm) {
        formData = {
          name: $signUp.userName.value,
          email: $signUp.userEmail.value,
          password: $signUp.userPassword.value,
          passwordConfirm: $signUp.passwordConfirm.value,
          route: '/api/register',
          successMessage: "Sign-Up successfuly.",
          failedMessage: "Sign-Up failed. Please try again.",
        };
      }

      if (e.target == $signInButtonForm || e.target == $signUpButtonForm) {
        try {
          const response = await fetch(formData.route, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            setModalLogin({
              status: "SUCCESS",
              color: "var(--logo-star)",
              text: formData.successMessage,
              show: true,
              position: "absolute",
            });
            setTimeout(() => {
              router.push('/users');
            }, 3000);
          } else {
            setModalLogin({
              status: "FAILED",
              color: "var(--main-carmine)",
              text: formData.failedMessage,
              show: true,
              position: "absolute",
            });
          }
          setTimeout(() => {
            setModalLogin({
              status: "FAILED",
              color: "var(--main-carmine)",
              text: "Please try later.",
              show: false,
              position: "absolute",
            });
          }, 3000);

        } catch (error) {
          console.error("Error al enviar el formulario", error);

          setModalLogin({
            status: "FAILED",
            color: "var(--main-carmine)",
            text: formData.failedMessage,
            show: true,
            position: "absolute",
          });

          setTimeout(() => {
            setModalLogin({
              status: "FAILED",
              color: "var(--main-carmine)",
              text: "Please try later.",
              show: false,
              position: "absolute",
            });
          }, 3000);
        }
      }
    });
  };

  return (
    <>
      <Head>
        <title>Auth User - RAS Uniandes</title>
      </Head>
      <div className="container-authuser bg-raven" id="container-authuser">
        <div className="form-container sign-up-container">
          <form onSubmit={submitForm} className="bg-raven" id="sign-up-form">
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
                <button onClick={submitForm} id="signUpButtonForm">Sign Up</button>
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
          <ConnectionState modalPosition="absolute" />
          <ModalNotification notification={modalLogin} />
        </div>

        <div className="form-container sign-in-container">
          <form className="bg-raven" id="sign-in-form">
            <div className="inputs-container">
              <h1>Sign In</h1>
              <span>Let's log you in quickly</span>

              <input
                type="email"
                name="userEmail"
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
                <button id="signInButtonForm" onClick={submitForm}>Login</button>
              </div>
              <div className="change-form-movile">
                <p>
                  don't have an account?{" "}
                  <span onClick={translateForm} id="SingUpMovile">
                    sign-up
                  </span>
                </p>
              </div>

              <a href="">Forgot Password?</a>
            </div>
          </form>
          <ModalNotification notification={modalLogin} />
          <ConnectionState modalPosition="absolute" />
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
