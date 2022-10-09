import { faUserPen, faAddressCard, faCarSide } from "@fortawesome/free-solid-svg-icons";

export const TEXT_FIELD = {
  FULLNAME: "Họ và Tên",
  PHONE: "Số điện thoại",
  ADDRESS: "Địa chỉ",
  COURSE: "Khóa học cần tư vấn",
};

export const OPTION_COURSES = [
  {
    id: 0,
    name: 'Thi Bằng Lái Xe A1',
    value: 'A1'
  },
  {
    id: 1,
    name: 'Học Lái Xe B1',
    value: 'B1'
  },
  {
    id: 2,
    name: 'Học Lái Xe B2',
    value: 'B2'
  },
  {
    id: 3,
    name: 'Học Lái Xe Tải Hạng C',
    value: 'C'
  },
  {
    id: 4,
    name: 'Học Lái Xe D',
    value: 'D'
  },
  {
    id: 5,
    name: 'Học Lái Xe E',
    value: 'E'
  },
  {
    id: 6,
    name: 'Bổ Túc Lái Xe',
    value: 'F'
  },
];

export const GIFT_CONTENT = [
  {
    title: 'Giờ học linh động',
    content: 'Học viên có thể chủ động lựa chọn giờ học lý thuyết và thực hành linh động theo nhu cầu cá nhân.'
  },
  {
    title: 'Ưu đãi cực sốc',
    content: 'Miễn phí giờ tập trên sân, phí chụp hình, đặc biệt là phần mềm học lý thuyết tiện ích.'
  },
  {
    title: 'Trang thiết bị hiện đại',
    content: 'Chúng tôi có hệ thống sân bãi rộng rãi cùng với phòng học hiện đại, bạn được thực hành trên xe đời mới nhất giúp kỹ năng lái xe của bạn được nâng cao.'
  },
  {
    title: 'Chi phí hợp lí',
    content: 'Cam kết không phát sinh chi phí đến khi nhận bằng.Ngoài ra, hỗ trợ thanh toán với nhiều hình thức đa dạng giúp học viên có thể chia nhỏ học phí.'
  },
]

export const IMAGE_PRODUCT = [
  1,2,3,4
]

export const PRODUCTS = [
  {
    type: 'A1',
    title: 'Thi Bằng lái xe A1',
    image: '',
    content: [
      {
        name: 'Độ tuổi',
        description: '> 18 tuổi',
      },
      {
        name: 'Thời gian học',
        description: '1 buổi lý thuyết và thực hành có người hướng dẫn',
      },
      {
        name: 'Loại xe',
        description: 'xe mô tô 2 bánh có dung tích xi lanh dưới 175cm3 hoặc mô tô 3 bánh dành riêng cho người khuyết tật.',
      },
    ]
  },
  {
    type: 'B1',
    title: 'Bằng lái ô tô B1',
    image: '',
    content: [
      {
        name: 'Độ tuổi',
        description: '> 18 tuổi',
      },
      {
        name: 'Thời gian học',
        description: '3.5 - 7 tháng',
      },
      {
        name: 'Loại xe',
        description: 'Ô tô con số tự động đến 9 chỗ ngồi, xe tải tự động < 3.5 tấn.',
      },
      {
        name: 'Đối tượng',
        description: 'Lái xe gia đình số tự động, không có kinh doanh.',
      }
    ]
  },
  {
    type: 'B2',
    title: 'Bằng lái ô tô B2',
    image: '',
    content: [
      {
        name: 'Độ tuổi',
        description: '> 18 tuổi',
      },
      {
        name: 'Thời gian học',
        description: '3.5 - 7 tháng',
      },
      {
        name: 'Loại xe',
        description: 'Ô tô con số sàn và số tự động đến 9 chỗ ngồi, xe tải < 3.5 tấn.',
      },
      {
        name: 'Đối tượng',
        description: 'Lái xe gia đình, lái xe kinh doanh.',
      }
    ]
  },
  {
    type: 'C',
    title: 'Bằng lái ô tô C',
    image: '',
    content: [
      {
        name: 'Độ tuổi',
        description: '> 21 tuổi',
      },
      {
        name: 'Thời gian học',
        description: '7 - 11 tháng',
      },
      {
        name: 'Loại xe',
        description: 'Xe tải > 3.5 tấn, các loại xe hạng B1, B2.',
      },
      {
        name: 'Đối tượng',
        description: 'Lái xe tải, xe khách.',
      }
    ]
  },
  {
    type: 'D',
    title: 'Bằng lái D',
    image: '',
    content: [
      {
        name: 'Độ tuổi',
        description: '> 21 tuổi',
      },
      {
        name: 'Thời gian học',
        description: '7 - 11 tháng',
      },
      {
        name: 'Loại xe',
        description: '10 đến 30 chỗ ngồi.',
      },
      {
        name: 'Đối tượng',
        description: 'Tài xế xe khách, xe buýt.',
      }
    ]
  },
  {
    type: 'E',
    title: 'Bằng lái E',
    image: '',
    content: [
      {
        name: 'Độ tuổi',
        description: '> 26 tuổi',
      },
      {
        name: 'Thời gian học',
        description: '7 - 11 tháng',
      },
      {
        name: 'Loại xe',
        description: 'Lớn hơn 30 chỗ ngồi, xe đầu kéo.',
      },
      {
        name: 'Đối tượng',
        description: 'Tài xế xe có trọng tải lớn.',
      }
    ]
  },
  {
    type: 'F',
    title: 'Bổ túc tay lái',
    image: '',
    content: [
      {
        name: 'Độ tuổi',
        description: '> 18 tuổi',
      },
      {
        name: 'Thời gian học',
        description: '7 - 11 tháng',
      },
      {
        name: 'Loại xe',
        description: 'tất cả.',
      },
      {
        name: 'Đối tượng',
        description: 'người yếu tay lái.',
      }
    ]
  },
]

