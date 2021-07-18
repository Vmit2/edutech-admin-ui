import { useSelector } from "react-redux";

export function usePackageState() {
  const packageDetails = useSelector((state) => state.package);
  if (packageDetails) {
    return packageDetails;
  }
}
