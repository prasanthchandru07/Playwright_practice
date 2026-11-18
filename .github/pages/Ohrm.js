class Orange{
    constructor(page){
        this.page=page;
        this.user=page.locator('//input[@placeholder="Username"]')
        this.pass=page.locator('//input[@placeholder="Password"]')
        this.submit=page.locator('//button[text()=" Login "]')
    }

    async navigation(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async login(uname,pword){
        await this.user.fill(uname)
        await this.pass.fill(pword)
        await this.submit.click()
    }
}

export default Orange;