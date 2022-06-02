import User from "./User.js";

export default class Teacher extends User {
  constructor(name, email, birthday, role = "docente", active = true) {
    super(name, email, birthday, role, active);
  }

  approveStudent(student, course) {
    return `Estudante ${student} passou no curso ${course}.`;
  }
}
