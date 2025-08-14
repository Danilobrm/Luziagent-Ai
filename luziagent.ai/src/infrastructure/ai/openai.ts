import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index";
import { Agent } from "../../modules/Ai/interfaces/agents.interface";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const conversations: { [key: number]: ChatCompletionMessageParam[] } = {};

export const talkToAgent = async (user_id: number, agent: Agent, message: string): Promise<any> => {
  if (!conversations[user_id]) {
    conversations[user_id] = [...agent.instructions];
  }

  conversations[user_id].push({ role: "user", content: message });

  const messages = [...conversations[user_id]];

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0,
      tools: agent.tools,
      tool_choice: "auto",
    });

    const message = completion.choices[0].message;

    //     if (message.tool_calls) {
    //       for (const call of message.tool_calls) {
    //         if (call.function.name === "getAllProducts") {
    //           const products = await getAllProducts();
    //
    //           if (products.length === 0) {
    //             return "Nenhum produto encontrado.";
    //           }
    //
    //           const final = await openai.chat.completions.create({
    //             model: "gpt-4o-mini",
    //             messages: [
    //               ...messages,
    //               message,
    //               {
    //                 role: "tool",
    //                 tool_call_id: call.id,
    //                 content: JSON.stringify(products),
    //               },
    //             ],
    //           });
    //
    //           return final.choices[0].message.content;
    //         }
    //       }
    //     }

    const reply = message.content as string;
    conversations[user_id].push({ role: "assistant", content: reply });

    return reply;
  } catch (error) {
    console.error("Error talking to agent:", error);
    throw error;
  }
};
