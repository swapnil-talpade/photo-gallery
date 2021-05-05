import React, { useState } from 'react';
import axios from 'axios';
import ImageResults from '../imageResults/ImageResults'
import { APIKEY, APIURL } from '../../constant';

const Search = () => {

    const [searchText, setSearchText] = useState('');
    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        setSearchText(e.target.value)
        const getData = () => {
            axios.get(`${APIURL}/?key=${APIKEY}&q=${searchText}&image_type=photo`)
                .then(res => setImages(res.data.hits))
                .catch(error => console.log(error))
        }
        getData();
        console.log(images);
    }

    return (
        <div>
            <h1 style={{ color: "white", textAlign: "center", fontFamily: "Gill Sans Extrabold, sans-serif", textDecoration: "underline" }}>Photo Gallery by Swapnil</h1>
            <input
                type="text"
                style={{
                    background: 'black',
                    color: 'white',
                    marginLeft: 570,
                    marginTop: 20,
                    paddingTop: 20,
                    paddingLeft: 70,
                    fontSize: 30,
                    borderTopStyle: "hidden",
                    borderRightStyle: "hidden",
                    borderLeftStyle: "hidden",
                    outline: "none",
                    borderBottomStyle: "groove",

                }}
                placeholder="Search Images"
                name="SearchText"
                onChange={handleChange}
                value={searchText}
            />
            <br />
            {images.length > 0 ? <ImageResults images={images} /> : null}
        </div>
    )
}

export default Search
