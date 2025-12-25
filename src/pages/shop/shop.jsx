// src/shop/Shop.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import FiltersSection from './FiltersSection';
import OfferCard from './OfferCard';
import RiceAndGrain from './RiceAndGrain';

const Shop = () => {
  return (
    <>
      <OfferCard />
      <div className="d-flex flex-column flex-lg-row">
        <FiltersSection />
        <RiceAndGrain />
      </div>
    </>
  );
};

export default Shop;