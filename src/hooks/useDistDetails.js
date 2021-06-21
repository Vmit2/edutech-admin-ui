export function useDistDetails({
  salutation,
  first_name,
  middle_name,
  last_name,
  referral_code,
  childs,
}) {
  return {
    label: `${salutation} ${first_name} ${middle_name} ${last_name}`,
    childCount: childs.length,
    referral_code,
  };
}
