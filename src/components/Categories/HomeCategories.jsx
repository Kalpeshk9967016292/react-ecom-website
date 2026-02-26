import { useEffect, useState } from "react";

function HomeCategories() {
  const [getData, setData] = useState([]);
  useEffect(() => {
    const fetchCat = async () => {
      const request = await fetch(
        "https://www.iamtiksha.com/apis/store/public/api/v1/categories",
      );
      const response = await request.json();
      setData(response.data);
      console.log(response.data);
    };
    fetchCat();
  }, []);
  return (
    <>
      <div className="categories-shop">
        <div className="container">
          <div className="row">
            {getData.map((item, i) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={i}>
                  <div className="shop-cat-box">
                    <img className="img-fluid" src={item.imgurl} alt="" />
                    <a className="btn hvr-hover" href="#">
                      {item.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeCategories;
