export const info = (state = {}, { type, payload }) => {
  switch (type) {
    case "login":
      return payload;
    case "logOut":
      localStorage.removeItem("info");
      return {};
    default:
      return state;
  }
};
export const address = (
  state = { address: "", city: "", postalCode: "", phone: "" },
  { type, payload }
) => {
  switch (type) {
    case "address":
      localStorage.setItem("address", JSON.stringify(payload));
      return payload;
    default:
      return state;
  }
};
export const basket = (state = [], { type, payload }) => {
  switch (type) {
    case "add":
      localStorage.setItem("basket", JSON.stringify(payload));

      return payload;
    case "plus":
      localStorage.setItem("basket", JSON.stringify(payload));
      return payload;

    case "minus":
      localStorage.setItem("basket", JSON.stringify(payload));

      return payload;
    case "remove":
      localStorage.setItem("basket", JSON.stringify(payload));
      return payload;
    case "delete":
      localStorage.removeItem("basket", JSON.stringify(payload));
      return payload;
    default:
      return state;
  }
};
export const basket2 = (state = [], { type, payload }) => {
  switch (type) {
    case "add2":
      localStorage.setItem("basket2", JSON.stringify(payload));
      return payload;
    case "plus2":
      localStorage.setItem("basket2", JSON.stringify(payload));
      return payload;
    case "minus2":
      localStorage.setItem("basket2", JSON.stringify(payload));
      return payload;
    case "remove2":
      localStorage.setItem("basket2", JSON.stringify(payload));
      return payload;
    case "delete2":
      localStorage.removeItem("basket2", JSON.stringify(payload));
      return payload;
    default:
      return state;
  }
};
