import { useRouter } from "next/router";
import CarDetails from "../../component/template/CarDetails";
import carsData from "../../data/carsData";
export default function CardDetail() {
  const router = useRouter() || "";
  const { carId } = router.query;
  // const carDetails = carsData.find(car=>car.id===Number(carId))
  const carDetails = carsData[Number(carId)-1]
  
  return <CarDetails {...carDetails}>CardDetail : {carDetails}</CarDetails>;
}
