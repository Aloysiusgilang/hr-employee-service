import { Router } from "express";
import {
  handleCreateEmployee,
  handleDeleteEmployee,
  handleGetAllEmployees,
  handleGetEmployeeById,
  handleUpdateEmployee,
} from "./controllers/employee";
import { authenticate } from "./middlewares/auth";

function createRouter(callback: (router: Router) => void) {
  const router = Router();
  callback(router);
  return router;
}

export default createRouter((router: Router) => {
  router.get("/", handleGetAllEmployees);
  router.get("/employee/:id", authenticate, handleGetEmployeeById);
  router.post("/employee", authenticate, handleCreateEmployee);
  router.put("/employee/:id", authenticate, handleUpdateEmployee);
  router.delete("/employee/:id", authenticate, handleDeleteEmployee);
});
