import LoginPage from '../pages/loginPage'
import CreatePage from '../pages/createPage'
import EditPage from '../pages/editPage'
import userData from "../fixtures/user/userData.json"
import Chance from 'chance'
import EragePage from '../pages/erasePage'
import FeaturesPage from '../pages/featuresPage'

const erasePage = new EragePage()
const featurePage = new FeaturesPage()
const chance = new Chance()
const loginPage = new LoginPage()
const createPage = new CreatePage()
const editPage = new EditPage()
let name, lastname, hireNumber, fansNumber

describe('Feature Hire', () => {
    it('Create new Hero and hire by admin', () => {
        //Login by Admin
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        
        // Creating new hero
        name = chance.last()
        hireNumber = chance.integer({min: 10, max: 50})
        fansNumber = chance.integer({min: 10, max: 50})

        createPage.newHero(name, chance.integer({min: 10, max: 50}), fansNumber, hireNumber, 'Flying')
        lastname = name
        createPage.checkHero(lastname)

        // Hire de hero
        featurePage.hireHero(lastname)
        
    })
    it('hire the last new hero by User', () => {
        //Login by Admin
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        
        // Creating new hero
        name = chance.last()
        hireNumber = chance.integer({min: 10, max: 50})
        fansNumber = chance.integer({min: 10, max: 50})

        createPage.newHero(name, chance.integer({min: 10, max: 50}), fansNumber, hireNumber, 'Flying')
        lastname = name
        createPage.checkHero(lastname)

        loginPage.justlogout()
        loginPage.loginUser(userData.SigninUser.email, userData.SigninUser.password)

        createPage.checkHero(lastname)
        featurePage.hireHero(lastname)    

    })
})

describe('Feature Fans', () => {
    it('Create new Hero and click fans by admin', () => {
        //Login by Admin
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        
        // Creating new hero
        name = chance.last()
        hireNumber = chance.integer({min: 10, max: 50})
        fansNumber = chance.integer({min: 10, max: 50})

        createPage.newHero(name, chance.integer({min: 10, max: 50}), fansNumber, hireNumber, 'Flying')
        lastname = name
        createPage.checkHero(lastname)

        // Fans button
        featurePage.fansHero(lastname)

    })
    it('click fans for last new hero by User', () => {
        //Login by Admin
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        
        // Creating new hero
        name = chance.last()
        hireNumber = chance.integer({min: 10, max: 50})
        fansNumber = chance.integer({min: 10, max: 50})

        createPage.newHero(name, chance.integer({min: 10, max: 50}), fansNumber, hireNumber, 'Flying')
        lastname = name
        createPage.checkHero(lastname)

        
        loginPage.justlogout()
        loginPage.loginUser(userData.SigninUser.email, userData.SigninUser.password)

        createPage.checkHero(lastname)
        featurePage.fansHero(lastname)

    })
})