import { ChatCompletionTool } from "openai/resources/index";

export const deliveryTools: ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "getAllProducts",
      description:
        "Use esta função sempre que o usuário pedir para listar, ver ou mostrar todos os produtos disponíveis na loja.",
      parameters: {
        type: "object",
        properties: {},
      },
    },
  },
];
