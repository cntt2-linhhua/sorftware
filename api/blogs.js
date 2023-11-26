// images
import blogImg1 from "/public/images/blog/img7.jpg";
import blogImg2 from "/public/images/blog/img-8.jpg";
import blogImg3 from "/public/images/blog/img-9.jpg";

import blogAvaterImg1 from "/public/images/blog/blog-avater/img-1.jpg";
import blogAvaterImg2 from "/public/images/blog/blog-avater/img-2.jpg";
import blogAvaterImg3 from "/public/images/blog/blog-avater/img-3.jpg";

import blogSingleImg1 from "/public/images/blog/img4.jpg";
import blogSingleImg2 from "/public/images/blog/img5.jpg";
import blogSingleImg3 from "/public/images/blog/img6.jpg";



const blogs = [
    {
        id: '1',
        title: '10 mẹo hàng đầu cho thiết kế nội thất nhà bếp của bạn',
        slug:'10-meo-hang-dau-cho-thiet-ke-noi-thap-nha-bep-cua-ban',
        screens: blogImg1,
        description: 'Căn nhà ở dù có thiết kế ở mức cơ bản hay đầy đủ tiện nghi thì khu vực không thể thiếu đó chính là phòng bếp. Bởi phòng bếp là nơi mà mọi thành viên trong gia đình cùng nhau gặp mặt, quây quần và ăn tối.',
        author: 'Uyên Linh',
        authorTitle:'ADMIN',
        authorImg:blogAvaterImg1,
        create_at: '16.11.2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Quy tắc tỷ lệ vàng cho bản phác thảo 2D tốt nhất',
        slug:'quy-tac-ty-le-vang-cho-ban-phac-thao-2D-tot-nhat',
        screens: blogImg2,
        description: 'Một hiệu ứng tổng thể làm sống dậy và làm gián đoạn chủ nghĩa lập thể vốn đặt hình thái của hệ thống phương Tây ngoài những khuôn mẫu của thiết kế hiện đại.',
        author: 'Khánh Long',
        authorTitle:'Quản lý',
        authorImg:blogAvaterImg2,
        create_at: '16.11.2023',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
        sClass:'s2',
    },
    {
        id: '3',
        title: 'Sử dụng màu Pastel & vật liệu tự nhiên',
        slug:'Su-dung-mau-pastel-vat-lieu-tu-nhien',
        screens: blogImg3,
        description: 'Màu Pastel đang là một trong những xu hướng thiết kế thịnh hành trong năm nay, trải dài từ các sắc xanh trung tính đến dải màu hồng ngọt ngào đang ngày càng lên ngôi. Đặc biệt là trong thiết kế đồ họa, nội thất, bao bì, nhãn hiệu, nhiếp ảnh, UI,',
        author: 'Hương Giang',
        authorTitle:'Khách hàng',
        authorImg:blogAvaterImg3,
        create_at: '16.11.2023',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
        sClass:'s2',
    },
];
export default blogs;