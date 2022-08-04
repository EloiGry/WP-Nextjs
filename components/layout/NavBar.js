import Image from "next/image"
import Link from 'next/link'

export default function ({header, menu}) {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="fill-current h-8 w-8 mr-2"><Image width="30" height="30" src={header.siteLogoUrl} /></span>
    <span className="font-semibold text-xl tracking-tight">{header.siteTitle}</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
        {menu.map(item => {
            return (
                <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" key={item.node.id}> 
                    <Link href={`${process.env.NEXT_PUBLIC_URL}`}>
                        {item.node.label}
                    </Link>
                </div>
            )
        })}
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
    )
}

