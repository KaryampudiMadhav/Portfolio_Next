import { Experience } from "../typings";

export const fetchExperiences = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        const experiences: Experience[] = data.experiences;

        return experiences;
    } catch (error) {
        console.error('Error fetching experiences:', error);
        return [];
    }
}