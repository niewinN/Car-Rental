// import axios from 'axios';

// // Tworzymy klienta axios z podstawową konfiguracją
// const api = axios.create({
//   baseURL: 'http://localhost:3001',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;

// export const registerUser = (userData) => {
//     return api.post('/register', userData);
//   };

//  export const checkUserExistence = async (email, password) => {
//   try {
//     const response = await api.get('/register');
//     const response2 = await api.get('/users')

//     const users = response.data.concat(response2.data);
//     console.log(users)

//     const emailExists = users.some(user => user.email.toLowerCase() === email.toLowerCase());
//     const passwordExists = users.some(user => user.password === password);
//     console.log('Email do porównania:', email);
//     console.log('Hasło do porównania:', password);
//     console.log('emailExists:', emailExists);
//     console.log('passwordExists:', passwordExists);

//     return { emailExists, passwordExists };
//   } catch (error) {
//     console.error('Błąd podczas sprawdzania istnienia użytkowników:', error);
//     throw error;
//   }
// };

// export const fetchUserDataByEmail = async (email) => {
//   try {
//     // Pobierz dane z obu endpointów
//     const response1 = await api.get('/register');
//     const response2 = await api.get('/users');

//     // Połącz dane użytkowników z obu odpowiedzi
//     const allUsers = response1.data.concat(response2.data);

//     // Wyszukaj użytkownika po adresie e-mail
//     const user = allUsers.find((user) => user.email.toLowerCase() === email.toLowerCase());

//     return user;
//   } catch (error) {
//     console.error('Błąd podczas pobierania danych użytkownika:', error);
//     throw error;
//   }
// };
