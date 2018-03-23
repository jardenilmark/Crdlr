const LocalStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}

global.localStorage = LocalStorageMock
