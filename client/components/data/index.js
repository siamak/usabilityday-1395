const organizers = [
	{
		slug: 'chargoon',
		company: 'چارگون',
		website: 'http://chargoon.com/?utm_source=partners&utm_medium=sponsership&utm_term=event&utm_campaign=usabilityday',
		logo: require('../../assets/images/organizers/chargoon.png'),
	},
	{
		slug: 'uxiran',
		company: 'انجمن حرفه‌ای تجربه کاربری ایران',
		website: 'http://uxiran.com/?utm_source=partners&utm_medium=sponsership&utm_term=event&utm_campaign=usabilityday',
		logo: require('../../assets/images/organizers/uxiran.png'),
	},
];

const sponsors = [
	{
		company: 'سازمان نظام صنفی رایانه‌ای استان تهران',
		website: 'http://tehran.irannsr.org/',
		logo: require('../../assets/images/sponsors/irannsr.jpg'),
	},
	{
		company: 'سازمان فناوری اطلاعات ایران',
		website: 'http://ito.gov.ir/',
		logo: require('../../assets/images/sponsors/ict.jpg'),
	},
];

let speakers = [
	{
		slug_name: 'shervinmashayekh',
		real_name: 'شروین مشایخ',
		skill: 'طراح و مشاور دیجیتال',
		company: null,
		time: null,
		info: 'شروین طراح با سابقه‌ در زمینه رابط کاربری و تجربه کاربری است.او در طول مدت فعالیت حرفه ای خود، با شرکت‌های بزرگ و کوچک طراحی وب و هم چنین در آژانس‌های تبلیغاتی همکاری های متعددی داشته است. تمرکز شروین بیشتر متوجه حوزه های رابط کاربری، تجربه کاربری و مشاوره است.',
		social: {
			twitter: 'shervinmashayek',
			linkedin: 'https://ir.linkedin.com/in/shervinmashayekh'
		},
		avatar: require('../../assets/images/speakers/shervinmashayekh.png'),
	},
	{
		slug_name: 'parhamkhoshbakht',
		real_name: 'پرهام خوشبخت',
		skill: 'سرپرست تیم طراحى رابط کاربری',
		company: 'آپارات',
		time: null,
		info: 'از حدود ده سال پیش طراحی وب را شروع کردم و در شرکت‌های مختلف به عنوان طراح/توسعه دهنده رابط کاربری و  مدیر پروژه مشغول به کار بوده‌ام. علاقه شخصی‌ام به اجرای ایده‌های جدید و تحقیق در مورد تجارب کاربری و تمرکز بر طراحی تعاملی است که در حال حاضر به عنوان طراح تعاملی در مجموعه صبا ایده مشغول کار بر پروژه‌های آپارات، میهن‌بلاگ و فیلیمو هستم.',
		social: {
			twitter: 'parhumm',
			linkedin: 'https://ir.linkedin.com/in/parhum-khoshbakht-084a7036'
		},
		avatar: require('../../assets/images/speakers/parhamkhoshbakht.png'),
	},
	{
		slug_name: 'tinanabizadeh',
		real_name: 'تینا نبی زاده',
		skill: 'طراح تجربه کاربری / رابط کاربری',
		company: 'داتین (فناپ)',
		time: null,
		info: 'وی از سال 1388 در حوزه فناوری اطلاعات فعالیت خود را آغاز کرده و هم‌اکنون با سمت UX/UI Designer  در شرکت داتین مشغول به کار است. خانم نبی زاده به عنوان پژوهشگر مباحث کاربردپذیری و طراحی معماری اطلاعات و همچنین در حوزه اسکرام  نیز فعال است.',
		social: {
			twitter: 'tina_nbz',
			linkedin: 'https://ir.linkedin.com/in/tinanabizadeh'
		},
		avatar: require('../../assets/images/speakers/tinanabizadeh.png'),
	},
	{
		slug_name: 'alisadattalab',
		real_name: 'علی سادات طلب',
		skill: 'طراح تجربه کاربری',
		company: 'آدران',
		time: null,
		info: 'او که مربی طراحی واسط کاربری در اولین استارتاپ ویکند تهران نیز بوده، هم‌اکنون به عنوان مدیر تجربه کاربری آدران مشغول بکار است. وی طراحی اپلیکیشن‌ها و وب‌سایت‌ها و بازی‌های آنلاین در شرکت‌های بزرگی را در کارنامه دارد.',
		social: {
			twitter: 'xbox3000',
			linkedin: 'https://ir.linkedin.com/in/xbox3000/',
		},
		avatar: require('../../assets/images/speakers/alisadattalab.png'),
	},
	{
		slug_name: 'saeedghayoumi',
		real_name: 'سعید قیومی',
		skill: 'UX Manager',
		company: 'داتین (فناپ)',
		time: null,
		info: 'او از سال ۱۳۸۷ فعالیت خود را در زمینه طراحی پرتال‌های خدمات الکترونیک آغاز کرد و اکنون در حوزه طراحی استراتژی ، طراحی گرافیکی و طراحی وب‌سایت صاحب مهارت و تجربه است. وی با سمت UX Manager  در حوزه بانکداری الکترونیک مشغول بکار است.',
		// info: 'او از سال ۱۳۸۷ فعالیت خود را در زمینه طراحی پرتال‌های خدمات الکترونیک آغاز کرد و اکنون در حوزه طراحی استراتژی ، طراحی گرافیکی و طراحی وب‌سایت صاحب مهارت و تجربه است .و هم‌اکنون با سمت UX Manager  در حوزه بانکداری الکترونیک مشغول بکار است.',
		social: {
			twitter: 'parsahoo',
			linkedin: 'https://ir.linkedin.com/in/saeed-ghayoomi-55910880'
		},
		avatar: require('../../assets/images/speakers/saeedghayoumi.png'),
	},
	{
		slug_name: 'siamakmokhtari',
		real_name: 'سیامک مختاری',
		skill: 'طراح و توسعه‌دهنده نرم‌افزار',
		company: 'پدیدار',
		time: null,
		info: 'توسعه‌دهنده نرم‌افزار های تحت وب و طراح نرم افزار های تحت وب و موبایل که از نوجوانی وارد دنیای وب شده است. با شرکت‌های بزرگ نظیر نت‌برگ، زرین‌پال، اسنپ و... همکاری داشته است. در حال حاضر در پدیدار توسعه‌دهنده نرم افزار است. او به جزئیات و زیبایی در عین سادگی علاقه دارد.',
		social: {
			twitter: 'sia_mac',
			linkedin: 'http://linkedin.com/in/siamakmokhtari',
		},
		avatar: require('../../assets/images/speakers/siamakmokhtari.png'),
	},
	{
		slug_name: 'matinmaleki',
		real_name: 'متین مالکی',
		skill: 'معمار تجربیات کاربری',
		company: null,
		time: null,
		info: 'او از سال 85 فعالیت خود را با طراحی رابط کاربری وب‌سایت‌ها و نرم‌افزاری تحت وب آغاز نمود و در ادامه در زمینه طراحی نرم‌افزارهای موبایل مهارت های خود را بکار گرفت. وی هم‌اکنون به عنوان کارشناس ارشد مهندسی نرم افزار و فعال تجربه کاربری بعنوان مشاور و طراح در سازمان ها و استارتآپ ها فعالیت می کند.',
		social: {
			twitter: 'matin_mlk',
			linkedin: 'https://www.linkedin.com/in/matin-maleki-a9b46225'
		},
		avatar: require('../../assets/images/speakers/matinmaleki.png'),
	},
	{
		slug_name: 'jahangard',
		real_name: 'نصرالله جهانگرد',
		skill: null,
		company: null,
		time: null,
		info: 'نصرالله جهانگرد، معاون وزیر ارتباطات و فناوری اطلاعات، دبیر شورای اجرایی فناوری اطلاعات و رئیس سازمان فناوری اطلاعات ایران است. وی مسئولیت‌های کلیدی بسیاری در حوزه مدیریت طرح‌های فناوری اطلاعات کشور داشته، که تدوین اولین طرح جامع توسعه کاربری فناوری اطلاعات ایران از آن جمله است.',
		social: {
			twitter: null,
			linkedin: null
		},
		avatar: require('../../assets/images/speakers/jahangard.png'),
	},
	{
		slug_name: 'parhambaghestani',
		real_name: 'پرهام باغستانی',
		skill: 'فعال حوزه فناوری اطلاعات و کاربردپذیری',
		company: null,
		time: null,
		info: 'پرهام باغستانی از افراد باتجربه حوزه کاربردپذیری است. او از سال 1389 به همراه محمدرضا محمدعلی آغازگر برگزاری همایش سالانه کاربردپذیری در ایران، همزمان با روز جهانی کاربردپذیری بوده است. کارگاه‌ها و رویدادهای دیگری هم حول موضوع تجربه کاربری و کاربردپذیری به همت او برای علاقمندان برگزار شده است.',
		social: {
			twitter: 'parhamb',
			linkedin: 'https://www.linkedin.com/in/parhamb'
		},
		avatar: require('../../assets/images/speakers/parhambaghestani.png'),
	},
	{
		slug_name: 'rezataati',
		real_name: 'رضا طاعتی',
		skill: 'سرپرست واحد تولید نرم افزارهای اندروید',
		company: 'چارگون',
		time: null,
		info: 'او  حدود ۱۵ سال گذشته در زمینه های برنامه نویسی و تست برنامه های کاربردی تحت ویندوز، وب و موبایل فعال بوده و تجربیات ارزشمندی دارد که نتیجه آن استفاده بخش عمده‌ای از مدیران و کاربران از نرم‌افزارهای سازمانی بر روی بستر همراه است. این محصولات و نرم‌افزارها گسترده وسیعی از حوره اتوماسیون اداری مدیریت منابع انسانی و لجستیک را شامل می شوند.',
		social: {
			twitter: null,
			linkedin: null,
		},
		avatar: require('../../assets/images/speakers/rezataati.png'),
	},
	// {
	// 	slug_name: '',
	// 	real_name: '',
	// 	skill: '',
	// 	company: '',
	// 	time: '',
	// 	info: '',
	// 	social: {
	// 		twitter: '',
	// 		linkedin: 'http://linkedin.com/'
	// 	},
	// 	avatar: require('../../assets/images/speakers/.png'),
	// },
];

