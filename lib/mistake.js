class Definer {
  /** general errors  */
  static general_err1 = "att: something went wrong!";
  static general_err2 = "att: no data with that params!";
  static general_err3 = "att: file upload error!";


  /** member auth related errors */
  static auth_err1 = "att: mongodb validation failed!";
  static auth_err3 = "att: non-registered member!";
  static auth_err4 = "att: your credentials do not match!";

  /** product  related errors */
  static product_err1 = "att: product creation failed!";
}

module.exports = Definer;
