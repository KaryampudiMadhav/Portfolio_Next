import { Social } from "../typings";

export const fetchSocials = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
  } catch (error) {
    console.error('Error fetching socials:', error);
    return [];
  }
};
