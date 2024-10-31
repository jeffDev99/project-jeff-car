import CarsList from "../../component/template/CarsList";
import carsData from "../../data/carsData";
export default function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");
  return (
    <div>
      <CarsList data={sportCars} />
    </div>
  );
}
