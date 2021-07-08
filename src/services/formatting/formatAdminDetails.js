export function formatAdminDetails(data) {
  if (data === undefined || data === null) {
    return null;
  }
  return {
    Name: `${data.salutation}. ${data.first_name} ${data.middle_name} ${data.last_name}`,
    Email: data.email,
    Gender: data.gender === 1 ? "Male" : "Female",
    Phone_Number: data.phone_number,
    admin_id: data.id_admin,
    photo: data.photo,
    First_Name: data.first_name,
  };
}
