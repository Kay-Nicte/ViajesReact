module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Para manejar estilos
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transforma los archivos TS usando ts-jest
  },
};