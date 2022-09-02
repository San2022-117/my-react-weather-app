import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-app">
      <div className="row header">
        <div className="col-6">
          <h1>Weather Channel Bee</h1>
        </div>
        <div className="col-6">
          <span className="dayTime" alt="time">
            day, time
          </span>
        </div>
      </div>

      <div className="row forecast">
        <div className="col-6 weather-search">
          <form className="search-engine">
            <label for="search-city-input" className="search-weather">
              {" "}
              Search weather for:{" "}
            </label>
            <input
              type="text"
              placeholder="Search city..."
              className="search-city-form"
            />
            <input
              type="submit"
              value="Search"
              className="search-city-button"
            />
          </form>

          <div className="row serach-result primary-info">
            <div className="col-3 primary city">
              {" "}
              <span className="city" alt="location">
                location
              </span>
            </div>
            <div className="col-3 primary temperature">
              <span className="temperature">25</span>
              <small>°C | °F</small>
            </div>
            <div className="col-3 primary description">Sunny</div>
            <div className="col-3">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/thunderstorms.png"
                alt="weather-icon"
                className="weather-icon"
              />
            </div>
          </div>
        </div>

        <div className="col-6 further-info">
          <div className="row serach-result">
            <div className="col-4 wind">
              Wind: <br />
              <span></span>
              m/s
            </div>
            <div className="col-4 pressure">
              Pressure: <br />
              <span></span>
              kPh
            </div>
            <div className="col-4 humidity">
              Humidity: <br />
              <span></span>%
            </div>
          </div>
        </div>
      </div>
      <div className="weekly-forecast"></div>
      <small className="website-info">
        This website is managed by
        <a
          href="https://github.com/San2022-117"
          target="_blank"
          rel="noreferrer"
        >
          San2022-117
        </a>
        .
      </small>
    </div>
  );
}
