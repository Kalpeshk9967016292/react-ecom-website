export default function Register() {
  return (
    <>
      <form className="mt-3 review-form-box collapsedsd" id="formRegister">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="InputName" className="mb-0">
              First Name
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="InputName"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="InputLastname" className="mb-0">
              Last Name
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="InputLastname"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="InputEmail1" className="mb-0">
              Email Address
            </label>
            <input
              type="email"
              required
              className="form-control"
              id="InputEmail1"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Inputphone" className="mb-0">
              Phone Number
            </label>
            <input
              type="number"
              required
              className="form-control"
              id="Inputphone"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="InputPassword1" className="mb-0">
              Password
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="InputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="InputPassword2" className="mb-0">
              Confirm Password
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="InputPassword2"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group col-md-6" id="statusMessage"></div>
        </div>

        <button type="submit" id="formRegisterSubmit" className="btn hvr-hover">
          Register
        </button>
      </form>
    </>
  );
}
