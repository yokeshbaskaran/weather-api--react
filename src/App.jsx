import "./App.css";
import axios from "axios";
import { ToggleThemeMode } from "./Compons/ThemeSlider";
import { useState } from "react";
import Weather from "./Compons/Weather";

const App = () => {
  const [selectedMode, setSelectedMode] = useState("light");

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const [loading, setloading] = useState("");

  const API_KEY = "04f59c2ad345d593fff10b96ef6486b8";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios
        .get(URL)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          if (err) {
            setloading(
              "Please Refresh the Page and Correct City Name like Tamilnadu, India, London, New York"
            );
            const timeout = setTimeout(() => {
              setloading("");
            }, 5000);
            return () => clearTimeout(timeout);
          }
        });
      setLocation("");
    }
  };

  return (
    <>
      <section className={`${selectedMode === "light" ? "lightie" : "darkie"}`}>
        <div className="a absolute top-0 right-0 m-5">
          <ToggleThemeMode
            selected={selectedMode}
            setSelected={setSelectedMode}
          />
        </div>

        <div className="pt-24 h-screen bg-baseBgColor">
          <h1 className="text-center m-10 font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-30% via-sky-500 via-50% to-emerald-500 to-80%">
            Weather App
          </h1>
          <div className="w-full h-auto relative">
            <div className="text-center p-4">
              <input
                type="text"
                className="py-3 mb-5 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600  placeholder:text-gray-400 focus:outline-none bg-white/100 shadow-md "
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDownCapture={searchLocation}
              />
            </div>
            <Weather weatherData={data} />
          </div>

          <div className="mt-5 text-center text-red-400">{loading}</div>
        </div>
      </section>
    </>
  );
};

export default App;
