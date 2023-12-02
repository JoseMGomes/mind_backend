import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import CourseController from "./app/controllers/CourseController";
import SessionController from "./app/controllers/SessionController";
import authMiddleware from "./middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.post("/course", CourseController.store);
routes.get("/users", UserController.findAll);
routes.put("/users", UserController.update);

routes.post("/files", upload.single("file"), (req, res) => {
    return res.json({ ok: true });
});

export default routes;
