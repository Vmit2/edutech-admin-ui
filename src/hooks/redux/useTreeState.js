import { useSelector } from "react-redux";

export function useTreeState() {
  const tree = useSelector((state) => state.tree);
  // const data = { details: UserSettings.load() };
  if (tree) {
    return tree;
  }
}
