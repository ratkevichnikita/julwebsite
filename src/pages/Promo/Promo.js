import React from 'react';
import {useParams} from "react-router-dom";
import ActiveAges from "./ActiveAges";
// styles

const Promo = () => {

  const params = useParams();

  return (
    <div>
      { params?.title === 'activeAges' && <ActiveAges />}
    </div>
  );
};

export default Promo;