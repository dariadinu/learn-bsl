import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchAppBar from "../components/SearchAppBar";
import { Chip, Container, Link, Stack, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import "./familyQuiz.css";

const tiers = [
  {
    title: "Lessons&Quizzes",
    price: "Topics...",
    description: ["Greetings", "Family", "Colours"],
    buttonText: "Start a lesson",
    buttonVariant: "outlined",
    link: "/Lessons",
    color: "inherit",
  },
  {
    title: "BSL Basics",
    subheader: "Begginer friendly",
    price: "Learn more about...",
    description: [
      "BSL History",
      "Fingerspelling",
      "Alphabet",
      "Choosing a Signing Style",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
    link: "/Alphabet",
    color: "#fff",
  },
  {
    title: "Games",
    price: "Practice your skills...",
    description: ["Guess the sign", "Guess the word", "Memory Game"],
    buttonText: "Play now",
    buttonVariant: "outlined",
    link: "/Games",
    color: "inherit",
  },
];

function HomeContent() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Stack direction={"column"} spacing={2}>
          <SearchAppBar />

          <div className={"home-container"}>
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
                Learn BSL
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                component="p"
              >
                Learn British Sign Language with our interactive lessons and
                games. Whether you're a beginner or an expert, we have something
                for you.
              </Typography>
            </div>

            {/* End hero unit */}
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
                            {tier.price}
                          </Typography>
                        </Box>
                        <Stack direction={"column"} spacing={1}>
                          {tier.description.map((line) => (
                            <Typography
                              // component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                            >
                              <Chip
                                variant="outlined"
                                size="medium"
                                label={line}
                              >
                                {" "}
                              </Chip>
                            </Typography>
                          ))}
                        </Stack>
                      </CardContent>
                      <CardActions>
                        <Button fullWidth variant={tier.buttonVariant}>
                          <Link
                            underline={"none"}
                            href={tier.link}
                            style={{ color: tier.color }}
                          >
                            {tier.buttonText}
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
    </React.Fragment>
  );
}

export const Home = () => {
  return <HomeContent />;
};
