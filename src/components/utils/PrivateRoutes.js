import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useLevel } from "./LevelContext";

export default function PrivateRoutes() {
  const { currentLevel } = useLevel();
  return currentLevel ? <Outlet /> : <Navigate to="/" />;
}
