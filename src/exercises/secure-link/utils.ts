const goodBearerToken = "f3823903b2dd6e35243b1bbe5a14f651";

const isTokenValid = (token: string | null) => {
    return token === goodBearerToken;
}

export { isTokenValid }