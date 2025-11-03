import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen transition-colors duration-350"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center text-3xl font-bold text-white pt-10 drop-shadow-lg">
        Choose Your Mood Color 🎨
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-5 px-2">
        <div className="flex justify-center flex-wrap shadow-lg bg-black gap-3 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-black hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "deeppink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("white")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-black border hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("gray")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white hover:scale-110 transition-transform duration-150"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor(`hsl(${Math.random() * 360}, 70%, 60%)`)}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-white bg-linear-to-r from-indigo-500 to-purple-500"
          >
            Random
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none rounded-full px-3 py-2 shadow-lg text-black bg-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
