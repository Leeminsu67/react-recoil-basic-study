import { atom, selector } from "recoil";
import Textinput from "./components/Textinput";
import CharacterCount from "./components/CharacterCount";

export const textState = atom({
  key: "textState",
  default: "",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const test = get(textState);

    return test.length;
  },
});

function App() {
  return (
    <div>
      <Textinput />
      <CharacterCount />
    </div>
  );
}

export default App;
