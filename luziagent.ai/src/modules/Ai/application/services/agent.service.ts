import { ChatCompletionMessageParam } from "openai/resources/index";
import { Agent } from "../../interfaces/agents.interface";
import { agents, createAgentRepository, findAgentById, getAllAgentsRepository } from "../repositories/agent.repository";
import { AgentDto } from "../../dtos/agents.dto";
import { talkToAgent } from "../../../../infrastructure/ai/openai";

export const createAgentService = async (name: string, instructions: ChatCompletionMessageParam[]): Promise<Agent> => {
  const newAgent = new AgentDto(agents.length + 1, name, instructions);

  const agent_record = await createAgentRepository(newAgent);

  return agent_record;
};

export const getAllAgentsService = async (): Promise<Agent[]> => {
  return getAllAgentsRepository();
};

export const talkToAgentService = async (id: number, message: string): Promise<string> => {
  const agent = await findAgentById(id);

  if (!agent) {
    throw new Error("Agent not found");
  }

  return await talkToAgent(1, agent, message);
};
