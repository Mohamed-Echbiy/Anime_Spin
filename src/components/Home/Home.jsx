import { Match, Show, Switch, createEffect } from "solid-js";
import { useAuthContext } from "../../context/Auth";

function Home() {
  const { signIn, userData, logOut } = useAuthContext();
  return (
    <>
      <header class="flex items-center p-2 justify-between">
        <div class="w-[50px] h-[50px]">
          <img
            src="https://i.pinimg.com/564x/33/f3/77/33f377dcf96c4cd9d7b1ed97b29db0a0.jpg"
            class="rounded-full w-full object-contain"
            alt="luffy dumb picture"
          />
        </div>
        <div class="sign-in">
          <Show when={!!userData()}>
            <button onclick={() => logOut()} class="btn btn-error btn-outline">
              log-out
            </button>
          </Show>
          <Show when={!!!userData()}>
            <button class="btn btn-primary" onclick={() => signIn()}>
              Sign-in
            </button>
          </Show>
        </div>
      </header>
      <main class="min-h-screen w-full gap-y-7 text-xs md:text-sm lg:text-base  flex flex-col items-center justify-center hero">
        <div class="flex items-center justify-center gap-x-4">
          <img
            src="https://i.pinimg.com/564x/33/f3/77/33f377dcf96c4cd9d7b1ed97b29db0a0.jpg"
            class="w-20 h-20 rounded-full"
            alt="luffy dumb picture"
          />
          <h1 class="text-4xl">Anime Spin</h1>
        </div>
        <p class="intro px-6 max-w-3xl">
          Welcome to Anime Spin, the ultimate app for anime enthusiasts seeking
          thrilling surprises. Leave the tedious search behind and let fate
          guide your anime experience. With each spin, Anime Spin will randomly
          select an anime title, introducing you to captivating storylines and
          unforgettable characters. Embrace the unexpected and embark on a
          journey of anime discovery like never before. Get ready to spin,
          watch, and explore the world of anime in a whole new way. Welcome to
          Anime Spin, where surprises await at every turn.
        </p>
        <div class=" flex items-center justify-center gap-x-2 flex-wrap">
          <button class="standing btn btn-outline btn-warning">
            <a href="#spin">Start Spin</a>
          </button>
        </div>
      </main>
    </>
  );
}
export default Home;
