export const isAuth = () => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
        return true;
    } else {
        return false;
    }
}