import React,{useState} from 'react';
import Dialog from "./Dialog";
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const Table = ({data}) => {

      const [bids, setBids] = useState(false);
      const [startPage, setStartPage] = useState(0);
      const [endPage, setEndPage] = useState(5);
  

      const showMinBids = (arr) => {
            const amount = [];
            arr.map(value => amount.push(value.amount))
            return Math.min(...amount)
      }
      const bidsToShow = (arr) => {
            const maxAmount = [];
            arr.map(value => maxAmount.push(value.amount))
            return Math.max(...maxAmount)

      }
      const Previous = () => {
            setStartPage(startPage - 5)
            setEndPage(endPage - 5);
      }

      const Next = () => {
            setStartPage(startPage + 5)
            setEndPage(endPage + 5);
      }

      const pagination = () => {

            return data.slice(startPage,endPage)
      }    
      
      const sortbids = () => {
            setBids(true);
      }
      const sortDownbids = () => {
            setBids(false);
      }
      return (
            <>
            <div className="container justify-content-center">
                 
                              <table className="css-serial table table-hover">
                              <table className="table">
                                    <thead>
                                    <tr>
                                          <th scope="col">S. No.</th>
                                          <th scope="col">Customer </th>
                                          <th scope="col">Email</th>
                                          <th scope="col">Phone</th>
                                          <th scope="col">Premium</th>
                                          <th scope="col">Max/Min Bid 
                                          
                                          {bids ? 
                                          <IconButton color="primary" aria-label="add an alarm">
                                          <ArrowUpwardIcon onClick={() => sortDownbids()}/>
                                          </IconButton>
                                           : 
                                           <IconButton color="secondary" aria-label="add an alarm">
                                          <ArrowDownwardIcon onClick={() => sortbids()}/>
                                          </IconButton>
                                           }
                                           
                                           </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                          pagination().map(x => 
                                    
                                    <tr id="para" key={x.id}> 
                                          <td>)</td>
                                          <th scope="row">
                                          <img src={x.avatarUrl} alt="User_image" className="avatar" />
                                           {x.firstname} {x.lastname} </th>
                                          <td>{x.email}</td>
                                          <td>{x.phone}</td>
                                          <td>{x.hasPremium ? "Active" : "Not Active"}</td>
                                          {bids ? 
                                          <td>{showMinBids(x.bids)} <br />
                                          <Dialog UserId={x.id}/>
                                          </td> 
                                          :
                                          <td>{bidsToShow(x.bids)} <br />
                                          <Dialog UserId={x.id}/>
                                          </td> 
                                          }
                                    </tr>

                                    )}
                                    </tbody>
                                    </table>
                              </table>
                              <div className="row justify-content-center">
                                    <duv className="col-4">
                                          <IconButton color="primary" aria-label="add an alarm">
                                          <NavigateBeforeIcon onClick={() => Previous()}/>
                                          </IconButton>
                                          <IconButton color="primary" aria-label="add an alarm">
                                          <NavigateNextIcon onClick={() => Next()}/>
                                          </IconButton>
                                    </duv>
                              </div>
            </div>
                  
            </>
      )
}

export default Table
