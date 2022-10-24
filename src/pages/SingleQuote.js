import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const SingleQuotes = () => {
  const params = useParams();
  return (
    <section>
      <h1>Single Quotes page!</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default SingleQuotes;
