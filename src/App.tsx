import { useState } from "react";
import "./App.css";
import { getLocationByLatLon } from "./services/UserService";
import PinballContainerView from "./components/PinballContainerView";
import { isInvalidInput } from "./utils/HelperFunctions";

function App() {
  const [latInput, setLatInput] = useState("");
  const [lonInput, setLonInput] = useState("");
  const [locationDataRaw, setLocationDataRaw] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLatInput = (e: any) => {
    if (isInvalidInput(e)) {
      setError("Please enter a valid latitude.");
    } else {
      setError("");
      setLatInput(e.target.value.toString());
    }
  };

  const handleLonInput = (e: any) => {
    if (isInvalidInput(e)) {
      setError("Please enter a valid longitude.");
    } else {
      setError("");
      setLonInput(e.target.value.toString());
    }
  };

  async function requestPinballLocations(lat: string, lon: string) {
    const data = await getLocationByLatLon({
      lat: latInput,
      lon: lonInput,
      send_all_within_distance: "50 miles",
    });
    if (data.errors) {
      setError(data.errors);
      setLocationDataRaw(null);
    } else {
      setError("");
      setLocationDataRaw(data.locations);
    }
    return;
  }

  async function searchButtonClick() {
    if (latInput.length === 0 || lonInput.length === 0) {
      setError("Please enter a valid latitude/longitude or click 'Near Me'.");
      return;
    }
    setIsLoading(true);
    await requestPinballLocations(latInput, lonInput);
    setIsLoading(false);
    return;
  }

  function nearMeButtonClick() {
    setIsLoading(true);
    setError("");
    async function success(position: { coords: any }) {
      const crd = position.coords;
      setLatInput(crd.latitude);
      setLonInput(crd.longitude);
      await requestPinballLocations(latInput, lonInput);
      setIsLoading(false);
      return;
    }
    function error() {
      setError(
        "To enable this feature, please enable location access in your browser."
      );
      setIsLoading(false);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <div className="App">
      <h1>Pinball Locator</h1>
      <div>
        <div>
          Enter your Latitude & Longitude and click "Search", or click "Near
          Me".
        </div>
        <div className="input-container">
          <input
            type="text"
            className="input"
            aria-label="Latitude"
            placeholder="Latitude"
            onChange={handleLatInput}
            value={latInput}
          />
          <input
            type="text"
            className="input"
            aria-label="Longitude"
            placeholder="Longitude"
            onChange={handleLonInput}
            value={lonInput}
          />
        </div>
        <div className="button-container">
          <button
            className="button"
            aria-label="searchbutton"
            onClick={searchButtonClick}
            disabled={isLoading}
          >
            Search
          </button>
          <button
            className="button"
            aria-label="nearmebutton"
            onClick={nearMeButtonClick}
            disabled={isLoading}
          >
            Near Me
          </button>
        </div>
      </div>
      {error ? <div className="error">{error}</div> : null}
      {isLoading && <h2>Loading...</h2>}
      {locationDataRaw && !isLoading && (
        <PinballContainerView locationDataRaw={locationDataRaw} />
      )}
    </div>
  );
}

export default App;
