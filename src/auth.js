import { UserManager, WebStorageStateStore } from "oidc-client-ts";

// Konfigurasi AWS Cognito
const authority = "https://cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_2k824qi3Q";
const clientId = "7g66hj4i3dth04u1tjbgks29nj";
const cognitoDomain = "https://ap-southeast-12k824qi3q.auth.ap-southeast-1.amazoncognito.com";
const redirectUri = "http://localhost:5173/callback";
const logoutUri = "http://localhost:5173";

// Konfigurasi OIDC Client
const userManagerConfig = {
    authority,
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email phone",
    post_logout_redirect_uri: logoutUri,
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    loadUserInfo: true,
};

export const userManager = new UserManager(userManagerConfig);

// Fungsi login
export async function signInRedirect() {
    await userManager.signinRedirect();
}

// Fungsi logout
export async function signOutRedirect() {
    const user = await userManager.getUser();
    await userManager.removeUser();

    const idToken = user?.id_token ?? "";
    const logoutUrl = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}&id_token_hint=${idToken}`;

    window.open(logoutUrl, "_self");

}

// Fungsi mendapatkan user
export async function getUser() {
    const user = await userManager.getUser();
    if (!user || user.expired) {
        await userManager.removeUser();
        return null;
    }
    return user;
}
