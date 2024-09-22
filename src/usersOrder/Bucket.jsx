import React, { useContext } from "react";
import { UserContext } from "./Main";
import {orderCount} from './User'
function Bucket(props) {
  return (
    <div className="col-4 border">
      <button>{orderCount}</button>
    </div>
  );
}

export default Bucket;
