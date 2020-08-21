const isAuthenticated = (user: any) => {
  if (!user) return false;
  if (!user.token) return false;
  return true;
};

export default isAuthenticated;
