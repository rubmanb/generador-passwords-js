function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  
  return password;
}

// Generate a 12-character random password

for (let index = 0; index < 10; index++) {
    const newPassword = generateRandomPassword(12); 
    console.log(newPassword);
}

