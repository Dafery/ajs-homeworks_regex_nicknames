export default class Validator {
  validateUsername(username) {
    this.username = username;
    return /^[^\d\-_][\w\-_]+[^\d\-_]$/.test(username) && !/\d{4,}/.test(username);
  }
}
