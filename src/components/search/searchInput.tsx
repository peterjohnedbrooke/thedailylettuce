import { useState } from 'react';
import Icon from '../icon/icon';
import './searchInput.css';

const SearchInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`header__search-container ${isExpanded ? 'expanded' : ''}`}>
      <input type="text" placeholder="Search" className="header__search" />
      <button className="header__search-button" onClick={handleClick}>
        <Icon icon="search" size={36} />
      </button>
    </div>
  );
};

export default SearchInput;
