import { homeStr } from "../fixtures/pages/HomePage";

const  homStr = new homeStr

describe("strHom", () => {
         it("homStrona", () => {
          
            homStr.navigate();
            homStr.logOut();

        });
    });
