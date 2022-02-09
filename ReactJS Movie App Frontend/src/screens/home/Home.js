import React from 'react'
import Header from '../../common/header/Header'
import './Home.css'
import moviesData from './moviesData';
import { Button } from '@material-ui/core';
import { Badge, ImageList, ImageListItem, ImageListItemBar, Card, FormControl, InputLabel, Input, Select, Checkbox, ListItemText, MenuItem, OutlinedInput, TextField } from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

// Genres listdown menu with checkboxes start
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Drama',
  'Romance',
  'Horror',
  'Action',
  'Crime',
  'Thriller',
  'Political',
  'Social',
  'Fantasy',
  'Suspense',
  'Adventure',
  'Comedy',
];
// genres listdown menu with checkboxes end

// Artist listdown menu with checkboxes
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const namesArtists = [
  'Manisha Koirala',
  'Rajkumar Hirani',
  'Marlon Brando',
  'Leonardo Dicaprio',
  'Joseph Gordon-Levitt',
  'Matthew McConaughey',
  'Anne Hathway',
  'Rajkumar Rao',
  'Kay Kay Menon',
  'Anthony Paglia',

];
// Artist listdown menu with checkboxes end

// Home component made fuctional component in checkpoint 4
export default function Home() {
    const [personName, setPersonName] = React.useState([]);
    //date picker start
    const [value, setValue] = React.useState(null);
    // const [value2, setValue2] = React.useState(null);

    //date picker end


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
    return (
        
            <>
                <div>
                    <div>
                        <Header />
                    </div>
                    <div id='header2'>Upcoming Movies</div>
                    {/* <div>
                        <button type="button" class="btn btn-success">bootstrap js </button>
                        <Button variant="contained">material ui</Button>
                        <Badge badgeContent={4} color="primary">mui5
                        </Badge>
                    </div> */}
                </div>
                <ImageList sx={{ width: 2000, height: 250 }} cols={12} rowHeight={250}>
                    {moviesData.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                src={item.poster_url}
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                            // subtitle={item.author}
                            // actionIcon={
                            //     <IconButton
                            //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            //         aria-label={`info about ${item.title}`}
                            //     >
                            //         <InfoIcon />
                            //     </IconButton>
                            // }
                            />
                        </ImageListItem>

                    ))}
                </ImageList>
                <div>
                    <h2>Released Movies</h2>

                </div>
                <div className='flex-container' >
                    <div className='left' >
                        <ImageList sx={{ width: 1000, height: 900 }} cols={4} rowHeight={350}>
                            {moviesData.map((item) => (
                                <ImageListItem key={item.id}>
                                    <img
                                        src={item.poster_url}
                                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}

                                        subtitle={item.release_date}
                                    // actionIcon={
                                    //     <IconButton
                                    //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    //         aria-label={`info about ${item.title}`}
                                    //     >
                                    //         <InfoIcon />
                                    //     </IconButton>
                                    // }
                                    />
                                </ImageListItem>

                            ))}
                        </ImageList>
                    </div>
                    <div className='right'>
                        <Card variant="outlined">
                            <h3>FIND MOVIES BY:</h3>
                            <FormControl>
                                <InputLabel htmlFor="my-input">Movies Name</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                
                                <div>
                                    <FormControl sx={{ m: 1, width: 300 }}>
                                     <InputLabel id="demo-multiple-checkbox-label">Genres</InputLabel>
                                     <Select
                                          labelId="demo-multiple-checkbox-label"
                                          id="demo-multiple-checkbox"
                                         multiple
                                         value={personName}
                                         onChange={handleChange}
                                         input={<OutlinedInput label="Tag" />}
                                         renderValue={(selected) => selected.join(', ')}
                                         MenuProps={MenuProps}
                                        >
                                          {names.map((name) => (
                                          <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                          </MenuItem>
                                          ))}
                                     </Select>
                                    </FormControl>
                                </div>

                                <div>
                                    <FormControl sx={{ m: 1, width: 300 }}>
                                     <InputLabel id="demo-multiple-checkbox-label">Artists</InputLabel>
                                     <Select
                                          labelId="demo-multiple-checkbox-label"
                                          id="demo-multiple-checkbox"
                                         multiple
                                         value={personName}
                                         onChange={handleChange}
                                         input={<OutlinedInput label="Tag" />}
                                         renderValue={(selected) => selected.join(', ')}
                                         MenuProps={MenuProps}
                                        >
                                          {namesArtists.map((name) => (
                                          <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                          </MenuItem>
                                          ))}
                                     </Select>
                                    </FormControl>
                                </div>
                                <div className='inputDate' >

                                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                                      <DatePicker
                                        label="Release Date Start"
                                        value={value}
                                        onChange={(newValue) => {
                                          setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                        />
                                  </LocalizationProvider>
                                </div>
                                <div className='inputDate' >

                                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                                      <DatePicker
                                        label="Release Date End"
                                        value={value}
                                        onChange={(newValue) => {
                                          setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                        />
                                  </LocalizationProvider>
                                </div>
                                
                                <Button id='applyButton' variant="contained" color="primary" >APPLY</Button>

                            </FormControl>
                    </Card>
                  </div>

                </div>
            </>
        
    )
}

// Home component made fuctional component in checkpoint 4

// export class Home extends Component {

//     render() {

//         return (
//             <>
//                 <div>
//                     <div>
//                         <Header />
//                     </div>
//                     <div id='header2'>Upcoming Movies</div>
//                     <div>
//                         <button type="button" class="btn btn-success">bootstrap js </button>
//                         <Button variant="contained">material ui</Button>
//                         <Badge badgeContent={4} color="primary">mui5
//                         </Badge>
//                     </div>
//                 </div>
//                 <ImageList sx={{ width: 2000, height: 250 }} cols={12} rowHeight={250}>
//                     {moviesData.map((item) => (
//                         <ImageListItem key={item.id}>
//                             <img
//                                 src={item.poster_url}
//                                 // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                 alt={item.title}
//                                 loading="lazy"
//                             />
//                             <ImageListItemBar
//                                 title={item.title}
//                             // subtitle={item.author}
//                             // actionIcon={
//                             //     <IconButton
//                             //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                             //         aria-label={`info about ${item.title}`}
//                             //     >
//                             //         <InfoIcon />
//                             //     </IconButton>
//                             // }
//                             />
//                         </ImageListItem>

//                     ))}
//                 </ImageList>
//                 <div className='flex-container' >
//                     <h2>Released Movies</h2>
//                     <div className='left' >
//                         <ImageList sx={{ width: 2000, height: 350 }} cols={12} rowHeight={350}>
//                             {moviesData.map((item) => (
//                                 <ImageListItem key={item.id}>
//                                     <img
//                                         src={item.poster_url}
//                                         // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                         alt={item.title}
//                                         loading="lazy"
//                                     />
//                                     <ImageListItemBar
//                                         title={item.title}

//                                         subtitle={item.release_date}
//                                     // actionIcon={
//                                     //     <IconButton
//                                     //         sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                                     //         aria-label={`info about ${item.title}`}
//                                     //     >
//                                     //         <InfoIcon />
//                                     //     </IconButton>
//                                     // }
//                                     />
//                                 </ImageListItem>

//                             ))}
//                         </ImageList>
//                     </div>
//                     <div className='right'>
//                         right
//                         <Card variant="outlined">
//                             <h3>FIND MOVIES BY:</h3>
//                             <FormControl>
//                                 <InputLabel htmlFor="my-input">Movies Name</InputLabel>
//                                 <Input id="my-input" aria-describedby="my-helper-text" />
                                

//                             </FormControl>
//                         </Card>
//                     </div>

//                 </div>
//             </>
//         )
//     }
// }

// export default Home
