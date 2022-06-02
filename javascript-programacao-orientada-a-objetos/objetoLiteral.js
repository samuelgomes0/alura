const user = {
  name: "Samuel",
  email: "samuel@hotmail.com",
  birthday: "01/01/2000",
  role: "admin",
  active: true,

  exibirInfos: function () {
    console.log(this.name, this.email);
  },
};

const samuel = user;
samuel.exibirInfos();
