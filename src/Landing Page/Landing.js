import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/LandingStyles";

const Landing = (props) => {
  const { classes } = props;
  return (
    <Container maxWidth="lg" style={{ background: "#111111", height: "100vh" }}>
      <Grid container className={classes.GridContainer}>
        <Grid item xs={12} md={6}>
          <img
            src="./assets/images/Group 17.svg"
            width="500"
            height="600"
            alt="Robot.img"
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridText}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <div className={classes.GridItem}>Hello There !</div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.divText}>
                Welcome to area where you can enjoy the <br />
                You Tube <span className={classes.spanText}>
                  Sync{" "}
                </span> with <span className={classes.spanText}>Zero</span>{" "}
                effort .
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  background: "#ca1a27",
                  fontFamily: "OperatorSSmBookRegular",
                  fontSize: "1.15em",
                }}
              >
                L O G I N
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Landing);
