import Header from "./components/Header"
import JobCard from "./components/JobCard"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import JobData from "./JobData"


function App() {
  

  return (
    <div>
<Navbar/>
<Header/>
<SearchBar/>
{JobData.map((job)=> (
  <JobCard key={job.id} {...job}/>
))}
    </div>
  )
}

export default App
