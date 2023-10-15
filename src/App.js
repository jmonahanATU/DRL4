// Importing the CSS file for styling
import './App.css';

// Importing Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing components from specific paths
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importing routing-related components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing custom components from specific paths
import Create from './components/create';
import Read from './components/read';

// Main functional component representing the application
function App() {
  return (
    // Using BrowserRouter for routing
    <BrowserRouter>
      <div className="App"> {/* Container for the application */}
        {/* Bootstrap Navbar */}
        <Navbar bg="primary" data-bs-theme="primary">
          <Container>
            {/* Navbar brand with a link to the home page */}
            <Navbar.Brand href="/">Navbar</Navbar.Brand>

            {/* Navbar navigation */}
            <Nav className="me-auto">
              {/* Navigation link to the home page */}
              <Nav.Link href="/">Home</Nav.Link>

              {/* Navigation link to the "Create" page */}
              <Nav.Link href="/create">Create</Nav.Link>

              {/* Navigation link to the "Read" page */}
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Setting up the routes */}
        <Routes>
          {/* Route for the home page, rendering the Content component */}
          <Route path='/' element={<Content></Content>}></Route>

          {/* Route for the "Read" page, rendering the Read component */}
          <Route path='/read' element={<Read></Read>}></Route>

          {/* Route for the "Create" page, rendering the Create component */}
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>

        {/* Commented out components */}
        {/* <Header></Header>
        <Content></Content>
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

// Exporting the App component as the default export
export default App;
