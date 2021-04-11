import { Router } from "express";

import { createTodo } from "../controllers/todos";

const router = Router();

router.get("/", (req, res, next) => {});

router.post("/", createTodo);

router.patch("/:id", (req, res, next) => {});

router.delete("/:id", (req, res, next) => {});

export default router;
