function normalizeString(str) {
  // Remove accents using the normalize() method
  const normalizedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Keep only letters and convert to uppercase
  return normalizedStr.replace(/[^a-zA-Z]/g, '').toUpperCase();
}

export default { normalizeString };