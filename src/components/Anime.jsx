import { FiStar, FiTv } from "solid-icons/fi";

import OutlineHeart from "./Icons/OutlineHearth";
import FillHeart from "./Icons/FillHearth";
import {
  Match,
  Show,
  Switch,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import { useAuthContext } from "../context/Auth";
import { useDataContext } from "../context/Data";

function Anime(props) {
  const { userData } = useAuthContext();
  const { setData, reflectUpdate } = useDataContext();
  const [fill, setFill] = createSignal(true);

  /////////////////// Data Fetching //////////////////////

  const fetchData = async () => {
    if (!!userData()) {
      let id = userData().id;
      const response = await fetch(`http://localhost:8000/api/${id}`);
      const data = await response.json();
      setData(data.data);
      return data.data;
    } else {
      return null;
    }
  };
  const [data, { refetch }] = createResource(userData, fetchData);

  ////////////////////////////////////////////////////////

  /////////////////// perform Action related to the Fetched Data ///////////////////

  function add() {
    console.log("add run");
    setFill((pre) => !pre);
    fetch(
      `http://localhost:8000/api/add/${userData().id}?animeId=${props.data.id}`,
      {
        method: "PATCH",
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => reflectUpdate("add", props.data.id))
      .then(() => refetch())
      .catch((err) => console.log(err.message));
  }

  function remove() {
    console.log("we run");
    setFill((pre) => !pre);
    fetch(
      `http://localhost:8000/api/remove/${userData().id}?animeId=${
        props.data.id
      }`,
      {
        method: "DELETE",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => refetch())
      .catch((err) => console.log(err.message));
    reflectUpdate("remove", props.data.id);
  }

  ////////////////////////////////////////////////////////////////////////////////

  createEffect(() => {
    if (userData() && !!data()) {
      if (data().favorites.includes(props.data.id)) {
        setFill(false);
      } else {
        setFill(true);
      }
    }
  });
  return (
    <section
      class={`relative ${
        !!!props.favorite ? "card" : " max-w-[520px]"
      } sm:card-side bg-base-100 shadow-2xl`}
    >
      <figure
        class={`${
          !!props.favorite
            ? "min-w-[290px] w-[290px]"
            : "min-w-[250px] w-[250px]"
        } mx-auto aspect-[.7] relative`}
      >
        <img
          src={props.data.image}
          class="object-cover absolute top-0 left-0 w-full h-full"
          alt={props.data.title.english}
        />
      </figure>
      <div class="p-4 flex flex-col justify-between">
        <div class="card-info ">
          <p class="text-xs mb-4 flex items-center gap-2">
            <span>{props.data.type}</span>
            <FiTv />
          </p>
          <h2
            class={`mb-4 text-base text-secondary md:text-lg lg:text-xl text-ellipsis ${
              !!props.favorite ? "max-w-[270px]" : "max-w-[300px]"
            } whitespace-nowrap overflow-hidden`}
            title={props.data.title.english}
          >
            {props.data.title.english}
          </h2>
          <h3
            class={`mb-4 text-sm  text-ellipsis ${
              !!props.favorite ? "max-w-[270px]" : "max-w-[300px]"
            } whitespace-nowrap overflow-hidden`}
            title={props.data.title.native}
          >
            {props.data.title.native}
          </h3>
          <div class="anime-details text-xs flex items-center gap-4 flex-wrap">
            <p class="duration">{props.data.duration} min</p>
            <p class="duration flex items-center gap-[2px]">
              <span>{(props.data.rating / 10).toPrecision(2)}</span> <FiStar />
            </p>

            <p class="duration">{props.data.status} </p>
            <div class=" ">
              <Show when={!!userData()}>
                <Switch>
                  <Match when={fill()}>
                    <div onclick={() => add()}>
                      <OutlineHeart />
                    </div>
                  </Match>
                  <Match when={!fill()}>
                    <div onclick={() => remove()}>
                      <FillHeart />
                    </div>
                  </Match>
                </Switch>
              </Show>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Anime;
