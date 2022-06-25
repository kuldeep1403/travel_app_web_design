import About from "./components/About";
import Header from "./components/Header";
import Features from "./components/Features";
import SectionTours from "./components/SectionTours";
import SectionStories from "./components/SectionStories";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import PopUp from "./components/PopUp";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <SectionTours />
        <SectionStories />
        <BookingSection />
      </main>
      <Footer />
      <PopUp />
    </div>
  );
}

export default App;
