import { Router } from "express";
import {
  handleGetUserByUserId,
  handleCreateUser,
  handleLoginUser,
} from "./controllers/user";
import { authenticate } from "./middlewares/auth";

function createRouter(callback: (router: Router) => void) {
  const router = Router();
  callback(router);
  return router;
}

export default createRouter((router: Router) => {
  router.get("/users/:id", authenticate, handleGetUserByUserId);
  router.post("/register", handleCreateUser);
  router.post("/login", handleLoginUser);
});
