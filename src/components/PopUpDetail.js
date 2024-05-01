import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function PopUpDetail( {product} ) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const CustomButton = styled(Button)({
      backgroundColor: 'orange',
      color: 'white',
      '&:hover': {
        backgroundColor: 'yellow',
      },
    });

  return (
    <div>
        <Fab
          color='secondary'
          aria-label='sight'
          onClick={handleClickOpen}
        >
          <RemoveRedEyeIcon />
        </Fab>
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="description-title">
                {"Descripcion del producto"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="content-description">
                    {product}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
