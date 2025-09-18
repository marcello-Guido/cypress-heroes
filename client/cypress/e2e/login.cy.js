import LoginPage from "../pages/loginPage"
import userData from "../fixtures/user/userData.json"
import Chance from 'chance';

const chance = new Chance();
const loginPage = new LoginPage()

describe('Positive scenario', () => {
    it('Admin Login: correct email and password', () => {
        loginPage.accessPage(); // Acessing the application
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password); // Calling to access admin user
    })
    it('Logout: Admin', () => {
        loginPage.accessPage(); // Acessing the application
        loginPage.logoutAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password); // Calling to access admin user and logout
    })
    it('User login: correct email and password', () => {
        loginPage.accessPage(); // Acessing the application
        loginPage.loginUser(userData.SigninUser.email, userData.SigninUser.password); // Calling to access user
    })
    it('Logout: User', () => {
        loginPage.accessPage()
        loginPage.logoutUser(userData.SigninUser.email, userData.SigninUser.password) // Calling to access user and logout
    })
})
describe('Negative scenario', () => {
    it('Login: correct email and incorrect password', () => {
        loginPage.accessPage()
        loginPage.loginWrPass(userData.SigninAdmin.email, 'wrongPassword')
    })
    it('Login: incorrect email and correct password', () => {
        loginPage.accessPage()
        loginPage.loginWrEmail('wrong@email.com', userData.SigninAdmin.password)
    })
    it('Login: correct email and empty password', () => {
        loginPage.accessPage()
        loginPage.emptyPass(userData.SigninAdmin.email)
    })
    it('Login: Empty email and correct password', () => {
        loginPage.accessPage()
        loginPage.emptyEmail(' ', userData.SigninAdmin.password)
    })
    it('Login: Empty email and password', () => {
        loginPage.accessPage()
        loginPage.emptyFields()
    })
    it('Login: Incorrect credentials', () => {
        loginPage.accessPage(); // Acessing the application
        loginPage.loginIncorrect(chance.email(), chance.string({ length: 5 })); // Calling to access using wrong email and password
    })
})


