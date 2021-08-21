import "./App.css";
import CourseCard from "./components/CourseCard/CourseCard";

function App() {
  return (
    <div className="App">
      <CourseCard
        title="Programming for the Web with JavaScript"
        institutionName="PennX"
        coverImage="https://prod-discovery.edx-cdn.org/media/course/image/dc921dbd-434a-4994-acde-1430679bca2e-5198daeb8d45.small.jpg"
      />
      <CourseCard
        title="Computer Science 101"
        institutionName="StanfordOnline"
        coverImage="https://prod-discovery.edx-cdn.org/media/course/image/05f61d04-5acc-452b-9c34-6d447af6437f-7a7861d50d40.small.png"

      />
    </div>
  );
}

export default App;
