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
import { greetingsLessonSteps } from "../utils/imageData";
import "./familyQuiz.css";
import SearchAppBar from "../components/SearchAppBar";

export const GreetingsLesson = () => {
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
        <SearchAppBar />
        <ThemeProvider theme={theme}>
          <header>
            <Stepper activeStep={activeStep}>
              {greetingsLessonSteps.map((item, index) => (
                <Step key={index}>
                  <StepLabel {...item}>{item.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </header>
          <div class="image-container">
            <img
              src={greetingsLessonSteps[activeStep].imagepath}
              style={{ width: "250px" }}
            ></img>
          </div>
          <footer>
            {activeStep === greetingsLessonSteps.length - 1 ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  {greetingsLessonSteps[activeStep].description}
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
                  <Link href={"/GreetingsQuiz"}>
                    <Button color="secondary">Quiz!</Button>{" "}
                  </Link>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  {greetingsLessonSteps[activeStep].description}
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
                    {activeStep === greetingsLessonSteps.length
                      ? "Finish"
                      : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </footer>
          {/*</Box>*/}
        </ThemeProvider>
      </div>
    </main>
  );
};
