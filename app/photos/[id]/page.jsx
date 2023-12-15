import photos from '@/public/photos/photos'
import Photo from '@/app/components/Photo'

export default function PhotoPage({ params: { id } }) {
  const photo = photos.find((p) => p.id === id)

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Photo photo={photo} />
      </div>
    </div>
  )
}