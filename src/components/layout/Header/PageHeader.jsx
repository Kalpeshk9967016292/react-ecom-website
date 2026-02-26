import { Link } from "react-router-dom";

export default function PageHeader({ title }) {
  const displayTitle = title ?? "Page";

  return (
    <div className="all-title-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>{displayTitle}</h2>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">{displayTitle}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
