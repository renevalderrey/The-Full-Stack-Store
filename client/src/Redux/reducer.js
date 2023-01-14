const initialState = {
  products: [],
  allProducts: [],
  detail: {},
  cart: [],
  user: [],
  users: [],
  order: {},
  orders: [],
  reviews: [],
  category: [],
  brand:[],
  loading: false,
  error: null,
  success: false,
  message: null,
  token: null,
  logged: false,
  admin: false,
  search: "",
  filter: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      const marcas = state.allProducts.map((e) => e.brand).sort(function (a, b) {
        if (a < b) return -1;
        else return 1;
      });
      const uniqueBrands = [...new Set(marcas)];
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        brand:uniqueBrands,
      };
        case "GET_CATEGORIES":
      return {
        ...state,
        category: action.payload,
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ORDER_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_NAME_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "FILTER_CATEGORY":
      if (action.payload === "Category") {
        return {
          ...state,
          products: state.products,
        };
      } else {
        console.log(action.payload);
        let filtrados = state.products.filter((e) =>
          e.categories.includes(action.payload)
        );
        console.log(filtrados);
        return {
          ...state,
          products: filtrados,
        };
      }
    case "FILTER_BRAND":
      if (action.payload === "Brand") {
        return {
          ...state,
          products: state.products,
        };
      } else {
        let filtrados = state.products.filter(
          (e) => e.brand === action.payload
        );
        return {
          ...state,
          products: filtrados,
        };
      }
    // case login
    case "SIGN_UP":
      return {
        ...state,
      };
    case "SIGN_IN":
      const userEmail = state.users.find(
        (u) => u.email === action.payload.email
      );
      if (!userEmail) {
        return {
          ...state,
          user: [],
        };
      } else {
        return {
          ...state,
          user: action.payload,
        };
      }
    case "LOG_OUT":
      return {
        ...state,
        user: [],
      };
    case "SEARCH_BAR":
      let busqueda = state.allProducts.filter((e) =>
        e.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        products: busqueda,
      };
    case "CLEAN_FILTER":
      return {
        ...state,
        products: state.allProducts,
      };
    case "FILTER_PRICE":
      if (action.payload === "Price") {
        return {
          ...state,
          products: state.products,
        };
      } else {
        let filtrados = state.products.filter((e) => e.price < action.payload);
        return {
          ...state,
          products: filtrados,
        };
      }
      case "PUT_RATING":
        return {
          ...state,
        };
    default:
      return state;
  }
}
