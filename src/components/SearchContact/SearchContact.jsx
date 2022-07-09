import PropTypes from 'prop-types';
const SearchContact = ({ searchValue, handleChange }) => {
  return (
    <div className="searchWrap">
      <label>
        Find contact by name:
        <input
          type="text"
          name="filter"
          value={searchValue}
          required
          onChange={e => handleChange(e)}
        />
      </label>
    </div>
  );
};

SearchContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchContact;
