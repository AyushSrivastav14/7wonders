import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Paper
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const images = [
    {
      id: 1,
      title: "Colosseum, Rome",
      url: "https://media.geeksforgeeks.org/wp-content/uploads/20230124174835/Colosseum-Rome-(1).jpg",
      description: "Rome's Colosseum is known around the world for its commanding appearance. This 2,000 years old Colosseum is Italy’s top tourist destination. This wonder was started by Vespasian, the emperor, but it wasn’t finished until Titus took over in 80 AD. The amphitheater measures 620 by 513 feet, which is significantly larger than anyone expects. Its intricate network of vaults is an engineering marvel in and of itself and could accommodate 50,000 gasping spectators. It was employed in antiquity for public performances, including simulated sea wars and gladiatorial fights. It is now a well-liked tourist destination and a representation of Imperial Rome."
    },
    {
      id: 2,
      title: "The Great Wall of China",
      url: "https://media.geeksforgeeks.org/wp-content/uploads/20230124174911/The-Great-Wall-of-China.jpg",
      description: "With a length of more than 20,000 kilometers and visibility from space, the Great Wall of China is the biggest wonder among the seven wonders of the world. It is, in fact, the world’s longest man-made building. Only a few walls were combined into one to defend the north until the Qin period. The appearance of these walls was different from how they are today. They were constructed using readily accessible materials like stones and soil. The Great Wall is believed to have its entrance in Beijing. Near the capital are the most populated neighborhoods, including Jinshanling, Juyongguan, and Jiankou. These well-preserved parts were constructed during the Ming era."
    },
    {
      id: 3,
      title: "Taj Mahal, India",
      url: "https://media.geeksforgeeks.org/wp-content/uploads/20230124174911/Taj-Mahal-India.jpg",
      description: "Shah Jahan, the emperor, had the Taj Mahal constructed so that his wife, who had passed away in 1631 while giving birth to their 14th child, may be interred there. However, the mausoleum serves as a lot more than a place for interment. Aside from the Yamuna River, the vast complex has a museum, a garden, and a pool. It took almost 22 years and 20,000 employees to create the monument, which is composed of white marble and has semi-precious stones placed in it. It was recognized as a UNESCO World Heritage Site in 1983 and is universally recognized as the finest example of Mughal architecture."
    },
    {
      id: 4,
      title: "Christ the Redeemer, Brazil",
      url: "https://media.geeksforgeeks.org/wp-content/uploads/20230124174915/Christ-the-Redeemer-Brazil-(1).jpg",
      description: "The enormous Christ, the Redeemer statue in Rio de Janeiro, which was finished in 1931, was built more recently than any of the other seven wonders of the world. The statue, which is located on the peak and is 704 metres high, is visible from everywhere in Rio. On a deck at the top of the mountain, it is supported by a square stone pedestal base. The enormous statue of Jesus Christ, also referred to as the Portuguese Cristo Redentor, serves as a national and religious emblem for Brazil. Over 6 million titles cover the reinforced concrete statue that views Rio de Janeiro. A visit to the location is highly recommended, particularly to see the chapel that was constructed at its foot to mark the statue’s 75th anniversary."
    },
    {
      id: 5,
      title: "Chichen Itza, Mexico",
      url: "https://media.geeksforgeeks.org/wp-content/uploads/20230124174916/Chichen-Itza-Mexico.jpg",
      description: "Chichén Itzá is a stunning structure with outstanding architectural and historical value, but it also offers evidence that the Mayans in Mexico were far more advanced than their contemporaries. The former coastal capital, roughly 120 miles from Cancun, was once a hive of political and commercial activity. Chichén Itzá was a significant commercial trading port by 600 AD, occupying a small area of two square miles and housing 50,000 people at its peak. Life in Chichén Itzá included science, work, and sports as well because tlachtli (sporting fields) were prevalent there. All throughout Mesoamerican pre-Columbian history, the locals engaged in a common ritual game."
    },
    {
      id: 6,
      title: "Petra, Jordan",
      url: "https://media.geeksforgeeks.org/wp-content/uploads/20230124174912/Petra-Jordan.jpg",
      description: "Petra, located in the middle of Jordan’s southwest desert, is the oldest among the seven wonders of the world. This was previously the seat of the ancient Nabatean Kingdom and was carved right into the pink sandstone cliffside. The biblical and Judaic tales that rule here are the ideal fit for Petra as a backdrop. Moses is reported to have hit a rock in the old city, causing it to erupt with water. The Nabataeans, an Arab tribe renowned for its excellent chiselling and carving abilities, established themselves on this significant location and declared it their capital around 300 BC. The Siq, The Treasury, The Monastery, The High Place of Sacrifice, and The Royal Tombs are only a few of the many components that make Petra a magnificent treasure. Also, you will be in awe of the site’s incredible history and artwork."
    },
    {
      id: 7,
      title: "Machu Picchu, Peru",
      url: "https://media.geeksforgeeks.org/wp-content/uploads/20230124174913/Machu-Picchu-Peru.jpg",
      description: "Machu Picchu was a major stop on the hippie trek in the 1960s. The Incans constructed this fascinating village. It is among the most popular tourist destinations in the world and is located in Peru’s Andes Mountains. It is thought that this estate was established as the Pachacuti, the Inca monarch, estate because of its polished dry-stone walls and traditional Inca design. The Intihuatana, the Temple of the Sun, and the Room of the Three Windows are the three main buildings of this complex. You can take the train or hike up the Incan route to visit this magnificent ancient landmark, which is a must-see."
    }
  ]


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying((prevState) => !prevState);
  };


  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Card>
            <CardMedia
              component="img"
              alt={images[currentIndex].title}
              height="400"
              image={images[currentIndex].url}
              title={images[currentIndex].title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" justifyContent="space-between">
            <Card variant="outlined">
              <Typography gutterBottom variant="h5" component="h2">
                {images[currentIndex].title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {images[currentIndex].description}
              </Typography>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {images.map((items) => (
                <Item>
                  <CardMedia
                    component="img"
                    alt={items.title}
                    height="50"
                    image={items.url}
                    style={{
                      width: 60,
                      height: 60,
                      filter: items.id === currentIndex + 1 ? 'none' : 'grayscale(100%)',
                    }}
                  />
                </Item>)
              )
              }
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" justifyContent="space-between">
            <ArrowBackIosIcon onClick={handlePrevClick} />
            {isPlaying ? <PauseIcon onClick={handlePlayPauseClick}/> : <PlayArrowIcon onClick={handlePlayPauseClick}/>}
            <ArrowForwardIosIcon onClick={handleNextClick} />
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
}
export default App;
