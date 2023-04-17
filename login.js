import { logowanie2user } from "../../e2e/log.cy" 

const logUse = new logowanie2user
        
    describe("LogInOut", () => {
        it("Log2User", () => {
         
            logowanie2user.logowanieUserFirst();

            logowanie2user.logowanieUserSecond();

            logowanie2user.menuStrony();

            


       });
   });
    

