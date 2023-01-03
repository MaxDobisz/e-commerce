
import Navbar from './components/Navbar';
import Content from './components/Content';
import { DataProvider } from './context/DataContext';

function App() {
  return (
      <DataProvider>
        <Navbar />
        <Content />
    </DataProvider>
  );
}

export default App;
