"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageGalleryModalProps {
	images: string[];
	alt: string;
	isOpen: boolean;
	onClose: () => void;
}

const ImageGalleryModal = ({ images, alt, isOpen, onClose }: ImageGalleryModalProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	if (!isOpen) return null;

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") onClose();
		if (e.key === "ArrowLeft") goToPrevious();
		if (e.key === "ArrowRight") goToNext();
	};

	return (
		<div
			className="fixed inset-0 bg-black/50 bg-opacity-90 z-50 flex items-center justify-center p-4"
			onClick={onClose}
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			<div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
					aria-label="Close gallery"
				>
					<FaTimes size={24} />
				</button>

				{/* Previous button */}
				{images.length > 1 && (
					<button
						onClick={(e) => {
							e.stopPropagation();
							goToPrevious();
						}}
						className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
						aria-label="Previous image"
					>
						<FaChevronLeft size={24} />
					</button>
				)}

				{/* Next button */}
				{images.length > 1 && (
					<button
						onClick={(e) => {
							e.stopPropagation();
							goToNext();
						}}
						className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
						aria-label="Next image"
					>
						<FaChevronRight size={24} />
					</button>
				)}

				{/* Main image */}
				<div className="relative w-full h-full flex items-center justify-center">
					<Image
						src={images[currentIndex]}
						alt={`${alt} - Image ${currentIndex + 1}`}
						fill
						className="object-contain"
						priority
					/>
				</div>

				{/* Image counter */}
				{images.length > 1 && (
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
						{currentIndex + 1} / {images.length}
					</div>
				)}

				{/* Thumbnail strip */}
				{images.length > 1 && (
					<div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto">
						{images.map((image, index) => (
							<button
								key={index}
								onClick={(e) => {
									e.stopPropagation();
									setCurrentIndex(index);
								}}
								className={`relative w-16 h-16 flex-shrink-0 border-2 transition-all ${
									index === currentIndex ? "border-white scale-110" : "border-gray-400 hover:border-gray-200"
								}`}
							>
								<Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ImageGalleryModal;
