export const pagination = (page, size) => {
    const startOffset = (page - 1) * size;
    const endOffset = startOffset + size - 1;
    return { startOffset, endOffset };
}