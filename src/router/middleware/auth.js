export default function auth({ next }) {
  const auth = JSON.parse(localStorage.getItem("logged_in"));
  if (!auth) {
    return next({
      name: "Home",
    });
  }
  return next();
}