export const SCHOOL_CAROUSEL = [
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/MAelQcqhl7k?start=15',
    path: `${process.env.PUBLIC_URL}/images/image-video.png`
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/2jf9aH9q7pg?start=9',
    path: `${process.env.PUBLIC_URL}/images/image-moto.png`
  },
  {
    type: 'image',
    path: `${process.env.PUBLIC_URL}/images/school-image-1.jpg`
  },
  {
    type: 'image',
    path: `${process.env.PUBLIC_URL}/images/school-image-2.jpg`
  },
  {
    type: 'image',
    path: `${process.env.PUBLIC_URL}/images/school-image-3.jpg`
  }
]

export const COMMENTS = [
  {
    name: 'Anh Trần Văn Phúc',
    content: 'Mừng khi nhận được chứng chỉ bằng lái hạng B2 tại nhà trường. Cảm ơn sự nhiệt tình từ các giáo viên đã đồng hành trong suốt thời gian thực hành tại Trường.'
  },
  {
    name: 'Anh Nguyễn Thanh Phong',
    content: 'Đã nhận được bằng Hạng C tại nhà trường Tiến Thành. Chất lượng thực hành tại nhà trường khá tốt và mô hình khá thực tế. Chân thành cảm ơn nhà Trường rất nhiều!'
  },
  {
    name: 'Chị Hoàng Trang',
    content: 'Tôi đã học ở đây và tôi rất hài lòng về chất lượng đào tạo của trung tâm. Tôi sẽ giới thiệu bạn bè và người thân đến đây để học.'
  }
]

export const TIMELINE_COURSE = [
  {
    icon: faUserPen,
    title: 'Đăng ký học lái xe',
    content: 'Học viên đăng ký trực tuyến trên website / zalo / facebook hoặc liên hệ văn phòng tuyển sinh.'
  },
  {
    icon: faCarSide,
    title: 'Quá trình học lái',
    content: 'Học viên được xét duyệt hồ sơ thành công sẽ được nhận thẻ học lái chính thức. Quá trình diễn ra từ 3-6 tháng tuỳ hạng.'
  },
  {
    icon: faAddressCard,
    title: 'Thi và cấp bằng học viên',
    content: 'Học viên được hướng dẫn đăng ký khám sức khoẻ và tiến hành thi tốt nghiệp tại trung tâm, sau đó thi sát hạch theo địa điểm quy định. Bằng lái sẽ gửi nhanh chóng từ 2-3 tuần (từ thời điểm thi).'
  },
]

export const NOTIFICATION_SUCCESS = {
  type: 'success',
  content: 'Bạn đã đăng ký thành công.'
}

export const NOTIFICATION_ERROR = {
  type: 'error',
  content: 'Bạn đã đăng ký thất bại.'
}
export const GET_MONTH = new Date().getMonth() + 1;

export const PHONE_NUMBER = [`0862 376 568`, `0977 346 168`]