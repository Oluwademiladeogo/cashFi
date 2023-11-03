import './Signup.css';
const Signup = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />
      {/* <link rel="icon" type="image/x-icon" href="/images/favicon.ico" /> */}

      <title>SIGNUP</title>

      <div className="text-center">
        <main className="form-signin w-100 m-auto">
          <form action="/signup" className="form-signin" method="POST">
            <img
              className="mb-4"
              src="logo.png"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h4 mb-3 fw-normal">Signup!</h1>
            <div className="form-floating top">
              <input
                type="text"
                name="name"
                className="form-control"
                pattern="^[A-Za-z\s]+$"
                title="Must be a string"
                placeholder="name"
                required
                autoFocus
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating middle">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating bottom">
              <input
                type="password"
                name="password"
                className="form-control"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Min 8, number, upper and lowercase letters"
                placeholder="password"
                required
              />
              <div className="form-floating bottom">
              <input
                type="number"
                name="phone"
                className="form-control"
                pattern="[0-9]{11}"
                title="Enter a valid number"
                placeholder="Phone Number"
                required
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>
              <label htmlFor="floatingInput">password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <p className="mt-5 mb-3 text-muted">Already have an account?</p>

            <div className="column">
              <a
                href="/login"
                className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Login
              </a>
              <br />
            </div>

            <p className="mt-5 mb-3 text-muted">&copy; Bickersteth 2023</p>
          </form>
        </main>
      </div>
    </>
  );
};
export default Signup;
