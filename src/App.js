import logo from './logo.svg';
import './App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

function App() {
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
          <Container fixed={true} maxWidth="lg">
            <h2>Hosted projects</h2>
            <h3>React projects</h3>
            <Grid container spacing={4}>
              <Grid item xs={3}>
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

              <Grid item xs={3}>
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

              <Grid item xs={3}>
                <Card variant="outlined">
                  <CardContent>
                    <h4>More to be added...</h4>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default App;
