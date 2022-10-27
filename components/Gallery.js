import Link from "next/link"

export const Gallery = ({ photos, className }) => {
  return (
    <div className={`grid grid-cols-6 gap-4 ${className}`}>
      {photos.map((photo) => {
        return (
          <Link href={photo.url} key={`gallery-${photo.name}`} className="shadow-md p-2">
            <img src={photo.img} alt={photo.name} className="object-cover aspect-[4/3]" />
          </Link>
        )
      })}
    </div>
  )
}