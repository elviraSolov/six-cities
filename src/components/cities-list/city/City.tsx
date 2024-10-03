import { CityName } from 'types/city';

type CityProps = {
  name: string;
  isActive: boolean;
  onClick: (name: CityName) => void;
};

function City({ name, isActive, onClick }: CityProps): JSX.Element {
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
}

export default City;
