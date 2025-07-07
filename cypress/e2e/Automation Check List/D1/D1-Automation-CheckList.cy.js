import { loginToDispatch } from "../../../support/Features/ValidD1Login";
import { valAssociatedNames } from "../../../support/Features/D1/SG-Opportunities/verify-associate-display-names-with-proposal-level-activities.cy";
import { navPoDeliverablesStreamlined } from "../../../support/Features/D1/SG-Delivery/Navigate-to-the-PO-deliverables-to-be-streamlined.cy";
import { navPoActivitiesStreamlined } from "../../../support/Features/D1/SG-Delivery/navigate-to-the-PO-activities-to-be-streamlined.cy";


describe('D1 Automation Check List', () => {
    it('should Execute D1 Auomation Check List', () =>{
        loginToDispatch();
        valAssociatedNames(); 
        navPoDeliverablesStreamlined();
        navPoActivitiesStreamlined();
        

    })
})