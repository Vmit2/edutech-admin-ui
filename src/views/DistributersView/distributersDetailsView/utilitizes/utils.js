export const formateDistributerDetails=(details)=>{
    if(!details){
        return null
    }
    return {
        idUser: details.id_user,
        salutation: details.salutation,
        firstName: details.first_name,
        middleName: details.middle_name,
        lastName: details.last_name,
        email: details.email,
        password: details.password,
        phoneNumber: details.phone_number,
        gender: details.gender,
        billingAddress:details.billing_address,
        shippingAddress: details.shipping_address,
        dateOfBirth: details.date_of_birth,
        aadhaarCard: details.aadhaar_card,
        panCard: details.pan_card,
        photo: details.photo,
        aadhaarFront: details.aadhaar_front,
        aadhaarBack: details.aadhaar_back,
        pancardPhoto: details.pancard_photo,
        kycCompleted :details.kyc_completed === 0 ? true : false,
      }
}

export const getformatedDate = (dateValue) => {
    const date = new Date(dateValue);
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentDate = date.getDate();
    return currentDate + "-" + month + "-" + year;
  };
