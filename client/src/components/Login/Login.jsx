import './Login.css';
const Login = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      />

      <title>LOGIN</title>

      <div className="text-center">
        <main className="form-signin w-100 m-auto">
          <form action="/login" className="form-signin" method="POST">
            <img
              className="mb-4"
              src="logo.png"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h4 mb-3 fw-normal">Welcome Back!</h1>
            <div className="form-floating top">
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
                placeholder="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Min 8, number, upper and lowercase letters"
                required
              />
              <label htmlFor="floatingInput">password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              login
            </button>
            <p className="mt-5 mb-3 text-muted">Don't have an account?</p>
              <div className="column">
                <a
                  href="/signup"
                  className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Sign Up
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
export default Login;
