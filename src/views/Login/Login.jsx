import { Box, Grid, Hidden } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import eduTechLogo from "../../assets/images/eduTechLogo.ico";
import texture from "../../assets/images/texture.png";
import { AnimatedTree } from "../../components/AnimatedTree/index";
import "./Login.scss";
import LoginForm from "./LoginForm";

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

  useEffect(() => {
    setLogo(true);
    setShow(true);
  }, []);

  const navigate = useNavigate();

  const handleSuccess = async () => {
    navigate("/");
  };

  return (
    <>
      <div className="loginPageContainerStyle">
        <Hidden>
          <Grid container className="gridContainer">
            <Grid item xs={6} className="blankCard">
              <div className="cardStyle">
                <img width="100%" height="100%" src={texture} />
                <div className="cardContentStyle">
                  <h2 style={{ color: "#FEC42D" }}>
                    Welcome back! Please login to your account.
                  </h2>
                  <div>
                    <AnimatedTree />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} className="loginContainerStyle">
              <Box className="loginCardStyle">
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={12} container justify="center">
                    {transition((style, item) =>
                      item ? (
                        <animated.div style={style}>
                          <img
                            className="eduTechLogo"
                            width={100}
                            height={100}
                            src={eduTechLogo}
                          />
                        </animated.div>
                      ) : null
                    )}
                  </Grid>

                  {fade((style, item) =>
                    item ? (
                      <animated.div style={style}>
                        <Grid container justify="center">
                          <Grid item xs={12}>
                            <Box mt={3} className="loginFormStyle">
                              <LoginForm onSuccess={handleSuccess} />
                            </Box>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            container
                            justify="center"
                            alignItems="center"
                            spacing={1}
                            style={{ marginTop: 10 }}
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
                            <Grid item xs={1} align="center">
                              <PersonIcon style={{ alignSelf: "center" }} />
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

                          {/* <Grid
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
                          </Grid> */}
                        </Grid>
                      </animated.div>
                    ) : null
                  )}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    </>
  );
};

export default Login;
