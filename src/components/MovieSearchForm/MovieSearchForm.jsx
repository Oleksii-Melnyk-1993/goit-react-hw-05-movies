import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
// import css from './MovieSearchForm.module.css';

export const MovieSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('searchQuery') ?? '';

  const handleSumbit = e => {
    e.preventDefault();
    if (e.target.elements.searchQuery.value.trim() === '') {
      toast.error('Please, enter something');
      return;
    }
    setSearchParams({ searchQuery: e.target.elements.searchQuery.value });
    e.currentTarget.reset();
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Enter movie..."
          name="searchQuery"
          defaultValue={searchValue}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
