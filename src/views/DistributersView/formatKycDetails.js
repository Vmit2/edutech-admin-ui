export function formatKycDetails(data, action) {
    let formatedArr = [];
    if(data ===undefined || data === null){
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
      }) => {
        formatedArr.push({
          Name: `${salutation} ${first_name} ${
              middle_name} ${last_name}`,
          Email: email,
          "Referral Code": referral_code,
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
  