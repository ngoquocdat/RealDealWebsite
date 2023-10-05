import { lorem } from "./context";

export interface IRealEstates {
    id: number,
    title: string,
    image:
      string,
    rsType: string,
    location: string,
    address: string,
    description: string,
    floorArea: number,
    facilities: {
      bathroom: number,
      bedroom: number,
      others: string[],
    },
    price: number,
    isPopular: boolean,
    total: number,
    capacity: number,
    searchKey: string[]
}

const RealEstates: IRealEstates[] = [
    {
      id: 1,
      title: "East Sunlight Apartment",
      image:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
      rsType: "APARTMENTS",
      location: "Ha Noi City",
      address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
      description: lorem.generateParagraphs(2),
      floorArea: 96,
      facilities: {
        bathroom: 1,
        bedroom: 2,
        others: ["Pool", "Market", "School", "Hospital"],
      },
      price: 3000000000,
      isPopular: true,
      total: 100,
      capacity: 86,
      searchKey: ["HaNoi"]
    },
    {
      id: 2,
      title: "South Side Garden House",
      image:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/property-grid-img-1-450x300.jpg",
      rsType: "APARTMENTS",
      location: "Ho Chi Minh City",
      address: "86 Hoang Minh Giam Street, District Binh Thanh, Ho Chi Minh City",
      description: lorem.generateParagraphs(2),
      floorArea: 138,
      facilities: {
        bathroom: 2,
        bedroom: 3,
        others: ["Pool", "Market", "School", "Hospital"],
      },
      price: 1800000000,
      isPopular: false,
      total: 100,
      capacity: 68,
      searchKey: ["Dist2","Dist7"]
    },
    {
      id: 3,
      title: "Penthouse Apartment",
      image:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/penthouse-apartment-01-450x300.jpg",
      rsType: "APARTMENTS",
      location: "Ho Chi Minh City",
      address: "Vin Park, District Binh Thanh, Ho Chi Minh City",
      description: lorem.generateParagraphs(2),
      floorArea: 160,
      facilities: {
        bathroom: 2,
        bedroom: 2,
        others: ["Pool", "Market", "School", "Hospital"],
      },
      price: 2000000000,
      isPopular: true,
      total: 80,
      capacity: 72,
      searchKey: ["Dist2","Dist7"]
    },
    {
      id: 4,
      title: "Modern Family Home",
      image:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/modern-family-house-01-450x300.jpg",
      rsType: "APARTMENTS",
      location: "Bình Dương",
      address: "Road 4 Song Hanh Street, District 2, Binh Duong City",
      description: lorem.generateParagraphs(2),
      floorArea: 120,
      facilities: {
        bathroom: 2,
        bedroom: 3,
        others: ["Pool", "Market", "School", "Hospital"],
      },
      price: 2650000000,
      isPopular: false,
      total: 100,
      capacity: 90,
      searchKey: ["BinhDuong"]
    },
    {
      id: 5,
      title: "East Sunlight Apartment",
      image:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
      rsType: "APARTMENTS",
      location: "Ha Noi City",
      address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
      description: lorem.generateParagraphs(2),
      floorArea: 87,
      facilities: {
        bathroom: 2,
        bedroom: 2,
        others: ["Pool", "Market", "School", "Hospital"],
      },
      price: 3800000000,
      isPopular: false,
      total: 100,
      capacity: 53,
      searchKey: ["HaNoi"]
    },
    {
      id: 6,
      title: "East Sunlight Apartment",
      image:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
      rsType: "APARTMENTS",
      location: "Ha Noi City",
      address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
      description: lorem.generateParagraphs(2),
      floorArea: 87,
      facilities: {
        bathroom: 2,
        bedroom: 3,
        others: ["Pool", "Market", "School", "Hospital"],
      },
      price: 8000000000,
      isPopular: false,
      total: 100,
      capacity: 36,
      searchKey: ["HaNoi"]
    },
    {
      id: 7,
      title: "One Bedroom Studio",
      image:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/list-half-map-image-2-450x300.jpg",
      rsType: "APARTMENTS",
      location: "Thu Duc City",
      address: "385 Highway 13th, District Tay Thanh, Thu Duc City",
      description: lorem.generateParagraphs(2),
      floorArea: 78,
      facilities: {
        bathroom: 2,
        bedroom: 3,
        others: ["Pool", "Market", "School", "Hospital"],
      },
      price: 3000000000,
      isPopular: false,
      total: 50,
      capacity: 24,
      searchKey: ["ThuDucCity"]
    },
    {
        id: 8,
        title: "East Sunlight Apartment",
        image:
          "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
        rsType: "APARTMENTS",
        location: "Ha Noi City",
        address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
        description: lorem.generateParagraphs(2),
        floorArea: 96,
        facilities: {
          bathroom: 1,
          bedroom: 2,
          others: ["Pool", "Market", "School", "Hospital"],
        },
        price: 3000000000,
        isPopular: true,
        total: 100,
        capacity: 86,
        searchKey: ["HaNoi"]
      },
      {
        id: 9,
        title: "South Side Garden House",
        image:
          "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/property-grid-img-1-450x300.jpg",
        rsType: "APARTMENTS",
        location: "Ho Chi Minh City",
        address: "86 Hoang Minh Giam Street, District Binh Thanh, Ho Chi Minh City",
        description: lorem.generateParagraphs(2),
        floorArea: 138,
        facilities: {
          bathroom: 2,
          bedroom: 3,
          others: ["Pool", "Market", "School", "Hospital"],
        },
        price: 1800000000,
        isPopular: false,
        total: 100,
        capacity: 68,
        searchKey: ["Dist2","Dist7","BinhThanh"]
      },
      {
        id: 10,
        title: "Penthouse Apartment",
        image:
          "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/penthouse-apartment-01-450x300.jpg",
        rsType: "APARTMENTS",
        location: "Ho Chi Minh City",
        address: "Vin Park, District Binh Thanh, Ho Chi Minh City",
        description: lorem.generateParagraphs(2),
        floorArea: 160,
        facilities: {
          bathroom: 2,
          bedroom: 2,
          others: ["Pool", "Market", "School", "Hospital"],
        },
        price: 2000000000,
        isPopular: true,
        total: 80,
        capacity: 72,
        searchKey: ["Dist2","Dist7","BinhThanh"]
      },
      {
        id: 11,
        title: "Modern Family Home",
        image:
          "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/modern-family-house-01-450x300.jpg",
        rsType: "APARTMENTS",
        location: "Ho Chi Minh City",
        address: "Road 4 Song Hanh Street, District 2, Ho Chi Minh City",
        description: lorem.generateParagraphs(2),
        floorArea: 120,
        facilities: {
          bathroom: 2,
          bedroom: 3,
          others: ["Pool", "Market", "School", "Hospital"],
        },
        price: 2650000000,
        isPopular: false,
        total: 100,
        capacity: 90,
        searchKey: ["Dist7"]
      },
      {
        id: 12,
        title: "East Sunlight Apartment",
        image:
          "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
        rsType: "APARTMENTS",
        location: "Ha Noi City",
        address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
        description: lorem.generateParagraphs(2),
        floorArea: 87,
        facilities: {
          bathroom: 2,
          bedroom: 2,
          others: ["Pool", "Market", "School", "Hospital"],
        },
        price: 3800000000,
        isPopular: false,
        total: 100,
        capacity: 53,
        searchKey: ["HaNoi"]
      },
      {
        id: 13,
        title: "East Sunlight Apartment",
        image:
          "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/east-sunglight-01-450x300.jpg",
        rsType: "APARTMENTS",
        location: "Ha Noi City",
        address: "123 Hoang Thai Tien Street, District Ho Hoan Kiem, Ha Noi City",
        description: lorem.generateParagraphs(2),
        floorArea: 87,
        facilities: {
          bathroom: 2,
          bedroom: 3,
          others: ["Pool", "Market", "School", "Hospital"],
        },
        price: 8000000000,
        isPopular: false,
        total: 100,
        capacity: 36,
        searchKey: ["HaNoi"]
      },
      {
        id: 14,
        title: "One Bedroom Studio",
        image:
          "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/list-half-map-image-2-450x300.jpg",
        rsType: "APARTMENTS",
        location: "Thu Duc City",
        address: "385 Highway 13th, District Tay Thanh, Thu Duc City",
        description: lorem.generateParagraphs(2),
        floorArea: 78,
        facilities: {
          bathroom: 2,
          bedroom: 3,
          others: ["Pool", "Market", "School", "Hospital"],
        },
        price: 3000000000,
        isPopular: false,
        total: 50,
        capacity: 24,
        searchKey: ["ThuDucCity"]
      },
];

