import React from "react";
import { Container, Grid, Link, Stack, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import SearchAppBar from "../components/SearchAppBar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const tiers = [
  {
    title: "Family",
    price: "Start...",
    description: ["Lesson", "Quiz"],
    buttonText: "Lesson",
    buttonText1: "Quiz",
    buttonVariant: "contained",
    link1: "/FamilyLesson",
    link2: "/FamilyQuiz",
    color: "#fff",
  },
  {
    title: "Greetings",
    price: "Start...",
    description: ["Lesson", "Quiz"],
    buttonText: "Lesson",
    buttonText1: "Quiz",
    buttonVariant: "contained",
    link1: "/GreetingsLesson",
    link2: "/GreetingsQuiz",
    color: "#fff",
  },
  {
    title: "Colours",
    price: "Start...",
    description: ["Lesson", "Quiz"],
    buttonText: "Lesson",
    buttonText1: "Quiz",
    buttonVariant: "contained",
    link1: "/ColoursLesson",
    link2: "/ColoursQuiz",
    color: "#fff",
  },
];
export const Lessons = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Stack direction="column" spacing={2}>
          <SearchAppBar />
          <div className="lessons-container">
            <div
              disableGutters
              maxWidth="sm"
              component="main"
              sx={{ pt: 8, pb: 6 }}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Available Lessons
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                component="p"
              >
                Choose a topic to start learning and then practice your skills
                with the avaiable quizzes!
              </Typography>
            </div>
            <br />
            <br />
            <div maxWidth="md" component="main">
              <Grid container spacing={5} alignItems="flex-end">
                {tiers.map((tier) => (
                  <Grid
                    item
                    key={tier.title}
                    xs={12}
                    sm={tier.title === "Enterprise" ? 12 : 6}
                    md={4}
                  >
                    <Card>
                      <CardHeader
                        title={tier.title}
                        subheader={tier.subheader}
                        titleTypographyProps={{ align: "center" }}
                        // action=<StarIcon />
                        subheaderTypographyProps={{
                          align: "center",
                        }}
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? theme.palette.grey[200]
                              : theme.palette.grey[700],
                        }}
                      />
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "baseline",
                            mb: 2,
                          }}
                        >
                          <Typography
                            component="h2"
                            variant="h6"
                            color="text.primary"
                          >
                            <LightbulbIcon fontSize={"large"} />
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button fullWidth variant={tier.buttonVariant}>
                          <Link
                            underline={"none"}
                            href={tier.link1}
                            style={{ color: tier.color }}
                          >
                            {tier.buttonText}
                          </Link>
                        </Button>
                        <Button fullWidth variant={"outlined"}>
                          <Link
                            underline={"none"}
                            href={tier.link2}
                            // style={{ color: tier.color }}
                          >
                            {tier.buttonText1}
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
            <Container
              maxWidth="md"
              component="footer"
              sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
              }}
            ></Container>
          </div>
        </Stack>
      </ThemeProvider>
    </main>
  );
};
