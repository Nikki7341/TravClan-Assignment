import React,{useState} from 'react';
import Dialog from "./Dialog";

const Table = ({data}) => {

      const [bids, setBids] = useState(false);
      const [minBid, setMinBid] = useState();
      const [maxBid, setMaxBid] = useState();
  
      const showBids = (arr) => {
            setBids(true)
            const amount = [];
            arr.map(value => amount.push(value.amount))
            console.log(amount);
            let bidToShow = Math.max(...amount)
            setMinBid(Math.min(...amount))
            setMaxBid(Math.max(...amount))
            return bidToShow
      }
      return (
            <>
            <div className="container">
                 
                              <table className="css-serial table table-hover">
                              <table className="table">
                                    <thead>
                                    <tr>
                                          <th scope="col">S. No.</th>
                                          <th scope="col">Customer </th>
                                          <th scope="col">Email</th>
                                          <th scope="col">Phone</th>
                                          <th scope="col">Premium</th>
                                          <th scope="col">Max/Min Bid</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                          data.map(x => 
                                    
                                    <tr key={x.id}> 
                                          <td>)</td>
                                          <th scope="row"><img src={x.avatarUrl} alt="User_image" className="avatar" /> {x.firstname} {x.lastname} </th>
                                          <td>{x.email}</td>
                                          <td>{x.phone}</td>
                                          <td>{x.hasPremium ? "Active" : "Not Active"}</td>
                                          <td>
                                          {maxBid}
                                          <button onClick={() => showBids(x.bids)}>min</button>
                                          <Dialog UserId={x.id}/>
                                          </td>
                                    </tr>

                                    )}
                                    </tbody>
                                    </table>
                              </table>
            </div>
                  
            </>
      )
}

export default Table
