import UserModel from "../features/user/model/user.model.js";

const basicAuth = (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  if (!authHeaders) {
    return res.status(401).send("nvalid credentials");
  }
  const base64Cred = authHeaders.replace("Basic ", "");
  const decodCred = Buffer.from(base64Cred, "base64").toString("utf-8");
  const usercred = decodCred.split(":");
  const user = UserModel.getAllUsers().find(
    (u) => u.email == usercred[0] && u.password == usercred[1]
  );
  console.log("user", user);
  if (user) {
    next();
  } else {
    return res.status(401).send("invalid credentials");
  }
};
export default basicAuth;
