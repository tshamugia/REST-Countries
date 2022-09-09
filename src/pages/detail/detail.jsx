import Back from "../../components/back/back";
import "./detail.scss";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBorders, fetchDetails } from "../../api/http";

function Detail() {
  const { country } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [borders, setBorders] = useState([]);
  const [neighbours, setNeighbours] = useState([]);
  /* eslint-disable no-unused-vars */
  const [link, setLink] = useState(country);
  const [error, setError] = useState("");
  console.log(data);
  console.log("Borders --->", borders);

  const navigate = useNavigate();
  console.log("from params", country);

  useEffect(() => {
    setLoading(true);
    fetchDetails(country)
      .then((data) => {
        setData(data);
        setBorders(data[0].borders);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [country]);

  useEffect(() => {
    if (!borders.length) return;
    fetchBorders(borders)
      .then((data) => setNeighbours(data))
      .catch((err) => setError(err.message));
  }, [borders]);

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
                  <li>
                    <span>Native Name: </span>
                    {item.name.official}
                  </li>
                  <li>
                    <span>Population: </span>
                    {item.population}
                  </li>
                  <li>
                    <span>Region: </span>
                    {item.region}
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    {item.subregion}
                  </li>
                  <li>
                    <span>Capital: </span>
                    {item.capital}
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Top Level Domain: </span>
                    {item.tld}
                  </li>
                  <li>
                    <span>Currencies: </span>
                    {Object.values(item.currencies)[0].name}
                  </li>
                  <li>
                    <span>Languages: </span>
                    {Object.values(item.languages).map((lang, k) => (
                      <div className="languages" key={k}>
                        {lang}
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="data-container__data--borders">
                <h5>Border countries: </h5>

                <ul>
                  {neighbours.map((neig, k) => (
                    <>
                    {neig.cioc}
                    <Link
                      key={k}
                      to={"/:country".replace(":country", neig.name.common)}
                      onClick={() => setLink(country)}
                    >
                      <li>
                        <img alt="flag" src={neig.flags.png} />
                      </li>
                    </Link>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Detail;
