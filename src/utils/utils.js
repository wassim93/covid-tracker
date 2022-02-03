import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    //multiplier: 500,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    //multiplier: 900,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    //multiplier: 1700,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const buildChartData = (data, casesType) => {
  const chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

export const prettyPrintedStat = (stat) => {
  return stat ? `+${numeral(stat).format("0.0a")}` : "+0";
};
//Draw circle on the map with interactive tooltip
export const ShowDataOnMap = (data, casesType) => {
  return data.map((country) => (
    <Circle
      key={`${country.countryInfo._id}_${country.country}`}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={Math.sqrt(country[casesType]) * 250}
    >
      <Popup>
        <div className="info__container">
          <div
            className="info__flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info__name">{country.country}</div>
          <div className="info__cases">
            Cases:{numeral(country.cases).format("0.0")}
          </div>
          <div className="info__recovered">
            Recovered:{numeral(country.recovered).format("0.0")}
          </div>
          <div className="info__deaths">
            Deaths:{numeral(country.deaths).format("0.0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};

//Draw circle on the map with interactive tooltip
export const ShowSingleCountryDataOnMap = (data, casesType) => {
  return (
    <Circle
      center={[data.countryInfo.lat, data.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={Math.sqrt(data[casesType]) * 250}
    >
      <Popup>
        <div className="info__container">
          <div
            className="info__flag"
            style={{ backgroundImage: `url(${data.countryInfo.flag})` }}
          ></div>
          <div className="info__name">{data.country}</div>
          <div className="info__cases">
            Cases:{numeral(data.cases).format("0.0")}
          </div>
          <div className="info__recovered">
            Recovered:{numeral(data.recovered).format("0.0")}
          </div>
          <div className="info__deaths">
            Deaths:{numeral(data.deaths).format("0.0")}
          </div>
        </div>
      </Popup>
    </Circle>
  );
};
