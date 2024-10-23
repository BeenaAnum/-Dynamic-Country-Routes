import React from "react";
interface CountryCardProps {
  name: string;
  population: number;
  capital: string;
}

const CountryCard = ({ name, population, capital }: CountryCardProps) => {
  return (
    <div>
      <h1 className="flex justify-center items-center font-bold text-2xl text-black md:text-3xl">Country Details</h1>
      <p className="flex justify-center items-center font-bold">Country: {name}</p>
      <p className="flex justify-center items-center font-bold">Population:{population}</p>
      <p className="flex justify-center items-center font-bold">Capital: {capital}</p>
    </div>
  );
}

export default CountryCard




