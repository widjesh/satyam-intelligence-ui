import { useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "mycomponents/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// NewUser page components
// import Address from "layouts/pages/users/new-user/components/Systeem";


// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user/schemas/validations";
import form from "layouts/pages/users/new-user/schemas/form";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";
// My Imports
import api from "api/api";
import { getUserInformation } from "utils/Utils";
import { fireAlert } from "utils/Alert";
import { useHistory } from "react-router-dom";

import ExpenseData from "./components/ExpenseData";
import SpecificationInformation from "./components/SpecificationInformation";


function getSteps() {
  return ["Expense Information", "Specification"];
}

function getStepContent(stepIndex, formData, setRequestBody, requestBody) {
  switch (stepIndex) {
    case 0:
      return <ExpenseData formData={formData} requestBuilder={setRequestBody} state={requestBody} />;
    case 1:
      return <SpecificationInformation formData={formData} requestBuilder={setRequestBody} state={requestBody} />;
    default:
      return null;
  }
}

function NewExpense() {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [requestBody, setRequestBody] = useState({});

  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    try {
      console.log(requestBody)
      const userInformation = getUserInformation();
      if (!userInformation) {
        history.push("/authentication/sign-in/basic");
        return;
      }
      console.log(requestBody)
      const headers = {
        headers: {Authorization:`Bearer ${userInformation.jwt}`},
      };
      const { data, status } = await api.post("/api/expense", [requestBody], headers);
      if (status === 200) {
        fireAlert(`Expense Successfully Created`, `Reference #${data[0].id}`, "success", "Okay!");
      }
    } catch (exception) {
      fireAlert(`Failed Creating Expense`, `Contact Widjesh Shiva Bhaggan.`, "error", "Okay!");
      console.log("Exception while creating Expense", exception);
    }
    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3} mb={20}>
        <Grid container justifyContent="center" className="h-100">
          <Grid item xs={12} lg={8}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik initialValues={initialValues} validationSchema={currentValidation}>
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card className="h-100">
                    <SuiBox p={2}>
                      <SuiBox>
                        {getStepContent(
                          activeStep,
                          {
                            values,
                            touched,
                            formField,
                            errors,
                          },
                          setRequestBody,
                          requestBody
                        )}
                        <SuiBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          {activeStep === 0 ? (
                            <SuiBox />
                          ) : (
                            <SuiButton variant="gradient" buttonColor="light" onClick={handleBack}>
                              terug
                            </SuiButton>
                          )}
                          <SuiButton variant="gradient" buttonColor="dark" onClick={handleSubmit}>
                            {isLastStep ? "Hmpr Aanmaken" : "Volgende"}
                          </SuiButton>
                        </SuiBox>
                      </SuiBox>
                    </SuiBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewExpense;
