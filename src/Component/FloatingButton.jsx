import React, { useEffect, useRef, useState } from "react";
import { FaPhone } from "react-icons/fa";

const RatingStars = ({ rating, onRate }) => {
    const handleRating = (starRating) => {
        const newRating = starRating === rating ? 0 : starRating; // Toggle rating
        onRate(newRating);
    };

    return (
        <div className="flex">
            {Array.from({ length: 5 }, (_, index) => {
                const starRating = index + 1;
                return (
                    <Star
                        key={index}
                        filled={starRating <= rating}
                        onClick={() => handleRating(starRating)}
                    />
                );
            })}
        </div>
    );
};

const Star = ({ filled, onClick }) => {
    return (
        <span
            onClick={onClick}
            className={`cursor-pointer text-xl transition-colors duration-200 ${
                filled ? "text-yellow-500" : "text-gray-300"
            }`}
        >
            ★
        </span>
    );
};

const FloatingButton = () => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({
        x: window.innerWidth - 110,
        y: window.innerHeight - 90,
    });
    const [showPopup, setShowPopup] = useState(false);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const button = buttonRef.current;
        let offsetX, offsetY;

        const handleMouseDown = (e) => {
            offsetX = e.clientX - button.getBoundingClientRect().left;
            offsetY = e.clientY - button.getBoundingClientRect().top;
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        const handleMouseMove = (e) => {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            setPosition({ x, y });
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        button.addEventListener("mousedown", handleMouseDown);

        return () => {
            button.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            setPosition({
                x: window.innerWidth - 110,
                y: window.innerHeight - 90,
            });
        };
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
    }, []);

    const handleButtonClick = () => {
        setShowPopup((prev) => !prev);
    };

    const handleSubmit = () => {
        alert(`You rated us ${rating} star(s).`);
        setShowPopup(false); // Optionally close the popup
    };

    return (
        <div>
            {/* Floating Phone Button */}
            <div
                ref={buttonRef}
                onClick={handleButtonClick}
                className="fixed z-50 bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: "60px",
                    height: "60px",
                }}
            >
                <FaPhone className="text-white text-2xl" />
            </div>

            {/* Pop-Up Box */}
            {showPopup && (
                <div
                    className="fixed z-40 p-3 bg-white rounded-lg shadow-lg border border-gray-200"
                    style={{
                        width: "220px",
                        bottom: `${window.innerHeight - position.y + 70}px`,
                        left: `${position.x - 190}px`, // Position popup 190px to the left of the button
                    }}
                >
                    <h2 className="text-md font-semibold text-gray-800 mb-2">Contact Us</h2>
                    <div className="text-gray-600 mb-2 text-sm leading-tight">
                        <p>📞 +91-7307198311</p>
                        <p>📧 skypetelglobal@gmail.com</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <p className="text-gray-600 text-sm">Rate us:</p>
                        <div className="flex ml-1">
                            <RatingStars rating={rating} onRate={setRating} />
                        </div>
                    </div>
                    {rating > 0 && (
                        <button
                            onClick={handleSubmit}
                            className="mt-3 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-400 transition-colors duration-200"
                        >
                            Submit
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
