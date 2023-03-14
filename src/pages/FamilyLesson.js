import React from "react";
import { ButtonAppBar } from "../components/Header";
import {
  Box,
  Button,
  Link,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
} from "@mui/material";
import theme from "../utils/theme";
import Typography from "@mui/material/Typography";
import { familyLessonSteps } from "../utils/imageData";

export const FamilyLesson = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <main>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />

        <Stepper activeStep={activeStep}>
          {familyLessonSteps.map((item, index) => {
            return (
              <Step key={index}>
                <StepLabel {...item}>{item.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <img
          src={familyLessonSteps[activeStep].imagepath}
          style={{ width: "20%" }}
        ></img>
        {activeStep === familyLessonSteps.length - 1 ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {familyLessonSteps[activeStep].description}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Link href={"/FamilyQuiz"}>
                <Button>Quiz!</Button>{" "}
              </Link>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {familyLessonSteps[activeStep].description}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === familyLessonSteps.length ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
        {/*</Box>*/}
      </ThemeProvider>
    </main>
  );
};
