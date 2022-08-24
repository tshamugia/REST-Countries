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
              <img src={item.flags.png} alt={k}></img>
            </div>

            <div className="data-container__data">
              <h1>{item.name.common}</h1>
              <div className="data-container__data--info">
                <ul>
                  <li>{item.population}</li>
                  <li>{item.region}</li>
                  <li>{item.capital}</li>
                  <li>{item.name.common}</li>
                  <li>{item.status}</li>
                </ul>
                <ul>
                  <li>{item.population}</li>
                  <li>{item.region}</li>
                  <li>{item.capital}</li>
                  <li>{item.name.common}</li>
                  <li>{item.status}</li>
                </ul>
              </div>
              <div className="data-container__data--borders">
                <span>Borders: </span>
                <span>germany</span>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Detail;
