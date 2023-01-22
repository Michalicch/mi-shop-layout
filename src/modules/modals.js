export const openModal = (modal) => {
	modal.classList.add("d-block"); //через классы бутстрап

	setTimeout(() => {
		modal.classList.add("show");
	}, 100);
};

export const closeModal = (modal) => {
	modal.classList.remove("show");

	setTimeout(() => {
		modal.classList.remove("d-block");
	}, 500);
};