import Image from "next/image";

export default function ModalImage({ selectedImage, closeModal }: any) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center flex-1 justify-center bg-black bg-opacity-75"
      onClick={closeModal}
    >
      <div className="relative p-4  w-full object-contain">
        <Image
          src={selectedImage}
          alt="Selected image"
          layout="responsive"
          width={1080}
          height={1920}
          className="rounded-lg shadow-lg object-contain h-fit w-full max-h-screen"
        />
      </div>
    </div>
  )
}