import React, { useEffect } from "react";

const useOutsideClick = (ref, handler) => {
	const handleOutsideClick = (event) => {
		if (!ref || !ref.current) return;
		if (
			(ref.current && ref.current === event.target) ||
			ref.current.contains(event.target)
		) {
			return;
		}

		handler();
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);
		// eslint-disable-next-line no-unused-expressions
		() => document.removeEventListener("click", handleOutsideClick);
	}, []);
};

export { useOutsideClick };
