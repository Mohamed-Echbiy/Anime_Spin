import {
  AiFillUpSquare,
  AiFillDownSquare,
  AiOutlinePlaySquare,
} from "solid-icons/ai";
import { GoOver } from "./Vote";
import { Show, createEffect } from "solid-js";

function Character(props) {
  async function voteDumb(mode) {
    console.log(props.targetId);
    const response = await fetch(
      `http://localhost:8000/api/${
        mode === "smart" ? "vote_dumb" : "vote_smart"
      }/${props.targetId}`,
      {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log(response);
    GoOver();
  }

  return (
    <section class="card max-w-2xl sm:card-side bg-base-100 flex-grow min-w-[300px] shadow-xl">
      <figure class=" mx-auto w-[250px]">
        <img
          src={props.data.character.images.jpg.image_url}
          class="object-contain"
          alt="Album"
          loading={() => console.log("loading...")}
        />
      </figure>
      <div class="card-body flex flex-col items-center justify-between">
        <h2 class="card-title mb-4">{props.data.character.name}</h2>
        <div class="card-actions justify-end">
          <Show when={props.compared}>
            <button
              onclick={() => voteDumb("dumb")}
              class="btn btn-success flex items-center gap-2"
            >
              <span class="">dumb</span>
              <AiFillUpSquare />
            </button>
            <button
              onclick={GoOver}
              class="btn btn-default text-white flex items-center gap-2"
            >
              <span class="">skip</span>
              <AiOutlinePlaySquare class="text-white" />
            </button>
            <button
              onclick={() => voteDumb("smart")}
              class="btn btn-error flex items-center gap-2"
            >
              <span class="">smart</span>
              <AiFillDownSquare />
            </button>
          </Show>
        </div>
      </div>
    </section>
  );
}
export default Character;
