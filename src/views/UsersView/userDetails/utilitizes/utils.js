export const formateUserDetails = (userDetails) => {
    if (!userDetails) {
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
        gender: userDetails.gender === 1 ? "Male" : "Female" ,
        billingAddress: userDetails.billing_address,
        shippingAddress: userDetails.shipping_address,
        dateOfBirth: userDetails.date_of_birth,
        aadhaarCard: userDetails.aadhaar_card,
        panCard: userDetails.pan_card,
        photo: userDetails.photo,
        aadhaarFront: userDetails.aadhaar_front,
        aadhaarBack: userDetails.aadhaar_back,
        pancardPhoto: userDetails.pancard_photo,
        kycCompleted: userDetails.kyc_completed === 0 ? true : false,
    }
}

export const formatePageaDeatails = () => {
    return [
        {
            idPackagePurchase: 2,
            boardId: 1,
            standardId: 1,
            userId: 26,
            totalPrice: "3675",
            transactionId: "bdbc499468869e183e7e94af92fb56d4",
            purchaseDate: "2021-05-28T10:30:00.000Z",
            expiryDate: "2022-05-27T23:10:00.000Z",
            status: 1,
            createdDate: "2021-05-28T11:21:33.000Z",
            updatedDate: "2021-05-28T11:21:33.000Z"
        },
        {
            idpackagePurchase: 3,
            boardId: 1,
            standardId: 1,
            userId: 26,
            totalPrice: "3675",
            transactionId: "bdbc499468869e183e7e94af92fb56d4",
            purchaseDate: "2021-05-28T10:30:00.000Z",
            expiryDate: "2022-05-27T23:10:00.000Z",
            status: 1,
            createdDate: "2021-05-28T11:23:53.000Z",
            updatedDate: "2021-05-28T11:23:53.000Z"
        },
    ]
}

export const getformatedDate = (dateValue) => {
    const date = new Date(dateValue);
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentDate = date.getDate();
    return currentDate + "-" + month + "-" + year;
};
