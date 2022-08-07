import Image from 'next/image'
import Link from 'next/link'

export default function Footer({header, footer, menuFooter}) {
    return (

        <div className="flex justify-between items-center bg-teal-500 p-6">
            <div className='flex flex-col'> {menuFooter.map(item => {
                return (
                    <Link href='/' key={item.node.id}>
                        {item.node.label}
                    </Link>
                )
            })} </div>
            <div className=' text-teal-200 hover:text-white mr-4 cursor-pointer'> {footer.copyrightText}  </div>
            <span className="fill-current h-8 w-8 mr-2"><Image width="30" height="30" src={header.siteLogoUrl} /></span>
        </div>
    )
}