export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 13) {
    return `+${cleaned.substring(0, 2)} (${cleaned.substring(
      2,
      4
    )}) ${cleaned.substring(4, 9)}-${cleaned.substring(9)}`;
  }
  if (cleaned.length === 12) {
    return `+${cleaned.substring(0, 2)} (${cleaned.substring(
      2,
      4
    )}) ${cleaned.substring(4, 8)}-${cleaned.substring(8)}`;
  }

  return phone;
};
