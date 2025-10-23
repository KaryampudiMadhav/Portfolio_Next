const { createClient } = require('next-sanity');

const config = {
    dataset: 'madhav-portfolio',
    projectId: 'odgwwaqt',
    apiVersion: '2023-05-03',
    useCdn: false,
};

const client = createClient(config);

async function testQueries() {
    console.log('Testing Sanity connection...\n');
    console.log('Project ID:', config.projectId);
    console.log('Dataset:', config.dataset);
    console.log('\n---\n');

    try {
        // Test PageInfo
        console.log('1. Testing PageInfo query...');
        const pageInfo = await client.fetch(`*[_type == 'pageInfo'][0]`);
        console.log('PageInfo result:', pageInfo ? 'Found!' : 'Not found');
        if (pageInfo) {
            console.log('Name:', pageInfo.name);
            console.log('Role:', pageInfo.role);
            console.log('Has heroImage:', !!pageInfo.heroImage);
            console.log('Has profilePic:', !!pageInfo.profilePic);
        }
        console.log('\n---\n');

        // Test Skills
        console.log('2. Testing Skills query...');
        const skills = await client.fetch(`*[_type == 'skill']`);
        console.log('Skills found:', skills.length);
        if (skills.length > 0) {
            skills.forEach((skill, i) => {
                console.log(`  ${i + 1}. ${skill.title} (${skill.progress}%)`);
            });
        }
        console.log('\n---\n');

        // Test Projects
        console.log('3. Testing Projects query...');
        const projects = await client.fetch(`*[_type == 'project']`);
        console.log('Projects found:', projects.length);
        if (projects.length > 0) {
            projects.forEach((project, i) => {
                console.log(`  ${i + 1}. ${project.title}`);
            });
        }
        console.log('\n---\n');

        // Test Social
        console.log('4. Testing Social query...');
        const socials = await client.fetch(`*[_type == 'social']`);
        console.log('Social links found:', socials.length);
        if (socials.length > 0) {
            socials.forEach((social, i) => {
                console.log(`  ${i + 1}. ${social.title}: ${social.url}`);
            });
        }
        console.log('\n---\n');

        // Test Experience
        console.log('5. Testing Experience query...');
        const experiences = await client.fetch(`*[_type == 'experience']`);
        console.log('Experiences found:', experiences.length);
        if (experiences.length > 0) {
            experiences.forEach((exp, i) => {
                console.log(`  ${i + 1}. ${exp.jobTitle} at ${exp.company}`);
            });
        }
        console.log('\n---\n');

        // List all document types
        console.log('6. Listing all document types in dataset...');
        const allDocs = await client.fetch(`*[]{_type} | order(_type asc)`);
        const types = [...new Set(allDocs.map(doc => doc._type))];
        console.log('Document types found:', types.join(', '));
        console.log('Total documents:', allDocs.length);

    } catch (error) {
        console.error('Error querying Sanity:', error.message);
        console.error('Full error:', error);
    }
}

testQueries();
