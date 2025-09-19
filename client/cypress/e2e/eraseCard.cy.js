import LoginPage from '../pages/loginPage'
import CreatePage from '../pages/createPage'
import EditPage from '../pages/editPage'
import userData from "../fixtures/user/userData.json"
import Chance from 'chance'
import EragePage from '../pages/erasePage'

const erasePage = new EragePage()
const chance = new Chance()
const loginPage = new LoginPage()
const createPage = new CreatePage()
const editPage = new EditPage()
let name, lastname

describe('Erase card by Admin user', () => {
    it('Login Admin and create hero', () => {
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        name = chance.last()
        createPage.newHero(name, chance.integer({ min: 10, max: 350 }), chance.integer({ min: 10, max: 350 }), chance.integer({ min: 10, max: 350 }), 'Flying')

    })

    it('erase new hero by home button', () => {
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        lastname = name
        erasePage.eraseHero(lastname)

    })

    it('erase new hero by edit card', () => {
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        name = chance.last()
        createPage.newHero(name, chance.integer({ min: 10, max: 350 }), chance.integer({ min: 10, max: 350 }), chance.integer({ min: 10, max: 350 }), 'Flying')
        lastname = name
        erasePage.searchHero(lastname)
        erasePage.deleteHeroByEdit()

        erasePage.checkHerodeleted(lastname)
    })
    it('erase new hero by edit card', () => {
        loginPage.accessPage()
        loginPage.loginUser(userData.SigninUser.email, userData.SigninUser.password)
        erasePage.delEditUser()

    })
})