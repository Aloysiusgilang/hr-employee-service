import { eq } from "drizzle-orm";
import db from "../db";
import { employees } from "../schema";

export const getEmployeeByEmployeeId = async (employeeId: string) => {
  const [employee] = await db
    .select()
    .from(employees)
    .where(eq(employees.id, employeeId))
    .limit(1);

  return employee;
};

export const getAllEmployees = async () => {
  const employee = await db.select().from(employees);

  return employee;
};

export const createEmployee = async (employeeData: any) => {
  const [employee] = await db
    .insert(employees)
    .values(employeeData)
    .returning();

  return employee;
};

export const updateEmployee = async (employeeId: string, employeeData: any) => {
  const [employee] = await db
    .update(employees)
    .set(employeeData)
    .where(eq(employees.id, employeeId))
    .returning();

  return employee;
};

export const deleteEmployee = async (employeeId: string) => {
  const [employee] = await db
    .delete(employees)
    .where(eq(employees.id, employeeId))
    .returning();

  return employee;
};
