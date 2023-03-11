import React from "react";
import { ButtonAppBar } from "../components/Header";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
} from "@mui/material";
import theme from "../utils/theme";
import Typography from "@mui/material/Typography";

const familyLessonSteps = [
  {
    label: "Family",
    description:
      "Fingerspelled 'F' makes small clockwise circles in front of body.",
    imagePath: require("/usr/local/bin/learn-bsl/src/images/family/family.png"),
  },
  {
    label: "Mother",
    description: ` Extended index, middle and ring fingers of primary hand tap extended index and middle 
        fingers of secondary hand twice = Fingerspelled 'M' taps palm twice.`,
    imagePath: require("/usr/local/bin/learn-bsl/src/images/family/mum.png"),
  },
  {
    label: "Father",
    description:
      " Extended index and middle fingers of primary hand tap extended index and middle fingers of secondary hand twice = Fingerspelled 'F' twice",
    imagePath: require("/usr/local/bin/learn-bsl/src/images/family/father.png"),
  },
  {
    label: "Brother",
    description:
      "Both closed hands brush up and down past each other (touching each other) in front of body.",
    imagePath: require("/usr/local/bin/learn-bsl/src/images/family/brother.png"),
  },
  {
    label: "Sister",
    description: "Hooked index finger of closed hand taps nose twice.",
    imagePath: require("/usr/local/bin/learn-bsl/src/images/family/sister.png"),
  },

  {
    label: "Son",
    description:
      " Extended index finger of primary hand brushes along chin (from primary side to secondary side).",
    imagePath: require("/usr/local/bin/learn-bsl/src/images/family/son.png"),
  },
  {
    label: "Daughter",
    description: "Fingerspelled 'D' twice.",
    imagePath: require("/usr/local/bin/learn-bsl/src/images/family/daughter.png"),
  },
  {
    label: "Grand",
    description:
      "To form compound words such as 'Grandfather', 'Grandmother', 'Granddaughter' or 'Grandson', firstly we sign the letter 'G' and then proceed to sign the respective word after 'Grand'.",
    imagePath: require("/usr/local/bin/learn-bsl/src/images/family/grand.png"),
  },
];
export const FamilyLesson = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = familyLessonSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <main>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />

        <Stepper activeStep={activeStep}>
          {familyLessonSteps.map((item) => {
            return (
              <Step key={item.label}>
                <StepLabel {...item.label}>{item.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <img
          src={familyLessonSteps[activeStep].imagePath}
          style={{ width: "20%" }}
        ></img>
        {activeStep === familyLessonSteps.length - 1 ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {familyLessonSteps[activeStep].description}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <a href={"/"}>
                {" "}
                <Button>Quiz!</Button>{" "}
              </a>
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
