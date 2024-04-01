import { MdMail } from "react-icons/md";

const Form = () => {
  return (
    <>
      {/* FORM WRAPPER */}
      <div className=" mt-10 bg-cyan-200 max-w-96 h-auto p-10 flex flex-col text-center align-middle justify-center rounded ">
        <MdMail size={48} className=" self-center mb-5 text-cyan-900" />

        <h1 className=" text-2xl mb-10">Subscribe for a surprise !</h1>
        <form action="#">
          {/* FIRST NAME */}
          <div className=" flex  justify-center w-full">
            <div className=" flex flex-col items-start w-full ">
              <label htmlFor="firstName" className="block ">
                First Name:
              </label>
              <div className="w-full ">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="rounded w-full mb-5 h-7"
                />
              </div>
            </div>
          </div>
          {/* EMAIL */}
          <div className=" flex  justify-center w-full">
            <div className=" flex flex-col items-start w-full">
              <label htmlFor="" className="block">
                Email:
              </label>
              <div className="w-full ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="rounded mb-5 w-full h-7"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className=" bg-cyan-900 text-gray-50 w-full p-3 rounded mt-5"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* TAILWIND EXAMPLE */}

      {/* <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Form;
