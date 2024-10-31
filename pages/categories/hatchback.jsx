import CarsList from "../../component/template/CarsList";
import carsData from "../../data/carsData";
export default function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");
  return (
    <div>
      <CarsList data={hatchbackCars} />
    </div>
  );
}
