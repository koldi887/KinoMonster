import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";



import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Rendify"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/stars.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Rendify.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/*<SectionNavbars />*/}
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>
              button <br/>

            </Button>




          </Link>
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
