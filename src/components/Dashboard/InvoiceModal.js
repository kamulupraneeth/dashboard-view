import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function InvoiceModal({open,handleModalClose}) {

  return (
    <div>
      <Dialog open={open} onClose={handleModalClose}>
        <DialogTitle>Upload a file</DialogTitle>
        <DialogContent>
          <form style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:20}}>
            <input type="file" />
            <Button variant="contained" color="primary">
            Upload
          </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InvoiceModal;
