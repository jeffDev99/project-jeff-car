import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarList from "../../component/template/CarsList"

export default function FilterCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filterdCar = carsData.filter((car) => car.price > min && car.price < max);
  if (!filterdCar.length) {
    return <h3>Not Found</h3>;
  }
  return <CarList data={filterdCar}/>;
}
