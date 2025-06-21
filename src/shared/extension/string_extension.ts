import { createHmac } from "crypto";

export {};

declare global {
  interface String {
    isValidEmail(): Boolean;
    isValidPhoneNumber(): Boolean;
    isValidPassword(): Boolean;
    isEmpty(): Boolean;
    encrypt(): String;
    dycrypt(): String;
  }
}

String.prototype.isValidEmail = function (): Boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return emailRegex.test(this.toString());
};

//Là chuỗi các kí tự số. Có từ 10 đến 11 số
String.prototype.isValidPhoneNumber = function (): Boolean {
  const phoneRegex = /^\d{10,11}$/;
  return phoneRegex.test(this.toString());
};

// Là chuỗi từ 8 ký tự trở lên
// Có ít nhất 1 ký tự đặc biệt (ví dụ: !@#$%^&*()_+=...)
// Có ít nhất 1 ký tự in hoa (A-Z)
String.prototype.isValidPassword = function (): Boolean {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
  return passwordRegex.test(this.toString());
};

String.prototype.isEmpty = function (): Boolean {
  return this == null || this == "";
};

String.prototype.encrypt = function (): String {
    return createHmac("sha256", process.env.SALT_KEY ?? "").update(this.toString())
    .digest("hex");
}