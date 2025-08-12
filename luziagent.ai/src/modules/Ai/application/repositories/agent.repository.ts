import { AgentDto } from "../../dtos/agents.dto";
import { Agent } from "../../interfaces/agents.interface";

export const agents: Agent[] = [];

export const createAgentRepository = async (agent: AgentDto) => {
  try {
    agents.push(agent);
    return agent;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};

export const getAllAgentsRepository = async (): Promise<Agent[]> => {
  try {
    return agents;
  } catch (error) {
    console.error("Error getting all agents:", error);
    throw error;
  }
};

export const findAgentById = async (id: number): Promise<Agent | undefined> => {
  try {
    return agents.find((agent) => agent.id === id);
  } catch (error) {
    console.error("Error finding agent by ID:", error);
    throw error;
  }
};
