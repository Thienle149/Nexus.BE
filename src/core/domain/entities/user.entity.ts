export class UserEntity {
  constructor(
    public readonly email: string,
    public readonly phoneNumber: string,
    public password: string,
    public readonly termsAccepted: boolean,
    public fullName?: string, // nullable
  ) {
    if (!email || !phoneNumber || !password) {
      throw new Error('Email, phoneNumber và password là bắt buộc');
    }

    if (!termsAccepted) {
      throw new Error('Bạn phải đồng ý điều khoản');
    }
  }
}