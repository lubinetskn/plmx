// TODO: удалить?
import {History} from 'history';

// History
const changeLocation = (history: any) => {
  const {location} = history;
  if (location.state && location.state.nextPathname) {
    history.push(location.state.nextPathname);
  } else {
    history.push('/');
  }
};

export default changeLocation;