const getSpeaker = name => speakers.filter(person => person.slug_name === name);
speakers = speakers.sort((a, b) => a.real_name.split(' ')[1].localeCompare(b.real_name.split(' ')[1]));

const schedule = [
	{
		type: 'normal',
		start: '08:00',
		end: '08:50',
		title: 'پذیرش',
		subject: null,
	},
	{
		type: 'normal',
		start: '08:50',
		end: '09:00',
		title: 'شروع و اعلام برنامه',
		subject: 'سرود ملی، تلاوت قرآن و اعلام برنامه',
		file: require('../../assets/presentation/UXAward1395.pdf'),
	},
	{
		type: 'presentation',
		start: '09:00',
		end: '09:15',
		slug: getSpeaker('jahangard')[0].slug_name,
		title: getSpeaker('jahangard')[0].real_name,
		subject: 'سخنرانی کلیدی',
	},
	{
		type: 'normal',
		start: '09:15',
		end: '09:30',
		title: 'اهدای جوایز کاربردپذیری',
		subject: 'اهدا لوح و تندیس به برگزیدگان سومین جایزه کاربردپذیری',
	},
	{
		type: 'presentation',
		start: '09:30',
		end: '09:40',
		title: 'الیزابت رازنبرگ',
		subject: 'Engagement',
	},
	{
		type: 'presentation',
		start: '09:40',
		end: '10:00',
		slug: getSpeaker('siamakmokhtari')[0].slug_name,
		title: getSpeaker('siamakmokhtari')[0].real_name,
		subject: 'تاپیوگرافی اصولی در وب سایت کاربردپذیر',
		file: require('../../assets/presentation/SiamakMokhtari.pdf'),
	},
	{
		type: 'presentation',
		start: '10:00',
		end: '10:20',
		slug: getSpeaker('parhamkhoshbakht')[0].slug_name,
		title: getSpeaker('parhamkhoshbakht')[0].real_name,
		subject: 'طراحى برمبناى رفتار كاربر',
		file: require('../../assets/presentation/parhum-khoshbakht.pdf'),
	},
	{
		type: 'normal',
		start: '10:20',
		end: '10:40',
		title: 'استراحت و پذیرانی',
		subject: null,
	},
	{
		type: 'presentation',
		start: '10:40',
		end: '11:00',
		slug: getSpeaker('alisadattalab')[0].slug_name,
		title: getSpeaker('alisadattalab')[0].real_name,
		subject: 'Audio Experience',
		file: require('../../assets/presentation/AliSadattalab.pdf'),
	},
	{
		type: 'presentation',
		start: '11:00',
		end: '11:20',
		slug: getSpeaker('tinanabizadeh')[0].slug_name,
		title: getSpeaker('tinanabizadeh')[0].real_name,
		subject: 'Visual Design vs Usability, which one is more important?',
		file: require('../../assets/presentation/TinaNabizadeh.pdf'),
	},
	{
		type: 'presentation',
		start: '11:20',
		end: '11:40',
		slug: getSpeaker('rezataati')[0].slug_name,
		title: getSpeaker('rezataati')[0].real_name,
		subject: 'موبایل و کاربرد پذیری',
		file: require('../../assets/presentation/rezataati.pdf'),
	},
	{
		type: 'presentation',
		start: '11:40',
		end: '12:00',
		slug: getSpeaker('saeedghayoumi')[0].slug_name,
		title: getSpeaker('saeedghayoumi')[0].real_name,
		subject: 'UX در شرکت های چند محصوله',
		file: require('../../assets/presentation/SaeedGhayomi.pdf'),
	},
	{
		type: 'presentation',
		start: '12:00',
		end: '12:20',
		slug: getSpeaker('parhambaghestani')[0].slug_name,
		title: getSpeaker('parhambaghestani')[0].real_name,
		subject: 'پرتوتایپ، چرا و چگونه ؟',
		file: require('../../assets/presentation/ParhamBaghestani.pdf'),
	},
	{
		type: 'presentation',
		start: '12:20',
		end: '12:40',
		slug: getSpeaker('shervinmashayekh')[0].slug_name,
		title: getSpeaker('shervinmashayekh')[0].real_name,
		subject: 'بازاريابى عصبى در تجربه كاربرى',
		file: require('../../assets/presentation/shervinMashayekh.pdf'),
	},
	{
		type: 'presentation',
		start: '12:40',
		end: '13:00',
		slug: getSpeaker('matinmaleki')[0].slug_name,
		title: getSpeaker('matinmaleki')[0].real_name,
		subject: 'کپی‌برداری در تولید و محصولات غیرکاربردی',
		file: require('../../assets/presentation/matinmaleki.zip'),
	},
	{
		type: 'normal',
		start: '13:00',
		end: '14:00',
		title: 'پذیرایی ناهار',
		subject: null,
	},
];

const getTime = slugName => schedule.filter(item => item.title === slugName);
/**
 * Exporting Method
 */
export {
	organizers,
	speakers,
	schedule,
	getTime,
	sponsors,
};
