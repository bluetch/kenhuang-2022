import Link from "next/link"

export const Gallery = ({ photos, className }) => {
  return (
    <div className={`grid grid-cols-${photos.length} gap-4 ${className}`}>
      {photos.map((photo) => {
        return (
          <Link href={photo.url} key={`gallery-${photo.name}`}>
            <a className="shadow-md p-2">
              <img src={photo.img} alt={photo.name} className="object-cover aspect-[4/3]"/>
            </a>
          </Link>
        )
      })}
    </div>
  )
}