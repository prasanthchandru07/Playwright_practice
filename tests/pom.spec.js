import{test,expect} from '@playwright/test'
import Orange from '../.github/pages/Ohrm'
import cred from '../.github/test-data/hrm.json'

test("login from pom",async({page})=>{
    
    let hrm=new Orange(page)
    
    await hrm.navigation()
    await hrm.login(cred.username,cred.password)

    await page.pause()
})