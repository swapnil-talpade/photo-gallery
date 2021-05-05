import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
const ImageResults = ({ images }) => {

    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    let imageList;
    const handleOpen = image => {
        setOpen(true);
        setCurrentImage(image)
    }
    const handleClose = () => {
        setOpen(false)
    }
    if (images) {
        imageList = imageList = (
            <GridList cols={4}>
                {  images.map(img => (
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        actionIcon={
                            <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                                <ZoomIn color="white" />
                            </IconButton>
                        }
                    >
                        <img src={img.largeImageURL} alt="" />
                    </GridTile>
                ))
                }
            </GridList>
        )
    } else {
        imageList = null;
    }

    const action = [
        <FlatButton label="Close" primary={true} onClick={handleClose} />
    ]
    return (
        <div style={{ marginLeft: 50, marginRight: 50, marginTop: 20 }}>
            {imageList}
            <Dialog
                actions={action}
                modal={false}
                open={open}
                onRequestClose={handleClose}>
                <img src={currentImage} alt="" style={{ width: '100%' }} />
            </Dialog>
        </div>
    )
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults
