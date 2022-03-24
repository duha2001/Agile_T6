import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "NHÀ NƯỚC KHỞI TẠO",
      brand: "Tác giả: Mariana Mazzucato",
      color: "blue",
      description:
        "Cuốn sách đã vạch trần một cách toàn diện huyền thoại về một nhà nước uể oải, quan liêu so với một khu vực tư nhân năng động, sáng tạo. Trong một loạt các nghiên cứu từ các ngành công nghệ thông tin, công nghệ sinh học, công nghệ nano, Giáo sư Mariana Mazzucato cho thấy điều ngược lại là: khu vực tư nhân chỉ có được sự can đảm để đầu tư sau khi nhà nước khởi tạo đã đầu tư rủi ro cao trước đó. Trong một chương của cuốn sách được phân tích chuyên sâu, bà tiết lộ rằng mọi công nghệ tạo ra chiếc điện thoại iPhone thông minh đều được chính phủ tài trợ: Internet, GPS, màn hình cảm ứng và trợ lý Siri kích hoạt bằng giọng nói.",
        
      price: 180000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/48/21/aa/ae0f972ae6a8ed334a7101c96db77566.png",
      
    },
    {
      id: 2,
      title: "CÂY CAM NGỌT CỦA TÔI",
      brand: "Tác giả: José Mauro De Vasconcelos",
      description:
        "Mở đầu bằng những thanh âm trong sáng và kết thúc lắng lại trong những nốt trầm hoài niệm, Cây cam ngọt của tôi khiến ta nhận ra vẻ đẹp thực sự của cuộc sống đến từ những điều giản dị như bông hoa trắng của cái cây sau nhà, và rằng cuộc đời thật khốn khổ nếu thiếu đi lòng yêu thương và niềm trắc ẩn. Cuốn sách kinh điển này bởi thế không ngừng khiến trái tim người đọc khắp thế giới thổn thức, kể từ khi ra mắt lần đầu năm 1968 tại Brazil.",
      price: 75000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg",
    },
    {
      id: 3,
      title: "TÂM LÝ HỌC VỀ TIỀN",
      brand: "Tác giả: Morgan Housel",
      description:
        "Tiền bạc có ở khắp mọi nơi, nó ảnh hưởng đến tất cả chúng ta, và khiến phần lớn chúng ta bối rối. Mọi người nghĩ về nó theo những cách hơi khác nhau một chút. Nó mang lại những bài học có thể được áp dụng tới rất nhiều lĩnh vực trong cuộc sống, như rủi ro, sự tự tin, và hạnh phúc. Rất ít chủ đề cung cấp một lăng kính phóng to đầy quyền lực giúp giải thích vì sao mọi người lại hành xử theo cách họ làm hơn là về tiền bạc. Đó mới là một trong những chương trình hoành tráng nhất trên thế giới.",
      price: 109000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/83/23/b7/14a42ae4f66c9b8b298aaef4b9671442.jpg",
    },
    {
      id: 4 ,
      title: "RÈN LUYỆN TƯ DUY PHẢN BIỆN",
      brand: "Tác giả: Albert Rutherford",
      description:
        "Như bạn có thể thấy, chìa khóa để trở thành một người có tư duy phản biện tốt chính là sự tự nhận thức. Bạn cần phải đánh giá trung thực những điều trước đây bạn nghĩ là đúng, cũng như quá trình suy nghĩ đã dẫn bạn tới những kết luận đó. Nếu bạn không có những lý lẽ hợp lý, hoặc nếu suy nghĩ của bạn bị ảnh hưởng bởi những kinh nghiệm và cảm xúc, thì lúc đó hãy cân nhắc sử dụng tư duy phản biện! Bạn cần phải nhận ra được rằng con người, kể từ khi sinh ra, rất giỏi việc đưa ra những lý do lý giải cho những suy nghĩ khiếm khuyết của mình. Nếu bạn đang có những kết luận sai lệch này thì có một sự thật là những đức tin của bạn thường mâu thuẫn với nhau và đó thường là kết quả của thiên kiến xác nhận, nhưng nếu bạn biết điều này, thì bạn đã tiến gần hơn tới sự thật rồi!",
      price: 65000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/22/cb/a9/524a27dcd45e8a13ae6eecb3dfacba7c.jpg",
    },
    {
      id: 5 ,
      title: "ĐẦU TƯ TÀI CHÍNH",
      brand: "Tác giả: Bodie, Kane, Marcus",
      description:
        "NCuốn sách Đầu Tư Tài Chính ấn bản thứ mười này được sản xuất với mục đích là một cuốn sách giáo khoa cho các khoa học về phân tích đầu tư. Nguyên tắc của cuốn sách này vẫn là những lý thuyết dễ hiểu, sát sườn và cơ bản nhất quán nhất, nghĩa là đã loại bỏ đi rất nhiều chi tiết mang tính kỹ thuật và toán học không cần thiết.",
      price: 610000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/3f/1a/5d/23427d1566e10fb1d37eb297e353d592.jpg",
    },
    {
      id: 6 ,
      title: "FIBONACCI TRADING",
      brand: "Tác giả: Carolyn Boroden",
      description:
        "Dãy số Fibonacci và các thuộc tính của dãy số này đã trở nên phổ biến bởi nhà toán học người Ý nổi tiếng Leonardo de Pisa. Có khá nhiều trang web nói về dãy số này và các thuộc tính của nó. Chỉ cần nhập từ Fibonacci vào công cụ tìm kiếm yêu thích của bạn và bạn sẽ ngạc nhiên về sự giàu có của thông tin tồn tại về chủ đề này.",
      price: 299000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/f0/7b/a6/6774ff646ed8bb2ebd7f5b96ff00f117.jpg",
    },
    {
      id: 7 ,
      title: "PAYBACK TIME - NGÀY ĐÒI NỢ",
      brand: "Tác giả: Phil Town",
      description:
        "NGÀY ĐÒI NỢ – Payback Time là cuốn sách bán chạy nhất New York Time được tác giả Phil Town sử dụng những ngôn ngữ đơn giản, dễ hiểu và lồng ghép những ví dụ thực tế giúp cho người đọc tiếp cận với những kiến thức về đầu tư chứng khoán một cách dễ dàng. Bên cạnh đó với những kiến thức và trải nghiệm của bản thân, chúng tôi đã đưa cuốn sách gần gũi hơn với bạn đọc Việt Nam.",
      price: 290000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/64/cd/ba/c12f6fca49de9767c6c167c0030f7985.png",
    },
    {
      id: 8 ,
      title: "LINH HỒN CỦA TIỀN - The Soul Of Money",
      brand: "Tác giả: Lynne Twist",
      description:
        "Linh Hồn Của Tiền là một cuốn sách hấp dẫn, đưa ra một chủ đề thú vị: xem xét thái độ của chúng ta đối với tiền ― kiếm được, chi tiêu và cho đi ― có thể cung cấp cái nhìn sâu sắc đáng ngạc nhiên về cuộc sống, giá trị của chúng ta và bản chất của sự thịnh vượng.",
      price: 249000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/8c/fd/63/485c2e1febff320a244101c4f81cacc0.jpg",
    },
    {
      id: 9 ,
      title: "KIẾP NÀO TA CŨNG TÌM THẤY NHAU",
      brand: "Tác giả: Brian L. Weiss",
      description:
        "Kiếp nào ta cũng tìm thấy nhau là cuốn sách thứ ba của Brain L. Weiss – một nhà tâm thần học có tiếng. Trước đó ông đã viết hai cuốn sách: cuốn đầu tiên là Ám ảnh từ kiếp trước, cuốn sách mô tả câu chuyện có thật về một bệnh nhân trẻ tuổi cùng với những liệu pháp thôi miên về kiếp trước đã làm thay đổi cả cuộc đời tác giả lẫn cô ấy. Cuốn sách đã bán chạy trên toàn thế giới với hơn 2 triệu bản in và được dịch sang hơn 20 ngôn ngữ. Cuốn sách thứ hai Through  Time  into  Healing (Đi  qua  thời  gian  để chữa lành), mô tả những gì tác giả đã học được về tiềm năng chữa bệnh của liệu pháp hồi quy tiền kiếp. Trong cuốn sách đều là những câu chuyện người thật việc thật. Nhưng  câu  chuyện  hấp  dẫn  nhất lại  nằm  trong cuốn sách thứ ba.",
      price: 69000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/c9/7c/04/67db9bf2590d75f978e68f9dcfe0db9a.jpg",
    },
    {
      id: 10 ,
      title: "CHIẾN BINH CẦU VỒNG (Tái bản 2020)",
      brand: "Tác giả: Andrea Hirata",
      description:
        "Chiến binh Cầu vồng có cả tình yêu trong sáng tuổi học trò lẫn những trò đùa tinh quái, cả nước mắt lẫn tiếng cười – một bức tranh chân thực về hố sâu ngăn cách giàu nghèo, một tác phẩm văn học cảm động truyền tải sâu sắc nhất ý nghĩa đích thực của việc làm thầy, việc làm trò và việc học.",
      price: 86000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/a1/ef/4f/0b39e40dca3827604c8bc4e867cc9423.jpg",
    },


  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
