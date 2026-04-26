import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function App() {
  const [files, setFiles] = useState([]);
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/repos/adrszl/freecodecamp/contents/javascript-certification/labs")
      .then(res => res.json())
      .then(data => setFiles(data));
  }, []);

  const loadFile = (url) => {
    fetch(url)
      .then(res => res.text())
      .then(setCode);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Adrian Szlegel - Personal Projects
        </h1>
        <p>This portfolio website will present all the personal projects created by Adrian Szlegel. For now app is still in development. For more info visit the website below</p>
        <a
          className="App-link"
          href="https://adrszl.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adrian Szlegel
        </a>
      </header>
      <main>
        <section>
          <Box padding={4}>
            <h2>Hosted projects</h2>
            <h3>React projects</h3>
            <Grid container spacing={4}>
              <Grid size={2}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>Personal Portfolio Page (React version)</h4>
                    <p>Personal portfolio page based on React. Same website as the static one <a href="https://adrszl.github.io" target="_blank" rel="noopener, noreferrer">check it here</a> but built with the use of React. Contains all the necessary info about me, like certificates, work experience and contact form.</p>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://adrian-szlegel.netlify.app/">Open project</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid size={2}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>Star Wars Battle App</h4>
                    <p>A simple and random card game for two players. You're selecting the property on which you're fighting (comparing). Who is stronger wins. Based on real Star Wars people, starships and more.</p>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://adrian-szlegel-react-sw-battle-app.netlify.app/">Open project</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid size={2}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>Movie search</h4>
                    <p>Movie search, based on the React, Redux and Antd, responsible for the UI. Allows you to search for a specific movie, in return giving you official poster, title and the production year. Data is coming from the open API <u>https://www.omdbapi.com</u></p>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://adrian-szlegel-react-movie-search.netlify.app/">Open project</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid size={2}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>Load Animation</h4>
                    <p>Different loading animations and placeholders, based on the React, Next.js and Storybook. Allows to choose appropriate loading placeholder, based on the content. Different loaders for images, paragraphs, tables, text blocks, etc.</p>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://adrian-szlegel-react-load-animation.netlify.app/">Open project</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid size={2}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>Character Card</h4>
                    <p>RPG Character Card, based on the React. With all the statistics, skills, abilities, etc.</p>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://adrian-szlegel-react-character-card.netlify.app/">Open project</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid size={2}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>Tic Tac Toe</h4>
                    <p>Tic Tac Toe game, based on the React. With the possibility to enter custom user names. Includes logs, with all the moves made.</p>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://react-tic-tac-toe-spa.netlify.app/">Open project</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid size={2}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>Investment Calculator</h4>
                    <p>Investment Calculator, based on the React. You can calculate your future income by adding proper factors and include your initial investment.</p>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="https://react-investment-calculator-spa.netlify.app/">Open project</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid size={2}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>More to be added...</h4>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </section>
      </main>
    </div>
  );
}

export default App;
