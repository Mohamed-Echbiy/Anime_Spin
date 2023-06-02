function Home() {
  return (
    <main class="min-h-screen w-full gap-y-7 text-xs md:text-sm lg:text-base  flex flex-col items-center justify-center hero">
      <div class="flex items-center justify-center gap-x-4">
        <img
          src="https://i.pinimg.com/564x/33/f3/77/33f377dcf96c4cd9d7b1ed97b29db0a0.jpg"
          class="w-20 h-20 rounded-full"
          alt="luffy dumb picture"
        />
        <h1 class="text-4xl">Dumbometer</h1>
      </div>
      <p class="intro px-6 max-w-3xl">
        Welcome to the Anime Dumbometer! Get ready to determine the dumbest
        character in anime history. We present you with two iconic anime
        characters known for their mind-boggling stupidity. Cast your vote and
        settle the age-old question: Who takes the crown for the ultimate
        champion of anime foolishness? Let the laughter begin!
      </p>
      <div class=" flex items-center justify-center gap-x-2 flex-wrap">
        <button class="standing btn btn-outline btn-warning">
          Standing Table
        </button>
        <button class="standing btn btn-outline btn-success">
          Start Voting
        </button>
      </div>
    </main>
  );
}
export default Home;
