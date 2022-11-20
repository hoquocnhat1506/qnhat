const dummyAddressData = {
	name: "AnhLoan",
	addressLine: "Hoa Xuan, Cam Le, Da Nang",
	city: "Danang",
	national: "Vietnam",
	phoneNumber: "0123456789",
};

const formDataReducerFunction = (state, { type, payload }) => {
	switch (type) {
		case "SET_FORM_DATA":
			return { ...state, [payload.name]: payload.value };
		case "SET_DUMMY_ADDRESS":
			return { ...dummyAddressData };
	}
};

export { formDataReducerFunction };
