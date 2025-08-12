import { Request, Response } from "express";
import { createAgentService, getAllAgentsService, talkToAgentService } from "../services/agent.service";
import { ChatCompletionMessageParam } from "openai/resources/index";
import { system_instructions } from "../../prompts/system-guards";

const initialInstructions: ChatCompletionMessageParam[] = [
  {
    name: "initial_agent",
    role: "system",
    content: system_instructions,
  },
];

export const createAgentController = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name and instructions are required" });
  }

  const newAgent = await createAgentService(name, initialInstructions);

  res.json(newAgent);
};

export const getAllAgentsController = async (req: Request, res: Response) => {
  const agents = await getAllAgentsService();
  res.json(agents);
};

export const talkToAgentController = async (req: Request, res: Response) => {
  const { id, message } = req.body;

  if (!id || !message) {
    return res.status(400).json({ error: "ID and message are required" });
  }

  const response = await talkToAgentService(id, message);

  res.json({ response });
};
