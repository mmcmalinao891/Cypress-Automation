import { loginToDispatch } from "../../../support/Features/ValidD1Login";
import { valAssociatedNames } from "../../../support/Features/D1/SG-Opportunities/verify-associate-display-names-with-proposal-level-activities.cy";

describe('D1 Automation Check List', () => {
    it('should Execute D1 Auomation Check List', () =>{
        loginToDispatch();
        valAssociatedNames(); 

    })
})