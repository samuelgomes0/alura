import User from "./User.js";
import Teacher from "./Teacher.js";
import Admin from "./Admin.js";

const newUser = new User("Samuel", "samuel@email.com", "26-01-2000");
console.log(newUser.showInfo());

const newAdmin = new Admin("Clarisse", "clarisse@email.com", "20-09-2003");
console.log(newAdmin.showInfo());
