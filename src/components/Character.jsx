import { FiStar, FiTv } from "solid-icons/fi";
function Character(props) {
  console.log(props.data);
  return (
    <section class="card max-w-2xl  sm:card-side bg-base-100 flex-grow w-full shadow-xl ">
      <figure class="min-w-[250px] w-[250px] mx-auto aspect-[.7] relative">
        <img
          src={props.data.image}
          class="object-cover absolute top-0 left-0 w-full h-full"
          alt={props.data.title.english}
        />
      </figure>
      <div class=" p-4   flex flex-col justify-between">
        <div class="card-info ">
          <p class="text-xs mb-4 flex items-center gap-2">
            <span>{props.data.type}</span>
            <FiTv />
          </p>
          <h2 class="mb-4 text-base text-secondary md:text-lg lg:text-xl">
            {props.data.title.english}
          </h2>
          <h3 class=" mb-4 text-sm">{props.data.title.native}</h3>
          <div class="anime-details text-xs flex items-center gap-4 flex-wrap">
            <p class="duration">{props.data.duration} min</p>
            <p class="duration flex items-center gap-[2px]">
              <span>{(props.data.rating / 10).toPrecision(2)}</span> <FiStar />
            </p>
            <p class="duration">{props.data.status} </p>
          </div>
          <p class="pt-2 text-xs">description: </p>
          <p class="text-sm max-h-[160px]  mt-2 overflow-scroll">
            {props.data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
export default Character;
