import React, {useState, useEffect} from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


export default function MaxWidthDialog({UserId}) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  
  const [userData, setUserData] = useState({});
  useEffect(() => { 
    const fetchbids = async () => {

      const response = await axios(`/merchants/${UserId}`);
      console.log(response.data);
      setUserData(response.data);
    };
 
    fetchbids();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Show Bids
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
      <div className="conatiner card m-2 p-2">
            <div className="row">
                  <div className="col-6">
                  <p><img src={userData.avatarUrl} alt="User_image" className="avatar2" /> {userData.firstname} {userData.lastname}</p>
                  
                  </div>
                  <div className="col-6 pt-3">
                  <p>{userData.hasPremium ? "Active" : "Not Active"}</p>
                  <p>{userData.email}</p>
                  <p>{userData.phone}</p>
                  </div>
                              </div>
                              <table class="css-serial table table-hover">
                  <thead>
                  <tr id="para">
                        <th scope="col">S No.</th>
                        <th scope="col">Id</th>
                        <th scope="col">Created</th>
                        <th scope="col">Car Title</th>
                        <th scope="col">Amount</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                        userData?.bids?.map(y => 
                        
                  <tr id="para">  
                        <td>)</td>
                        <th scope="row">{y.id}</th>
                        <td>{y.created}</td>
                        <td>{y.carTitle}</td>
                        <td>{y.amount}</td>
                  </tr>
                  )}
                  </tbody>
                  </table>
                        </div>
       
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
