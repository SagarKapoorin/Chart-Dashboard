import { useState ,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./scenes/Global/Header";
import Sidebar from "./scenes/Global/Sidebar";
import { CssBaseline, ThemeProvider , useMediaQuery } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import FAQ from './scenes/Faq/Index.jsx';
import Form from "./scenes/Contact-Us/Index";
import StackedBarChart from "./components/bar.jsx";
import dummyData from "./FakeData.js";
import PieChart from "./components/Pie.jsx";
import LineChart from "./components/Line.jsx";
import LineChart_new from "./components/Line2.jsx";
import Dashboard from "./scenes/Homepage/Index.jsx";
import WebsiteTrafficStats from "./components/stat.jsx";
function App() {
  const[theme,colorMode]=useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div className="app">
      <Sidebar isSidebar={isSidebar} />
        <main className="content" >
          <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
          <Route path="/form" element={<Form />} />
          <Route path='/faq' element ={<FAQ/>}/>
          <Route path='bar' element={<StackedBarChart data={dummyData}/>}/>
          <Route path='/pie' element={<PieChart data={dummyData}/>}/>
          <Route path="/line" element={<LineChart data={dummyData}/>}/>
          <Route path='/port_line'element={<LineChart_new data={dummyData}/>}/>
            </Routes>
        </main>
      </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
