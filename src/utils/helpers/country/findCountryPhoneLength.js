async function findCountryPhoneLength(countryCode) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    const data = await response.json();

    if (data[0]?.phone) {
      const phoneLength = data[0].phone.length;
      return phoneLength;
    } else {
      console.error('Phone information not found for country code:', countryCode);
      return null;
    }
  } catch (error) {
    console.error('Error while processing country code:', countryCode, 'Error:', error.message);
    return null;
  }
}

export { findCountryPhoneLength };