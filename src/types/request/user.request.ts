export interface LoginPayloadType {
  username: string;
  password: string;
  type: string;
}

export interface SignUpPayloadType {
  email: string;
  username: string;
  nickname: string;
  password: string;
}

export interface IsEqualCertNumberPayloadType {
  username: string;
  type: string;
  validate: string;
}

export interface SetPasswordPayloadType {
  username: string;
  type: string;
  password: string;
}

export interface IsExistEmailPayloadType {
  email: string;
}

export interface IsExistNicknamePayloadType {
  nickname: string;
}

export interface CertNumberPayloadType {
  username: string;
  type: string;
}
