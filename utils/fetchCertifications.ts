import { Certification } from "../typings";

export const fetchCertifications = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCertifications`
    );
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();
    const certifications: Certification[] = data.certifications;

    return certifications;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return [];
  }
};
