import { useState } from 'react';
import { Sorting } from '@const';
import { SortName } from 'types/offer';

type SortingListProps = {
  onChange: (name: SortName) => void;
  activeSorting: SortName;
};

function SortingList({ onChange, activeSorting }: SortingListProps): JSX.Element {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onClickOptionsSelect = () => {
    setShowOptions(!showOptions);
  };

  const handleSortItemClick = (name: SortName) => {
    setShowOptions(false);
    onChange(name);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={onClickOptionsSelect}
      >
        {/* eslint-disable-next-line */}
        {Sorting[activeSorting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        showOptions && (
          <ul className="places__options places__options--custom places__options--opened">
            {
              // eslint-disable-next-line
              (Object.entries(Sorting) as [SortName, Sorting][]).map(([name, title]) => (
                <li
                  className={`places__option${name === activeSorting ? ' places__option--active' : ''}`}
                  // eslint-disable-next-line
                  key={name}
                  tabIndex={0}
                  onClick={() => handleSortItemClick(name)}
                >
                  {title}
                </li>
              ))
            }
          </ul>
        )
      }
    </form>
  );
}

export default SortingList;
