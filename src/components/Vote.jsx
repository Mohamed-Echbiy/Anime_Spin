import { createSignal } from "solid-js";
import Anime from "./Anime";
import { data } from "../assets/data.json";

let dataArray = data;
function Vote() {
  const [index, setIndex] = createSignal(0);

  function getRandom() {
    let num = Math.ceil(Math.random() * dataArray.length);
    while (num === index) {
      num = Math.ceil(Math.random() * dataArray.length);
    }
    setIndex(num);
  }
  getRandom();
  return (
    <div
      id="spin"
      class="hero relative min-h-screen w-full flex flex-wrap items-center justify-center gap-5 px-3"
    >
      <Anime data={dataArray[index()]} />
      <div class="w-full flex items-center justify-center">
        <button class="btn btn-warning" onclick={getRandom}>
          shuffle
        </button>
      </div>
    </div>
  );
}

export default Vote;
