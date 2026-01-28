"use client";

import ProjectCard from "./ProjectCard";
import { useProjects } from "@/hooks/useProjects";
import CardSkeleton from "./CardSkeleton";

type NotionPage = {
	id: string;
	properties: {
		[key: string]: any;
	};
};

export default function ClientComponent() {
	const { data, loading, error } = useProjects();

	if (loading) return <CardSkeleton />;
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="grid grid-cols-1 gap-3 lg:grid-cols-2 max-w-4xl place-content-center m-auto">
			{data?.map((item: NotionPage) => (
				<div key={item.id} className="opacity-0 animate-fadeIn transition-opacity duration-500">
					<ProjectCard item={item} />
				</div>
			))}
		</div>
	);
}
