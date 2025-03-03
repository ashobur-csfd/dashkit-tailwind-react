/* ******Online Course Page****** */
// Top selling courses
import instructor_1 from "@/assets/images/instructor/instructor-1.png"
import instructor_2 from "@/assets/images/instructor/instructor-2.png"
import instructor_3 from "@/assets/images/instructor/instructor-3.png"
import instructor_4 from "@/assets/images/instructor/instructor-4.png"
import instructor_5 from "@/assets/images/instructor/instructor-5.png"
import instructor_6 from "@/assets/images/instructor/instructor-3.png"
import instructor_7 from "@/assets/images/instructor/instructor-4.png"
import instructor_8 from "@/assets/images/instructor/instructor-5.png"

export const sellCourses = [
    {
        image: instructor_1,
        name: "Ronald Richards",
        courseQuantity: "90",
        title: "Web Design",
        date: "2024-02-09",
        enrolled: "3.6k",
        progress: "46",
        rating: "4.8"
    },
    {
        image: instructor_2,
        name: "John Smith",
        courseQuantity: "80",
        title: "Data Science",
        date: "2023-11-12",
        enrolled: "4.2k",
        progress: "75",
        rating: "4.9"
    },
    {
        image: instructor_3,
        name: "Jane Doe",
        courseQuantity: "90",
        title: "Graphic Design",
        date: "2024-02-09",
        enrolled: "2.9k",
        progress: "85",
        rating: "4.8"
    },
    {
        image: instructor_4,
        name: "Jane Doe",
        courseQuantity: "90",
        title: "Machine Learning",
        date: "2024-02-09",
        enrolled: "3.6k",
        progress: "65",
        rating: "4.8"
    },
    {
        image: instructor_5,
        name: "Michael Brown",
        courseQuantity: "50",
        title: "Digital Marketing",
        date: "2024-02-09",
        enrolled: "3.6k",
        progress: "65",
        rating: "4.8"
    },
    {
        image: instructor_6,
        name: "Sarah Lee",
        courseQuantity: "90",
        title: "Content Creation",
        date: "2024-02-09",
        enrolled: "3.6k",
        progress: "65",
        rating: "4.8"
    },
    {
        image: instructor_7,
        name: "Michael Brown",
        courseQuantity: "50",
        title: "Digital Marketing",
        date: "2024-02-09",
        enrolled: "3.6k",
        progress: "65",
        rating: "4.8"
    },
    {
        image: instructor_8,
        name: "John Smith",
        courseQuantity: "80",
        title: "Data Science",
        date: "2023-11-12",
        enrolled: "4.2k",
        progress: "78",
        rating: "4.9"
    },
]

/* ******Ecommerce page****** */

// best shop seller
import product_4 from "@/assets/images/e-commerce/product/product-4.png"
import product_5 from "@/assets/images/e-commerce/product/product-5.png"
import product_6 from "@/assets/images/e-commerce/product/product-6.png"
import product_7 from "@/assets/images/e-commerce/product/product-7.png"

export const bestShops = [
    {
        image: product_4,
        title: "Cartoon Bear",
        totalSell: "l.026",
        category: "Baby cartoon",
        status: "in stock",
        price: "70.84"
    },
    {
        image: product_5,
        title: "Wristwatch",
        totalSell: "2.026",
        category: "Fashion",
        status: "in stock",
        price: "40.84"
    },
    {
        image: product_6,
        title: "Yellow Armchair",
        totalSell: "3.026",
        category: "Fashion",
        status: "out of stock",
        price: "70.84"
    },
    {
        image: product_7,
        title: "Green Jacket",
        totalSell: "4.026",
        category: "Health & Fitness",
        status: "low stock",
        price: "70.84"
    },
]
export const productStocks = [
    {
        image: product_4,
        title: "Cat T-shirt",
        totalSell: "l.026",
        category: "Fashion",
        status: "in stock",
        quantity: "256",
        price: "70.84",
    },
    {
        image: product_5,
        title: "Wristwatch",
        totalSell: "2.026",
        category: "Fashion",
        status: "out of stock",
        quantity: "0",
        price: "40.84"
    },
    {
        image: product_6,
        title: "Yellow Armchair",
        totalSell: "3.026",
        category: "Toy",
        status: "limited stock",
        quantity: "12",
        price: "70.84"
    },
    {
        image: product_7,
        title: "Green Jacket",
        totalSell: "4.026",
        category: "Decor",
        status: "available",
        quantity: "78",
        price: "70.84"
    },
]


