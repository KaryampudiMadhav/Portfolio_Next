export default {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company/Issuer',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'certificateUrl',
      title: 'Certificate URL',
      type: 'url',
    },
    {
      name: 'dateIssued',
      title: 'Date Issued',
      type: 'date',
    },
    {
      name: 'dateExpired',
      title: 'Date Expired',
      type: 'date',
    },
    {
      name: 'doesNotExpire',
      title: 'Does Not Expire',
      type: 'boolean',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: { type: 'skill'}}]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
