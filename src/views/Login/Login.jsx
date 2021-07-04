import { Box, Button, Grid, Hidden, TextField } from "@material-ui/core";
import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import eduTechLogo from "../../assets/images/eduTechLogo.ico";
import texture from "../../assets/images/texture.png";
import { AnimatedTree } from "../../components/AnimatedTree/index";
import "./Login.scss";

const Login = ({ ...props }) => {
  const [logo, setLogo] = useState(false);
  const transition = useTransition(logo, {
    from: { x: 180, y: -260, opacity: 0 },
    enter: () => async (next) => {
      await next({ opacity: 1 });
      await next({ x: 190, y: 400 });
      await next({ x: -200, y: 400 });
      await next({ x: -200, y: 0 });
      await next({ x: 0, y: 0 });
    },
    // config:{ duration: 1000 }
  });

  const [show, setShow] = useState(false);
  const fade = useTransition(show, {
    from: { x: 180, y: -150, opacity: 0 },
    enter: () => async (next) => {
      await next({ x: 0, y: 0, opacity: 0 });
      await next({ x: 0, y: 0, opacity: 1 });
    },
    config: { duration: 3000 },
  });

  // const [light, setLight] = useState(false);
  // const bright = useTransition(light, {
  //   from: { background: "#FFFACD" },
  //   enter: () => async (next) => {
  //     await next({ background: "#FFFFE0" });
  //     await next({ background: "white" });
  //   },
  //   config: { duration: 3000 },
  // });

  useEffect(() => {
    setLogo(true);
    setShow(true);
    // setLight(true);
  }, []);

  return (
    <>
      <div className="loginPageContainerStyle">
        <Hidden>
          <Grid container className="gridContainer">
            <Grid item xs={6} className="blankCard">
              <div className="cardStyle">
                <img width="100%" height="auto" src={texture} alt="" />
                <div className="cardContentStyle">
                  <h4 style={{ color: "#FEC42D" }}>
                    Welcome back! Please login to your account.
                  </h4>
                  <div>
                    <AnimatedTree />
                  </div>
                </div>
              </div>
            </Grid>
            {/* {bright((style, item) =>
            item ? ( */}
            <Grid item xs={6} className="loginContainerStyle">
              {/* <animated.div style={style}> */}
              <Box className="loginCardStyle">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} container justify="center">
                    {transition((style, item) =>
                      item ? (
                        <animated.div style={style}>
                          <img
                            className="eduTechLogo"
                            width={100}
                            height={100}
                            src={eduTechLogo}
                            alt=""
                          />
                        </animated.div>
                      ) : null
                    )}
                  </Grid>

                  {fade((style, item) =>
                    item ? (
                      <animated.div style={style}>
                        <Grid container>
                          <Grid item xs={12} container justify="center">
                            <Grid item>
                              <TextField
                                id="username"
                                label="Username"
                                type="email"
                                fullWidth
                                autoFocus
                                required
                              />
                            </Grid>
                          </Grid>
                          <Grid item container justify="center" xs={12}>
                            <Grid item>
                              <TextField
                                id="username"
                                label="Password"
                                type="password"
                                fullWidth
                                required
                              />
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid item container justify="center">
                              <Button
                                disableFocusRipple
                                disableRipple
                                style={{
                                  textTransform: "none",
                                  // color: "#FEC42D",
                                }}
                                variant="text"
                                // color="primary"
                              >
                                Forgot password ?
                              </Button>
                            </Grid>
                          </Grid>
                          <Grid item container justify="center" xs={12}>
                            <Button
                              variant="contained"
                              color="primary"
                              style={{
                                textTransform: "none",
                                // width: "10rem",
                                // backgroundColor: "#FEC42D",
                                // color: "blue",
                              }}
                              size="small"
                            >
                              Login
                            </Button>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            container
                            justify="center"
                            alignItems="center"
                            spacing={1}
                          >
                            <Grid item xs={3}>
                              <div
                                style={{
                                  height: "1px",
                                  minWidth: "100%",
                                  background: "gray",
                                }}
                              ></div>
                            </Grid>
                            <Grid item xs={1}>
                              <h6 style={{ textAlign: "center" }}>Or</h6>
                            </Grid>
                            <Grid item xs={3}>
                              <div
                                style={{
                                  height: "1px",
                                  minWidth: "100%",
                                  background: "gray",
                                }}
                              ></div>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            container
                            justify="center"
                            alignItems="center"
                            spacing={1}
                          >
                            <h6
                              style={{
                                textAlign: "center",
                                color: "#4d4f5c",
                              }}
                            >
                              Login via Google
                            </h6>
                          </Grid>
                        </Grid>
                      </animated.div>
                    ) : null
                  )}
                </Grid>
              </Box>
              {/* </animated.div> */}
            </Grid>
            {/* ) : null
          )} */}
          </Grid>
        </Hidden>
      </div>
    </>
  );
};

export default Login;
