import { useSelector } from "react-redux";

export function useTreeState() {
  const tree = useSelector((state) => state.tree);
  if (tree) {
    return tree;
  }
}
