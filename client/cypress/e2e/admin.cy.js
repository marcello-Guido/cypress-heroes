import AdminPage from '../pages/adminPage';
import LoginPage from '../pages/loginPage';
const Chance = require('chance')

const chance = new Chance()
const adminPage = new AdminPage();
const loginPage = new LoginPage();


describe('Feature Admin', () => {
    it('Login Test Admin Success', () => {
        // Heroes link application
        loginPage.acessLoginPage()
        // Login Button
        loginPage.loginButtom()
        // Login witg Admin Success
        loginPage.loginAdmin('admin@test.com', 'test123')
    })

    it('Create new Hero', () => {
        // Heroes link application
        loginPage.acessLoginPage()
        // Login Button
        loginPage.loginButtom()
        // Heroes link application
        loginPage.loginAdmin('admin@test.com', 'test123')
        // Create new hero usaing chance to fill all fields randomly
        adminPage.createHero(chance.last(), chance.integer({min: 10, max: 350}), chance.integer({min: 10, max: 300}), chance.integer({min: 10, max: 300}), 'Mind Control')

    })

    it.only('Edit Hero', () => {
        // Heroes link application
        loginPage.acessLoginPage()
        // Login Button
        loginPage.loginButtom()
        // Heroes link application
        loginPage.loginAdmin('admin@test.com', 'test123')
        // Edit hero
        adminPage.editHero()
        
    })




})