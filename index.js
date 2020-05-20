module.exports = class ServiceUtils {
  static getServiceHost (service, defaultHost) {
    return process.env[`${this.encode(service)}_SERVICE_HOST`] || process.env[`${this.encode(service)}_HOST`] || defaultHost || service
  }

  static getServicePort (service, defaultPort) {
    return process.env[`${this.encode(service)}_SERVICE_PORT`] || process.env[`${this.encode(service)}_PORT`] || defaultPort
  }

  static encode (service) {
    return service.replace(/-/g, '_').toUpperCase()
  }
}