// Order List
import customer_1 from "@/assets/images/student/student-1.png"
import customer_2 from "@/assets/images/student/student-2.png"
import customer_3 from "@/assets/images/student/student-3.png"
import customer_4 from "@/assets/images/student/student-4.png"
import customer_5 from "@/assets/images/student/student-5.png"

export const orders = [
    {
        image: customer_1,
        name: "Albert Flores",
        email: "albert@gmail.com",
        orderId: "#024856",
        orderDate: "2024-02-09",
        quantity: "05",
        status: "pending",
        price: "350",
    },
    {
        image: customer_2,
        name: "Emma Johnson",
        email: "emma.johnson@example.com",
        orderId: "#024857",
        orderDate: "2024-03-12",
        quantity: "07",
        status: "completed",
        price: "150",
    },
    {
        image: customer_3,
        name: "Liam Brown",
        email: "liam.brown@example.com",
        orderId: "#024858",
        orderDate: "2024-04-18",
        quantity: "05",
        status: "cancelled",
        price: "500",
    },
    {
        image: customer_4,
        name: "Sophia Garcia",
        email: "sophia.garcia@example.com",
        orderId: "#024859",
        orderDate: "2024-05-25",
        quantity: "05",
        status: "in porgress",
        price: "800",
    },
    {
        image: customer_5,
        name: "Olivia Martinez",
        email: "olivia.martinez@example.com",
        orderId: "#024860",
        orderDate: "2024-06-15",
        quantity: "05",
        status: "pending",
        price: "250",
    },
]

// Product delivery
export const productDelivery = [
    {
        image: customer_1,
        name: "Albert Flores",
        email: "albert@gmail.com",
        orderId: "#024856",
        orderDate: "2024-02-09",
        quantity: "05",
        status: "pending",
        price: "350",
    },
    {
        image: customer_2,
        name: "Emma Johnson",
        email: "emma.johnson@example.com",
        orderId: "#024857",
        orderDate: "2024-03-12",
        quantity: "07",
        status: "completed",
        price: "150",
    },
    {
        image: customer_3,
        name: "Liam Brown",
        email: "liam.brown@example.com",
        orderId: "#024858",
        orderDate: "2024-04-18",
        quantity: "05",
        status: "cancelled",
        price: "500",
    },
]


/* ******Project Manager page****** */

// Latest projects
export const latestProjects = [
    {
        name: "Dashikit UI kit",
        timeLine: "01 Jan - 26 Jan",
        progress: "35",
        status: "in progress",
        teamName: "Design",
        teamImages: [
            {
                image: customer_1,
            },
            {
                image: customer_2,
            },
            {
                image: customer_3,
            },
            {
                image: customer_4,
            },
        ]
    },
    {
        name: "Solaris App",
        timeLine: "01 Feb - 28 Feb",
        progress: "100",
        status: "deadline missed",
        teamName: "Development",
        teamImages: [
            {
                image: customer_3,
            },
            {
                image: customer_2,
            },
            {
                image: customer_1,
            },
            {
                image: customer_4,
            },
        ]
    },
    {
        name: "Nova Website",
        timeLine: "15 Mar - 30 Mar",
        progress: "100",
        status: "completed",
        teamName: "Marketing",
        teamImages: [
            {
                image: customer_4,
            },
            {
                image: customer_2,
            },
            {
                image: customer_3,
            },
            {
                image: customer_1,
            },
        ]
    },
    {
        name: "Stellar Dashboard",
        timeLine: "10 Apr - 30 Apr",
        progress: "35",
        status: "in progress",
        teamName: "Design",
        teamImages: [
            {
                image: customer_1,
            },
            {
                image: customer_4,
            },
            {
                image: customer_3,
            },
            {
                image: customer_2,
            },
        ]
    },
    {
        name: "Galactic CRM",
        timeLine: "05 May - 25 May",
        progress: "35",
        status: "in progress",
        teamName: "Design",
        teamImages: [
            {
                image: customer_1,
            },
            {
                image: customer_4,
            },
            {
                image: customer_2,
            },
            {
                image: customer_3,
            },
        ]
    },
]


