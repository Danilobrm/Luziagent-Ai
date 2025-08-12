import { router } from "../router";
import {
  createAgentController,
  getAllAgentsController,
  talkToAgentController,
} from "../modules/Ai/application/controllers/agent.controller";

router.post("/agent/create", createAgentController);

router.get("/agents", getAllAgentsController);

router.post("/agent/talk", talkToAgentController);
