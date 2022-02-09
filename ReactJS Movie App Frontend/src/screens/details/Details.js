
import React, { useEffect, useState } from 'react'
import Header from '../../common/header/Header'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Details.css'
import { Badge, ImageList, ImageListItem, ImageListItemBar, Card, FormControl, InputLabel, Input, Select, Checkbox, ListItemText, MenuItem, OutlinedInput, TextField } from '@mui/material';
import moviesData from '../home/moviesData'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Icon } from '@mui/material';
import ReactPlayer from 'react-player'

//created Details component as functional component in checkpoint 5

export default function Details() {
    const [articles, setArticles] = useState([]);

    // const updateDetails = async () => {
    //     const url = "https://cdn.upgrad.com/uploads/production/c78acb1f-6c84-44c5-bad9-14aba05e5fbf/moviesData.js";
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setArticles(parsedData);
    //     console.log(parsedData)

    // }
    // useEffect(() => {
    //     updateDetails();
    // }, [])
    {/* {articles.map((element) => {
                        return <div><img
                        src={element.poster_url}
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={element.title}
                    /></div>
                    })} */}

    return (
        <div>
            <Header />
            <div id='dContainer'>
                <Link to="/"><Button id='applyButton' variant="contained" >&#60; Back to Home</Button></Link>
                <Button id='applyButton' variant="contained" color="primary" >Book Show</Button>
            </div>

            {moviesData.map((item) => {
                return <div>
                    <div id='mainDetails'>
                        <div id='left'>
                            <ImageListItem key={item.id} >
                                <img
                                    src={item.poster_url}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                // subtitle={item.author}
                                />
                            </ImageListItem>
                        </div>
                        <div id='middle'>
                            <div><h2>{item.title}</h2></div>
                            <div> <b>Genre:</b> {item.genres}</div>
                            <div> <b>Duration:</b> {item.duration}</div>
                            <div><b>Release Date:</b>{item.release_date}</div>
                            <div><b>Rating:</b>{item.critics_rating}</div>
                            <div><b>Plot:</b>{item.storyline}</div>
                            <div>
                                <div>
                                    <b>Trailer:</b>

                                </div>
                                {/* <iframe width="650" height="320"
                                    src={item.trailer_url}>
                                </iframe> */}
                                <ReactPlayer url={item.trailer_url} />
                            </div>
                        </div>
                        <div id='right'>
                            <div>Rate this Movie:</div>
                            <div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>

                            </div>
                            <div>
                                Artists:
                            </div>
                            <div>
                                {item.artists.map((item2) => {
                                    return <div key={item2.id}>

                                        <ImageListItem key={item2.id} >
                                            <img
                                                src={item2.profile_url}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                title={item2.first_name}
                                            // subtitle={item.author}
                                            />
                                        </ImageListItem>
                                    </div>
                                })}
                            </div>
                        </div>

                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            })}


        </div>
    )
}
