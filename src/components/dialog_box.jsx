// import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';

// import { DialogTitle } from "@mui/material"
import PropTypes from "prop-types"

// import DialogComponent from './DialogComponent';
function DialogBox({ open, close, title, list }) {
    if (!open) {
        console.log("bhenchod")
        return null
    }
    console.log('hello')
    return (
        <div>
            <Dialog open={open} onClose={close} >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {list.length > 0 ? (
                        list.map((language) => {
                            console.log(language);
                            return (
                                <div key={language.title} className="flex items-center mb-2">
                                    <span className="mr-2">{language.title}</span>
                                    <LinearProgress variant="determinate" value={language.progress} style={{ flexGrow: 1 }} />
                                    <span className="ml-2">{language.progress}%</span>
                                </div>
                            );
                        })
                    ) : (
                        <div>No languages available.</div>
                    )}

                </DialogContent>            </Dialog>
        </div>
    )
}

DialogBox.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired  // `close` is a function and required
};

export default DialogBox