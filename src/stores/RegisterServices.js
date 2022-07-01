import defaultRestApi from "../common/RestApi";

export default class RegisterServices {
  static insertRegister = (params) => {
    return defaultRestApi.post("https://sheet.best/api/sheets/eca43d8d-e06a-4ffb-8950-41d6ba98d024", params);
  };

  static sendNotification = (params) => {
    return defaultRestApi.post("/api/notification", params, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json; charset=utf-8",
        "X-Requested-With": "XMLHttpRequest",
      },
    });
  };
}
