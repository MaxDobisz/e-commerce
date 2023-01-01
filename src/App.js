
import Navbar from './components/Navbar';
import Content from './components/Content';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="app">
      <DataProvider>
        <Navbar />
        <Content />
      </DataProvider>
    </div>
  );
}

export default App;
