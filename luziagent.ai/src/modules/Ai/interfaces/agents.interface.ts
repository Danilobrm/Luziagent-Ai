import { ChatCompletionMessageParam } from "openai/resources/index";

export interface Agent {
  id: number;
  name: string;
  instructions: ChatCompletionMessageParam[];
}
