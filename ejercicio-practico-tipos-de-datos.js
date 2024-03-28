//Social Media Profile

//1. User Information

const username = 'codingAdventure'
const fullname = 'Leandro Bouza'
const age = 25
const isStudent = true

//2. Address

const address = {
    street: 'Libertad 488',
    city: 'Carlos Paz',
    state: 'Cordoba',
    zipCode: 54321
}

//3. Hobbies

const hobbies = ['Listening Music','testing', 'gaming']

//4. Generating Personalized bio

const personalizedBio = ` Mi Nombre es ${fullname}. Tengo ${age} años.
vivo en ${address.city}. Me encanta ${hobbies.join(', ')}. Sigueme para mas testing!`

//5. Print the user profile and bio

console.log(personalizedBio)