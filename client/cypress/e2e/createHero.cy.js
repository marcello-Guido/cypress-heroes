import LoginPage from "../pages/loginPage"
import userData from "../fixtures/user/userData.json"
import Chance from 'chance';
import CreatePage from "../pages/createPage";

const loginPage = new LoginPage()
const chance = new Chance();
const createPage = new CreatePage()
let name
let lastName

describe('Create new Hero', () => {
    it('Creating new hero with admin', () => {
        loginPage.accessPage() // acessing page
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password) // Admin login
        name = chance.last()
        createPage.newHero(name, chance.integer({ min: 10, max: 500 }), chance.integer({ min: 10, max: 500 }), chance.integer({ min: 10, max: 500 }), 'Flying')
    })

    it('Creating new hero with user', () => {
        loginPage.accessPage() // acessing page
        loginPage.loginUser(userData.SigninUser.email, userData.SigninUser.password) // User login and check create button
    })

    it('Checking new hero using Admin login', () => {
        loginPage.accessPage() // acessing page
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password) // Admin login
        lastName = name;
        createPage.checkHero(lastName)
    })

    it('Checking new hero using User login', () => {
        loginPage.accessPage() // acessing page
        loginPage.loginUser(userData.SigninUser.email, userData.SigninUser.password) // Admin login
        lastName = name;
        createPage.checkHero(lastName)
    })


})