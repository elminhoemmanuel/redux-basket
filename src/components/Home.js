import React,{ useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/basket';
import Header from './Header';

const Home = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.basket);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      dispatch(fetchProducts(()=>setLoading(false)));
      console.log(products);
    }, [loading]);
    
    // const { error,players, sortedPlayers } = useSelector((state) => state.players);

  return <div className="px-16">
      {
          loading ? <p className="py-16 text-center font-bold">Loading...</p> :
          <div>
              {
                  products[0] !== undefined&& 
                  <div className="">
                      <Header />
                      Hello
                  </div>
              }
          </div>
      }
  </div>;
};

export default Home;
