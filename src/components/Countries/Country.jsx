import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const { capital, flags, name } = country;
  const [visited, setVisited] = useState(false);

  const passWithParams = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  return (
    <div className="rounded-lg border border-cyan-300 p-3">
      <div className="space-y-3">
        <div className="w-[300px]">
          <img
            src={flags.png}
            alt="flag"
            className="h-full w-full object-cover"
          />
        </div>
        <p>Country Name: {name.common}</p>
        <p>Capital: {capital}</p>
        <button
          onClick={passWithParams}
          className="rounded-xl bg-cyan-300 px-6 py-2"
        >
          {visited ? "Visited" : " Going"}
        </button>

        <p>{visited && "You visited this country"}</p>
      </div>
    </div>
  );
};

export default Country;
