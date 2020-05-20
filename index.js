module.exports = class ServiceUtils {
  static getServiceHost (service, defaultHost) {
      return process.env[`${service.toUpperCase()}_SERVICE_HOST`] || process.env[`${service.toUpperCase()}_HOST`] || defaultHost || service
  }

  static getServicePort (service, defaultPort) {
      return process.env[`${service.toUpperCase()}_SERVICE_PORT`] || process.env[`${service.toUpperCase()}_PORT`] || defaultPort
  }
}