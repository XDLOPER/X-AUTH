
    export const createCookie = ({cookieName,cookieValue,expirationSeconds=60 * 60 * 24,}) => {

      // Şu anki tarih ve saat
      const currentDate = new Date();
  
      // Çerezin son kullanma tarihini ayarla
      currentDate.setTime(currentDate.getTime() + expirationSeconds * 1000);
  
      // Çerez oluştur
      const cookieString = `${cookieName}=${cookieValue}; expires=${currentDate.toUTCString()}; path=/`;
  
      // Çerezi tarayıcıya ekleyin
      document.cookie = cookieString;
  
    };