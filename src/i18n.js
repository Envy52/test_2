import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    lng: "tr",
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage"],
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        translation: {
          slogan: "Чистая вода для всех",
          nav: {
            about: "О компании",
            shop: "Aquabox Shop",
            career: "Карьера",
            product: "Продукт",
            blog: "Блог",
          },
          footer: {
            navTitle: "Навигация",
            contact: "Контакты",
            rights: "© 2025 AQUABOX. Все права защищены.",
          },
          hero: {
            badge: "Свежесть Тянь-Шаня рядом с домом",
            title: {
              line1: "Первый в Узбекистане",
              line2: "производитель аппаратов",
              line3: "по очистке воды",
            },
            subtitle: "Низкий порог входа в бизнес по продаже воды",
            button: "Узнать больше",
          },
          info: {
            title: "Компания Aquabox на рынке Узбекистана с 2017 года.",
            description:
              "С нашей компанией многие люди по всему Узбекистану начали свой прибыльный бизнес по продаже воды. Начните зарабатывать вместе с нами!",
          },
          features: {
            title: "Почему выбирают Aquabox",
            description:
              "Факты и цифры, которые доказывают эффективность бизнеса с Aquabox.",
            marketFree: "Свободный рынок",
            lowEntry: "Низкий порог входа",
            works247: "Работает 24/7 без выходных",
            yearlyIncome: "Доход в год",
            avgMonthlyIncome: "Средний месячный доход",
            profit10Machines: "Прибыль от 10 аппаратов",
            minContribution: "100% возврат вложений",
            creditInstallment: "Рассрочка под 0%",
            creditSubtitle: "Выгодные условия финансирования",
            learnMore: "Узнать подробнее",
          },
          reliability: {
            title: "Обеспечиваем",
            highlight: "надежность",
            feature1:
              "Надежная сборка аппарата: за 7 лет работы ни один аппарат не прекратил работу.",
            feature2:
              "Аппарат собран из проверенных материалов. Все запчасти легко заменяемы.",
            feature3: "Мы предоставляем гарантию 1 год на каждый аппарат.",
            imageAlt: "Надежная сборка аппарата Aquabox",
          },
          howToStart: {
            title: "Как начать бизнес с нами",
            step1: "Получите консультацию",
            step2: "Заключите договор",
            step3: "Купите аппарат",
            step4: "Установите аппарат",
            step5: "Получайте прибыль",
            imageAlt: "Надежная сборка аппарата Aquabox",
          },
          support: {
            title1: "Постоянное",
            title2: "сопровождение бизнеса",
            text1: "Мы будем постоянно следить за",
            highlight1: "качеством воды",
            text1_cont:
              "в ваших аппаратах, а также своевременно производить замену фильтров и техническое обслуживание.",
            text2: "Наш сервис позволит поддерживать аппараты в",
            highlight2: "идеальном состоянии",
            text2_cont: "на долгие годы.",
          },
          waterQuality: {
            title1: "Качество",
            title2: "воды",
            text1: "Аппарат оснащен",
            highlight1: "лучшими фильтрами",
            text1_cont:
              "для очистки воды. Мы обеспечиваем качество воды для ваших покупателей.",
            text2: "Всегда свежая вода, прошедшая",
            highlight2: "8 ступеней очистки",
          },
          contact: {
            title: "У вас остались вопросы?",
            subtitle: "Закажите бесплатную консультацию",
            selectCategory: "Выберите категорию:",
            forClients: "Для клиентов",
            forPartners: "Для партнёров",
            name: "Имя",
            namePlaceholder: "Ваше имя",
            city: "Город",
            cityPlaceholder: "Ташкент",
            cityDefault: "Ташкент",
            phone: "Номер",
            phonePlaceholder: "XX XXX XX XX",
            comment: "Комментарий",
            commentPlaceholder: "Введите ваш комментарий",
            sendButton: "Отправить",
            successMessage: "Ваше сообщение успешно отправлено ✅",
          },
          serviceProducts: {
            title: "Товары для обслуживания",
            link: "Смотреть все →",
            productName: "Aquabox-2024",
            description:
              "Умный вендинговый аппарат для воды — автоматизированное устройство, позволяющее быстро наливать воду, оплачивая через популярные платёжные системы. Подключён к интернету, поддерживает мониторинг, учёт транзакций и удалённое управление. Идеально для дворов, бизнес-центров и жилых районов.",
            button: "Заказать аппарат",
          },
          articles: {
            sectionTitle: "Полезные статьи",
            viewAll: "Смотреть все",
            items: [
              {
                date: "29.02.2025",
                title: "О пользе воды в автомате Aquabox",
                excerpt:
                  "Вода из автомата Aquabox - это источник чистоты и свежести, который помогает поддерживать здоровый образ жизни. Благодаря специальной фильтрации и очистке, вода из автомата Aquabox обогащена полезными минералами и идеально подходит для употребления каждый день.",
                link: "#",
              },
            ],
          },
          products: {
            rs27: {
              title: "Водомат RS-27",
              year: "2025 год",
              description:
                "Аппарат по очистке и продаже питьевой воды. Состоит из модуля розлива и системы очистки в антивандальном корпусе.",
            },
            rs28: {
              title: "Водомат RS-28",
              year: "2025 год",
              description:
                "Компактный аппарат для продажи воды с закрытой системой очистки.",
            },
            buttonDetails: "Подробнее",
          },
          serviceProducts: {
            heading: "Товары для обслуживания",
            button: "Заказать аппарат",
            product: {
              title: "Aquabox-2024",
              description:
                "Умный вендинговый аппарат для воды — автоматизированное устройство, позволяющее быстро наливать воду, оплачивая через популярные платёжные системы. Подключён к интернету, поддерживает мониторинг, учёт транзакций и удалённое управление. Идеально для дворов, бизнес-центров и жилых районов.",
            },
            viewAll: "Смотреть все →",
          },
          productPage: {
            label: "ПРОДУКТ",
            heading: "Аппараты Aquabox – надежная инвестиция",
            subheading:
              "Наши устройства обеспечивают недорогой и стабильный доступ к чистой питьевой воде для всех.",
            features: {
              heading: "Что мы предлагаем?",
              feature1: {
                title: "Системы очистки",
                description:
                  "Аппараты с использованием классических и инновационных систем очистки воды.",
              },
              feature2: {
                title: "Гарантия и надежность",
                description:
                  "Мы предоставляем полную гарантию качества на все наши аппараты и комплектующие.",
              },
              feature3: {
                title: "Техническая поддержка",
                description:
                  "Оперативная помощь и консультации по любым вопросам эксплуатации оборудования.",
              },
              feature4: {
                title: "Индивидуальный подход",
                description:
                  "Мы подбираем решение, идеально соответствующее потребностям каждого клиента.",
              },
            },
          },
        },
      },
      en: {
        translation: {
          slogan: "Clean water for everyone",
          nav: {
            about: "About",
            shop: "Aquabox Shop",
            career: "Career",
            product: "Product",
            blog: "Blog",
          },
          footer: {
            navTitle: "Navigation",
            contact: "Contact",
            rights: "© 2025 AQUABOX. All rights reserved.",
          },
          hero: {
            badge: "Freshness of Tian Shan near your home",
            title: {
              line1: "The first in Uzbekistan",
              line2: "manufacturer of machines",
              line3: "for water purification",
            },
            subtitle: "Low entry threshold into water vending business",
            button: "Learn more",
          },
          info: {
            title: "Aquabox has been on the Uzbekistan market since 2017.",
            description:
              "With our company, many people across Uzbekistan have started their profitable water vending business. Start earning with us!",
          },
          features: {
            title: "Why choose Aquabox",
            description:
              "Facts and figures proving the effectiveness of the Aquabox business.",
            marketFree: "90% market still free",
            lowEntry: "Low entry threshold",
            works247: "Works 24/7 non-stop",
            yearlyIncome: "Profitability per year",
            avgMonthlyIncome: "Average monthly income",
            profit10Machines: "Profit from 10 machines",
            minContribution: "100% return on investment",
            creditInstallment: "Installment at 0%",
            creditSubtitle: "Favorable financing conditions",
            learnMore: "Learn more",
          },
          reliability: {
            title: "Ensuring",
            highlight: "reliability",
            feature1:
              "Reliable assembly: in 7 years of operation, not a single machine has stopped working.",
            feature2:
              "The machine is made of proven materials. All parts are easily replaceable.",
            feature3: "We provide a 1-year warranty for each machine.",
            imageAlt: "Reliable assembly of Aquabox machine",
          },

          howToStart: {
            title: "How to Start a Business with Us",
            step1: "Get a consultation",
            step2: "Sign the contract",
            step3: "Purchase the machine",
            step4: "Install the machine",
            step5: "Start earning profits",
            imageAlt: "Reliable assembly of Aquabox machine",
          },
          support: {
            title1: "Continuous",
            title2: "business support",
            text1: "We will constantly monitor the",
            highlight1: "water quality",
            text1_cont:
              "in your machines, as well as promptly replace filters and provide maintenance.",
            text2: "Our service will help keep your machines in",
            highlight2: "perfect condition",
            text2_cont: "for many years.",
          },
          waterQuality: {
            title1: "Water",
            title2: "Quality",
            text1: "The machine is equipped with",
            highlight1: "the best filters",
            text1_cont:
              "for water purification. We ensure high-quality water for your customers.",
            text2: "Always fresh water that has gone through",
            highlight2: "8 stages of purification",
          },
          contact: {
            title: "Have any questions?",
            subtitle: "Request a free consultation",
            selectCategory: "Choose a category:",
            forClients: "For clients",
            forPartners: "For partners",
            name: "Name",
            namePlaceholder: "Your name",
            city: "City",
            cityPlaceholder: "Tashkent",
            cityDefault: "Tashkent",
            phone: "Phone",
            phonePlaceholder: "XX XXX XX XX",
            comment: "Comment",
            commentPlaceholder: "Enter your comment",
            sendButton: "Send",
            successMessage: "Your message has been sent successfully ✅",
          },
          serviceProducts: {
            title: "Service Products",
            link: "View all →",
            productName: "Aquabox-2024",
            description:
              "Smart water vending machine — an automated device that allows quick dispensing of water, paying through popular payment systems. Connected to the internet, supports monitoring, transaction tracking, and remote management. Ideal for yards, business centers, and residential areas.",
            button: "Order Machine",
          },
          articles: {
            sectionTitle: "Helpful Articles",
            viewAll: "View All",
            items: [
              {
                date: "29.02.2025",
                title: "Benefits of Water from Aquabox Machine",
                excerpt:
                  "Water from the Aquabox machine is a source of purity and freshness, helping maintain a healthy lifestyle. Thanks to special filtration and purification, Aquabox water is enriched with beneficial minerals and is perfect for daily consumption.",
                link: "#",
              },
            ],
          },
          products: {
            rs27: {
              title: "Water Dispenser RS-27",
              year: "Year 2025",
              description:
                "Water dispensing and purification device in a vandal-proof case.",
            },
            rs28: {
              title: "Water Dispenser RS-28",
              year: "Year 2025",
              description:
                "Compact water vending machine with a closed purification system.",
            },
            buttonDetails: "Details",
          },
          productPage: {
            label: "PRODUCT",
            heading: "Aquabox Machines – A Reliable Investment",
            subheading:
              "Our devices provide affordable and stable access to clean drinking water for everyone.",
            features: {
              heading: "What We Offer",
              feature1: {
                title: "Filtration Systems",
                description:
                  "Machines using classical and innovative water filtration systems.",
              },
              feature2: {
                title: "Warranty & Reliability",
                description:
                  "We provide full quality warranty on all our machines and components.",
              },
              feature3: {
                title: "Technical Support",
                description:
                  "Prompt assistance and consultations on any operational issues.",
              },
              feature4: {
                title: "Personalized Approach",
                description:
                  "We select solutions perfectly suited to each client's needs.",
              },
            },
          },
        },
      },
      uz: {
        translation: {
          slogan: "Hamma uchun toza suv",
          nav: {
            about: "Kompaniya haqida",
            shop: "Aquabox Do‘koni",
            career: "Karyera",
            product: "Mahsulot",
            blog: "Blog",
          },
          footer: {
            navTitle: "Navigatsiya",
            contact: "Aloqa",
            rights: "© 2025 AQUABOX. Barcha huquqlar himoyalangan.",
          },
          hero: {
            badge: "Uy yonida Tyanshanning salqinligi",
            title: {
              line1: "O‘zbekistondagi birinchi",
              line2: "suv tozalash apparatlari",
              line3: "ishlab chiqaruvchisi",
            },
            subtitle: "Suv biznesiga kirishning past darajasi",
            button: "Ko‘proq bilish",
          },
          info: {
            title:
              "Aquabox kompaniyasi 2017-yildan beri Oʻzbekistonda faoliyat yuritmoqda.",
            description:
              "Bizning kompaniyamiz yordamida butun Oʻzbekistonda koʻplab odamlar suv savdosi bo‘yicha o‘z foydali biznesini boshladi. Siz ham biz bilan birga daromad qiling!",
          },
          features: {
            title: "Nega Aquaboxni tanlashadi",
            description:
              "Aquabox biznesining samaradorligini isbotlovchi faktlar va raqamlar.",
            marketFree: "Bozorning hali bo‘sh",
            lowEntry: "Kirish darajasi past",
            works247: "24/7 uzluksiz ishlaydi",
            yearlyIncome: "Yiliga foyda",
            avgMonthlyIncome: "O‘rtacha oylik daromad",
            profit10Machines: "10 ta apparatdan foyda",
            minContribution: "100% investitsiya qaytishi",
            creditInstallment: "0% kredit bo‘lib to‘lash",
            creditSubtitle: "Qulay moliyalashtirish shartlari",
            learnMore: "Batafsil bilish",
          },
          reliability: {
            title: "Ta’minlaymiz",
            highlight: "ishonchlilik",
            feature1:
              "Ishonchli yig‘ilish: 7 yil davomida birorta apparat ishlashni to‘xtatmadi.",
            feature2:
              "Apparat ishonchli materiallardan yig‘ilgan. Barcha qismlar oson almashtiriladi.",
            feature3: "Har bir apparat uchun 1 yillik kafolat beramiz.",
            imageAlt: "Aquabox apparatining ishonchli yig‘ilishi",
          },
          howToStart: {
            title: "Biz bilan biznesni qanday boshlash mumkin",
            step1: "Maslahat oling",
            step2: "Shartnoma tuzing",
            step3: "Apparat sotib oling",
            step4: "Apparatni o‘rnating",
            step5: "Daromad oling",
            imageAlt: "Aquabox apparatining ishonchli yig‘ilishi",
          },
          support: {
            title1: "Doimiy",
            title2: "biznes qo‘llab-quvvatlashi",
            text1: "Biz doimiy ravishda",
            highlight1: "suv sifati",
            text1_cont:
              "ni kuzatib boramiz, filtrlarni o‘z vaqtida almashtiramiz va texnik xizmat ko‘rsatamiz.",
            text2: "Bizning servisimiz apparatlaringizni",
            highlight2: "mukammal holatda",
            text2_cont: "yillar davomida saqlab qolishga yordam beradi.",
          },
          waterQuality: {
            title1: "Suv",
            title2: "sifati",
            text1: "Apparat",
            highlight1: "eng yaxshi filtrlari",
            text1_cont:
              "bilan jihozlangan. Biz xaridorlaringiz uchun suv sifatini taʼminlaymiz.",
            text2: "Har doim toza suv, u",
            highlight2: "8 bosqichli tozalashdan o‘tadi",
          },
          contact: {
            title: "Savollaringiz bormi?",
            subtitle: "Bepul maslahat so'rang",
            selectCategory: "Kategoriya tanlang:",
            forClients: "Mijozlar uchun",
            forPartners: "Hamkorlar uchun",
            name: "Ism",
            namePlaceholder: "Ismingiz",
            city: "Shahar",
            cityPlaceholder: "Toshkent",
            cityDefault: "Toshkent",
            phone: "Telefon",
            phonePlaceholder: "XX XXX XX XX",
            comment: "Izoh",
            commentPlaceholder: "Izohingizni kiriting",
            sendButton: "Yuborish",
            successMessage: "Xabaringiz muvaffaqiyatli yuborildi ✅",
          },
          serviceProducts: {
            title: "Xizmat mahsulotlari",
            link: "Barchasini ko‘rish →",
            productName: "Aquabox-2024",
            description:
              "Aqlli suv vending apparati — tez suv quyingiz uchun avtomatlashtirilgan qurilma, mashhur to‘lov tizimlari orqali to‘lash imkoniyati bilan. Internetga ulangan, monitoring, tranzaksiyalarni hisoblash va masofadan boshqarishni qo‘llab-quvvatlaydi. Hovlilar, biznes markazlar va yashash hududlari uchun ideal.",
            button: "Apparatni buyurtma qilish",
          },
          articles: {
            sectionTitle: "Foydali maqolalar",
            viewAll: "Barchasini ko‘rish",
            items: [
              {
                date: "29.02.2025",
                title: "Aquabox avtomatidagi suvning foydalari",
                excerpt:
                  "Aquabox avtomatidagi suv tozalik va yangilik manbai bo‘lib, sog‘lom turmush tarzini saqlashga yordam beradi. Maxsus filtratsiya va tozalash tufayli Aquabox suvi foydali minerallar bilan boyitilgan va har kuni ichish uchun idealdir.",
                link: "#",
              },
            ],
          },
          productPage: {
            label: "MAHSULOT",
            heading: "Aquabox apparatlari – ishonchli sarmoya",
            subheading:
              "Bizning qurilmalarimiz hamma uchun arzon va barqaror toza ichimlik suviga kirishni ta’minlaydi.",
            features: {
              heading: "Nimani taklif qilamiz?",
              feature1: {
                title: "Tozalash tizimlari",
                description:
                  "Klassik va innovatsion suv tozalash tizimlari ishlatilgan apparatlar.",
              },
              feature2: {
                title: "Kafolat va ishonchlilik",
                description:
                  "Barcha apparatlar va komponentlarga to‘liq sifat kafolati beramiz.",
              },
              feature3: {
                title: "Texnik qo‘llab-quvvatlash",
                description:
                  "Uskunalarni ishlatishda barcha savollarga tezkor yordam va maslahatlar.",
              },
              feature4: {
                title: "Shaxsiy yondashuv",
                description:
                  "Har bir mijozning ehtiyojiga mos ideal yechimni tanlaymiz.",
              },
            },
          },
        },
      },
      tr: {
        translation: {
          slogan: "Herkes için temiz su",
          nav: {
            about: "Şirket Hakkında",
            shop: "Aquabox Mağazası",
            career: "Kariyer",
            product: "Ürün",
            blog: "Blog",
          },
          footer: {
            navTitle: "Navigasyon",
            contact: "İletişim",
            rights: "© 2025 AQUABOX. Tüm hakları saklıdır.",
          },
          hero: {
            badge: "Evinizin yanında Tanrı Dağları'nın ferahlığı",
            title: {
              line1: "Özbekistan'da ilk",
              line2: "su arıtma cihazı",
              line3: "üreticisi",
            },
            subtitle: "Su satış işine düşük giriş eşiği",
            button: "Daha fazla bilgi edin",
          },
          info: {
            title: "Aquabox, 2017'den beri Özbekistan pazarında.",
            description:
              "Şirketimizle birlikte, Özbekistan'ın dört bir yanındaki birçok insan karlı su satış işine başladı. Siz de bizimle kazanmaya başlayın!",
          },
          features: {
            title: "Neden Aquabox'u seçmelisiniz",
            description:
              "Aquabox işinin etkinliğini kanıtlayan gerçekler ve rakamlar.",
            marketFree: "pazar hala boş",
            lowEntry: "Düşük giriş eşiği — 41M UZS'den",
            works247: "24/7 kesintisiz çalışır",
            yearlyIncome: "Yıllık karlılık",
            avgMonthlyIncome: "Ortalama aylık gelir",
            profit10Machines: "10 makineden kâr",
            minContribution: "%100 yatırım getirisi",
            creditInstallment: "%0 taksitli kredi",
            creditSubtitle: "Avantajlı finansman koşulları",
            learnMore: "Daha fazla bilgi edin",
          },
          reliability: {
            title: "Sağlıyoruz",
            highlight: "güvenilirlik",
            feature1:
              "Güvenilir montaj: 7 yıllık kullanımda tek bir cihaz çalışmayı durdurmadı.",
            feature2:
              "Cihaz güvenilir malzemelerden üretilmiştir. Tüm parçalar kolayca değiştirilebilir.",
            feature3: "Her cihaz için 1 yıl garanti veriyoruz.",
            imageAlt: "Aquabox cihazının güvenilir montajı",
          },
          howToStart: {
            title: "Bizimle işinizi nasıl başlatabilirsiniz",
            step1: "Danışmanlık alın",
            step2: "Sözleşme imzalayın",
            step3: "Makine satın alın",
            step4: "Makineyi kurun",
            step5: "Kâr elde edin",
            imageAlt: "Aquabox makinesinin güvenilir montajı",
          },
          support: {
            title1: "Sürekli",
            title2: "iş desteği",
            text1: "Biz sürekli olarak",
            highlight1: "su kalitesini",
            text1_cont:
              "takip edeceğiz, filtreleri zamanında değiştirecek ve teknik bakım yapacağız.",
            text2: "Servisimiz makinelerinizi",
            highlight2: "mükemmel durumda",
            text2_cont: "uzun yıllar boyunca tutmanıza yardımcı olacaktır.",
          },
          waterQuality: {
            title1: "Su",
            title2: "kalitesi",
            text1: "Makine",
            highlight1: "en iyi filtrelerle",
            text1_cont:
              "donatılmıştır. Müşterileriniz için su kalitesini garanti ediyoruz.",
            text2: "Her zaman taze su,",
            highlight2: "8 aşamalı arıtma işleminden geçer",
          },
          contact: {
            title: "Sorularınız mı var?",
            subtitle: "Ücretsiz danışmanlık talep edin",
            selectCategory: "Kategori seçin:",
            forClients: "Müşteriler için",
            forPartners: "Ortaklar için",
            name: "İsim",
            namePlaceholder: "Adınız",
            city: "Şehir",
            cityPlaceholder: "Taşkent",
            cityDefault: "Tashkent",
            phone: "Telefon",
            phonePlaceholder: "XX XXX XX XX",
            comment: "Yorum",
            commentPlaceholder: "Yorumunuzu girin",
            sendButton: "Gönder",
            successMessage: "Mesajınız başarıyla gönderildi ✅",
          },
          serviceProducts: {
            title: "Servis Ürünleri",
            link: "Tümünü Gör →",
            productName: "Aquabox-2024",
            description:
              "Akıllı su satış makinesi — popüler ödeme sistemleri ile hızlı su dağıtımı sağlayan otomatik cihaz. İnternete bağlı, izleme, işlem takibi ve uzaktan yönetim destekler. Bahçeler, iş merkezleri ve yerleşim alanları için ideal.",
            button: "Cihazı Sipariş Et",
          },
          articles: {
            sectionTitle: "Faydalı Makaleler",
            viewAll: "Tümünü Gör",
            items: [
              {
                date: "29.02.2025",
                title: "Aquabox Makinesindeki Suyun Faydaları",
                excerpt:
                  "Aquabox makinesindeki su, temizlik ve tazelik kaynağıdır ve sağlıklı bir yaşam sürdürmeye yardımcı olur. Özel filtrasyon ve arıtma sayesinde Aquabox suyu faydalı minerallerle zenginleştirilmiş olup günlük tüketim için idealdir.",
                link: "#",
              },
            ],
          },
          products: {
            rs27: {
              title: "Su Dağıtıcı RS-27",
              year: "2025 yılı",
              description:
                "Su dağıtım ve arıtma cihazı. Vandal korumalı kasada dolum modülü ve arıtma sistemi içerir.",
            },
            rs28: {
              title: "Su Dağıtıcı RS-28",
              year: "2025 yılı",
              description:
                "Kapalı arıtma sistemine sahip kompakt su satış makinesi.",
            },
            buttonDetails: "Detaylar",
          },
          productPage: {
            label: "ÜRÜN",
            heading: "Aquabox makineleri – güvenilir yatırım",
            subheading:
              "Cihazlarımız, herkes için uygun fiyatlı ve istikrarlı temiz içme suyuna erişim sağlar.",
            features: {
              heading: "Neler sunuyoruz?",
              feature1: {
                title: "Arıtma sistemleri",
                description:
                  "Klasik ve yenilikçi su arıtma sistemleri kullanılan makineler.",
              },
              feature2: {
                title: "Garanti ve güvenilirlik",
                description:
                  "Tüm cihazlar ve bileşenler için tam kalite garantisi veriyoruz.",
              },
              feature3: {
                title: "Teknik destek",
                description:
                  "Cihazların kullanımıyla ilgili tüm sorulara hızlı yardım ve danışmanlık sağlıyoruz.",
              },
              feature4: {
                title: "Bireysel yaklaşım",
                description:
                  "Her müşterinin ihtiyaçlarına uygun ideal çözümü seçiyoruz.",
              },
            },
          },
        },
      },
    },
  });

export default i18n;
