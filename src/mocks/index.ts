// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/reading/list', 'get', {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  data: {
    categoryStoreModule: {
      categoryId: 'all',
      categoryInfo: {
        CategoryId: 'all',
        totalCount: 20,
        title: '总榜',
        desc: '200本书',
        ranklist: 1,
        ranklistCover: {
          tinycode:
            'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.all.tinycode.8A3kIWv1MX.png',
          chart_title:
            'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_title.JPnYFfuPbm.png',
          chart_detail_title:
            'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_detail_title.sMh65ixe9l.png',
          chart_detail_title_dark:
            'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_detail_title_dark.2ky4HSJU3V.png',
          chart_share_title:
            'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.all.chart_share_title.hqPEOLVffW.png',
          chart_share_logo:
            'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.all.chart_share_logo.8DDUxHqsiv.png',
          chart_book_detial_icon:
            'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.all.chart_book_detial_icon.6tpmPfmz6F.png',
          chart_tag:
            'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_tag.10XdZh6eUV.png',
          eink_chart_title:
            'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.eink_chart_title.JVKRmQ5WCg.png',
          chart_title_main:
            'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_title_main.5y2PAdJQdr.png',
          chart_detail_title_main:
            'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_detail_title_main.VC1GJeqgCf.png',
          chart_detail_title_dark_main:
            'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_detail_title_dark_main.r45lFTyRNo.png',
          chart_background_color_1: '#34A7FF',
          chart_background_color_2: '#39CFFF',
          chart_title_height: 96,
          chart_title_width: 471,
          desc: '微信读书用户最喜爱的出版书'
        },
        category: [
          {
            CategoryId: 300000,
            totalCount: 90,
            title: '文学'
          },
          {
            CategoryId: 100000,
            totalCount: 37,
            title: '精品小说'
          },
          {
            CategoryId: 200000,
            totalCount: 23,
            title: '历史'
          },
          {
            CategoryId: 2400000,
            totalCount: 14,
            title: '漫画'
          },
          {
            CategoryId: 500000,
            totalCount: 10,
            title: '人物传记'
          },
          {
            CategoryId: 900000,
            totalCount: 9,
            title: '社会文化'
          },
          {
            CategoryId: 800000,
            totalCount: 7,
            title: '心理'
          },
          {
            CategoryId: 1300000,
            totalCount: 6,
            title: '童书'
          },
          {
            CategoryId: 1200000,
            totalCount: 6,
            title: '政治军事'
          },
          {
            CategoryId: 1100000,
            totalCount: 6,
            title: '经济理财'
          },
          {
            CategoryId: 600000,
            totalCount: 5,
            title: '哲学宗教'
          },
          {
            CategoryId: 1000000,
            totalCount: 5,
            title: '个人成长'
          },
          {
            CategoryId: 1500000,
            totalCount: 2,
            title: '科学技术'
          },
          {
            CategoryId: 2100000,
            totalCount: 1,
            title: '医学健康'
          },
          {
            CategoryId: 400000,
            totalCount: 1,
            title: '艺术'
          }
        ],
        sublist: []
      },
      isFetching: false,
      isFetchError: false,
      hasMore: true,
      categoryBookList: [
        {
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 1,
          bookInfo: {
            newRatingDetail: {
              title: '神作'
            },
            free: 0,
            ispub: 1,
            price: 69.99,
            extra_type: 5,
            category: '精品小说-科幻小说',
            lastChapterIdx: 86,
            paperBook: {
              skuId: '11757834'
            },
            bookId: '695233',
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F80\u002Fyuewen_695233\u002Fs_yuewen_6952331677562148.jpg',
            originalPrice: 0,
            hideUpdateTime: false,
            publishTime: '2018-12-01 00:00:00',
            hasLecture: 1,
            blockSaveImg: 0,
            payType: 4097,
            centPrice: 6999,
            mcardDiscount: 0,
            categories: [
              {
                categoryId: 100000,
                subCategoryId: 100004,
                categoryType: 0,
                title: '精品小说-科幻小说'
              }
            ],
            copyrightChapterUids: [2],
            author: '刘慈欣',
            finished: 1,
            listenCount: 98,
            newRatingCount: 278201,
            format: 'epub',
            bookStatus: 1,
            cpid: 14792401,
            webBookControl: 0,
            version: 1571386342,
            intro:
              '每个人的书架上都该有套《三体》！关于宇宙最狂野的想象！就是它！征服世界的中国科幻神作！包揽九项世界顶级科幻大奖！出版16个语种，横扫30国读者！奥巴马、雷军、马化腾、周鸿袆、潘石屹、扎克伯格……强推！刘慈欣获得2018年度克拉克想象力贡献社会奖！刘慈欣是中国科幻小说的最主要代表作家，亚洲首位世界科幻大奖“雨果奖”得主，被誉为中国科幻的领军人物。',
            soldout: 0,
            lPushName: '刘慈欣经典科幻代表作',
            language: 'zh',
            newRating: 931,
            title: '三体（全集）',
            type: 0
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 14003,
          searchCount: 0,
          isBookInMyShelf: false
        },
        {
          bookInfo: {
            bookId: '3300003224',
            format: 'epub',
            bookStatus: 1,
            payType: 1048577,
            ispub: 1,
            webBookControl: 0,
            originalPrice: 0,
            centPrice: 2160,
            cpid: 16796673,
            hideUpdateTime: false,
            version: 1690214981,
            categories: [
              {
                categoryId: 200000,
                subCategoryId: 200004,
                categoryType: 0,
                title: '历史-历史小说'
              }
            ],
            authorVids: '282476580',
            price: 21.6,
            soldout: 0,
            publishTime: '2022-10-01 00:00:00',
            newRatingCount: 191207,
            newRatingDetail: {
              title: '神作'
            },
            finished: 1,
            category: '历史-历史小说',
            hasLecture: 1,
            listenCount: 19,
            title: '长安的荔枝',
            type: 0,
            mcardDiscount: 0,
            lastChapterIdx: 10,
            paperBook: {
              skuId: ''
            },
            language: 'zh-CN',
            author: '马伯庸',
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FcpPlatform_dbb14284a55f1e733b60202b0777255d\u002Fs_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg',
            intro:
              '同名实体书新鲜上市，马伯庸历史短小说“见微”系列神作！\n大唐天宝十四年，长安城小吏李善德突然接到一个任务：要在贵妃诞日之前，从岭南运来新鲜荔枝。荔枝保鲜期只有三天，而岭南距长安五千余里，山水迢迢，这是个不可能完成的任务。为了家人，李善德只得放手一搏……\n古装版社畜求生记，帝国夹缝中的小人物史诗。',
            extra_type: 5,
            blockSaveImg: 0,
            free: 0,
            copyrightChapterUids: [11],
            newRating: 940
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 5648,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 2,
          isBookInMyShelf: false
        },
        {
          searchIdx: 3,
          bookInfo: {
            version: 1996582047,
            price: 187.6,
            bookStatus: 1,
            finished: 1,
            ispub: 1,
            paperBook: {
              skuId: '10850277'
            },
            blockSaveImg: 0,
            copyrightChapterUids: [2],
            title: '明朝那些事儿（全集）',
            soldout: 0,
            free: 0,
            publishTime: '2011-12-01 00:00:00',
            category: '历史-中国古代',
            lPushName: '一本书让你爱上历史。',
            listenCount: 2378,
            intro:
              '    《明朝那些事儿》主要讲述的是从1344年到1644年这三百年间关于明朝的一些故事。以史料为基础，以年代和具体人物为主线，并加入了小说的笔法，语言幽默风趣。对明朝十七帝和其他王公权贵和小人物的命运进行全景展示，尤其对官场政治、战争、帝王心术着墨最多，并加入对当时政治经济制度、人伦道德的演义。它以一种网络语言向读者娓娓道出明朝三百多年的历史故事、人物。其中原本在历史中陌生、模糊的历史人物在书中一个个变得鲜活起来。《明朝那些事儿》为我们解读历史中的另一面，让历史变成一部活生生的生活故事。',
            extra_type: 5,
            hasLecture: 1,
            author: '当年明月',
            type: 0,
            payType: 4097,
            categories: [
              {
                categoryId: 200000,
                subCategoryId: 200007,
                categoryType: 0,
                title: '历史-中国古代'
              },
              {
                subCategoryId: 200003,
                categoryType: 0,
                title: '历史-历史读物',
                categoryId: 200000
              }
            ],
            cpid: -60041,
            language: 'zh',
            newRatingCount: 210915,
            centPrice: 18760,
            hideUpdateTime: false,
            bookId: '822995',
            originalPrice: 0,
            webBookControl: 0,
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F97\u002Fyuewen_822995\u002Fs_yuewen_8229951695023669.jpg',
            format: 'epub',
            mcardDiscount: 0,
            lastChapterIdx: 377,
            newRating: 922,
            newRatingDetail: {
              title: '神作'
            }
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 47004,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          isBookInMyShelf: false
        },
        {
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 2324,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 4,
          bookInfo: {
            lastChapterIdx: 12,
            copyrightChapterUids: [13],
            webBookControl: 0,
            bookId: '834464',
            originalPrice: 0,
            payType: 1048577,
            extra_type: 5,
            hasLecture: 1,
            cover:
              'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F464\u002F834464\u002Fs_834464.jpg',
            free: 0,
            newRatingCount: 178982,
            newRating: 919,
            title: '活着',
            format: 'epub',
            soldout: 0,
            ispub: 1,
            listenCount: 36,
            newRatingDetail: {
              title: '神作'
            },
            type: 0,
            mcardDiscount: 0,
            categories: [
              {
                categoryId: 300000,
                subCategoryId: 300004,
                categoryType: 0,
                title: '文学-经典作品'
              }
            ],
            language: 'zh-CN',
            hideUpdateTime: false,
            centPrice: 2999,
            cpid: 6871225,
            category: '文学-经典作品',
            author: '余华',
            intro:
              '同名电影《活着》由张艺谋执导，葛优、巩俐两大影帝影后主演，1994年该片在第47届戛纳电影节上斩获评委会大奖、最佳男演员奖，同时还荣获了英国电影学院奖最佳外语片等重要奖项。由《活着》改编的电视剧《富贵》2005年开播，在第13届上海电视节上，摘得“白玉兰”奖——电视剧评委会大奖。《活着》是一篇读起来让人感到沉重的小说。那种只有阖上书本才会感到的隐隐不快，并不是由作品提供的故事的残酷造成的。毕竟，作品中的亡家，丧妻，失女以及白发人送黑发人这样的故事并不具备轰动性。同时，余华也不是一个具有很强煽动能力的作家，实际上，渲染这样的表达方式是余华一直所不屑的。余华所崇尚的只是叙述，用一种近乎冰冷的笔调娓娓叙说一些其实并不正常的故事。而所有的情绪就是在这种娓娓叙说的过程中中悄悄侵入读者的阅读。这样说来，《活着》以一种渗透的表现手法完成了一次对生命意义的哲学追问。本书荣获意大利格林扎纳·卡佛文学奖（1998年）、台湾《中国时报》十本好书奖（1994年），香港“博益”15本好书奖（1990年），中华图书特殊贡献奖（2005年），法国国际信使外国小说奖（2008年）；并入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”；入选中国百位批评家和文学编辑评选的“九十年代最有影响的10部作品”，余华本人则于2004年荣获法兰西文学和艺术骑士勋章。',
            publishTime: '2012-08-01 00:00:00',
            blockSaveImg: 0,
            version: 2055529619,
            price: 29.99,
            bookStatus: 1,
            finished: 1,
            paperBook: {
              skuId: '11090643'
            }
          },
          isBookInMyShelf: false
        },
        {
          riseCount: 0,
          searchIdx: 5,
          bookInfo: {
            mcardDiscount: 0,
            intro:
              '茅盾文学奖皇冠上的明珠。激励亿万读者的不朽经典。深受老师和学生喜爱的新课标必读书。路遥获得了这个世界里数以亿计的普通人的尊敬和崇拜，他沟通了这个世界的人们和地球人类的情感。',
            free: 0,
            lastChapterIdx: 175,
            copyrightChapterUids: [169],
            soldout: 0,
            bookStatus: 1,
            cpid: 24367662,
            categories: [
              {
                subCategoryId: 300004,
                categoryType: 0,
                title: '文学-经典作品',
                categoryId: 300000
              }
            ],
            language: 'zh-CN',
            bookId: '24965201',
            price: 89.99,
            blockSaveImg: 0,
            hideUpdateTime: false,
            webBookControl: 0,
            centPrice: 8999,
            listenCount: 173,
            finished: 1,
            paperBook: {
              skuId: ''
            },
            newRatingCount: 115667,
            type: 0,
            payType: 1048577,
            publishTime: '2017-05-31 00:00:00',
            newRatingDetail: {
              title: '神作'
            },
            originalPrice: 0,
            ispub: 1,
            format: 'epub',
            extra_type: 1,
            category: '文学-经典作品',
            hasLecture: 1,
            title: '平凡的世界（全三册）',
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F61\u002Fyuewen_24965201\u002Fs_yuewen_249652011682413401.jpg',
            newRating: 930,
            author: '路遥',
            version: 1272358881
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 5354,
          searchCount: 0,
          type: 0,
          bestMark: '',
          isBookInMyShelf: false
        },
        {
          riseCount: 0,
          searchIdx: 6,
          bookInfo: {
            soldout: 0,
            mcardDiscount: 0,
            lPushName: '为你，千千万万遍。',
            paperBook: {
              skuId: '13353374'
            },
            language: 'zh',
            newRatingDetail: {
              title: '神作'
            },
            intro:
              '12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？',
            category: '文学-外国文学',
            copyrightChapterUids: [29],
            version: 482707295,
            originalPrice: 0,
            finished: 1,
            lastChapterIdx: 28,
            title: '追风筝的人',
            translator: '李继宏',
            price: 23,
            centPrice: 2300,
            hideUpdateTime: false,
            newRatingCount: 133224,
            categories: [
              {
                categoryId: 300000,
                subCategoryId: 300013,
                categoryType: 0,
                title: '文学-外国文学'
              }
            ],
            author: '卡勒德·胡赛尼',
            cover:
              'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F339\u002F546339\u002Fs_546339.jpg',
            type: 0,
            bookStatus: 1,
            ispub: 1,
            webBookControl: 0,
            hasLecture: 1,
            bookId: '546339',
            format: 'epub',
            payType: 4097,
            free: 0,
            extra_type: 5,
            cpid: -1361120,
            publishTime: '2006-05-01 00:00:00',
            listenCount: 23,
            blockSaveImg: 0,
            newRating: 918
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 2340,
          searchCount: 0,
          type: 0,
          bestMark: '',
          isBookInMyShelf: false
        },
        {
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 7,
          bookInfo: {
            translator: '谭春霞,焦国林',
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F83\u002FYueWen_718151\u002Fs_YueWen_718151.jpg',
            version: 2009966153,
            format: 'epub',
            categories: [
              {
                categoryId: 200000,
                subCategoryId: 200007,
                categoryType: 0,
                title: '历史-中国古代'
              }
            ],
            bookId: '718151',
            title: '南京大屠杀',
            author: '张纯如',
            newRatingDetail: {
              title: '神作'
            },
            hasLecture: 1,
            paperBook: {
              skuId: '11735751'
            },
            newRatingCount: 41481,
            price: 29.4,
            soldout: 0,
            ispub: 1,
            type: 0,
            mcardDiscount: 0,
            listenCount: 6,
            newRating: 970,
            copyrightChapterUids: [28],
            free: 0,
            cpid: 4525313,
            category: '历史-中国古代',
            intro:
              '1937年12月，日军攻入中国古都南京。几周之内，30多万中国平民和士兵遭到有计划地强暴、折磨和屠杀——死亡人数超过广岛和长崎原子弹爆炸遇难人数的总和。 张纯如不仅在书中详述了日军疯狂暴行的细节，而且分析了在军国主义文化背景下成长起来的日本士兵对人类生命的漠视。张纯如对南京大屠杀的幸存者进行了大量采访，并首次发掘了许多重要文献。全书先是从日本士兵、军官为什么完全脱离了人类基本的行为规范，日本学校和教科书从心理层面向学生灌输对中国人民的仇恨和蔑视，以及高度军事化的教育体制等多个方面阐述了南京大屠杀发生的根源性原因。',
            centPrice: 2940,
            publishTime: '2013-01-01 00:00:00',
            lPushName: '一部令国人流泪的书',
            lastChapterIdx: 25,
            blockSaveImg: 0,
            hideUpdateTime: false,
            webBookControl: 0,
            originalPrice: 0,
            bookStatus: 1,
            payType: 4097,
            finished: 1,
            extra_type: 5,
            language: 'zh-CN'
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 1386,
          isBookInMyShelf: false
        },
        {
          bookInfo: {
            type: 0,
            cpid: 13583905,
            publishTime: '2017-02-01 00:00:00',
            copyrightChapterUids: [35],
            blockSaveImg: 0,
            translator: '李育超',
            free: 0,
            hideUpdateTime: false,
            newRating: 919,
            categories: [
              {
                title: '精品小说-影视原著',
                categoryId: 100000,
                subCategoryId: 100012,
                categoryType: 0
              },
              {
                categoryId: 300000,
                subCategoryId: 300014,
                categoryType: 0,
                title: '文学-世界名著'
              }
            ],
            newRatingDetail: {
              title: '神作'
            },
            bookId: '853116',
            title: '杀死一只知更鸟（同名电影原著）',
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F32\u002FYueWen_853116\u002Fs_YueWen_853116.jpg',
            mcardDiscount: 0,
            webBookControl: 0,
            hasLecture: 1,
            lPushName: '愿你克服偏见 愿你一往无前',
            newRatingCount: 93130,
            originalPrice: 0,
            soldout: 0,
            finished: 1,
            extra_type: 5,
            category: '精品小说-影视原著',
            format: 'epub',
            centPrice: 5599,
            paperBook: {
              skuId: '12037351'
            },
            language: 'zh-CN',
            author: '哈珀·李',
            payType: 4097,
            ispub: 1,
            lastChapterIdx: 36,
            version: 357947648,
            price: 55.99,
            bookStatus: 1,
            intro:
              '《杀死一只知更鸟》的故事发生在大萧条时期美国南方一个静谧的小镇，几桩离奇的疑案彻底打破了几个孩子平静的生活：事件的真凶，怪人的谜底，传言背后的真相……在父亲的指引下，他们在迷雾中寻找真知，在磨难中历练风度，在不公平中积累正气，经历了暴风骤雨般的成长，也感受了人间的温暖与真情。',
            listenCount: 53
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 4151,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 8,
          isBookInMyShelf: false
        },
        {
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 9,
          bookInfo: {
            intro:
              '同名电视剧由张嘉译、何冰、秦海璐、刘佩琪等人主演。当代文学里程碑之作，茅盾文学奖获奖作品。一部记录“民族的秘史”的长卷，一部渭河平原50年变迁的雄奇史诗，一轴中国农村斑斓多彩，触目惊心的长幅画卷。主人公白嘉轩六娶六丧，神秘的序曲预示着不祥。一个家族两代子孙，为争夺白鹿原的统治代代争斗不已，上演了一幕幕惊心动魄的活剧：巧取风水地，恶施美人计，孝子为匪，亲翁杀媳，兄弟相煎，情人反目……大革命、日寇入侵、三年内战，白鹿原翻云覆雨，王旗变幻，家仇国恨交错缠结，冤冤相报代代不已。',
            finished: 1,
            free: 0,
            category: '文学-经典作品',
            categories: [
              {
                categoryId: 300000,
                subCategoryId: 300004,
                categoryType: 0,
                title: '文学-经典作品'
              }
            ],
            bookId: '812443',
            format: 'epub',
            payType: 4097,
            lPushName: '《白鹿原》原著 茅奖获奖佳作',
            copyrightChapterUids: [47],
            hideUpdateTime: false,
            cpid: -2571052,
            blockSaveImg: 0,
            soldout: 0,
            centPrice: 1200,
            mcardDiscount: 0,
            title: '白鹿原',
            type: 0,
            listenCount: 27,
            webBookControl: 0,
            newRatingCount: 106070,
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F78\u002FYueWen_812443\u002Fs_YueWen_812443.jpg',
            version: 168841035,
            originalPrice: 0,
            publishTime: '1993-06-01 00:00:00',
            hasLecture: 1,
            newRatingDetail: {
              title: '神作'
            },
            price: 12,
            extra_type: 5,
            language: 'zh-CN',
            lastChapterIdx: 40,
            paperBook: {
              skuId: '12128057'
            },
            newRating: 911,
            author: '陈忠实',
            bookStatus: 1,
            ispub: 1
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 3321,
          searchCount: 0,
          isBookInMyShelf: false
        },
        {
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 10,
          bookInfo: {
            price: 35.76,
            bookStatus: 1,
            free: 0,
            paperBook: {
              skuId: '12135337'
            },
            newRatingDetail: {
              title: '好评如潮'
            },
            translator: '刘姿君',
            finished: 1,
            category: '精品小说-悬疑推理',
            blockSaveImg: 0,
            intro:
              '1999年，东野圭吾41岁正值盛年，写作出道已14年，在笔力、技巧、体力和雄心上都炉火纯青，于是洋洋洒洒写出了这部鸿篇巨制《白夜行》。这种规模宏大的长篇作品在职业作家一生的创作中极为罕见，完成后基本都被视为生涯代表作。《白夜行》一经推出即成为东野圭吾的长篇小说代表作，被万千书迷视为东野圭吾作品中的无冕之·王，畅销至今。《白夜行》中文版发行量超600万册，和《嫌疑人X的献身》《恶意》《解忧杂货店》并称为东野圭吾四大杰作。',
            version: 213901204,
            categories: [
              {
                categoryId: 100000,
                subCategoryId: 100008,
                categoryType: 0,
                title: '精品小说-悬疑推理'
              }
            ],
            lastChapterIdx: 28,
            webBookControl: 0,
            title: '白夜行',
            format: 'epub',
            originalPrice: 0,
            hasLecture: 1,
            bookId: '230107',
            payType: 1048577,
            cpid: 24367662,
            newRating: 899,
            newRatingCount: 167567,
            author: '东野圭吾',
            mcardDiscount: 0,
            ispub: 1,
            listenCount: 15,
            hideUpdateTime: false,
            soldout: 0,
            centPrice: 3576,
            extra_type: 1,
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F1\u002Fyuewen_230107\u002Fs_yuewen_2301071682244014.jpg',
            publishTime: '2017-07-21 00:00:00',
            copyrightChapterUids: [108],
            language: 'zh-CN',
            type: 0
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 1539,
          isBookInMyShelf: false
        },
        {
          bestMark: '',
          riseCount: 0,
          searchIdx: 11,
          bookInfo: {
            lastChapterIdx: 28,
            paperBook: {
              skuId: '11096744'
            },
            newRatingDetail: {
              title: '神作'
            },
            bookId: '858626',
            finished: 1,
            mcardDiscount: 0,
            payType: 1048577,
            shouldHideTTS: 1,
            language: 'zh-CN',
            newRatingCount: 102217,
            author: '杨绛',
            originalPrice: 0,
            soldout: 0,
            publishTime: '2012-09-01 00:00:00',
            version: 143002219,
            intro:
              '    1998年，钱钟书逝世，而他和杨绛唯一的女儿钱瑗已于此前（1997年）先他们而去。在人生的伴侣离去四年后，杨绛用心记述了他们这个特殊家庭63年的风风雨雨、点点滴滴，结成回忆录《我们仨》。\n',
            free: 0,
            type: 0,
            price: 13.8,
            ispub: 1,
            webBookControl: 0,
            cover:
              'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F626\u002F858626\u002Fs_858626.jpg',
            extra_type: 1,
            hasLecture: 0,
            hideUpdateTime: false,
            newRating: 908,
            title: '我们仨',
            format: 'epub',
            bookStatus: 1,
            category: '人物传记-文学家',
            blockSaveImg: 0,
            centPrice: 1380,
            cpid: 1135052,
            categories: [
              {
                subCategoryId: 500007,
                categoryType: 0,
                title: '人物传记-文学家',
                categoryId: 500000
              }
            ],
            copyrightChapterUids: [11]
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 873,
          searchCount: 0,
          type: 0,
          isBookInMyShelf: false
        },
        {
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 1654,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 12,
          bookInfo: {
            title: '一个叫欧维的男人决定去死',
            type: 0,
            extra_type: 5,
            hasLecture: 1,
            language: 'zh-CN',
            bookStatus: 1,
            paperBook: {
              skuId: '11803729'
            },
            blockSaveImg: 0,
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F16\u002Fyuewen_814146\u002Fs_yuewen_8141461689328417.jpg',
            format: 'epub',
            soldout: 0,
            cpid: -60041,
            publishTime: '2015-12-01 00:00:00',
            listenCount: 11,
            lastChapterIdx: 42,
            payType: 4097,
            intro:
              '认识一下欧维。他59岁，脾气古怪，嫌东嫌西，带着坚不可摧的原则、每天恪守的常规以及随时发飙的脾性在社区晃来晃去，被背地里称为“地狱来的恶邻”。他每天一大早就四处巡视，搬动没停进格线的脚踏车，检查垃圾是否按规定分类，抱怨谁家的草坪还不修剪，诅咒那只掉了毛的流浪猫。没完没了。他想自杀。直到一个十一月的早晨，当一对话痨夫妇和他们的两个话痨女儿搬到隔壁，不小心撞坏了他的邮筒……看哭全北欧的瑞典票房冠军电影同名原著小说，韩国治愈系男神池昌旭温情推荐。',
            free: 0,
            mcardDiscount: 0,
            category: '文学-经典作品',
            author: '弗雷德里克·巴克曼',
            finished: 1,
            ispub: 1,
            categories: [
              {
                categoryId: 300000,
                subCategoryId: 300004,
                categoryType: 0,
                title: '文学-经典作品'
              }
            ],
            translator: '宁蒙',
            centPrice: 3500,
            copyrightChapterUids: [43],
            webBookControl: 0,
            bookId: '814146',
            price: 35,
            hideUpdateTime: false,
            newRating: 926,
            newRatingCount: 62444,
            version: 261032585,
            originalPrice: 0,
            lPushName: '读这个故事，你会哭，会笑，会想搬到北欧去\r',
            newRatingDetail: {
              title: '神作'
            }
          },
          isBookInMyShelf: false
        },
        {
          bookInfo: {
            cpid: 1000000198,
            hasLecture: 1,
            paperBook: {
              skuId: '12378533'
            },
            copyrightChapterUids: [32],
            version: 628427731,
            intro:
              '3D动画奇幻电影《小王子》中文配音版于2015年10月16日中国上映！这是一本足以让人永葆童心的不朽经典，被全球亿万读者誉为最值得收藏的书。翻开本书，您将看到遥远星球上的小王子，与美丽而骄傲的玫瑰吵架负气出走，在各星球漫游中，小王子遇到了傲慢的国王、酒鬼、惟利是图的商人，死守教条的地理学家，最后来到地球上，试图找到治愈孤独和痛苦的良方。这时，他遇到一只奇怪的狐狸，于是奇妙而令人惊叹的事情发生了…… 《小王子》犹如透亮的镜子，照出了荒唐的成人世界。她在提醒我们，只有爱，才是最高的哲学，才是我们活下去的唯一理由。',
            bookId: '216212',
            newRatingCount: 87122,
            finished: 1,
            listenCount: 7,
            blockSaveImg: 0,
            language: 'zh-CN',
            webBookControl: 0,
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002Fyuewen_216212\u002Fs_yuewen_2162121686560140.jpg',
            centPrice: 999,
            format: 'epub',
            hideUpdateTime: false,
            originalPrice: 0,
            soldout: 0,
            publishTime: '2013-01-01 00:00:00',
            lastChapterIdx: 31,
            newRatingDetail: {
              title: '神作'
            },
            author: '[法]安托万·德·圣埃克苏佩里著',
            translator: '李继宏',
            category: '文学-外国文学',
            type: 0,
            mcardDiscount: 0,
            newRating: 912,
            price: 9.99,
            categories: [
              {
                categoryType: 0,
                title: '文学-外国文学',
                categoryId: 300000,
                subCategoryId: 300013
              },
              {
                categoryId: 100000,
                subCategoryId: 100012,
                categoryType: 0,
                title: '精品小说-影视原著'
              }
            ],
            payType: 4097,
            free: 0,
            ispub: 1,
            extra_type: 1,
            title: '小王子',
            bookStatus: 1
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 1225,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 13,
          isBookInMyShelf: false
        },
        {
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 4664,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 14,
          bookInfo: {
            finished: 1,
            publishTime: '2021-01-01 00:00:00',
            copyrightChapterUids: [2],
            webBookControl: 0,
            title: '置身事内：中国政府与经济发展',
            version: 442600278,
            free: 0,
            type: 0,
            originalPrice: 0,
            payType: 1048577,
            extra_type: 5,
            blockSaveImg: 0,
            hideUpdateTime: false,
            bookId: '40055543',
            format: 'epub',
            newRating: 950,
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F52\u002FYueWen_40055543\u002Fs_YueWen_40055543.jpg',
            cpid: -1361120,
            lastChapterIdx: 60,
            paperBook: {
              skuId: '13643682'
            },
            newRatingCount: 39698,
            price: 55,
            centPrice: 5500,
            hasLecture: 1,
            language: 'zh',
            bookStatus: 1,
            ispub: 1,
            listenCount: 69,
            author: '兰小欢',
            soldout: 0,
            intro:
              '本书是复旦大学经济学院副教授兰小欢多年教学与研究内容的凝练，将经济学原理与中国经济发展的实践有机融合，以地方政府投融资为主线，深入浅出地论述了中国经济的发展，广泛采纳各领域学者全新研究成果。全书分上下两篇。上篇解释微观机制，包括地方政府的基本事务、收支、土地融资和开发、投资和债务等；下篇解释这些微观行为与宏观现象的联系，包括城市化和工业化、房价、地区差异、债务风险、国内经济结构失衡、国际贸易冲突等。最后一章通过对中国政治经济体系的论述，作者简明地刻画了地方政府进行经济治理的基本方式，指出中国政府通过深度介入工业化和城市化的进程，在发展经济的同时逐步推动了市场机制的建立和完善。',
            mcardDiscount: 0,
            category: '经济理财-财经',
            categories: [
              {
                categoryId: 1100000,
                subCategoryId: 1100001,
                categoryType: 0,
                title: '经济理财-财经'
              }
            ],
            newRatingDetail: {
              title: '神作'
            }
          },
          isBookInMyShelf: false
        },
        {
          readingCount: 2510,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 15,
          bookInfo: {
            webBookControl: 0,
            title: '围城',
            originalPrice: 0,
            payType: 1048577,
            centPrice: 1800,
            publishTime: '2017-07-01 00:00:00',
            type: 0,
            bookStatus: 1,
            lastChapterIdx: 17,
            newRating: 898,
            mcardDiscount: 0,
            newRatingCount: 104095,
            cover:
              'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F457\u002F22946457\u002Fs_22946457.jpg',
            price: 18,
            intro:
              '钱钟书先生最经典的作品，也是仅有的一部长篇小说，堪称中国现代文学史上风格独特的讽刺经典，被誉为“新儒林外史”，自上世纪八十年代以来一直横贯常销、畅销小说之首。小说塑造了抗战初期以方鸿渐为主的一类知识分子群像，记叙了他们所面临的教育、婚姻和事业困境。虽然有具体的历史背景，但这部小说揭示的人群的弱点，在今天依然能引起人们的共鸣。著名文学评论家夏志清先生在《中国现代小说史》中认为，“《围城》比任何中国古典讽刺小说优秀”，称之为“中国现代文学史中写得最有趣、最细腻的小说，或许是最伟大的小说。”',
            category: '文学-经典作品',
            hasLecture: 1,
            version: 1066789617,
            cpid: -2571052,
            listenCount: 20,
            extra_type: 5,
            lPushName: '钱钟书唯一长篇小说 经典佳作',
            bookId: '22946457',
            author: '钱钟书',
            soldout: 0,
            free: 0,
            ispub: 1,
            copyrightChapterUids: [19],
            hideUpdateTime: false,
            language: 'zh-CN',
            newRatingDetail: {
              title: '好评如潮'
            },
            format: 'epub',
            finished: 1,
            categories: [
              {
                categoryType: 0,
                title: '文学-经典作品',
                categoryId: 300000,
                subCategoryId: 300004
              }
            ],
            paperBook: {
              skuId: '13006247'
            },
            blockSaveImg: 0
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          isBookInMyShelf: false
        },
        {
          bestMark: '',
          riseCount: 0,
          searchIdx: 16,
          bookInfo: {
            soldout: 0,
            cpid: 16796673,
            categories: [
              {
                categoryType: 0,
                title: '历史-历史小说',
                categoryId: 200000,
                subCategoryId: 200004
              }
            ],
            hideUpdateTime: false,
            format: 'epub',
            finished: 1,
            publishTime: '2023-06-01 00:00:00',
            language: 'zh-wr',
            category: '历史-历史小说',
            webBookControl: 0,
            title: '太白金星有点烦',
            author: '马伯庸',
            free: 0,
            mcardDiscount: 0,
            listenCount: 26,
            lastChapterIdx: 18,
            type: 0,
            payType: 1048577,
            intro:
              '天庭神仙皆社畜，西游路上打工人。\n太白金星李长庚最近有点烦。天庭和西天联合推出了“西天取经”的重大项目，他受命策划九九八十一难，确保唐僧能安全走完流程，平稳取经。老神仙本以为一切尽在掌控中，谁知天大的麻烦才刚刚开始：费用报销、工作汇报、人事安排、各路大仙塞来的条子、各地妖怪暗藏的心思，捋不出的千头万缕，做不完的繁杂琐事……当大闹天宫的真相重新浮出水面，牵扯出无数因果，李长庚发觉自己成就金仙的道路越加渺茫。',
            extra_type: 5,
            newRatingCount: 56117,
            originalPrice: 0,
            centPrice: 2320,
            ispub: 1,
            blockSaveImg: 0,
            newRatingDetail: {
              title: '神作'
            },
            bookId: '3300072295',
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F72\u002Fcpplatform_huhykqamxcvke1jfkpqxiv\u002Fs_cpplatform_huhykqamxcvke1jfkpqxiv1695711014.jpg',
            price: 23.2,
            bookStatus: 1,
            version: 222810808,
            paperBook: {
              skuId: ''
            },
            newRating: 919,
            authorVids: '282476580',
            hasLecture: 1,
            copyrightChapterUids: [36]
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 4897,
          searchCount: 0,
          type: 0,
          isBookInMyShelf: false
        },
        {
          riseCount: 0,
          searchIdx: 17,
          bookInfo: {
            translator: '林佩瑾',
            type: 0,
            bookStatus: 1,
            payType: 1048577,
            category: '精品小说-悬疑推理',
            newRating: 929,
            newRatingCount: 45339,
            intro:
              '罗翔推荐。长达四十年的恶女编年史，被网友称为“被嫌弃的阳子的黑化”、“更现实版的《都挺好》”。铃木阳子死了，死在独居的公寓里。正确说来，是铃木阳子几个月前死了。因为发现她时，遗体不但遭到屋内的十一只猫啃食殆尽，连猫也全数饿死了。铃木阳子显然是“孤独死”的最佳范例，但这名女子为何落到这步田地？她的亲人、朋友、同事在哪里？她的人生轨迹又是怎样的？本书以两起相对独立的死亡事件为线索，牵出了三起相互交织的案件，讲述了女主人公阳子在时代裹挟中的个人挣扎，从平庸一步步滑落到不可救药的深渊。故事发生在2014年的日本都市。本书分为三条线：第一条线是“中年女子孤独死”案，从发现女尸开始，叙述女警绫乃的调查过程，逐渐揭露女主人公阳子的人生。第二条线从“非营利组织头目死亡”案开始。看似无关的两个案件逐渐交会，交织出真象。第三条线以第二人称叙述阳子的人生经历，从阳子童年时期开始，到女尸被发现为止，细腻地描写了阳子的成长变化和被社会吞噬的过程。',
            finished: 1,
            newRatingDetail: {
              title: '神作'
            },
            title: '绝叫',
            version: 1833012617,
            price: 28.99,
            originalPrice: 0,
            cpid: 9357272,
            lastChapterIdx: 34,
            paperBook: {
              skuId: '12696381'
            },
            copyrightChapterUids: [35],
            webBookControl: 0,
            format: 'epub',
            centPrice: 2899,
            hasLecture: 1,
            bookId: '33483909',
            author: '叶真中显',
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002FYueWen_33483909\u002Fs_YueWen_33483909.jpg',
            mcardDiscount: 0,
            listenCount: 3,
            soldout: 0,
            ispub: 1,
            language: 'zh-CN',
            free: 0,
            extra_type: 5,
            hideUpdateTime: false,
            publishTime: '2020-07-01 00:00:00',
            categories: [
              {
                subCategoryId: 100008,
                categoryType: 0,
                title: '精品小说-悬疑推理',
                categoryId: 100000
              }
            ],
            blockSaveImg: 0
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 1298,
          searchCount: 0,
          type: 0,
          bestMark: '',
          isBookInMyShelf: false
        },
        {
          bookInfo: {
            format: 'epub',
            originalPrice: 0,
            free: 0,
            publishTime: '2022-08-01 00:00:00',
            categories: [
              {
                categoryId: 300000,
                subCategoryId: 300013,
                categoryType: 0,
                title: '文学-外国文学'
              }
            ],
            blockSaveImg: 0,
            bookId: '857863',
            intro:
              '很多人都笑我。但他们是我的朋友我们都很快乐。\n 声称能改造智能的科学实验在白老鼠阿尔吉侬身上获得了突破性的进展，下一步急需进行人体实验。个性和善、学习态度积极的心智障碍者查理·高登成为最佳人选。\n查理对实验只有模糊的了解，但他知道自己想变聪明，想要受重视，爱人和被爱。\n手术成功后，查理的智商从68跃升为185，那些从未有过的情绪和记忆也逐渐浮现。',
            copyrightChapterUids: [20],
            title: '献给阿尔吉侬的花束',
            type: 0,
            soldout: 0,
            mcardDiscount: 0,
            cpid: 25523719,
            category: '文学-外国文学',
            paperBook: {
              skuId: '12998569'
            },
            newRatingCount: 44269,
            author: '丹尼尔·凯斯',
            ispub: 1,
            translator: '陈澄和',
            language: 'zh-CN',
            newRating: 927,
            centPrice: 4800,
            finished: 1,
            hasLecture: 1,
            payType: 1048577,
            version: 1900337382,
            lastChapterIdx: 22,
            webBookControl: 0,
            newRatingDetail: {
              title: '神作'
            },
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F11\u002Fyuewen_857863\u002Fs_yuewen_8578631681827306.jpg',
            bookStatus: 1,
            extra_type: 5,
            hideUpdateTime: false,
            price: 48
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 1773,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          searchIdx: 18,
          isBookInMyShelf: false
        },
        {
          riseCount: 0,
          searchIdx: 19,
          bookInfo: {
            mcardDiscount: 0,
            lastChapterIdx: 19,
            version: 19964544,
            blockSaveImg: 0,
            paperBook: {
              skuId: ''
            },
            intro:
              '蛤蟆先生一向爱笑爱闹，如今却一反常态地郁郁寡欢。他一个人躲在屋里，连起床梳洗的力气都没有。朋友们非常担心他，建议他去做心理咨询。在10次心理咨询中，蛤蟆在咨询师苍鹭的带领下，勇敢地探索了自己的内心世界，也逐渐找回了信心与希望……为了向大众读者普及心理学知识，作者借用了英国文学经典《柳林风声》的故事主角，让蛤蟆先生和他的朋友们再次登场，演绎了这个关于心理咨询的故事。读者犹如亲临现场，体验心理咨询的每一个细节，见证疗愈和改变的发生。作者借由蛤蟆和心理咨询师苍鹭的互动，探索了蛤蟆自卑、软弱、爱炫耀的个性与抑郁的情绪究竟来源于何处，以及如何才能在心理上真正长大成人，独立、自信、充满希望地生活。',
            finished: 1,
            free: 0,
            extra_type: 5,
            categories: [
              {
                categoryId: 800000,
                subCategoryId: 800005,
                categoryType: 0,
                title: '心理-心理学应用'
              }
            ],
            publishTime: '2020-08-01 00:00:00',
            webBookControl: 0,
            newRating: 895,
            newRatingDetail: {
              title: '好评如潮'
            },
            bookId: '35551088',
            title: '蛤蟆先生去看心理医生',
            author: '罗伯特·戴博德',
            originalPrice: 0,
            centPrice: 3800,
            hideUpdateTime: false,
            translator: '陈赢',
            format: 'epub',
            price: 38,
            category: '心理-心理学应用',
            hasLecture: 1,
            newRatingCount: 99825,
            type: 0,
            ispub: 1,
            cpid: -3319053,
            copyrightChapterUids: [20],
            language: 'zh',
            cover:
              'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F81\u002FYueWen_35551088\u002Fs_YueWen_35551088.jpg',
            soldout: 0,
            bookStatus: 1,
            payType: 4097,
            listenCount: 81
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 5909,
          searchCount: 0,
          type: 0,
          bestMark: '',
          isBookInMyShelf: false
        },
        {
          searchIdx: 20,
          bookInfo: {
            bookId: '674044',
            payType: 4097,
            free: 0,
            ispub: 1,
            categories: [
              {
                subCategoryId: 300005,
                categoryType: 0,
                title: '文学-散文杂著',
                categoryId: 300000
              }
            ],
            lastChapterIdx: 14,
            newRatingDetail: {
              title: '神作'
            },
            cover:
              'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F44\u002F674044\u002Fs_674044.jpg',
            type: 0,
            publishTime: '2011-04-01 00:00:00',
            category: '文学-散文杂著',
            hasLecture: 1,
            webBookControl: 0,
            newRatingCount: 55290,
            title: '我与地坛',
            price: 9.99,
            mcardDiscount: 0,
            paperBook: {
              skuId: ''
            },
            language: 'zh-CN',
            format: 'epub',
            finished: 1,
            cpid: -2571052,
            listenCount: 86,
            copyrightChapterUids: [2],
            intro:
              '要是有些事我没说，地坛，你别以为是我忘了，我什么也没忘；但是有些事只适合收藏，不能说，不能想，却又不能忘。《我与地坛》是史铁生文学作品中，充满哲思又极为人性化的代表作之一。其前两段被纳入人民教育出版社的高一教材中。前两部分注重讲地坛和他与母亲的后悔，对中学生来说，这是一篇令人反思的优秀文章。',
            blockSaveImg: 0,
            hideUpdateTime: false,
            version: 318012976,
            originalPrice: 0,
            centPrice: 999,
            author: '史铁生',
            soldout: 0,
            bookStatus: 1,
            extra_type: 5,
            newRating: 912
          },
          hints: '4000|41010||0_1716090846697|3ndJZgAAAAChSk6U',
          readingCount: 12283,
          searchCount: 0,
          type: 0,
          bestMark: '',
          riseCount: 0,
          isBookInMyShelf: false
        }
      ],
      bookInShelfData: [],
      maxSearchIdx: 20,
      categoryAlbumList: []
    },
    homeStoreModule: {
      categories: [
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F16\u002FYueWen_22261199\u002Fs_YueWen_22261199.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F80\u002Fyuewen_695233\u002Fs_yuewen_6952331677562148.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002Fyuewen_834525\u002Fs_yuewen_8345251706673008.jpg'
          ],
          bookTitles: ['剑来', '三体（全集）', '雪中悍刀行（张若昀、李庚希主演）'],
          CategoryId: '100000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '精品小说',
          title: '精品小说',
          recommend: '0',
          totalCount: 22929,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F43\u002F3300024943\u002Fs_3300024943.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F85\u002F3300010685\u002Fs_3300010685.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F73\u002F674073\u002Fs_674073.jpg'
              ],
              bookTitles: ['一句顶一万句（2022新版）', '一地鸡毛（典藏版）', '沧浪之水'],
              CategoryId: '100001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '社会小说',
              recommend: '0',
              totalCount: 3377,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F558\u002F23233558\u002Fs_23233558.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F17\u002Fyuewen_23484983\u002Fs_yuewen_234849831690286968.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002Fcpplatform_6anpeb9x16wx32avur2633\u002Fs_cpplatform_6anpeb9x16wx32avur26331711608504.jpg'
              ],
              bookTitles: [
                '云边有个小卖部（彭昱畅主演，同名电影原著小说）',
                '长相思（杨紫 张晚意 邓为 檀健次 代露娃 王弘毅主演）',
                '她对此感到厌烦（两册合集）'
              ],
              CategoryId: '100002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '情感小说',
              recommend: '0',
              totalCount: 7504,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F80\u002Fcpplatform_9ntjveherratctybwfyzj7\u002Fs_cpplatform_9ntjveherratctybwfyzj71676016817.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F77\u002FcpPlatform_dxft6QPJSm3ZvLVYWfPmAj\u002Fs_cpPlatform_dxft6QPJSm3ZvLVYWfPmAj.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F43\u002Fcpplatform_f3vxcjkt7ph8jrpy4jugwr\u002Fs_cpplatform_f3vxcjkt7ph8jrpy4jugwr1678775114.jpg'
              ],
              bookTitles: ['布鲁克林有棵树', '你也走了很远的路吧（全新增订本）', '布鲁克林有棵树'],
              CategoryId: '100003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '青春文学',
              recommend: '0',
              totalCount: 1283,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F80\u002Fyuewen_695233\u002Fs_yuewen_6952331677562148.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F61\u002Fyuewen_26859515\u002Fs_yuewen_268595151708661295.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F43\u002Fyuewen_27423355\u002Fs_yuewen_274233551713267903.jpg'
              ],
              bookTitles: ['三体（全集）', '沙丘六部曲（电影《沙丘2》原著小说）', '山'],
              CategoryId: '100004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '科幻小说',
              recommend: '0',
              totalCount: 1835,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F66\u002FYueWen_23303928\u002Fs_YueWen_23303928.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F26\u002FYueWen_35458083\u002Fs_YueWen_35458083.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F65\u002Fyuewen_424557\u002Fs_yuewen_4245571702983000.jpg'
              ],
              bookTitles: [
                '我的团长我的团（段奕宏、张译等人主演）',
                '西线无战事（同名电影原著）',
                '为什么是毛泽东'
              ],
              CategoryId: '100005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '战争军旅',
              recommend: '0',
              totalCount: 518,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F16\u002FYueWen_22261199\u002Fs_YueWen_22261199.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002Fyuewen_834525\u002Fs_yuewen_8345251706673008.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F98\u002Fyuewen_31131759\u002Fs_yuewen_311317591686554234.jpg'
              ],
              bookTitles: ['剑来', '雪中悍刀行（张若昀、李庚希主演）', '剑来（1-42册）出版精校版'],
              CategoryId: '100006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '玄幻精品',
              recommend: '0',
              totalCount: 1583,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F996\u002F41401996\u002Fs_41401996.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F231\u002F23744231\u002Fs_23744231.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F68\u002FYueWen_37209421\u002Fs_YueWen_37209421.jpg'
              ],
              bookTitles: ['花蛊', '九龙拉棺', '十四年猎诡人（全5册）'],
              CategoryId: '100007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '恐怖惊悚',
              recommend: '0',
              totalCount: 439,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002FcpPlatform_dCqi6dpbtB1eynDnjD12j2\u002Fs_cpPlatform_dCqi6dpbtB1eynDnjD12j2.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F913\u002F35905913\u002Fs_35905913.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F403\u002F27019403\u002Fs_27019403.jpg'
              ],
              bookTitles: ['费可的晚宴', '最后一个道士（全七册）', '麻衣相师'],
              CategoryId: '100008',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '悬疑推理',
              recommend: '0',
              totalCount: 4196,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F629\u002F827629\u002Fs_827629.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F59\u002FYueWen_812778\u002Fs_YueWen_812778.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F24\u002FcpPlatform_7TuqmpmjEYigcY4eSjwWuA\u002Fs_cpPlatform_7TuqmpmjEYigcY4eSjwWuA.jpg'
              ],
              bookTitles: [
                '古龙作品大全集（电视剧《欢乐英雄》原著小说）',
                '金庸作品集（全集共36册）',
                '黄易作品大全集（全15部共144册）'
              ],
              CategoryId: '100011',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '武侠小说',
              recommend: '0',
              totalCount: 1223,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002Fyuewen_834525\u002Fs_yuewen_8345251706673008.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F592\u002F462592\u002Fs_462592.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F32\u002FYueWen_853116\u002Fs_YueWen_853116.jpg'
              ],
              bookTitles: [
                '雪中悍刀行（张若昀、李庚希主演）',
                '庆余年',
                '杀死一只知更鸟（同名电影原著）'
              ],
              CategoryId: '100012',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '影视原著',
              recommend: '0',
              totalCount: 869,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F3\u002FYueWen_35090602\u002Fs_YueWen_35090602.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F521\u002F752521\u002Fs_752521.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F30\u002F465030\u002Fs_465030.jpg'
              ],
              bookTitles: ['天之下', '麻衣神算子', '凡人修仙传'],
              CategoryId: '100013',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '优质网文',
              recommend: '0',
              totalCount: 452,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F180\u002F27754180\u002Fs_27754180.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F497\u002F21097497\u002Fs_21097497.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F778\u002F27281778\u002Fs_27281778.jpg'
              ],
              bookTitles: ['新宋·大结局（全15册）', '秦吏', '绍宋'],
              CategoryId: '100014',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '历史架空',
              recommend: '0',
              totalCount: 78,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F32\u002Fcpplatform_wxxo2bpco5xlabw5b7y38v\u002Fs_cpplatform_wxxo2bpco5xlabw5b7y38v1705993399.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F49\u002Fcpplatform_k3wdha5xs938aa3mpeuskx\u002Fs_cpplatform_k3wdha5xs938aa3mpeuskx1712653210.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F82\u002Fcpplatform_csxd86egu48ubuuxcb64dh\u002Fs_cpplatform_csxd86egu48ubuuxcb64dh1702366742.jpg'
              ],
              bookTitles: ['小巷人家', '老张家的七个女儿', '豆子芝麻茶（杨本芬新书｜独家首发）'],
              CategoryId: '100015',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '100000',
              parentCategoryTitle: '精品小说',
              title: '家庭故事',
              recommend: '0',
              totalCount: 100,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F97\u002Fyuewen_822995\u002Fs_yuewen_8229951695023669.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FcpPlatform_dbb14284a55f1e733b60202b0777255d\u002Fs_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F72\u002Fcpplatform_huhykqamxcvke1jfkpqxiv\u002Fs_cpplatform_huhykqamxcvke1jfkpqxiv1695711014.jpg'
          ],
          bookTitles: ['明朝那些事儿（全集）', '长安的荔枝', '太白金星有点烦'],
          CategoryId: '200000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '历史',
          title: '历史',
          recommend: '0',
          totalCount: 27570,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F92\u002Fcpplatform_6qbf5dbgbmtgmtusuyvtfs\u002Fs_cpplatform_6qbf5dbgbmtgmtusuyvtfs1685433550.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F36\u002Fcpplatform_jnnzglywre5mqpdibm7maw\u002Fs_cpplatform_jnnzglywre5mqpdibm7maw1711597827.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F16\u002Fcpplatform_4xwmrlcwcwtxv39wvacofe\u002Fs_cpplatform_4xwmrlcwcwtxv39wvacofe1681376051.jpg'
              ],
              bookTitles: [
                '透过地理看历史系列（全3册）',
                '半小时漫画中国地理：西藏、青海、云南、贵州',
                '透过地理看历史：大航海时代'
              ],
              CategoryId: '200001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '历史地理',
              recommend: '0',
              totalCount: 523,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F377\u002F41595377\u002Fs_41595377.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F60\u002FYueWen_851459\u002Fs_YueWen_851459.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F73\u002FYueWen_184031\u002Fs_YueWen_184031.jpg'
              ],
              bookTitles: ['史记（全十二册）', '论语', '曾国藩家书'],
              CategoryId: '200002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '历史典籍',
              recommend: '0',
              totalCount: 13667,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F97\u002Fyuewen_822995\u002Fs_yuewen_8229951695023669.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F6\u002Fyuewen_40963066\u002Fs_yuewen_409630661678700087.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F79\u002Fyuewen_41809483\u002Fs_yuewen_418094831712721148.jpg'
              ],
              bookTitles: [
                '明朝那些事儿（全集）',
                '明朝那些事儿·全集（2021年 增补版）',
                '华杉讲透《资治通鉴》（共26册）'
              ],
              CategoryId: '200003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '历史读物',
              recommend: '0',
              totalCount: 2655,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FcpPlatform_dbb14284a55f1e733b60202b0777255d\u002Fs_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F72\u002Fcpplatform_huhykqamxcvke1jfkpqxiv\u002Fs_cpplatform_huhykqamxcvke1jfkpqxiv1695711014.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F310\u002F847310\u002Fs_847310.jpg'
              ],
              bookTitles: ['长安的荔枝', '太白金星有点烦', '大明王朝1566（全集）'],
              CategoryId: '200004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '历史小说',
              recommend: '0',
              totalCount: 1473,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F50\u002FYueWen_22309196\u002Fs_YueWen_22309196.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F69\u002Fcpplatform_3yh92udmyawrrhwsedyaet\u002Fs_cpplatform_3yh92udmyawrrhwsedyaet1681875008.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F12\u002FYueWen_914628\u002Fs_YueWen_914628.jpg'
              ],
              bookTitles: ['李宗仁回忆录（上下册）', '启功口述历史', '艰难时代：亲历美国大萧条'],
              CategoryId: '200005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '史学著作',
              recommend: '0',
              totalCount: 57,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F37\u002FYueWen_855812\u002Fs_YueWen_855812.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F36\u002FYueWen_635800\u002Fs_YueWen_635800.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F24\u002Fcpplatform_kbeebcjebf2zetggqq71vc\u002Fs_cpplatform_kbeebcjebf2zetggqq71vc1701673040.jpg'
              ],
              bookTitles: ['人类简史：从动物到上帝', '人类简史：从动物到上帝', '少年世界史'],
              CategoryId: '200006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '世界史',
              recommend: '0',
              totalCount: 2635,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F97\u002Fyuewen_822995\u002Fs_yuewen_8229951695023669.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002Fcpplatform_qgm8mx4we5qpr3jsaspa9n\u002Fs_cpplatform_qgm8mx4we5qpr3jsaspa9n1679558201.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F23\u002Fyuewen_23774475\u002Fs_yuewen_237744751687158200.jpg'
              ],
              bookTitles: [
                '明朝那些事儿（全集）',
                '翦商：殷周之变与华夏新生',
                '曾国藩传（张宏杰全新增补版）'
              ],
              CategoryId: '200007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '中国古代',
              recommend: '0',
              totalCount: 3746,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F684\u002F31485684\u002Fs_31485684.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F377\u002F41595377\u002Fs_41595377.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F88\u002FYueWen_22297631\u002Fs_YueWen_22297631.jpg'
              ],
              bookTitles: ['柏杨白话版资治通鉴（全72册）', '史记（全十二册）', '史记（公版）'],
              CategoryId: '200008',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '历史文化',
              recommend: '0',
              totalCount: 2223,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F13\u002Fyuewen_825862\u002Fs_yuewen_8258621676547091.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F72\u002FcpPlatform_p63DwghgYdGSCfcEeby3qE\u002Fs_cpPlatform_p63DwghgYdGSCfcEeby3qE.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F28\u002Fcpplatform_xgrohdjxudscwy9a5ejycb\u002Fs_cpplatform_xgrohdjxudscwy9a5ejycb1698391576.jpg'
              ],
              bookTitles: [
                '南渡北归（经典全三册礼盒装）',
                '筚路维艰：中国社会主义路径的五次选择',
                '胜者心法：资治通鉴成事之道'
              ],
              CategoryId: '200009',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '200000',
              parentCategoryTitle: '历史',
              title: '中国近现代',
              recommend: '0',
              totalCount: 787,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002Fcpplatform_fy7wyg2acrhxq1vu4yvs9y\u002Fs_cpplatform_fy7wyg2acrhxq1vu4yvs9y1714307419.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F44\u002F674044\u002Fs_674044.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F64\u002F3300020164\u002Fs_3300020164.jpg'
          ],
          bookTitles: [
            '我的阿勒泰（马伊琍、周依然、于适主演同名电视剧原著）',
            '我与地坛',
            '记一忘三二（不开心就读李娟！）'
          ],
          CategoryId: '300000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '文学',
          title: '文学',
          recommend: '0',
          totalCount: 39788,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F45\u002FYueWen_34615967\u002Fs_YueWen_34615967.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F22\u002Fyuewen_34631845\u002Fs_yuewen_346318451676961764.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F20\u002Fyuewen_29855984\u002Fs_yuewen_298559841676969263.jpg'
              ],
              bookTitles: ['红楼梦', '西游记', '三国演义'],
              CategoryId: '300001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '古典文学',
              recommend: '0',
              totalCount: 3269,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F55\u002Fcpplatform_3lq1pbafdv9zmagxm2dew1\u002Fs_cpplatform_3lq1pbafdv9zmagxm2dew11715148300.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F88\u002Fcpplatform_8th7igjxnsgez3s8ir24vp\u002Fs_cpplatform_8th7igjxnsgez3s8ir24vp1681204246.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002Fcpplatform_1kbmyhhin953hyfqdhewqe\u002Fs_cpplatform_1kbmyhhin953hyfqdhewqe1715226020.jpg'
              ],
              bookTitles: ['被判死刑之后', '我在北京送快递', '毕业工作第一年'],
              CategoryId: '300002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '纪实文学',
              recommend: '0',
              totalCount: 1615,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F98\u002Fcpplatform_fbr67khkvxnmdv7fpzmbpw\u002Fs_cpplatform_fbr67khkvxnmdv7fpzmbpw1710149061.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F30\u002Fcpplatform_rrrho7ahadsth3mk8uu1s7\u002Fs_cpplatform_rrrho7ahadsth3mk8uu1s71692077760.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F42\u002F3300024942\u002Fs_3300024942.jpg'
              ],
              bookTitles: [
                '中国怪谈',
                '有生（第十一届茅盾文学奖提名作品）',
                '我不是潘金莲（2022新版）'
              ],
              CategoryId: '300003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '民间文学',
              recommend: '0',
              totalCount: 615,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002Fcpplatform_fy7wyg2acrhxq1vu4yvs9y\u002Fs_cpplatform_fy7wyg2acrhxq1vu4yvs9y1714307419.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F64\u002F3300020164\u002Fs_3300020164.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F79\u002Fyuewen_26435427\u002Fs_yuewen_264354271701758059.jpg'
              ],
              bookTitles: [
                '我的阿勒泰（马伊琍、周依然、于适主演同名电视剧原著）',
                '记一忘三二（不开心就读李娟！）',
                '生死疲劳'
              ],
              CategoryId: '300004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '经典作品',
              recommend: '0',
              totalCount: 11009,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F44\u002F674044\u002Fs_674044.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F23\u002Fyuewen_244005\u002Fs_yuewen_2440051705489978.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002FYueWen_25077687\u002Fs_YueWen_25077687.jpg'
              ],
              bookTitles: ['我与地坛', '阿勒泰的角落', '遥远的向日葵地'],
              CategoryId: '300005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '散文杂著',
              recommend: '0',
              totalCount: 9086,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002FYueWen_23444142\u002Fs_YueWen_23444142.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F551\u002F32957551\u002Fs_32957551.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F86\u002Fcpplatform_7dq5fwzsbv38xgpq9adip6\u002Fs_cpplatform_7dq5fwzsbv38xgpq9adip61713323857.jpg'
              ],
              bookTitles: [
                '蒋勋说红楼梦（套装共8册）',
                '文学回忆录：1989-1994',
                '巨流河（纪念版）'
              ],
              CategoryId: '300007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '文学鉴赏',
              recommend: '0',
              totalCount: 3760,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F82\u002Fcpplatform_qryw98bvfedjtb2xwxxhvy\u002Fs_cpplatform_qryw98bvfedjtb2xwxxhvy1715763275.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F47\u002FYueWen_28394090\u002Fs_YueWen_28394090.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F71\u002FYueWen_25949772\u002Fs_YueWen_25949772.jpg'
              ],
              bookTitles: ['鳄鱼', '哈姆雷特', '麦克白(中英双语珍藏版)'],
              CategoryId: '300008',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '戏剧文学',
              recommend: '0',
              totalCount: 526,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F15\u002FYueWen_39136896\u002Fs_YueWen_39136896.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F65\u002Fcpplatform_m3statejbnuyfwwx45gzbc\u002Fs_cpplatform_m3statejbnuyfwwx45gzbc1700032104.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002Fcpplatform_hrfvm5wfenj5tr8fpjrvpi\u002Fs_cpplatform_hrfvm5wfenj5tr8fpjrvpi1685691211.jpg'
              ],
              bookTitles: [
                '卡片笔记写作法：如何实现从阅读到写作',
                '风吹哪页读哪页',
                '说文解字（中华经典名著全本全注全译·全5册）'
              ],
              CategoryId: '300009',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '语言文字',
              recommend: '0',
              totalCount: 1840,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F59\u002Fcpplatform_bllgdhdlypuvm3z9nb3szt\u002Fs_cpplatform_bllgdhdlypuvm3z9nb3szt1711966708.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002FcpPlatform_fuLnt2noEFmgyyRQvN8d3a\u002Fs_cpPlatform_fuLnt2noEFmgyyRQvN8d3a.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F12\u002FYueWen_821366\u002Fs_YueWen_821366.jpg'
              ],
              bookTitles: ['飞鸟集（中英对照版）', '月光落在左手上', '飞鸟集'],
              CategoryId: '300010',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '现代诗歌',
              recommend: '0',
              totalCount: 1813,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F65\u002FYueWen_931848\u002Fs_YueWen_931848.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F18\u002Fyuewen_23528206\u002Fs_yuewen_235282061678881898.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F265\u002F813265\u002Fs_813265.jpg'
              ],
              bookTitles: [
                '诗经',
                '中国最美古诗词：你应该熟读的中国古诗+你应该熟读的中国古词+你应该熟读的中国古文（全集）',
                '宋词三百首（彩图精装）'
              ],
              CategoryId: '300012',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '古代诗词',
              recommend: '0',
              totalCount: 1428,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F49\u002Fyuewen_935536\u002Fs_yuewen_9355361682243599.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F107\u002F853107\u002Fs_853107.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F339\u002F546339\u002Fs_546339.jpg'
              ],
              bookTitles: ['百年孤独', '基督山伯爵', '追风筝的人'],
              CategoryId: '300013',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '外国文学',
              recommend: '0',
              totalCount: 5166,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F32\u002FYueWen_853116\u002Fs_YueWen_853116.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F107\u002F853107\u002Fs_853107.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F28\u002FYueWen_31808219\u002Fs_YueWen_31808219.jpg'
              ],
              bookTitles: [
                '杀死一只知更鸟（同名电影原著）',
                '基督山伯爵',
                '卡拉马佐夫兄弟（套装上下册）（陀思妥耶夫斯基文集2015）'
              ],
              CategoryId: '300014',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '300000',
              parentCategoryTitle: '文学',
              title: '世界名著',
              recommend: '0',
              totalCount: 2251,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F839\u002F40223839\u002Fs_40223839.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F797\u002F568797\u002Fs_568797.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F921\u002F29629921\u002Fs_29629921.jpg'
          ],
          bookTitles: ['新摄影笔记', '故事：材质、结构、风格和银幕剧作的原理', '梵高手稿'],
          CategoryId: '400000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '艺术',
          title: '艺术',
          recommend: '0',
          totalCount: 8850,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F64\u002F3300017464\u002Fs_3300017464.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F57\u002FYueWen_34069582\u002Fs_YueWen_34069582.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F276\u002F25444276\u002Fs_25444276.jpg'
              ],
              bookTitles: [
                '中国石窟简史（艺林藻鉴）',
                '硬木头雕出软萌感：木雕小物手作自学教程',
                '雕塑与建筑'
              ],
              CategoryId: '400001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '雕塑',
              recommend: '0',
              totalCount: 58,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F921\u002F29629921\u002Fs_29629921.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F86\u002FYueWen_23071788\u002Fs_YueWen_23071788.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002FYueWen_33514727\u002Fs_YueWen_33514727.jpg'
              ],
              bookTitles: ['梵高手稿', '美术馆里聊怪咖', '生活蒙太奇'],
              CategoryId: '400002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '绘画',
              recommend: '0',
              totalCount: 2767,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F801\u002F32913801\u002Fs_32913801.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F24\u002Fcpplatform_ik2jm4uf4capdt25x2qjsz\u002Fs_cpplatform_ik2jm4uf4capdt25x2qjsz1673923632.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F808\u002F32913808\u002Fs_32913808.jpg'
              ],
              bookTitles: [
                '建筑也可以很好玩：欧洲篇，从古希腊到文艺复兴',
                '梁思成中国建筑史',
                '建筑也可以很好玩：欧洲篇，从古典主义到近现代'
              ],
              CategoryId: '400003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '建筑',
              recommend: '0',
              totalCount: 559,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F14\u002FYueWen_26785329\u002Fs_YueWen_26785329.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F30\u002FYueWen_26188153\u002Fs_YueWen_26188153.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F20\u002FYueWen_31732572\u002Fs_YueWen_31732572.jpg'
              ],
              bookTitles: ['汉字书法之美', '中国书法一本通', '中国书法常识'],
              CategoryId: '400004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '书法',
              recommend: '0',
              totalCount: 495,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F14\u002FYueWen_39483946\u002Fs_YueWen_39483946.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F85\u002FYueWen_31359710\u002Fs_YueWen_31359710.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F81\u002Fcpplatform_pt2bt99bqhw73qe6xq9nzb\u002Fs_cpplatform_pt2bt99bqhw73qe6xq9nzb1710472052.jpg'
              ],
              bookTitles: [
                '古瓷之光',
                '平面设计基础与实战：小白的进阶学习之路',
                '图解中国传统服饰  我在宋朝穿什么'
              ],
              CategoryId: '400005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '工艺',
              recommend: '0',
              totalCount: 336,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F11\u002FcpPlatform_8HRfDjnEQwfMAgrDXMQJq1\u002Fs_cpPlatform_8HRfDjnEQwfMAgrDXMQJq1.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F74\u002Fcpplatform_89u2rizpjmxrfszdig8ggb\u002Fs_cpplatform_89u2rizpjmxrfszdig8ggb1675842954.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F60\u002FYueWen_34355174\u002Fs_YueWen_34355174.jpg'
              ],
              bookTitles: ['国宝100（1-4卷）', '从新手到行家 : 水晶收藏与选购', '一本书读懂翡翠'],
              CategoryId: '400006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '鉴赏',
              recommend: '0',
              totalCount: 330,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F46\u002F3300010746\u002Fs_3300010746.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F17\u002Fcpplatform_66j37qu9ngqsqxqnyhu6nv\u002Fs_cpplatform_66j37qu9ngqsqxqnyhu6nv1676619591.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F705\u002F29348705\u002Fs_29348705.jpg'
              ],
              bookTitles: [
                '大话中国艺术史',
                '剑桥艺术史（共2册）',
                '现代艺术150年：一个未完成的故事'
              ],
              CategoryId: '400007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '理论',
              recommend: '0',
              totalCount: 824,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F797\u002F568797\u002Fs_568797.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F59\u002FYueWen_36744524\u002Fs_YueWen_36744524.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F70\u002Fcpplatform_rvmr71m9opeykvc3gowicy\u002Fs_cpplatform_rvmr71m9opeykvc3gowicy1698292026.jpg'
              ],
              bookTitles: [
                '故事：材质、结构、风格和银幕剧作的原理',
                '救猫咪：电影编剧指南',
                '不开玩笑：关于幽默、喜剧和脱口秀的严肃讨论'
              ],
              CategoryId: '400008',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '影视',
              recommend: '0',
              totalCount: 641,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F839\u002F40223839\u002Fs_40223839.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F42\u002F3300014442\u002Fs_3300014442.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F79\u002FYueWen_34354561\u002Fs_YueWen_34354561.jpg'
              ],
              bookTitles: ['新摄影笔记', '旅行之木', '摄影入门：人像摄影超简单'],
              CategoryId: '400009',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '摄影',
              recommend: '0',
              totalCount: 987,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F58\u002FYueWen_25736038\u002Fs_YueWen_25736038.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F3\u002Fcpplatform_evhknw4pfrlm3xn6q1rsbr\u002Fs_cpplatform_evhknw4pfrlm3xn6q1rsbr1713779330.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F227\u002F36090227\u002Fs_36090227.jpg'
              ],
              bookTitles: ['江湖丛谈（注音注释插图本）', '四时之外', '中国经典纹样图鉴'],
              CategoryId: '400010',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '民艺',
              recommend: '0',
              totalCount: 108,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002FYueWen_857353\u002Fs_YueWen_857353.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F18\u002FYueWen_907758\u002Fs_YueWen_907758.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F24\u002FcpPlatform_bYaQCECRD16G7weCgo4hmf\u002Fs_cpPlatform_bYaQCECRD16G7weCgo4hmf.jpg'
              ],
              bookTitles: [
                '设计心理学（1-4册）',
                '写给大家看的设计书（第4版）',
                '海报设计原理与实例解析——图形+字体+色彩+版式'
              ],
              CategoryId: '400012',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '设计',
              recommend: '0',
              totalCount: 578,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F414\u002F30627414\u002Fs_30627414.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F689\u002F43388689\u002Fs_43388689.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F699\u002F43388699\u002Fs_43388699.jpg'
              ],
              bookTitles: [
                '中国古典舞术语词典',
                '中国舞蹈通史（隋·唐·五代卷）',
                '中国舞蹈通史丛书（套装7册）'
              ],
              CategoryId: '400013',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '舞蹈',
              recommend: '0',
              totalCount: 59,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F633\u002F33907633\u002Fs_33907633.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F1\u002FYueWen_23741950\u002Fs_YueWen_23741950.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F841\u002F24981841\u002Fs_24981841.jpg'
              ],
              bookTitles: [
                '人人都该懂的古典音乐',
                '吉他自学一本通：120首弹唱曲超精选',
                '乐理自学从入门到精通'
              ],
              CategoryId: '400014',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '400000',
              parentCategoryTitle: '艺术',
              title: '音乐',
              recommend: '0',
              totalCount: 1123,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F48\u002F674048\u002Fs_674048.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F23\u002Fyuewen_23774475\u002Fs_yuewen_237744751687158200.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F37\u002Fcpplatform_gmaqcuuuamjkvu7knomjim\u002Fs_cpplatform_gmaqcuuuamjkvu7knomjim1703077934.jpg'
          ],
          bookTitles: ['邓小平时代', '曾国藩传（张宏杰全新增补版）', '埃隆·马斯克传'],
          CategoryId: '500000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '人物传记',
          title: '人物传记',
          recommend: '0',
          totalCount: 6189,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F37\u002Fcpplatform_gmaqcuuuamjkvu7knomjim\u002Fs_cpplatform_gmaqcuuuamjkvu7knomjim1703077934.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002FYueWen_635722\u002Fs_YueWen_635722.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F728\u002F815728\u002Fs_815728.jpg'
              ],
              bookTitles: [
                '埃隆·马斯克传',
                '史蒂夫·乔布斯传（修订版）',
                '硅谷钢铁侠：埃隆·马斯克的冒险人生'
              ],
              CategoryId: '500001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '财经人物',
              recommend: '0',
              totalCount: 892,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F15\u002FYueWen_35992971\u002Fs_YueWen_35992971.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F7\u002F31934007\u002Fs_31934007.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F66\u002FYueWen_36968035\u002Fs_YueWen_36968035.jpg'
              ],
              bookTitles: ['我的前半生（全本）', '人生由我', '成为波伏瓦'],
              CategoryId: '500002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '传记综合',
              recommend: '0',
              totalCount: 1248,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F48\u002F674048\u002Fs_674048.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F74\u002FYueWen_23640906\u002Fs_YueWen_23640906.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F910\u002F785910\u002Fs_785910.jpg'
              ],
              bookTitles: ['邓小平时代', '毛泽东传（全6卷）', '毛泽东传：名著珍藏版（插图本）'],
              CategoryId: '500003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '军政领袖',
              recommend: '0',
              totalCount: 1089,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F42\u002Fcpplatform_5djneycsa7xh9wk8atti4s\u002Fs_cpplatform_5djneycsa7xh9wk8atti4s1693367667.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F21\u002FYueWen_26062915\u002Fs_YueWen_26062915.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F63\u002Fcpplatform_3rqixadyy7cfvzg5rqcmkb\u002Fs_cpplatform_3rqixadyy7cfvzg5rqcmkb1689583107.jpg'
              ],
              bookTitles: [
                '奥本海默传（诺兰导演电影《奥本海默》 灵感来源、普利策奖获奖传记）',
                '走近费曼丛书：别逗了，费曼先生！',
                '走近钱学森2019'
              ],
              CategoryId: '500004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '科学家',
              recommend: '0',
              totalCount: 295,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F23\u002Fyuewen_23774475\u002Fs_yuewen_237744751687158200.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F2\u002Fyuewen_33638775\u002Fs_yuewen_336387751685962456.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F820\u002F841820\u002Fs_841820.jpg'
              ],
              bookTitles: ['曾国藩传（张宏杰全新增补版）', '苏东坡新传', '苏东坡传（纪念典藏版）'],
              CategoryId: '500005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '历史人物',
              recommend: '0',
              totalCount: 1158,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F315\u002F33276315\u002Fs_33276315.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F0\u002Fcpplatform_vd9z1ybdurasu4467rnp87\u002Fs_cpplatform_vd9z1ybdurasu4467rnp871686812083.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F38\u002FcpPlatform_pwL5jXKsZCuttJVLEansau\u002Fs_cpPlatform_pwL5jXKsZCuttJVLEansau.jpg'
              ],
              bookTitles: [
                '杨绛传：生活不易，保持优雅',
                '我是落花生的女儿（微信读书联合出品）',
                '一百年，许多人，许多事：杨苡口述自传'
              ],
              CategoryId: '500006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '女性人物',
              recommend: '0',
              totalCount: 469,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F820\u002F841820\u002Fs_841820.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F626\u002F858626\u002Fs_858626.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002FYueWen_26278269\u002Fs_YueWen_26278269.jpg'
              ],
              bookTitles: ['苏东坡传（纪念典藏版）', '我们仨', '苏轼传'],
              CategoryId: '500007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '文学家',
              recommend: '0',
              totalCount: 666,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F60\u002Fcpplatform_kebswcbzathxuss3ryj4nz\u002Fs_cpplatform_kebswcbzathxuss3ryj4nz1679634367.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002FYueWen_932993\u002Fs_YueWen_932993.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F48\u002Fcpplatform_tjncqabkq1hck47aq9ofpx\u002Fs_cpplatform_tjncqabkq1hck47aq9ofpx1679634329.jpg'
              ],
              bookTitles: [
                '十三邀：我们时代的头脑与心灵 （全四辑）',
                '维特根斯坦传：天才之为责任',
                '十三邀3：我们都在给大问题做注脚'
              ],
              CategoryId: '500008',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '学者',
              recommend: '0',
              totalCount: 294,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F29\u002Fcpplatform_6vggehychiahchtyv7b5md\u002Fs_cpplatform_6vggehychiahchtyv7b5md1703151401.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F55\u002Fyuewen_26776210\u002Fs_yuewen_267762101704855900.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F27\u002FYueWen_22902882\u002Fs_YueWen_22902882.jpg'
              ],
              bookTitles: [
                '我还能看到多少次满月升起',
                '十年一觉电影梦：李安传',
                '列奥纳多·达·芬奇传'
              ],
              CategoryId: '500009',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '艺术家',
              recommend: '0',
              totalCount: 297,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F85\u002FYueWen_26687703\u002Fs_YueWen_26687703.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002Fcpplatform_u4ey5ypenbyj5vqwn8wsud\u002Fs_cpplatform_u4ey5ypenbyj5vqwn8wsud1689677092.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F55\u002Fyuewen_26776210\u002Fs_yuewen_267762101704855900.jpg'
              ],
              bookTitles: ['过得刚好（2019新版）', '绿灯', '十年一觉电影梦：李安传'],
              CategoryId: '500010',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '500000',
              parentCategoryTitle: '人物传记',
              title: '娱乐明星',
              recommend: '0',
              totalCount: 119,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F50\u002FYueWen_832038\u002Fs_YueWen_832038.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F44\u002FYueWen_26187491\u002Fs_YueWen_26187491.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F997\u002F853997\u002Fs_853997.jpg'
          ],
          bookTitles: ['道德经', '了凡四训（详解版）', '传习录'],
          CategoryId: '600000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '哲学宗教',
          title: '哲学宗教',
          recommend: '0',
          totalCount: 6168,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F44\u002FYueWen_26187491\u002Fs_YueWen_26187491.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F997\u002F853997\u002Fs_853997.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F509\u002F413509\u002Fs_413509.jpg'
              ],
              bookTitles: ['了凡四训（详解版）', '传习录', '知行合一王阳明'],
              CategoryId: '600001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '东方哲学',
              recommend: '0',
              totalCount: 1669,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F50\u002Fcpplatform_ewywhpd6pjay2dmwrqpf6t\u002Fs_cpplatform_ewywhpd6pjay2dmwrqpf6t1709786156.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F88\u002Fcpplatform_frfogtd37jk7cm7s5ndpoe\u002Fs_cpplatform_frfogtd37jk7cm7s5ndpoe1705302097.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F66\u002Fyuewen_22728513\u002Fs_yuewen_227285131711959000.jpg'
              ],
              bookTitles: [
                '人生总会有答案',
                '自渡：真希望你能好好爱自己',
                '你要如何衡量你的人生：舒适阅读版'
              ],
              CategoryId: '600002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '伦理学',
              recommend: '0',
              totalCount: 389,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F95\u002Fcpplatform_u4p5habtcaxxjanfqnmvwy\u002Fs_cpplatform_u4p5habtcaxxjanfqnmvwy1676355720.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F79\u002FYueWen_34916572\u002Fs_YueWen_34916572.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F45\u002Fcpplatform_ktzrcrwh9ftrdgiu2sxkrm\u002Fs_cpplatform_ktzrcrwh9ftrdgiu2sxkrm1684812979.jpg'
              ],
              bookTitles: [
                '逻辑学导论（第15版）',
                '麦肯锡结构化战略思维：如何想清楚、说明白、做到位',
                '简单的逻辑学（新版）'
              ],
              CategoryId: '600003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '逻辑学',
              recommend: '0',
              totalCount: 259,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F47\u002FcpPlatform_44rHTS2UJBGBnBtLGnyT1X\u002Fs_cpPlatform_44rHTS2UJBGBnBtLGnyT1X.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002FYueWen_920939\u002Fs_YueWen_920939.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F62\u002F3300018362\u002Fs_3300018362.jpg'
              ],
              bookTitles: [
                '资本论（纪念版）全三卷',
                '资本论（超值白金版）',
                '辩证唯物主义历史唯物主义'
              ],
              CategoryId: '600004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '马克思哲学',
              recommend: '0',
              totalCount: 312,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F996\u002F32512996\u002Fs_32512996.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F45\u002Fyuewen_32282970\u002Fs_yuewen_322829701676968797.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F35\u002FYueWen_24272622\u002Fs_YueWen_24272622.jpg'
              ],
              bookTitles: ['谈美', '美学散步', '美学原理'],
              CategoryId: '600005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '美学',
              recommend: '0',
              totalCount: 163,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F50\u002Fcpplatform_ohulsqfabtcppehqdqtmcr\u002Fs_cpplatform_ohulsqfabtcppehqdqtmcr1696758968.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F86\u002Fcpplatform_mrnm9vtecf11tm8wr7xowq\u002Fs_cpplatform_mrnm9vtecf11tm8wr7xowq1697016056.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F571\u002F29636571\u002Fs_29636571.jpg'
              ],
              bookTitles: [
                '强者思维',
                '为自己思考:终身成长的底层逻辑',
                '思辨与立场：生活中无处不在的批判性思维工具'
              ],
              CategoryId: '600006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '思维科学',
              recommend: '0',
              totalCount: 174,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F7\u002FYueWen_27689995\u002Fs_YueWen_27689995.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002FYueWen_934369\u002Fs_YueWen_934369.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002FYueWen_42724927\u002Fs_YueWen_42724927.jpg'
              ],
              bookTitles: ['查拉图斯特拉如是说', '第二性（合卷本）', '西方哲学史讲演录'],
              CategoryId: '600007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '西方哲学',
              recommend: '0',
              totalCount: 799,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F54\u002Fcpplatform_obkjf43i4vrtxl5cpu5yqw\u002Fs_cpplatform_obkjf43i4vrtxl5cpu5yqw1702353850.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F10\u002F3300013610\u002Fs_3300013610.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F10\u002Fcpplatform_wjsj7tkn9mfdcp3zvsckqc\u002Fs_cpplatform_wjsj7tkn9mfdcp3zvsckqc1713507112.jpg'
              ],
              bookTitles: [
                '慢读《庄子》（微信读书出品）',
                '哲学家们都干了些什么？ （修订版）',
                '一读就懂的鬼谷子'
              ],
              CategoryId: '600008',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '哲学读物',
              recommend: '0',
              totalCount: 663,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F50\u002FYueWen_832038\u002Fs_YueWen_832038.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F341\u002F25445341\u002Fs_25445341.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F78\u002FYueWen_620376\u002Fs_YueWen_620376.jpg'
              ],
              bookTitles: ['道德经', '道德经（中华国学经典精粹）', '王阳明心学全书'],
              CategoryId: '600009',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '哲学著作',
              recommend: '0',
              totalCount: 612,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F87\u002FYueWen_22791651\u002Fs_YueWen_22791651.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F553\u002F917553\u002Fs_917553.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F123\u002F27563123\u002Fs_27563123.jpg'
              ],
              bookTitles: ['《金刚经》说什么', '次第花开（2017修订新版）', '金刚经说什么'],
              CategoryId: '600010',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '600000',
              parentCategoryTitle: '哲学宗教',
              title: '宗教',
              recommend: '0',
              totalCount: 1212,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F8\u002FYueWen_22806930\u002Fs_YueWen_22806930.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F94\u002F36213094\u002Fs_36213094.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F90\u002FYueWen_34336681\u002Fs_YueWen_34336681.jpg'
          ],
          bookTitles: ['Python编程：从入门到实践', 'AI 3.0', 'Python编程：从入门到实践（第2版）'],
          CategoryId: '700000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '计算机',
          title: '计算机',
          recommend: '0',
          totalCount: 10951,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002FcpPlatform_kmqPY1boCDVyMxq2AvPdCY\u002Fs_cpPlatform_kmqPY1boCDVyMxq2AvPdCY.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F654\u002F30915654\u002Fs_30915654.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002Fcpplatform_9qo7wsboy6dnxbfsmkgt57\u002Fs_cpplatform_9qo7wsboy6dnxbfsmkgt571680520804.jpg'
              ],
              bookTitles: [
                'Vue.js设计与实现',
                '和秋叶一起学Excel（第2版）',
                'BERT基础教程：Transformer大模型实战'
              ],
              CategoryId: '700001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '700000',
              parentCategoryTitle: '计算机',
              title: '软件学习',
              recommend: '0',
              totalCount: 1676,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F8\u002FYueWen_22806930\u002Fs_YueWen_22806930.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F90\u002FYueWen_34336681\u002Fs_YueWen_34336681.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F910\u002F22806910\u002Fs_22806910.jpg'
              ],
              bookTitles: [
                'Python编程：从入门到实践',
                'Python编程：从入门到实践（第2版）',
                '流畅的Python'
              ],
              CategoryId: '700002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '700000',
              parentCategoryTitle: '计算机',
              title: '编程设计',
              recommend: '0',
              totalCount: 4101,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F38\u002Fyuewen_33692210\u002Fs_yuewen_336922101681461600.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F38\u002FYueWen_655484\u002Fs_YueWen_655484.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F71\u002FYueWen_30179184\u002Fs_YueWen_30179184.jpg'
              ],
              bookTitles: ['架构整洁之道', '计算机网络', '操作系统导论'],
              CategoryId: '700003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '700000',
              parentCategoryTitle: '计算机',
              title: '计算机综合',
              recommend: '0',
              totalCount: 2434,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F41\u002FYueWen_37669248\u002Fs_YueWen_37669248.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F23\u002Fcpplatform_hvupu9bwjq9xnl9svb7dpk\u002Fs_cpplatform_hvupu9bwjq9xnl9svb7dpk1684830848.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F41\u002FYueWen_907760\u002Fs_YueWen_907760.jpg'
              ],
              bookTitles: [
                '嵌入式C语言自我修养：从芯片、编译器到操作系统',
                '普林斯顿计算机公开课（原书第2版）',
                '计算机是怎样跑起来的'
              ],
              CategoryId: '700004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '700000',
              parentCategoryTitle: '计算机',
              title: '理论知识',
              recommend: '0',
              totalCount: 1304,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F94\u002F36213094\u002Fs_36213094.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F92\u002FYueWen_23637052\u002Fs_YueWen_23637052.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002F3300018231\u002Fs_3300018231.jpg'
              ],
              bookTitles: [
                'AI 3.0',
                '智慧的疆界：从图灵机到人工智能',
                'AI未来进行式（李开复陈楸帆新书）'
              ],
              CategoryId: '700005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '700000',
              parentCategoryTitle: '计算机',
              title: '人工智能',
              recommend: '0',
              totalCount: 497,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F685\u002F34336685\u002Fs_34336685.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F44\u002FYueWen_907763\u002Fs_YueWen_907763.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F5\u002FcpPlatform_tpeiJyaZriAkSeauDycVY8\u002Fs_cpPlatform_tpeiJyaZriAkSeauDycVY8.jpg'
              ],
              bookTitles: ['SQL必知必会（第5版）', '精益数据分析', '高性能MySQL（第4版）'],
              CategoryId: '700006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '700000',
              parentCategoryTitle: '计算机',
              title: '数据库',
              recommend: '0',
              totalCount: 575,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F626\u002F41807626\u002Fs_41807626.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002FcpPlatform_be4iaeQ1L9XsHbZL4zMZW9\u002Fs_cpPlatform_be4iaeQ1L9XsHbZL4zMZW9.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F582\u002F36687582\u002Fs_36687582.jpg'
              ],
              bookTitles: [
                '轻松玩转手机短视频：视频拍摄与剪辑必学的7堂课',
                'Photoshop 2022从入门到精通',
                '摄影师的后期课：Lightroom后期技法篇（修订版）'
              ],
              CategoryId: '700007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '700000',
              parentCategoryTitle: '计算机',
              title: '图像视频',
              recommend: '0',
              totalCount: 376,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F86\u002FYueWen_33628204\u002Fs_YueWen_33628204.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F385\u002F25615385\u002Fs_25615385.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F81\u002FYueWen_35551088\u002Fs_YueWen_35551088.jpg'
          ],
          bookTitles: [
            '认知觉醒：开启自我改变的原动力',
            '被讨厌的勇气：“自我启发之父”阿德勒的哲学课',
            '蛤蟆先生去看心理医生'
          ],
          CategoryId: '800000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '心理',
          title: '心理',
          recommend: '0',
          totalCount: 4257,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F385\u002F25615385\u002Fs_25615385.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F73\u002Fcpplatform_333k5xdpfqutmr9xflkf7w\u002Fs_cpplatform_333k5xdpfqutmr9xflkf7w1681817760.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F10\u002FcpPlatform_g2goG4PupEn6bGnzrLrK4a\u002Fs_cpPlatform_g2goG4PupEn6bGnzrLrK4a.jpg'
              ],
              bookTitles: [
                '被讨厌的勇气：“自我启发之父”阿德勒的哲学课',
                '为什么我们总是在防御',
                '5%的改变'
              ],
              CategoryId: '800001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '800000',
              parentCategoryTitle: '心理',
              title: '积极心理学',
              recommend: '0',
              totalCount: 266,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F41\u002FYueWen_41504771\u002Fs_YueWen_41504771.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F87\u002Fcpplatform_43qcgdhifxnzixexv7bekp\u002Fs_cpplatform_43qcgdhifxnzixexv7bekp1698825144.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002Fcpplatform_5ymqicbxabhtt9j8vkbswr\u002Fs_cpplatform_5ymqicbxabhtt9j8vkbswr1681107402.jpg'
              ],
              bookTitles: ['影响力（全新升级版）', '深度关系', '社会心理学（第11版）'],
              CategoryId: '800002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '800000',
              parentCategoryTitle: '心理',
              title: '社会心理学',
              recommend: '0',
              totalCount: 348,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F86\u002FYueWen_33628204\u002Fs_YueWen_33628204.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F88\u002FYueWen_40649986\u002Fs_YueWen_40649986.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002Fcpplatform_1zvt94nzygbjgsfmuw3oyq\u002Fs_cpplatform_1zvt94nzygbjgsfmuw3oyq1715681609.jpg'
              ],
              bookTitles: [
                '认知觉醒：开启自我改变的原动力',
                '认知驱动：做成一件对他人很有用的事',
                '我想太多啦：高敏感人更容易成功'
              ],
              CategoryId: '800003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '800000',
              parentCategoryTitle: '心理',
              title: '认知与行为',
              recommend: '0',
              totalCount: 524,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F799\u002F855799\u002Fs_855799.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F446\u002F831446\u002Fs_831446.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F979\u002F651979\u002Fs_651979.jpg'
              ],
              bookTitles: ['当尼采哭泣', '自卑与超越', '乌合之众'],
              CategoryId: '800004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '800000',
              parentCategoryTitle: '心理',
              title: '心理学研究',
              recommend: '0',
              totalCount: 1034,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F81\u002FYueWen_35551088\u002Fs_YueWen_35551088.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F63\u002FYueWen_40726710\u002Fs_YueWen_40726710.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F89\u002Fcpplatform_5m7j6mw2t6q8xamtgbr4eh\u002Fs_cpplatform_5m7j6mw2t6q8xamtgbr4eh1675067330.jpg'
              ],
              bookTitles: ['蛤蟆先生去看心理医生', '也许你该找个人聊聊', '不原谅也没关系'],
              CategoryId: '800005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '800000',
              parentCategoryTitle: '心理',
              title: '心理学应用',
              recommend: '0',
              totalCount: 1596,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F50\u002FYueWen_41599909\u002Fs_YueWen_41599909.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F242\u002F22620242\u002Fs_22620242.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F732\u002F23921732\u002Fs_23921732.jpg'
              ],
              bookTitles: [
                '心理抚养',
                '原生家庭：如何修补自己的性格缺陷',
                '先学会爱自己，再遇见对的你'
              ],
              CategoryId: '800006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '800000',
              parentCategoryTitle: '心理',
              title: '发展心理学',
              recommend: '0',
              totalCount: 408,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F24\u002F3300014124\u002Fs_3300014124.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F288\u002F915288\u002Fs_915288.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F636\u002F35034636\u002Fs_35034636.jpg'
              ],
              bookTitles: ['亲密关系（第6版）', '亲密关系', '分手心理学'],
              CategoryId: '800007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '800000',
              parentCategoryTitle: '心理',
              title: '亲密关系',
              recommend: '0',
              totalCount: 88,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002F3300012940\u002Fs_3300012940.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F597\u002F34618597\u002Fs_34618597.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002Fcpplatform_akrjnymgoxljkqszganvbx\u002Fs_cpplatform_akrjnymgoxljkqszganvbx1682248200.jpg'
          ],
          bookTitles: ['法治的细节', '哈佛经典谈判术：你一开口就赢麻了', '厌女（增订本）'],
          CategoryId: '900000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '社会文化',
          title: '社会文化',
          recommend: '0',
          totalCount: 22288,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002F3300012940\u002Fs_3300012940.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F732\u002F40457732\u002Fs_40457732.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F54\u002Fcpplatform_1ydw8anxf82fwzbqszy5zl\u002Fs_cpplatform_1ydw8anxf82fwzbqszy5zl1702007095.jpg'
              ],
              bookTitles: ['法治的细节', '圆圈正义：作为自由前提的信念', '法律的悖论'],
              CategoryId: '900001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '900000',
              parentCategoryTitle: '社会文化',
              title: '法律',
              recommend: '0',
              totalCount: 11442,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F597\u002F34618597\u002Fs_34618597.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002Fcpplatform_akrjnymgoxljkqszganvbx\u002Fs_cpplatform_akrjnymgoxljkqszganvbx1682248200.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F99\u002FYueWen_42766048\u002Fs_YueWen_42766048.jpg'
              ],
              bookTitles: [
                '哈佛经典谈判术：你一开口就赢麻了',
                '厌女（增订本）',
                '枪炮、病菌与钢铁'
              ],
              CategoryId: '900002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '900000',
              parentCategoryTitle: '社会文化',
              title: '社科',
              recommend: '0',
              totalCount: 5907,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F83\u002FYueWen_23364890\u002Fs_YueWen_23364890.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F288\u002F609288\u002Fs_609288.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F412\u002F41101412\u002Fs_41101412.jpg'
              ],
              bookTitles: ['中国古代文化常识', '菊与刀', '半小时漫画《论语》'],
              CategoryId: '900003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '900000',
              parentCategoryTitle: '社会文化',
              title: '文化',
              recommend: '0',
              totalCount: 4942,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002Fcpplatform_sroogvqrrthwejxvf1q3o4\u002Fs_cpplatform_sroogvqrrthwejxvf1q3o41712138611.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002FYueWen_522205\u002Fs_YueWen_522205.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F2\u002FYueWen_848673\u002Fs_YueWen_848673.jpg'
          ],
          bookTitles: ['我的外婆，从不内耗', '人性的弱点', '当下的力量（白金版）'],
          CategoryId: '1000000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '个人成长',
          title: '个人成长',
          recommend: '0',
          totalCount: 13603,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002FYueWen_522205\u002Fs_YueWen_522205.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F68\u002FYueWen_39980443\u002Fs_YueWen_39980443.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F28\u002F3300020528\u002Fs_3300020528.jpg'
              ],
              bookTitles: ['人性的弱点', '学会提问（原书第12版）', '金字塔原理大全集'],
              CategoryId: '1000001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1000000',
              parentCategoryTitle: '个人成长',
              title: '沟通表达',
              recommend: '0',
              totalCount: 2203,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002FYueWen_522205\u002Fs_YueWen_522205.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F2\u002FYueWen_848673\u002Fs_YueWen_848673.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F82\u002Fcpplatform_eeo9bwj2rq64ngaonomxjb\u002Fs_cpplatform_eeo9bwj2rq64ngaonomxjb1715239404.jpg'
              ],
              bookTitles: ['人性的弱点', '当下的力量（白金版）', '更重要的是过好今天'],
              CategoryId: '1000002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1000000',
              parentCategoryTitle: '个人成长',
              title: '励志成长',
              recommend: '0',
              totalCount: 2647,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F73\u002Fcpplatform_333k5xdpfqutmr9xflkf7w\u002Fs_cpplatform_333k5xdpfqutmr9xflkf7w1681817760.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F33\u002FcpPlatform_mqsLSa68EEjZSSekrNZabj\u002Fs_cpPlatform_mqsLSa68EEjZSSekrNZabj.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F66\u002FYueWen_918574\u002Fs_YueWen_918574.jpg'
              ],
              bookTitles: ['为什么我们总是在防御', '每一天爱自己', '高情商聊天术'],
              CategoryId: '1000003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1000000',
              parentCategoryTitle: '个人成长',
              title: '情绪心灵',
              recommend: '0',
              totalCount: 1648,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002Fcpplatform_sroogvqrrthwejxvf1q3o4\u002Fs_cpplatform_sroogvqrrthwejxvf1q3o41712138611.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F2\u002FYueWen_848673\u002Fs_YueWen_848673.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F61\u002Fcpplatform_uctbsatl5apnrnwnwd8qhq\u002Fs_cpplatform_uctbsatl5apnrnwnwd8qhq1715163423.jpg'
              ],
              bookTitles: ['我的外婆，从不内耗', '当下的力量（白金版）', '微习惯：人生气场修改术'],
              CategoryId: '1000004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1000000',
              parentCategoryTitle: '个人成长',
              title: '人生哲学',
              recommend: '0',
              totalCount: 3580,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F17\u002FcpPlatform_egU2PohQZzEn8dQu5dYEWj\u002Fs_cpPlatform_egU2PohQZzEn8dQu5dYEWj.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F21\u002FcpPlatform_jDtz7hz9N3V83QemKWcKA6\u002Fs_cpPlatform_jDtz7hz9N3V83QemKWcKA6.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F19\u002Fcpplatform_5tq5brurtshbdyuvh3q6hy\u002Fs_cpplatform_5tq5brurtshbdyuvh3q6hy1692944233.jpg'
              ],
              bookTitles: [
                '我不是教你诈',
                '老夏说公务员面试：100真题摆平面试',
                '把时间当作朋友（第4版）'
              ],
              CategoryId: '1000005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1000000',
              parentCategoryTitle: '个人成长',
              title: '人在职场',
              recommend: '0',
              totalCount: 1491,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F95\u002FYueWen_843464\u002Fs_YueWen_843464.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F86\u002FYueWen_573975\u002Fs_YueWen_573975.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F44\u002Fyuewen_908306\u002Fs_yuewen_9083061713426000.jpg'
              ],
              bookTitles: ['刻意练习：如何从新手到大师', '思考，快与慢', '如何成为一个有趣的人'],
              CategoryId: '1000006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1000000',
              parentCategoryTitle: '个人成长',
              title: '认知思维',
              recommend: '0',
              totalCount: 1131,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F315\u002F33276315\u002Fs_33276315.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F95\u002FYueWen_40133507\u002Fs_YueWen_40133507.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F0\u002Fcpplatform_vd9z1ybdurasu4467rnp87\u002Fs_cpplatform_vd9z1ybdurasu4467rnp871686812083.jpg'
              ],
              bookTitles: [
                '杨绛传：生活不易，保持优雅',
                '基层女性',
                '我是落花生的女儿（微信读书联合出品）'
              ],
              CategoryId: '1000007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1000000',
              parentCategoryTitle: '个人成长',
              title: '女性成长',
              recommend: '0',
              totalCount: 1016,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F52\u002FYueWen_40055543\u002Fs_YueWen_40055543.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F89\u002FYueWen_44026191\u002Fs_YueWen_44026191.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F68\u002FYueWen_23601930\u002Fs_YueWen_23601930.jpg'
          ],
          bookTitles: ['置身事内：中国政府与经济发展', '纳瓦尔宝典', '富爸爸穷爸爸'],
          CategoryId: '1100000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '经济理财',
          title: '经济理财',
          recommend: '0',
          totalCount: 25040,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F52\u002FYueWen_40055543\u002Fs_YueWen_40055543.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F92\u002FYueWen_800224\u002Fs_YueWen_800224.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F985\u002F650985\u002Fs_650985.jpg'
              ],
              bookTitles: ['置身事内：中国政府与经济发展', '货币战争（全5册）', '国富论'],
              CategoryId: '1100001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1100000',
              parentCategoryTitle: '经济理财',
              title: '财经',
              recommend: '0',
              totalCount: 12322,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F18\u002Fcpplatform_4rn7tgcf8lnc1sszpsp2up\u002Fs_cpplatform_4rn7tgcf8lnc1sszpsp2up1715913170.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F22\u002FYueWen_35138325\u002Fs_YueWen_35138325.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F47\u002FYueWen_25242026\u002Fs_YueWen_25242026.jpg'
              ],
              bookTitles: [
                '重组与突破',
                '冯唐成事心法',
                '我曾走在崩溃的边缘：俞敏洪亲述新东方创业发展之路'
              ],
              CategoryId: '1100002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1100000',
              parentCategoryTitle: '经济理财',
              title: '管理',
              recommend: '0',
              totalCount: 6208,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F89\u002FYueWen_44026191\u002Fs_YueWen_44026191.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F68\u002FYueWen_23601930\u002Fs_YueWen_23601930.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F37\u002Fyuewen_847121\u002Fs_yuewen_8471211688369700.jpg'
              ],
              bookTitles: ['纳瓦尔宝典', '富爸爸穷爸爸', '告别百年激进'],
              CategoryId: '1100003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1100000',
              parentCategoryTitle: '经济理财',
              title: '理财',
              recommend: '0',
              totalCount: 1802,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002F3300024931\u002Fs_3300024931.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002FYueWen_635722\u002Fs_YueWen_635722.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F728\u002F815728\u002Fs_815728.jpg'
              ],
              bookTitles: [
                '小米创业思考',
                '史蒂夫·乔布斯传（修订版）',
                '硅谷钢铁侠：埃隆·马斯克的冒险人生'
              ],
              CategoryId: '1100004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1100000',
              parentCategoryTitle: '经济理财',
              title: '商业',
              recommend: '0',
              totalCount: 4742,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002F3300024284\u002Fs_3300024284.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F48\u002F674048\u002Fs_674048.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002Fyuewen_569759\u002Fs_yuewen_5697591675254639.jpg'
          ],
          bookTitles: ['毛泽东选集（全四卷）', '邓小平时代', '华杉讲透《孙子兵法》'],
          CategoryId: '1200000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '政治军事',
          title: '政治军事',
          recommend: '0',
          totalCount: 8164,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002Fyuewen_569759\u002Fs_yuewen_5697591675254639.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F92\u002Fcpplatform_kyzphube6qpxj1uufp7ggx\u002Fs_cpplatform_kyzphube6qpxj1uufp7ggx1676858308.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F41\u002Fcpplatform_fsamwanfq1b8rgtgsjhipy\u002Fs_cpplatform_fsamwanfq1b8rgtgsjhipy1715307908.jpg'
              ],
              bookTitles: ['华杉讲透《孙子兵法》', '毛泽东与蒋介石', '一读就懂的孙子兵法'],
              CategoryId: '1200001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1200000',
              parentCategoryTitle: '政治军事',
              title: '军事',
              recommend: '0',
              totalCount: 1526,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002F3300024284\u002Fs_3300024284.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F48\u002F674048\u002Fs_674048.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F54\u002Fyuewen_23523072\u002Fs_yuewen_235230721689681600.jpg'
              ],
              bookTitles: ['毛泽东选集（全四卷）', '邓小平时代', '中国历代政治得失'],
              CategoryId: '1200002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1200000',
              parentCategoryTitle: '政治军事',
              title: '政治',
              recommend: '0',
              totalCount: 6646,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F38\u002Fcpplatform_t4zsfwx1bkwncnxi9svteu\u002Fs_cpplatform_t4zsfwx1bkwncnxi9svteu1699928940.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_22720170\u002Fs_YueWen_22720170.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F535\u002F917535\u002Fs_917535.jpg'
          ],
          bookTitles: ['青铜葵花', '小王子（英文版）', '柳林风声'],
          CategoryId: '1300000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '童书',
          title: '童书',
          recommend: '0',
          totalCount: 9169,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F38\u002Fcpplatform_t4zsfwx1bkwncnxi9svteu\u002Fs_cpplatform_t4zsfwx1bkwncnxi9svteu1699928940.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_22720170\u002Fs_YueWen_22720170.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F535\u002F917535\u002Fs_917535.jpg'
              ],
              bookTitles: ['青铜葵花', '小王子（英文版）', '柳林风声'],
              CategoryId: '1300001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1300000',
              parentCategoryTitle: '童书',
              title: '儿童文学',
              recommend: '0',
              totalCount: 6875,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F728\u002F817728\u002Fs_817728.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F69\u002FYueWen_37349221\u002Fs_YueWen_37349221.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002Fcpplatform_uqvttbwtgtg1bn2n9vfbiq\u002Fs_cpplatform_uqvttbwtgtg1bn2n9vfbiq1685007190.jpg'
              ],
              bookTitles: ['父与子', '神探狗狗1', '酷虫学校·昆虫科普爆笑校园故事(18册)'],
              CategoryId: '1300002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1300000',
              parentCategoryTitle: '童书',
              title: '漫画卡通',
              recommend: '0',
              totalCount: 254,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F47\u002FYueWen_23869148\u002Fs_YueWen_23869148.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F965\u002F25941965\u002Fs_25941965.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F70\u002FYueWen_23869150\u002Fs_YueWen_23869150.jpg'
              ],
              bookTitles: [
                '美国少儿英语（英文彩色插图版）（第二辑·套装共3册）',
                '我带孩子学英语：英语小达人训练手册',
                '美国少儿英语（英文彩色插图版）（第二辑·第1册）'
              ],
              CategoryId: '1300003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1300000',
              parentCategoryTitle: '童书',
              title: '少儿英语',
              recommend: '0',
              totalCount: 185,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F34\u002FYueWen_32858446\u002Fs_YueWen_32858446.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F5\u002FYueWen_32858438\u002Fs_YueWen_32858438.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F1\u002FYueWen_32858434\u002Fs_YueWen_32858434.jpg'
              ],
              bookTitles: [
                '西游记（小学生无障碍阅读版）',
                '红楼梦（青少年无障碍阅读版）',
                '水浒传（青少年无障碍阅读版）'
              ],
              CategoryId: '1300004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1300000',
              parentCategoryTitle: '童书',
              title: '幼儿启蒙',
              recommend: '0',
              totalCount: 1777,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F13\u002Fcpplatform_hzkwe9q1u13x24vpeknd5t\u002Fs_cpplatform_hzkwe9q1u13x24vpeknd5t1673425854.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F17\u002Fcpplatform_jovwhsjkmjksgsga3oenth\u002Fs_cpplatform_jovwhsjkmjksgsga3oenth1714030263.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F483\u002F40442483\u002Fs_40442483.jpg'
              ],
              bookTitles: ['我的世界·百科图鉴', '好的爱，有边界', '跟大师来读书：我的读书方法'],
              CategoryId: '1300005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1300000',
              parentCategoryTitle: '童书',
              title: '阅读工具书',
              recommend: '0',
              totalCount: 86,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F44\u002FYueWen_33140005\u002Fs_YueWen_33140005.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F51\u002Fcpplatform_59zd8bsvew2haapnupon1r\u002Fs_cpplatform_59zd8bsvew2haapnupon1r1694596495.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F2\u002FYueWen_40401050\u002Fs_YueWen_40401050.jpg'
          ],
          bookTitles: ['真希望我父母读过这本书', '看见孩子', '海底两万里'],
          CategoryId: '1400000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '教育学习',
          title: '教育学习',
          recommend: '0',
          totalCount: 24267,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F630\u002F32637630\u002Fs_32637630.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F79\u002F29630079\u002Fs_29630079.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F99\u002F3300016799\u002Fs_3300016799.jpg'
              ],
              bookTitles: ['把你的英语用起来（2020版）', '子弹笔记', '你还敢说单词难背？'],
              CategoryId: '1400001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1400000',
              parentCategoryTitle: '教育学习',
              title: '工具书',
              recommend: '0',
              totalCount: 349,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F2\u002FYueWen_40401050\u002Fs_YueWen_40401050.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F19\u002Fcpplatform_fcjvinvsndgobwy3xjf1lk\u002Fs_cpplatform_fcjvinvsndgobwy3xjf1lk1673405925.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F48\u002Fcpplatform_1w2k22rtfbihzszieh1ev4\u002Fs_cpplatform_1w2k22rtfbihzszieh1ev41673580986.jpg'
              ],
              bookTitles: [
                '海底两万里',
                '中医基础理论（全国中医药行业高等教育“十四五”规划教材）',
                '方剂学（全国中医药行业高等教育“十四五”规划教材）（供中医学、针灸推拿学、中西医临床医学、中药学等专业用）'
              ],
              CategoryId: '1400002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1400000',
              parentCategoryTitle: '教育学习',
              title: '教材',
              recommend: '0',
              totalCount: 8736,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F97\u002Fcpplatform_5txjkz3bgnbwaapw2icnnt\u002Fs_cpplatform_5txjkz3bgnbwaapw2icnnt1695888230.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F71\u002Fcpplatform_aftwrezfyfjnrtaahokipe\u002Fs_cpplatform_aftwrezfyfjnrtaahokipe1685436175.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F810\u002F23723810\u002Fs_23723810.jpg'
              ],
              bookTitles: [
                '海绵阅读法：如何吸收一本书的精华',
                '金榜题名之后：大学生出路分化之谜',
                '如何阅读一本书'
              ],
              CategoryId: '1400003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1400000',
              parentCategoryTitle: '教育学习',
              title: '教育',
              recommend: '0',
              totalCount: 5198,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F19\u002FYueWen_933598\u002Fs_YueWen_933598.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F318\u002F27049318\u002Fs_27049318.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F666\u002F26125666\u002Fs_26125666.jpg'
              ],
              bookTitles: [
                '六级口语考试指南与强化训练',
                '曼昆《经济学原理（微观经济学分册）》（第7版）复习全书【核心讲义＋模拟试题详解】',
                '老夏说公务员面试：助你顺利考上公务员'
              ],
              CategoryId: '1400004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1400000',
              parentCategoryTitle: '教育学习',
              title: '考试',
              recommend: '0',
              totalCount: 5784,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F72\u002FYueWen_25793956\u002Fs_YueWen_25793956.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F14\u002FYueWen_43932715\u002Fs_YueWen_43932715.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F201\u002F39888201\u002Fs_39888201.jpg'
              ],
              bookTitles: [
                '零基础学好英语语法',
                "玩偶之家：易卜生戏剧选 A Doll's House and Other Plays（双语经典）",
                '英语语法分解大全'
              ],
              CategoryId: '1400005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1400000',
              parentCategoryTitle: '教育学习',
              title: '外语',
              recommend: '0',
              totalCount: 2336,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F44\u002FYueWen_33140005\u002Fs_YueWen_33140005.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F51\u002Fcpplatform_59zd8bsvew2haapnupon1r\u002Fs_cpplatform_59zd8bsvew2haapnupon1r1694596495.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F24\u002FcpPlatform_jJwozpZTRxYDFwwjZRfzck\u002Fs_cpPlatform_jJwozpZTRxYDFwwjZRfzck.jpg'
              ],
              bookTitles: ['真希望我父母读过这本书', '看见孩子', '美国儿科学会育儿百科（第七版）'],
              CategoryId: '1400006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1400000',
              parentCategoryTitle: '教育学习',
              title: '育儿',
              recommend: '0',
              totalCount: 2717,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F64\u002Fcpplatform_qpqefbrrjjgqq7t62wt1ca\u002Fs_cpplatform_qpqefbrrjjgqq7t62wt1ca1706772686.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F98\u002FYueWen_43697528\u002Fs_YueWen_43697528.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F2\u002Fcpplatform_iqbqcpshcdvsb1evdvwoig\u002Fs_cpplatform_iqbqcpshcdvsb1evdvwoig1681978913.jpg'
          ],
          bookTitles: ['控糖革命', '我们为什么要睡觉？', '芯片简史（2024第十九届文津图书奖作品）'],
          CategoryId: '1500000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '科学技术',
          title: '科学技术',
          recommend: '0',
          totalCount: 19838,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F2\u002Fcpplatform_iqbqcpshcdvsb1evdvwoig\u002Fs_cpplatform_iqbqcpshcdvsb1evdvwoig1681978913.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F24\u002Fcpplatform_4cn8w4tmgzntjobg9ffeny\u002Fs_cpplatform_4cn8w4tmgzntjobg9ffeny1703648785.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F22\u002Fcpplatform_wfdzhk1dx7ig9aep4gagof\u002Fs_cpplatform_wfdzhk1dx7ig9aep4gagof1686304376.jpg'
              ],
              bookTitles: [
                '芯片简史（2024第十九届文津图书奖作品）',
                '这就是ChatGPT',
                '为什么伟大不能被计划'
              ],
              CategoryId: '1500001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1500000',
              parentCategoryTitle: '科学技术',
              title: '工业技术',
              recommend: '0',
              totalCount: 10622,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F73\u002FcpPlatform_vfaZqiZ5iLbm3pLZomqs1Z\u002Fs_cpPlatform_vfaZqiZ5iLbm3pLZomqs1Z.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F20\u002FYueWen_43897076\u002Fs_YueWen_43897076.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F996\u002F43966996\u002Fs_43966996.jpg'
              ],
              bookTitles: [
                '室内装修施工全书',
                '室内设计与施工完全手册',
                '装修常用数据手册：空间布局和尺寸'
              ],
              CategoryId: '1500002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1500000',
              parentCategoryTitle: '科学技术',
              title: '建筑',
              recommend: '0',
              totalCount: 2341,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F98\u002FYueWen_43697528\u002Fs_YueWen_43697528.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FYueWen_41414690\u002Fs_YueWen_41414690.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F87\u002FYueWen_25622039\u002Fs_YueWen_25622039.jpg'
              ],
              bookTitles: [
                '我们为什么要睡觉？',
                '半小时漫画宇宙大爆炸',
                '上帝掷骰子吗？：量子物理史话（升级版）'
              ],
              CategoryId: '1500003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1500000',
              parentCategoryTitle: '科学技术',
              title: '科学科普',
              recommend: '0',
              totalCount: 3908,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F29\u002FYueWen_33689118\u002Fs_YueWen_33689118.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002Fcpplatform_8fmffmvhzakrzjqlmmrhvd\u002Fs_cpplatform_8fmffmvhzakrzjqlmmrhvd1702535606.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F99\u002FYueWen_923562\u002Fs_YueWen_923562.jpg'
              ],
              bookTitles: ['新手四季养花', '精益创业实战（原书第3版）', '肥料高效施用技术'],
              CategoryId: '1500004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1500000',
              parentCategoryTitle: '科学技术',
              title: '农林牧业',
              recommend: '0',
              totalCount: 869,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F64\u002Fcpplatform_qpqefbrrjjgqq7t62wt1ca\u002Fs_cpplatform_qpqefbrrjjgqq7t62wt1ca1706772686.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F9\u002F41626009\u002Fs_41626009.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F87\u002FYueWen_25622039\u002Fs_YueWen_25622039.jpg'
              ],
              bookTitles: ['控糖革命', '贪婪的多巴胺', '上帝掷骰子吗？：量子物理史话（升级版）'],
              CategoryId: '1500005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1500000',
              parentCategoryTitle: '科学技术',
              title: '自然科学',
              recommend: '0',
              totalCount: 2109,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F840\u002F33800840\u002Fs_33800840.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002FYueWen_23474421\u002Fs_YueWen_23474421.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F294\u002F22717294\u002Fs_22717294.jpg'
          ],
          bookTitles: [
            '男人来自火星，女人来自金星1',
            '我减掉了五十斤！心理咨询师亲身实践的心理减肥法',
            '如何让你爱的人爱上你'
          ],
          CategoryId: '1600000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '生活百科',
          title: '生活百科',
          recommend: '0',
          totalCount: 5811,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F37\u002FYueWen_39254242\u002Fs_YueWen_39254242.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F88\u002FYueWen_34354533\u002Fs_YueWen_34354533.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F21\u002FYueWen_23402170\u002Fs_YueWen_23402170.jpg'
              ],
              bookTitles: [
                '装修，做好三件事就够了',
                '爱上收纳：井井有条又热气腾腾的家',
                '怦然心动的人生整理魔法'
              ],
              CategoryId: '1600001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '居家',
              recommend: '0',
              totalCount: 387,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F93\u002FYueWen_860263\u002Fs_YueWen_860263.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F77\u002FYueWen_38398802\u002Fs_YueWen_38398802.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F30\u002FYueWen_567606\u002Fs_YueWen_567606.jpg'
              ],
              bookTitles: [
                '进入空气稀薄地带：登山者的圣经（珍藏版）',
                '中国自助游（2021全新升级版）',
                '美丽中国美丽新疆'
              ],
              CategoryId: '1600002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '旅游',
              recommend: '0',
              totalCount: 649,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F4\u002FYueWen_41733471\u002Fs_YueWen_41733471.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F45\u002Fcpplatform_mpy9j8waqke4hy2bc435z8\u002Fs_cpplatform_mpy9j8waqke4hy2bc435z81694158240.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F834\u002F33800834\u002Fs_33800834.jpg'
              ],
              bookTitles: ['中国茶图鉴', '美食的十万个为什么', '减肥不是挨饿，而是与食物合作'],
              CategoryId: '1600003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '美食',
              recommend: '0',
              totalCount: 1472,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F59\u002FYueWen_827899\u002Fs_YueWen_827899.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F12\u002FYueWen_699769\u002Fs_YueWen_699769.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F56\u002Fcpplatform_3sdvrr6n4oygd4zccdt67e\u002Fs_cpplatform_3sdvrr6n4oygd4zccdt67e1706768891.jpg'
              ],
              bookTitles: ['开运风水大全集', '四柱预测学（古代文化集粹）', '紫微斗数全书（原本）'],
              CategoryId: '1600004',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '命理',
              recommend: '0',
              totalCount: 87,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F840\u002F33800840\u002Fs_33800840.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F294\u002F22717294\u002Fs_22717294.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F83\u002FYueWen_32765552\u002Fs_YueWen_32765552.jpg'
              ],
              bookTitles: ['男人来自火星，女人来自金星1', '如何让你爱的人爱上你', '男人这东西'],
              CategoryId: '1600005',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '情感',
              recommend: '0',
              totalCount: 351,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002FYueWen_23474421\u002Fs_YueWen_23474421.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F59\u002FYueWen_41202952\u002Fs_YueWen_41202952.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F70\u002FYueWen_32886540\u002Fs_YueWen_32886540.jpg'
              ],
              bookTitles: [
                '我减掉了五十斤！心理咨询师亲身实践的心理减肥法',
                '放弃减肥，我瘦了60斤',
                '微习惯·瘦身篇'
              ],
              CategoryId: '1600006',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '时尚',
              recommend: '0',
              totalCount: 564,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F6\u002FcpPlatform_ncAnY9aJqVVPrFZRWCEXJd\u002Fs_cpPlatform_ncAnY9aJqVVPrFZRWCEXJd.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F54\u002F3300023254\u002Fs_3300023254.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F92\u002Fcpplatform_nahdsjnzscq3z1jyuywaf7\u002Fs_cpplatform_nahdsjnzscq3z1jyuywaf71695267179.jpg'
              ],
              bookTitles: [
                '木工雕刻全书',
                '旅行手帐完全指南',
                '不可思议的中国香:宋韵风骨，闻香悟道'
              ],
              CategoryId: '1600007',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '手工',
              recommend: '0',
              totalCount: 134,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002FYueWen_23474421\u002Fs_YueWen_23474421.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F48\u002Fcpplatform_tanpzm4qduzvhxj4j7zasn\u002Fs_cpplatform_tanpzm4qduzvhxj4j7zasn1685518033.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F59\u002FYueWen_41202952\u002Fs_YueWen_41202952.jpg'
              ],
              bookTitles: [
                '我减掉了五十斤！心理咨询师亲身实践的心理减肥法',
                '运动改造大脑（新版）',
                '放弃减肥，我瘦了60斤'
              ],
              CategoryId: '1600008',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '体育',
              recommend: '0',
              totalCount: 1862,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F76\u002FYueWen_842619\u002Fs_YueWen_842619.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F41\u002FYueWen_750476\u002Fs_YueWen_750476.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F30\u002FYueWen_547761\u002Fs_YueWen_547761.jpg'
              ],
              bookTitles: ['脑筋急转弯大全（超值白金版）', '游戏改变世界', '世界经典小笑话全集'],
              CategoryId: '1600009',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1600000',
              parentCategoryTitle: '生活百科',
              title: '游戏',
              recommend: '0',
              totalCount: 430,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F81\u002Fcpplatform_dgwxe3n4wpxaxhx9lx2xnw\u002Fs_cpplatform_dgwxe3n4wpxaxhx9lx2xnw1715066093.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F60\u002Fcpplatform_rkyvt9bmzokpfmevjjggzc\u002Fs_cpplatform_rkyvt9bmzokpfmevjjggzc1715325335.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F66\u002Fcpplatform_jvaxnfra3hkyflvv1s9dy8\u002Fs_cpplatform_jvaxnfra3hkyflvv1s9dy81715309127.jpg'
          ],
          bookTitles: ['读者（2024年第9期）', '看世界（2024年第9期）', '财经（2024年第10期）'],
          CategoryId: '1700000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '期刊杂志',
          title: '期刊杂志',
          recommend: '0',
          totalCount: 4184,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F66\u002Fcpplatform_jvaxnfra3hkyflvv1s9dy8\u002Fs_cpplatform_jvaxnfra3hkyflvv1s9dy81715309127.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F13\u002Fcpplatform_d5sbaq7fkpwhuyhf3ydcfx\u002Fs_cpplatform_d5sbaq7fkpwhuyhf3ydcfx1715156837.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F30\u002Fcpplatform_9f5buvd1uwjzxs9sd9yumh\u002Fs_cpplatform_9f5buvd1uwjzxs9sd9yumh1715756247.jpg'
              ],
              bookTitles: [
                '财经（2024年第10期）',
                '《哈佛商业评论》中文版（2024年5月刊）',
                '证券市场周刊（2024年第17期）'
              ],
              CategoryId: '1700001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1700000',
              parentCategoryTitle: '期刊杂志',
              title: '财经',
              recommend: '0',
              totalCount: 990,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F62\u002Fcpplatform_2s8fhw8xh9d1sn59n9bfyr\u002Fs_cpplatform_2s8fhw8xh9d1sn59n9bfyr1715593136.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002Fcpplatform_auuq8kn7paqyijhawjjugg\u002Fs_cpplatform_auuq8kn7paqyijhawjjugg1715311261.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F3\u002Fcpplatform_hpakygxvuqgshcvfm7yovi\u002Fs_cpplatform_hpakygxvuqgshcvfm7yovi1715239083.jpg'
              ],
              bookTitles: [
                '读者·原创版（2024年第4期）',
                '知音·月末版（2024年第4期）',
                '糖尿病之友（2024年第5期）'
              ],
              CategoryId: '1700010',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1700000',
              parentCategoryTitle: '期刊杂志',
              title: '生活',
              recommend: '0',
              totalCount: 226,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F81\u002Fcpplatform_dgwxe3n4wpxaxhx9lx2xnw\u002Fs_cpplatform_dgwxe3n4wpxaxhx9lx2xnw1715066093.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F17\u002Fcpplatform_iqz893adhdbqjfggwuprgk\u002Fs_cpplatform_iqz893adhdbqjfggwuprgk1713956351.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F20\u002FcpPlatform_gg9K8P3EZaLBUFjQpn9S48\u002Fs_cpPlatform_gg9K8P3EZaLBUFjQpn9S481672923586.jpg'
              ],
              bookTitles: ['读者（2024年第9期）', '读者（2024年第8期）', '读者（2023年第1期）'],
              CategoryId: '1700015',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1700000',
              parentCategoryTitle: '期刊杂志',
              title: '文学',
              recommend: '0',
              totalCount: 1323,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F60\u002Fcpplatform_rkyvt9bmzokpfmevjjggzc\u002Fs_cpplatform_rkyvt9bmzokpfmevjjggzc1715325335.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F22\u002Fcpplatform_ijkmczroafa77detdiwut2\u002Fs_cpplatform_ijkmczroafa77detdiwut21712042541.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F70\u002Fcpplatform_b9asknxjjavw5wprxuj8hb\u002Fs_cpplatform_b9asknxjjavw5wprxuj8hb1687225505.jpg'
              ],
              bookTitles: [
                '看世界（2024年第9期）',
                '看天下（2024年第6期）',
                '演讲与口才（2023年第10期）'
              ],
              CategoryId: '1700016',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1700000',
              parentCategoryTitle: '期刊杂志',
              title: '其他',
              recommend: '0',
              totalCount: 1645,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_22720170\u002Fs_YueWen_22720170.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F277\u002F748277\u002Fs_748277.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FYueWen_35458983\u002Fs_YueWen_35458983.jpg'
          ],
          bookTitles: [
            '小王子（英文版）',
            '傲慢与偏见：PRIDE AND PREJUDICE（英文原版）',
            '心灵奇旅 Soul（迪士尼大电影英文原版）'
          ],
          CategoryId: '1800000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '原版书',
          title: '原版书',
          recommend: '0',
          totalCount: 2902,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_22720170\u002Fs_YueWen_22720170.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F277\u002F748277\u002Fs_748277.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FYueWen_35458983\u002Fs_YueWen_35458983.jpg'
              ],
              bookTitles: [
                '小王子（英文版）',
                '傲慢与偏见：PRIDE AND PREJUDICE（英文原版）',
                '心灵奇旅 Soul（迪士尼大电影英文原版）'
              ],
              CategoryId: '1800001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '1800000',
              parentCategoryTitle: '原版书',
              title: '英文原版',
              recommend: '0',
              totalCount: 2902,
              sublist: []
            }
          ]
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F78\u002Fcpplatform_vatzg6zhjfcgbcvy3pqbon\u002Fs_cpplatform_vatzg6zhjfcgbcvy3pqbon1715677930.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F51\u002Fyuewen_25670810\u002Fs_yuewen_256708101678678831.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F34\u002Fyuewen_39128586\u002Fs_yuewen_391285861678700081.jpg'
          ],
          bookTitles: [
            '超越百岁：长寿的科学与艺术',
            '黄帝内经说什么（珍藏版套装）',
            '你是你吃出来的（套装共2册）'
          ],
          CategoryId: '2100000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '医学健康',
          title: '医学健康',
          recommend: '0',
          totalCount: 14876,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F78\u002Fcpplatform_vatzg6zhjfcgbcvy3pqbon\u002Fs_cpplatform_vatzg6zhjfcgbcvy3pqbon1715677930.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F51\u002Fyuewen_25670810\u002Fs_yuewen_256708101678678831.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F34\u002Fyuewen_39128586\u002Fs_yuewen_391285861678700081.jpg'
              ],
              bookTitles: [
                '超越百岁：长寿的科学与艺术',
                '黄帝内经说什么（珍藏版套装）',
                '你是你吃出来的（套装共2册）'
              ],
              CategoryId: '2100001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '2100000',
              parentCategoryTitle: '医学健康',
              title: '健康',
              recommend: '0',
              totalCount: 7377,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F25\u002Fcpplatform_6z3wjuzzpanewx6h8zgjvy\u002Fs_cpplatform_6z3wjuzzpanewx6h8zgjvy1675915252.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F16\u002FcpPlatform_mxGboyTuoyAC6Sp16mHo4T\u002Fs_cpPlatform_mxGboyTuoyAC6Sp16mHo4T.jpg',
                'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F854\u002F33800854\u002Fs_33800854.jpg'
              ],
              bookTitles: [
                '身体由我：关于了不起的女性身体的一切',
                '海蒂怀孕大百科',
                '女性养生三步走：疏肝、养血、心要修'
              ],
              CategoryId: '2100002',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '2100000',
              parentCategoryTitle: '医学健康',
              title: '两性',
              recommend: '0',
              totalCount: 857,
              sublist: []
            },
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F51\u002Fyuewen_25670810\u002Fs_yuewen_256708101678678831.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002FYueWen_24907559\u002Fs_YueWen_24907559.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F35\u002Fcpplatform_1lhbuyijdlapj5xrakpcmb\u002Fs_cpplatform_1lhbuyijdlapj5xrakpcmb1710229410.jpg'
              ],
              bookTitles: [
                '黄帝内经说什么（珍藏版套装）',
                '曲黎敏精讲黄帝内经（套装共5册）',
                '命悬一线，我不放手'
              ],
              CategoryId: '2100003',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '2100000',
              parentCategoryTitle: '医学健康',
              title: '医学',
              recommend: '0',
              totalCount: 11177,
              sublist: []
            }
          ]
        }
      ],
      maleCategories: [
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F451\u002F37728451\u002Fs_37728451.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F869\u002F37901869\u002Fs_37901869.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F665\u002F37899665\u002Fs_37899665.jpg'
          ],
          bookTitles: ['金棒无敌', '我在玉京躺平的那些年', '我真的可以无限强化'],
          CategoryId: '1900001',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '东方玄幻',
          recommend: '0',
          totalCount: 32298,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F71\u002Fyuewen_25160281509206004\u002Fs_yuewen_251602815092060041680318025.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002Fyuewen_25112068909756204\u002Fs_yuewen_251120689097562041679325336.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F6\u002Fyuewen_25113481301638204\u002Fs_yuewen_251134813016382041679382927.jpg'
          ],
          bookTitles: ['离婚后，带着初恋成为了巨星', '我真不懂文娱啊', '我n97星云，第一导演'],
          CategoryId: '1900002',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '都市小说',
          recommend: '0',
          totalCount: 39594,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F517\u002F37413517\u002Fs_37413517.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F901\u002F37041901\u002Fs_37041901.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F240\u002F37045240\u002Fs_37045240.jpg'
          ],
          bookTitles: ['重生都市霸王', '关山万里路', '诡异之祖'],
          CategoryId: '1900003',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '仙侠武侠',
          recommend: '0',
          totalCount: 36845,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F297\u002F41551297\u002Fs_41551297.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F477\u002F41584477\u002Fs_41584477.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F384\u002F41584384\u002Fs_41584384.jpg'
          ],
          bookTitles: [
            '斗罗：觉醒沙盒武魂的我只想种田',
            '我的超正经御兽生活',
            '从比比东开始拯救诸天女神'
          ],
          CategoryId: '1900004',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '异界大陆',
          recommend: '0',
          totalCount: 17882,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F625\u002F36712625\u002Fs_36712625.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F528\u002F36580528\u002Fs_36580528.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F543\u002F36580543\u002Fs_36580543.jpg'
          ],
          bookTitles: ['神祗复苏：我有斗罗武魂加特林！', '外卖神豪：开局奖励天价超跑', '天命龙王'],
          CategoryId: '1900005',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '异术超能',
          recommend: '0',
          totalCount: 12920,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F331\u002F37194331\u002Fs_37194331.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F912\u002F37395912\u002Fs_37395912.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F287\u002F37338287\u002Fs_37338287.jpg'
          ],
          bookTitles: [
            '想拯救截教的我太累了',
            '西游签到一千年，带着猴子上灵山',
            '西游：这个地府过于凶猛'
          ],
          CategoryId: '1900006',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '玄幻奇幻',
          recommend: '0',
          totalCount: 22004,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F10\u002Fyuewen_24978859809190504\u002Fs_yuewen_249788598091905041681108223.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F11\u002Fyuewen_24984619409444504\u002Fs_yuewen_249846194094445041681714822.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F78\u002Fyuewen_24984204501580804\u002Fs_yuewen_249842045015808041676099429.jpg'
          ],
          bookTitles: ['从火影开始的主神之路', '海贼：这个熊猫超正义', '从飞天螳螂开始的精灵生活'],
          CategoryId: '1900007',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '同人二次元',
          recommend: '0',
          totalCount: 21436,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F685\u002F26767685\u002Fs_26767685.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F774\u002F27484774\u002Fs_27484774.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F494\u002F27339494\u002Fs_27339494.jpg'
          ],
          bookTitles: ['原始人在行动', '秦国帝王', '酋长意志'],
          CategoryId: '1900008',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '历史架空',
          recommend: '0',
          totalCount: 18692,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F438\u002F34528438\u002Fs_34528438.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F424\u002F34565424\u002Fs_34565424.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F968\u002F34557968\u002Fs_34557968.jpg'
          ],
          bookTitles: ['重生无敌从传奇开始', '教主大人饶命啊', '玄幻之英雄联盟'],
          CategoryId: '1900009',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '游戏竞技',
          recommend: '0',
          totalCount: 19198,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F762\u002F14976762\u002Fs_14976762.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F583\u002F14902583\u002Fs_14902583.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F515\u002F14910515\u002Fs_14910515.jpg'
          ],
          bookTitles: ['末世神笔', '末世之钢铁王朝', '末世无上剑道'],
          CategoryId: '1900010',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '科幻未来',
          recommend: '0',
          totalCount: 13563,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F47\u002F43296047\u002Fs_43296047.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F691\u002F43257691\u002Fs_43257691.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F902\u002F43266902\u002Fs_43266902.jpg'
          ],
          bookTitles: ['我在异星造工厂', '诸天起风云', '诸天成神道'],
          CategoryId: '1900011',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '时空穿梭',
          recommend: '0',
          totalCount: 9260,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F333\u002F15080333\u002Fs_15080333.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F757\u002F15321757\u002Fs_15321757.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F43\u002F15314043\u002Fs_15314043.jpg'
          ],
          bookTitles: ['都市之冥王归来', '阴阳鬼厨', '封灵贴'],
          CategoryId: '1900012',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '悬疑灵异',
          recommend: '0',
          totalCount: 6818,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F971\u002F43750971\u002Fs_43750971.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002FYueWen_24230858509521804\u002Fs_YueWen_24230858509521804.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F82\u002F44961082\u002Fs_44961082.jpg'
          ],
          bookTitles: [
            '这文职疯了！把兵王营当新兵连',
            '刚参军就立一等功，你这叫新兵？',
            '老孙家的货栈'
          ],
          CategoryId: '1900013',
          rank: 0,
          type: 0,
          categoryType: 1,
          parentCategoryId: '1900000',
          parentCategoryTitle: '男生小说',
          title: '军事小说',
          recommend: '0',
          totalCount: 1669,
          sublist: []
        }
      ],
      femaleCategories: [
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F750\u002F22406750\u002Fs_22406750.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F831\u002F22395831\u002Fs_22395831.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F888\u002F22398888\u002Fs_22398888.jpg'
          ],
          bookTitles: ['殿下宠妻请适度', '医品毒后', '宅斗，我们是认真的'],
          CategoryId: '2000001',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '穿越架空',
          recommend: '0',
          totalCount: 55523,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F302\u002F34414302\u002Fs_34414302.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F147\u002F34414147\u002Fs_34414147.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F154\u002F34414154\u002Fs_34414154.jpg'
          ],
          bookTitles: ['豪门无爱：疼你有瘾', '偏执暖婚：封少老婆要宠！', '掠爱成瘾：独占小萌妻'],
          CategoryId: '2000002',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '豪门世家',
          recommend: '0',
          totalCount: 33226,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F370\u002F26790370\u002Fs_26790370.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F181\u002F26767181\u002Fs_26767181.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F136\u002F26768136\u002Fs_26768136.jpg'
          ],
          bookTitles: ['八零锦绣小福女', '你是我最甜的烙印', '谈婚论爱'],
          CategoryId: '2000003',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '现代言情',
          recommend: '0',
          totalCount: 43198,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F819\u002F48408819\u002Fs_48408819.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F446\u002F483446\u002Fs_483446.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F474\u002F483474\u002Fs_483474.jpg'
          ],
          bookTitles: ['侯门弃妇她是黑心莲', '生生世世缘未尽', '药女'],
          CategoryId: '2000004',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '玄幻言情',
          recommend: '0',
          totalCount: 13385,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F991\u002F34273991\u002Fs_34273991.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F81\u002F34264081\u002Fs_34264081.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F354\u002F34273354\u002Fs_34273354.jpg'
          ],
          bookTitles: ['腹黑娘娘本纯良', '摄政王的天价宠妃', '王妃要当家：宝贝，别嚣张'],
          CategoryId: '2000005',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '古代言情',
          recommend: '0',
          totalCount: 11075,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F790\u002F30619790\u002Fs_30619790.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F473\u002F30687473\u002Fs_30687473.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F725\u002F30684725\u002Fs_30684725.jpg'
          ],
          bookTitles: ['反派是要娇宠的', '快穿之我在位面管理公司上班', '快穿之救个女主'],
          CategoryId: '2000006',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '快穿小说',
          recommend: '0',
          totalCount: 6410,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F719\u002F34566719\u002Fs_34566719.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F44\u002F34638044\u002Fs_34638044.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F739\u002F34637739\u002Fs_34637739.jpg'
          ],
          bookTitles: ['养个皇帝做相公', '邪妃狂帝：娘子又美又绝', '医妃当权：王爷，你安分点'],
          CategoryId: '2000007',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '宫闱宅斗',
          recommend: '0',
          totalCount: 7930,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F118\u002F29922118\u002Fs_29922118.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F283\u002F30005283\u002Fs_30005283.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F743\u002F29990743\u002Fs_29990743.jpg'
          ],
          bookTitles: ['明神逐仙途', '聘仙诀', '本欲成仙奈何入魔'],
          CategoryId: '2000008',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '仙侠奇缘',
          recommend: '0',
          totalCount: 17833,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F813\u002F41305813\u002Fs_41305813.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F815\u002F41584815\u002Fs_41584815.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F744\u002F41584744\u002Fs_41584744.jpg'
          ],
          bookTitles: [
            '医毒大佬穿成年代作精',
            '神算萌妻：厉爷，夫人她艳杀四方',
            '全能大佬她才是真千金'
          ],
          CategoryId: '2000009',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '重生异能',
          recommend: '0',
          totalCount: 5387,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002FYueWen_21019278008465004\u002Fs_YueWen_21019278008465004.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F65\u002F40584065\u002Fs_40584065.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F948\u002F40583948\u002Fs_40583948.jpg'
          ],
          bookTitles: ['种田小农妻', '摊牌了，我是天道他奶奶', '穿成三个反派崽子的后娘怎么办'],
          CategoryId: '2000010',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '经商种田',
          recommend: '0',
          totalCount: 7043,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F61\u002F25447061\u002Fs_25447061.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F733\u002F25432733\u002Fs_25432733.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F333\u002F25433333\u002Fs_25433333.jpg'
          ],
          bookTitles: ['你是我一整个青春的喜欢', '可以好好说话吗', '冬雪落落素阳染'],
          CategoryId: '2000011',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '青春言情',
          recommend: '0',
          totalCount: 16170,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F177\u002F25350177\u002Fs_25350177.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F343\u002F26239343\u002Fs_26239343.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F584\u002F26205584\u002Fs_26205584.jpg'
          ],
          bookTitles: ['我想吃掉你的系统', '代号水晶鞋', '姑娘揍人贼狠'],
          CategoryId: '2000012',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '科幻神秘',
          recommend: '0',
          totalCount: 6063,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F845\u002F490845\u002Fs_490845.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F287\u002F489287\u002Fs_489287.jpg',
            'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F363\u002F489363\u002Fs_489363.jpg'
          ],
          bookTitles: ['桃夭夭寻夫记', '第一药师', '醉神话'],
          CategoryId: '2000013',
          rank: 0,
          type: 0,
          categoryType: 2,
          parentCategoryId: '2000000',
          parentCategoryTitle: '女生小说',
          title: '游戏竞技',
          recommend: '0',
          totalCount: 2618,
          sublist: []
        }
      ],
      otherCategories: [
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002Fcpplatform_7eqrreg97tkvjleahhzspm\u002Fs_cpplatform_7eqrreg97tkvjleahhzspm1683690681.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F90\u002F3300013190\u002Fs_3300013190.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_39111055\u002Fs_YueWen_39111055.jpg'
          ],
          bookTitles: [
            '半小时漫画史记（全5册）',
            '半小时漫画大套装（套装共16册）',
            '半小时漫画历史系列（共7册）（中国史1-5+世界史1-2）'
          ],
          CategoryId: '2400000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '漫画',
          title: '漫画',
          recommend: '0',
          totalCount: 1036,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002Fcpplatform_7eqrreg97tkvjleahhzspm\u002Fs_cpplatform_7eqrreg97tkvjleahhzspm1683690681.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F90\u002F3300013190\u002Fs_3300013190.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_39111055\u002Fs_YueWen_39111055.jpg'
              ],
              bookTitles: [
                '半小时漫画史记（全5册）',
                '半小时漫画大套装（套装共16册）',
                '半小时漫画历史系列（共7册）（中国史1-5+世界史1-2）'
              ],
              CategoryId: '2400001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '2400000',
              parentCategoryTitle: '漫画',
              title: '经典改编',
              recommend: '0',
              totalCount: 1036,
              sublist: []
            }
          ]
        },
        {
          CategoryId: '6100',
          rank: 1,
          type: 1,
          title: '签约讲书榜',
          recommend: '0',
          covers: [
            'http:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F22\u002F24053022\u002Fs_24053022.jpg',
            'http:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F575\u002F23506575\u002Fs_23506575.jpg',
            'http:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F304\u002F25470304\u002Fs_25470304.jpg'
          ],
          bookTitles: ['《腾讯人力资源管理》001', '天宇传记210', '【001】绑架'],
          sublist: [
            {
              CategoryId: '6102',
              title: '科技前沿',
              type: 1
            },
            {
              CategoryId: '6103',
              title: '小说赏读',
              type: 1
            },
            {
              CategoryId: '6104',
              title: '亲子教育',
              type: 1
            },
            {
              CategoryId: '6105',
              title: '成功励志',
              type: 1
            },
            {
              CategoryId: '6106',
              title: '历史传记',
              type: 1
            },
            {
              CategoryId: '6107',
              title: '商业经典',
              type: 1
            },
            {
              CategoryId: '6108',
              title: '热门外版',
              type: 1
            }
          ],
          totalCount: 500,
          showAll: 1
        },
        {
          CategoryId: '6200',
          rank: 1,
          type: 1,
          title: '有声小说榜',
          recommend: '0',
          uiType: '0',
          authorType: '0',
          showIcon: '1',
          covers: [],
          bookTitles: ['斗罗大陆II绝世唐门', '天使的信仰', '红楼梦'],
          sublist: [],
          totalCount: 0,
          showAll: 1
        }
      ],
      topCategories: [
        {
          CategoryId: 'rising',
          totalCount: 50,
          title: '飙升·出版',
          ranklist: 1,
          ranklistCover: {
            tinycode:
              'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.rising.tinycode.tJRmjwHWQF.png',
            chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_title.YqPFOS9Gin.png',
            chart_detail_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_detail_title.iNVjmWJJc0.png',
            chart_detail_title_dark:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_detail_title_dark.sxL3mZZF3c.png',
            chart_share_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_share_title.OOPtSovt76.png',
            chart_share_logo:
              'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.rising.chart_share_logo.NFf6X5XxQl.png',
            chart_book_detial_icon:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_book_detial_icon.suAApPHCRI.png',
            chart_tag:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_tag.Z1lQGZcYuj.png',
            eink_chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.eink_chart_title.g9cGWpSMW5.png',
            chart_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_title_main.Nck47sFyG5.png',
            chart_detail_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_detail_title_main.4GJmQw3t2q.png',
            chart_detail_title_dark_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.rising.chart_detail_title_dark_main.4eIj3YkpSE.png',
            chart_background_color_1: '#FF3D3E',
            chart_background_color_2: '#FF4593',
            chart_title_height: 96,
            chart_title_width: 612,
            desc: '微信读书用户近期热读的出版书'
          },
          recommend: '0',
          sublist: [],
          lectureBooks: [
            {
              bookInfo: {
                bookId: '3300100327',
                title: '重组与突破',
                author: '黄奇帆',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F18\u002Fcpplatform_4rn7tgcf8lnc1sszpsp2up\u002Fs_cpplatform_4rn7tgcf8lnc1sszpsp2up1715913170.jpg',
                version: 692452799,
                format: 'epub',
                type: 0,
                price: 61.6,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '在工作过程中，在企业和地方发展中，我们总会遇到各种各样的困难、瓶颈乃至危机，如果能够运用重组的思维方法，逢凶化吉、摆脱困境，那无疑是一大幸事。 在50余载的工作历程中，重庆市原市长黄奇帆参与、主导了一系列重组，从中他深刻领悟到重组的真谛与妙趣：其真谛在于资源优化配置、体制机制创新，其妙趣在于“随心所欲不逾矩”“柳暗花明又一村”。本书辑录了黄奇帆在重庆工作期间遇到难题时以“重组求突破”的思维与实践，以期与读者分享重组的感悟。本书共分两个部分。 第 一部分专讲企业的重组与管理，包括城市建设投融资平台类企业、资本运营投资类企业、金融企业、国有工商企业集团和民营企业五大类企业。每一类企业的重组内容都涉及该类企业当时困难的严重性和重组的紧迫性及必要性，以及为解决该企业问题而进行的重组方案的脉络与原则、对策措施、成效与结果。 第二部分专讲行业的重组与管理，包括城市房地产业、工业产业、内陆加工贸易的转型、教育、金融、财政六大行业的重组与管理。每一类行业的重组内容都涉及当时行业的状况、内在的困难、百姓的呼声、国家的政策要求，每一种行业重组都涉及从供给侧对各类要素资源进行优化重组，从而在结构性平衡中实现超常规的发展。',
                centPrice: 6160,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 4525313,
                publishTime: '2024-04-01 00:00:00',
                category: '经济理财-管理',
                categories: [
                  {
                    categoryId: 1100000,
                    subCategoryId: 1100002,
                    categoryType: 0,
                    title: '经济理财-管理'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 75,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 931,
                newRatingCount: 51,
                newRatingDetail: {
                  good: 44,
                  fair: 4,
                  poor: 3,
                  recent: 51,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 1,
              readingCount: 1135,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300100096',
                title: '鳄鱼',
                author: '莫言',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F82\u002Fcpplatform_qryw98bvfedjtb2xwxxhvy\u002Fs_cpplatform_qryw98bvfedjtb2xwxxhvy1715763275.jpg',
                version: 38562662,
                format: 'epub',
                type: 0,
                price: 24,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '莫言获诺贝尔文学奖十年后推出的一部具有魔幻色彩的话剧剧作。莫言曾在莎士比亚故居的莎翁塑像前发下誓言，用后半生完成从小说家到剧作家的转型，本书即为这一誓言的见证，是莫言的华丽转型之作。\n《鳄鱼》的故事围绕主人公单无惮及其在生日派对上收到的贺礼“鳄鱼”展开。了解到鳄鱼的生长取决于环境限制程度的特性，心事重重的无惮对鳄鱼产生了浓厚的兴趣。十年来，他不断为鳄鱼更换更大的鱼缸，纵容着鳄鱼不断长大，直至成为长达四米的庞然巨兽……通过一条无限生长的鳄鱼，故事挖掘人性深处的秘密，深刻探讨“欲望”这一主题。',
                centPrice: 2400,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-15 00:00:00',
                category: '文学-戏剧文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300008,
                    categoryType: 0,
                    title: '文学-戏剧文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 18,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 731,
                newRatingCount: 291,
                newRatingDetail: {
                  good: 209,
                  fair: 73,
                  poor: 9,
                  recent: 130,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 2,
              readingCount: 1354,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099925',
                title: '超越百岁：长寿的科学与艺术',
                author: '[美]彼得·阿提亚',
                translator: '程纪莲',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F78\u002Fcpplatform_vatzg6zhjfcgbcvy3pqbon\u002Fs_cpplatform_vatzg6zhjfcgbcvy3pqbon1715677930.jpg',
                version: 143287106,
                format: 'epub',
                type: 0,
                price: 73.5,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '著名的长寿专家彼得·阿提亚博士还曾是一名马拉松游泳运动员，在三十多岁的时候就横渡过卡特琳娜海峡。然而他的健康状况居然也出现了异常，有早逝于心脏病的风险。这一发现促使他开始探索长寿之道：我们如何以及为何会死亡，我们怎样才能延缓甚至预防那些导致大多数人死亡的慢性病的到来，例如心脏病、癌症、阿尔茨海默病与2型糖尿病。 \r\n在这本开创性的书中，阿提亚解释了这段经历是如何促使他重新思考自己的医疗保健方法的。虽然主流医学取得了很多成就，但在防治这些与年龄有关的疾病方面却进展甚微，往往因干预的时机太晚而无法提供及时的帮助，并以损害健康或生活质量为代价延长寿命。阿提亚认为，我们必须用个性化、积极主动的长寿策略来取代这种过时的观念，应该立即采取行动而非等待。全书所阐述的不是一种生物黑客式的高深技术，而是以科学为基础的有效方法和战略，旨在延长寿命的同时也帮助我们改善身体、认知和情绪状况。阿提亚的目标不是简单告诉你该做什么，而是更多地帮助你学会如何思考长期健康，以便让你为自己制订出最佳计划。在这本书中，你将会学到：\r\n为什么在年度体检中你的血液检测和胆固醇测试结果显示“正常”，但你仍然可能不健康——因为平均值并不等同于最佳状态。\r\n为什么运动是最强效的长寿“药”，以及如何为“百岁老人十项全能计划”开始训练？\r\n为什么你应该忘记“节食”，转而关注营养生物化学，利用技术和数据来个性化你的饮食模式？\r\n为什么仅追求身体健康和长寿而忽视情感健康可能会让你付出高昂代价？\r\n寿命与健康的可塑性远比我们想象的更强。我们的命运不是一成不变的，有了正确的路线图，你就可以为你的人生规划一条不同的道路，让你比你的基因更长寿，让每一个十年都比前一个十年更好。',
                centPrice: 7350,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14214348,
                publishTime: '2024-01-01 00:00:00',
                category: '医学健康-健康',
                categories: [
                  {
                    categoryId: 2100000,
                    subCategoryId: 2100001,
                    categoryType: 0,
                    title: '医学健康-健康'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 33,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 777,
                newRatingCount: 160,
                newRatingDetail: {
                  good: 140,
                  fair: 16,
                  poor: 4,
                  recent: 109,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 3,
              readingCount: 3082,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300100329',
                title: '一如既往： 不变的人性与致富心态',
                author: '[美]摩根·豪泽尔',
                translator: '宋红波;符李桃;',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F50\u002Fcpplatform_as7g6cvino4zuhsxnu9hxd\u002Fs_cpplatform_as7g6cvino4zuhsxnu9hxd1715913190.jpg',
                version: 667364308,
                format: 'epub',
                type: 0,
                price: 48.3,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '每个人都想看清未来，但无论在金融投资、商业、经济，还是政治、社会学等领域，没有人能够真正做到这一点。 我们必须承认世界永远变化，未知无法预测。与其预测接下来会发生什么变化，不如在变化中寻找不变之道。 世界瞬息万变，但千百年来，人类的行为始终如一，永恒不变。 人类一如既往地深陷贪婪和恐惧之中难以自拔； 人类一如既往地被风险、嫉妒、身份认同等问题困扰； 人类一如既往地寻求根本不存在的确定性； 人类一如既往地追寻幸福生活的秘诀。 恰恰是在人类那些永恒不变的行为中，蕴含了最深刻的历史经验，因为它们能够预示每个人未来的行为趋势。 我们要做的，不是更努力地透过不确定性的迷雾去预测未来，而是专注于那些永恒不变的常识。',
                centPrice: 4830,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 4525313,
                publishTime: '2024-04-01 00:00:00',
                category: '经济理财-理财',
                categories: [
                  {
                    categoryId: 1100000,
                    subCategoryId: 1100003,
                    categoryType: 0,
                    title: '经济理财-理财'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 31,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 0,
                newRatingCount: 33,
                newRatingDetail: {
                  good: 30,
                  fair: 3,
                  poor: 0,
                  recent: 33,
                  title: '评分不足'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 4,
              readingCount: 532,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300020164',
                title: '记一忘三二（不开心就读李娟！）',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F64\u002F3300020164\u002Fs_3300020164.jpg',
                version: 1896692399,
                format: 'epub',
                type: 0,
                price: 13.9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '“鲁迅文学奖”“中国好书”奖得主，李娟《记一忘三二》2020年全新修订版。作者替换增改几万字篇幅，并增加新序。《记一忘三二》是作家李娟十余年来的随笔结集。三十余篇以“记”为题的文字轻松随性，从亲情、友情、爱情，工作、生活、兴趣乃至梦境等诸多侧面，记录了李娟的心路日常——与母亲相依为命也闹过“分居”，定居于荒野中的大院子而生活不再颠沛流离，少年时曾遭受的暴力与得到的关爱，等等，随着成长反而愈益清晰。种种文字率性而作，平实诙谐，同时又有掩盖不住的温暖和诗意，组成一幕幕“含泪的微笑”，连缀起时间流逝中的琐碎日常。',
                centPrice: 1390,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2020-07-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 40,
                paperBook: {
                  skuId: '12934342'
                },
                copyrightChapterUids: [41],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 908,
                newRatingCount: 8043,
                newRatingDetail: {
                  good: 7421,
                  fair: 537,
                  poor: 85,
                  recent: 844,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 5,
              readingCount: 11351,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098641',
                title: '人生欢（首届梁晓声青年文学奖获奖作品）',
                author: '上官文露',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002Fcpplatform_ufixdyj9qfoltuj1mr8j2i\u002Fs_cpplatform_ufixdyj9qfoltuj1mr8j2i1715315550.jpg',
                version: 1151849100,
                format: 'epub',
                type: 0,
                price: 43.53,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '她们用注定悲剧的人生，反抗着被遗忘的罪恶。\n这是一本女性故事合集，与生活的纠缠与困斗贯穿她们的一生，而从未享受过自由的她们只能用自己的方式徒劳地探索人生的存在价值。或许，相比于成功，失败和死亡更是人生的必修课。\n《人生欢》里的李蜜将青春演绎成一场残酷的受难，此后的人生也成了沼泽。走进这滩沼泽的她，和苦难深刻地交缠和痴缠是她唯一的反抗。《赌徒》中的王小满则将反抗精神贯穿一生。然而，她懂得如何破坏，却不知如何建立。最终，她成了一名家徒四壁的赌徒，毁掉了自己和所有周围亲人的人生。在命运的轮盘上一败涂地。《锈鹃》里的李杜娟，一生倔强，折腾了一辈子，经历股灾破产，配偶出轨，父母离去，兄弟阋墙，子女叛逆等人生无常，最终在精神病院沦为任人摆布的疯子。《新娘》里顽固地抵御时间侵蚀的女人万提斯，在生活的苦难磨砺中，摸索前行。\n她们注定以绝望收场的命运，被带上了时代深刻的底色。',
                centPrice: 4353,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-07 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  }
                ],
                authorVids: '276680',
                hasLecture: 0,
                lastChapterIdx: 64,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 857,
                newRatingCount: 78,
                newRatingDetail: {
                  good: 70,
                  fair: 7,
                  poor: 1,
                  recent: 78,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 6,
              readingCount: 1194,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099995',
                title: '我想太多啦：高敏感人更容易成功',
                author: '[法]克莉司德·布提可南',
                translator: '华璐',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002Fcpplatform_1zvt94nzygbjgsfmuw3oyq\u002Fs_cpplatform_1zvt94nzygbjgsfmuw3oyq1715681609.jpg',
                version: 1563050152,
                format: 'epub',
                type: 0,
                price: 35,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '你是不是内心戏超多的那一种人？\n法国“国民心理师”克莉德·布提可南在20多年的咨询实践中，与数名咨询者——“高敏感人群”直接接触和对话，记录了他们的所思所想。案例生动、鲜活，让读者读来感觉“仿佛就是在写自己”。\n深刻了解自己行为的奥秘，让你清楚认识到你生来就是“特别的一个”，你不是别人眼中的“异类”。',
                centPrice: 3500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-14 00:00:00',
                category: '心理-认知与行为',
                categories: [
                  {
                    categoryId: 800000,
                    subCategoryId: 800003,
                    categoryType: 0,
                    title: '心理-认知与行为'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 18,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 859,
                newRatingCount: 38,
                newRatingDetail: {
                  good: 34,
                  fair: 1,
                  poor: 3,
                  recent: 38,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 7,
              readingCount: 540,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '462592',
                title: '庆余年',
                author: '猫腻',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F592\u002F462592\u002Fs_462592.jpg',
                version: 0,
                format: 'txt',
                type: 0,
                price: -1,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 2,
                payType: 2105346,
                intro:
                  '　　积善之家，必有余庆，留余庆，留余庆，忽遇恩人；幸娘亲，幸娘亲，积得阴功。劝人生，济困扶穷……而谁可知，人生于世，上承余庆，终究却是要自己做出道路抉择，正是所谓岔枝发：\r\n　　东风携云雨，幼藤吐新芽。\r\n　　急催如颦鼓，洗尽茸与华。\r\n　　且待朝阳至，绿遍庭中架。\r\n　　更盼黄叶时，采得数枚瓜。\r\n　　……\r\n　　……\r\n　　《庆余年》同名影视剧由张若昀、李沁、陈道明、吴刚等主演，11月26日起在腾讯视频、爱奇艺开播。',
                centPrice: 17780,
                finished: 1,
                free: 0,
                mcardDiscount: 20,
                ispub: 2,
                cpid: 5,
                publishTime: '',
                realPrice: 17780,
                category: '男生小说-历史架空',
                categories: [
                  {
                    categoryId: 1900000,
                    subCategoryId: 1900008,
                    categoryType: 1,
                    title: '男生小说-历史架空'
                  },
                  {
                    categoryId: 100000,
                    subCategoryId: 100012,
                    categoryType: 0,
                    title: '精品小说-影视原著'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 777,
                paperBook: {
                  skuId: '12988476'
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 858,
                newRatingCount: 240433,
                newRatingDetail: {
                  good: 206351,
                  fair: 29448,
                  poor: 4634,
                  recent: 187,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 8,
              readingCount: 5638,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098853',
                title: '被判死刑之后',
                author: '唐泰斯 何俊义',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F55\u002Fcpplatform_3lq1pbafdv9zmagxm2dew1\u002Fs_cpplatform_3lq1pbafdv9zmagxm2dew11715148300.jpg',
                version: 523687294,
                format: 'epub',
                type: 0,
                price: 31.2,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书是三名前服刑人员记录的监狱内7名犯人被判死刑之后的故事。\n服刑期间，他们见过形形色色的死囚，有暴富后欲望失去控制的毒枭、杀人不眨眼的大学教授、一家六口都被判死刑的“死囚家族”、身背4条人命的18岁纵火犯……\n高墙下的犯罪动机可能光怪陆离，但是罪行之下，却是我们都会面临的现实问题：\n环境对人的影响有多深远？\n如何避免人生陷入恶的循环？\n面对死亡倒计时，人会做出怎样疯狂的举动？\n为什么只有在死亡面前才能明白活着的意义？\n三位作者记录下了和7名死刑犯朝夕相处的日常，追溯了他们的人生轨迹，还原了他们在欲望笼罩之下，逐渐迷茫、失控的全过程，试图用最丰满真实的细节，讨论最割裂的人性命题。\n打开这本书，希望你可以谨慎地迈出人生每一步。',
                centPrice: 3120,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-08 00:00:00',
                category: '文学-纪实文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300002,
                    categoryType: 0,
                    title: '文学-纪实文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 13,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [14],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 719,
                newRatingCount: 836,
                newRatingDetail: {
                  good: 585,
                  fair: 168,
                  poor: 83,
                  recent: 836,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 9,
              readingCount: 4928,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300020163',
                title: '我的阿勒泰（马伊琍、周依然、于适主演同名电视剧原著）',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002Fcpplatform_fy7wyg2acrhxq1vu4yvs9y\u002Fs_cpplatform_fy7wyg2acrhxq1vu4yvs9y1714307419.jpg',
                version: 396072845,
                format: 'epub',
                type: 0,
                price: 22.5,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '偏远寂静的阿克哈拉村，缓慢而永恒的喀吾图，沙依横布拉克的夏牧场……“阿勒泰的精灵”李娟以细腻明亮的笔触全景式记录北疆边地美好闪光的时刻。全书分为两辑。第一辑记忆之中（2007-2009），记录了在喀吾图和阿克哈拉村细碎坚忍的生活画面；第二辑角落之中（2002-2006），原生态书写了李娟和母亲及高龄的外婆随牧民迁徙、流动的日常：开杂货铺，当小裁缝，帮往来的牧民车衣裙，去大山深处采野生木耳；春天沙依恒布拉克草原上鼓胀的帐篷，夏季牧场上喧嚣盛大的阿肯弹唱会，入冬后瓷实的迢迢雪路……戈壁、草原、森林、雪山、骏马和牧人，细腻明亮的文字展现了游牧民族在边地深远丰富的生存景观。',
                centPrice: 2250,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2021-08-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 32,
                paperBook: {
                  skuId: '12932325'
                },
                copyrightChapterUids: [31],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 894,
                newRatingCount: 13056,
                newRatingDetail: {
                  good: 12068,
                  fair: 816,
                  poor: 172,
                  recent: 3994,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 10,
              readingCount: 54285,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099005',
                title: '毕业工作第一年',
                author: '全民故事计划主编',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002Fcpplatform_1kbmyhhin953hyfqdhewqe\u002Fs_cpplatform_1kbmyhhin953hyfqdhewqe1715226020.jpg',
                version: 1856804198,
                format: 'epub',
                type: 0,
                price: 38,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048641,
                intro:
                  '不敢安于现状、又无力追逐梦想。\n本书汇聚了15个毕业生初入职场的第一年故事，主人公们背景各异，却共同面临着对未来的迷茫和困惑。他们或许出身名校，或许早入社会，但都在理想与现实的夹缝中挣扎。书中描绘了他们在追求稳定与实现自我之间的纠结与努力，展现了青春的奋斗与失落，汗水与希望。这些故事充满了人间的温情与冷漠，让人深刻体会到工作虽非生活的全部，却是人生必经的道路。无论是挑战还是机遇，都将成为他们成长的烙印，启迪着每一个正在或即将踏上职场征程的年轻人。',
                centPrice: 3800,
                finished: 1,
                free: 3,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-09 00:00:00',
                category: '文学-纪实文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300002,
                    categoryType: 0,
                    title: '文学-纪实文学'
                  }
                ],
                authorVids: '303215585',
                hasLecture: 0,
                lastChapterIdx: 104,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 696,
                newRatingCount: 142,
                newRatingDetail: {
                  good: 80,
                  fair: 54,
                  poor: 8,
                  recent: 142,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 11,
              readingCount: 1237,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '34618597',
                title: '哈佛经典谈判术：你一开口就赢麻了',
                author: '迪帕克·马尔霍特拉 马克斯·巴泽曼',
                translator: '王崇巍',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F597\u002F34618597\u002Fs_34618597.jpg',
                version: 174872791,
                format: 'epub',
                type: 0,
                price: 74.61,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '只要会谈判，你几乎可以在职场搞钱、家庭关系、商场买货中无往不利～\n那怎么做呢?有没有哪些小技巧是我们可以无缝嫁接？\n我们把它分为4步，不会谈判的你来学～\n 评估\n 不要被”锚”牵着走\n 不要害怕沉默\n 人性义务的力量\n很多时后,我们会觉得这些东西不重要,但仔细想想他几乎可以映射到生活中每个角落。\n别忘记，生活本身就是一场博弈～',
                centPrice: 7461,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 17831528,
                publishTime: '2020-11-01 00:00:00',
                category: '社会文化-社科',
                categories: [
                  {
                    categoryId: 900000,
                    subCategoryId: 900002,
                    categoryType: 0,
                    title: '社会文化-社科'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 112,
                paperBook: {
                  skuId: '13011810'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 902,
                newRatingCount: 1017,
                newRatingDetail: {
                  good: 949,
                  fair: 53,
                  poor: 15,
                  recent: 98,
                  title: '神作'
                }
              },
              ratingCount: 73,
              star: 84,
              searchIdx: 12,
              readingCount: 1560,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '25077687',
                title: '遥远的向日葵地',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002FYueWen_25077687\u002Fs_YueWen_25077687.jpg',
                version: 516874156,
                format: 'epub',
                type: 0,
                price: 19,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '2017中国好书，第七届鲁迅文学奖获奖作品。阿勒泰的葵花比阿尔勒的葵花更炽烈，最亲的亲人和最亲的家畜都是家人。广受好评的新生代非虚构散文写手李娟继“羊道”三部曲后全新力作。母亲带着家禽、牲畜，举家迁徙乌伦古河岸的戈壁，定居在葵花地边的“冬窝子”，开始一段充满艰辛与奇遇的耕种生活。荒漠上开辟的百亩葵花地，经历鹅喉羚啃食、三次补种，又接连遭遇干旱、虫害，直至收获，中间是微弱的希望和漫长等待……在这些吉光片羽的记录中，作者首次集中将思绪汇聚于自己家族成员的生活细微，他们与无垠荒漠构成完整的生态样本。',
                centPrice: 1900,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2017-11-01 00:00:00',
                category: '文学-散文杂著',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300005,
                    categoryType: 0,
                    title: '文学-散文杂著'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 51,
                paperBook: {
                  skuId: '12256592'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 926,
                newRatingCount: 18131,
                newRatingDetail: {
                  good: 16953,
                  fair: 1108,
                  poor: 70,
                  recent: 752,
                  title: '神作'
                }
              },
              ratingCount: 4556,
              star: 92,
              searchIdx: 13,
              readingCount: 4107,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '41414690',
                title: '半小时漫画宇宙大爆炸',
                author: '陈磊·半小时漫画团队',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FYueWen_41414690\u002Fs_YueWen_41414690.jpg',
                version: 603286337,
                format: 'epub',
                type: 0,
                price: 39.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '半小时读完138亿年宇宙史，一口气搞懂大爆炸、奇点、黑洞、引力波、暗物质……通过手绘漫画的形式，陈磊（混子哥）及其半小时漫画团队为读者解读从宇宙大爆炸中诞生出的物质和能量，如何指引着宇宙中的一切：粒子抱团成为物质，让太阳一边发生核聚变，一边被引力压得死死的，为人类安全地提供光和热；黑洞虽然会无情地吞噬所有的光，可它的强引力也维持着周边星系的正常运转；暗物质和暗能量的博弈，会左右宇宙未来是被压扁还是被拉扯。不摆吓人的艰深理论，没有沉闷的史料堆砌，在轻松有趣的故事中了解宇宙的惊人面貌。翻开本书，笑着笑着搞定宇宙常识！',
                centPrice: 3999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2021-10-01 00:00:00',
                category: '科学技术-科学科普',
                categories: [
                  {
                    categoryId: 1500000,
                    subCategoryId: 1500003,
                    categoryType: 0,
                    title: '科学技术-科学科普'
                  },
                  {
                    categoryId: 2400000,
                    subCategoryId: 2400001,
                    categoryType: 0,
                    title: '漫画-经典改编'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 15,
                paperBook: {
                  skuId: '12994165'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 1,
                webBookControl: 0,
                newRating: 900,
                newRatingCount: 2156,
                newRatingDetail: {
                  good: 1963,
                  fair: 164,
                  poor: 29,
                  recent: 86,
                  title: '神作'
                }
              },
              ratingCount: 622,
              star: 88,
              searchIdx: 14,
              readingCount: 509,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '30599279',
                title: '逃离',
                author: '艾丽丝·门罗',
                translator: '李文俊',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F48\u002FYueWen_30599279\u002Fs_YueWen_30599279.jpg',
                version: 2460345,
                format: 'epub',
                type: 0,
                price: 29.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《逃离》讲述爱的力量和无止境的背叛，讲述琐碎生活中的不安分、错过的机会，讲述一次又一次的逃离，以及人们为此付出的代价。门罗关注日常生活，善于捕捉人与人之间复杂而微妙的关系。不同年龄、不同境况中的人，在门罗朴实克制的文笔下生动鲜活，似可触摸。\n每个人总会遇到什么事，什么人，让你觉得像肺里什么地方扎进去了一根致命的针，浅一些呼吸时可能不感到疼。可是每当需要深深吸进去一口气时，便能觉出那根针一直存在。',
                centPrice: 2999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 24367662,
                publishTime: '2016-10-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 15,
                paperBook: {
                  skuId: '12036280'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 849,
                newRatingCount: 663,
                newRatingDetail: {
                  good: 572,
                  fair: 72,
                  poor: 19,
                  recent: 75,
                  title: '脍炙人口'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 15,
              readingCount: 1029,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300095234',
                title: '一读就懂的孙子兵法',
                author: '宋忠平',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F41\u002Fcpplatform_fsamwanfq1b8rgtgsjhipy\u002Fs_cpplatform_fsamwanfq1b8rgtgsjhipy1715307908.jpg',
                version: 914070977,
                format: 'epub',
                type: 0,
                price: 46.13,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '成书于春秋晚期的《孙子兵法》是目前中国存世最早的兵书，被誉为“兵家圣典”，全书仅约6000字，却字字珠玑，处处体现顶级谋略。本书由军事评论员、国际问题专家宋忠平执笔，对2500多年前的东方智慧进行深入而透彻的解读，以助读者站在全新的角度理解《孙子兵法》的核心要义，深刻了解世界格局，机智应对商场博弈。纸书原著《读懂孙子兵法》同期上市！\n全书共分为十三章，每一章除原文、注释、译文外，还创造性地加入现代战争案例、商场如战场两部分。《孙子兵法》虽为冷兵器时代的著作，但为了能够真正展现孙武的思想跨越时空对现代战争产生的影响，探寻其长盛不衰的秘密，作者将战例限定在近现代战争，乃至未来战争的范畴。在选择战例的时候，并没有局限于某个具体的战例，而是将国与国之间的较量、国际局势的力量变化、影响世界格局的历史事件、军事科技的发展轨迹皆作为考量融入其中。\n战势在变，恒理常通。商场犹如战场，虽未见战火狼烟，不必直面生死，但也有成功与失败之分。作者将《孙子兵法》每一篇的主题都援引入商业领域竞争当中，兵法不再是难懂晦涩的理论，而成为鲜活灵动的实战指南，以帮助身处商业市场的各位竞争者看清局势，善用谋略。\n作为国学经典，《孙子兵法》跨越千年不但没有过时，反而历久弥新。它提供的战略性思维给予我们更加宏大的视野来看清全局，理清迷思，找到各种竞争中的取胜之道。',
                centPrice: 4613,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-04-16 00:00:00',
                category: '政治军事-军事',
                categories: [
                  {
                    categoryId: 1200000,
                    subCategoryId: 1200001,
                    categoryType: 0,
                    title: '政治军事-军事'
                  },
                  {
                    categoryId: 1000000,
                    subCategoryId: 1000006,
                    categoryType: 0,
                    title: '个人成长-认知思维'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 70,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 866,
                newRatingCount: 89,
                newRatingDetail: {
                  good: 70,
                  fair: 4,
                  poor: 15,
                  recent: 76,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 16,
              readingCount: 497,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '244004',
                title: '冬牧场',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F22\u002Fyuewen_244004\u002Fs_yuewen_2440041690201500.jpg',
                version: 930904483,
                format: 'epub',
                type: 0,
                price: 45,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '2010年末，李娟跟随哈萨克牧民居麻一家深入北疆阿勒泰地区沙漠深处的冬牧场，度过了一整个冬天。在漫长的寒冷世界里，李娟详实地记录下这块古老、贫瘠又广阔的土地上的所见所闻：牧民们迁徙、放牧、背雪、绣花毡、整地窝子清理畜圈，隆重豪华地串门拜访……艰辛繁重的劳动是日常也是阔大寂寞生活的乐趣与尊严。这是哈萨克族逐水草而居的游牧生活中最动荡艰难的一个季节，随着时光流转与外部世界物质的丰富，这种生活方式行将逐渐消失。所幸李娟的文字真实还原了这个场景——牧人们的冬天和牲畜们的冬天，“羊的一生是牧人的一年”。',
                centPrice: 4500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2023-06-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 46,
                paperBook: {
                  skuId: '12450399'
                },
                copyrightChapterUids: [84],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 889,
                newRatingCount: 12471,
                newRatingDetail: {
                  good: 11216,
                  fair: 1181,
                  poor: 74,
                  recent: 329,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 17,
              readingCount: 2747,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '818910',
                title: '彷徨之刃',
                author: '东野圭吾',
                translator: '刘珮瑄',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F33\u002FYueWen_818910\u002Fs_YueWen_818910.jpg',
                version: 192333847,
                format: 'epub',
                type: 0,
                price: 35.4,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '烟火大会那晚，长峰十五岁的女儿在路上被人掳走，并抛尸河中。长峰悲痛不已，女儿离家时穿着夏季和服、欢天喜地的样子，还清晰地浮现在眼前。\n案件尚未侦破，长峰收到一则匿名留言，对方似乎对真相了如指掌，并留下一个地址。长峰将信将疑，潜入那间公寓。他发现了一卷录像带，标签上写着“8月烟火夏季和服”。\n颤抖着关掉录像后，长峰给警方寄去一封信：“不管发生什么事，我都要复仇。复仇完，我会立刻去自首。”',
                centPrice: 3540,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 24367662,
                publishTime: '2021-08-01 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 52,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [53],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 764,
                newRatingCount: 18082,
                newRatingDetail: {
                  good: 13834,
                  fair: 4090,
                  poor: 158,
                  recent: 428,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 18,
              readingCount: 1176,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '924741',
                title: '性盲症患者的爱情',
                author: '张天翼',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F85\u002Fyuewen_924741\u002Fs_yuewen_9247411709195100.jpg',
                version: 1206104426,
                format: 'epub',
                type: 0,
                price: 34.86,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《性盲症患者的爱情》是一本中短篇小说集。八个故事充斥着爱与残忍、诱惑与悲伤、冒险与奇迹、命运与寓言，多篇作品都是对经典文学的重新演绎。人物荒诞离奇的行为下往往隐藏着不为人知的秘密：自幼患“性盲症”导致不辨性别的青年如何找到能与自己相伴一生的爱人？解救“睡美人”的方式居然是不要去吻醒她？有着全世界最 美轮廓的女子为何仅留巨幅的裸照就扬长而去？会不会在不远的将来，机械人比人类更有血肉，而人类却失去了珍贵的灵魂…… 作者张天翼以她魅惑的笔法和璀璨的想象力营造出一个极 具异国浪漫情调的魔法空间，情节偶尔滚落让人脸红心跳的惊喜，语言频频吐露意外的幽默。也许我们都有文中孤独“怪癖者”或过度“执着者”的影子，唯有爱，可以推开遮蔽真相的层层迷雾，穿破掩人耳目的腐朽肉体，认出彼此深处的灵魂。',
                centPrice: 3486,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 4525313,
                publishTime: '2022-03-01 00:00:00',
                category: '精品小说-情感小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100002,
                    categoryType: 0,
                    title: '精品小说-情感小说'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 12,
                paperBook: {
                  skuId: '12244551'
                },
                copyrightChapterUids: [13],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 818,
                newRatingCount: 2226,
                newRatingDetail: {
                  good: 1836,
                  fair: 319,
                  poor: 71,
                  recent: 90,
                  title: '脍炙人口'
                }
              },
              ratingCount: 435,
              star: 85,
              searchIdx: 19,
              readingCount: 475,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '23364890',
                title: '中国古代文化常识',
                author: '王力',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F83\u002FYueWen_23364890\u002Fs_YueWen_23364890.jpg',
                version: 869125399,
                format: 'epub',
                type: 0,
                price: 16.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '本书是王力教授主持并召集众多专家共同编写的关于中国古代文化常识的简明读本，出版50余年来前后历经4次重要修订，到今天仍然是大众认识中国古代文化面貌最重要、最全面的基础参考书。全书分礼俗、宗法、饮食、衣饰等十四个方面。本书曾在港台地区出版并被译成日、韩等语言流行于海内外。本次修订突破了以往的模式，特聘请在美国任教的汉学专家刘乐园（Lewis Eden），以中国考古学黄金时代的成果为出发点，通过近世考古发现与传统文献相结合的“古史新证”，从考古学和人类学的角度增补最新文化研究成果。修订的文稿和图片注释无一句空话，深入浅出，新意连连，水平之高为数十年来同类出版物中之翘楚。修订的内容中增加了一部分与文稿相配合的图片，某些关键文物的照片解析力之高也是惊人的。完成后的修订版文稿，具有很强的实用性和趣味性，修订委员会还专门为有兴趣的中学生阅读本书扫清了字词和基本概念上的障碍。',
                centPrice: 1699,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 9555120,
                publishTime: '2014-11-01 00:00:00',
                category: '社会文化-文化',
                categories: [
                  {
                    categoryId: 900000,
                    subCategoryId: 900003,
                    categoryType: 0,
                    title: '社会文化-文化'
                  }
                ],
                hasLecture: 0,
                lPushName: '走进一本书读懂几千年！揭开古代文化的面纱',
                lastChapterIdx: 19,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [31],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 905,
                newRatingCount: 3790,
                newRatingDetail: {
                  good: 3475,
                  fair: 260,
                  poor: 55,
                  recent: 76,
                  title: '神作'
                }
              },
              ratingCount: 767,
              star: 90,
              searchIdx: 20,
              readingCount: 829,
              riseCount: 0,
              bestMark: ''
            }
          ],
          showAll: 0
        },
        {
          CategoryId: 'newbook',
          totalCount: 50,
          title: '新书·出版',
          ranklist: 1,
          ranklistCover: {
            tinycode:
              'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.newbook.tinycode.2j6E9UyUae.png',
            chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_title.GWZVW5nl3Z.png',
            chart_detail_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_detail_title.s2syPpuozE.png',
            chart_detail_title_dark:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_detail_title_dark.s8aV61bNWs.png',
            chart_share_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_share_title.CQsczP1BjY.png',
            chart_share_logo:
              'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.newbook.chart_share_logo.LKfLsvXOPl.png',
            chart_book_detial_icon:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_book_detial_icon.9mdfI2l2wU.png',
            chart_tag:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_tag.yRGcg5vJI2.png',
            eink_chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.eink_chart_title.CvRJLa24MK.png',
            chart_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_title_main.ipXu36pNZV.png',
            chart_detail_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_detail_title_main.fmIjHOplcf.png',
            chart_detail_title_dark_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newbook.chart_detail_title_dark_main.kWjokA5xNW.png',
            chart_background_color_1: '#FF6F3C',
            chart_background_color_2: '#FFB341',
            chart_title_height: 96,
            chart_title_width: 612,
            desc: '最近 90 天出版的热门书籍'
          },
          recommend: '0',
          sublist: [],
          lectureBooks: [
            {
              bookInfo: {
                bookId: '3300098853',
                title: '被判死刑之后',
                author: '唐泰斯 何俊义',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F55\u002Fcpplatform_3lq1pbafdv9zmagxm2dew1\u002Fs_cpplatform_3lq1pbafdv9zmagxm2dew11715148300.jpg',
                version: 523687294,
                format: 'epub',
                type: 0,
                price: 31.2,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书是三名前服刑人员记录的监狱内7名犯人被判死刑之后的故事。\n服刑期间，他们见过形形色色的死囚，有暴富后欲望失去控制的毒枭、杀人不眨眼的大学教授、一家六口都被判死刑的“死囚家族”、身背4条人命的18岁纵火犯……\n高墙下的犯罪动机可能光怪陆离，但是罪行之下，却是我们都会面临的现实问题：\n环境对人的影响有多深远？\n如何避免人生陷入恶的循环？\n面对死亡倒计时，人会做出怎样疯狂的举动？\n为什么只有在死亡面前才能明白活着的意义？\n三位作者记录下了和7名死刑犯朝夕相处的日常，追溯了他们的人生轨迹，还原了他们在欲望笼罩之下，逐渐迷茫、失控的全过程，试图用最丰满真实的细节，讨论最割裂的人性命题。\n打开这本书，希望你可以谨慎地迈出人生每一步。',
                centPrice: 3120,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-08 00:00:00',
                category: '文学-纪实文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300002,
                    categoryType: 0,
                    title: '文学-纪实文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 13,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [14],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 719,
                newRatingCount: 836,
                newRatingDetail: {
                  good: 585,
                  fair: 168,
                  poor: 83,
                  recent: 836,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 1,
              readingCount: 4928,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099065',
                title: '更重要的是过好今天',
                author: 'bilibili',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F82\u002Fcpplatform_eeo9bwj2rq64ngaonomxjb\u002Fs_cpplatform_eeo9bwj2rq64ngaonomxjb1715239404.jpg',
                version: 1970324517,
                format: 'epub',
                type: 0,
                price: 49.9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '罗翔力荐！全网播放量500万！9位宝藏老师送给7000万年轻人的人生锦囊！从今天开始过好这一生！\n刚刚踏入社会的年轻人总是后悔过去，担心未来：焦虑三五年后的前途，反复想起失败的经历，常常后悔自己的选择……\n罗翔、戴建业、刘擎等9位宝藏老师，结合自己几十年的人生经验和智慧，对当代年轻人的求职、社交、情感、学习等方面的现状，给出了自己的观察、思考和建议。\n罗翔老师说：“昨天已经过去，明天还没有到来，今天则是一个礼物。”\n戴建业老师说：“忘掉丢脸的事情，只记住人生中的‘高光时刻’。”\n刘擎老师说：“未经反省的人生，是不值得一过的；但过度反省的人生，是过不下去的。”\n……\n《更重要的是过好今天》写给每一个被生活揍得鼻青脸肿的年轻人。',
                centPrice: 4990,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2024-04-01 00:00:00',
                category: '个人成长-励志成长',
                categories: [
                  {
                    categoryId: 1000000,
                    subCategoryId: 1000002,
                    categoryType: 0,
                    title: '个人成长-励志成长'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 55,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 769,
                newRatingCount: 359,
                newRatingDetail: {
                  good: 280,
                  fair: 54,
                  poor: 25,
                  recent: 359,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 2,
              readingCount: 2425,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098995',
                title: '微习惯：人生气场修改术',
                author: '[美]萨姆·本内特',
                translator: '徐思思',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F61\u002Fcpplatform_uctbsatl5apnrnwnwd8qhq\u002Fs_cpplatform_uctbsatl5apnrnwnwd8qhq1715163423.jpg',
                version: 1092943778,
                format: 'epub',
                type: 0,
                price: 36.88,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048641,
                intro:
                  '用小小的改变，提升你的能量感！\n有一天，你感觉自己的生活糟糕透了，无论哪个方面都显得不尽如人意。你意识到，自己是怎么在不知不觉中，把那个快乐，有能量的自己给弄丢了的？\n这就是这本书的开始，不同的是，当作者意识到了这件事后，他从深陷的沙发里跳了起来，决定探索改变的可能。\n人生有一个不变的二八定律，有时候，你只需要用20%的努力，就可以实现80%的幸福。关键是你做对了什么。而那些小小的改变，可能只是你的一个转念，也可能只是你一个轻而易举的行动，但它们确实促成了你人生整个能量场的巨大变化。\n如果你也觉得无力，无助甚至无望，你也渴望改变，渴望活成更好的自己。\n那么，就从此时此刻，翻开这本书开始。\n它会像源源不断的能量，注入你疲惫灰暗的人生。让眼光彻底赶走你头顶的阴霾！',
                centPrice: 3688,
                finished: 1,
                free: 3,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-08 00:00:00',
                category: '个人成长-人生哲学',
                categories: [
                  {
                    categoryId: 1000000,
                    subCategoryId: 1000004,
                    categoryType: 0,
                    title: '个人成长-人生哲学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 70,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [71],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 551,
                newRatingCount: 172,
                newRatingDetail: {
                  good: 85,
                  fair: 46,
                  poor: 41,
                  recent: 172,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 3,
              readingCount: 1989,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300093992',
                title: '我的外婆，从不内耗',
                author: '理微尘',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002Fcpplatform_sroogvqrrthwejxvf1q3o4\u002Fs_cpplatform_sroogvqrrthwejxvf1q3o41712138611.jpg',
                version: 755615938,
                format: 'epub',
                type: 0,
                price: 31.75,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '在我成长的过程中，是外婆的言传身教，治好了我所有的焦虑和拧巴，纠结和自卑。纸书原著《你不必是一朵花》现已上市！作者亲签锦鲤版随机掉落，愿你温柔坚定，长成自己喜欢的样子。\n我从上幼儿园时就经常被同学欺负，由于父亲尊崇“以德报怨”的理教，母亲则总是让我反省自己，成长的环境里，每每遇到苦难，我总是孤立无援，这让我的性格也变得格外的拧巴和自卑。生活于我，充满了艰辛。直到外婆走进我的成长，才逐渐开始让我的心得以安然释放，获得内在的自恰和自尊。\n我的外婆成长在一个由女性当家经商的家族，她从小就得到一种非同凡响的尊重人性的教育。以致于，别人在读书时，她一心扑在热爱的音乐上；别人都选择门当户对的婚姻时，她则嫁给了已然家道中落的外公；她用自己的公寓开夜校，教工人们读书、算数……从不内耗的外婆，永远有自己的节奏，不会在意别人的比较。她让我懂得，内耗就如一块橡皮，在理想和现实之间反复摩擦，最后擦掉了真正的自己。而好的人生，就是在恰到好处的挫折中磨砺成长，把所有的经历，都变成一种收获。\n这本书，也是我用对外婆的回忆为基础，写下的一段段关于生活智慧和心灵成长的故事与启发。激励每个人如何在现实的生活中，保持纯真和善良的同时，不失边界和底线，维护自己的本心，活出像外婆一般毫不内耗的人生。',
                centPrice: 3175,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-04-03 00:00:00',
                category: '个人成长-人生哲学',
                categories: [
                  {
                    categoryId: 1000000,
                    subCategoryId: 1000004,
                    categoryType: 0,
                    title: '个人成长-人生哲学'
                  }
                ],
                authorVids: '211411420',
                hasLecture: 1,
                lastChapterIdx: 46,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 859,
                newRatingCount: 11253,
                newRatingDetail: {
                  good: 10047,
                  fair: 808,
                  poor: 398,
                  recent: 7679,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 4,
              readingCount: 12588,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099005',
                title: '毕业工作第一年',
                author: '全民故事计划主编',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002Fcpplatform_1kbmyhhin953hyfqdhewqe\u002Fs_cpplatform_1kbmyhhin953hyfqdhewqe1715226020.jpg',
                version: 1856804198,
                format: 'epub',
                type: 0,
                price: 38,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048641,
                intro:
                  '不敢安于现状、又无力追逐梦想。\n本书汇聚了15个毕业生初入职场的第一年故事，主人公们背景各异，却共同面临着对未来的迷茫和困惑。他们或许出身名校，或许早入社会，但都在理想与现实的夹缝中挣扎。书中描绘了他们在追求稳定与实现自我之间的纠结与努力，展现了青春的奋斗与失落，汗水与希望。这些故事充满了人间的温情与冷漠，让人深刻体会到工作虽非生活的全部，却是人生必经的道路。无论是挑战还是机遇，都将成为他们成长的烙印，启迪着每一个正在或即将踏上职场征程的年轻人。',
                centPrice: 3800,
                finished: 1,
                free: 3,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-09 00:00:00',
                category: '文学-纪实文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300002,
                    categoryType: 0,
                    title: '文学-纪实文学'
                  }
                ],
                authorVids: '303215585',
                hasLecture: 0,
                lastChapterIdx: 104,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 696,
                newRatingCount: 142,
                newRatingDetail: {
                  good: 80,
                  fair: 54,
                  poor: 8,
                  recent: 142,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 5,
              readingCount: 1237,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098659',
                title: '读者（2024年第9期）',
                author: '读者',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F81\u002Fcpplatform_dgwxe3n4wpxaxhx9lx2xnw\u002Fs_cpplatform_dgwxe3n4wpxaxhx9lx2xnw1715066093.jpg',
                version: 1423912350,
                format: 'epub',
                type: 0,
                price: 7,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《读者》，原名《读者文摘》，是由读者出版传媒股份有限公司主办的中文版半月刊物。《读者》杂志发掘人性中的真、善、美，体现人文关怀。《读者》在刊物内容及形式方面与时俱进，追求高品位、高质量，力求精品，并以其形式和内容的丰富性及多样性，赢得了各个年龄段和不同阶层读者的喜爱与拥护。发行量稳居中国期刊排名第一，亚洲期刊排名第一，世界综合性期刊排名第四。被誉为“中国人的心灵读本”、“中国期刊第一品牌”。 《读者》收录的文章融思想性、知识性、趣味性为一体，追求高质量、高品位，篇篇精品。这里有正确的思想、高尚的道德、崇高的理想、生活的哲理，使读者在轻松愉快的阅读中陶冶情操、净化心灵！具有深广的影响力与历久弥新的力量！',
                centPrice: 700,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 9915788,
                publishTime: '2024-04-30 00:00:00',
                category: '期刊杂志-文学',
                categories: [
                  {
                    categoryId: 1700000,
                    subCategoryId: 1700015,
                    categoryType: 0,
                    title: '期刊杂志-文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 66,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 1,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 773,
                newRatingCount: 86,
                newRatingDetail: {
                  good: 67,
                  fair: 14,
                  poor: 5,
                  recent: 86,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 6,
              readingCount: 1214,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098412',
                title: '月子：当五个女孩成为妈妈',
                author: '姚佳黛',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002Fcpplatform_18wbnspldygodcbwmedec6\u002Fs_cpplatform_18wbnspldygodcbwmedec61714469781.jpg',
                version: 1558871570,
                format: 'epub',
                type: 0,
                price: 46.98,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '【女性群像+生育观+女性成长】这个故事不是为了吓退你，而是想将“生育”的真实模样原原本本告诉你。\n中产独生女、一路顺遂的外企白领林冉，在经历了一场前所未有的痛苦后，终于生下女儿晚晚。\n为了避免月子期间的婆媳矛盾，她住进了月子会所。\n在这里，她遇见了原生家庭成谜的金丝雀全职太太、高龄拼二胎的市井大姐、生下双胞胎的迷茫女大学生、相敬如“冰”的律师夫妻……\n尽管家庭环境、经历迥异，但她们有着最大的共同点——是妈妈。\n亲密关系、亲子关系、婆媳关系、学习育儿以及与产后的生理心理博弈，她们每个人都在坐月子的时光里重新认识了解自己、寻找真正的自己。',
                centPrice: 4698,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-04-30 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  }
                ],
                authorVids: '15253820',
                hasLecture: 0,
                lastChapterIdx: 57,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [58],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 738,
                newRatingCount: 505,
                newRatingDetail: {
                  good: 372,
                  fair: 101,
                  poor: 32,
                  recent: 505,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 7,
              readingCount: 1239,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098531',
                title: '涅朵琦卡',
                author: '[俄]陀思妥耶夫斯基',
                translator: '荣如德',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F17\u002Fcpplatform_ugxx4ijw7y5xuwnoonj7b8\u002Fs_cpplatform_ugxx4ijw7y5xuwnoonj7b81714979234.jpg',
                version: 751090264,
                format: 'epub',
                type: 0,
                price: 46.1,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '陀思妥耶夫斯基唯一以女性为主角的小说，一部未完成的少女成长史。\n故事分为“童年”、“新生活”和“秘密”三个部分，讲述了主人公涅朵奇卡三段不同时期的生活。她出生在一个极度贫困的家庭，而比物质更加困窘的却是长期受到继父控制和虐待的精神世界；在父母相继死亡后，涅朵奇卡被伯爵收养，在伯爵家里她遇到了天真又率直的卡佳，女孩间纯粹美好的友谊使她变得阳光而勇敢；之后，涅朵奇卡又来到卡佳的姐姐家，在她慈母般的照料与满室图书的浸润下继续成长，并在见证了夫妻二人的情感纠葛后能够勇敢地站出来保护受虐者。\n小说曾有一个副标题是《一个女人的历史》，但因为陀思妥耶夫斯基被流放而中断，仅仅完成了全书的三分之一，涅朵奇卡的故事永远停留在了她的17岁，却也恰恰成就了经典，留给了我们漫无边际的想象。',
                centPrice: 4610,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-06 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 23,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 784,
                newRatingCount: 182,
                newRatingDetail: {
                  good: 155,
                  fair: 27,
                  poor: 0,
                  recent: 182,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 8,
              readingCount: 902,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099272',
                title: '看世界（2024年第9期）',
                author: '看世界',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F60\u002Fcpplatform_rkyvt9bmzokpfmevjjggzc\u002Fs_cpplatform_rkyvt9bmzokpfmevjjggzc1715325335.jpg',
                version: 2030385920,
                format: 'epub',
                type: 0,
                price: 18,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '"1999年底，由广州日报市委宣传部、市新闻部出版局、市社科联等单位进行的穗版期刊评比中，我刊以总比分第一名的成绩被评为""穗版优秀期刊""；在2000年广东省第三届优秀期刊评选活动中，我刊获""广东省优秀期刊""。2002年又被评为新闻出版社总署""双效期刊""。1999年6月，中央电视台""经济半小时""对报刊的发展之路给予较高的评价和充分报道；《新闻出版社》分别在1999年12月、2000年5月和8月三度刊文正面分析我刊的成功经验。2001年～2002年由香港亚视授权本期刊独家推出""《看世界》版百万富翁、《看世界》版各出奇谋""栏目，并成功地于2001年9月27日在广州天河宏城广场与亚视联手举办了""我与《看世界》有个约会""大型宣传活动，香港著名艺员陈启泰应邀主持，同事还有近20家香港传媒记者莅临参加，这次活动在省港两地引起了较大反响。2002年元月15日，开中国期刊宣传先河之举的""广州--北京""""《看世界》号列车""首发。该列车上所有的宣传标志均由《看世界》提供，列车上也只卖《看世界》等几种指定期刊。2002年获得国家""双效""期刊奖。2003年年初又荣获第二届国家期刊奖百种重点期刊！2005年年初又荣获第三届国家期刊奖百种重点期刊！"',
                centPrice: 1800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000098,
                publishTime: '2024-04-29 00:00:00',
                category: '期刊杂志-其他',
                categories: [
                  {
                    categoryId: 1700000,
                    subCategoryId: 1700016,
                    categoryType: 0,
                    title: '期刊杂志-其他'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 30,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 664,
                newRatingCount: 100,
                newRatingDetail: {
                  good: 50,
                  fair: 47,
                  poor: 3,
                  recent: 100,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 9,
              readingCount: 486,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098852',
                title: '孙悟空拜访乔伊斯（非正常人类研究中心指定读物｜纯真的灵魂终会相遇！）',
                author: '刘按',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F89\u002Fcpplatform_77uebgx6nepcopzyuozggm\u002Fs_cpplatform_77uebgx6nepcopzyuozggm1715142855.jpg',
                version: 1571891523,
                format: 'epub',
                type: 0,
                price: 76.5,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '推开一扇窗户，然后再把它关上，你会发现什么？\n世界上成双的鞋子太多了，放单的鞋子将何去何从？\n如果一头小猪的身上有一扇神秘的门，这扇门会通往哪里？\n回想一下，你为爱情做过的最极端的事情是什么？\n在我们每个人的大脑里，都藏着一个记忆剪辑师。那些明明真实发生过，我们却怎么也想不起来的瞬间都去哪儿了？\n孤独女神每十年来人间一次，她会找到这十年里最孤独的那个人，和ta一起聊聊天。每次出现的时候，孤独女神的样子就是最孤独的那个人生命中最爱的人的样子……\n有一天，孙悟空突然对上帝到底藏身何处产生了浓厚的兴趣。而上帝只把自己的藏身之所透露给了一个忠实的信徒，并且告诉这个信徒，保守秘密死后就能上天堂，泄露秘密死后就会下地狱……\n想象力的边界，就是世界的边界。\n纯真的灵魂各有不同，但他们终将因纯真而相遇！',
                centPrice: 7650,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-08 00:00:00',
                category: '文学-散文杂著',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300005,
                    categoryType: 0,
                    title: '文学-散文杂著'
                  }
                ],
                authorVids: '11018',
                hasLecture: 0,
                lastChapterIdx: 37,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 688,
                newRatingCount: 115,
                newRatingDetail: {
                  good: 79,
                  fair: 11,
                  poor: 25,
                  recent: 115,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 10,
              readingCount: 546,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300096610',
                title: '早安，怪物',
                author: '[加]凯瑟琳·吉尔迪纳',
                translator: '木草草',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F97\u002Fcpplatform_hre43m7tloyfetmcyqwrgu\u002Fs_cpplatform_hre43m7tloyfetmcyqwrgu1714270637.jpg',
                version: 1923281189,
                format: 'epub',
                type: 0,
                price: 59.8,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '这是一位心理治疗师的回忆录，在书中，她回忆了自己25年职业生涯中最难忘的五位来访者。这五个人在童年时都曾经遭遇过严重的心理创伤，要揭开伤疤，正视发生在自己身上的一切，需要当事人的勇气和决心，也考验着治疗师的创造力和洞察力。这本书描述的就是这五个人在心理层面的“英雄之旅”，他们每个人都手握不同的武器，采取不同的战斗策略，战胜了内心的伤痛和恐惧。这些故事读来令人心碎，却展现了令人感佩的坚韧和勇气，也展现了心理治疗的奇迹。',
                centPrice: 5980,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -3319053,
                publishTime: '2024-02-01 00:00:00',
                category: '心理-心理学应用',
                categories: [
                  {
                    categoryId: 800000,
                    subCategoryId: 800005,
                    categoryType: 0,
                    title: '心理-心理学应用'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 42,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 897,
                newRatingCount: 272,
                newRatingDetail: {
                  good: 257,
                  fair: 13,
                  poor: 2,
                  recent: 272,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 11,
              readingCount: 1428,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099151',
                title: '财经（2024年第10期）',
                author: '财经',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F66\u002Fcpplatform_jvaxnfra3hkyflvv1s9dy8\u002Fs_cpplatform_jvaxnfra3hkyflvv1s9dy81715309127.jpg',
                version: 1030418258,
                format: 'epub',
                type: 0,
                price: 18,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '新“国九条”聚焦中国式现代化这一中心，锚定金融强国建设这一奋斗目标，分阶段提出了未来一段时期资本市场的发展目标。其在发行上市、退市、上市公司和机构监管等方面的举措，将给资本市场带来深远影响',
                centPrice: 1800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 4559092,
                publishTime: '2024-05-06 00:00:00',
                category: '期刊杂志-财经',
                categories: [
                  {
                    categoryId: 1700000,
                    subCategoryId: 1700001,
                    categoryType: 0,
                    title: '期刊杂志-财经'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 55,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 677,
                newRatingCount: 66,
                newRatingDetail: {
                  good: 36,
                  fair: 24,
                  poor: 6,
                  recent: 66,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 12,
              readingCount: 399,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300100096',
                title: '鳄鱼',
                author: '莫言',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F82\u002Fcpplatform_qryw98bvfedjtb2xwxxhvy\u002Fs_cpplatform_qryw98bvfedjtb2xwxxhvy1715763275.jpg',
                version: 38562662,
                format: 'epub',
                type: 0,
                price: 24,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '莫言获诺贝尔文学奖十年后推出的一部具有魔幻色彩的话剧剧作。莫言曾在莎士比亚故居的莎翁塑像前发下誓言，用后半生完成从小说家到剧作家的转型，本书即为这一誓言的见证，是莫言的华丽转型之作。\n《鳄鱼》的故事围绕主人公单无惮及其在生日派对上收到的贺礼“鳄鱼”展开。了解到鳄鱼的生长取决于环境限制程度的特性，心事重重的无惮对鳄鱼产生了浓厚的兴趣。十年来，他不断为鳄鱼更换更大的鱼缸，纵容着鳄鱼不断长大，直至成为长达四米的庞然巨兽……通过一条无限生长的鳄鱼，故事挖掘人性深处的秘密，深刻探讨“欲望”这一主题。',
                centPrice: 2400,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-15 00:00:00',
                category: '文学-戏剧文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300008,
                    categoryType: 0,
                    title: '文学-戏剧文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 18,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 731,
                newRatingCount: 291,
                newRatingDetail: {
                  good: 209,
                  fair: 73,
                  poor: 9,
                  recent: 130,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 13,
              readingCount: 1354,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300076692',
                title: '河边的错误（微信读书联合出品）',
                author: '余华',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F20\u002Fcpplatform_3jmpdvspgnr8nksrdsjdyg\u002Fs_cpplatform_3jmpdvspgnr8nksrdsjdyg1715156593.jpg',
                version: 1004869574,
                format: 'epub',
                type: 0,
                price: 49.9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '发疯虽然解决不了问题，但至少能让我痛快一把！\n余华发疯自救之作！28岁的余华也想发疯！\n本书收录《河边的错误》《现实一种》《一九八六年》《古典爱情》四篇余华早期小说代表作。这些作品记录了余华1986到1988两年多的写作经历，也记录了这两年多令他不安的精神状态。 \n看透人生荒诞本质的余华，用冷静直接的语言再现荒唐的生存状态，每一篇都疯狂得毛骨悚然：刑警队长在追凶过程中逐渐走向疯癫；兄弟之间冤冤相报、陷入复仇的循环；历史老师活在残忍的幻想中，不断自我伤害……\n每个人都有奈何不了的人生困境，偶尔放弃理性反而活得轻松起来。',
                centPrice: 4990,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2024-05-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 54,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 753,
                newRatingCount: 4840,
                newRatingDetail: {
                  good: 3850,
                  fair: 796,
                  poor: 194,
                  recent: 159,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 14,
              readingCount: 422,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098642',
                title: '心理与力学',
                author: '李宗吾',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F17\u002Fcpplatform_9xzkwvnxke3xhwpdqa2srx\u002Fs_cpplatform_9xzkwvnxke3xhwpdqa2srx1715052214.jpg',
                version: 529182720,
                format: 'epub',
                type: 0,
                price: 25.42,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '一部惊世奇书《厚黑学》震惊华夏！李宗吾，这位被誉为“影响中国文化的十大奇才怪杰”之一的杰出人物，再次以其深邃的思考和独到的见解，为我们呈现了一部非凡之作——《心理与力学》。在这部作品中，李宗吾巧妙地借用了物理学中的力学原理，深入剖析了人的心理及其发展轨迹。他独树一帜地提出了“心理遵循力学规律而演变”的观点，为我们理解人性的复杂与多变提供了全新的视角。不仅如此，该书还深入揭示了人与人之间错综复杂的关系，并结合了中国历史中人物间关系的变化，为我们明晰地指出了“人事发展的脉络”和“世界演进的轨迹”。通过这一独特的分析，我们得以更加深入地理解社会现象和人类行为的本质。同时，李宗吾还针对当时在中国思想界颇具影响力的达尔文的生存竞争学说和克鲁泡特金的无政府主义进行了深入的批判与反思。他以独到的见解和犀利的笔触，对这些学说进行了深入的剖析和质疑，展现出了他对于社会问题和思想观念的敏锐洞察力和深刻思考。李宗吾的文字，表面看似朴实幽默，但细细品味，却能感受到其深刻而震撼人心的力量。他的文字中蕴含着丰富的哲理和智慧，让人在轻松愉快的阅读中得到了深刻的启示和感悟。',
                centPrice: 2542,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-07 00:00:00',
                category: '个人成长-人生哲学',
                categories: [
                  {
                    categoryId: 1000000,
                    subCategoryId: 1000004,
                    categoryType: 0,
                    title: '个人成长-人生哲学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 17,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 680,
                newRatingCount: 145,
                newRatingDetail: {
                  good: 96,
                  fair: 20,
                  poor: 29,
                  recent: 97,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 15,
              readingCount: 332,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098278',
                title: '其实也可以放弃：6个普通人的工作手记',
                author: '吴毅 熠堂 一叶苇啾 南安 加简 田里和树',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F58\u002Fcpplatform_kh3smngft9p3rgyvekfixw\u002Fs_cpplatform_kh3smngft9p3rgyvekfixw1714457907.jpg',
                version: 165244883,
                format: 'epub',
                type: 0,
                price: 38.8,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '【工作感悟+人生选择+自我价值】挣扎在不同岗位上的打工人，是选择苦熬还是离开？\n本书记录了6篇打工人的真实手记。通过六位身处不同行业、年龄各异的普通打工者的真实手记，展现了他们在工作中的希冀、挣扎与放弃。他们之中，有怀揣着创作梦的外卖送餐员，有在车站饭堂打工的小城少年，有降薪跳槽到国企的互联网打工人，有在风吹日晒中苦熬的机务工作者，有为二本学生操碎了心的学校辅导员，有思考着能为孩子留下什么的支教老师……从他们的故事中会发现，无论是似带光环的互联网厂工，还是不被看见的基层工作人员，抑或是奉行多劳多得原则的体力劳动者，「工作」或多或少意味着在理想与生存之间作出某种取舍。放弃，对于他们来说，不仅仅是工作上的选择，更是对人生价值和意义的重新审视。书中记录了他们内心的挣扎与痛苦，也展现了他们在放弃与坚持之间的思考与抉择。这不仅是一本关于打工者的书，更是一场关于人生选择、坚持与放弃的哲学思考。\n漫长的打工岁月中，哪些是我们应坚守的底线，哪些又是应释怀的琐碎？',
                centPrice: 3880,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-04-30 00:00:00',
                category: '文学-纪实文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300002,
                    categoryType: 0,
                    title: '文学-纪实文学'
                  }
                ],
                authorVids: '969239',
                hasLecture: 0,
                lastChapterIdx: 69,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 699,
                newRatingCount: 209,
                newRatingDetail: {
                  good: 126,
                  fair: 69,
                  poor: 14,
                  recent: 209,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 16,
              readingCount: 827,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098641',
                title: '人生欢（首届梁晓声青年文学奖获奖作品）',
                author: '上官文露',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002Fcpplatform_ufixdyj9qfoltuj1mr8j2i\u002Fs_cpplatform_ufixdyj9qfoltuj1mr8j2i1715315550.jpg',
                version: 1151849100,
                format: 'epub',
                type: 0,
                price: 43.53,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '她们用注定悲剧的人生，反抗着被遗忘的罪恶。\n这是一本女性故事合集，与生活的纠缠与困斗贯穿她们的一生，而从未享受过自由的她们只能用自己的方式徒劳地探索人生的存在价值。或许，相比于成功，失败和死亡更是人生的必修课。\n《人生欢》里的李蜜将青春演绎成一场残酷的受难，此后的人生也成了沼泽。走进这滩沼泽的她，和苦难深刻地交缠和痴缠是她唯一的反抗。《赌徒》中的王小满则将反抗精神贯穿一生。然而，她懂得如何破坏，却不知如何建立。最终，她成了一名家徒四壁的赌徒，毁掉了自己和所有周围亲人的人生。在命运的轮盘上一败涂地。《锈鹃》里的李杜娟，一生倔强，折腾了一辈子，经历股灾破产，配偶出轨，父母离去，兄弟阋墙，子女叛逆等人生无常，最终在精神病院沦为任人摆布的疯子。《新娘》里顽固地抵御时间侵蚀的女人万提斯，在生活的苦难磨砺中，摸索前行。\n她们注定以绝望收场的命运，被带上了时代深刻的底色。',
                centPrice: 4353,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-07 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  }
                ],
                authorVids: '276680',
                hasLecture: 0,
                lastChapterIdx: 64,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 857,
                newRatingCount: 78,
                newRatingDetail: {
                  good: 70,
                  fair: 7,
                  poor: 1,
                  recent: 78,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 17,
              readingCount: 1194,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099284',
                title: '吧唧一口，全部吃掉',
                author: '[日]高木直子',
                translator: '小岩井',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F33\u002Fcpplatform_ugowfsmyb3rp4oxjqb6hwg\u002Fs_cpplatform_ugowfsmyb3rp4oxjqb6hwg1715328029.jpg',
                version: 1921103649,
                format: 'epub',
                type: 0,
                price: 55,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '成为妻子、母亲后的高木直子，人生中有了一项新任务——做便当。\n如何让便当更美味、分量够不够吃、用什么食材丈夫和女儿才会喜欢呢......',
                centPrice: 5500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-13 00:00:00',
                category: '漫画-经典改编',
                categories: [
                  {
                    categoryId: 2400000,
                    subCategoryId: 2400001,
                    categoryType: 0,
                    title: '漫画-经典改编'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 26,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 1,
                webBookControl: 0,
                newRating: 743,
                newRatingCount: 108,
                newRatingDetail: {
                  good: 81,
                  fair: 22,
                  poor: 5,
                  recent: 108,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 18,
              readingCount: 322,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300094525',
                title: '老张家的七个女儿',
                author: '婉兮',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F49\u002Fcpplatform_k3wdha5xs938aa3mpeuskx\u002Fs_cpplatform_k3wdha5xs938aa3mpeuskx1712653210.jpg',
                version: 1241785796,
                format: 'epub',
                type: 0,
                price: 153.31,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '【家庭群像+女性命运+时代变迁】老张家一辈子得了七个女儿。\n20世纪80年代，云南个鸣的云水村，锡矿工人老张一家就住在这里。\n老张一辈子盼着多子多孙、开枝散叶，妻子却接连生了七个女儿。\n1984年，老张从锡矿退休，大女儿和二女儿在谁顶班进城的问题上产生冲突，谁料下岗潮也随之而来；\n三女儿婚后与婆家矛盾不断，怀孕后更是遭到丈夫家暴，无法忍耐的她决心离婚；\n四女儿找了个上门女婿，和老张夫妻磕磕绊绊生活在同一屋檐下；\n还有想要改变命运的五女儿，倾国倾城的六女儿，全家最小的老七……\n这是老张家男女老少的故事，是一群女性跟随时代闯出各自人生的故事，更是1988-2024年间千千万万农村家庭的真实缩影。\n一辈子啊，就这么长，这么短。\n本书为《老张家的七个女儿》上部。',
                centPrice: 15331,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-04-09 00:00:00',
                category: '精品小说-家庭故事',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100015,
                    categoryType: 0,
                    title: '精品小说-家庭故事'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 78,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 864,
                newRatingCount: 992,
                newRatingDetail: {
                  good: 886,
                  fair: 83,
                  poor: 23,
                  recent: 795,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 19,
              readingCount: 2330,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099150',
                title: '后宫：影响历史的二十四位后妃',
                author: '赵鹏',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F61\u002Fcpplatform_nklb7ybn7evd1ytn9ckuhk\u002Fs_cpplatform_nklb7ybn7evd1ytn9ckuhk1715308542.jpg',
                version: 1447084481,
                format: 'epub',
                type: 0,
                price: 79,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048641,
                intro:
                  '宫斗剧里演不出、讲不到和不敢演的真实历史后宫故事。\n后宫，是古代帝王的私人领地，也是权力的象征。而对于生活在后宫的后妃，我们又了解多少？\n本书选取了24个不同朝代的后妃，从商朝的妇好到晚清的钮祜禄氏，她们通过巧妙地施展个人魅力和智慧，成为改变历史进程的关键人物。她们是万里挑一的奇女子，也是影响历史进程的女强人，更是从嫉妒、阴谋、陷害、谋杀、竞争、血泪中突出重围的胜利者。\n在她们的传奇人生背后，隐藏着怎样的故事和秘密？这本书将带你感受她们的热情与挣扎，智慧与勇气，权谋与手段，重新认识这些影响了历史的女性。',
                centPrice: 7900,
                finished: 1,
                free: 3,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-10 00:00:00',
                category: '历史-历史读物',
                categories: [
                  {
                    categoryId: 200000,
                    subCategoryId: 200003,
                    categoryType: 0,
                    title: '历史-历史读物'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 26,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 0,
                newRatingCount: 40,
                newRatingDetail: {
                  good: 22,
                  fair: 8,
                  poor: 10,
                  recent: 40,
                  title: '评分不足'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 20,
              readingCount: 271,
              riseCount: 0,
              bestMark: ''
            }
          ],
          showAll: 0
        },
        {
          CategoryId: 'general_novel_rising',
          totalCount: 50,
          title: '小说榜',
          ranklist: 1,
          ranklistCover: {
            chart_background_color_1: '#0CC7F0',
            chart_background_color_2: '#0CE4E1',
            chart_title_height: 96,
            chart_title_width: 471,
            desc: '微信读书用户近期热读的精品小说',
            chart_tag:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.general_novel_rising.chart_tag.HMhvXGKn5e.png',
            eink_chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.general_novel_rising.eink_chart_title.qe1RRm02RG.png'
          },
          recommend: '0',
          sublist: [],
          lectureBooks: [
            {
              bookInfo: {
                bookId: '462592',
                title: '庆余年',
                author: '猫腻',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F592\u002F462592\u002Fs_462592.jpg',
                version: 0,
                format: 'txt',
                type: 0,
                price: -1,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 2,
                payType: 2105346,
                intro:
                  '　　积善之家，必有余庆，留余庆，留余庆，忽遇恩人；幸娘亲，幸娘亲，积得阴功。劝人生，济困扶穷……而谁可知，人生于世，上承余庆，终究却是要自己做出道路抉择，正是所谓岔枝发：\r\n　　东风携云雨，幼藤吐新芽。\r\n　　急催如颦鼓，洗尽茸与华。\r\n　　且待朝阳至，绿遍庭中架。\r\n　　更盼黄叶时，采得数枚瓜。\r\n　　……\r\n　　……\r\n　　《庆余年》同名影视剧由张若昀、李沁、陈道明、吴刚等主演，11月26日起在腾讯视频、爱奇艺开播。',
                centPrice: 17780,
                finished: 1,
                free: 0,
                mcardDiscount: 20,
                ispub: 2,
                cpid: 5,
                publishTime: '',
                realPrice: 17780,
                category: '男生小说-历史架空',
                categories: [
                  {
                    categoryId: 1900000,
                    subCategoryId: 1900008,
                    categoryType: 1,
                    title: '男生小说-历史架空'
                  },
                  {
                    categoryId: 100000,
                    subCategoryId: 100012,
                    categoryType: 0,
                    title: '精品小说-影视原著'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 777,
                paperBook: {
                  skuId: '12988476'
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 858,
                newRatingCount: 240433,
                newRatingDetail: {
                  good: 206351,
                  fair: 29448,
                  poor: 4634,
                  recent: 187,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 1,
              readingCount: 5638,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300036895',
                title: '费可的晚宴',
                author: '珞珈',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002FcpPlatform_dCqi6dpbtB1eynDnjD12j2\u002Fs_cpPlatform_dCqi6dpbtB1eynDnjD12j2.jpg',
                version: 1959988369,
                format: 'epub',
                type: 0,
                price: 25,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '中国版《无人生还》，最好的悬疑来自现实，藏于人心。珞珈都市悬疑最新力作。谎言和真相编织出缜密大网，一场晚宴，“无人生还”，这是一个“天才雷普利”式的故事。欲望面前，人性暴露无遗。\n一个神秘的晚宴邀请，将六个互不相识的陌生人齐聚于一幢湖畔别墅。\n晚宴的主人却始终不见现身。\n随着剧情的展开，交织的回忆和现实，渐渐揭示出他们未曾发现的联系——原来他们所有人，都被这晚宴的主人欺骗过。\n一段段充斥着欲望与背叛、诱惑与悲凉的故事，勾勒出了一个男人令人唏嘘的一生。\n然而，再善良的人也有阴暗的一点私心。再邪恶的人，也可能动过善念。\n真相，也许只存在于未曾讲述出来的故事里。',
                centPrice: 2500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2022-11-14 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 12,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 640,
                newRatingCount: 3936,
                newRatingDetail: {
                  good: 1995,
                  fair: 1582,
                  poor: 359,
                  recent: 3595,
                  title: '褒贬不一'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 2,
              readingCount: 4715,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300010685',
                title: '一地鸡毛（典藏版）',
                author: '刘震云',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F85\u002F3300010685\u002Fs_3300010685.jpg',
                version: 179157571,
                format: 'epub',
                type: 0,
                price: 45,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《一地鸡毛》被称为新写实主义的代表作，获得多种文学奖，描写了主人公小林在单位在家庭的种种遭遇和心灵轨迹的演变。菜篮子、妻子、孩子、豆腐、保姆、单位中的恩恩怨怨和是是非非。从而反映了大多数中国人在八九十年代的日常生活和生存状态。它真实而生动地反映了大多数中国人生活的主旋律，深刻反映了改革开放的新形势给人们内心和外在的变化。本书以生动的细节和人物形象取胜，是一部精彩作品。  《一地鸡毛》在 出版时就引起轰动，被称为新写实主义的代表作，获得多种文学奖。其中很多篇目是琐碎人生的范本和关系学的教科书。菜篮子、妻子、孩子、保姆、单位……当中的恩恩怨怨和是是非非将官场和家庭的鸡毛蒜皮纤毫毕现，不嫌其俗，不掩其恶，人心之险展示无遗。',
                centPrice: 4500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 16558172,
                publishTime: '2016-08-01 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  },
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 11,
                paperBook: {
                  skuId: '11089589'
                },
                copyrightChapterUids: [12],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 915,
                newRatingCount: 17754,
                newRatingDetail: {
                  good: 16514,
                  fair: 1013,
                  poor: 227,
                  recent: 807,
                  title: '神作'
                }
              },
              ratingCount: 3056,
              star: 90,
              searchIdx: 3,
              readingCount: 4614,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300024943',
                title: '一句顶一万句（2022新版）',
                author: '刘震云',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F43\u002F3300024943\u002Fs_3300024943.jpg',
                version: 973956334,
                format: 'epub',
                type: 0,
                price: 35,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《一句顶一万句》是作家刘震云创作于2006年到2008年的长篇小说[1]，2011年8月获得第八届茅盾文学奖[2]。小说的主题是讲“一个人想找另一个人说句话不容易”。',
                centPrice: 3500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -1369172,
                publishTime: '2022-08-01 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  },
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 32,
                paperBook: {
                  skuId: '13296065'
                },
                copyrightChapterUids: [8],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 907,
                newRatingCount: 22562,
                newRatingDetail: {
                  good: 20904,
                  fair: 1267,
                  poor: 391,
                  recent: 1374,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 4,
              readingCount: 5554,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '22261199',
                title: '剑来',
                author: '烽火戏诸侯',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F16\u002FYueWen_22261199\u002Fs_YueWen_22261199.jpg',
                version: 0,
                format: 'txt',
                type: 0,
                price: -1,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 2,
                payType: 8194,
                intro:
                  '    大千世界，无奇不有。 我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！\r\n',
                centPrice: 6777,
                finished: 0,
                free: 0,
                mcardDiscount: 20,
                ispub: 2,
                extra_type: 1,
                cpid: -1044052,
                publishTime: '2018-06-08 00:00:00',
                realPrice: 6777,
                category: '男生小说-东方玄幻',
                categories: [
                  {
                    categoryId: 1900000,
                    subCategoryId: 1900001,
                    categoryType: 1,
                    title: '男生小说-东方玄幻'
                  },
                  {
                    categoryId: 100000,
                    subCategoryId: 100006,
                    categoryType: 0,
                    title: '精品小说-玄幻精品'
                  }
                ],
                hasLecture: 1,
                lPushName: '我有一剑 可搬山倒海降妖镇魔。',
                lastChapterIdx: 1274,
                paperBook: {
                  skuId: '12847760'
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 862,
                newRatingCount: 147208,
                newRatingDetail: {
                  good: 127177,
                  fair: 12400,
                  poor: 7631,
                  recent: 524,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 5,
              readingCount: 33587,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300089507',
                title: '十八岁出门远行',
                author: '余华',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F76\u002Fcpplatform_wgrarreffhztq9gdutmtkm\u002Fs_cpplatform_wgrarreffhztq9gdutmtkm1709815416.jpg',
                version: 101029837,
                format: 'epub',
                type: 0,
                price: 45,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '一定要出去闯闯，哪怕鼻青脸肿！\n一战成名！一发表就震惊文坛，让27岁的余华开始载入中国当代文学史。\n我感到这汽车虽然遍体鳞伤，可它心窝还是健全的，还是暖和的。我知道自己的心窝也是暖和的。我一直在寻找旅店，没想到旅店你竟在这里。——《十八岁出门远行》\n全书收录《十八岁出门远行》《鲜血梅花》《往事与刑罚》《此文献给少女杨柳》等十篇余华极具代表性的短篇小说佳作，全面呈现余华年轻时的写作风貌。《十八岁出门远行》写的是每个年轻人的理想、困惑、幻灭与成长。',
                centPrice: 4500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2024-03-01 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 16,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 724,
                newRatingCount: 3229,
                newRatingDetail: {
                  good: 2217,
                  fair: 811,
                  poor: 201,
                  recent: 1066,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 6,
              readingCount: 2986,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300094525',
                title: '老张家的七个女儿',
                author: '婉兮',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F49\u002Fcpplatform_k3wdha5xs938aa3mpeuskx\u002Fs_cpplatform_k3wdha5xs938aa3mpeuskx1712653210.jpg',
                version: 1241785796,
                format: 'epub',
                type: 0,
                price: 153.31,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '【家庭群像+女性命运+时代变迁】老张家一辈子得了七个女儿。\n20世纪80年代，云南个鸣的云水村，锡矿工人老张一家就住在这里。\n老张一辈子盼着多子多孙、开枝散叶，妻子却接连生了七个女儿。\n1984年，老张从锡矿退休，大女儿和二女儿在谁顶班进城的问题上产生冲突，谁料下岗潮也随之而来；\n三女儿婚后与婆家矛盾不断，怀孕后更是遭到丈夫家暴，无法忍耐的她决心离婚；\n四女儿找了个上门女婿，和老张夫妻磕磕绊绊生活在同一屋檐下；\n还有想要改变命运的五女儿，倾国倾城的六女儿，全家最小的老七……\n这是老张家男女老少的故事，是一群女性跟随时代闯出各自人生的故事，更是1988-2024年间千千万万农村家庭的真实缩影。\n一辈子啊，就这么长，这么短。\n本书为《老张家的七个女儿》上部。',
                centPrice: 15331,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-04-09 00:00:00',
                category: '精品小说-家庭故事',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100015,
                    categoryType: 0,
                    title: '精品小说-家庭故事'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 78,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 864,
                newRatingCount: 992,
                newRatingDetail: {
                  good: 886,
                  fair: 83,
                  poor: 23,
                  recent: 795,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 7,
              readingCount: 2330,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '933334',
                title: '龙族（1-4合集）',
                author: '江南',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F334\u002F933334\u002Fs_933334.jpg',
                version: 0,
                format: 'txt',
                type: 0,
                price: 97.9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 2,
                payType: 4097,
                intro:
                  '    累计销售量达千万册的青春幻想小说，被誉为“东方的《哈利·波特》”，作者江南本人获得2013年中国作家富豪榜榜首的荣誉。主角路明非原本只是一个普通的高中生，在申请留学的时候收到了来自屠龙学院——卡塞尔学院的来信，从此开启了他不平凡的人生，在伙伴陈墨瞳、楚子航、恺撒等人的帮助下，属于龙族的神秘世界逐渐在他们面前展开，路明非神秘莫测的身世也慢慢浮出水面。\n',
                centPrice: 9790,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                cpid: 2000000696,
                publishTime: '2015-12-01 00:00:00',
                category: '精品小说-玄幻精品',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100006,
                    categoryType: 0,
                    title: '精品小说-玄幻精品'
                  }
                ],
                authorVids: '214223407',
                hasLecture: 0,
                lPushName: '江南经典代表作 东方的哈利波特',
                lastChapterIdx: 419,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 898,
                newRatingCount: 38766,
                newRatingDetail: {
                  good: 34940,
                  fair: 3022,
                  poor: 804,
                  recent: 246,
                  title: '好评如潮'
                }
              },
              ratingCount: 3020,
              star: 89,
              searchIdx: 8,
              readingCount: 1587,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '834525',
                title: '雪中悍刀行（张若昀、李庚希主演）',
                author: '烽火戏诸侯',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F39\u002Fyuewen_834525\u002Fs_yuewen_8345251706673008.jpg',
                version: 1131143676,
                format: 'epub',
                type: 0,
                price: 399,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '烽火戏诸侯开创奇幻武侠新世界，持续热销，再创高峰！魔窟北凉的草包世子徐凤年兀自觉醒，逐渐成熟，踏上了逆袭之路。他一刀将江湖捅了个透！妖刀烽火颠覆传统用鬼斧般的文字创造了一个奇特而神秘的世界。这里有牵瘦马缺门牙见着歹人跑得比主子还快却是传说中的高手的老黄，有整日摇摇晃晃不求道却能一剑开天门，倒骑青牛的年轻道士，有刚出世便跌入武评第八，一声剑响成了陆地神仙敢叫天下第二劈海相送的断臂抠脚的老剑神，还有骑熊猫扛向日葵不太冷的少女杀手……',
                centPrice: 39900,
                finished: 1,
                free: 0,
                mcardDiscount: 20,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2017-10-01 00:00:00',
                category: '精品小说-玄幻精品',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100006,
                    categoryType: 0,
                    title: '精品小说-玄幻精品'
                  },
                  {
                    categoryId: 100000,
                    subCategoryId: 100012,
                    categoryType: 0,
                    title: '精品小说-影视原著'
                  }
                ],
                hasLecture: 0,
                lPushName: '张若昀主演，王倦导演，庆余年同款班底！',
                lastChapterIdx: 1026,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 910,
                newRatingCount: 81358,
                newRatingDetail: {
                  good: 74129,
                  fair: 5617,
                  poor: 1612,
                  recent: 195,
                  title: '神作'
                }
              },
              ratingCount: 7792,
              star: 86,
              searchIdx: 9,
              readingCount: 7091,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '27423355',
                title: '山',
                author: '刘慈欣',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F43\u002Fyuewen_27423355\u002Fs_yuewen_274233551713267903.jpg',
                version: 364443049,
                format: 'epub',
                type: 0,
                price: 18.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '本书是刘慈欣中短篇科幻小说合集，收录了《山》《朝闻道》《欢乐颂》等众多优秀作品，让我们走进刘慈欣的科幻世界，感受科幻文学的无穷魅力！',
                centPrice: 1899,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 6701554,
                publishTime: '2024-04-01 00:00:00',
                category: '精品小说-科幻小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100004,
                    categoryType: 0,
                    title: '精品小说-科幻小说'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 14,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [26],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 901,
                newRatingCount: 9851,
                newRatingDetail: {
                  good: 8974,
                  fair: 797,
                  poor: 80,
                  recent: 427,
                  title: '神作'
                }
              },
              ratingCount: 1211,
              star: 90,
              searchIdx: 10,
              readingCount: 1988,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '853116',
                title: '杀死一只知更鸟（同名电影原著）',
                author: '哈珀·李',
                translator: '李育超',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F32\u002FYueWen_853116\u002Fs_YueWen_853116.jpg',
                version: 357947648,
                format: 'epub',
                type: 0,
                price: 55.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '《杀死一只知更鸟》的故事发生在大萧条时期美国南方一个静谧的小镇，几桩离奇的疑案彻底打破了几个孩子平静的生活：事件的真凶，怪人的谜底，传言背后的真相……在父亲的指引下，他们在迷雾中寻找真知，在磨难中历练风度，在不公平中积累正气，经历了暴风骤雨般的成长，也感受了人间的温暖与真情。',
                centPrice: 5599,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 13583905,
                publishTime: '2017-02-01 00:00:00',
                category: '精品小说-影视原著',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100012,
                    categoryType: 0,
                    title: '精品小说-影视原著'
                  },
                  {
                    categoryId: 300000,
                    subCategoryId: 300014,
                    categoryType: 0,
                    title: '文学-世界名著'
                  }
                ],
                hasLecture: 0,
                lPushName: '愿你克服偏见 愿你一往无前',
                lastChapterIdx: 36,
                paperBook: {
                  skuId: '12037351'
                },
                copyrightChapterUids: [35],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 919,
                newRatingCount: 93130,
                newRatingDetail: {
                  good: 86205,
                  fair: 6305,
                  poor: 620,
                  recent: 1388,
                  title: '神作'
                }
              },
              ratingCount: 13930,
              star: 92,
              searchIdx: 11,
              readingCount: 4151,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '465030',
                title: '凡人修仙传',
                author: '忘语',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F30\u002F465030\u002Fs_465030.jpg',
                version: 0,
                format: 'txt',
                type: 0,
                price: -1,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 2,
                payType: 2105346,
                intro:
                  '　　一个普通山村小子，偶然下进入到当地江湖小门派，成了一名记名弟子。他以这样身份，如何在门派中立足,如何以平庸的资质进入到修仙者的行列，从而笑傲三界之中！\n　　  诸位道友，忘语新书《仙者》，经在起点中文网上传了，欢迎大家继续支持哦！',
                centPrice: 34187,
                finished: 1,
                free: 0,
                mcardDiscount: 20,
                ispub: 2,
                cpid: 5,
                publishTime: '',
                realPrice: 34187,
                category: '男生小说-仙侠武侠',
                categories: [
                  {
                    categoryId: 1900000,
                    subCategoryId: 1900003,
                    categoryType: 1,
                    title: '男生小说-仙侠武侠'
                  },
                  {
                    categoryId: 100000,
                    subCategoryId: 100013,
                    categoryType: 0,
                    title: '精品小说-优质网文'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 2562,
                paperBook: {
                  skuId: '13169529'
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 856,
                newRatingCount: 26643,
                newRatingDetail: {
                  good: 22853,
                  fair: 2929,
                  poor: 861,
                  recent: 74,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 12,
              readingCount: 1206,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300049180',
                title: '小巷人家',
                author: '大米',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F32\u002Fcpplatform_wxxo2bpco5xlabw5b7y38v\u002Fs_cpplatform_wxxo2bpco5xlabw5b7y38v1705993399.jpg',
                version: 1352113696,
                format: 'epub',
                type: 0,
                price: 29.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '20世纪70年代末，苏州棉纺厂家属区一条小巷里住着庄家、林家、吴家三个家庭，恢复高考、知青返城和改革开放等时代变迁让三家家长和孩子们的命运都发生了翻天覆地的变化。\n长辈们先后随时代变迁，或调动或留职停薪，各寻出路。\n晚辈们随时代变迁而拼搏。\n庄家长子庄图南考入同济建筑系，但国家统包统分，他无法决定自己的毕业去向，同时，他的暗恋对象李佳为了留沪，放弃了两人间的感情萌芽。数年后，两人在浦东新区的工地上重逢......\n次女庄筱婷考入上海交通大学，毕业后和男友林栋哲两地分居，两人瞒着家人偷偷领了结婚证......\n外甥儿向鹏飞是知青子女，他孤身一人回苏州上学，但高考落榜......\n社会青年李一鸣和宋向阳在两次落榜后，分别成为了个体工商户和乡镇企业技术员......\n邻居吴家的长女吴姗姗受家庭环境拖累，变得争强好胜......\n吴家继女张敏就读纺织职高，毕业时恰逢棉纺厂人员精简，不再招收职高或技校文凭的职工子弟......\n一方小院，袅袅炊烟，\n几家人、两代人的故事。',
                centPrice: 2999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 5895577,
                publishTime: '2023-02-01 00:00:00',
                category: '精品小说-家庭故事',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100015,
                    categoryType: 0,
                    title: '精品小说-家庭故事'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 72,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [250],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 930,
                newRatingCount: 25119,
                newRatingDetail: {
                  good: 23819,
                  fair: 1061,
                  poor: 239,
                  recent: 867,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 13,
              readingCount: 2388,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '674073',
                title: '沧浪之水',
                author: '阎真',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F73\u002F674073\u002Fs_674073.jpg',
                version: 2028843718,
                format: 'epub',
                type: 0,
                price: 18.9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '这是一部令人惊骇的小说，有一种道破天机的意味。作者以犀利如刀的文笔和生动逼真的描写，写出省卫生厅公务员、医药学研究生池大为从无职无权、空怀壮志，到时来运转、大展宏图的过程。酸甜苦辣的人生况味，险象环生的升迁之路．你死我活的灵魂搏斗，人情冷暖世态炎凉，无不夺人心魄、发人深思。每个人都能从书中看到社会，找到自己的影子。此书口碑爆棚，是近十余年来唯一持续畅销的当代作家原创长篇小说之一，已由人民文学出版社再版了66次，销量破百万。此书已改编成电视剧《岁月》，由胡军、梅婷、于和伟、王彤主演。',
                centPrice: 1890,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 6701554,
                publishTime: '2001-10-01 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  },
                  {
                    categoryId: 100000,
                    subCategoryId: 100012,
                    categoryType: 0,
                    title: '精品小说-影视原著'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 85,
                paperBook: {
                  skuId: '11169754'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 879,
                newRatingCount: 37559,
                newRatingDetail: {
                  good: 33448,
                  fair: 3702,
                  poor: 409,
                  recent: 737,
                  title: '好评如潮'
                }
              },
              ratingCount: 7947,
              star: 90,
              searchIdx: 14,
              readingCount: 3573,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098641',
                title: '人生欢（首届梁晓声青年文学奖获奖作品）',
                author: '上官文露',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002Fcpplatform_ufixdyj9qfoltuj1mr8j2i\u002Fs_cpplatform_ufixdyj9qfoltuj1mr8j2i1715315550.jpg',
                version: 1151849100,
                format: 'epub',
                type: 0,
                price: 43.53,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '她们用注定悲剧的人生，反抗着被遗忘的罪恶。\n这是一本女性故事合集，与生活的纠缠与困斗贯穿她们的一生，而从未享受过自由的她们只能用自己的方式徒劳地探索人生的存在价值。或许，相比于成功，失败和死亡更是人生的必修课。\n《人生欢》里的李蜜将青春演绎成一场残酷的受难，此后的人生也成了沼泽。走进这滩沼泽的她，和苦难深刻地交缠和痴缠是她唯一的反抗。《赌徒》中的王小满则将反抗精神贯穿一生。然而，她懂得如何破坏，却不知如何建立。最终，她成了一名家徒四壁的赌徒，毁掉了自己和所有周围亲人的人生。在命运的轮盘上一败涂地。《锈鹃》里的李杜娟，一生倔强，折腾了一辈子，经历股灾破产，配偶出轨，父母离去，兄弟阋墙，子女叛逆等人生无常，最终在精神病院沦为任人摆布的疯子。《新娘》里顽固地抵御时间侵蚀的女人万提斯，在生活的苦难磨砺中，摸索前行。\n她们注定以绝望收场的命运，被带上了时代深刻的底色。',
                centPrice: 4353,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-07 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  }
                ],
                authorVids: '276680',
                hasLecture: 0,
                lastChapterIdx: 64,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 857,
                newRatingCount: 78,
                newRatingDetail: {
                  good: 70,
                  fair: 7,
                  poor: 1,
                  recent: 78,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 15,
              readingCount: 1194,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '818910',
                title: '彷徨之刃',
                author: '东野圭吾',
                translator: '刘珮瑄',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F33\u002FYueWen_818910\u002Fs_YueWen_818910.jpg',
                version: 192333847,
                format: 'epub',
                type: 0,
                price: 35.4,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '烟火大会那晚，长峰十五岁的女儿在路上被人掳走，并抛尸河中。长峰悲痛不已，女儿离家时穿着夏季和服、欢天喜地的样子，还清晰地浮现在眼前。\n案件尚未侦破，长峰收到一则匿名留言，对方似乎对真相了如指掌，并留下一个地址。长峰将信将疑，潜入那间公寓。他发现了一卷录像带，标签上写着“8月烟火夏季和服”。\n颤抖着关掉录像后，长峰给警方寄去一封信：“不管发生什么事，我都要复仇。复仇完，我会立刻去自首。”',
                centPrice: 3540,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 24367662,
                publishTime: '2021-08-01 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 52,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [53],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 764,
                newRatingCount: 18082,
                newRatingDetail: {
                  good: 13834,
                  fair: 4090,
                  poor: 158,
                  recent: 428,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 16,
              readingCount: 1176,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300098412',
                title: '月子：当五个女孩成为妈妈',
                author: '姚佳黛',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002Fcpplatform_18wbnspldygodcbwmedec6\u002Fs_cpplatform_18wbnspldygodcbwmedec61714469781.jpg',
                version: 1558871570,
                format: 'epub',
                type: 0,
                price: 46.98,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '【女性群像+生育观+女性成长】这个故事不是为了吓退你，而是想将“生育”的真实模样原原本本告诉你。\n中产独生女、一路顺遂的外企白领林冉，在经历了一场前所未有的痛苦后，终于生下女儿晚晚。\n为了避免月子期间的婆媳矛盾，她住进了月子会所。\n在这里，她遇见了原生家庭成谜的金丝雀全职太太、高龄拼二胎的市井大姐、生下双胞胎的迷茫女大学生、相敬如“冰”的律师夫妻……\n尽管家庭环境、经历迥异，但她们有着最大的共同点——是妈妈。\n亲密关系、亲子关系、婆媳关系、学习育儿以及与产后的生理心理博弈，她们每个人都在坐月子的时光里重新认识了解自己、寻找真正的自己。',
                centPrice: 4698,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-04-30 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  }
                ],
                authorVids: '15253820',
                hasLecture: 0,
                lastChapterIdx: 57,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [58],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 738,
                newRatingCount: 505,
                newRatingDetail: {
                  good: 372,
                  fair: 101,
                  poor: 32,
                  recent: 505,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 17,
              readingCount: 1239,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '695233',
                title: '三体（全集）',
                author: '刘慈欣',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F80\u002Fyuewen_695233\u002Fs_yuewen_6952331677562148.jpg',
                version: 1571386342,
                format: 'epub',
                type: 0,
                price: 69.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '每个人的书架上都该有套《三体》！关于宇宙最狂野的想象！就是它！征服世界的中国科幻神作！包揽九项世界顶级科幻大奖！出版16个语种，横扫30国读者！奥巴马、雷军、马化腾、周鸿袆、潘石屹、扎克伯格……强推！刘慈欣获得2018年度克拉克想象力贡献社会奖！刘慈欣是中国科幻小说的最主要代表作家，亚洲首位世界科幻大奖“雨果奖”得主，被誉为中国科幻的领军人物。',
                centPrice: 6999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2018-12-01 00:00:00',
                category: '精品小说-科幻小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100004,
                    categoryType: 0,
                    title: '精品小说-科幻小说'
                  }
                ],
                hasLecture: 1,
                lPushName: '刘慈欣经典科幻代表作',
                lastChapterIdx: 86,
                paperBook: {
                  skuId: '11757834'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 931,
                newRatingCount: 278201,
                newRatingDetail: {
                  good: 259862,
                  fair: 15343,
                  poor: 2996,
                  recent: 1689,
                  title: '神作'
                }
              },
              ratingCount: 24940,
              star: 91,
              searchIdx: 18,
              readingCount: 14025,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '35905913',
                title: '最后一个道士（全七册）',
                author: '夏忆',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F913\u002F35905913\u002Fs_35905913.jpg',
                version: 1741938457,
                format: 'epub',
                type: 0,
                price: 139.93,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '它讲述了中国“茅山派”最后一位掌门人查文斌救人于阴阳之间，却引业火烧身，遭天罚阴遣的传奇经历。关于道教法术，其实很多人已经早有耳闻，尤其是曾经香港的一些影片中，经常会出现道士与僵尸较量的场面，但那毕竟是影视作品的艺术描写。但真正的道士究竟怎样的？《最后一个道士》告诉了我们答案。作者夏忆将中国传统的道家思想融入其中，不仅讲述了精彩的故事，还为读者普及了中国传统的国学文化。是一部难得的作品。',
                centPrice: 13993,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2021-01-01 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 315,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 718,
                newRatingCount: 1513,
                newRatingDetail: {
                  good: 1101,
                  fair: 244,
                  poor: 168,
                  recent: 137,
                  title: '值得一读'
                }
              },
              ratingCount: 319,
              star: 84,
              searchIdx: 19,
              readingCount: 2382,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '35090602',
                title: '天之下',
                author: '三弦',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F3\u002FYueWen_35090602\u002Fs_YueWen_35090602.jpg',
                version: 0,
                format: 'txt',
                type: 0,
                price: -1,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 2,
                payType: 1048578,
                intro:
                  '【第二部已完结，7月1日开启外传月更，每月1日14点更新】昆仑纪元，分治天下的九大门派为新一届盟主之位明争暗斗，关外，萨教蛮族卷土重来……乱世中，芸芸众生百态沉浮，九大家英杰辈出，最终汇成一首大江湖时代的磅礴史诗，并推动天下大势由分治走向大一统。',
                centPrice: 12440,
                finished: 0,
                free: 0,
                mcardDiscount: 20,
                ispub: 1,
                extra_type: 1,
                cpid: 17894882,
                publishTime: '2021-05-01 00:00:00',
                realPrice: 12440,
                category: '精品小说-优质网文',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100013,
                    categoryType: 0,
                    title: '精品小说-优质网文'
                  }
                ],
                authorVids: '353896544',
                hasLecture: 0,
                lPushName: '若侠与权交织，会是怎样一个时代？',
                lastChapterIdx: 351,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 904,
                newRatingCount: 12170,
                newRatingDetail: {
                  good: 11083,
                  fair: 493,
                  poor: 594,
                  recent: 167,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 20,
              readingCount: 3647,
              riseCount: 0,
              bestMark: ''
            }
          ],
          showAll: 0
        },
        {
          CategoryId: 'all',
          totalCount: 200,
          title: '总榜',
          ranklist: 1,
          ranklistCover: {
            tinycode:
              'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.all.tinycode.8A3kIWv1MX.png',
            chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_title.JPnYFfuPbm.png',
            chart_detail_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_detail_title.sMh65ixe9l.png',
            chart_detail_title_dark:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_detail_title_dark.2ky4HSJU3V.png',
            chart_share_title:
              'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.all.chart_share_title.hqPEOLVffW.png',
            chart_share_logo:
              'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.all.chart_share_logo.8DDUxHqsiv.png',
            chart_book_detial_icon:
              'https:\u002F\u002Frescdn.qqmail.com\u002Fweread\u002Fcover\u002Franklist.all.chart_book_detial_icon.6tpmPfmz6F.png',
            chart_tag:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_tag.10XdZh6eUV.png',
            eink_chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.eink_chart_title.JVKRmQ5WCg.png',
            chart_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_title_main.5y2PAdJQdr.png',
            chart_detail_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_detail_title_main.VC1GJeqgCf.png',
            chart_detail_title_dark_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.all.chart_detail_title_dark_main.r45lFTyRNo.png',
            chart_background_color_1: '#34A7FF',
            chart_background_color_2: '#39CFFF',
            chart_title_height: 96,
            chart_title_width: 471,
            desc: '微信读书用户最喜爱的出版书'
          },
          recommend: '0',
          sublist: [],
          lectureBooks: [
            {
              bookInfo: {
                bookId: '695233',
                title: '三体（全集）',
                author: '刘慈欣',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F80\u002Fyuewen_695233\u002Fs_yuewen_6952331677562148.jpg',
                version: 1571386342,
                format: 'epub',
                type: 0,
                price: 69.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '每个人的书架上都该有套《三体》！关于宇宙最狂野的想象！就是它！征服世界的中国科幻神作！包揽九项世界顶级科幻大奖！出版16个语种，横扫30国读者！奥巴马、雷军、马化腾、周鸿袆、潘石屹、扎克伯格……强推！刘慈欣获得2018年度克拉克想象力贡献社会奖！刘慈欣是中国科幻小说的最主要代表作家，亚洲首位世界科幻大奖“雨果奖”得主，被誉为中国科幻的领军人物。',
                centPrice: 6999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2018-12-01 00:00:00',
                category: '精品小说-科幻小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100004,
                    categoryType: 0,
                    title: '精品小说-科幻小说'
                  }
                ],
                hasLecture: 1,
                lPushName: '刘慈欣经典科幻代表作',
                lastChapterIdx: 86,
                paperBook: {
                  skuId: '11757834'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 931,
                newRatingCount: 278201,
                newRatingDetail: {
                  good: 259862,
                  fair: 15343,
                  poor: 2996,
                  recent: 1689,
                  title: '神作'
                }
              },
              ratingCount: 24940,
              star: 91,
              searchIdx: 1,
              readingCount: 14025,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300003224',
                title: '长安的荔枝',
                author: '马伯庸',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FcpPlatform_dbb14284a55f1e733b60202b0777255d\u002Fs_cpPlatform_dbb14284a55f1e733b60202b0777255d.jpg',
                version: 1690214981,
                format: 'epub',
                type: 0,
                price: 21.6,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '同名实体书新鲜上市，马伯庸历史短小说“见微”系列神作！\n大唐天宝十四年，长安城小吏李善德突然接到一个任务：要在贵妃诞日之前，从岭南运来新鲜荔枝。荔枝保鲜期只有三天，而岭南距长安五千余里，山水迢迢，这是个不可能完成的任务。为了家人，李善德只得放手一搏……\n古装版社畜求生记，帝国夹缝中的小人物史诗。',
                centPrice: 2160,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 16796673,
                publishTime: '2022-10-01 00:00:00',
                category: '历史-历史小说',
                categories: [
                  {
                    categoryId: 200000,
                    subCategoryId: 200004,
                    categoryType: 0,
                    title: '历史-历史小说'
                  }
                ],
                authorVids: '282476580',
                hasLecture: 0,
                lastChapterIdx: 10,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [11],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 940,
                newRatingCount: 191207,
                newRatingDetail: {
                  good: 182172,
                  fair: 7711,
                  poor: 1324,
                  recent: 4687,
                  title: '神作'
                }
              },
              ratingCount: 39521,
              star: 92,
              searchIdx: 2,
              readingCount: 5648,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '822995',
                title: '明朝那些事儿（全集）',
                author: '当年明月',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F97\u002Fyuewen_822995\u002Fs_yuewen_8229951695023669.jpg',
                version: 1996582047,
                format: 'epub',
                type: 0,
                price: 187.6,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '    《明朝那些事儿》主要讲述的是从1344年到1644年这三百年间关于明朝的一些故事。以史料为基础，以年代和具体人物为主线，并加入了小说的笔法，语言幽默风趣。对明朝十七帝和其他王公权贵和小人物的命运进行全景展示，尤其对官场政治、战争、帝王心术着墨最多，并加入对当时政治经济制度、人伦道德的演义。它以一种网络语言向读者娓娓道出明朝三百多年的历史故事、人物。其中原本在历史中陌生、模糊的历史人物在书中一个个变得鲜活起来。《明朝那些事儿》为我们解读历史中的另一面，让历史变成一部活生生的生活故事。',
                centPrice: 18760,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2011-12-01 00:00:00',
                category: '历史-中国古代',
                categories: [
                  {
                    categoryId: 200000,
                    subCategoryId: 200007,
                    categoryType: 0,
                    title: '历史-中国古代'
                  },
                  {
                    categoryId: 200000,
                    subCategoryId: 200003,
                    categoryType: 0,
                    title: '历史-历史读物'
                  }
                ],
                hasLecture: 0,
                lPushName: '一本书让你爱上历史。',
                lastChapterIdx: 377,
                paperBook: {
                  skuId: '10850277'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 922,
                newRatingCount: 210915,
                newRatingDetail: {
                  good: 195415,
                  fair: 12612,
                  poor: 2888,
                  recent: 2333,
                  title: '神作'
                }
              },
              ratingCount: 21091,
              star: 91,
              searchIdx: 3,
              readingCount: 47004,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '834464',
                title: '活着',
                author: '余华',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F464\u002F834464\u002Fs_834464.jpg',
                version: 2055529619,
                format: 'epub',
                type: 0,
                price: 29.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '同名电影《活着》由张艺谋执导，葛优、巩俐两大影帝影后主演，1994年该片在第47届戛纳电影节上斩获评委会大奖、最佳男演员奖，同时还荣获了英国电影学院奖最佳外语片等重要奖项。由《活着》改编的电视剧《富贵》2005年开播，在第13届上海电视节上，摘得“白玉兰”奖——电视剧评委会大奖。《活着》是一篇读起来让人感到沉重的小说。那种只有阖上书本才会感到的隐隐不快，并不是由作品提供的故事的残酷造成的。毕竟，作品中的亡家，丧妻，失女以及白发人送黑发人这样的故事并不具备轰动性。同时，余华也不是一个具有很强煽动能力的作家，实际上，渲染这样的表达方式是余华一直所不屑的。余华所崇尚的只是叙述，用一种近乎冰冷的笔调娓娓叙说一些其实并不正常的故事。而所有的情绪就是在这种娓娓叙说的过程中中悄悄侵入读者的阅读。这样说来，《活着》以一种渗透的表现手法完成了一次对生命意义的哲学追问。本书荣获意大利格林扎纳·卡佛文学奖（1998年）、台湾《中国时报》十本好书奖（1994年），香港“博益”15本好书奖（1990年），中华图书特殊贡献奖（2005年），法国国际信使外国小说奖（2008年）；并入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”；入选中国百位批评家和文学编辑评选的“九十年代最有影响的10部作品”，余华本人则于2004年荣获法兰西文学和艺术骑士勋章。',
                centPrice: 2999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 6871225,
                publishTime: '2012-08-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 12,
                paperBook: {
                  skuId: '11090643'
                },
                copyrightChapterUids: [13],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 919,
                newRatingCount: 178982,
                newRatingDetail: {
                  good: 165424,
                  fair: 12503,
                  poor: 1055,
                  recent: 2011,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 4,
              readingCount: 2324,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '24965201',
                title: '平凡的世界（全三册）',
                author: '路遥',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F61\u002Fyuewen_24965201\u002Fs_yuewen_249652011682413401.jpg',
                version: 1272358881,
                format: 'epub',
                type: 0,
                price: 89.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '茅盾文学奖皇冠上的明珠。激励亿万读者的不朽经典。深受老师和学生喜爱的新课标必读书。路遥获得了这个世界里数以亿计的普通人的尊敬和崇拜，他沟通了这个世界的人们和地球人类的情感。',
                centPrice: 8999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 24367662,
                publishTime: '2017-05-31 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 175,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [169],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 930,
                newRatingCount: 115667,
                newRatingDetail: {
                  good: 107930,
                  fair: 6312,
                  poor: 1425,
                  recent: 954,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 5,
              readingCount: 5354,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '546339',
                title: '追风筝的人',
                author: '卡勒德·胡赛尼',
                translator: '李继宏',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F339\u002F546339\u002Fs_546339.jpg',
                version: 482707295,
                format: 'epub',
                type: 0,
                price: 23,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？',
                centPrice: 2300,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -1361120,
                publishTime: '2006-05-01 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  }
                ],
                hasLecture: 0,
                lPushName: '为你，千千万万遍。',
                lastChapterIdx: 28,
                paperBook: {
                  skuId: '13353374'
                },
                copyrightChapterUids: [29],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 918,
                newRatingCount: 133224,
                newRatingDetail: {
                  good: 122713,
                  fair: 9743,
                  poor: 768,
                  recent: 1109,
                  title: '神作'
                }
              },
              ratingCount: 14411,
              star: 92,
              searchIdx: 6,
              readingCount: 2343,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '718151',
                title: '南京大屠杀',
                author: '张纯如',
                translator: '谭春霞,焦国林',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F83\u002FYueWen_718151\u002Fs_YueWen_718151.jpg',
                version: 2009966153,
                format: 'epub',
                type: 0,
                price: 29.4,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '1937年12月，日军攻入中国古都南京。几周之内，30多万中国平民和士兵遭到有计划地强暴、折磨和屠杀——死亡人数超过广岛和长崎原子弹爆炸遇难人数的总和。 张纯如不仅在书中详述了日军疯狂暴行的细节，而且分析了在军国主义文化背景下成长起来的日本士兵对人类生命的漠视。张纯如对南京大屠杀的幸存者进行了大量采访，并首次发掘了许多重要文献。全书先是从日本士兵、军官为什么完全脱离了人类基本的行为规范，日本学校和教科书从心理层面向学生灌输对中国人民的仇恨和蔑视，以及高度军事化的教育体制等多个方面阐述了南京大屠杀发生的根源性原因。',
                centPrice: 2940,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 4525313,
                publishTime: '2013-01-01 00:00:00',
                category: '历史-中国古代',
                categories: [
                  {
                    categoryId: 200000,
                    subCategoryId: 200007,
                    categoryType: 0,
                    title: '历史-中国古代'
                  }
                ],
                hasLecture: 0,
                lPushName: '一部令国人流泪的书',
                lastChapterIdx: 25,
                paperBook: {
                  skuId: '11735751'
                },
                copyrightChapterUids: [28],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 970,
                newRatingCount: 41481,
                newRatingDetail: {
                  good: 40549,
                  fair: 758,
                  poor: 174,
                  recent: 949,
                  title: '神作'
                }
              },
              ratingCount: 10124,
              star: 92,
              searchIdx: 7,
              readingCount: 1386,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '853116',
                title: '杀死一只知更鸟（同名电影原著）',
                author: '哈珀·李',
                translator: '李育超',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F32\u002FYueWen_853116\u002Fs_YueWen_853116.jpg',
                version: 357947648,
                format: 'epub',
                type: 0,
                price: 55.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '《杀死一只知更鸟》的故事发生在大萧条时期美国南方一个静谧的小镇，几桩离奇的疑案彻底打破了几个孩子平静的生活：事件的真凶，怪人的谜底，传言背后的真相……在父亲的指引下，他们在迷雾中寻找真知，在磨难中历练风度，在不公平中积累正气，经历了暴风骤雨般的成长，也感受了人间的温暖与真情。',
                centPrice: 5599,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 13583905,
                publishTime: '2017-02-01 00:00:00',
                category: '精品小说-影视原著',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100012,
                    categoryType: 0,
                    title: '精品小说-影视原著'
                  },
                  {
                    categoryId: 300000,
                    subCategoryId: 300014,
                    categoryType: 0,
                    title: '文学-世界名著'
                  }
                ],
                hasLecture: 0,
                lPushName: '愿你克服偏见 愿你一往无前',
                lastChapterIdx: 36,
                paperBook: {
                  skuId: '12037351'
                },
                copyrightChapterUids: [35],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 919,
                newRatingCount: 93130,
                newRatingDetail: {
                  good: 86205,
                  fair: 6305,
                  poor: 620,
                  recent: 1388,
                  title: '神作'
                }
              },
              ratingCount: 13930,
              star: 92,
              searchIdx: 8,
              readingCount: 4151,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '812443',
                title: '白鹿原',
                author: '陈忠实',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F78\u002FYueWen_812443\u002Fs_YueWen_812443.jpg',
                version: 168841035,
                format: 'epub',
                type: 0,
                price: 12,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '同名电视剧由张嘉译、何冰、秦海璐、刘佩琪等人主演。当代文学里程碑之作，茅盾文学奖获奖作品。一部记录“民族的秘史”的长卷，一部渭河平原50年变迁的雄奇史诗，一轴中国农村斑斓多彩，触目惊心的长幅画卷。主人公白嘉轩六娶六丧，神秘的序曲预示着不祥。一个家族两代子孙，为争夺白鹿原的统治代代争斗不已，上演了一幕幕惊心动魄的活剧：巧取风水地，恶施美人计，孝子为匪，亲翁杀媳，兄弟相煎，情人反目……大革命、日寇入侵、三年内战，白鹿原翻云覆雨，王旗变幻，家仇国恨交错缠结，冤冤相报代代不已。',
                centPrice: 1200,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -2571052,
                publishTime: '1993-06-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lPushName: '《白鹿原》原著 茅奖获奖佳作',
                lastChapterIdx: 40,
                paperBook: {
                  skuId: '12128057'
                },
                copyrightChapterUids: [47],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 911,
                newRatingCount: 106070,
                newRatingDetail: {
                  good: 96879,
                  fair: 8515,
                  poor: 676,
                  recent: 517,
                  title: '神作'
                }
              },
              ratingCount: 11602,
              star: 91,
              searchIdx: 9,
              readingCount: 3321,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '230107',
                title: '白夜行',
                author: '东野圭吾',
                translator: '刘姿君',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F1\u002Fyuewen_230107\u002Fs_yuewen_2301071682244014.jpg',
                version: 213901204,
                format: 'epub',
                type: 0,
                price: 35.76,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '1999年，东野圭吾41岁正值盛年，写作出道已14年，在笔力、技巧、体力和雄心上都炉火纯青，于是洋洋洒洒写出了这部鸿篇巨制《白夜行》。这种规模宏大的长篇作品在职业作家一生的创作中极为罕见，完成后基本都被视为生涯代表作。《白夜行》一经推出即成为东野圭吾的长篇小说代表作，被万千书迷视为东野圭吾作品中的无冕之·王，畅销至今。《白夜行》中文版发行量超600万册，和《嫌疑人X的献身》《恶意》《解忧杂货店》并称为东野圭吾四大杰作。',
                centPrice: 3576,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 24367662,
                publishTime: '2017-07-21 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 28,
                paperBook: {
                  skuId: '12135337'
                },
                copyrightChapterUids: [108],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 899,
                newRatingCount: 167567,
                newRatingDetail: {
                  good: 151015,
                  fair: 15833,
                  poor: 719,
                  recent: 688,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 10,
              readingCount: 1539,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '858626',
                title: '我们仨',
                author: '杨绛',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F626\u002F858626\u002Fs_858626.jpg',
                version: 143002219,
                format: 'epub',
                type: 0,
                price: 13.8,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '    1998年，钱钟书逝世，而他和杨绛唯一的女儿钱瑗已于此前（1997年）先他们而去。在人生的伴侣离去四年后，杨绛用心记述了他们这个特殊家庭63年的风风雨雨、点点滴滴，结成回忆录《我们仨》。\n',
                centPrice: 1380,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 1135052,
                publishTime: '2012-09-01 00:00:00',
                category: '人物传记-文学家',
                categories: [
                  {
                    categoryId: 500000,
                    subCategoryId: 500007,
                    categoryType: 0,
                    title: '人物传记-文学家'
                  }
                ],
                hasLecture: 0,
                shouldHideTTS: 1,
                lastChapterIdx: 28,
                paperBook: {
                  skuId: '11096744'
                },
                copyrightChapterUids: [11],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 908,
                newRatingCount: 102217,
                newRatingDetail: {
                  good: 92985,
                  fair: 8651,
                  poor: 581,
                  recent: 445,
                  title: '神作'
                }
              },
              ratingCount: 6511,
              star: 91,
              searchIdx: 11,
              readingCount: 873,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '814146',
                title: '一个叫欧维的男人决定去死',
                author: '弗雷德里克·巴克曼',
                translator: '宁蒙',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F16\u002Fyuewen_814146\u002Fs_yuewen_8141461689328417.jpg',
                version: 261032585,
                format: 'epub',
                type: 0,
                price: 35,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '认识一下欧维。他59岁，脾气古怪，嫌东嫌西，带着坚不可摧的原则、每天恪守的常规以及随时发飙的脾性在社区晃来晃去，被背地里称为“地狱来的恶邻”。他每天一大早就四处巡视，搬动没停进格线的脚踏车，检查垃圾是否按规定分类，抱怨谁家的草坪还不修剪，诅咒那只掉了毛的流浪猫。没完没了。他想自杀。直到一个十一月的早晨，当一对话痨夫妇和他们的两个话痨女儿搬到隔壁，不小心撞坏了他的邮筒……看哭全北欧的瑞典票房冠军电影同名原著小说，韩国治愈系男神池昌旭温情推荐。',
                centPrice: 3500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2015-12-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lPushName: '读这个故事，你会哭，会笑，会想搬到北欧去\r',
                lastChapterIdx: 42,
                paperBook: {
                  skuId: '11803729'
                },
                copyrightChapterUids: [43],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 926,
                newRatingCount: 62444,
                newRatingDetail: {
                  good: 58128,
                  fair: 4073,
                  poor: 243,
                  recent: 924,
                  title: '神作'
                }
              },
              ratingCount: 11194,
              star: 92,
              searchIdx: 12,
              readingCount: 1654,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '216212',
                title: '小王子',
                author: '[法]安托万·德·圣埃克苏佩里著',
                translator: '李继宏',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F40\u002Fyuewen_216212\u002Fs_yuewen_2162121686560140.jpg',
                version: 628427731,
                format: 'epub',
                type: 0,
                price: 9.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '3D动画奇幻电影《小王子》中文配音版于2015年10月16日中国上映！这是一本足以让人永葆童心的不朽经典，被全球亿万读者誉为最值得收藏的书。翻开本书，您将看到遥远星球上的小王子，与美丽而骄傲的玫瑰吵架负气出走，在各星球漫游中，小王子遇到了傲慢的国王、酒鬼、惟利是图的商人，死守教条的地理学家，最后来到地球上，试图找到治愈孤独和痛苦的良方。这时，他遇到一只奇怪的狐狸，于是奇妙而令人惊叹的事情发生了…… 《小王子》犹如透亮的镜子，照出了荒唐的成人世界。她在提醒我们，只有爱，才是最高的哲学，才是我们活下去的唯一理由。',
                centPrice: 999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 1000000198,
                publishTime: '2013-01-01 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  },
                  {
                    categoryId: 100000,
                    subCategoryId: 100012,
                    categoryType: 0,
                    title: '精品小说-影视原著'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 31,
                paperBook: {
                  skuId: '12378533'
                },
                copyrightChapterUids: [32],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 912,
                newRatingCount: 87122,
                newRatingDetail: {
                  good: 79751,
                  fair: 6879,
                  poor: 492,
                  recent: 793,
                  title: '神作'
                }
              },
              ratingCount: 13081,
              star: 92,
              searchIdx: 13,
              readingCount: 1225,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '40055543',
                title: '置身事内：中国政府与经济发展',
                author: '兰小欢',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F52\u002FYueWen_40055543\u002Fs_YueWen_40055543.jpg',
                version: 442600278,
                format: 'epub',
                type: 0,
                price: 55,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书是复旦大学经济学院副教授兰小欢多年教学与研究内容的凝练，将经济学原理与中国经济发展的实践有机融合，以地方政府投融资为主线，深入浅出地论述了中国经济的发展，广泛采纳各领域学者全新研究成果。全书分上下两篇。上篇解释微观机制，包括地方政府的基本事务、收支、土地融资和开发、投资和债务等；下篇解释这些微观行为与宏观现象的联系，包括城市化和工业化、房价、地区差异、债务风险、国内经济结构失衡、国际贸易冲突等。最后一章通过对中国政治经济体系的论述，作者简明地刻画了地方政府进行经济治理的基本方式，指出中国政府通过深度介入工业化和城市化的进程，在发展经济的同时逐步推动了市场机制的建立和完善。',
                centPrice: 5500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -1361120,
                publishTime: '2021-01-01 00:00:00',
                category: '经济理财-财经',
                categories: [
                  {
                    categoryId: 1100000,
                    subCategoryId: 1100001,
                    categoryType: 0,
                    title: '经济理财-财经'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 60,
                paperBook: {
                  skuId: '13643682'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 950,
                newRatingCount: 39698,
                newRatingDetail: {
                  good: 38221,
                  fair: 1135,
                  poor: 342,
                  recent: 1144,
                  title: '神作'
                }
              },
              ratingCount: 16423,
              star: 92,
              searchIdx: 14,
              readingCount: 4664,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '22946457',
                title: '围城',
                author: '钱钟书',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F457\u002F22946457\u002Fs_22946457.jpg',
                version: 1066789617,
                format: 'epub',
                type: 0,
                price: 18,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '钱钟书先生最经典的作品，也是仅有的一部长篇小说，堪称中国现代文学史上风格独特的讽刺经典，被誉为“新儒林外史”，自上世纪八十年代以来一直横贯常销、畅销小说之首。小说塑造了抗战初期以方鸿渐为主的一类知识分子群像，记叙了他们所面临的教育、婚姻和事业困境。虽然有具体的历史背景，但这部小说揭示的人群的弱点，在今天依然能引起人们的共鸣。著名文学评论家夏志清先生在《中国现代小说史》中认为，“《围城》比任何中国古典讽刺小说优秀”，称之为“中国现代文学史中写得最有趣、最细腻的小说，或许是最伟大的小说。”',
                centPrice: 1800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -2571052,
                publishTime: '2017-07-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lPushName: '钱钟书唯一长篇小说 经典佳作',
                lastChapterIdx: 17,
                paperBook: {
                  skuId: '13006247'
                },
                copyrightChapterUids: [19],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 898,
                newRatingCount: 104095,
                newRatingDetail: {
                  good: 93612,
                  fair: 9495,
                  poor: 988,
                  recent: 455,
                  title: '好评如潮'
                }
              },
              ratingCount: 7265,
              star: 91,
              searchIdx: 15,
              readingCount: 2510,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300072295',
                title: '太白金星有点烦',
                author: '马伯庸',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F72\u002Fcpplatform_huhykqamxcvke1jfkpqxiv\u002Fs_cpplatform_huhykqamxcvke1jfkpqxiv1695711014.jpg',
                version: 222810808,
                format: 'epub',
                type: 0,
                price: 23.2,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '天庭神仙皆社畜，西游路上打工人。\n太白金星李长庚最近有点烦。天庭和西天联合推出了“西天取经”的重大项目，他受命策划九九八十一难，确保唐僧能安全走完流程，平稳取经。老神仙本以为一切尽在掌控中，谁知天大的麻烦才刚刚开始：费用报销、工作汇报、人事安排、各路大仙塞来的条子、各地妖怪暗藏的心思，捋不出的千头万缕，做不完的繁杂琐事……当大闹天宫的真相重新浮出水面，牵扯出无数因果，李长庚发觉自己成就金仙的道路越加渺茫。',
                centPrice: 2320,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 16796673,
                publishTime: '2023-06-01 00:00:00',
                category: '历史-历史小说',
                categories: [
                  {
                    categoryId: 200000,
                    subCategoryId: 200004,
                    categoryType: 0,
                    title: '历史-历史小说'
                  }
                ],
                authorVids: '282476580',
                hasLecture: 1,
                lastChapterIdx: 18,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [36],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 919,
                newRatingCount: 56117,
                newRatingDetail: {
                  good: 54216,
                  fair: 1562,
                  poor: 339,
                  recent: 4099,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 16,
              readingCount: 4897,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '33483909',
                title: '绝叫',
                author: '叶真中显',
                translator: '林佩瑾',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F67\u002FYueWen_33483909\u002Fs_YueWen_33483909.jpg',
                version: 1833012617,
                format: 'epub',
                type: 0,
                price: 28.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '罗翔推荐。长达四十年的恶女编年史，被网友称为“被嫌弃的阳子的黑化”、“更现实版的《都挺好》”。铃木阳子死了，死在独居的公寓里。正确说来，是铃木阳子几个月前死了。因为发现她时，遗体不但遭到屋内的十一只猫啃食殆尽，连猫也全数饿死了。铃木阳子显然是“孤独死”的最佳范例，但这名女子为何落到这步田地？她的亲人、朋友、同事在哪里？她的人生轨迹又是怎样的？本书以两起相对独立的死亡事件为线索，牵出了三起相互交织的案件，讲述了女主人公阳子在时代裹挟中的个人挣扎，从平庸一步步滑落到不可救药的深渊。故事发生在2014年的日本都市。本书分为三条线：第一条线是“中年女子孤独死”案，从发现女尸开始，叙述女警绫乃的调查过程，逐渐揭露女主人公阳子的人生。第二条线从“非营利组织头目死亡”案开始。看似无关的两个案件逐渐交会，交织出真象。第三条线以第二人称叙述阳子的人生经历，从阳子童年时期开始，到女尸被发现为止，细腻地描写了阳子的成长变化和被社会吞噬的过程。',
                centPrice: 2899,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 9357272,
                publishTime: '2020-07-01 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 34,
                paperBook: {
                  skuId: '12696381'
                },
                copyrightChapterUids: [35],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 929,
                newRatingCount: 45339,
                newRatingDetail: {
                  good: 42440,
                  fair: 2518,
                  poor: 381,
                  recent: 952,
                  title: '神作'
                }
              },
              ratingCount: 14263,
              star: 91,
              searchIdx: 17,
              readingCount: 1296,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '857863',
                title: '献给阿尔吉侬的花束',
                author: '丹尼尔·凯斯',
                translator: '陈澄和',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F11\u002Fyuewen_857863\u002Fs_yuewen_8578631681827306.jpg',
                version: 1900337382,
                format: 'epub',
                type: 0,
                price: 48,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '很多人都笑我。但他们是我的朋友我们都很快乐。\n 声称能改造智能的科学实验在白老鼠阿尔吉侬身上获得了突破性的进展，下一步急需进行人体实验。个性和善、学习态度积极的心智障碍者查理·高登成为最佳人选。\n查理对实验只有模糊的了解，但他知道自己想变聪明，想要受重视，爱人和被爱。\n手术成功后，查理的智商从68跃升为185，那些从未有过的情绪和记忆也逐渐浮现。',
                centPrice: 4800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 25523719,
                publishTime: '2022-08-01 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 22,
                paperBook: {
                  skuId: '12998569'
                },
                copyrightChapterUids: [20],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 927,
                newRatingCount: 44269,
                newRatingDetail: {
                  good: 41510,
                  fair: 2314,
                  poor: 445,
                  recent: 1227,
                  title: '神作'
                }
              },
              ratingCount: 17431,
              star: 91,
              searchIdx: 18,
              readingCount: 1773,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '35551088',
                title: '蛤蟆先生去看心理医生',
                author: '罗伯特·戴博德',
                translator: '陈赢',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F81\u002FYueWen_35551088\u002Fs_YueWen_35551088.jpg',
                version: 19964544,
                format: 'epub',
                type: 0,
                price: 38,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '蛤蟆先生一向爱笑爱闹，如今却一反常态地郁郁寡欢。他一个人躲在屋里，连起床梳洗的力气都没有。朋友们非常担心他，建议他去做心理咨询。在10次心理咨询中，蛤蟆在咨询师苍鹭的带领下，勇敢地探索了自己的内心世界，也逐渐找回了信心与希望……为了向大众读者普及心理学知识，作者借用了英国文学经典《柳林风声》的故事主角，让蛤蟆先生和他的朋友们再次登场，演绎了这个关于心理咨询的故事。读者犹如亲临现场，体验心理咨询的每一个细节，见证疗愈和改变的发生。作者借由蛤蟆和心理咨询师苍鹭的互动，探索了蛤蟆自卑、软弱、爱炫耀的个性与抑郁的情绪究竟来源于何处，以及如何才能在心理上真正长大成人，独立、自信、充满希望地生活。',
                centPrice: 3800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -3319053,
                publishTime: '2020-08-01 00:00:00',
                category: '心理-心理学应用',
                categories: [
                  {
                    categoryId: 800000,
                    subCategoryId: 800005,
                    categoryType: 0,
                    title: '心理-心理学应用'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 19,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [20],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 895,
                newRatingCount: 99825,
                newRatingDetail: {
                  good: 90280,
                  fair: 8538,
                  poor: 1007,
                  recent: 2483,
                  title: '好评如潮'
                }
              },
              ratingCount: 52201,
              star: 90,
              searchIdx: 19,
              readingCount: 5909,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '674044',
                title: '我与地坛',
                author: '史铁生',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F44\u002F674044\u002Fs_674044.jpg',
                version: 318012976,
                format: 'epub',
                type: 0,
                price: 9.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '要是有些事我没说，地坛，你别以为是我忘了，我什么也没忘；但是有些事只适合收藏，不能说，不能想，却又不能忘。《我与地坛》是史铁生文学作品中，充满哲思又极为人性化的代表作之一。其前两段被纳入人民教育出版社的高一教材中。前两部分注重讲地坛和他与母亲的后悔，对中学生来说，这是一篇令人反思的优秀文章。',
                centPrice: 999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -2571052,
                publishTime: '2011-04-01 00:00:00',
                category: '文学-散文杂著',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300005,
                    categoryType: 0,
                    title: '文学-散文杂著'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 14,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 912,
                newRatingCount: 55290,
                newRatingDetail: {
                  good: 51354,
                  fair: 3570,
                  poor: 366,
                  recent: 2236,
                  title: '神作'
                }
              },
              ratingCount: 4691,
              star: 91,
              searchIdx: 20,
              readingCount: 12283,
              riseCount: 0,
              bestMark: ''
            }
          ],
          showAll: 0
        },
        {
          CategoryId: 'newrating_publish',
          totalCount: 640,
          title: '神作榜·出版',
          ranklist: 1,
          ranklistCover: {
            chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_publish.chart_title.OOrrOhqu7u.png',
            chart_detail_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_publish.chart_detail_title.QE3jaqbSee.png',
            chart_detail_title_dark:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_publish.chart_detail_title_dark.X5rZldvFf5.png',
            chart_tag:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_publish.chart_tag.emi7X1XiBT.png',
            eink_chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_publish.eink_chart_title.jwTnWfbS40.png',
            chart_detail_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_publish.chart_detail_title_main.887fKGvjKW.png',
            chart_background_color_1: '#FFB341',
            chart_background_color_2: '#E8B142',
            chart_title_height: 96,
            chart_title_width: 471,
            desc: '超过500人点评，推荐值≥90%的出版书'
          },
          recommend: '0',
          sublist: [],
          lectureBooks: [
            {
              bookInfo: {
                bookId: '39128586',
                title: '你是你吃出来的（套装共2册）',
                author: '夏萌',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F34\u002Fyuewen_39128586\u002Fs_yuewen_391285861678700081.jpg',
                version: 555171975,
                format: 'epub',
                type: 0,
                price: 49.8,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书由《你是你吃出来的：吃对少生病，病了这样吃》《你是你吃出来的2：慢病康复的饮食密码》构成的套装。《你是你吃出来的：吃对少生病，病了这样吃》：高血压、高血脂、糖尿病、冠心病等慢病人群都曾陷入同一个误区——误以为低油低脂保健康，其实多是蛋白质缺乏式营养不良；误以为只能终生服药或手术，忽略了饮食等生活方式改变带来的真正康复。《你是你吃出来的2：慢病康复的饮食密码》：本书是一本针对高血压、高脂血、糖尿病、痛风等慢病患者、亚健康人群从临床医学角度提出营养治病调理思路和方案的临床营养实践类图书。营养专家夏萌老师总结几十年临床经验，从营养学角度辨别诊治多种慢病和亚健康的成因，破除营养认知误区，深入浅出地剖析疾病的饮食根源，带给慢病患者科学的营养指导。',
                centPrice: 4980,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2021-07-01 00:00:00',
                category: '医学健康-健康',
                categories: [
                  {
                    categoryId: 2100000,
                    subCategoryId: 2100001,
                    categoryType: 0,
                    title: '医学健康-健康'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 96,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [51, 53, 89],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 900,
                newRatingCount: 2100,
                newRatingDetail: {
                  good: 1910,
                  fair: 121,
                  poor: 69,
                  recent: 93,
                  title: '神作'
                }
              },
              ratingCount: 580,
              star: 88,
              searchIdx: 1,
              readingCount: 1260,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '41414690',
                title: '半小时漫画宇宙大爆炸',
                author: '陈磊·半小时漫画团队',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002FYueWen_41414690\u002Fs_YueWen_41414690.jpg',
                version: 603286337,
                format: 'epub',
                type: 0,
                price: 39.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '半小时读完138亿年宇宙史，一口气搞懂大爆炸、奇点、黑洞、引力波、暗物质……通过手绘漫画的形式，陈磊（混子哥）及其半小时漫画团队为读者解读从宇宙大爆炸中诞生出的物质和能量，如何指引着宇宙中的一切：粒子抱团成为物质，让太阳一边发生核聚变，一边被引力压得死死的，为人类安全地提供光和热；黑洞虽然会无情地吞噬所有的光，可它的强引力也维持着周边星系的正常运转；暗物质和暗能量的博弈，会左右宇宙未来是被压扁还是被拉扯。不摆吓人的艰深理论，没有沉闷的史料堆砌，在轻松有趣的故事中了解宇宙的惊人面貌。翻开本书，笑着笑着搞定宇宙常识！',
                centPrice: 3999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2021-10-01 00:00:00',
                category: '科学技术-科学科普',
                categories: [
                  {
                    categoryId: 1500000,
                    subCategoryId: 1500003,
                    categoryType: 0,
                    title: '科学技术-科学科普'
                  },
                  {
                    categoryId: 2400000,
                    subCategoryId: 2400001,
                    categoryType: 0,
                    title: '漫画-经典改编'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 15,
                paperBook: {
                  skuId: '12994165'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 1,
                webBookControl: 0,
                newRating: 900,
                newRatingCount: 2156,
                newRatingDetail: {
                  good: 1963,
                  fair: 164,
                  poor: 29,
                  recent: 86,
                  title: '神作'
                }
              },
              ratingCount: 622,
              star: 88,
              searchIdx: 2,
              readingCount: 509,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '43027588',
                title: '热锅上的家庭：家庭问题背后的心理真相',
                author: '奥古斯都·纳皮尔  卡尔·惠特克',
                translator: '李瑞玲',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F588\u002F43027588\u002Fs_43027588.jpg',
                version: 1652116866,
                format: 'epub',
                type: 0,
                price: 40.8,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '以往，我们把心理问题归咎于个人、创伤和原生家庭，试图站在个人的角度突破创伤性经历和童年问题。可这本书告诉我们，家庭就像一个小宇宙，自有一股强大的力量。当心理问题、家庭问题出现时，人不必也不应孤军奋战，要和每一位家人一起解决问题。作者用生动细腻的语言为我们讲述了布莱斯一家是如何在治疗师的引导下找对方向，化解家庭危机的。借由书中家庭所面临的危机，作者带我们揭开了家庭治疗的面纱，也向我们解释了家庭中存在已久的制衡力量、三角关系以及原生家庭的影响等诸多问题。本书自1978年成书以来，在全美掀起了广泛讨论的热潮，是家庭心理治疗领域极具影响力的作品。',
                centPrice: 4080,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 9555120,
                publishTime: '2015-01-01 00:00:00',
                category: '心理-心理学应用',
                categories: [
                  {
                    categoryId: 800000,
                    subCategoryId: 800005,
                    categoryType: 0,
                    title: '心理-心理学应用'
                  }
                ],
                hasLecture: 1,
                lPushName: '李松蔚、樊登推荐，原生家庭经典著作！',
                lastChapterIdx: 112,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 903,
                newRatingCount: 1231,
                newRatingDetail: {
                  good: 1124,
                  fair: 91,
                  poor: 16,
                  recent: 49,
                  title: '神作'
                }
              },
              ratingCount: 284,
              star: 87,
              searchIdx: 3,
              readingCount: 348,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '24979873',
                title: '不咆哮，让孩子爱上学习',
                author: '田宏杰',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F59\u002FYueWen_24979873\u002Fs_YueWen_24979873.jpg',
                version: 908695017,
                format: 'epub',
                type: 0,
                price: 22.5,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '1. 家长陪读必修课！一本教家长如何陪孩子写作业的书。2. 用点心理学，破解陪读难题。田宏杰博士作为儿童心理教育专家，长达20年实战心理教学经验，上万个家庭教育案例，帮助无数孩子和家长解决问题。3. 70个常见学习场景，从困扰你的问题开始，内容涵盖情绪管理、自控力、性格形成、习惯培养、学习方法等，超强实操性陪读全书，28天建立和谐亲子陪读关系，让家长从容陪读，让孩子爱上学习。4. 教育学与心理学大咖联袂推荐，抓住关键时期，受益终生。',
                centPrice: 2250,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2019-01-01 00:00:00',
                category: '教育学习-育儿',
                categories: [
                  {
                    categoryId: 1400000,
                    subCategoryId: 1400006,
                    categoryType: 0,
                    title: '教育学习-育儿'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 82,
                paperBook: {
                  skuId: '12543154'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 904,
                newRatingCount: 927,
                newRatingDetail: {
                  good: 843,
                  fair: 71,
                  poor: 13,
                  recent: 16,
                  title: '神作'
                }
              },
              ratingCount: 102,
              star: 85,
              searchIdx: 4,
              readingCount: 320,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '29108643',
                title: '愤怒的葡萄',
                author: '[美]约翰·斯坦贝克',
                translator: '王一凡',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F47\u002FYueWen_29108643\u002Fs_YueWen_29108643.jpg',
                version: 594038491,
                format: 'epub',
                type: 0,
                price: 28.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '我不知道那里是天堂还是地狱，但那里是我们的希望，而我们一定要活下去……这是一个感人至深的传奇故事。沙尘暴毁了乔德一家的土地，迫使他们离开家乡。他们用破铜烂铁拼装出一辆拖车，堆上所有家当，沿着六十六号公路，一路向西，前往传说中葡萄漫山遍野的天堂——加州。在这趟三千公里的漫长旅程里，他们经历了很多不可思议的事情。有些事情很残酷、很痛苦，但也有些际遇是如此感动他们，令他们重燃活下去的信心。',
                centPrice: 2899,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -3806122,
                publishTime: '2019-06-01 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  },
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 34,
                paperBook: {
                  skuId: '12528635'
                },
                copyrightChapterUids: [34],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 921,
                newRatingCount: 3486,
                newRatingDetail: {
                  good: 3274,
                  fair: 173,
                  poor: 39,
                  recent: 184,
                  title: '神作'
                }
              },
              ratingCount: 150,
              star: 88,
              searchIdx: 5,
              readingCount: 734,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '29629921',
                title: '梵高手稿',
                author: '文森特·梵高',
                translator: '57°N艺术小组',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F921\u002F29629921\u002Fs_29629921.jpg',
                version: 1981603381,
                format: 'epub',
                type: 0,
                price: 115.8,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '自学画画的梵高，对自己的不足十分了解，但正如他在信中所言，只要坚持下去，相信自己可以掌握那些绘画技巧，不断的画画，那么他的人生便是有意义的。梵高焦虑着，怀疑着，痛苦着，也狂喜着，但他却从未让自己对绘画的激情被充满悲剧性的人生影响过，靠着不懈的努力与天赋的才华，梵高以旺盛的精力创作出了无数已成为无价之宝的作品。在这本全新翻译的梵高书信集中，纽约大都会艺术博物馆的安娜·苏，从近千封书信中精心挑选了150多封，撷取了梵高在其中描写这些作品创作、构思过程的片段，以及他对艺术、艺术家、文学、宗教、景观等众多话题的独特见解，配以信中提到的画作以及书信原稿作为参照，向所有热爱梵高的人展示出了一个不一样的梵高。在这本书里，梵高没有被生活琐事所侵扰，没有精神的痛苦与压力。在这里，梵高只属于绘画，属于艺术，属于那片金黄的麦田与飞过群鸦的天空。',
                centPrice: 11580,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 16379935,
                publishTime: '2018-04-01 00:00:00',
                category: '艺术-绘画',
                categories: [
                  {
                    categoryId: 400000,
                    subCategoryId: 400002,
                    categoryType: 0,
                    title: '艺术-绘画'
                  }
                ],
                hasLecture: 0,
                lPushName: '千人评分9.4！听梵高讲星空、麦田与爱！',
                shouldHideTTS: 1,
                lastChapterIdx: 13,
                paperBook: {
                  skuId: '12346174'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 1,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 937,
                newRatingCount: 3106,
                newRatingDetail: {
                  good: 2927,
                  fair: 145,
                  poor: 34,
                  recent: 52,
                  title: '神作'
                }
              },
              ratingCount: 1311,
              star: 91,
              searchIdx: 6,
              readingCount: 282,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '43168695',
                title: '形影不离',
                author: '[法]西蒙娜·德·波伏瓦',
                translator: '曹冬雪',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F695\u002F43168695\u002Fs_43168695.jpg',
                version: 1039835866,
                format: 'epub',
                type: 0,
                price: 45,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《第二性》作者波伏瓦生前从未公开的小说手稿首度面世，以少女时代挚友扎扎为原型，悼念她生命中刻骨铭心的友谊。九岁那年，希尔维初次遇见与她同岁的女孩安德蕾。她从未见过如此酷的女孩。与乖顺的“好学生”希尔维不同，安德蕾聪慧却叛逆，对一切若即若离。她经历过可怕的烧伤，身上带着火的印记。为了拒绝参加社交活动，她不惜用斧头砍伤自己。她们变得形影不离。这感情炽烈、深入灵魂。从一起违抗学校秩序开始，循规蹈矩的希尔维一步步走向自由；生而不羁的安德蕾，却在家庭和礼法的约束下，步步挣扎，逐渐成为困兽。',
                centPrice: 4500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2021-12-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lPushName: '《第二性》作者波伏瓦未公开的手稿首度面世',
                lastChapterIdx: 15,
                paperBook: {
                  skuId: '13611686'
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 902,
                newRatingCount: 2436,
                newRatingDetail: {
                  good: 2236,
                  fair: 180,
                  poor: 20,
                  recent: 73,
                  title: '神作'
                }
              },
              ratingCount: 373,
              star: 88,
              searchIdx: 7,
              readingCount: 119,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '40223839',
                title: '新摄影笔记',
                author: '宁思潇潇',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F839\u002F40223839\u002Fs_40223839.jpg',
                version: 1004851030,
                format: 'epub',
                type: 0,
                price: 99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书是作者在《摄影笔记》的基础上进行悉心编辑整理后的新作。作者结合亲身的拍摄经历，用通俗的语言将摄影技术娓娓道来，使读者真切地感受到学习摄影并不难。本书共分为4章，包含取景、曝光、摄影中的虚实、构图等内容。作者总结了亲身拍摄经验，创造出一套摄影教程体系，以思维导图的形式，引导摄影爱好者进行学习。作者深入浅出的讲解方式，让读者能够快速上手学习摄影技法，并通过实践，不断检验和提高自己的摄影水平。本书适合摄影初学者和摄影爱好者学习参考。',
                centPrice: 9900,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 5256588,
                publishTime: '2021-06-01 00:00:00',
                category: '艺术-摄影',
                categories: [
                  {
                    categoryId: 400000,
                    subCategoryId: 400009,
                    categoryType: 0,
                    title: '艺术-摄影'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 28,
                paperBook: {
                  skuId: '13381580'
                },
                copyrightChapterUids: [29],
                blockSaveImg: 1,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 903,
                newRatingCount: 2379,
                newRatingDetail: {
                  good: 2188,
                  fair: 149,
                  poor: 42,
                  recent: 115,
                  title: '神作'
                }
              },
              ratingCount: 238,
              star: 88,
              searchIdx: 8,
              readingCount: 570,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300086034',
                title: '两个太阳',
                author: '胡敏',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F98\u002Fcpplatform_vi75ivzrvizenycwz4pzia\u002Fs_cpplatform_vi75ivzrvizenycwz4pzia1706867310.jpg',
                version: 1092003818,
                format: 'epub',
                type: 0,
                price: 48,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '这是一个根据真实事件改编的故事。       \n二十八岁尿毒症女孩王霄为了活下去，要和脑瘤复发患者黎大明结婚。两人各有想法，一个想要肾，一个想解决自己死后父亲的养老问题。签约，领证，两人成了夫妻。为了顺利通过器官捐献伦理委员会OPO审核，他们还住在了一起。\n对王霄来说，等肾，就是盼“丈夫”快死，人生的悖论悲壮而凄烈。\n令人唏嘘的是，这对协议夫妻通过婚后有摩擦、有默契、有争吵、有体谅的日常相处，一步步被对方温暖。黎大明脑瘤内血管爆裂，黎父按儿子要求签字放弃治疗，王霄却以妻子身份否定，要求医生开颅抢救。\n原本各有私心的假夫妻成了生死之交，对爱和生死也有了新的认识。',
                centPrice: 4800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -3319053,
                publishTime: '2024-04-01 00:00:00',
                category: '精品小说-社会小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100001,
                    categoryType: 0,
                    title: '精品小说-社会小说'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 48,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [50],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 905,
                newRatingCount: 1602,
                newRatingDetail: {
                  good: 1519,
                  fair: 68,
                  poor: 15,
                  recent: 531,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 9,
              readingCount: 751,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300027135',
                title: '怦然心动：中英双语新版',
                author: '文德琳·范·德拉安南',
                translator: '陈常歌',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F7\u002FcpPlatform_8edrZHSwUnQXW5ai62uCtg\u002Fs_cpPlatform_8edrZHSwUnQXW5ai62uCtg.jpg',
                version: 1567704756,
                format: 'epub',
                type: 0,
                price: 65,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '一个独立、可爱又真挚的女生；\r\n一个如彩虹般绚烂却不懂得爱的男生；\r\n一篮鸡蛋、一棵无花果树和眼神交汇处闪亮的光芒；\r\n关于初恋的那些小事，金色的阳光和清新美妙的少年时代。',
                centPrice: 6500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2022-09-30 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 39,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [40],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 928,
                newRatingCount: 559,
                newRatingDetail: {
                  good: 532,
                  fair: 18,
                  poor: 9,
                  recent: 68,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 10,
              readingCount: 162,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '41787997',
                title: '刑辩私塾',
                author: '朱明勇',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F997\u002F41787997\u002Fs_41787997.jpg',
                version: 2029475190,
                format: 'epub',
                type: 0,
                price: 62.3,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书旨在通过对个案的办理过程的复盘、思考和总结，传授具体的刑事辩护理念、思维和技术。本书更多的是启发刑辩思维、领悟刑辩灵魂的启蒙读物，同时也希望读者能从中感受到不断打磨的法律匠人精神。这一次，鉴识“技术派”。',
                centPrice: 6230,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 5666835,
                publishTime: '2021-09-01 00:00:00',
                category: '社会文化-法律',
                categories: [
                  {
                    categoryId: 900000,
                    subCategoryId: 900001,
                    categoryType: 0,
                    title: '社会文化-法律'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 22,
                paperBook: {
                  skuId: '13467662'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 927,
                newRatingCount: 566,
                newRatingDetail: {
                  good: 534,
                  fair: 22,
                  poor: 10,
                  recent: 79,
                  title: '神作'
                }
              },
              ratingCount: 24,
              star: 81,
              searchIdx: 11,
              readingCount: 200,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300047434',
                title: '堂吉诃德的眼镜：小说细读十二讲',
                author: '张秋子',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F60\u002Fcpplatform_kd4d2k9knmehfdurbenzq6\u002Fs_cpplatform_kd4d2k9knmehfdurbenzq61675311252.jpg',
                version: 707679513,
                format: 'epub',
                type: 0,
                price: 46,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '契诃夫小说里吃一片西瓜为什么要用半小时？\n包法利夫人的幽会与肥料奖缘何相提并论？\n堂吉诃德戴上眼镜看到的世界反而失真?\n本书旨在为文学读者提供一副新眼镜，透过它，小说中富有深意又容易忽略的细节纷纷映入眼帘，见从前所未见。\n作者秉持“新手友好”原则，以文本细读的方式手把手带领读者在小说内外上下求索。\n上完这十二堂小说课，再读小说，就不只是读一个有趣的故事，也可以是欣赏它精妙的技术、深广的主题',
                centPrice: 4600,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 16429399,
                publishTime: '2022-11-01 00:00:00',
                category: '文学-文学鉴赏',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300007,
                    categoryType: 0,
                    title: '文学-文学鉴赏'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 16,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 1,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 930,
                newRatingCount: 588,
                newRatingDetail: {
                  good: 560,
                  fair: 24,
                  poor: 4,
                  recent: 86,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 12,
              readingCount: 203,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '32169889',
                title: '受戒：汪曾祺小说精选（读客三个圈经典文库）',
                author: '汪曾祺',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F8\u002FYueWen_32169889\u002Fs_YueWen_32169889.jpg',
                version: 1057776817,
                format: 'epub',
                type: 0,
                price: 22.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '躲进汪曾祺的文学桃花源，真的好治愈啊！一本读透汪曾祺小说精髓！收录代表作33篇，按照其创作经历精心编排。金庸、沈从文、黄裳、毕飞宇所钟爱的作家！莫言：汪先生是短篇小说大师。本书完整收录汪曾祺小说代表作33篇，如《受戒》《大淖记事》《鸡鸭名家》《异秉》等。这些小说多以他的故乡高邮和生活多年的昆明为背景，讲述 “有平和，有爱意，有深情，有至美”的人和事。',
                centPrice: 2299,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2020-06-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 41,
                paperBook: {
                  skuId: '12906300'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 923,
                newRatingCount: 581,
                newRatingDetail: {
                  good: 548,
                  fair: 28,
                  poor: 5,
                  recent: 79,
                  title: '神作'
                }
              },
              ratingCount: 47,
              star: 82,
              searchIdx: 13,
              readingCount: 264,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300076411',
                title: '月牙儿',
                author: '老舍',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002Fcpplatform_32pzqsakpehrhs6dtcevk4\u002Fs_cpplatform_32pzqsakpehrhs6dtcevk41698913932.jpg',
                version: 1642285617,
                format: 'epub',
                type: 0,
                price: 19.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《月牙儿》是老舍于1935年创作的中篇小说，并于1986年拍摄了同名电影。小说以月牙儿为线索，通过母女两代人沦为暗娼的经历，反映了二十世纪上半叶中国城市贫民的生存状态。但老舍并不想单纯地批判当时的社会及人性的丑陋，而是将丑陋的现实如何一步步泯灭纯真之心的历程展现在读者眼前。',
                centPrice: 1999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 19055226,
                publishTime: '2023-10-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 45,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 920,
                newRatingCount: 661,
                newRatingDetail: {
                  good: 645,
                  fair: 13,
                  poor: 3,
                  recent: 155,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 14,
              readingCount: 101,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300037944',
                title: '舌诊十讲',
                author: '张坚',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F87\u002FcpPlatform_11QnyUmb61TDL2hEDgjGt4\u002Fs_cpPlatform_11QnyUmb61TDL2hEDgjGt4.jpg',
                version: 1826244480,
                format: 'epub',
                type: 0,
                price: 47.5,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '舌诊为中医的特色诊法，临床价值巨大。笔者从事中医临床工作，同时擅长中医科普，个人自媒体影响力巨大，自媒体舌诊系列深受广大中医爱好者喜爱。 本书特色：不仅对中医专业从业人员临床有所帮助，亦能为普通中医爱好者所看懂。受众面广泛。\r\n作者简介：本科毕业于南京中医药大学第二临床医学院针灸推拿学专业，硕士就读于南京中医药大学第一临床医学院中医男科学专业，师从薛建国教授。就职于南京中医药大学第一临床医学院。',
                centPrice: 4750,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 5783297,
                publishTime: '2021-08-01 00:00:00',
                category: '医学健康-医学',
                categories: [
                  {
                    categoryId: 2100000,
                    subCategoryId: 2100003,
                    categoryType: 0,
                    title: '医学健康-医学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 40,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 1,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 926,
                newRatingCount: 620,
                newRatingDetail: {
                  good: 585,
                  fair: 25,
                  poor: 10,
                  recent: 116,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 15,
              readingCount: 216,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '26001269',
                title: '战争与和平（全4册|读客三个圈经典文库）',
                author: '列夫·托尔斯泰',
                translator: '草婴',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F84\u002FYueWen_26001269\u002Fs_YueWen_26001269.jpg',
                version: 1530696640,
                format: 'epub',
                type: 0,
                price: 29.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '如果这个世界做自我介绍，就是《战争与和平》的样子！世界十大长篇经典名著之首！村上春树15岁时，已将《战争与和平》读了3遍！马尔克斯、毛姆、普鲁斯特纷纷致敬！草婴经典译本！收录5幅精美彩插、原创人物关系图、完整导读册呈现恢弘史诗画面！在人类文学史上，《战争与和平》用559个人物，完成了一场恢弘的叙事，高高举起了整个人类文明，被称为“这个时代伟大的史诗”！入选新课标推荐必读和教育部统编《语文》推荐阅读丛书！以四大贵族的经历为主线，完整勾勒出1805年至1820年间俄国的重大历史事件。在战争与和平两种生活的交织中，透过一群年轻的心灵，展现了一个惊心动魄的时代...',
                centPrice: 2999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2019-05-01 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  },
                  {
                    categoryId: 300000,
                    subCategoryId: 300014,
                    categoryType: 0,
                    title: '文学-世界名著'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 28,
                paperBook: {
                  skuId: '12603910'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 913,
                newRatingCount: 529,
                newRatingDetail: {
                  good: 491,
                  fair: 30,
                  poor: 8,
                  recent: 27,
                  title: '神作'
                }
              },
              ratingCount: 115,
              star: 86,
              searchIdx: 16,
              readingCount: 277,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '40400963',
                title: '茶馆',
                author: '老舍',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002FYueWen_40400963\u002Fs_YueWen_40400963.jpg',
                version: 986843220,
                format: 'epub',
                type: 0,
                price: 9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '《茶馆》是老舍名剧，也是中国现代名剧经典。通过茶馆小世界，反映了百年中国近现代史，兼具艺术价值与认识价值，是中学语文教学必读书。本次新编，加附了老舍另一名剧《龙须沟》，内容与《茶馆》上下相续，艺术上互相映衬。同时修订了2003年郭娟写的《导言》。',
                centPrice: 900,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -2571052,
                publishTime: '2018-04-13 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 24,
                paperBook: {
                  skuId: '12339115'
                },
                copyrightChapterUids: [4],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 929,
                newRatingCount: 737,
                newRatingDetail: {
                  good: 713,
                  fair: 19,
                  poor: 5,
                  recent: 233,
                  title: '神作'
                }
              },
              ratingCount: 55,
              star: 83,
              searchIdx: 17,
              readingCount: 429,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '29600048',
                title: '夜莺与玫瑰',
                author: '[爱尔兰]奥斯卡·王尔德',
                translator: '张乐',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F48\u002F29600048\u002Fs_29600048.jpg',
                version: 1035160573,
                format: 'epub',
                type: 0,
                price: 17.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '本书为王尔德的经典童话作品集，包括《夜莺与玫瑰》《快乐王子》《好朋友》《了不起的高筒炮》《少年国王》《西班牙公主的生日》《渔夫和灵魂》《星童》《自私的巨人》九部脍炙人口的作品。王尔德首创的成人童话，风格独树一帜，构思巧妙，想象丰富，语言轻松机警，不乏讽刺，每一个故事的讲述都饱含对社会的同情，在童话中蕴含着比寓言更丰富的社会内容，他跟儿子讲童话的时候曾落泪道：“真正美的东西都是让人忧伤的。”',
                centPrice: 1799,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 7029174,
                publishTime: '2019-09-01 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 29,
                paperBook: {
                  skuId: '12693580'
                },
                copyrightChapterUids: [12],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 900,
                newRatingCount: 3320,
                newRatingDetail: {
                  good: 3038,
                  fair: 251,
                  poor: 31,
                  recent: 339,
                  title: '神作'
                }
              },
              ratingCount: 722,
              star: 89,
              searchIdx: 18,
              readingCount: 429,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300067798',
                title: '高山下的花环（红色经典·青少版）',
                author: '李存葆',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F99\u002Fcpplatform_kcbr83hjgydex43jrnr7ya\u002Fs_cpplatform_kcbr83hjgydex43jrnr7ya1692183666.jpg',
                version: 243547973,
                format: 'epub',
                type: 0,
                price: 12,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本文描写了云南边防部队某部的战士们战前、战中、战后的生活。想“曲线调动”的指导员赵蒙生、舍身为国的连长梁三喜和赤胆忠肝的“大炮筒”靳开来，共同在战场上接受血与火的洗礼，经受生与死的考验。文中塑造了一批个性鲜明的当代军人英雄群像，歌颂他们一心为国，以保卫国家和人民的安全为己任的高尚品质。',
                centPrice: 1200,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 17271832,
                publishTime: '2022-11-01 00:00:00',
                category: '政治军事-军事',
                categories: [
                  {
                    categoryId: 1200000,
                    subCategoryId: 1200001,
                    categoryType: 0,
                    title: '政治军事-军事'
                  },
                  {
                    categoryId: 1300000,
                    subCategoryId: 1300001,
                    categoryType: 0,
                    title: '童书-儿童文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 20,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 941,
                newRatingCount: 741,
                newRatingDetail: {
                  good: 724,
                  fair: 12,
                  poor: 5,
                  recent: 226,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 19,
              readingCount: 88,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300036168',
                title: '平安小猪',
                author: '[英]J.K.罗琳 [英]吉姆·菲尔德',
                translator: '王梦达',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F90\u002FcpPlatform_eCmbjpXyzhH8FDxwGfxCUM\u002Fs_cpPlatform_eCmbjpXyzhH8FDxwGfxCUM.jpg',
                version: 355738224,
                format: 'epub',
                type: 0,
                price: 40.8,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '男孩杰克有一个心爱的伙伴——玩偶小猪嘟嘟。嘟嘟和杰克有数不清的开心回忆，更重要的是，嘟嘟陪伴他度过了那些难熬的伤心时刻，懂得杰克说不出口的每一个烦恼。然而意外发生了，杰克弄丢了他的小猪。他悲痛欲绝，哭了整整一天，把眼泪都哭干了。虽然杰克收到了一只作为补偿的、一模一样的玩偶——平安小猪，可他觉得新小猪什么都不是。\r\n杰克哭着睡去，迷迷糊糊间，突然被房间里的响动吵醒。他猛地一拉台灯，发现周围的东西——大到衣柜，小到袜子，还有所有玩具，全都活了过来！平安小猪也不例外。小猪告诉杰克，要想找回他最好的朋友，必须去往一个神奇国度，那里禁止人类踏足，一旦被发现后果不堪设想。\r\n杰克毫不犹豫，和他并不待见的平安小猪一起，开启了惊险刺激的冒险之旅。只要能找回嘟嘟，他愿意付出任何代价。',
                centPrice: 4080,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 24367662,
                publishTime: '2022-01-03 00:00:00',
                category: '童书-儿童文学',
                categories: [
                  {
                    categoryId: 1300000,
                    subCategoryId: 1300001,
                    categoryType: 0,
                    title: '童书-儿童文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 72,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 924,
                newRatingCount: 661,
                newRatingDetail: {
                  good: 627,
                  fair: 26,
                  poor: 8,
                  recent: 136,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 20,
              readingCount: 115,
              riseCount: 0,
              bestMark: ''
            }
          ],
          showAll: 0
        },
        {
          CategoryId: 'newrating_potential_publish',
          totalCount: 974,
          title: '神作潜力榜·出版',
          ranklist: 1,
          ranklistCover: {
            tinycode:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_potential_publish.tinycode.nf0lwrlPfM.png',
            chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_potential_publish.chart_title.zlDPkETx3S.png',
            chart_detail_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_potential_publish.chart_detail_title.69pIMcLUJ8.png',
            chart_tag:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_potential_publish.chart_tag.5ommVShPr7.png',
            eink_chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_potential_publish.eink_chart_title.KHw03y0Pyt.png',
            chart_detail_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.newrating_potential_publish.chart_detail_title_main.eSQxZSxN9R.png',
            chart_title_height: 96,
            chart_title_width: 471,
            desc: '100-500 人点评，推荐值 ≥90%的书籍'
          },
          recommend: '0',
          sublist: [],
          lectureBooks: [
            {
              bookInfo: {
                bookId: '3300024105',
                title: '听见：和豆子的日常对话（全二册）',
                author: '猪乐桃',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F5\u002F3300024105\u002Fs_3300024105.jpg',
                version: 2109146584,
                format: 'epub',
                type: 0,
                price: 47.68,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '“孩子，你说的感人的话，有哲理的话，搞笑的话，冷冷的话，让人生气的话、莫名其妙的话……妈妈全部都听见了哦！”本书是漫画家妈妈猪乐桃与在幼儿园就读的儿子豆子的日常生活故事册。一个个独立小短篇，以场景化、人物视角，记录了画家与儿子在日常遇到的种种小问题和大麻烦。作者以充沛的爱、包容的温柔、谦虚的自省和发现的眼睛，将发生在亲子生活中的大事小情一一记录，轻松分享育儿经验，行文幽默，惹人喜爱。',
                centPrice: 4768,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 7,
                cpid: 17133737,
                publishTime: '2020-07-01 00:00:00',
                category: '艺术-绘画',
                categories: [
                  {
                    categoryId: 400000,
                    subCategoryId: 400002,
                    categoryType: 0,
                    title: '艺术-绘画'
                  }
                ],
                hasLecture: 0,
                lPushName: '孩子，我听见了你，也被你听见。',
                lastChapterIdx: 38,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 1,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 940,
                newRatingCount: 504,
                newRatingDetail: {
                  good: 488,
                  fair: 15,
                  poor: 1,
                  recent: 35,
                  title: '神作潜力'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 1,
              readingCount: 51,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '36059797',
                title: '季羡林自传：我的前半生',
                author: '季羡林',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F797\u002F36059797\u002Fs_36059797.jpg',
                version: 1014697430,
                format: 'epub',
                type: 0,
                price: 15.36,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书是季羡林的自传，回顾了他的童年读书生活、早期教书生涯、留德十年、在北大的教育及他的学术的总结、人生的感悟等，全面讲述了他从山东临清县一个贫苦农民家庭的孩子，一步一步成长为学贯中西、享誉海内外的学术大师的人生历程。语言朴素平实，情感真挚动人，展示了他个人的奋斗经历和内心情感世界。',
                centPrice: 1536,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 3,
                cpid: 17271832,
                publishTime: '2020-11-01 00:00:00',
                category: '人物传记-传记综合',
                categories: [
                  {
                    categoryId: 500000,
                    subCategoryId: 500002,
                    categoryType: 0,
                    title: '人物传记-传记综合'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 103,
                paperBook: {
                  skuId: '13044612'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 931,
                newRatingCount: 502,
                newRatingDetail: {
                  good: 473,
                  fair: 22,
                  poor: 7,
                  recent: 12,
                  title: '神作潜力'
                }
              },
              ratingCount: 61,
              star: 83,
              searchIdx: 2,
              readingCount: 174,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '796800',
                title: '韬晦术',
                author: '杨慎',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F28\u002Fyuewen_796800\u002Fs_yuewen_7968001679660273.jpg',
                version: 0,
                format: 'txt',
                type: 0,
                price: 0.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '本书为公版书，为不受著作权法限制的作家、艺术家及其它人士发布的作品，供广大读者阅读交流。汇聚授权电子版权。',
                centPrice: 99,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 3,
                cpid: 19400530,
                publishTime: '2015-09-01 00:00:00',
                category: '历史-历史典籍',
                categories: [
                  {
                    categoryId: 200000,
                    subCategoryId: 200002,
                    categoryType: 0,
                    title: '历史-历史典籍'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 8,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 919,
                newRatingCount: 520,
                newRatingDetail: {
                  good: 485,
                  fair: 29,
                  poor: 6,
                  recent: 35,
                  title: '神作潜力'
                }
              },
              ratingCount: 151,
              star: 86,
              searchIdx: 3,
              readingCount: 114,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '22791705',
                title: '易经系传别讲',
                author: '南怀瑾',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F97\u002FYueWen_22791705\u002Fs_YueWen_22791705.jpg',
                version: 840423845,
                format: 'epub',
                type: 0,
                price: 31.85,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '相传为孔子所作的《易经系辞传》上下篇，是《易经》的通论，内容包括《易经》的义蕴、功用、起源以及筮法等，历来为世所重。本书是南怀瑾先生有关《系辞传》的讲记。南先生的讲解方式是先摘录每一章的原文，然后综罗古今历史知识、社会现象和自然现象，逐段逐句地加以阐释。语言平易而哲理深刻。',
                centPrice: 3185,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 3,
                cpid: 3795111,
                publishTime: '2014-12-01 00:00:00',
                category: '哲学宗教-东方哲学',
                categories: [
                  {
                    categoryId: 600000,
                    subCategoryId: 600001,
                    categoryType: 0,
                    title: '哲学宗教-东方哲学'
                  }
                ],
                hasLecture: 1,
                shouldHideTTS: 1,
                lastChapterIdx: 30,
                paperBook: {
                  skuId: '13037903'
                },
                copyrightChapterUids: [29],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 900,
                newRatingCount: 1538,
                newRatingDetail: {
                  good: 1394,
                  fair: 105,
                  poor: 39,
                  recent: 15,
                  title: '神作潜力'
                }
              },
              ratingCount: 139,
              star: 84,
              searchIdx: 4,
              readingCount: 242,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300071614',
                title: '陈寅恪与傅斯年（全新增订版）',
                author: '岳南',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F33\u002Fcpplatform_7pjqth7nn75sya5hkq4tcr\u002Fs_cpplatform_7pjqth7nn75sya5hkq4tcr1695264168.jpg',
                version: 16221831,
                format: 'epub',
                type: 0,
                price: 38.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '【大师远去再无大师！新增5万字，收录台湾“中研院”大量珍贵史料，全面书写民国知识分子版图中双峰并峙的杰出代表！莫言领衔，梁文道等数十位名家联袂推荐！】在20世纪初叶成群而来的学术大师中，有些是单打独斗，以本身的研究成果对学术界产生巨大影响而为后人所怀念；有的除个人辉煌的学术造诣，还留下了制度性的遗业(institutional legacy)，在学术界有着长远弥久的影响力。前者当以陈寅恪为代表，后者非傅斯年莫属。 　\n　　陈先后留洋十六载，通晓二十余种文字；傅乃五四运动北京学生游行总指挥，海外留学七年，与陈寅恪在德国柏林大学共同度过了四年时光。二人学成归国，陈氏进入清华国学研究院，成为闻名天下的“四大导师”之一；傅斯年出任中山大学文学院院长，开南国一代学术新风。北伐成功后，被誉为“人间一个*稀有的天才” 的傅斯年出任中央研究院历史语言研究所所长；而“教授的教授”陈寅恪出任史语所历史组主任。傅陈二人这一历史性的聚合，开创了一个举世瞩目的学术流派。令人扼腕的是，随着战争爆发，这对同学加姻亲关系（陈寅恪嫡亲表妹、曾国藩的曾外孙女俞大綵乃傅斯年之妻）的旷代天才，被无情地阻隔在海峡两岸遥天对望而不能相聚。*后的结局是：一个无声地倒毙在台湾孤岛会议大厅，一个默默死于大陆岭南病榻。并世成双的天才之花凋落成泥，只有芬芳永留人间大地。 　\n　　本书叙述了陈寅恪与傅斯年成长、留学以及在动荡岁月中颠沛流离，执着于学术事业的艰难历程，生动卓然地展现了知识分子“独立之精神，自由之思想”的理想信念，是一部反映20世纪上半叶知识分子心路历程与事业追求的心灵史诗，读来感人泪下，令人怅然叹息。',
                centPrice: 3899,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 7,
                cpid: 7029174,
                publishTime: '2014-05-01 00:00:00',
                category: '人物传记-文学家',
                categories: [
                  {
                    categoryId: 500000,
                    subCategoryId: 500007,
                    categoryType: 0,
                    title: '人物传记-文学家'
                  },
                  {
                    categoryId: 500000,
                    subCategoryId: 500005,
                    categoryType: 0,
                    title: '人物传记-历史人物'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 65,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 901,
                newRatingCount: 658,
                newRatingDetail: {
                  good: 625,
                  fair: 18,
                  poor: 15,
                  recent: 76,
                  title: '神作潜力'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 5,
              readingCount: 277,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '834436',
                title: 'Harry Potter： The Complete Collection (1-7）',
                author: 'J.K. Rowling',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F10\u002Fyuewen_834436\u002Fs_yuewen_8344361704792300.jpg',
                version: 678101688,
                format: 'epub',
                type: 0,
                price: 180,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  'All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.',
                centPrice: 18000,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 7,
                cpid: 18120716,
                publishTime: '2015-12-14 00:00:00',
                category: '文学-外国文学',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300013,
                    categoryType: 0,
                    title: '文学-外国文学'
                  }
                ],
                hasLecture: 0,
                shouldHideTTS: 1,
                lastChapterIdx: 228,
                paperBook: {
                  skuId: '19640312'
                },
                otherType: [
                  {
                    type: 'epub',
                    showType: true,
                    translateStatus: 'close',
                    translateDone: true
                  }
                ],
                copyrightChapterUids: [436, 439, 459, 480, 505, 545, 586, 619],
                blockSaveImg: 0,
                language: 'en',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 925,
                newRatingCount: 517,
                newRatingDetail: {
                  good: 491,
                  fair: 9,
                  poor: 17,
                  recent: 28,
                  title: '神作潜力'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 6,
              readingCount: 586,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300090511',
                title: '命悬一线，我不放手',
                author: '薄世宁',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F35\u002Fcpplatform_1lhbuyijdlapj5xrakpcmb\u002Fs_cpplatform_1lhbuyijdlapj5xrakpcmb1710229410.jpg',
                version: 2034689713,
                format: 'epub',
                type: 0,
                price: 68,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '北医三院重症医学科专家、生命守护者薄世宁医生重磅新作，一部生命关怀之书。\n20多年ICU一线亲历，19个生死徘徊的真实故事。被丈夫放弃的妻子、唤醒孩子的母亲、想要回家的老人……他们经历病痛，却未曾放弃好好活着。这些故事中有面对疾病的逃避与抗争，有亲人的不舍和愧疚，还有危难时人性的幽暗与光辉。\n作者以医学科普和人文叙事双重视角，还原ICU真实紧急的救治过程，科普危重症医学常识，探讨当我们面临疾病冲击时，如何做好生死攸关的关键决策：省钱还是保命、放弃还是坚守、如何做最优决策、如何建立医患信任等。这本书不仅是一位医生的人文思考和人生体悟，更是让大家重新认识事关生死的困境与危机，并从中寻求更好的应对方式。',
                centPrice: 6800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 7,
                cpid: -60041,
                publishTime: '2023-11-29 00:00:00',
                category: '医学健康-医学',
                categories: [
                  {
                    categoryId: 2100000,
                    subCategoryId: 2100003,
                    categoryType: 0,
                    title: '医学健康-医学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 30,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 908,
                newRatingCount: 732,
                newRatingDetail: {
                  good: 702,
                  fair: 23,
                  poor: 7,
                  recent: 346,
                  title: '神作潜力'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 7,
              readingCount: 655,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '747188',
                title: '中国文脉（便携本）',
                author: '余秋雨',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F55\u002FYueWen_747188\u002Fs_YueWen_747188.jpg',
                version: 676870240,
                format: 'epub',
                type: 0,
                price: 16.4,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书作者以睿智的语言，以及一则则通俗的故事，人为地构造出了一幅幅浓郁而又深沉的人文图景，紧跟着便进入了直抒式的咏叹，继而以纵横四海的气势，挥洒着对中国文化的种种遐想和议论。此次出版，添加大量《中国国家地理》杂志的图片，使该书图文并茂，精彩纷呈，具有更强的可读性和视觉冲击力。',
                centPrice: 1640,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 3,
                cpid: 6701554,
                publishTime: '2013-02-01 00:00:00',
                category: '文学-散文杂著',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300005,
                    categoryType: 0,
                    title: '文学-散文杂著'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 27,
                paperBook: {
                  skuId: '11322944'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 916,
                newRatingCount: 525,
                newRatingDetail: {
                  good: 486,
                  fair: 32,
                  poor: 7,
                  recent: 31,
                  title: '神作潜力'
                }
              },
              ratingCount: 151,
              star: 85,
              searchIdx: 8,
              readingCount: 114,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '23303666',
                title: '静静的顿河（全集）',
                author: '[苏]肖洛霍夫',
                translator: '金人',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F77\u002Fyuewen_23303666\u002Fs_yuewen_233036661677496572.jpg',
                version: 63521186,
                format: 'epub',
                type: 0,
                price: 63.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《静静的顿河》（1928-1940）是一部杰出的社会主义现实主义作品。小说以第一次世界大战到1922年苏联国内战争为背景，描写顿河地区哥萨克人在这十年间的动荡生活，反映了这一地区的风土人情、社会变化以及重大历史事件。主人公葛利高里因其坎坷、复杂的经历，成为世界文学人物画廊中十分耀眼的一位。',
                centPrice: 6399,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 7,
                cpid: -2571052,
                publishTime: '2015-07-17 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 242,
                paperBook: {
                  skuId: '11742317'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 917,
                newRatingCount: 515,
                newRatingDetail: {
                  good: 478,
                  fair: 32,
                  poor: 5,
                  recent: 19,
                  title: '神作潜力'
                }
              },
              ratingCount: 124,
              star: 87,
              searchIdx: 9,
              readingCount: 94,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300019618',
                title: '刑法罗盘',
                author: '罗翔',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F18\u002F3300019618\u002Fs_3300019618.jpg',
                version: 1113791628,
                format: 'epub',
                type: 0,
                price: 29.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '本书共分为以下5大部分：入罪之前、“不等于不”、“寻衅滋事”、罗生门之判、你的权利。共收录罗翔教授的40余篇随笔文章,罗老师在书中通过盘点一系列社会热点案件，探讨了刑法义理及其适用，盘点了丰富的法治知识与人文理念。作者笔调自省而尖锐，洋溢着责任感与人文情怀。本书不仅启蒙读者的法律思维与维权观念，更可以帮助理解刑法背后更深层次的哲学基础。',
                centPrice: 2999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 7,
                cpid: 15497,
                publishTime: '2020-09-01 00:00:00',
                category: '社会文化-法律',
                categories: [
                  {
                    categoryId: 900000,
                    subCategoryId: 900001,
                    categoryType: 0,
                    title: '社会文化-法律'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 45,
                paperBook: {
                  skuId: '12734575'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 910,
                newRatingCount: 564,
                newRatingDetail: {
                  good: 523,
                  fair: 29,
                  poor: 12,
                  recent: 73,
                  title: '神作潜力'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 10,
              readingCount: 166,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300033995',
                title: '四面风',
                author: '克里斯汀汉娜',
                translator: '黄建树',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F30\u002FcpPlatform_19AQNZZCeC2mzohuiD7ar8\u002Fs_cpPlatform_19AQNZZCeC2mzohuiD7ar8.jpg',
                version: 2104008952,
                format: 'epub',
                type: 0,
                price: 58,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '艰难的时光总会过去，而爱永远存在\r\n从艾尔莎有记忆开始，她就一直很孤独，她很努力地想要招人喜欢，可却并没有被真正爱过，她的父母认为她过高，过瘦，过于苍白，过于缺乏自信，视她为家族的异类；她的丈夫眼里只有他自己的梦想，而她的女儿也不理解她，反而经常迁怒于她。更糟糕的是，好像土地和社会也讨厌她，沙尘暴、大萧条、干旱和无尽的偏见和歧视。\r\n可即使在最糟糕的环境里，她还是想要追寻爱。想要在爱里重新认识和探索自己是谁，哪怕代价是付出一切……\r\n她是女儿、母亲、妻子、女人和一个战士。',
                centPrice: 5800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 7,
                cpid: -60041,
                publishTime: '2022-10-13 00:00:00',
                category: '精品小说-情感小说',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100002,
                    categoryType: 0,
                    title: '精品小说-情感小说'
                  }
                ],
                hasLecture: 0,
                lPushName: '她是女儿、母亲、妻子、女人和一个战士。',
                lastChapterIdx: 46,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 906,
                newRatingCount: 543,
                newRatingDetail: {
                  good: 501,
                  fair: 35,
                  poor: 7,
                  recent: 45,
                  title: '神作潜力'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 11,
              readingCount: 60,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300025080',
                title: '大学问·实践社会科学系列·现代中国的形成（1600—1949）',
                author: '李怀印',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F93\u002FcpPlatform_1811AJZuP1GQGqaL1Hjmyv\u002Fs_cpPlatform_1811AJZuP1GQGqaL1Hjmyv.jpg',
                version: 1766916150,
                format: 'epub',
                type: 0,
                price: 35.9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '今天的中国究竟从何而来？现代中国何以能避免多族群帝国崩溃和分裂的命运，建立一个高度有效且长期稳定的国家？其疆域构成、族群组合和政权形态具有何种历史合理性与独特性？今后的中国国家能否继续维持“既大且强”的格局？本书令人信服地回答了以上极具挑战性的问题。\n本书是一部视野宏大、新见迭出的中国近现代史著作。全书主要围绕对现代中国形成过程的重新认识问题，以及中国近代史的历史书写本身所存在的问题两方面展开研究。作者从全球史的视角，着眼于地缘政治、财政军事和政治认同三个要素，全面论述十七至二十世纪现代中国的形成过程，在世界历史的视野下探寻现代中国形成的独特路径。全书视野宽广，内容丰富，见解独到，对于试图理解现代中国之过去与未来的研究者和普通读者来说，都是一部不容错过的精彩著作。',
                centPrice: 3590,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 7,
                cpid: 5207994,
                publishTime: '2022-02-18 00:00:00',
                category: '历史-中国近现代',
                categories: [
                  {
                    categoryId: 200000,
                    subCategoryId: 200009,
                    categoryType: 0,
                    title: '历史-中国近现代'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 57,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 917,
                newRatingCount: 533,
                newRatingDetail: {
                  good: 501,
                  fair: 21,
                  poor: 11,
                  recent: 37,
                  title: '神作潜力'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 12,
              readingCount: 112,
              riseCount: 0,
              bestMark: ''
            }
          ],
          showAll: 0
        },
        {
          CategoryId: 'hot_search',
          totalCount: 50,
          title: '热搜榜',
          ranklist: 1,
          ranklistCover: {
            tinycode:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.hot_search.tinycode.oNNrvXF59h.png',
            chart_detail_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.hot_search.chart_detail_title.thN0Skg4yr.png',
            chart_detail_title_main:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.hot_search.chart_detail_title_main.mAdFrpFguj.png',
            chart_background_color_1: '#FF5841',
            chart_background_color_2: '#FF823C',
            chart_title_height: 96,
            chart_title_width: 471,
            desc: '微信读书用户近期热搜的书籍',
            chart_tag:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.hot_search.chart_tag.rJ4BFFWdWX.png',
            chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.hot_search.chart_title.G9RQRC4CW4.png',
            eink_chart_title:
              'https:\u002F\u002Fweread-1258476243.file.myqcloud.com\u002Fassets\u002Franklist.hot_search.eink_chart_title.VbChsFRvDv.png'
          },
          recommend: '0',
          sublist: [],
          lectureBooks: [
            {
              bookInfo: {
                bookId: '3300020163',
                title: '我的阿勒泰（马伊琍、周依然、于适主演同名电视剧原著）',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F31\u002Fcpplatform_fy7wyg2acrhxq1vu4yvs9y\u002Fs_cpplatform_fy7wyg2acrhxq1vu4yvs9y1714307419.jpg',
                version: 396072845,
                format: 'epub',
                type: 0,
                price: 22.5,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '偏远寂静的阿克哈拉村，缓慢而永恒的喀吾图，沙依横布拉克的夏牧场……“阿勒泰的精灵”李娟以细腻明亮的笔触全景式记录北疆边地美好闪光的时刻。全书分为两辑。第一辑记忆之中（2007-2009），记录了在喀吾图和阿克哈拉村细碎坚忍的生活画面；第二辑角落之中（2002-2006），原生态书写了李娟和母亲及高龄的外婆随牧民迁徙、流动的日常：开杂货铺，当小裁缝，帮往来的牧民车衣裙，去大山深处采野生木耳；春天沙依恒布拉克草原上鼓胀的帐篷，夏季牧场上喧嚣盛大的阿肯弹唱会，入冬后瓷实的迢迢雪路……戈壁、草原、森林、雪山、骏马和牧人，细腻明亮的文字展现了游牧民族在边地深远丰富的生存景观。',
                centPrice: 2250,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2021-08-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 32,
                paperBook: {
                  skuId: '12932325'
                },
                copyrightChapterUids: [31],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 894,
                newRatingCount: 13056,
                newRatingDetail: {
                  good: 12068,
                  fair: 816,
                  poor: 172,
                  recent: 3994,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 1,
              readingCount: 54285,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '462592',
                title: '庆余年',
                author: '猫腻',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F592\u002F462592\u002Fs_462592.jpg',
                version: 0,
                format: 'txt',
                type: 0,
                price: -1,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 2,
                payType: 2105346,
                intro:
                  '　　积善之家，必有余庆，留余庆，留余庆，忽遇恩人；幸娘亲，幸娘亲，积得阴功。劝人生，济困扶穷……而谁可知，人生于世，上承余庆，终究却是要自己做出道路抉择，正是所谓岔枝发：\r\n　　东风携云雨，幼藤吐新芽。\r\n　　急催如颦鼓，洗尽茸与华。\r\n　　且待朝阳至，绿遍庭中架。\r\n　　更盼黄叶时，采得数枚瓜。\r\n　　……\r\n　　……\r\n　　《庆余年》同名影视剧由张若昀、李沁、陈道明、吴刚等主演，11月26日起在腾讯视频、爱奇艺开播。',
                centPrice: 17780,
                finished: 1,
                free: 0,
                mcardDiscount: 20,
                ispub: 2,
                cpid: 5,
                publishTime: '',
                realPrice: 17780,
                category: '男生小说-历史架空',
                categories: [
                  {
                    categoryId: 1900000,
                    subCategoryId: 1900008,
                    categoryType: 1,
                    title: '男生小说-历史架空'
                  },
                  {
                    categoryId: 100000,
                    subCategoryId: 100012,
                    categoryType: 0,
                    title: '精品小说-影视原著'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 777,
                paperBook: {
                  skuId: '12988476'
                },
                copyrightChapterUids: [],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 858,
                newRatingCount: 240433,
                newRatingDetail: {
                  good: 206351,
                  fair: 29448,
                  poor: 4634,
                  recent: 187,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 2,
              readingCount: 5638,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300036895',
                title: '费可的晚宴',
                author: '珞珈',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F94\u002FcpPlatform_dCqi6dpbtB1eynDnjD12j2\u002Fs_cpPlatform_dCqi6dpbtB1eynDnjD12j2.jpg',
                version: 1959988369,
                format: 'epub',
                type: 0,
                price: 25,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '中国版《无人生还》，最好的悬疑来自现实，藏于人心。珞珈都市悬疑最新力作。谎言和真相编织出缜密大网，一场晚宴，“无人生还”，这是一个“天才雷普利”式的故事。欲望面前，人性暴露无遗。\n一个神秘的晚宴邀请，将六个互不相识的陌生人齐聚于一幢湖畔别墅。\n晚宴的主人却始终不见现身。\n随着剧情的展开，交织的回忆和现实，渐渐揭示出他们未曾发现的联系——原来他们所有人，都被这晚宴的主人欺骗过。\n一段段充斥着欲望与背叛、诱惑与悲凉的故事，勾勒出了一个男人令人唏嘘的一生。\n然而，再善良的人也有阴暗的一点私心。再邪恶的人，也可能动过善念。\n真相，也许只存在于未曾讲述出来的故事里。',
                centPrice: 2500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14792401,
                publishTime: '2022-11-14 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 12,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 640,
                newRatingCount: 3936,
                newRatingDetail: {
                  good: 1995,
                  fair: 1582,
                  poor: 359,
                  recent: 3595,
                  title: '褒贬不一'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 3,
              readingCount: 4715,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300020164',
                title: '记一忘三二（不开心就读李娟！）',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F64\u002F3300020164\u002Fs_3300020164.jpg',
                version: 1896692399,
                format: 'epub',
                type: 0,
                price: 13.9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '“鲁迅文学奖”“中国好书”奖得主，李娟《记一忘三二》2020年全新修订版。作者替换增改几万字篇幅，并增加新序。《记一忘三二》是作家李娟十余年来的随笔结集。三十余篇以“记”为题的文字轻松随性，从亲情、友情、爱情，工作、生活、兴趣乃至梦境等诸多侧面，记录了李娟的心路日常——与母亲相依为命也闹过“分居”，定居于荒野中的大院子而生活不再颠沛流离，少年时曾遭受的暴力与得到的关爱，等等，随着成长反而愈益清晰。种种文字率性而作，平实诙谐，同时又有掩盖不住的温暖和诗意，组成一幕幕“含泪的微笑”，连缀起时间流逝中的琐碎日常。',
                centPrice: 1390,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2020-07-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 40,
                paperBook: {
                  skuId: '12934342'
                },
                copyrightChapterUids: [41],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 908,
                newRatingCount: 8043,
                newRatingDetail: {
                  good: 7421,
                  fair: 537,
                  poor: 85,
                  recent: 844,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 4,
              readingCount: 11351,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '25077687',
                title: '遥远的向日葵地',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F96\u002FYueWen_25077687\u002Fs_YueWen_25077687.jpg',
                version: 516874156,
                format: 'epub',
                type: 0,
                price: 19,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '2017中国好书，第七届鲁迅文学奖获奖作品。阿勒泰的葵花比阿尔勒的葵花更炽烈，最亲的亲人和最亲的家畜都是家人。广受好评的新生代非虚构散文写手李娟继“羊道”三部曲后全新力作。母亲带着家禽、牲畜，举家迁徙乌伦古河岸的戈壁，定居在葵花地边的“冬窝子”，开始一段充满艰辛与奇遇的耕种生活。荒漠上开辟的百亩葵花地，经历鹅喉羚啃食、三次补种，又接连遭遇干旱、虫害，直至收获，中间是微弱的希望和漫长等待……在这些吉光片羽的记录中，作者首次集中将思绪汇聚于自己家族成员的生活细微，他们与无垠荒漠构成完整的生态样本。',
                centPrice: 1900,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2017-11-01 00:00:00',
                category: '文学-散文杂著',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300005,
                    categoryType: 0,
                    title: '文学-散文杂著'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 51,
                paperBook: {
                  skuId: '12256592'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 926,
                newRatingCount: 18131,
                newRatingDetail: {
                  good: 16953,
                  fair: 1108,
                  poor: 70,
                  recent: 752,
                  title: '神作'
                }
              },
              ratingCount: 4556,
              star: 92,
              searchIdx: 5,
              readingCount: 4107,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '855327',
                title: '悉达多',
                author: '赫尔曼·黑塞',
                translator: '姜乙',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F68\u002FYueWen_855327\u002Fs_YueWen_855327.jpg',
                version: 9665253,
                format: 'epub',
                type: 0,
                price: 32,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '    青年悉达多厌倦了婆罗门生活，与好友侨文达一道跟随沙门修行。在舍卫城他们聆听了佛陀乔达摩的教义，侨文达选择追随乔达摩，悉达多则继续修行之路。他在城市中结识名妓迦摩罗，并开始追逐情欲和名利，直至对一切产生厌倦。他再次抛下世俗，决心结束自己的生命。在河边，在绝望的瞬间，他听到河水的声音……\n',
                centPrice: 3200,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -3319053,
                publishTime: '2017-01-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 20,
                paperBook: {
                  skuId: '12135684'
                },
                copyrightChapterUids: [18],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 916,
                newRatingCount: 35688,
                newRatingDetail: {
                  good: 33216,
                  fair: 2163,
                  poor: 309,
                  recent: 1423,
                  title: '神作'
                }
              },
              ratingCount: 5966,
              star: 91,
              searchIdx: 6,
              readingCount: 3491,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '244004',
                title: '冬牧场',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F22\u002Fyuewen_244004\u002Fs_yuewen_2440041690201500.jpg',
                version: 930904483,
                format: 'epub',
                type: 0,
                price: 45,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '2010年末，李娟跟随哈萨克牧民居麻一家深入北疆阿勒泰地区沙漠深处的冬牧场，度过了一整个冬天。在漫长的寒冷世界里，李娟详实地记录下这块古老、贫瘠又广阔的土地上的所见所闻：牧民们迁徙、放牧、背雪、绣花毡、整地窝子清理畜圈，隆重豪华地串门拜访……艰辛繁重的劳动是日常也是阔大寂寞生活的乐趣与尊严。这是哈萨克族逐水草而居的游牧生活中最动荡艰难的一个季节，随着时光流转与外部世界物质的丰富，这种生活方式行将逐渐消失。所幸李娟的文字真实还原了这个场景——牧人们的冬天和牲畜们的冬天，“羊的一生是牧人的一年”。',
                centPrice: 4500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2023-06-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 46,
                paperBook: {
                  skuId: '12450399'
                },
                copyrightChapterUids: [84],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 889,
                newRatingCount: 12471,
                newRatingDetail: {
                  good: 11216,
                  fair: 1181,
                  poor: 74,
                  recent: 329,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 7,
              readingCount: 2747,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '857266',
                title: '诊疗椅上的谎言',
                author: '[美]欧文·亚隆',
                translator: '鲁宓',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F266\u002F857266\u002Fs_857266.jpg',
                version: 1558769199,
                format: 'epub',
                type: 0,
                price: 25,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '亚隆在书中以精心设计、巧妙连贯的编剧手法，探讨心理治疗过程中的移情与反移情、幼年经验、心理治疗的原则、如何促成来访者最重要的改变、如何督导心理治疗师的训练等，堪称最实用的心理咨询临床实战书，情节构思精巧严密，机关连环，跌宕起伏，极富戏剧性。',
                centPrice: 2500,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 4157477,
                publishTime: '2017-01-01 00:00:00',
                category: '心理-心理学应用',
                categories: [
                  {
                    categoryId: 800000,
                    subCategoryId: 800005,
                    categoryType: 0,
                    title: '心理-心理学应用'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 38,
                paperBook: {
                  skuId: '12830725'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 941,
                newRatingCount: 2479,
                newRatingDetail: {
                  good: 2372,
                  fair: 86,
                  poor: 21,
                  recent: 112,
                  title: '神作'
                }
              },
              ratingCount: 449,
              star: 90,
              searchIdx: 8,
              readingCount: 610,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '244005',
                title: '阿勒泰的角落',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F23\u002Fyuewen_244005\u002Fs_yuewen_2440051705489978.jpg',
                version: 1581074307,
                format: 'epub',
                type: 0,
                price: 35.4,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《阿勒泰的角落》是近年来广受好评的新生代作家李娟的成名作，由李娟在《文汇报》、《南方周末》等发表的短篇散文集结成册。\n风里来雨里去的边疆牧人、随家庭不断迁徙的动荡生涯、离春天只有二十公分的雪兔、风沙肆掠的荒漠里喂养的金鱼……本应厚重、贫瘠、苍凉的生活，在李娟独树一帜、灵光闪闪的笔触下，却焕发出别样的温暖、丰盈与喜悦。\n若无意指认那在伤感中徘徊、欲望中沉浮的生命就是我们本来的生命，那么，总还有别样干净明亮的生命，等着人去认领。\n正是凭借这部作品，李娟得到刘亮程、王安忆、朱天文、李敬泽、陈村等诸多文学大家的推崇，也受到广大读者的喜爱，并获得第二届在场主义散文奖及第四届天山文艺奖。',
                centPrice: 3540,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 24367662,
                publishTime: '2014-01-01 00:00:00',
                category: '文学-散文杂著',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300005,
                    categoryType: 0,
                    title: '文学-散文杂著'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 47,
                paperBook: {
                  skuId: '11298159'
                },
                copyrightChapterUids: [102],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 867,
                newRatingCount: 9477,
                newRatingDetail: {
                  good: 8325,
                  fair: 1102,
                  poor: 50,
                  recent: 603,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 9,
              readingCount: 5118,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300028279',
                title: '羊道三部曲（套装共3册）',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F64\u002FcpPlatform_e2PMe2yosNoZuqfwtuiCRd\u002Fs_cpPlatform_e2PMe2yosNoZuqfwtuiCRd.jpg',
                version: 931648793,
                format: 'epub',
                type: 0,
                price: 99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '“这是世界最后一支真正意义上的游牧民族。甘愿沉寂在世界上最遥远的角落，逐水草而居。从南面的荒野沙漠到北方的森林草原，绵延千里的跋涉。一年365天，几乎得不到片刻停歇……”\n记录作者李娟跟随哈萨克族扎克拜妈妈一家，历经寒暑，在新疆最北部粗犷、苍茫的阿勒泰山区游牧、转场、迁徙生活的日子。',
                centPrice: 9900,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2022-09-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 105,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2, 4, 32, 72],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 943,
                newRatingCount: 1399,
                newRatingDetail: {
                  good: 1350,
                  fair: 31,
                  poor: 18,
                  recent: 77,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 10,
              readingCount: 1608,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300099734',
                title: '脏活（精英对打工人的道德剥削）',
                author: '[美]埃亚勒·普雷斯',
                translator: '李立丰',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F42\u002Fcpplatform_hmzpggbs1w6d2dqm99qb55\u002Fs_cpplatform_hmzpggbs1w6d2dqm99qb551715590169.jpg',
                version: 116376673,
                format: 'epub',
                type: 0,
                price: 71,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '为什么有些职业既不道德又不体面，还有人抢着做？当工作不再享有尊严，我们是否有退出的选择？在这本讲述职业与不平等的非虚构著作中，作者援引了“脏活”的概念，即社会中不可或缺但被视为肮脏、下作的工作，如屠宰场的移民劳工。这些人无权无势、朝不保夕，还会遭受羞辱与良心谴责。而公众宁愿被蒙在鼓里。本书描述了“看不见的工作”背后，资本如何与权力、技术共谋，塑造了不平等的权力结构，揭示了工作中隐藏道德成本的真相。',
                centPrice: 7100,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 1000000190,
                publishTime: '2024-05-13 00:00:00',
                category: '社会文化-社科',
                categories: [
                  {
                    categoryId: 900000,
                    subCategoryId: 900002,
                    categoryType: 0,
                    title: '社会文化-社科'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 47,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [48],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 781,
                newRatingCount: 46,
                newRatingDetail: {
                  good: 38,
                  fair: 8,
                  poor: 0,
                  recent: 30,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 11,
              readingCount: 382,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300094047',
                title: '反内耗心理学',
                author: '马浩天',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F18\u002Fcpplatform_uj4wiypgzffus1drmxmvq2\u002Fs_cpplatform_uj4wiypgzffus1drmxmvq21712472428.jpg',
                version: 1508155515,
                format: 'epub',
                type: 0,
                price: 49.8,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '这是一本帮助读者摆脱情绪困扰的读物。内耗就是指内在的消耗，自己为难自己；而反内耗就是化解内心的冲突，不再让纠结、拖延、焦虑、自责等损耗自己的能量。本书的内容分成上、下两篇：上篇主要是帮助读者感知自己的情绪，不钻牛角尖，让情绪转个弯，开启低内耗的人生；下篇主要是帮助读者管理自己的情绪，分别从认知自己的角色效应、应对社交焦虑、亲密关系相处、职场工作等方面进行具体的讲解，从而帮助读者挣脱内耗的枷锁，提高自我价值，重获自在的生活。',
                centPrice: 4980,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 14452025,
                publishTime: '2024-04-01 00:00:00',
                category: '心理-积极心理学',
                categories: [
                  {
                    categoryId: 800000,
                    subCategoryId: 800001,
                    categoryType: 0,
                    title: '心理-积极心理学'
                  },
                  {
                    categoryId: 1000000,
                    subCategoryId: 1000003,
                    categoryType: 0,
                    title: '个人成长-情绪心灵'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 14,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 579,
                newRatingCount: 66,
                newRatingDetail: {
                  good: 29,
                  fair: 25,
                  poor: 12,
                  recent: 62,
                  title: ''
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 12,
              readingCount: 386,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '918542',
                title: '每个人的战争：抵御癌症的有效生活方式',
                author: '大卫·赛尔旺-施莱伯',
                translator: '张俊',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F71\u002FYueWen_918542\u002Fs_YueWen_918542.jpg',
                version: 1298580383,
                format: 'epub',
                type: 0,
                price: 56,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '精英医师罹癌18年，坦诚分享前沿研究成果、为医为患的双重经验——作者大卫·赛尔旺-施莱伯博士既是癌症患者，更是一位有优异科研背景和深厚人文关怀的医生。该书综合前沿科研成果、18年抗癌经验，是一本有充分科学研究支撑的防癌抗癌指南；兼具饱含哲思的个人回忆，与身为精神科医生为癌症患者提供心理关怀的经历，又是一本为癌友点燃信心和斗志、提供安慰和纾解的陪伴之书。并非每个人都会患癌，但癌细胞存在于每个人体内。抵御癌症，需要我们改善生活方式，在日常的饮食、锻炼、情绪与环境中有所行动；需要我们彼此关怀，为癌友提供支持与慰藉。预防和抵御癌症，是每个人的战争。',
                centPrice: 5600,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 25523719,
                publishTime: '2017-09-01 00:00:00',
                category: '医学健康-健康',
                categories: [
                  {
                    categoryId: 2100000,
                    subCategoryId: 2100001,
                    categoryType: 0,
                    title: '医学健康-健康'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 143,
                paperBook: {
                  skuId: '12244874'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 865,
                newRatingCount: 1845,
                newRatingDetail: {
                  good: 1601,
                  fair: 220,
                  poor: 24,
                  recent: 16,
                  title: '好评如潮'
                }
              },
              ratingCount: 398,
              star: 89,
              searchIdx: 13,
              readingCount: 407,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '818910',
                title: '彷徨之刃',
                author: '东野圭吾',
                translator: '刘珮瑄',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F33\u002FYueWen_818910\u002Fs_YueWen_818910.jpg',
                version: 192333847,
                format: 'epub',
                type: 0,
                price: 35.4,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '烟火大会那晚，长峰十五岁的女儿在路上被人掳走，并抛尸河中。长峰悲痛不已，女儿离家时穿着夏季和服、欢天喜地的样子，还清晰地浮现在眼前。\n案件尚未侦破，长峰收到一则匿名留言，对方似乎对真相了如指掌，并留下一个地址。长峰将信将疑，潜入那间公寓。他发现了一卷录像带，标签上写着“8月烟火夏季和服”。\n颤抖着关掉录像后，长峰给警方寄去一封信：“不管发生什么事，我都要复仇。复仇完，我会立刻去自首。”',
                centPrice: 3540,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 24367662,
                publishTime: '2021-08-01 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 52,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [53],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 764,
                newRatingCount: 18082,
                newRatingDetail: {
                  good: 13834,
                  fair: 4090,
                  poor: 158,
                  recent: 428,
                  title: '值得一读'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 14,
              readingCount: 1176,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '35992971',
                title: '我的前半生（全本）',
                author: '爱新觉罗·溥仪',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F15\u002FYueWen_35992971\u002Fs_YueWen_35992971.jpg',
                version: 1966535182,
                format: 'epub',
                type: 0,
                price: 98,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '他名为皇帝，却无家无国；他坐拥九重宫苑，但这宫苑并不属于他；他有自己的新娘，却没有自己的家。他是爱新觉罗·溥仪，中国最后一个皇帝。从登上帝位的那一天起，他的人生注定与众不同。由帝王沦为傀儡，由战犯转为平民，他的一生沧桑巨变，历经荣辱浮沉。帝国黄昏，满宫残照，斯人已去，一切尽归平淡。翻开本书，让我们走进末代皇帝的内心世界，感受时代洪流下个人的命运浮沉。',
                centPrice: 9800,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2021-01-22 00:00:00',
                category: '历史-中国古代',
                categories: [
                  {
                    categoryId: 200000,
                    subCategoryId: 200007,
                    categoryType: 0,
                    title: '历史-中国古代'
                  },
                  {
                    categoryId: 500000,
                    subCategoryId: 500002,
                    categoryType: 0,
                    title: '人物传记-传记综合'
                  },
                  {
                    categoryId: 500000,
                    subCategoryId: 500003,
                    categoryType: 0,
                    title: '人物传记-军政领袖'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 86,
                paperBook: {
                  skuId: '13163615'
                },
                copyrightChapterUids: [87],
                blockSaveImg: 0,
                language: 'zh-CN',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 813,
                newRatingCount: 2019,
                newRatingDetail: {
                  good: 1655,
                  fair: 300,
                  poor: 64,
                  recent: 43,
                  title: '脍炙人口'
                }
              },
              ratingCount: 1240,
              star: 85,
              searchIdx: 15,
              readingCount: 897,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '30599279',
                title: '逃离',
                author: '艾丽丝·门罗',
                translator: '李文俊',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F48\u002FYueWen_30599279\u002Fs_YueWen_30599279.jpg',
                version: 2460345,
                format: 'epub',
                type: 0,
                price: 29.99,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '《逃离》讲述爱的力量和无止境的背叛，讲述琐碎生活中的不安分、错过的机会，讲述一次又一次的逃离，以及人们为此付出的代价。门罗关注日常生活，善于捕捉人与人之间复杂而微妙的关系。不同年龄、不同境况中的人，在门罗朴实克制的文笔下生动鲜活，似可触摸。\n每个人总会遇到什么事，什么人，让你觉得像肺里什么地方扎进去了一根致命的针，浅一些呼吸时可能不感到疼。可是每当需要深深吸进去一口气时，便能觉出那根针一直存在。',
                centPrice: 2999,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 1,
                cpid: 24367662,
                publishTime: '2016-10-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 15,
                paperBook: {
                  skuId: '12036280'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 849,
                newRatingCount: 663,
                newRatingDetail: {
                  good: 572,
                  fair: 72,
                  poor: 19,
                  recent: 75,
                  title: '脍炙人口'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 16,
              readingCount: 1029,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '34618597',
                title: '哈佛经典谈判术：你一开口就赢麻了',
                author: '迪帕克·马尔霍特拉 马克斯·巴泽曼',
                translator: '王崇巍',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F597\u002F34618597\u002Fs_34618597.jpg',
                version: 174872791,
                format: 'epub',
                type: 0,
                price: 74.61,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '只要会谈判，你几乎可以在职场搞钱、家庭关系、商场买货中无往不利～\n那怎么做呢?有没有哪些小技巧是我们可以无缝嫁接？\n我们把它分为4步，不会谈判的你来学～\n 评估\n 不要被”锚”牵着走\n 不要害怕沉默\n 人性义务的力量\n很多时后,我们会觉得这些东西不重要,但仔细想想他几乎可以映射到生活中每个角落。\n别忘记，生活本身就是一场博弈～',
                centPrice: 7461,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 17831528,
                publishTime: '2020-11-01 00:00:00',
                category: '社会文化-社科',
                categories: [
                  {
                    categoryId: 900000,
                    subCategoryId: 900002,
                    categoryType: 0,
                    title: '社会文化-社科'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 112,
                paperBook: {
                  skuId: '13011810'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 902,
                newRatingCount: 1017,
                newRatingDetail: {
                  good: 949,
                  fair: 53,
                  poor: 15,
                  recent: 98,
                  title: '神作'
                }
              },
              ratingCount: 73,
              star: 84,
              searchIdx: 17,
              readingCount: 1560,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300048239',
                title: '布鲁克林有棵树',
                author: '[美]贝蒂·史密斯',
                translator: '冯瑞贞',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F80\u002Fcpplatform_9ntjveherratctybwfyzj7\u002Fs_cpplatform_9ntjveherratctybwfyzj71676016817.jpg',
                version: 407484330,
                format: 'epub',
                type: 0,
                price: 40,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '不一定非得一贫如洗，才能领会这个故事\n穷孩子的成长没有花哨技术。11岁的小女孩弗兰茜出生在纽约的穷人区布鲁克林，她每天最紧要的事情就是带着弟弟捡破烂，以赚取一些微薄的收入，帮助父母减轻家里的负担。即使条件艰苦，爸爸妈妈仍然坚持让孩子们接受教育，希望将来脱离底层。即使生活坎坷，弗兰茜一家却如天堂树般坚韧，始终保持尊严。无论多么贫穷，他们都生机勃勃。\n贝蒂·史密斯自传式的《布鲁克林有棵树》，感动了千千万万的读者。许多人都把她当成是书中主角的化身，称她为亲爱的弗兰茜，更告诉她，感谢她让他们知道，无论如何，人都可以活得有尊严、活得灿烂，活得更加充实。',
                centPrice: 4000,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -3203053,
                publishTime: '2023-02-01 00:00:00',
                category: '精品小说-青春文学',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100003,
                    categoryType: 0,
                    title: '精品小说-青春文学'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 15,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [11],
                blockSaveImg: 0,
                language: 'zh-wr',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 897,
                newRatingCount: 6384,
                newRatingDetail: {
                  good: 5984,
                  fair: 300,
                  poor: 100,
                  recent: 757,
                  title: '好评如潮'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 18,
              readingCount: 2506,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '3300028288',
                title: '羊道·春牧场',
                author: '李娟',
                cover:
                  'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F3\u002FcpPlatform_oQi273wNTzsywRKxb9gQXA\u002Fs_cpPlatform_oQi273wNTzsywRKxb9gQXA.jpg',
                version: 1979719689,
                format: 'epub',
                type: 0,
                price: 26.9,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 1048577,
                intro:
                  '“这是世界最后一支真正意义上的游牧民族。甘愿沉寂在世界上最遥远的角落，逐水草而居。从南面的荒野沙漠到北方的森林草原，绵延千里的跋涉。一年365天，几乎得不到片刻停歇……”\r\n非虚构长篇散文。作者李娟跟随哈萨克族扎克拜妈妈一家，历经寒暑，在新疆最北部粗犷、苍茫的阿勒泰山区游牧、转场、迁徙生活的日子。此为《羊道》三部曲之第一部。',
                centPrice: 2690,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: 3343067,
                publishTime: '2022-09-01 00:00:00',
                category: '文学-经典作品',
                categories: [
                  {
                    categoryId: 300000,
                    subCategoryId: 300004,
                    categoryType: 0,
                    title: '文学-经典作品'
                  }
                ],
                hasLecture: 0,
                lastChapterIdx: 28,
                paperBook: {
                  skuId: '13321633'
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 924,
                newRatingCount: 1718,
                newRatingDetail: {
                  good: 1638,
                  fair: 75,
                  poor: 5,
                  recent: 158,
                  title: '神作'
                }
              },
              ratingCount: 0,
              star: 0,
              searchIdx: 19,
              readingCount: 528,
              riseCount: 0,
              bestMark: ''
            },
            {
              bookInfo: {
                bookId: '35905913',
                title: '最后一个道士（全七册）',
                author: '夏忆',
                cover:
                  'https:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F913\u002F35905913\u002Fs_35905913.jpg',
                version: 1741938457,
                format: 'epub',
                type: 0,
                price: 139.93,
                originalPrice: 0,
                soldout: 0,
                bookStatus: 1,
                payType: 4097,
                intro:
                  '它讲述了中国“茅山派”最后一位掌门人查文斌救人于阴阳之间，却引业火烧身，遭天罚阴遣的传奇经历。关于道教法术，其实很多人已经早有耳闻，尤其是曾经香港的一些影片中，经常会出现道士与僵尸较量的场面，但那毕竟是影视作品的艺术描写。但真正的道士究竟怎样的？《最后一个道士》告诉了我们答案。作者夏忆将中国传统的道家思想融入其中，不仅讲述了精彩的故事，还为读者普及了中国传统的国学文化。是一部难得的作品。',
                centPrice: 13993,
                finished: 1,
                free: 0,
                mcardDiscount: 0,
                ispub: 1,
                extra_type: 5,
                cpid: -60041,
                publishTime: '2021-01-01 00:00:00',
                category: '精品小说-悬疑推理',
                categories: [
                  {
                    categoryId: 100000,
                    subCategoryId: 100008,
                    categoryType: 0,
                    title: '精品小说-悬疑推理'
                  }
                ],
                hasLecture: 1,
                lastChapterIdx: 315,
                paperBook: {
                  skuId: ''
                },
                copyrightChapterUids: [2],
                blockSaveImg: 0,
                language: 'zh',
                hideUpdateTime: false,
                isEPUBComics: 0,
                webBookControl: 0,
                newRating: 718,
                newRatingCount: 1513,
                newRatingDetail: {
                  good: 1101,
                  fair: 244,
                  poor: 168,
                  recent: 137,
                  title: '值得一读'
                }
              },
              ratingCount: 319,
              star: 84,
              searchIdx: 20,
              readingCount: 2382,
              riseCount: 0,
              bestMark: ''
            }
          ],
          showAll: 0
        }
      ],
      otherTopCategories: [],
      allUnsupportSublistCategories: [
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002Fcpplatform_7eqrreg97tkvjleahhzspm\u002Fs_cpplatform_7eqrreg97tkvjleahhzspm1683690681.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F90\u002F3300013190\u002Fs_3300013190.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_39111055\u002Fs_YueWen_39111055.jpg'
          ],
          bookTitles: [
            '半小时漫画史记（全5册）',
            '半小时漫画大套装（套装共16册）',
            '半小时漫画历史系列（共7册）（中国史1-5+世界史1-2）'
          ],
          CategoryId: '2400001',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '2400000',
          parentCategoryTitle: '漫画',
          title: '经典改编',
          recommend: '0',
          totalCount: 1036,
          sublist: []
        },
        {
          covers: [
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002Fcpplatform_7eqrreg97tkvjleahhzspm\u002Fs_cpplatform_7eqrreg97tkvjleahhzspm1683690681.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F90\u002F3300013190\u002Fs_3300013190.jpg',
            'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_39111055\u002Fs_YueWen_39111055.jpg'
          ],
          bookTitles: [
            '半小时漫画史记（全5册）',
            '半小时漫画大套装（套装共16册）',
            '半小时漫画历史系列（共7册）（中国史1-5+世界史1-2）'
          ],
          CategoryId: '2400000',
          rank: 0,
          type: 0,
          categoryType: 0,
          parentCategoryId: '0',
          parentCategoryTitle: '漫画',
          title: '漫画',
          recommend: '0',
          totalCount: 1036,
          showAll: 1,
          authorType: 0,
          uiType: 0,
          showIcon: 1,
          sublist: [
            {
              covers: [
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F75\u002Fcpplatform_7eqrreg97tkvjleahhzspm\u002Fs_cpplatform_7eqrreg97tkvjleahhzspm1683690681.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F90\u002F3300013190\u002Fs_3300013190.jpg',
                'https:\u002F\u002Fcdn.weread.qq.com\u002Fweread\u002Fcover\u002F53\u002FYueWen_39111055\u002Fs_YueWen_39111055.jpg'
              ],
              bookTitles: [
                '半小时漫画史记（全5册）',
                '半小时漫画大套装（套装共16册）',
                '半小时漫画历史系列（共7册）（中国史1-5+世界史1-2）'
              ],
              CategoryId: '2400001',
              rank: 0,
              type: 0,
              categoryType: 0,
              parentCategoryId: '2400000',
              parentCategoryTitle: '漫画',
              title: '经典改编',
              recommend: '0',
              totalCount: 1036,
              sublist: []
            }
          ]
        },
        {
          CategoryId: '6102',
          title: '科技前沿',
          type: 1
        },
        {
          CategoryId: '6103',
          title: '小说赏读',
          type: 1
        },
        {
          CategoryId: '6104',
          title: '亲子教育',
          type: 1
        },
        {
          CategoryId: '6105',
          title: '成功励志',
          type: 1
        },
        {
          CategoryId: '6106',
          title: '历史传记',
          type: 1
        },
        {
          CategoryId: '6107',
          title: '商业经典',
          type: 1
        },
        {
          CategoryId: '6108',
          title: '热门外版',
          type: 1
        },
        {
          CategoryId: '6100',
          rank: 1,
          type: 1,
          title: '签约讲书榜',
          recommend: '0',
          covers: [
            'http:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F22\u002F24053022\u002Fs_24053022.jpg',
            'http:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F575\u002F23506575\u002Fs_23506575.jpg',
            'http:\u002F\u002Fwfqqreader-1252317822.image.myqcloud.com\u002Fcover\u002F304\u002F25470304\u002Fs_25470304.jpg'
          ],
          bookTitles: ['《腾讯人力资源管理》001', '天宇传记210', '【001】绑架'],
          sublist: [
            {
              CategoryId: '6102',
              title: '科技前沿',
              type: 1
            },
            {
              CategoryId: '6103',
              title: '小说赏读',
              type: 1
            },
            {
              CategoryId: '6104',
              title: '亲子教育',
              type: 1
            },
            {
              CategoryId: '6105',
              title: '成功励志',
              type: 1
            },
            {
              CategoryId: '6106',
              title: '历史传记',
              type: 1
            },
            {
              CategoryId: '6107',
              title: '商业经典',
              type: 1
            },
            {
              CategoryId: '6108',
              title: '热门外版',
              type: 1
            }
          ],
          totalCount: 500,
          showAll: 1
        },
        {
          CategoryId: '6200',
          rank: 1,
          type: 1,
          title: '有声小说榜',
          recommend: '0',
          uiType: '0',
          authorType: '0',
          showIcon: '1',
          covers: [],
          bookTitles: ['斗罗大陆II绝世唐门', '天使的信仰', '红楼梦'],
          sublist: [],
          totalCount: 0,
          showAll: 1
        }
      ],
      recommendBooks: [],
      isFetchRecommendBooks: false,
      bookInShelfData: [],
      needFallBack: false
    }
  }
})
