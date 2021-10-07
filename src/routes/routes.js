import HomePage from '../Page/HomePage/HomePage';
import AboutPage from '../Page/AboutPage/AboutPage';
import TrainerPage from '../Page/TrainerPage/TrainerPage';
import ServicePage from '../Page/ServicePage/ServicePage';
import LoginPage from '../Page/LoginPage/LoginPage';
import RegisterPage from '../Page/RegisterPage/RegisterPage';
import InformationServiceToRegisterProgramPage from '../Page/InformationServiceToRegisterProgramPage/InformationServiceToRegisterProgramPage';
import ExpenseSummaryPage from '../Page/ExpenseSummaryPage/ExpenseSummaryPage';
import PaymentPage from '../Page/PaymentPage/PaymentPage';
import PaymentSuccessPage from '../Page/PaymentSuccessPage/PaymentSuccessPage';
import UserInprogressProgramPage from '../Page/UserInprogressProgramPage/UserInprogressProgramPage';
import UserProfilePage from '../Page/UserProfilePage/UserProfilePage';
import UserWorkoutSchedulePage from '../Page/UserWorkoutSchedulePage/UserWorkoutSchedulePage';
import UserFoodSchedulePage from '../Page/UserFoodSchedulePage/UserFoodSchedulePage';
import UserWeeklyUpdatePage from '../Page/UserWeeklyUpdateSchedulePage/UserWeeklyUpdatePage';
import AdminProfilePage from '../Page/AdminProfilePage/AdminProfilePage';
import AdminManageVediosAndFoodPage from '../Page/AdminManageVediosAndFoodPage/AdminManageVediosAndFoodPage';
import AdminCustomersPage from '../Page/AdminCustomersPage/AdminCustomersPage';
import TrainerProfilePage from '../Page/TrainerProfilePage/TrainerProfilePage';
import TrainerManageVideosAndFoodPage from '../Page/TrainerManageVideosAndFoodPage/TrainerManageVideosAndFoodPage';
import TrainerCustomersPage from '../Page/TrainerCustomersPage/TrainerCustomersPage';
import UserProgramPage from '../Page/UserProgrampage/UserProgramPage';

const guest = [
  { component: HomePage, path: '/' },
  { component: AboutPage, path: '/aboutpage' },
  { component: TrainerPage, path: '/trainerpage' },
  { component: ServicePage, path: '/servicepage' },
];

const routesAll = {
  GUEST: {
    routes: [
      ...guest,
      { component: LoginPage, path: '/loginpage' },
      { component: RegisterPage, path: '/registerpage' },
    ],
    redirect: '/',
  },
  CUSTOMER: {
    routes: [
      ...guest,
      { component: InformationServiceToRegisterProgramPage, path: '/informatioservicetoregisterprogrampage' },
      { component: ExpenseSummaryPage, path: '/expensesummarypage' },
      { component: PaymentPage, path: '/paymentpage' },
      { component: PaymentSuccessPage, path: '/paymentsuccesspage' },
      // { component: UserInprogressProgramPage, path: '/inprogressprogrampage' },
      { component: UserProfilePage, path: '/user-profile-page' },
      // { component: UserWorkoutSchedulePage, path: '/user-workout-schedule-page' },
      // { component: UserFoodSchedulePage, path: '/user-food-schedule-page' },
      // { component: UserWeeklyUpdatePage, path: '/user-weekly-update-page' },
      { component: UserProgramPage, path: '/user-program-page' },
    ],
    redirect: '/',
  },
  ADMIN: {
    routes: [
      ...guest,
      { component: UserProfilePage, path: '/user-profile-page' },
      { component: AdminProfilePage, path: '/admin-profile-page' },
      { component: AdminManageVediosAndFoodPage, path: '/admin-manage-vedios-and-food-page' },
      { component: AdminCustomersPage, path: '/admin-customers-page' },
    ],
    redirect: '/',
  },
  TRAINER: {
    routes: [
      ...guest,
      { component: UserProfilePage, path: '/user-profile-page' },
      { component: TrainerProfilePage, path: '/trainer-profile-page' },
      { component: TrainerManageVideosAndFoodPage, path: '/trainer-manage-vedios-and-food-page' },
      { component: TrainerCustomersPage, path: '/trainer-customers-page' },
    ],
    redirect: '/',
  },
};

export { routesAll };

// {/* <Route exact path='/' component={HomePage} />; */}
// <Route path='/aboutpage' component={AboutPage} />
// <Route path='/trainerpage' component={TrainerPage} />
// <Route path='/servicepage' component={ServicePage} />
// <Route path='/loginpage' component={LoginPage} />
// <Route path='/registerpage' component={RegisterPage} />

// {/*  ต้อง Login CUSTOMER ก่อน */}
// <Route path='/informatioservicetoregisterprogrampage' component={InformationServiceToRegisterProgramPage} />
// <Route path='/expensesummarypage' component={ExpenseSummaryPage} />
// <Route path='/paymentpage' component={PaymentPage} />
// <Route path='/paymentsuccesspage' component={PaymentSuccessPage} />
// <Route path='/inprogressprogrampage' component={UserInprogressProgramPage} />
// <Route path='/user-profile-page' component={UserProfilePage} />
// <Route path='/user-workout-schedule-page' component={UserWorkoutSchedulePage} />
// <Route path='/user-food-schedule-page' component={UserFoodSchedulePage} />

// {/* เอาไปใว้ข้างใน /user-food-schedule-page*/}
// <Route path='/user-food-schedule-page-pre-workout' component={UserFoodSchedulePagePreWorkout} />
// <Route path='/user-food-schedule-page-post-workout' component={UserFoodSchedulePagePostWorkout} />
// <Route path='/user-food-schedule-page-food-schedule' component={UserFoodSchedulePageFoodSchedule} />
// {/* เอาไปใว้ข้างใน /user-food-schedule-page*/}

// <Route path='/user-weekly-update-page' component={UserWeeklyUpdatePage} />

// {/* ไม่เอาแล้ว <Route path='/vedio-page' component={VedioPage} /> */}
// {/* Admin */}
// <Route path='/admin-profile-page' component={AdminProfilePage} />
// <Route path='/admin-manage-vedios-and-food-page' component={AdminManageVediosAndFoodPage} />
// <Route path='/admin-customers-page' component={AdminCustomersPage} />

// {/* Trainer */}
// <Route path='/trainer-profile-page' component={TrainerProfilePage} />
// <Route path='/trainer-manage-vedios-and-food-page' component={TrainerManageVideosAndFoodPage} />
// <Route path='/trainer-customers-page' component={TrainerCustomersPage} />
