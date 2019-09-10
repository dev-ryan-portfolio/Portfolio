import React from "react";
import {Switch, Route } from "react-router-dom";

export default (
    <Switch basename={process.env.PUBLIC_URL}>
        <Route exact path="/" />} />
        <Route exact path="/#title" />} />
        <Route path="/#projects" />} />
        <Route path="/contact" />} />
    </Switch>
);
