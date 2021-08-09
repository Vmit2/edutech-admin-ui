export function useDistDetails({
  salutation,
  first_name,
  middle_name,
  last_name,
  id_referral_code,
  childs,
  id_user,
}) {
  return {
    name: `${first_name}`,
    id_user: id_user,
    childCount: 0,
    childs:[],
    referral_code: id_referral_code,
  };
}
