import { development, brand, eye } from "../assets"

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

