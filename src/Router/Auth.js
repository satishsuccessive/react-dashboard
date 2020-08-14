const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  getAuth() {
    return this.isAuthenticated;
  },
};
export default Auth;
