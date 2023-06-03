import { createSignal } from "solid-js";
import Character from "./Character";
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
    <div class="hero relative min-h-screen w-full flex flex-wrap items-center justify-center gap-5 px-3">
      <Character data={dataArray[index()]} />
      <div id="spin" class="w-full flex items-center justify-center">
        <button class="btn btn-warning" onclick={getRandom}>
          shuffle
        </button>
      </div>
    </div>
  );
}

export default Vote;
