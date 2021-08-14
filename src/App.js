import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Global.css";
import React from "react";
import HomePage from "./Page/HomePage/HomePage";
import AboutPage from "./Page/AboutPage/AboutPage";
import TrainerPage from "./Page/TrainerPage/TrainerPage";
import ServicePage from "./Page/ServicePage/ServicePage";
import LoginPage from "./Page/LoginPage/LoginPage";
import RegisterPage from "./Page/RegisterPage/RegisterPage";
import InformationServiceToRegisterProgramPage from "./Page/InformationServiceToRegisterProgramPage/InformationServiceToRegisterProgramPage";
import ExpenseSummaryPage from "./Page/ExpenseSummaryPage/ExpenseSummaryPage";
import PaymentPage from "./Page/PaymentPage/PaymentPage";
import PaymentSuccessPage from "./Page/PaymentSuccessPage/PaymentSuccessPage";
import UserInprogressProgramPage from "./Page/UserInprogressProgramPage/UserInprogressProgramPage";
import UserProfilePage from "./Page/UserProfilePage/UserProfilePage";
import UserWorkoutSchedulePage from "./Page/UserWorkoutSchedulePage/UserWorkoutSchedulePage";
import UserFoodSchedulePage from "./Page/UserFoodSchedulePage/UserFoodSchedulePage";
import UserFoodSchedulePagePreWorkout from "./Page/UserFoodSchedulePagePreWorkout/UserFoodSchedulePagePreWorkout";
import UserFoodSchedulePagePostWorkout from "./Page/UserFoodSchedulePagePostWorkout/UserFoodSchedulePagePostWorkout";
import UserFoodSchedulePageFoodSchedule from "./Page/UserFoodSchedulePageFoodSchedule/UserFoodSchedulePageFoodSchedule";
import UserWeeklyUpdatePage from "./Page/UserWeeklyUpdateSchedulePage/UserWeeklyUpdatePage";
import VedioPage from "./Page/VedioPage/VedioPage";
import AdminProfilePage from "./Page/AdminProfilePage/AdminProfilePage";
import AdminManageVediosAndFoodPage from "./Page/AdminManageVediosAndFoodPage/AdminManageVediosAndFoodPage";
import AdminCustomersPage from "./Page/AdminCustomersPage/AdminCustomersPage";
import TrainerProfilePage from "./Page/TrainerProfilePage/TrainerProfilePage";
import TrainerManageVideosAndFoodPage from "./Page/TrainerManageVideosAndFoodPage/TrainerManageVideosAndFoodPage";
import TrainerCustomersPage from "./Page/TrainerCustomersPage/TrainerCustomersPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/aboutpage" component={AboutPage} />
          <Route path="/trainerpage" component={TrainerPage} />
          <Route path="/servicepage" component={ServicePage} />
          <Route path="/loginpage" component={LoginPage} />
          <Route path="/registerpage" component={RegisterPage} />
          <Route
            path="/informatioservicetoregisterprogrampage"
            component={InformationServiceToRegisterProgramPage}
          />
          <Route path="/expensesummarypage" component={ExpenseSummaryPage} />
          <Route path="/paymentpage" component={PaymentPage} />
          <Route path="/paymentsuccesspage" component={PaymentSuccessPage} />
          <Route
            path="/inprogressprogrampage"
            component={UserInprogressProgramPage}
          />
          <Route path="/user-profile-page" component={UserProfilePage} />
          <Route
            path="/user-workout-schedule-page"
            component={UserWorkoutSchedulePage}
          />
          <Route
            path="/user-food-schedule-page"
            component={UserFoodSchedulePage}
          />
          <Route
            path="/user-food-schedule-page-pre-workout"
            component={UserFoodSchedulePagePreWorkout}
          />
          <Route
            path="/user-food-schedule-page-post-workout"
            component={UserFoodSchedulePagePostWorkout}
          />
          <Route
            path="/user-food-schedule-page-food-schedule"
            component={UserFoodSchedulePageFoodSchedule}
          />
          <Route
            path="/user-weekly-update-page"
            component={UserWeeklyUpdatePage}
          />
          <Route path="/vedio-page" component={VedioPage} />
          <Route path="/admin-profile-page" component={AdminProfilePage} />
          <Route
            path="/admin-manage-vedios-and-food-page"
            component={AdminManageVediosAndFoodPage}
          />
          <Route path="/admin-customers-page" component={AdminCustomersPage} />
          <Route path="/trainer-profile-page" component={TrainerProfilePage} />
          <Route
            path="/trainer-manage-vedios-and-food-page"
            component={TrainerManageVideosAndFoodPage}
          />
          <Route
            path="/trainer-customers-page"
            component={TrainerCustomersPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
