import {
  createContext,
  createEffect,
  createSignal,
  useContext,
} from "solid-js";
import { data } from "../assets/data.json";
const anime = data;

const DataContext = createContext();

function Data(props) {
  const [animeData, setData] = createSignal(null);
  const [favorite, setFavorites] = createSignal(null);

  function reflectUpdate(mode, target) {
    if (mode === "remove") {
      let update = favorite().filter((e) => +e.id !== +target && e);
      setFavorites(update);
    } else if (mode === "add") {
      const targeted = anime.filter((e) => e.id === target);
      setFavorites((pre) => [...pre, ...targeted]);
    }
  }

  createEffect(() => {
    let updatedValues = [];
    if (animeData() && !!animeData().favorites.length && !favorite()) {
      animeData().favorites.filter((e) => {
        let searchInDataBase = anime.filter((j) => +j.id === +e && j);
        if (!!searchInDataBase.length) {
          updatedValues.push(...searchInDataBase);
          return searchInDataBase;
        }
      });

      setFavorites(updatedValues);
    }
  });
  return (
    <DataContext.Provider
      value={{ animeData, setData, reflectUpdate, favorite }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
export default Data;

export const useDataContext = () => useContext(DataContext);
