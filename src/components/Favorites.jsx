import { For, createEffect } from "solid-js";
import { useDataContext } from "../context/Data";
import Anime from "./Anime";
import FillHeart from "./Icons/FillHearth";

function Favorites() {
  const { favorite } = useDataContext();
  createEffect(() => {
    console.log(favorite(), "favorite");
  });
  return (
    <main class="hero min-h-screen flex items-center flex-col justify-center mb-16">
      <h1 class="text-4xl flex items-center gap-2 mb-16">
        <span>Your Favorites</span>
        <FillHeart />
      </h1>
      <div class="w-full flex items-center justify-center flex-wrap gap-3 ">
        <For
          each={favorite()}
          fallback={() => (
            <div class="flex items-center justify-center min-h-[300px]">
              <span class="loading loading-infinity loading-2xl"></span>
            </div>
          )}
        >
          {(item) => (
            <div class="">
              <Anime data={item} favorite={true} />
            </div>
          )}
        </For>
      </div>
    </main>
  );
}
export default Favorites;
