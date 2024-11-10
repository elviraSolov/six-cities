import { memo } from 'react';
import { CityName } from 'types/types';

type CityProps = {
  name: string;
  isActive: boolean;
  onClick: (name: CityName) => void;
};

const City = ({ name, isActive, onClick }: CityProps): JSX.Element => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li
      className="locations__item"
      onClick={handleClick}
    >
      <a
        className={`locations__item-link tabs__ite ${isActive ? 'tabs__item--active' : ''}`}
        href="#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
};

export default memo(City);
