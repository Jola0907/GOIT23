


import { tests } from "./hom2.cy";
const logInOut =  new tests

describe("Logowanie_wylogowanie", () => {
    it("logowanie_test", () => {
      
        logInOut.navigate();
      
        logInOut.logowanieUserFirst();
     
        logInOut.logowanieUserSecond();
    
        logInOut.menuStrony();

        logInOut.logOut()
      
     
    });
  });