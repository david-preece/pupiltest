export const convertFileToBase64 = (file, callback) => {
    const reader = new FileReader();

    reader.addEventListener(
        'load',
        () => {
            callback(reader.result);
        },
        false,
    );

    if (file) {
        reader.readAsDataURL(file);
    }
};
