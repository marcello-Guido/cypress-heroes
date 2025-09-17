import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

describe('Login Test', () => {
  it('Login Test Admin Success', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    // Login Button
    loginPage.loginButtom()
    // Login witg Admin Success
    loginPage.loginAdmin('admin@test.com', 'test123')
  })
  it('Login Test User Success', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    // Login Button
    loginPage.loginButtom()
    //Login with User Sucess
    loginPage.loginUser('test@test.com', 'test123')
  })
  it('Login Test Admin wrong email', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    //Login Button
    loginPage.loginButtom()
    //Login with Wrong Admin user
    loginPage.loginAdmin('admim@test.com', 'test123')
    //Check failed
    loginPage.errorMessage()
  })
  it('Login Test Admin wrong password', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    //Login Button
    loginPage.loginButtom()
    //Login with Wrong Admin user
    loginPage.loginAdmin('admin@test.com', 'teste123')
    //Check failed
    loginPage.errorMessage()
  })
  it('Login Test Admin wrong password and email', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    //Login Button
    loginPage.loginButtom()
    //Login with Wrong Admin user
    loginPage.loginAdmin('admin@test.com', 'teste123')
    //Check failed
    loginPage.errorMessage()
  })
  it('Login Test Admin empty email', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    //Login Button
    loginPage.loginButtom()
    //Login with Empty Admin user
    loginPage.loginAdmin(' ', 'teste123')
    //Check empty failed
    loginPage.errorEmailEmpty()
  })
  it('Login Test empty password', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    //Login Button
    loginPage.loginButtom()
    //Login with empty password
    loginPage.loginAdminEmpty('admin@test.com')
    //Check empty failed
    loginPage.errorPasswordEmpty()
  })
  it('Login Test empty fields', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    //Login Button
    loginPage.loginButtom()
    //Login with empty
    loginPage.loginEmpty()
    //Check empty failed
    loginPage.errorPasswordEmpty()
    loginPage.errorEmailEmpty()
  })
})

describe('Logout Test', () => {
  it('Logout Admin test', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    //Login Button
    loginPage.loginButtom()
    // Logout Admin
    loginPage.logoutAdmin()
  })
  it('Logout user test', () => {
    // Heroes link application
    loginPage.acessLoginPage()
    //Login Button
    loginPage.loginButtom()
    // Logout User
    loginPage.logoutUser()
  })






})