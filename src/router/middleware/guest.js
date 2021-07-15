export default function guest({ next }) {
  const auth = JSON.parse(localStorage.getItem("logged_in"));
  if (auth) {
    return next({
      name: "Dashboard",
    });
  }
  return next();
}
