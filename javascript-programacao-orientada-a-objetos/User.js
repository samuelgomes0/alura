export default class User {
  #name;
  #email;
  #birthday;
  #role;
  #active;
  constructor(name, email, birthday, role, active = true) {
    this.#name = name;
    this.#email = email;
    this.#birthday = birthday;
    this.#role = role || "student";
    this.#active = active;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get birthday() {
    return this.#birthday;
  }

  get role() {
    return this.#role;
  }

  get active() {
    return this.#active;
  }

  set name(newName) {
    if (newName === "") {
      throw new Error("Formato inválido");
    }

    this.#name = newName;
  }

  showInfos() {
    return `${this.name}, ${this.email}, ${this.birthday}, ${this.role}`;
  }
}
