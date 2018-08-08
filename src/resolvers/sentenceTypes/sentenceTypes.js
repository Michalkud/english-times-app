const sentenceTypes = {
  resolvers: {

  },
  defaults: {
    sentenceTypes: [
    {
      id: 1,
      __typename: 'SentenceType',
      title: 'Past simple positive',
      sentencePartIds: [1, 11]
    },
    {
      id: 2,
      __typename: 'SentenceType',
      title: 'Past simple negative',
      sentencePartIds: []
    },
    {
      id: 3,
      __typename: 'SentenceType',
      title: 'Past simple question',
      sentencePartIds: []
    }]
  }
};

export default SentenceTypes;