/* ****** Component table data ****** */

// Data Table
export const basicTableData =[
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "office": "Edinburgh",
            "age": 61,
            "startDate": "2011-04-25",
            "salary": "$320,800"
        },
        {
            "name": "Garrett Winters",
            "position": "Accountant",
            "office": "Tokyo",
            "age": 63,
            "startDate": "2011-07-25",
            "salary": "$170,750"
        },
        {
            "name": "Ashton Cox",
            "position": "Junior Technical Author",
            "office": "San Francisco",
            "age": 66,
            "startDate": "2009-01-12",
            "salary": "$86,000"
        },
        {
            "name": "Cedric Kelly",
            "position": "Senior Javascript Developer",
            "office": "Edinburgh",
            "age": 22,
            "startDate": "2012-03-29",
            "salary": "$433,060"
        },
        {
            "name": "Airi Satou",
            "position": "Accountant",
            "office": "Tokyo",
            "age": 33,
            "startDate": "2008-11-28",
            "salary": "$162,700"
        },
        {
            "name": "Brielle Williamson",
            "position": "Integration Specialist",
            "office": "New York",
            "age": 61,
            "startDate": "2012-12-02",
            "salary": "$372,000"
        },
        {
            "name": "Herrod Chandler",
            "position": "Sales Assistant",
            "office": "San Francisco",
            "age": 59,
            "startDate": "2012-08-06",
            "salary": "$137,500"
        },
        {
            "name": "Rhona Davidson",
            "position": "Integration Specialist",
            "office": "Tokyo",
            "age": 55,
            "startDate": "2010-10-14",
            "salary": "$327,900"
        },
        {
            "name": "Colleen Hurst",
            "position": "Javascript Developer",
            "office": "San Francisco",
            "age": 39,
            "startDate": "2009-09-15",
            "salary": "$205,500"
        },
        {
            "name": "Sonya Frost",
            "position": "Software Engineer",
            "office": "Edinburgh",
            "age": 23,
            "startDate": "2008-12-13",
            "salary": "$103,600"
        },
        {
            "name": "Jena Gaines",
            "position": "Office Manager",
            "office": "London",
            "age": 30,
            "startDate": "2008-12-19",
            "salary": "$90,560"
        },
        {
            "name": "Quinn Flynn",
            "position": "Support Lead",
            "office": "Edinburgh",
            "age": 22,
            "startDate": "2013-03-03",
            "salary": "$342,000"
        },
        {
            "name": "Charde Marshall",
            "position": "Regional Director",
            "office": "San Francisco",
            "age": 36,
            "startDate": "2008-10-16",
            "salary": "$470,600"
        },
        {
            "name": "Haley Kennedy",
            "position": "Senior Marketing Designer",
            "office": "London",
            "age": 43,
            "startDate": "2012-12-18",
            "salary": "$313,500"
        },
        {
            "name": "Tatyana Fitzpatrick",
            "position": "Regional Director",
            "office": "London",
            "age": 19,
            "startDate": "2010-03-17",
            "salary": "$385,750"
        },
        {
            "name": "Michael Silva",
            "position": "Marketing Designer",
            "office": "London",
            "age": 66,
            "startDate": "2012-11-27",
            "salary": "$198,500"
        },
        {
            "name": "Paul Byrd",
            "position": "Chief Financial Officer (CFO)",
            "office": "New York",
            "age": 64,
            "startDate": "2010-06-09",
            "salary": "$725,000"
        },
        {
            "name": "Gloria Little",
            "position": "Systems Administrator",
            "office": "New York",
            "age": 59,
            "startDate": "2009-04-10",
            "salary": "$237,500"
        },
        {
            "name": "Bradley Greer",
            "position": "Software Engineer",
            "office": "London",
            "age": 41,
            "startDate": "2012-10-13",
            "salary": "$132,000"
        },
        {
            "name": "Dai Rios",
            "position": "Personnel Lead",
            "office": "Edinburgh",
            "age": 35,
            "startDate": "2012-09-26",
            "salary": "$217,500"
        },
        {
            "name": "Jenette Caldwell",
            "position": "Development Lead",
            "office": "New York",
            "age": 30,
            "startDate": "2011-09-03",
            "salary": "$345,000"
        },
        {
            "name": "Yuri Berry",
            "position": "Chief Marketing Officer (CMO)",
            "office": "New York",
            "age": 40,
            "startDate": "2009-06-25",
            "salary": "$675,000"
        },
        {
            "name": "Caesar Vance",
            "position": "Pre-Sales Support",
            "office": "New York",
            "age": 21,
            "startDate": "2011-12-12",
            "salary": "$106,450"
        },
        {
            "name": "Doris Wilder",
            "position": "Sales Assistant",
            "office": "Sydney",
            "age": 23,
            "startDate": "2010-09-20",
            "salary": "$85,600"
        },
        {
            "name": "Angelica Ramos",
            "position": "Chief Executive Officer (CEO)",
            "office": "London",
            "age": 47,
            "startDate": "2009-10-09",
            "salary": "$1,200,000"
        },
        {
            "name": "Gavin Joyce",
            "position": "Developer",
            "office": "Edinburgh",
            "age": 42,
            "startDate": "2010-12-22",
            "salary": "$92,575"
        },
        {
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "office": "Singapore",
            "age": 28,
            "startDate": "2010-11-14",
            "salary": "$357,650"
        },
        {
            "name": "Brenden Wagner",
            "position": "Software Engineer",
            "office": "San Francisco",
            "age": 28,
            "startDate": "2011-06-07",
            "salary": "$206,850"
        },
        {
            "name": "Fiona Green",
            "position": "Chief Operating Officer (COO)",
            "office": "San Francisco",
            "age": 48,
            "startDate": "2010-03-11",
            "salary": "$850,000"
        },
        {
            "name": "Shou Itou",
            "position": "Regional Marketing",
            "office": "Tokyo",
            "age": 20,
            "startDate": "2011-08-14",
            "salary": "$163,000"
        },
        {
            "name": "Michelle House",
            "position": "Integration Specialist",
            "office": "Sydney",
            "age": 37,
            "startDate": "2011-06-02",
            "salary": "$95,400"
        },
        {
            "name": "Suki Burks",
            "position": "Developer",
            "office": "London",
            "age": 53,
            "startDate": "2009-10-22",
            "salary": "$114,500"
        },
        {
            "name": "Prescott Bartlett",
            "position": "Technical Author",
            "office": "London",
            "age": 27,
            "startDate": "2011-05-07",
            "salary": "$145,000"
        },
        {
            "name": "Gavin Cortez",
            "position": "Team Leader",
            "office": "San Francisco",
            "age": 22,
            "startDate": "2008-10-26",
            "salary": "$235,500"
        },
        {
            "name": "Martena Mccray",
            "position": "Post-Sales support",
            "office": "Edinburgh",
            "age": 46,
            "startDate": "2011-03-09",
            "salary": "$324,050"
        },
        {
            "name": "Unity Butler",
            "position": "Marketing Designer",
            "office": "San Francisco",
            "age": 47,
            "startDate": "2009-12-09",
            "salary": "$85,675"
        },
        {
            "name": "Howard Hatfield",
            "position": "Office Manager",
            "office": "San Francisco",
            "age": 51,
            "startDate": "2008-12-16",
            "salary": "$164,500"
        },
        {
            "name": "Hope Fuentes",
            "position": "Secretary",
            "office": "San Francisco",
            "age": 41,
            "startDate": "2010-02-12",
            "salary": "$109,850"
        }
]

