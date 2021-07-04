import { Grid, Hidden } from "@material-ui/core";
import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import eduTechLogo from "../../assets/images/eduTechLogo.ico";
import { AnimatedTree } from "../../components/AnimatedTree/index";
import LoginForm from "./LoginForm";
import "./LoginView.scss";

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

  return (
    <>
      <div className="loginPageContainerStyle">
        <Grid container className="gridContainer">
          <Hidden mdDown>
            <Grid item xs={6} className="blankCard">
              <div className="cardStyle">
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
          </Hidden>
          <Hidden mdDown>
            <Grid item xs={6} className="loginContainerStyle">
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
                        />
                      </animated.div>
                    ) : null
                  )}
                </Grid>

                {fade((style, item) =>
                  item ? (
                    <animated.div style={style}>
                      <LoginForm
                      //  onSuccess={handleSuccess}
                      />
                    </animated.div>
                  ) : null
                )}
              </Grid>
            </Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid item xs={12} className="loginContainerStyle">
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
                        />
                      </animated.div>
                    ) : null
                  )}
                </Grid>

                {fade((style, item) =>
                  item ? (
                    <animated.div style={style}>
                      <LoginForm
                      // onSuccess={handleSuccess}
                      />
                    </animated.div>
                  ) : null
                )}
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </>
  );
};

export default Login;
