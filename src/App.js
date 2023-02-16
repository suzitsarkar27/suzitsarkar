
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Protfolio from './Pages/Protfolio/Protfolio';
import Footer from './Sheared/Footer/Footer';
import Hearder from './Sheared/Header/Hearder';


function App() {
  return (
    <section className='max-w-7xl mx-auto'>
    <Hearder>
          <Home></Home>
          <Protfolio></Protfolio>
          <Contact></Contact>
          <Blogs></Blogs>
          <Footer></Footer>
         
       </Hearder>
     

    </section>
  );
}

export default App;
