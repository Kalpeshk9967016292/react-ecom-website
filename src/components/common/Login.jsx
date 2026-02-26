import { useActionState } from "react";

export default function Login() {
  const loginForm = async (prevData, formData) => {
    const name = formData.get("userName");
    const password = formData.get("password");

    if (!name || !password) {
      return { message: "enter User name and password", name, password };
    }

    if (name.length <= 5) {
      return { message: "user name must be longer than 5 characters", name, password };
    }

    try {
      const response = await fetch(
        "https://www.iamtiksha.com/apis/store/public/api/v1/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            password,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      return { message: "network error", error: err };
    }
  };
  const [data, action, pending] = useActionState(loginForm);
  console.log(data);

  return (
    <>
      <div className="cart-box-main">
        <div className="container">
          <div className="row new-account-login">
            <div className="col-sm-12 col-lg-12 mb-3">
              <form className="mt-3 review-form-box" action={action}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="InputEmail" className="mb-0">
                      Email Address / Phone Number
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email / Phone Number"
                      name="userName"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="InputPassword" className="mb-0">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="form-group col-md-6"></div>
                </div>
                <button
                  disabled={pending}
                  type="submit"
                  className="btn hvr-hover"
                >
                  Login
                </button>
              </form>
            </div>
            <div className="col-sm-12 col-lg-12 mb-3">
              <div className="title-left"></div>
              <h5>
                <a
                  data-toggle="collapse"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Click here to Register
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
