import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [contries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("Visited country", country);
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  return (
    <>
      <h2 className="my-9 text-4xl font-bold">Countries : {contries.length}</h2>
      <div className="p-3">
        <p className="py-7">Visited Country List : {visitedCountry.length}</p>
        <div className="flex flex-col space-y-3">
          {visitedCountry.map((vCountry) => (
            <div key={vCountry.cca2}>
              <div className="grid grid-cols-1 space-y-5 rounded-xl border border-red-200 p-4">
                <div className="h-8 w-8">
                  <img
                    src={vCountry.flags.png}
                    alt="Flag"
                    className="h-full w-full"
                  />
                </div>
                <p>{vCountry.name.common}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="m-12 grid grid-cols-1 justify-center gap-7 space-y-4 py-4 md:grid-cols-2 lg:grid-cols-3">
        {contries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
