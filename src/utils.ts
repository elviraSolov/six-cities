import { months } from '@const';

export const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${months[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};

export class Token {
  private static _name = 'six-cities-auth-token';

  static get() {
    const token = localStorage.getItem(this._name);

    return token ?? '';
  }

  static save(token: string) {
    localStorage.setItem(this._name, token);
  }

  static drop() {
    localStorage.removeItem(this._name);
  }
}
