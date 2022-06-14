import RegisterServices from "./RegisterServices";

export default class RegisterAction {
  static async insertRegisterAdmission (params) {
    try {
      const response = await RegisterServices.insertRegister(params);
      return response
    } catch(error) {
      console.log(error);
    }
  }
}
  