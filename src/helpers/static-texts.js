import { development, brand, eye, phone, laptop, diabeticBuyBack} from "../assets"

export const navLinks = [
	{
		id: 'milestones',
		title: 'Milestones'
	},
	{
		id: 'portfolios',
		title: 'Portfolios'
	},
	{
		id: 'services',
		title: 'Services'
	},
	{
		id: 'work',
		title: 'Work'
	},
	{
		id: 'testimonials',
		title: 'Testimonials'
	}
]

export const milestones = [
	{
		number: '$699M+',
		title:'Capital raised',
		content:'Total amount of capital raised follwing collabration with DesignGenius Labs'
	},
	{
		number: '8',
		title:'Unicorn branded',
		content:'Unicorn brands that have gain up to $1B valuations post-branding'
	},
	{
		number: '300+',
		title:'Aquisitions',
		content:'Number of clients who have been acquired following collaboration with DesignGenius Labs'
	}
]

export const services = [
	{
		id: 1,
		img: eye,
		title: 'Brand Identity',
		description: 'The essential ability to combine empathy, creativity and rationality to meet user needs and business success.',
		servicesList: ['Visual Branding', 'Brand Strategy', 'Identity development' ,'Digital and print collateral',
						'Brand guidelines', 'Mockup design'],
	},
	{
		id: 2,
		img: brand,
		title: 'Visual Design',
		description: 'Get your custom and exceptional work of UI and UX design for both website and mobile app interface,illustrations, motion graphics all toward your needs.',
		servicesList: ['Design systems', 'Responsive Website', 'Digital products', 'Motion & interaction', 'illustration',
						'3D design', 'Graphics design'],
	},
	{
		id: 3,
		img: development,
		title: 'Development',
		description: 'Our expert Front-End Developers are ready to implement the aesthetic of designs into codes adopting the latest framework and technology.',
		servicesList: ['Front-end development','CMS integrations' ,'SEO friendly' ,'Custom codes'	,
						'Web maintenance', 'Quality assurance'],
	},
]

export const works = [
	{
		id: 1,
		year: 2020,
		title: "BunnyCDN",
		content:"BunnyCDN is a fast CDN tool that comes at a fraction of the cost of traditional Content Delivery Networks, it offers features and performance with a fast global network.",
		from: "Ghana",
		Timeframe: "Retainer",
		services: "Website,",
		media: {
			item1: laptop,
			item2: phone,
		}
	},
	{
		id: 2,
		year: 2022,
		title: "Diabetics BuyBack",
		content: "Get Paid Cash For Your Diabetic Test Strips With Confidence! Help Americans recoup the cost of managing their diabetes by paying them top dollar for their excess supplies.",
		from: "England",
		Timeframe: "2 Weeks",
		services: 'Branding',
		media:  {
			item1: diabeticBuyBack
		}

	}
]

export const footerLinks = [
	{
		
		id: 1,
		header: 'navigations',
		links: ['Home', 'Portfolios', 'Services' , 'Works' , 'Testimonials']
	},
	{
		id: 2,
		header: 'products',
		links: ['Iconhub', 'SlabPixel', 'UIPlus', 'UI8']
	},
	{
		id: 3,
		header: 'socials',
		links: ['Facebook', 'Dribble', 'Instagram', 'Twitter', 'Behance']
	},
	{
		id: 4,
		header: 'Company',
		links: ['Terms & Conditions', 'Privacy', 'Cookies', 'Careers', "Intenships"]
	}
]