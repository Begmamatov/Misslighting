import {
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
import {ROUTES as myRoutes} from '@constants/routes';

export default class NavigationService {
  static ref: NavigationContainerRefWithCurrent<any> =
    createNavigationContainerRef<any>();
  static navigate = (
    name: keyof typeof myRoutes,
    params?: {[key: string]: string | number | undefined},
  ) => {
    if (this.ref.isReady()) {
      this.ref.navigate(myRoutes[name], params);
    }
  };
  static goBack = () => {
    if (this.ref.isReady()) {
      this.ref.goBack();
    }
  };
}
