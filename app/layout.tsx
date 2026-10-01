import type {Metadata} from 'next';import './globals.css';import Header from '../components/Header';import Footer from '../components/Footer';
export const metadata:Metadata={title:'Aneesh Traders — Building Spaces. Building Trust.',description:'Aneesh Traders — plywood, laminates, hardware, kitchen accessories, interior materials, doors and surfaces. Established in 1980.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
