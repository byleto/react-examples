import "./App.css";
import CourseCard from "./components/CourseCard/CourseCard";
import Card from "./components/Card/Card";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <CourseCard
            title="Programming for the Web with JavaScript"
            institutionName="PennX"
            coverImage="https://prod-discovery.edx-cdn.org/media/course/image/dc921dbd-434a-4994-acde-1430679bca2e-5198daeb8d45.small.jpg"
          />
        </Grid>
        <Grid item xs={2}>
          <CourseCard
            title="Computer Science 101"
            institutionName="StanfordOnline"
            coverImage="https://prod-discovery.edx-cdn.org/media/course/image/05f61d04-5acc-452b-9c34-6d447af6437f-7a7861d50d40.small.png"
          />
        </Grid>{" "}
        <Grid item xs={2}>
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
        <Grid item xs={2}>
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
