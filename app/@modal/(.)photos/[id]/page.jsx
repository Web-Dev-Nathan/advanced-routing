import photos from '@/public/photos/photos'
import Modal from '@/app/components/Modal'
import Photo from '@/app/components/Photo'

export default function PhotoModal({ params: { id: photoId } }) {
  const photo = photos.find((p) => p.id === photoId)
  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  )
}