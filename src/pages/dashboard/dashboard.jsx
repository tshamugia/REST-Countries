import Card from "../../components/card/card";
import "./dashboard.scss";
import FilterLayout from "../../components/filter-components/filter.layout";
import { useContext } from "react";
import { CountryContext } from "../../context/CountryContext";

function Dashboard() {
  const { error, loading, country, query, region } = useContext(CountryContext);

  return (
    <>
      <FilterLayout />
      {error && <div className="error">{error}</div>}
      <div className="dashboard__container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="row">
            {country
              // eslint-disable-next-line array-callback-return
              .filter((data) => {
                if (query === "" || region === "") {
                  return data;
                } else if (data.name.common.toLowerCase().includes(query.toLowerCase())) {
                  return data;
                } else if (data.region.includes(region)) {
                  return data;
                }
              })
              .map((data, k) => (
                <Card key={k} data={data} />
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
