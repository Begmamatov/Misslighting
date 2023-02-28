import {LoginState} from './types';
import {store} from '@store/configureStore';
import {userLoggedOut} from '@store/slices/userSlice';
import axios, {AxiosResponse} from 'axios';
import {
  AddCardRequest,
  BaseResponse,
  CardItem,
  CardTypeItem,
  CartItemResponse,
  DeliveryMethodResponse,
  LoginResponse,
  NewsItemResponse,
  OrderItemResponse,
  OrderSend,
  ProductItemResponse,
  QuestionsResponse,
  SendQuestionValue,
  SendReviewProps,
  SliderTypes,
} from './types';
import {RegisterState} from '@auth/signup/hooks';

export let url = 'https://admin.becloud.uz/api';
export let assetUrl = 'https://admin.becloud.uz';

axios.interceptors.request.use(config => {
  let token = store.getState().user.token;
  console.log('token----', token);

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

axios.interceptors.response.use(
  config => {
    console.log(config.config.url);

    return config;
  },
  error => {
    if (error && error.response && error.response.status == 401) {
      //@ts-ignore
      store.dispatch(userLoggedOut());
    }
    return error;
  },
);

export const appendUrl = (str: string) => {
  return `${assetUrl}${str}`;
};

export const formData = (data: any): FormData => {
  let form = new FormData();
  for (let key in data) {
    form.append(key, data[key]);
  }
  return form;
};

let requests = {
  auth: {
    login: (credentials: LoginState) =>
      axios.post<LoginState, AxiosResponse<LoginResponse>>(
        `${url}/user/sign-in`,
        credentials,
      ),

    register: (credentials: RegisterState) =>
      axios.post<
        {token: string; code: string},
        AxiosResponse<{
          data: {token: string; code: string};
        }>,
        RegisterState
      >(`${url}/user/sign-up`, credentials),

    verify: (credentials: {code: string; phone: string}, token: string) =>
      axios.post(`${url}/user/send-code`, credentials, {
        headers: {Authorization: `Bearer ${token}`},
      }),

    forgetPassword: (carcredentials: {phone: string}) =>
      axios.post(`${url}/user/recover-password`, carcredentials),

    acceptPassword: (credentials: {phone: string; code: string}) =>
      axios.post(`${url}/user/accept-recover-code`, credentials),
  },
  profile: {
    getProfile: () => axios.get<{data: LoginResponse}>(`${url}/user/profile`),
    editProfile: (data: Partial<LoginResponse>) =>
      axios.post<any, any, FormData>(`${url}/user/update`, formData(data)),
    addCard: (creds: AddCardRequest) =>
      axios.post(`${url}/user/card-add`, creds),
    getCardTypes: () =>
      axios.get<{data: CardTypeItem[]}>(`${url}/category?type=card`),
    getCards: () => axios.get<{data: CardItem[]}>(`${url}/user/cards`),
    removeCard: (data: {card_id: number}) =>
      axios.post<{data: CardItem[]}>(`${url}/user/card-remove`, data),
    getUploadPhoto: () => axios.get<{data: string}>(`${url}/user/upload-photo`),
    notificationAll: () => axios.get(`${url}/notification`),
    getTransaction: () => axios.get(`${url}/transaction`),
    removAcount: () => axios.post(`${url}/user/remove-account`),
  },

  categories: {
    getCategories: () => axios.get(`${url}/category?type=product`),
    getSubCategories: (e: number) =>
      axios.get(`${url}/category/sub-category?id=${e}`),
    getRegions: () => axios.get(`${url}/category?type=region`),
    getLogistSort: (params: any) => axios.get(`${url}/logist/sort`, {params}),
  },

  brands: {
    getBrands: (id: number) => axios.get(`${url}/brand/by-category?id=${id}`),
    getAllBrands: () => axios.get(`${url}/brand`),
  },

  shops: {
    getShops: () => axios.get(`${url}/shop`),
    getShopsValyuId: (id: number) => axios.get(`${url}/shop/detail?id=${id}`),
    getShop: () => axios.get(`${url}/shop-advertising`),
  },

  frequentQuestions: {
    getQuestions: () =>
      axios.get<{data: QuestionsResponse[]}>(`${url}/question`),
    sendQuestion: (creds: SendQuestionValue) =>
      axios.post(`${url}/feedback/send`, creds),
  },

  products: {
    getProducts: () =>
      axios.get<BaseResponse<ProductItemResponse>>(`${url}/product`),
    getProductsWithID: (id: number) =>
      axios.get<BaseResponse<ProductItemResponse>>(
        `${url}/product/by-category?id=${id}`,
      ),
    getProductWithShopID: (id: number) =>
      axios.get<BaseResponse<ProductItemResponse>>(
        `${url}/product/by-shop?id=${id}`,
      ),
    getProductDetailID: (id: number) =>
      axios.get<BaseResponse<ProductItemResponse>>(
        `${url}/product/detail?id=${id}`,
      ),
    relatedProducts: (id: number) =>
      axios.get(`${url}/product/related-products?product_id=${id}`),
    getProductsWithBrand: (id: number) =>
      axios.get<BaseResponse<ProductItemResponse>>(
        `${url}/product/by-brand?id=${id}`,
      ),
    getProductPayment: () =>
      axios.get<BaseResponse<ProductItemResponse>>(
        `${url}/category?type=payment`,
      ),
    searchProducts: (query: string) =>
      axios.get<BaseResponse<ProductItemResponse>>(
        `${url}/product/search?query=${query}`,
      ),
    getCarts: () => axios.get<{data: CartItemResponse[]}>(`${url}/cart`),

    addToCart: (creds: {product_id: number; amount: number}) =>
      axios.post(`${url}/cart/add`, creds),

    clearCart: () => axios.post(`${url}/cart/clear`),

    increaseItem: (creds: {product_id: number; amount: number}) =>
      axios.post(`${url}/cart/add`, creds),

    decreaseItem: (creds: {product_id: number}) =>
      axios.post(`${url}/cart/minus`, creds),

    removeItem: (creds: {product_id: number}) =>
      axios.post(`${url}/cart/remove`, creds),

    deliveryMethods: () =>
      axios.get<BaseResponse<DeliveryMethodResponse>>(`${url}/delivery`),

    getReviews: (product_id: number) =>
      axios.get(`${url}/product/reviews?product_id=${product_id}`),

    sendReview: (data: SendReviewProps) =>
      axios.post(`${url}/product/set-review`, data),
    colorItem: () => axios.get(`${url}/color`),
  },

  news: {
    getNews: () => axios.get<BaseResponse<NewsItemResponse>>(`${url}/news`),
    getNewsDetails: (id: number) =>
      axios.get<BaseResponse<NewsItemResponse>>(`${url}/news/detail?id=${id}`),
  },

  favorites: {
    addFavorite: (creds: {product_id: number}) =>
      axios.post(`${url}/product/set-favorite`, creds),

    getFavorites: () =>
      axios.get<BaseResponse<ProductItemResponse>>(`${url}/product/favorites`),
  },

  slider: {
    getSlidersMobile: () =>
      axios.get<BaseResponse<SliderTypes>>(`${url}/slider?type=mobile`),
    getSlidersAll: () => axios.get<BaseResponse<SliderTypes>>(`${url}/slider`),
    getBannerSliderAll: () => axios.get(`${url}/banner`),
  },

  sort: {
    getSort: (data: any) =>
      axios.get(`${url}/product?sort=${data.sort}&by-brand?id=${data.brand}`),
    getRecently: () => axios.get(`${url}/product?sort=recently`),
    getNewAdded: () => axios.get(`${url}/product?sort=new`),
    getExpensive: () => axios.get(`${url}/product?sort=price_up`),
    getCheap: () => axios.get(`${url}/product?sort=price_down`),
    getPopular: () => axios.get(`${url}/product?sort=popular`),
    getCurrency: () => axios.get(`${url}/category?type=currency`),
    getSortAll: (shopName: any) => axios.get(`${url}/product?sort=${shopName}`),
  },

  order: {
    sendOrder: (credentials: OrderSend) =>
      axios.post(`${url}/order/send`, credentials),
    getOrders: () => axios.get<BaseResponse<OrderItemResponse>>(`${url}/order`),
    DetailedSeee: (id: number) => axios.get(`${url}/order/detail?id=${id}`),
    octoSendOrder: (order_id: number) => axios.post(`${url}/octo`, {order_id}),
  },
  chat: {
    postSend: (state: any) =>
      axios.post(`${url}/chat/send`, {
        getter_id: 1,
        message: state.message,
        product_id: '',
        type_user: 'admin',
      }),
    sendUserMessege: (sendingMsg: any, file: any) =>
      axios.post(`${url}/chat/send`, {
        getter_id: 100,
        message: sendingMsg,
        file: file,
        product_id: 604,
        type_user: 'user',
      }),
    sendShopMessege: (sendingMsg: any, file: any, id: any) =>
      axios.post(`${url}/chat/send`, {
        getter_id: id,
        message: sendingMsg,
        file: file,
        product_id: '',
        type_user: 'shop',
      }),
    getTovarId: (id: number) => axios.get(`${url}/chat/messages?id=${id}`),
    shopGetProduct: () => axios.get(`${url}/chat/users?type_user=shop`),
  },
  filter: {
    catalogFilter: (id: number) =>
      axios.get(`${url}/category/filter?category_id=${id}`),
    productFilter: (
      filter: any,
      priceMin: any,
      priceMax: any,
      categoryId: any,
    ) =>
      axios.get(
        `${url}/product/by-filter?filter[${filter}]=${filter}&price_min=${priceMin}&price_max=${priceMax}&category_id=${categoryId} `,
      ),
  },
};
export default requests;
