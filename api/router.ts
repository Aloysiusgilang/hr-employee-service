import { Router } from "express";
import {
  handleCreateEmployee,
  handleDeleteEmployee,
  handleGetAllEmployees,
  handleGetEmployeeById,
  handleUpdateEmployee,
  handleGetEmployeeByUserId,
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
  router.get("/employee/user/:id", authenticate, handleGetEmployeeByUserId);
  router.post("/employee", authenticate, handleCreateEmployee);
  router.put("/employee/:id", authenticate, handleUpdateEmployee);
  router.delete("/employee/:id", authenticate, handleDeleteEmployee);
});
