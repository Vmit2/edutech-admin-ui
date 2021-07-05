import { useSelector } from "react-redux";
import UserSettings from "../../utils/UserSettings";

export function useUserState() {
  const user = useSelector((state) => state.user);
  const data = { details: UserSettings.load() };
  if (user.details) {
    return user;
  } else {
    return data;
  }
}
