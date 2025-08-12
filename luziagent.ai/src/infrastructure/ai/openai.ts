import { ChatCompletionMessageParam } from "openai/resources/index";
import OpenAI from "openai";
import { Agent } from "../../modules/Ai/interfaces/agents.interface";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const conversations: { [key: number]: ChatCompletionMessageParam[] } = {};

export const trainAgent = async (id: number, instructions: string[]): Promise<void> => {
  try {
    console.log("Training agent...");
    // agent.instructions.push(...instructions);
  } catch (error) {
    console.error("Error training agent:", error);
    throw error;
  }
};

export const talkToAgent = async (user_id: number, agent: Agent, message: string): Promise<any> => {
  if (!conversations[user_id]) {
    conversations[user_id] = [...agent.instructions];
  }

  conversations[user_id].push({ role: "user", content: message });

  const messages = [...conversations[user_id]];

  console.log(messages);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0,
    });

    const reply = completion.choices[0].message.content as string;

    conversations[user_id].push({ role: "assistant", content: reply });

    return reply;
  } catch (error) {
    console.error("Error talking to agent:", error);
    throw error;
  }
};
