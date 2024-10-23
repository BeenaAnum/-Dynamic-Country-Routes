import Link from "next/link";
//countryData component to handle country list
export default function CountryData(){
//function to list countries
const getCountries = () => {
    return['pakistan','canada','france','brazil','india','japan','nigeria','australia','uk','sa',];
};
 return(
    <ul className="justify-center items-center font-bold text-2xl mb-2 md:text-3xl">
        {getCountries().map((country) =>(
         <li className="bg-black p-2 m-2 rounded hover:text-violet-600" key={country}>
         <Link href={`/country/${country}`}>
         {country.charAt(0).toUpperCase() + country.slice(1)}
         </Link>
         </li>
         
        ))}
    </ul>
 );
}
