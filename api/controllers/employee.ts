import { Request, Response } from "express";
import {
  getEmployeeByEmployeeId,
  getEmployeeByUserId,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
} from "../services/employee";

export const handleGetEmployeeById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const users = await getEmployeeByEmployeeId(userId);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const handleGetEmployeeByUserId = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.id;
    const users = await getEmployeeByUserId(userId);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const handleGetAllEmployees = async (req: Request, res: Response) => {
  try {
    const users = await getAllEmployees();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const handleCreateEmployee = async (req: Request, res: Response) => {
  try {
    const employee = req.body;

    const newEmployee = await createEmployee(employee);
    res.status(200).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const handleUpdateEmployee = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const employee = req.body;

    const updatedEmployee = await updateEmployee(userId, employee);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const handleDeleteEmployee = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const deletedEmployee = await deleteEmployee(userId);
    res.status(200).json(deletedEmployee);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
