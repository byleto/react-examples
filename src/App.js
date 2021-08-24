import "./App.css";
import CourseCard from "./components/CourseCard/CourseCard";
import MiriadaxCard from "./components/MiriadaxCard/MiriadaxCard";
import Card from "./components/Card/Card";
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
    <div className="row">
      <header className="App-header">
        <h1>My courses page</h1>
      </header>
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
      <nav>
        <a href="#">Home</a>
        <a href="#">News</a>
        <a href="#">Contact</a>
        <a href="#">About Me</a>
      </nav>
      <h2>Course Cards using the component Card (edx styles with pure CSS) </h2>
      <section>
        <div className="container">
          <div className="item">
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
          </div>
          <div className="item">
            <Card
              name="Computer Science 101"
              partnerName="StanfordOnline"
              image="https://prod-discovery.edx-cdn.org/media/course/image/05f61d04-5acc-452b-9c34-6d447af6437f-7a7861d50d40.small.png"
              partnerLogo={
                "https://prod-discovery.edx-cdn.org/organization/logos/f53a7458-c79b-4524-97cf-28241114230e-e47d44123c3b.png"
              }
            />
          </div>
          <div className="item">
            <Card
              name={"Introduction to Progamming in C++"}
              image={
                "https://prod-discovery.edx-cdn.org/media/course/image/62ed92c9-22b6-43a6-a755-0f296d0f64ce-8b3c8aa8f0af.small.jpeg"
              }
              partnerLogo={
                "https://prod-discovery.edx-cdn.org/organization/logos/dc6d25de-0dac-43e6-a915-e362bf8b4403-917c4e000b69.png"
              }
              partnerName={"NYUx"}
            />
          </div>
          <div className="item">
            <Card
              name={
                "Introduction to Computer Science and Programming Using Python"
              }
              image={
                "https://prod-discovery.edx-cdn.org/media/course/image/956319ec-8665-4039-8bc6-32c9a9aea5e9-885268c71902.small.jpg"
              }
              partnerLogo={
                "https://prod-discovery.edx-cdn.org/organization/logos/2a73d2ce-c34a-4e08-8223-83bca9d2f01d-2cc8854c6fee.png"
              }
              partnerName={"MITx"}
            />
          </div>
        </div>
      </section>
      <h2>
        Course Cards using the component MiriadaxCard (Miriadax style with
        Material UI){" "}
      </h2>
      <section>
        <div className="container">
          <div className="item">
            <MiriadaxCard
              coverImage={
                "https://miriadax-wp-uploads-pro.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/11/15080718/Aprende-a-programar-curso-300x202.jpg"
              }
              category={"PROGRAMACIÓN, DISEÑO Y DESARROLLO WEB"}
              courseName={"Aprende a programar"}
              price={"75.00$"}
            />
          </div>
          <div className="item">
            <MiriadaxCard
              coverImage={
                "https://miriadax-wp-uploads-pro.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/02/15075958/Scrum-Developer-Certified-Expert-SDCE-300x200.png"
              }
              category={"GESTION"}
              courseName={"Scrum Developer Certified Expert – SDCE Exam"}
              price={"100.00$"}
            />
          </div>
          <div className="item">
            <MiriadaxCard
              coverImage={
                "https://miriadax-wp-uploads-pro.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/02/15080040/Deepl-Learning-300x200.png"
              }
              category={"BI / BIG DATA"}
              courseName={"Introduccion a Deep Learning"}
              price={"50.00$"}
            />
          </div>
          <div className="item">
            <MiriadaxCard
              coverImage={
                "https://miriadax-wp-uploads-pro.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/19140145/bi-a-600x363.jpeg"
              }
              category={"BI / BIG DATA"}
              courseName={
                "Análisis de datos y Business Intelligence con Microsoft Power BI"
              }
              price={"250.00$"}
            />
          </div>
        </div>
      </section>
      <h2>
        Course Cards using the component CourseCard (Edx style with Material UI){" "}
      </h2>
      <section>
        <div className="container">
          <div className="item">
            <CourseCard
              title="Programming for the Web with JavaScript"
              institutionName="PennX"
              coverImage="https://prod-discovery.edx-cdn.org/media/course/image/dc921dbd-434a-4994-acde-1430679bca2e-5198daeb8d45.small.jpg"
              partnerLogo={
                "https://prod-discovery.edx-cdn.org/organization/logos/fc03b413-d5d6-48af-974f-21da4d244ee8-6fe2970cf98b.png"
              }
            ></CourseCard>
          </div>
          <div className="item">
            <CourseCard
              title="Computer Science 101"
              institutionName="StanfordOnline"
              coverImage="https://prod-discovery.edx-cdn.org/media/course/image/05f61d04-5acc-452b-9c34-6d447af6437f-7a7861d50d40.small.png"
              partnerLogo={
                "https://prod-discovery.edx-cdn.org/organization/logos/f53a7458-c79b-4524-97cf-28241114230e-e47d44123c3b.png"
              }
            />
          </div>
          <div className="item">
            <CourseCard
              title="Introduction to Progamming in C++"
              institutionName="NYUx"
              coverImage="https://prod-discovery.edx-cdn.org/media/course/image/62ed92c9-22b6-43a6-a755-0f296d0f64ce-8b3c8aa8f0af.small.jpeg"
              partnerLogo={
                "https://prod-discovery.edx-cdn.org/organization/logos/dc6d25de-0dac-43e6-a915-e362bf8b4403-917c4e000b69.png"
              }
            />
          </div>
          <div className="item">
            <CourseCard
              title="Introduction to Computer Science and Programming Using Python"
              institutionName="MITx"
              coverImage="https://prod-discovery.edx-cdn.org/media/course/image/956319ec-8665-4039-8bc6-32c9a9aea5e9-885268c71902.small.jpg"
              partnerLogo={
                "https://prod-discovery.edx-cdn.org/organization/logos/2a73d2ce-c34a-4e08-8223-83bca9d2f01d-2cc8854c6fee.png"
              }
            />
          </div>
        </div>
      </section>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
