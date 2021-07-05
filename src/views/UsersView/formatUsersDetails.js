export function formatUsersDetails(data, action) {
  let formatedArr = [];
  if (data === undefined || data === null) {
    return [];
  }
  data.map(
    ({
      salutation,
      first_name,
      middle_name,
      last_name,
      referral_code,
      email,
      phone_number,
      gender,
    }) => {
      formatedArr.push({
        Name: `${salutation} ${first_name} ${middle_name} ${last_name}`,
        Gender: gender === 1 ? "Male" : "Female",
        "Mobile Number": phone_number,
        Email: email,
        action: action({
          salutation,
          first_name,
          middle_name,
          last_name,
          referral_code,
          email,
        }),
      });
    }
  );
  return formatedArr;
}
