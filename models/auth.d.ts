declare interface AuthTrueResponseType {
    accessToken: string;
    refreshToken: string;
    profile: IProfile;  
}
declare interface AuthFalseResponseType {
    message: string; 
}
declare type AuthResponseType = AuthTrueResponseType | AuthFalseResponseType;

declare interface AuthRequestType {
    username: string;
    password: string;
}

declare interface IProfile {
    username: string;
    password: string;
    role: IProfileRole.ADMIN | IProfileRole.SUPERADMIN
}

declare enum IProfileRole {
    SUPERADMIN = "SUPERADMIN",
    ADMIN = "ADMIN"
}