// src/shop/Shop.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import FiltersSection from './FiltersSection';
import OfferCard from './OfferCard';
import RiceAndGrain from './RiceAndGrain';

const Shop = () => {
  return (
    <>
      <OfferCard />
      <div style={{display:'flex'}}>
      <FiltersSection />
      <RiceAndGrain />
      </div>
    </>
  );
};

export default Shop;