import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Skill, Project, Social, Certification } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchCertifications } from "../utils/fetchCertifications";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Certifications from "../components/Certifications";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  certifications: Certification[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials, certifications }: Props) => {
  // Get profile picture URL from Sanity for favicon
  const getFaviconUrl = () => {
    if (pageInfo?.profilePic) {
      try {
        return urlFor(pageInfo.profilePic).width(180).height(180).url();
      } catch {
        return "/favicon-32x32.png";
      }
    }
    return "/favicon-32x32.png";
  };

  const faviconUrl = getFaviconUrl();

  return (
    <div
      className="bg-lightBackground dark:bg-[rgb(36,36,36)] text-darkBlack dark:text-gray-100 h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80 transition-colors duration-300"
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={faviconUrl}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={faviconUrl}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={faviconUrl}
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{pageInfo?.name ? `${pageInfo.name}'s Portfolio` : "Madhav Karyampudi's Portfolio"}</title>
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LV1LN9VBT0"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-LV1LN9VBT0')`}
        ;
      </Script>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start mb-20">
        <Projects projects={projects} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Certifications */}
      <section id="certifications" className="snap-center">
        <Certifications certifications={certifications} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
              <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();
  const certifications = await fetchCertifications();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      certifications,
    },
    revalidate: 10,
  };
};
