import "./App.css";
import CourseCard from "./components/CourseCard/CourseCard";
import MiriadaxCard from "./components/MiriadaxCard/MiriadaxCard";
import Card from "./components/Card/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <MiriadaxCard
            coverImage={
              "https://miriadax-wp-uploads-pro.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/11/15080718/Aprende-a-programar-curso-300x202.jpg"
            }
            category={"PROGRAMACIÓN, DISEÑO Y DESARROLLO WEB"}
            courseName={"Aprende a programar"}
            price={"75.00$"}
          />
        </Grid>
        <Grid item xs={6}>
          <MiriadaxCard
            coverImage={
              "https://miriadax-wp-uploads-pro.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/02/15080040/Deepl-Learning-300x200.png"
            }
            category={"BI/BIG DATA"}
            courseName={"Introducción a Deep Learning"}
            price={"50.00$"}
          />
        </Grid>
        <Grid item xs={6}>
          <MiriadaxCard
            coverImage={
              "https://miriadax-wp-uploads-pro.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/02/15075958/Scrum-Developer-Certified-Expert-SDCE-300x200.png"
            }
            category={"GESTION"}
            courseName={"Scrum Developer Certified Expert – SDCE Exam"}
            price={"100.00$"}
          />
        </Grid>
        <Grid item xs={6}>
          <CourseCard
            title="Programming for the Web with JavaScript"
            institutionName="PennX"
            coverImage="https://prod-discovery.edx-cdn.org/media/course/image/dc921dbd-434a-4994-acde-1430679bca2e-5198daeb8d45.small.jpg"
            partnerLogo={
              "https://prod-discovery.edx-cdn.org/organization/logos/fc03b413-d5d6-48af-974f-21da4d244ee8-6fe2970cf98b.png"
            }
          />
        </Grid>
        <Grid item xs={6}>
          <CourseCard
            title="Computer Science 101"
            institutionName="StanfordOnline"
            coverImage="https://prod-discovery.edx-cdn.org/media/course/image/05f61d04-5acc-452b-9c34-6d447af6437f-7a7861d50d40.small.png"
            partnerLogo={
              "https://prod-discovery.edx-cdn.org/organization/logos/f53a7458-c79b-4524-97cf-28241114230e-e47d44123c3b.png"
            }
          />
        </Grid>{" "}
        <Grid item xs={6}>
          <Card
            name={"Programming for the Web with JavaScript"}
            image={
              "https://prod-discovery.edx-cdn.org/media/course/image/dc921dbd-434a-4994-acde-1430679bca2e-5198daeb8d45.small.jpg"
            }
            partnerLogo={
              "https://prod-discovery.edx-cdn.org/organization/logos/fc03b413-d5d6-48af-974f-21da4d244ee8-6fe2970cf98b.png"
            }
            partnerName={"PennX"}
          />
        </Grid>
        <Grid item xs={6}>
          <Card
            name={"Computer Science 101"}
            image={
              "https://prod-discovery.edx-cdn.org/media/course/image/05f61d04-5acc-452b-9c34-6d447af6437f-7a7861d50d40.small.png"
            }
            partnerLogo={
              "https://prod-discovery.edx-cdn.org/organization/logos/f53a7458-c79b-4524-97cf-28241114230e-e47d44123c3b.png"
            }
            partnerName={"StandforOnline"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
