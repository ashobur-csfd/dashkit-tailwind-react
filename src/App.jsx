import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./pages/app/NotFound";
import 'flowbite';
import 'flowbite/dist/flowbite.css';

// Dynamic Imports for Components
const Admin = lazy(() => import("./pages/app/Admin"));
const Analytic = lazy(() => import("./pages/app/Analytic"));
const OnlineCourse = lazy(() => import("./pages/app/OnlineCourse"));
const Ecommerce = lazy(() => import("./pages/app/Ecommerce"));
const ProjectManager = lazy(() => import("./pages/app/ProjectManager"));
const Notifications = lazy(() => import("./pages/app/Notifications"));
const Accordions = lazy(() => import("./pages/components/Accordions"));
const Alearts = lazy(() => import("./pages/components/Alearts"));
const Badges = lazy(() => import("./pages/components/Badges"));
const Buttons = lazy(() => import("./pages/components/Buttons"));
const Drawers = lazy(() => import("./pages/components/Drawers"));
const Modals = lazy(() => import("./pages/components/Modals"));
const Ratings = lazy(() => import("./pages/components/Ratings"));
const Breadcrumbs = lazy(() => import("./pages/components/Breadcrumbs"));
const Navbars = lazy(() => import("./pages/components/Navbars"));
const Paginations = lazy(() => import("./pages/components/Paginations"));
const Checkboxs = lazy(() => import("./pages/components/Checkboxs"));
const ColorPickers = lazy(() => import("./pages/components/ColorPickers"));
const FormEditor = lazy(() => import("./pages/components/FormEditor"));
const FileUpload = lazy(() => import("./pages/components/FileUpload"));
const FormInput = lazy(() => import("./pages/components/FormInput"));
const FormLayout = lazy(() => import("./pages/components/FormLayout"));
const FormSelect = lazy(() => import("./pages/components/FormSelect"));
const RangeSlider = lazy(() => import("./pages/components/RangeSlider"));
const DataTable = lazy(() => import("./pages/components/DataTable"));
const DefaultTable = lazy(() => import("./pages/components/DefaultTable"));
const Container = lazy(() => import("./pages/components/Container"));
const Typography = lazy(() => import("./pages/components/Typography"));
const Widgets = lazy(() => import("./pages/components/Widgets"));
const RemixIcon = lazy(() => import("./pages/components/RemixIcon"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Support = lazy(() => import("./pages/Support"));
const Setting = lazy(() => import("./pages/Setting"));
const AppsIntegration = lazy(() => import("./pages/app/AppsIntegration"));
const Pricing = lazy(() => import("./pages/app/Pricing"));
const Faq = lazy(() => import("./pages/app/Faq"));
const Blog = lazy(() => import("./pages/app/Blog"));
const BlogDetail = lazy(() => import("./pages/app/BlogDetail"));
const Maintenance = lazy(() => import("./pages/app/Maintenance"));
const SuccessConfirmation = lazy(() => import("./pages/app/SuccessConfirmation"));
const SignUp = lazy(() => import("./pages/app/Auth/SignUp"));
const SignIn = lazy(() => import("./pages/app/Auth/SignIn"));
const NewPassword = lazy(() => import("./pages/app/Auth/NewPassword"));
const LogDevice = lazy(() => import("./pages/app/LogDevice"));
const PaymentInfo = lazy(() => import("./pages/app/Payment/PaymentInfo"));
const PaymentHistory = lazy(() => import("./pages/app/Payment/PaymentHistory"));
const PayoutHistory = lazy(() => import("./pages/app/Payment/PayoutHistory"));
const AllCourses = lazy(() => import("./pages/app/LMS/AllCourses"));
const CourseDetail = lazy(() => import("./pages/app/LMS/CourseDetail"));
const EditCourse = lazy(() => import("./pages/app/LMS/EditCourse"));
const CreateCourse = lazy(() => import("./pages/app/LMS/CreateCourse"));
const MailBox = lazy(() => import("./pages/app/LMS/MailLayout/MailBox"));
const MailLayout = lazy(() => import("./pages/app/LMS/MailLayout/MailLayout"));
const ComposeMail = lazy(() => import("./pages/app/LMS/MailLayout/ComposeMail"));
const MailDetail = lazy(() => import("./pages/app/LMS/MailLayout/MailDetail"));
const ChatLayout = lazy(() => import("./pages/app/LMS/ChatLayout/ChatLayout"));
const ChatBox = lazy(() => import("./pages/app/LMS/ChatLayout/ChatBox"));
const FileManager = lazy(() => import("./pages/app/LMS/FileManager/FileManager"));
const MyFile = lazy(() => import("./pages/app/LMS/FileManager/MyFile"));
const MultiStackCalendar = lazy(() => import("./pages/app/LMS/MultiStackCalendar"));
const ForgotPassword = lazy(() => import("./pages/app/Auth/ForgotPassword"));
const TwoStep = lazy(() => import("./pages/app/Auth/TwoStep"));

function App() {
  return (
    <Suspense fallback={<div>
      <div className="flex-center">
        <div className="flex-shrink-0">
            <span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
        </div>

        <div className="ms-4 mt-2 w-full">
            <ul className="mt-5 space-y-3">
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
            </ul>
        </div>
    </div>
    </div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* MAIN ROUTES */}
          <Route path="/" element={<Admin />} />
          <Route path="analytic" element={<Analytic />} />
          <Route path="online-course" element={<OnlineCourse />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="project-manager" element={<ProjectManager />} />
          <Route path="apps" element={<AppsIntegration />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-detail/:id" element={<BlogDetail />} />
          <Route path="notification" element={<Notifications />} />
          <Route path="log-device" element={<LogDevice />} />
          
          {/* Payment Info */}
          <Route path="payment-info" element={<PaymentInfo />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="payout-history" element={<PayoutHistory />} />
          
          {/* Apps */}
          <Route path="all-course" element={<AllCourses />} />
          <Route path="course-details/:id" element={<CourseDetail />} />
          <Route path="edit-course/:id" element={<EditCourse />} />
          <Route path="create-course" element={<CreateCourse />} />
          
          {/* Mail Routes */}
          <Route path="email" element={<MailLayout />}>
            <Route path="mail-box" element={<MailBox />} />
            <Route path="mail-detail/:id" element={<MailDetail />} />
            <Route path="compose-mail" element={<ComposeMail />} />
          </Route>

          {/* Chat Routes */}
          <Route path="chat" element={<ChatLayout />}>
            <Route path="chat-box" element={<ChatBox />} />
          </Route>

          {/* File Manager Routes */}
          <Route path="file-manager" element={<FileManager />}>
            <Route path="my-file" element={<MyFile />} />
          </Route>
          
          {/* Calendar Route */}
          <Route path="multi-stack-calendar" element={<MultiStackCalendar />} />

          {/* COMPONENT ROUTES */}
          <Route path="component-accordion" element={<Accordions />} />
          <Route path="component-aleart" element={<Alearts />} />
          <Route path="component-badge" element={<Badges />} />
          <Route path="component-buttons" element={<Buttons />} />
          <Route path="component-drawer" element={<Drawers />} />
          <Route path="component-modal" element={<Modals />} />
          <Route path="component-rating" element={<Ratings />} />
          <Route path="component-breadcrumb" element={<Breadcrumbs />} />
          <Route path="component-navbar" element={<Navbars />} />
          <Route path="component-pagination" element={<Paginations />} />
          <Route path="component-checkbox" element={<Checkboxs />} />
          <Route path="component-color-picker" element={<ColorPickers />} />
          <Route path="component-form-editor" element={<FormEditor />} />
          <Route path="component-file-upload" element={<FileUpload />} />
          <Route path="component-form-input" element={<FormInput />} />
          <Route path="component-form-layout" element={<FormLayout />} />
          <Route path="component-multi-select" element={<FormSelect />} />
          <Route path="component-range-slider" element={<RangeSlider />} />
          <Route path="component-datatable" element={<DataTable />} />
          <Route path="component-table" element={<DefaultTable />} />
          <Route path="component-container" element={<Container />} />
          <Route path="component-typography" element={<Typography />} />
          <Route path="component-widgets" element={<Widgets />} />
          <Route path="component-remix-icon" element={<RemixIcon />} />

          {/* HELP PAGES */}
          <Route path="documentation" element={<Documentation />} />
          <Route path="account-setting" element={<Setting />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* Without Navbar Pages */}
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="success-confirmation" element={<SuccessConfirmation />} />
        <Route path="*" element={<NotFound />} />

        {/* Authentication Pages */}
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="two-step" element={<TwoStep />} />
        <Route path="new-password" element={<NewPassword />} />
      </Routes>
    </Suspense>
  );
}

export default App;
