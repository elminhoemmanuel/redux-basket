import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setBasket } from '../redux/actions/basket';
import { SET_BASKET } from '../redux/types';

const Header = () => {

    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.basket);
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
        
    //   }, [loading]);



  return <div className="py-8 border-b border-gray-400 flex justify-end px-16">
      <div className="mx-2">
          Basket Items: 0
      </div>
      <div className="mx-2">
          Total Price: 0
      </div>
  </div>;
};

export default Header;
