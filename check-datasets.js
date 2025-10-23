const { createClient } = require('next-sanity');

async function testDataset(datasetName) {
    const config = {
        dataset: datasetName,
        projectId: 'odgwwaqt',
        apiVersion: '2023-05-03',
        useCdn: false,
    };

    const client = createClient(config);

    console.log(`\n========================================`);
    console.log(`Testing Dataset: "${datasetName}"`);
    console.log(`========================================\n`);

    try {
        // List all documents
        const allDocs = await client.fetch(`*[]{_type} | order(_type asc)`);
        const types = [...new Set(allDocs.map(doc => doc._type))];
        
        console.log(`Total documents: ${allDocs.length}`);
        console.log(`Document types: ${types.join(', ') || 'None'}\n`);

        if (allDocs.length === 0) {
            console.log('❌ This dataset is EMPTY!\n');
            return;
        }

        // Test PageInfo
        const pageInfo = await client.fetch(`*[_type == 'pageInfo'][0]`);
        if (pageInfo) {
            console.log('✅ PageInfo found:');
            console.log(`   Name: ${pageInfo.name || 'N/A'}`);
            console.log(`   Role: ${pageInfo.role || 'N/A'}`);
        } else {
            console.log('❌ No PageInfo found');
        }

        // Test Skills
        const skills = await client.fetch(`*[_type == 'skill']`);
        console.log(`\n✅ Skills: ${skills.length} found`);
        skills.forEach((s, i) => console.log(`   ${i + 1}. ${s.title}`));

        // Test Projects
        const projects = await client.fetch(`*[_type == 'project']`);
        console.log(`\n✅ Projects: ${projects.length} found`);
        projects.forEach((p, i) => console.log(`   ${i + 1}. ${p.title}`));

        // Test Socials
        const socials = await client.fetch(`*[_type == 'social']`);
        console.log(`\n✅ Socials: ${socials.length} found`);
        socials.forEach((s, i) => console.log(`   ${i + 1}. ${s.title}`));

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

async function main() {
    console.log('\n🔍 Checking which dataset has your data...\n');
    
    await testDataset('production');
    await testDataset('madhav_portfolio');
    
    console.log(`\n========================================`);
    console.log('SOLUTION:');
    console.log(`========================================`);
    console.log('Update .env.local to use the dataset that has data!');
    console.log('Or re-add your content in Sanity Studio after restarting it.\n');
}

main();
