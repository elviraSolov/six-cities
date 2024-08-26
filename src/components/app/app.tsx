import MainPage from '../../pages/MainPage';

type AppProps = {
  placesCount: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainPage placesCount={ props.placesCount } />
  );
}

export default App;
