import { useAppSelector } from '@hooks/useAppSelector';
import City from './city/City';
import { cities } from '@const';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { CityName } from 'types/city';
import { setCity } from '@store/action';

const CitiesList = (): JSX.Element => {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleClick = (cityName: CityName) => {
    dispatch(setCity(cityName));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((cityName: string) => (
            <City
              key={cityName}
              name={cityName}
              isActive={cityName === activeCity.name}
              onClick={handleClick}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default CitiesList;
