import Categories from "../component/module/categories";
import SearchBar from "../component/module/SearchBar";
import CarsPage from "../component/template/carsPage";
import carsData from "../data/carsData";
import AllBtn from "../component/module/AllBtn";
function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllBtn />
      <CarsPage data={cars} />
    </div>
  );
}

export default Index;
