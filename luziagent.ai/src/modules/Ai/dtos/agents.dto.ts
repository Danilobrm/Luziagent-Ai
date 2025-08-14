import { ChatCompletionMessageParam, ChatCompletionTool } from "openai/resources/index";
import { Agent } from "../interfaces/agents.interface";

export class AgentDto implements Agent {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly instructions: ChatCompletionMessageParam[] = [],
    readonly tools?: ChatCompletionTool[]
  ) {}
}
