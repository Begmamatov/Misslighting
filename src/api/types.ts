import {StyleProp, ViewStyle} from 'react-native';

export interface LoginState {
  phone?: string;
  password?: string;
  code?: string;
}

export interface RegisterState {
  name: string;
  phone: string;
  password: string;
}

export interface LoginResponse {
  id?: number;
  device_id?: string;
  token?: string;
  name?: string;
  phone?: string;
  email?: any;
  photo?: string;
  balance?: number;
  date?: string;
  gender?: string;
  birthday?: string;
  addresses?: [];
  lastName?: string;
  middleName?: string;
  country?: string;
  city?: string;
  last_address?: any;
  house?: any;
  inn?: string;
  requisites?: string;
  certificateStateRegistration?: string;
  adres_0?: string;
  type?: string;
}

export interface RegisterData {
  code: string;
  token: string;
}

export interface RegisterResponse {
  data: RegisterData;
}

export interface RegisterErrors {
  phone: string[];
}

export interface RegisterResponseErrors {
  errors: RegisterErrors;
}

export interface Brand {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export interface Category {
  id?: number;
  name?: string;
  description?: string;
  photo?: string;
}

export interface Shop {
  id: number;
  name: string;
  photo: string;
  date: string;
}

export interface ProductItemResponse {
  size?: number;
  color: any;
  id: number;
  name: string;
  price: number;
  price_old: number;
  discount: number;
  brand: Brand;
  category: Category;
  views: number;
  rating: number;
  photo: string;
  isFavorite: boolean;
  credit_label: string;
  shop: Shop;
  price_usd?: string;
  getProducts?: () => void;
  text?: string;
}

export interface CartItemResponse {
  discount: number;
  amount: number;
  price: number;
  product: ProductItemResponse;
}

export interface FavoriteItemResponse {
  product: ProductItemResponse;
}

export interface Self {
  href: string;
}

export interface First {
  href: string;
}

export interface Last {
  href: string;
}

export interface Links {
  self: Self;
  first: First;
  last: Last;
}

export interface Meta {
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
}

export interface BaseResponse<T> {
  data: T[];
  _links: Links;
  _meta: Meta;
}

export interface OrderItemResponse {
  index: number;
  id: number;
  payment: {};
  delivery: {};
  price: number;
  amount: number;
  receiver: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  comment: string;
  status: number;
  status_payment: number;
  status_logist: number;
  logist: null | any;
  date: string;
  orderProducts: {};
}

export interface NewsItemResponse {
  id: number;
  name: string;
  description_mini: string;
  views: number;
  photo: string;
  date: string;
}

export interface AddCardRequest {
  card_type_id: number;
  card_number: string;
  card_expire: string;
  card_phone_number: string;
}

export interface CardTypeItem {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export interface CardType {
  id: number;
  name: string;
  description: string;
  photo: string;
  childs: any[];
}

export interface CardItem {
  id: number;
  cardType: CardType;
  card_number: string;
  card_expire: string;
  card_phone_number: string;
  status: number;
  date: string;
}

export interface QuestionsResponse {
  id: number;
  question: string;
  answer: string;
  date: string;
}

export interface SendQuestionValue {
  name?: string;
  email?: string;
  message?: string;
}

export interface SliderTypes {
  photo: string;
}

export interface DeliveryMethodResponse {
  id: number;
  name: string;
  description: string;
  photo: string;
  date: string;
}

export interface ShopsItemResponse {
  id: number;
  name: string;
  photo: string;
  date: string;
}

export interface PaymentMethodResponse {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export interface SendReviewProps {
  product_id: number;
  review: string;
  rate: number;
}

export interface OrderSend {
  address: string;
  comment: string;
  payment_id: number;
  delivery_id: number;
  receiver: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  phone2: string;
}

export interface ActionProduct {
  id: number;
  name: string;
  region: Region;
  region_full: string;
  region_full_array: RegionFullArray[];
  photo: string;
  photoBanner: string;
  gallery: string[];
  contact_user: string;
  contact_phone: string;
  isFavorite: boolean;
  date: string;
  cart: Cart[];
}

export interface Region {
  id: number;
  bts_region_id: number;
  bts_city_id: number;
  name: string;
  description: any;
  photo: string;
}

export interface RegionFullArray {
  id: number;
  name: string;
}

export interface Cart {
  amount: number;
  delivery: any;
  amount_left: number;
  price: number;
  product: Product;
  productFilter: any[];
}

export interface Product {
  id: number;
  name: string;
  color: Color;
  name_ru: string;
  name_en: string;
  name_uz: string;
  price: number;
  price_old: number;
  price_opt: number;
  price_opt_small: number;
  delivery: any;
  weight: number;
  height: number;
  width: number;
  length: number;
  discount_exists: number;
  discount: number;
  discount_small_count: number;
  discount_big_count: number;
  count_price1: number;
  count_price2: number;
  currency: Currency;
  unit: Unit;
  amount: number;
  brand: Brand;
  category: Category;
  category_full: string;
  category_full_array: CategoryFullArray[];
  views: number;
  rating: number;
  photo: string;
  isFavorite: boolean;
  credit_label: string;
  status: number;
  productProperties: ProductProperty[];
}

export interface Color {
  id: number;
  name: string;
  color: string;
}

export interface Currency {
  id: number;
  bts_region_id: any;
  bts_city_id: any;
  name: string;
  description: string;
  photo: string;
}

export interface Unit {
  id: number;
  bts_region_id: any;
  bts_city_id: any;
  name: string;
  description: string;
  photo: string;
}

export interface Brand {
  id: number;
  name: string;
  description: string;
  photo: string;
  category: any;
}

export interface CategoryFullArray {
  id: number;
  name: string;
}

export interface ProductProperty {
  key_name: string;
  value_name: string;
}
