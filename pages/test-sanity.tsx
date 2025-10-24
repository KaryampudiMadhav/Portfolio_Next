import { GetServerSideProps } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Props = {
  pageInfo: any;
  skills: any[];
  projects: any[];
  experiences: any[];
  socials: any[];
};

export default function TestSanity({ pageInfo, skills, projects, experiences, socials }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Sanity Data Test Page
        </h1>

        {/* PageInfo Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            📄 PageInfo
          </h2>
          {pageInfo ? (
            <div className="space-y-2">
              <p><strong>Name:</strong> {pageInfo.name || "Not set"}</p>
              <p><strong>Role:</strong> {pageInfo.role || "Not set"}</p>
              <p><strong>Email:</strong> {pageInfo.email || "Not set"}</p>
              <p><strong>Phone:</strong> {pageInfo.phoneNumber || "Not set"}</p>
              <p><strong>Address:</strong> {pageInfo.address || "Not set"}</p>
              <p><strong>Background:</strong> {pageInfo.backgroundInformation || "Not set"}</p>
              <p><strong>Hero Image:</strong> {pageInfo.heroImage ? "✅ Uploaded" : "❌ Missing"}</p>
              <p><strong>Profile Pic:</strong> {pageInfo.profilePic ? "✅ Uploaded" : "❌ Missing"}</p>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-gray-600">View Raw JSON</summary>
                <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">
                  {JSON.stringify(pageInfo, null, 2)}
                </pre>
              </details>
            </div>
          ) : (
            <p className="text-red-500">❌ No PageInfo found. Create one in Sanity Studio!</p>
          )}
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            💻 Skills ({skills?.length || 0})
          </h2>
          {skills && skills.length > 0 ? (
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={skill._id} className="border-l-4 border-green-500 pl-4">
                  <p><strong>{index + 1}. {skill.title}</strong></p>
                  <p className="text-sm text-gray-600">Progress: {skill.progress}%</p>
                  <p className="text-sm text-gray-600">Image: {skill.image ? "✅ Yes" : "❌ No"}</p>
                </div>
              ))}
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-gray-600">View Raw JSON</summary>
                <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">
                  {JSON.stringify(skills, null, 2)}
                </pre>
              </details>
            </div>
          ) : (
            <p className="text-red-500">❌ No Skills found. Add some in Sanity Studio!</p>
          )}
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            🚀 Projects ({projects?.length || 0})
          </h2>
          {projects && projects.length > 0 ? (
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div key={project._id} className="border-l-4 border-purple-500 pl-4">
                  <p><strong>{index + 1}. {project.title}</strong></p>
                  <p className="text-sm text-gray-600">{project.summary}</p>
                  <p className="text-sm text-gray-600">Link: {project.linkToBuild || "No link"}</p>
                  <p className="text-sm text-gray-600">Image: {project.image ? "✅ Yes" : "❌ No"}</p>
                  <p className="text-sm text-gray-600">Technologies: {project.technologies?.length || 0}</p>
                </div>
              ))}
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-gray-600">View Raw JSON</summary>
                <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">
                  {JSON.stringify(projects, null, 2)}
                </pre>
              </details>
            </div>
          ) : (
            <p className="text-red-500">❌ No Projects found. Add some in Sanity Studio!</p>
          )}
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">
            💼 Experience ({experiences?.length || 0})
          </h2>
          {experiences && experiences.length > 0 ? (
            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <div key={exp._id} className="border-l-4 border-orange-500 pl-4">
                  <p><strong>{index + 1}. {exp.jobTitle}</strong> at {exp.company}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(exp.dateStarted).getFullYear()} - 
                    {exp.isCurrentlyWorkingHere ? " Present" : new Date(exp.dateEnded).getFullYear()}
                  </p>
                  <p className="text-sm text-gray-600">Points: {exp.points?.length || 0}</p>
                  <p className="text-sm text-gray-600">Technologies: {exp.technologies?.length || 0}</p>
                </div>
              ))}
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-gray-600">View Raw JSON</summary>
                <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">
                  {JSON.stringify(experiences, null, 2)}
                </pre>
              </details>
            </div>
          ) : (
            <p className="text-red-500">❌ No Experience found. Add some in Sanity Studio!</p>
          )}
        </div>

        {/* Socials Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">
            🔗 Social Links ({socials?.length || 0})
          </h2>
          {socials && socials.length > 0 ? (
            <div className="space-y-3">
              {socials.map((social, index) => (
                <div key={social._id} className="border-l-4 border-pink-500 pl-4">
                  <p><strong>{index + 1}. {social.title}</strong></p>
                  <p className="text-sm text-gray-600">
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {social.url}
                    </a>
                  </p>
                </div>
              ))}
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-gray-600">View Raw JSON</summary>
                <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">
                  {JSON.stringify(socials, null, 2)}
                </pre>
              </details>
            </div>
          ) : (
            <p className="text-red-500">❌ No Social Links found. Add some in Sanity Studio!</p>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h3 className="text-lg font-semibold mb-2">📝 Instructions</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Open Sanity Studio: <a href="http://localhost:3333" target="_blank" className="text-blue-500 underline">http://localhost:3333</a></li>
            <li>Add or edit your content in each section</li>
            <li><strong>IMPORTANT:</strong> Click the green &quot;PUBLISH&quot; button (not just &quot;Save&quot;)</li>
            <li>Refresh this page to see your updates</li>
            <li>Once you see your data here, go to your main portfolio: <a href="http://localhost:3000" target="_blank" className="text-blue-500 underline">http://localhost:3000</a></li>
          </ol>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>This is a debugging page. Delete <code>pages/test-sanity.tsx</code> when done testing.</p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Query for PageInfo
  const pageInfoQuery = groq`*[_type == 'pageInfo'][0]`;
  const pageInfo = await sanityClient.fetch(pageInfoQuery);

  // Query for Skills
  const skillsQuery = groq`*[_type == 'skill'] | order(_createdAt desc)`;
  const skills = await sanityClient.fetch(skillsQuery);

  // Query for Projects
  const projectsQuery = groq`*[_type == 'project'] {
    ...,
    technologies[]->
  } | order(_createdAt desc)`;
  const projects = await sanityClient.fetch(projectsQuery);

  // Query for Experience
  const experiencesQuery = groq`*[_type == 'experience'] {
    ...,
    technologies[]->
  } | order(dateStarted desc)`;
  const experiences = await sanityClient.fetch(experiencesQuery);

  // Query for Socials
  const socialsQuery = groq`*[_type == 'social']`;
  const socials = await sanityClient.fetch(socialsQuery);

  return {
    props: {
      pageInfo: pageInfo || null,
      skills: skills || [],
      projects: projects || [],
      experiences: experiences || [],
      socials: socials || [],
    },
  };
};
