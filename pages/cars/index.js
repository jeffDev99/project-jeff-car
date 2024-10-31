import Categories from "../../component/module/categories";
import SearchBar from "../../component/module/SearchBar";
import CarsPage from "../../component/template/carsPage";
import carsData from "../../data/carsData";

export default function index() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}
