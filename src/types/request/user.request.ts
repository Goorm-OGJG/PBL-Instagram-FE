export interface LoginPayloadType {
  userName: string;
  password: string;
  type: string;
}

export interface SignUpPayloadType {
  email: string;
  userName: string;
  nickname: string;
  password: string;
}

export interface IsEqualCertNumberPayloadType {
  userName: string;
  type: string;
  validate: string;
}

export interface SignUpPayloadType {
  userName: string;
  type: string;
  password: string;
}

export interface SetPasswordPayloadType {
  userName: string;
  type: string;
  password: string;
}
