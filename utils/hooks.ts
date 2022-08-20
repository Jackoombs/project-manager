import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery(["projects"], async () => {
    const data = await fetch(
      "api/projects/project"
    )
    return await data.json()
  });
}