import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-md shadow-2xl shadow-slate-900 bg-gradient-to-r from-indigo-200 via-purple-200 to-slate-200">
          <div className="card-body">
            {/* login form */}
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                {/* email input field */}
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered bg-inherit"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* password input field */}
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered bg-inherit"
                />
              </div>
              <div className="form-control mt-6">
                {/* submit */}
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-info text-white"
                />
              </div>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="text-center mt-3">
                  <p>
                    Already Have an Account ?
                    <Link className="text-rose-700 font-semibold ml-1">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
