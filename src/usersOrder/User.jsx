import React,{useContext} from 'react';
import { UserContext} from './Main';
function User(props) {
    const { orderCount, toggleOrder} = useContext(UserContext)

    return (
        <div className='col-4 border'>
            {/* <h5>
              {orderCount}
            </h5> */}
            <h4>
                {props.product}
            </h4>
           
            <div className='pb-1'>
                <span className={props.order?'badge text-bg-danger':'badge text-bg-success'}>
                    {props.order?'Ordered':'Not order'}
                </span>
            </div>
            <div className='text-center py-1'>
                <button className='btn btn-primary' onClick={()=>toggleOrder(props.index)}>Order</button>
            </div>
        </div>
    );
}

export default User;