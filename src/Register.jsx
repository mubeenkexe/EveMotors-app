import React, { useState } from "react";
import Logo from './assets/Logo/logoWhite.png'
import UserRegistration from "./services/UserRegistration.service.js";
import { useNavigate, Link } from "react-router-dom";
import LoaderAnimation from "./components/Loader.jsx";


export default function Register() {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [PassError, setPassError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !passwordConfirmation) {
      setError('Please fill in all fields.');
      return;
    };

    if (password !== passwordConfirmation) {
      setPassError('Passwords do not match.');
      return;
    };

    let formdata = new FormData();
    formdata.append("firstName", firstName);
    formdata.append("lastName", lastName);
    formdata.append("email", email);
    formdata.append("password", password);

    setIsLoading(true);

    UserRegistration(formdata)
      .then((user) => {
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });


  };

  return (
    <>
      <section className="">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section
            className="relative flex justify-center items-center h-32 rounded-3xl   lg:col-span-5 lg:h-full xl:col-span-6"
          >
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1657987273071-fbe77b5b4e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80 rounded-3xl scale-x-[-1]"
            />

            <div className=" absolute">
              <Link className="block text-white" to="/">
                <img src={Logo} alt="Logo" className="h-16 max-[1440px]:h-10 max-[1020px]:h-6 m-auto" />
              </Link>


            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="flex h-16 w-16 opacity-0 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  to="/"
                >
                  {/* <img src={LogoV2} alt="Logo" className="h-2 m-auto" /> */}
                </Link>
                

                <h1
                  className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                >

                </h1>

                <p className="mt-4 leading-relaxed text-white">
                  Where Luxury and Performance Unite for Your Ultimate Driving Experience.
                </p>
              </div>
              {isLoading ? (
                <LoaderAnimation />
              ) : (
                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="FirstName"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm  shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="i.e, Mike"
                    />
                    <div className="error text-sm text-prime">{error}</div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-white"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="i.e, Alson"
                    />
                    <div className="error text-sm text-prime">{error}</div>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-white">
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="i.e, mikealson@example.com"
                    />
                    <div className="error text-sm text-prime">{error}</div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Password"
                      className="block text-sm font-medium text-white"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      id="Password"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm  shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="error text-sm text-prime">{error}</div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block text-sm font-medium text-white"
                    >
                      Password Confirmation
                    </label>

                    <input
                      type="password"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}

                    />
                    <div className="error text-sm text-prime">{error}</div>
                    <div className="error text-sm text-prime">{PassError}</div>
                  </div>



                  <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                      <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                      />

                      <span className="text-sm text-white">
                        I want to receive emails about events, product updates and
                        company announcements.
                      </span>
                    </label>
                  </div>

                  <div className="col-span-6">
                    <p className="text-sm text-[#F5F5F5]">
                      By creating an account, you agree to our {' '}
                      <a href="#" className="text-prime underline">
                        terms and conditions {' '}
                      </a>
                      and {' '}
                      <a href="#" className="text-prime underline">privacy policy</a>.
                    </p>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      className="inline-block shrink-0 rounded-[12px]  border border-prime  bg-prime hover:text-white px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent focus:outline-none focus:ring active:text-gray-700"
                      type="submit"
                      onClick={handleRegister}
                    >
                      Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account? {' '}
                      <Link to="/login" className="text-white">log in</Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}