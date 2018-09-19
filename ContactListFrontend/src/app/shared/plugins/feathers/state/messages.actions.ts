export class ReconnectMessage {
  static readonly type = '[Socket Message] Reconnecting Message';
}

export class ReconnectAttempt {
  static readonly type = '[Socket Message] Reconnect Attempt Message';
}

export class ReconnectFailed {
  static readonly type = '[Socket Message] Reconnect Failed Message';
}

export class Error {
  static readonly type = '[Socket Message] Error Message';
}

export class Disconnect {
  static readonly type = '[Socket Message] Disconnect Message';
}

export class ConnectTimeout {
  static readonly type = '[Socket Message] Connect Timeout Message';
}

