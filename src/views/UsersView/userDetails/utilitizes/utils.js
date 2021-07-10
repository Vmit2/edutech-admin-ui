export const formateUserDetails=(userDetails)=>{
    if(!userDetails){
        return null
    }
    return {
        idUser: userDetails.id_user,
        salutation: userDetails.salutation,
        firstName: userDetails.first_name,
        middleName: userDetails.middle_name,
        lastName: userDetails.last_name,
        email: userDetails.email,
        password: userDetails.password,
        phoneNumber: userDetails.phone_number,
        gender: userDetails.gender,
        billingAddress:userDetails.billing_address,
        shippingAddress: userDetails.shipping_address,
        dateOfBirth: userDetails.date_of_birth,
        aadhaarCard: userDetails.aadhaar_card,
        panCard: userDetails.pan_card,
        photo: userDetails.photo,
        aadhaarFront: userDetails.aadhaar_front,
        aadhaarBack: userDetails.aadhaar_back,
        pancardPhoto: userDetails.pancard_photo,
      }
}

export const getformatedDate = (dateValue) => {
    const date = new Date(dateValue);
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentDate = date.getDate();
    return currentDate + "-" + month + "-" + year;
  };
