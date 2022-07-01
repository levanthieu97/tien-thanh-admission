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

  static async sendInfoNotification (params) {
    try {
      const response = await RegisterServices.sendNotification(params);
      return response;
    } catch(error) {
      return false
    }
  }
}
  