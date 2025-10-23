import { Certification } from "../typings";

export const fetchCertifications = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCertifications`
  );

  const data = await res.json();
  const certifications: Certification[] = data.certifications;

  return certifications;
};