// Instractor Table One
export const instractorTableOne = [
    {
      name: "Darrell Steward",
      category: "Development",
      classes: "Introduction CSS",
      lastUpdate: "1/31/14",
      totalStudents: 8013
    },
    {
      name: "Brooklyn Simmons",
      category: "Web Design",
      classes: "Design layout",
      lastUpdate: "5/19/12",
      totalStudents: 5560
    },
    {
      name: "Annette Black",
      category: "UX/UI Design",
      classes: "User Research",
      lastUpdate: "1/28/17",
      totalStudents: 1148
    },
    {
      name: "Darrell Steward",
      category: "Development",
      classes: "Introduction CSS",
      lastUpdate: "1/31/14",
      totalStudents: 8013
    },
    {
      name: "Marvin McKinney",
      category: "Marketing",
      classes: "Introduction CSS",
      lastUpdate: "1/31/14",
      totalStudents: 3933
    }
];

// Instractor & student Table One
export const studentInfo = [
    {
      image: instructor_1,
      name: "Eleanor Pena",
      position: "UX/UI Design",
      status: "success",
      lastActivities: "2023-10-22",
      courseName: "Web Design",
      purchase: "5 - Course",
      progress: 55,
    },
    {
      image: instructor_2,
      name: "Esther Howard",
      position: "Web & Mobile Application",
      status: "warning",
      lastActivities: "2024-10-22",
      courseName: "Management",
      purchase: "4 - Course",
      progress: 20,
    },
    {
      image: instructor_3,
      name: "Albert Flores",
      position: "Business Strategy",
      status: "info",
      lastActivities: "2024-10-22",
      courseName: "Development",
      purchase: "1 - Course",
      progress: 30,
    },
    {
      image: instructor_4,
      name: "Darlene Robertson",
      position: "Frontend Developer",
      status: "danger",
      lastActivities: "2021-11-02",
      courseName: "Marketing",
      purchase: "1 - Course",
      progress: 70,
    },
    {
      image: instructor_5,
      name: "Devon Lane",
      position: "Visual Designer",
      status: "success",
      lastActivities: "2021-11-02",
      courseName: "Business Strategy",
      purchase: "10 - Course",
      progress: 15,
    },
];
  
