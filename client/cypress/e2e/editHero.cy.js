import LoginPage from '../pages/loginPage'
import CreatePage from '../pages/createPage'
import EditPage from '../pages/editPage'
import userData from "../fixtures/user/userData.json"
import Chance from 'chance'

const chance = new Chance()
const loginPage = new LoginPage()
const createPage = new CreatePage()
const editPage = new EditPage()
let name, lastname, newName

describe('Edit Hero using admin', () => {
    it('Create new hero', () => {
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        name = chance.last()
        createPage.newHero(name, chance.integer({min:10, max: 350}), chance.integer({min:10, max: 350}), chance.integer({min:10, max: 350}), 'Flying')
    })
    it('Edit element of the new hero', () => {
        loginPage.accessPage()
        loginPage.loginAdmin(userData.SigninAdmin.email, userData.SigninAdmin.password)
        lastname = name
        editPage.searchHero(lastname)
        newName = chance.last()
        editPage.editHero(newName, chance.integer({min:10, max: 350}), chance.integer({min:10, max: 350}), chance.integer({min:10, max: 350}), 'Fireball')

    })
})

describe('Edit Hero using user permissions', () => {
    it('Edit with user permissions', () => {
        loginPage.accessPage()
        loginPage.loginUser(userData.SigninUser.email, userData.SigninUser.password)
        editPage.UserSearchHero(newName)

    })
})


