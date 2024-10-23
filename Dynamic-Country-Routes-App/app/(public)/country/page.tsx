import CountryData from "@/app/components/CountryData";

export default function Country() {

  return (
    <div  className="container"> 
      <h1 className="flex justify-center items-center text-center text-2xl md:text-3xl font-bold text-black m-2">Here is Country List</h1>

      <h1 className="flex justify-center items-center font-bold md:text-3xl"> <CountryData/></h1>
      
    </div>
  );
}