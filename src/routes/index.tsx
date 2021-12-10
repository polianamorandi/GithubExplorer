import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import Dashboard from '../Dashboard'
import Repository from "../Repository";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Dashboard />} />
    <Route path="/repository" element={<Repository />} />
  </Switch>
);

export default Routes;
