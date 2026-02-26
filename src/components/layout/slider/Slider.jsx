import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <>
      {/* <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-left">
          <img src="src/assets/images/banner-01.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Welcome To <br /> Thewayshop
                  </strong>
                </h1>
                <p className="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br /> trends to see any changes in performance over time.
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Shop New
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-center">
          <img src="src/assets/images/banner-02.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Welcome To <br /> Thewayshop
                  </strong>
                </h1>
                <p className="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br /> trends to see any changes in performance over time.
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Shop New
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src="src/assets/images/banner-03.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Welcome To <br /> Thewayshop
                  </strong>
                </h1>
                <p className="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br /> trends to see any changes in performance over time.
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Shop New
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
    </div> */}

      <Carousel autoPlay infiniteLoop>
        <div>
          <img src="src/assets/images/banner-01.jpg" alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="src/assets/images/banner-02.jpg" alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="src/assets/images/banner-03.jpg" alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
}
export default Slider;
