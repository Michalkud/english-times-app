import gql from 'graphql-tag';

const question = {
  resolvers: {
    Query: {
      question: (_, data, { cache }) => {
        const query = gql`query {
            sentenceParts @client     {
              id
              __typename
              symbol
              description
            }
            sentenceTypes @client {
              id
              __typename
              title
              sentencePartIds
            }
          }
        `;
        const { sentenceTypes, sentenceParts } = cache.readQuery({ query });

        const randomSentenceType = sentenceTypes[Math.floor(Math.random()*sentenceTypes.length)];

        
        
        return {
          sentenceType: randomSentenceType
        }
      }
    },
  },
  defaults: {
  }
}

export default question;