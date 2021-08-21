import "./App.css";
import CourseCard from "./components/CourseCard/CourseCard";
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
