const ServiceUtils = require('./index.js')

describe('service functions', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV
  });

  afterEach(() => {
    process.env = OLD_ENV
  })

  test('getServiceHost correctly fallbacks to the service name if nothing is set and no default host is passed', () => {
    expect(ServiceUtils.getServiceHost('service')).toBe('service')
  })
  
  test('getServiceHost correctly returns the host depending on the environment variables', () => {
    expect(ServiceUtils.getServiceHost('service', 'default')).toBe('default')
    process.env.SERVICE_HOST = 'myhost'
    expect(ServiceUtils.getServiceHost('service', 'default')).toBe('myhost')
    process.env.SERVICE_SERVICE_HOST = 'mykuberneteshost'
    expect(ServiceUtils.getServiceHost('service', 'default')).toBe('mykuberneteshost')
  })
  
  test('getServicePort correctly returns the port depending on the environment variables', () => {
    expect(ServiceUtils.getServicePort('service', 8080)).toBe(8080)
    process.env.SERVICE_PORT = 8081
    expect(ServiceUtils.getServicePort('service', 8080)).toBe(8081)
    process.env.SERVICE_SERVICE_PORT = 8082
    expect(ServiceUtils.getServicePort('service', 8080)).toBe(8082)
  })
})

describe('helper functions', () => {
  test('correctly encodes service names with dashes ', () => {
    expect(ServiceUtils.encode('my-service-name-with-dashes')).toBe('MY_SERVICE_NAME_WITH_DASHES')
  })
})