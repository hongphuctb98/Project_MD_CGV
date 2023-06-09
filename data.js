//movie list

let movielist = [
  {
    movieId: 1,
    nameMovie: "Fast and FuriousX",
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/7/0/700x1000-fastx_1.jpg",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 200000,
  },
  {
    movieId: 2,
    nameMovie: "VÂY HÃM: KHÔNG LỐI THOÁT",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 140000,
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/l/a/launching_poster-art-4x5.jpg",
  },
  {
    movieId: 3,
    nameMovie: "NGƯỜI NHỆN: DU HÀNH VŨ TRỤ NHỆN",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 170000,
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/r/s/rsz_spiderverse2_poster_4.jpg",
  },
  {
    movieId: 4,
    nameMovie:
      "PHIM ĐIỆN ẢNH DORAEMON: NOBITA VÀ VÙNG ĐẤT LÝ TƯỞNG TRÊN BẦU TRỜI",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 160000,

    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/m/a/main_poster_-_dmmovie2023.jpg",
  },
  {
    movieId: 5,
    nameMovie: "HOON PAYON: BÙA HÌNH NHÂN",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 140000,
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/p/o/poster_bhn_7-_kc_02.06.2023_1_.jpg",
  },
  {
    movieId: 6,
    nameMovie: "NÀNG TIÊN CÁ",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 160000,
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/l/t/ltmer_007c_g_vie-vn_4x5_.jpg",
  },
  {
    movieId: 7,
    nameMovie: "ÔNG KẸ",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 120000,
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/b/o/bogym_005b_g_vie-vn_4x5__1__1.jpg",
  },
  {
    movieId: 8,
    nameMovie: "NƠI TA GẶP NHAU",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 110000,
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/l/o/loser_lover__n_i_ta_g_p_nhau__payoff_poster__02.06.23.jpg",
  },
  {
    movieId: 9,
    nameMovie: "LẬT MẶT 6: TẤM VÉ ĐỊNH MỆNH",
    director: "Louis Leterrier",
    actor: ["Vin Diesel", "Jason Momoa", "Brie Larson"],
    type: ["Hành Động", "Tội phạm"],
    premiere: "19/5/2022",
    time: "2h20",
    rated: "T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI TRỞ LÊN (16+)",
    price: 130000,
    imgLink:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/l/m/lm6_2x3_layout.jpg",
  },
];
