import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { fontFamily: { display:['Playfair Display','serif'], sans:['Inter','sans-serif'] }, colors: { ink:'#201816', cream:'#F8F3EC', blush:'#E9D6CC', wine:'#5C171A', sand:'#E9DED2' }, boxShadow:{ soft:'0 20px 70px rgba(48,30,24,.12)' } } },
  plugins: []
}
export default config
