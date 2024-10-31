import CarsList from "../../component/template/CarsList";
import carsData from "../../data/carsData";
export default function Suv() {
  const suvCars = carsData.filter((car) => car.category === "suv");
  return (
    <div>
      <CarsList data={suvCars} />
    </div>
  );
}
