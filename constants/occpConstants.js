const errorCodes = {
    notImplemented: 'NotImplemented',
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

const authorizationStatuses = {
    accepted: 'Accepted',
    blocked: 'Blocked',
    expired: 'Expired',
    invalid: 'Invalid',
    concurrentTx: 'ConcurrentTx'
};

const availabilityStatuses = {
    accepted: 'Accepted',
    rejected: 'Rejected',
    scheduled: 'Scheduled',
};

module.exports = {
    errorCodes,
    messageTypes,
    statusCodes,
    authorizationStatuses,
    availabilityStatuses,
};