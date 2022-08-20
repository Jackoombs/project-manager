import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma: any = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    createProject(req, res);
  }

  if (req.method === "GET") {
    getProjects(req, res);
  }
};

const createProject = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ unauthorised: true });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user!.email },
  });

  const project = await prisma.project.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      userId: user.id,
      deadline: req.body.deadline,
      tasks: [],
    },
  });

  if (project.id) {
    console.log(project);
    res.status(200).json(project);
  } else {
    res.status(500).json({ error: "Something went wrong." });
  }
};

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ unauthorised: true });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user!.email },
  });

  const projects = await prisma.project.findMany({
    where: { userId: user.id },
  });

  return res.status(200).json(projects);
};