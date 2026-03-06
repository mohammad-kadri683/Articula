import Categories from "../CustomComponent/Categories";

export const ApiConfig = {
  BASE_URL: 'https://tamkeen-dev.com/api',
  image_base_url: "https://tamkeen-dev.com",
  ENDPOINTS: {


    
    REGISTRATION: '/user/registerpass?_format=json',
    LOGIN: '/user/login?_format=json',
    LOGOUT: '/user/logout?_format=json&token=y4tg3IuSAB8VxiFJ-WgkFZIspfoOIpgcT5irpO1y0vk',
    DELETE: '/user/169?_format=json',
    CATEGORY: '/terms/category',
    TAGS:'/terms/tags',
    TESTIMONNIALS: '/testimonials',
    USER: (userId) => `/user/${userId}?_format=json`,
    UserImage: "/file/upload/user/user/user_picture?_format=json",
    EditUser: (userId) => `/user/${userId}?_format=json`,
    BLOIMAGE: "/file/upload/node/blog/field_image?_format=json",
    CBLOG: "/node?_format=json",
    BLOGGALLERY: "/file/upload/node/blog/field_gallery?_format=json",
    MYARTICLELIST: "/blogs-api-current-user",
    BLOGLIST: "/blogs-api",
    ARTICLEDETAILS: (id) => `/node/${id}?_format=json`,
    ARTICLEUPDATE: (id) => `/node/${id}?_format=json`,
    FAQ: (catId) => `/faq-list?cat=${catId}`,
    FAQ_CATEGORIES: "/terms/faq-category",
    DELETEARTIClE: (id)=> `/node/${id}?_format=json`,
    UPLOADIMAG:"/file/upload/node/blog/field_image?_format=json",
    UsersList:"/users-list?_format=json"

  }

}