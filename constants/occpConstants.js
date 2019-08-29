const errorCodes = {
    notImplemented : 'NotImplemented',
    notSupported: 'NotSupported',
    internalError: 'InternalError',
    protocolError: 'ProtocolError',
    securityError: 'SecurityError',
    formationViolation: 'FormationViolation',
    propertyConstraintViolation: 'PropertyConstraintViolation',
    occurenceConstraintViolation: 'OccurenceConstraintViolation',
    typeConstraintViolation: 'TypeConstraintViolation',
    genericError: 'GenericError',
};

const messageTypes = {
    call: 2,
    callResult: 3,
    callError: 4,
};

const statusCodes = {
    accepted: 'Accepted',
    pending: 'Pending',
    rejected: 'Rejected',
};

module.exports = {
  errorCodes,
  messageTypes,
  statusCodes,
};