const theBestProperties = [
    {
      title: "South Sun House",
      imgUrl:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/list-sidebar-img-1-460x300.jpg",
      gridSize: 7,
      addr: "Ward 12, District Phu Nhuan, Ho Chi Minh City",
      price: 6000000000,
      size: "260",
      bathRoom: 3,
      bedRoom: 5,
      nearPlaces: [
        "School",
        "Market",
        "Highway",
        "River",
        "Hospital",
        "IndustryZone",
      ],
      sold: 40,
    },
    {
      title: "Mountain Cabin",
      imgUrl:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/main-home-property-460x300.jpg",
      gridSize: 5,
      addr: "Ward 9, District 7, Ho Chi Minh City",
      price: 1890000000,
      size: "65",
      bathRoom: 2,
      bedRoom: 1,
      nearPlaces: ["School", "Highway", "River", "Hospital"],
      sold: 30,
    },
    {
      title: "Pine Forest Bungalow",
      imgUrl:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/list-sidebar-img-2-460x300.jpg",
      gridSize: 4,
      addr: "Ward Tan Kieng, District 2, Ho Chi Minh City",
      price: 1800000000,
      size: "57",
      bathRoom: 2,
      bedRoom: 1,
      nearPlaces: ["School", "Market", "Hospital", "IndustryZone"],
      sold: 86,
    },
    {
      title: "White Stylish Loft",
      imgUrl:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/list-half-map-image-3-460x300.jpg",
      gridSize: 4,
      addr: "Ward Hoa Binh, District Hoan Kiem, Ha Noi City",
      price: 3100000000,
      size: "89",
      bathRoom: 3,
      bedRoom: 2,
      nearPlaces: ["School", "Market", "Hospital", "IndustryZone"],
      sold: "SOLD OUT",
    },
    {
      title: "Avenue Apartment",
      imgUrl:
        "https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/list-sidebar-img-2-460x300.jpg",
      gridSize: 4,
      addr: "Ward Ton That, District Bach Mai, Ha Noi City",
      price: 2500000000,
      size: "76",
      bathRoom: 2,
      bedRoom: 2,
      nearPlaces: ["School", "Market", "Hospital", "Highway", "IndustryZone"],
      sold: 15,
    },
];

const carousels = [
    {
      title: "Thông tin dự án bất động sản CityLAnd",
      content: lorem.generateParagraphs(2),
    },
    {
      title: "Tin bất động sản tiềm năng đang được quan tâm nhiều",
      content: lorem.generateParagraphs(5),
    },
    {
      title: "Dưa án chung cư cao cấp mới quận 9",
      content: lorem.generateParagraphs(3),
    },
    {
      title: "View sông với hệ thống căn hộ - nhà phố CurlViewLand",
      content: lorem.generateParagraphs(4),
    },
    {
      title: "Mở bán block CTY1 dưa án tiềm năng Thủ Đức",
      content: lorem.generateParagraphs(2),
    },
];

export {
    RealEstates,
    theBestProperties,
    carousels
}