/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

function Header() {
  return (
    <SuiBox display="flex" justifyContent="space-between" alignItems="center">
      <SuiBox>
        <SuiBox mb={1}>
          <SuiTypography variant="h6" fontWeight="medium">
            Order Details
          </SuiTypography>
        </SuiBox>
        <SuiTypography component="p" variant="button" fontWeight="regular" textColor="text">
          Order no. <span className="font-bold">241342</span> from
          <span className="font-bold">23.02.2021</span>
        </SuiTypography>
        <SuiTypography component="p" variant="button" fontWeight="regular" textColor="text">
          Code: <span className="font-bold">KF332</span>
        </SuiTypography>
      </SuiBox>
      <SuiButton variant="gradient" buttonColor="secondary">
        invoice
      </SuiButton>
    </SuiBox>
  );
}

export default Header;
