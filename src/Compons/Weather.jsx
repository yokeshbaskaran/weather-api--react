const Weather = ({ weatherData }) => {

    return (
        <>
            <section>
                {
                    weatherData.weather ?
                        (
                            <div className="w-[500px] h-[auto] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
                                <div className="flex justify-between w-full mx-auto">
                                    <div className="w-[80%] my-4 mx-auto flex justify-between items-center">
                                        <div className="pr-3 flex flex-col items-start justify-around h-full">
                                            <div>
                                                <p className="text-xl whitespace-nowrap text-baseTextColor2">
                                                    {weatherData.name},
                                                    {weatherData.sys.country}
                                                </p>
                                                <p className="text-sm">
                                                    {weatherData.weather[0].description}
                                                </p>
                                            </div>
                                            <div>
                                                <h1 className="text-6xl font-semibold text-baseTextColor2">{weatherData.main.temp.toFixed()} *C</h1>
                                            </div>
                                        </div>

                                        <div className="w-1/2 flex flex-col justify-between items-end"
                                        >
                                            <div className="relative">
                                                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon" className="w-[120px]" />
                                            </div>
                                            {weatherData.name !== undefined ? (
                                                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                                                    <div className="flex justify-between gap-x-8">
                                                        <p>Feels Like</p>
                                                        <p className="font-bold gap-x-4 text-baseTextColor2">
                                                            {weatherData.main.feels_like.toFixed()} *C
                                                        </p>
                                                    </div>

                                                    <div className="flex justify-between gap-x-8">
                                                        <p>Humidity</p>
                                                        <p className="font-bold w-20 text-baseTextColor2">
                                                            {weatherData.main.humidity} %
                                                        </p>
                                                    </div>

                                                    <div className="flex justify-between gap-x-8">
                                                        <p className="whitespace-nowrap">High Speed</p>
                                                        <p className="font-bold w-20 text-baseTextColor2">
                                                            {weatherData.wind.speed.toFixed()} KPH
                                                        </p>
                                                    </div>

                                                    <div className="flex justify-between gap-x-8">
                                                        <p className="whitespace-nowrap">Pressure</p>
                                                        <p className="font-bold w-20 text-baseTextColor2">
                                                            {weatherData.main.pressure} hPa
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : <p>Loading Data...</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) :
                        (<> <LoadingText /></>)
                }
            </section>
        </>
    );
};

export default Weather;

const LoadingText = () => {
    return (
        <>
            <section className="mt-5 text-baseTextColor text-center italic">
                <p>Type Any City Name</p>
            </section>
        </>
    )
}
