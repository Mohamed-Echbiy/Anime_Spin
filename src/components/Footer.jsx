import FillHeart from "./Icons/FillHearth";
import Github from "./Icons/Github";
import Solidjs from "./Icons/Solidjs";
function Footer() {
  return (
    <footer className="footer items-center p-4 bg-base-200 text-white ">
      <div className="items-center grid-flow-col">
        <p class="item-center flex justify-center gap-2">
          <span>Made with</span>{" "}
          <span>
            <Solidjs class="text-blue-500" />
          </span>{" "}
          <span>and</span>
          <FillHeart class="" />
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <span>give me a star :\)</span>
        <a href="https://github.com/Mohamed-Echbiy/Anime_Spin" target="_blank">
          <Github />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
