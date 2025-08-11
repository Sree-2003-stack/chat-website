import express from "express";
import {protectRoute} from "../middleware/auth.js";
import {sendMessage,getMessages,getUsersForSidebar,markMessageAsSeen} from "../controllers/messageController.js";


const messageRouter = express.Router();

messageRouter.get("/users",protectRoute,getUsersForSidebar);
messageRouter.get("/:id",protectRoute,getMessages);
messageRouter.get("/mark/:id",protectRoute,markMessageAsSeen);
messageRouter.post("/send/:id",protectRoute,sendMessage);


export default messageRouter;
