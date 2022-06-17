const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
// 모델
import Users from "./user";
import Clubs from "./club";
import Likes from "./like";
import Applicants from "./applicant";

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    logging: true,
  }
);
// db 객체에 모델 정보들 넣음
db.sequelize = sequelize;
db.Users = Users;
db.Clubs = Clubs;
db.Likes = Likes;
db.Applicants = Applicants;

//모델 - 테이블 연결
Users.init(sequelize);
Clubs.init(sequelize);
Likes.init(sequelize);
Applicants.init(sequelize);
module.exports = db;
