import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@ian/app",
  () => System.import("@ian-test/single-spa"),
  isActive.navbar
);

start();
