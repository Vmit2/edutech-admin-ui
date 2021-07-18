export const formateUserDetails = (userDetails) => {
  if (!userDetails) {
    return null;
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
    gender: userDetails.gender === 1 ? "Male" : "Female",
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
  };
};

export const formatePageaDeatails = (details) => {
  return (
    details &&
    details.map((detail) => {
      let packageDetails = {
        idPackagePurchase: detail.id_package_purchase,
        boardId: detail.board_id,
        standardId: detail.standard_id,
        userId: detail.user_id,
        totalPrice: detail.total_price,
        transactionId: detail.transaction_id,
        purchaseDate: detail.purchase_date,
        expiryDate: detail.expiry_date,
        status: detail.status,
        createdDate: detail.created_date,
        updatedDate: detail.updated_date,
      };
      if (detail.studentDetails) {
        packageDetails.studentDetails = detail.studentDetails;
      }
      if (detail.subjectDetails) {
        packageDetails.subjectDetails = {
          idStandards: detail.subjectDetails.id_standards,
          subjectPackageId: detail.subjectDetails.subject_package_id,
          standardName: detail.subjectDetails.standard_name,
          subjectList: detail.subjectDetails.subject_list.split(",\n"),
          price: detail.subjectDetails.price,
          boardId: detail.subjectDetails.board_id,
          createdDate: detail.subjectDetails.created_date,
          updateDate: detail.subjectDetails.updated_date,
        };
      }
      return packageDetails;
    })
  );
};

export const formatePageaDeatail = (detail) => {
  let packageDetails = {
    idPackagePurchase: detail && detail.id_package_purchase,
    boardId: detail && detail.board_id,
    standardId: detail && detail.standard_id,
    userId: detail && detail.user_id,
    totalPrice: detail && detail.total_price,
    transactionId: detail && detail.transaction_id,
    purchaseDate: detail && detail.purchase_date,
    expiryDate: detail && detail.expiry_date,
    status: detail && detail.status,
    createdDate: detail && detail.created_date,
    updatedDate: detail && detail.updated_date,
  };
  if (detail.studentDetails) {
    packageDetails.studentDetails = detail.studentDetails;
  }
  if (detail.subjectDetails) {
    packageDetails.subjectDetails = {
      idStandards: detail.subjectDetails.id_standards,
      subjectPackageId: detail.subjectDetails.subject_package_id,
      standardName: detail.subjectDetails.standard_name,
      subjectList:
        detail.subjectDetails.subject_list &&
        detail.subjectDetails.subject_list.split(",\n"),
      price: detail.subjectDetails.price,
      boardId: detail.subjectDetails.board_id,
      createdDate: detail.subjectDetails.created_date,
      updateDate: detail.subjectDetails.updated_date,
    };
  }
  return packageDetails;
};

export const getformatedDate = (dateValue) => {
  const date = new Date(dateValue);
  const year = date.getFullYear();
  const month = date.getMonth();
  const currentDate = date.getDate();
  return currentDate + "-" + month + "-" + year;
};
