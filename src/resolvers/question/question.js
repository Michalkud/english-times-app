const question = {
  resolvers: {
    Query: {
      question: (_, data, { cache }) => {
        const query = gql`{
            sentenceTypes @client {
              id
              __typename
              title
              sentencePartIds
            }
          }
        `;

        const previous = cache.readQuery({ query });
        return {

        }
      }
    },
  },
  defaults: {
  }
}

export default question;