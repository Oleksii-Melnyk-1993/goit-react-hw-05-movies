import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/MovieAPI';
import { MovieaSearchForm } from 'components/MovieSearchForm/MovieSearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { toast } from 'react-hot-toast';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serchParam] = useSearchParams();
  const query = serchParam.get('q');

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies(query);
        setMovies([...data.results]);
        if (!data.results.length) {
          return toast.error('No matches, try to find other movie');
        }
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);
  return (
    <div>
      {isLoading && (
        <Loader>
          {' '}
          <PropagateLoader
            color={'#36D7B7'}
            css={override}
            loading={isLoading}
          />
        </Loader>
      )}
      <MovieaSearchForm />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
