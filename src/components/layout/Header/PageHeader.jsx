import { Link } from "react-router";

export default function PageHeader(title) {
  return (
    <div className="all-title-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>About Us</h2>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item active">{title.title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
