import Back from "../../components/back/back";
import "./detail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchDetails } from "../../api/http";

function Detail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(data);

  const navigate = useNavigate();
  const { country } = useParams();
  console.log("from params", country);

  useEffect(() => {
    setLoading(true);
    fetchDetails(country)
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [country]);

  return (
    <>
      <div className="detail__container">
        <Back navigate={navigate} />
      </div>
      {error && <div className="error_detail">{error}</div>}

      {loading ? (
        <div className="loading_detail">Loading...</div>
      ) : (
        data.map((item, k) => (
          <div className="data-container" key={k}>
            <div className="data-container__flag">
              <img src={item.flags.svg} alt={k}></img>
            </div>

            <div className="data-container__data">
              <h1>{item.name.common}</h1>
              <div className="data-container__data--info">
                <ul>
                  <li><span>Native Name: </span>{item.name.common}</li>
                  <li><span>Population: </span>{item.population}</li>
                  <li><span>Region: </span>{item.region}</li>
                  <li><span>Sub Region: </span>{item.subregion}</li>
                  <li><span>Capital: </span>{item.capital}</li>
                </ul>
                <ul>
                  <li><span>Top Level Domain: </span>{item.tld}</li>
                  <li><span>Currencies: </span></li>
                  <li><span>Languages: </span>{Object.values(item.languages)}</li>
                  
                </ul>
              </div>
              <div className="data-container__data--borders">
                <h5>Border countries: </h5>
                <ul><li>germany</li></ul>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Detail;
