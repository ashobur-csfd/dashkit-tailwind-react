const menus = [
  {
    id: "1",
    name: "Dashboard",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "LMS (Admin)",
        link: "/",
        childs: [],
      },

      {
        name: "Analytic",
        link: "/analytic",
        childs: [],
      },
      {
        name: "Online Course",
        link: "/online-course", // Corrected typo
        childs: [],
      },
      {
        name: "E-Commerce",
        link: "/ecommerce",
        childs: [],
      },
      {
        name: "Project Manager",
        link: "/project-manager",
        childs: [],
      },
    ],
  },
  {
    id: "2",
    name: "Apps Integrations",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Apps",
        link: "/apps",
        childs: [],
      },
      {
        name: "Online Course",
        link: "/online-course", // Corrected typo
        childs: [],
      },
    ],
  },
  {
    id: "3",
    name: "Pages",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Pricing",
        link: "/pricing",
        childs: [],
      },
      {
        name: "Maintenance",
        link: "/maintenance",
        childs: [],
      },
      {
        name: "Faq",
        link: "/faq",
        childs: [],
      },
      {
        name: "Not Found",
        link: "/not-found",
        childs: [],
      },
      {
        name: "Success Confirmation",
        link: "/success-confirmation",
        childs: [],
      },
      {
        name: "Blog",
        link: "#",
        childs: [
          {
            name: "Blog",
            link: "/blog",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Authentication",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Sign Up",
        link: "/sign-up",
        childs: [],
      },
      {
        name: "Sign In",
        link: "/sign-in",
        childs: [],
      },
      {
        name: "Two Step",
        link: "/two-step",
        childs: [],
      },
      {
        name: "Forgot Password",
        link: "/forgot-password",
        childs: [],
      },
      {
        name: "New Password",
        link: "/new-password",
        childs: [],
      },
    ],
  },
  {
    id: "5",
    name: "Notification",
    link: "/notification",
    icon: "",
    subMenus: [],
  },
  {
    id: "6",
    name: "Logged Devices",
    link: "/log-device",
    icon: "",
    subMenus: [],
  },
  {
    id: "7",
    name: "Payment",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Payment Info",
        link: "/payment-info",
        childs: [],
      },
      {
        name: "Payment History",
        link: "/payment-history",
        childs: [],
      },
      {
        name: "Payout History",
        link: "/payout-history",
        childs: [],
      },
    ],
  },
];

export const apps = [
  {
    id: "8",
    name: "LMS",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "All Course",
        link: "/all-course",
        childs: [],
      },
      {
        name: "Create Course",
        link: "/create-course",
        childs: [],
      },
    ],
  },
  {
    id: "9",
    name: "Email",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Inbox",
        link: "/email/mail-box",
        childs: [],
      },
      {
        name: "Compose Mail",
        link: "/email/compose-mail",
        childs: [],
      },
    ],
  },
  {
    id: "10",
    name: "Chat",
    link: "/chat/chat-box",
    icon: "",
    subMenus: [],
  },
  {
    id: "11",
    name: "File Manager",
    link: "/file-manager/my-file",
    icon: "",
    subMenus: [],
  },
  {
    id: "12",
    name: "Calendar",
    link: "/multi-stack-calendar",
    icon: "",
    subMenus: [],
  },
];

export const componentMenu = [
  {
    id: "13",
    name: "UI Elements",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Accordion",
        link: "/component-accordion",
        childs: [],
      },
      {
        name: "Alerts", // Corrected typo from "Alearts"
        link: "/component-aleart",
        childs: [],
      },
      {
        name: "Badge",
        link: "/component-badge",
        childs: [],
      },
      {
        name: "Buttons",
        link: "/component-buttons",
        childs: [],
      },
      {
        name: "Drawer",
        link: "/component-drawer",
        childs: [],
      },
      {
        name: "Modal",
        link: "/component-modal",
        childs: [],
      },
      {
        name: "Rating",
        link: "/component-rating",
        childs: [],
      },
    ],
  },
  {
    id: "14",
    name: "Navigations",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Breadcrumb",
        link: "/component-breadcrumb",
        childs: [],
      },
      {
        name: "Navbar",
        link: "/component-navbar",
        childs: [],
      },
      {
        name: "Pagination",
        link: "/component-pagination",
        childs: [],
      },
    ],
  },
  {
    id: "15",
    name: "Form",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Checkbox",
        link: "/component-checkbox",
        childs: [],
      },
      {
        name: "Color Picker",
        link: "/component-color-picker",
        childs: [],
      },
      {
        name: "Editor",
        link: "/component-form-editor",
        childs: [],
      },
      {
        name: "File Upload",
        link: "/component-file-upload",
        childs: [],
      },
      {
        name: "Form Input",
        link: "/component-form-input",
        childs: [],
      },
      {
        name: "Form Layout",
        link: "/component-form-layout",
        childs: [],
      },
      {
        name: "Multi Select",
        link: "/component-multi-select",
        childs: [],
      },
      {
        name: "Range Slider",
        link: "/component-range-slider",
        childs: [],
      },
    ],
  },
  {
    id: "16",
    name: "Table",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Data Table",
        link: "/component-datatable",
        childs: [],
      },
      {
        name: "Default Table",
        link: "/component-table",
        childs: [],
      },
    ],
  },
  {
    id: "17",
    name: "Container",
    link: "/component-container",
    icon: "",
    subMenus: [],
  },
  {
    id: "18",
    name: "Typography",
    link: "/component-typography",
    icon: "",
    subMenus: [],
  },
  {
    id: "19",
    name: "Widgets",
    link: "/component-widgets",
    icon: "",
    subMenus: [],
  },
  {
    id: "20",
    name: "Icons",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Remix",
        link: "/component-remix-icon",
        childs: [],
      },
    ],
  },
  {
    id: "21",
    name: "Multi Label",
    link: "#",
    icon: "",
    subMenus: [
      {
        name: "Label 1.1",
        link: "#",
        childs: [],
      },
      {
        name: "Label 1.2",
        link: "#",
        childs: [
          {
            name: "Label 1.3",
            link: "#",
            icon: "",
          },
        ],
      },
    ],
  },
];

export const helps = [
  {
    id: "22",
    name: "Documentation",
    link: "/documentation",
    icon: "",
    subMenus: [],
  },
  {
    id: "23",
    name: "Help & Support",
    link: "/support",
    icon: "",
    subMenus: [],
  },
  {
    id: "24",
    name: "Setting",
    link: "/account-setting",
    icon: "",
    subMenus: [],
  },
];

export default menus;
