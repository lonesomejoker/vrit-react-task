import FetchApi from "./components/FetchApi";
import Searching from "./components/Searching";

function App() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center py-5 lg:flex justify-evenly font-[500] font-madimi h-screen"
      style={{
        backgroundImage:
          "url('https://images.hdqwalls.com/download/dark-river-digital-art-4k-cg-3840x2400.jpg')",
      }}
    >
      <Searching />
      <FetchApi />
    </div>
  );
}

export default App;
