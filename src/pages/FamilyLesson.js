import React from "react";
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
import "./familyQuiz.css";

export const FamilyLesson = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleRestart = () => {
    setActiveStep(0);
  };

  return (
    <main>
      <div className="lesson-container">
        <ThemeProvider theme={theme}>
          <Stepper activeStep={activeStep}>
            {familyLessonSteps.map((item, index) => (
              <Step key={index}>
                <StepLabel {...item}>{item.label}</StepLabel>
              </Step>
            ))}
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
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleRestart}> Restart Lesson</Button>
                <Link href={"/FamilyQuiz"}>
                  <Button color="secondary">Quiz!</Button>{" "}
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
      </div>
    </main>
  );
};
