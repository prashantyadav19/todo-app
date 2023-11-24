import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import ContactUs from './components/ContactUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './screen/SignIn';
import DynamicInputs from './screen/DynamicInputs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dynamicInputs" element={<DynamicInputs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
