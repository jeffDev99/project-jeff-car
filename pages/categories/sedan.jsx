import CarsList from "../../component/template/CarsList";
import carsData from "../../data/carsData";
export default function Sedan() {
  const sedanCars = carsData.filter((car) => car.category === "sedan");
  return (
    <div>
      <CarsList data={sedanCars} />
    </div>
  );
}
