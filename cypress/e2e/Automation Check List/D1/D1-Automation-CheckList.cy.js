import { loginToDispatch } from "../../../support/Features/ValidD1Login";
import { valAssociatedNames } from "../../../support/Features/D1/SG-Opportunities/verify-associate-display-names-with-proposal-level-activities.cy";
import { navPoDeliverablesStreamlined } from "../../../support/Features/D1/SG-Delivery/Navigate-to-the-PO-deliverables-to-be-streamlined.cy";
import { navPoActivitiesStreamlined } from "../../../support/Features/D1/SG-Delivery/Navigate-to-the-PO-activities-to-be-streamlined.cy";
import { dlvrblsBulkUpld } from "../../../support/Features/D1/SG-Delivery/Deliverables-Bulk-Upload.cy";



describe('D1 Automation Check List', () => {
    it('should Execute D1 Auomation Check List', () =>{
        loginToDispatch();

        //Opportunities
        valAssociatedNames(); 

        //Delivery
        cy.wait(10000);
        navPoDeliverablesStreamlined();
        navPoActivitiesStreamlined();
        dlvrblsBulkUpld();
        
    })
})
