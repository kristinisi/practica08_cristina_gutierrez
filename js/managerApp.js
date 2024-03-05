import RestaurantsManager from "./restauranManager.js";
import ManagerController from "./managerController.js";
import ManagerView from "./managerView.js";

const ManagerApp = new ManagerController(
  RestaurantsManager.getInstance(),
  new ManagerView()
);
export default ManagerApp;
