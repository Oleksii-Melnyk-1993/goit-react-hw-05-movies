import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
// import css from './MovieaSearch.module.css';

export const MovieaSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('q') ?? '';

  const handleSumbit = e => {
    e.preventDefault();
    if (e.target.elements.q.value.trim() === '') {
      toast.error('Please, enter something');
      return;
    }
    setSearchParams({ q: e.target.elements.searchValue.value });
    e.currentTarget.reset();
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Enter movie..."
          name="q"
          defaultValue={searchValue}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
