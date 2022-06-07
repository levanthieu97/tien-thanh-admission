import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CommonActions from "../../common/CommonActions";

const LadingPage = CommonActions.lazyWithPreload(() => import("../landing-page"));

const Routes = () => {
  return (
    <BrowserRouter basename="">
      <div id="wrapper">
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Trường lái xe Tiến Thành</title>
            <meta name="description" content="Trường lái xe Tiến Thành" />
          </Helmet>
          <Suspense fallback={null}>
            <Switch>
              <Route
                path="/"
                render={(routeProps) => <LadingPage {...routeProps} />}
              ></Route>
            </Switch>
          </Suspense>
        </HelmetProvider>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
