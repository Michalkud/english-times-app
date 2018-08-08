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
      sentencePartIds: [1, 10, 2]
    },
    {
      id: 3,
      __typename: 'SentenceType',
      title: 'Past simple question',
      sentencePartIds: [9, 1, 2]
    }]
  }
};

export default sentenceTypes;
