import { db } from "../../db/index.js";
import { tasks } from "../../db/schema/tasks.js";

type Task = {
  id: number;
  title: string;
  timestamp: Date;
};

type Context = {
  json: (data: any) => Response;
};

export async function index(c: Context): Promise<Response> {
  const taskList: Task[] = await db.select().from(tasks);
  return c.json(taskList);
}
