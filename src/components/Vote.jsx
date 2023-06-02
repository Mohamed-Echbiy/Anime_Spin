import Character from "./Character";
import { createSignal } from "solid-js";
import { data } from "../assets/characters.json";

let dataArray = data.filter((char) => char.favorites >= 1500);
console.log(dataArray);
const [index, setIndex] = createSignal(1);
const [index_2, setIndex_2] = createSignal(21);
export function GoOver() {
  if (index_2() === dataArray.length - 1 && index() === dataArray.length - 2) {
    console.log("end");
    setIndex(1);
    return setIndex_2(0);
  }
  let similar = index() + 1;
  if (similar === index_2()) {
    return setIndex((pre) => pre + 2);
  }

  if (index() === dataArray.length - 1) {
    setIndex(0);
    return setIndex_2((pre) => pre + 1);
  }
  console.log("we run", {
    index: index(),
    index_2: index_2(),
    dataArray,
    similar,
  });
  return setIndex((pre) => pre + 1);
}

function Vote() {
  return (
    <div class="hero min-h-screen w-full flex flex-wrap items-center justify-center gap-5 px-3">
      <Character
        data={dataArray[index()]}
        compared={true}
        targetId={dataArray[index_2()].character.mal_id}
      />
      <Character data={dataArray[index_2()]} compared={false} />
      {/* <div class="w-full flex items-center gap-3 justify-center">
        <button
          disabled={index() === 0}
          onclick={() => setIndex((pre) => pre - 1)}
          class="btn btn-outline btn-warning "
        >
          prev
        </button>

        <button
          onclick={() =>
            setIndex((pre) => (pre === dataArray.length - 1 ? 0 : pre + 1))
          }
          class="btn btn-outline btn-success "
        >
          next
        </button>
      </div> */}
    </div>
  );
}

export default Vote;
export const useIndex = () => [index, setIndex, GoOver];