// student info table
export const studentDetail = [
    {
        name: "Cameron Williamson",
        category: "Development",
        student: [
            {
                image: customer_1,
            },
            {
                image: customer_2,
            },
            {
                image: customer_3,
            },
            {
                image: customer_4,
            },
        ],
        date: "2018-08-26",
        progress: "55",
    },
    {
        name: "Annette Black",
        category: "Advanced CSS",
        student: [
            {
                image: customer_3,
            },
            {
                image: customer_2,
            },
            {
                image: customer_1,
            },
            {
                image: customer_4,
            },
        ],
        date: "2019-08-26",
        progress: "45",
    },
    {
        name: "Ronald Richards",
        category: "Web Design",
        student: [
            {
                image: customer_1,
            },
            {
                image: customer_2,
            },
            {
                image: customer_3,
            },
            {
                image: customer_4,
            },
        ],
        date: "2021-01-01",
        progress: "55",
    },
    {
        name: "Cody Fisher",
        category: "Marketing",
        student: [
            {
                image: customer_1,
            },
            {
                image: customer_2,
            },
            {
                image: customer_3,
            },
            {
                image: customer_4,
            },
        ],
        date: "2012-02-06",
        progress: "91",
    },
    {
        name: "Leslie Alexander",
        category: "Development",
        student: [
            {
                image: customer_1,
            },
            {
                image: customer_2,
            },
            {
                image: customer_3,
            },
            {
                image: customer_4,
            },
        ],
        date: "2018-08-26",
        progress: "20",
    },
]