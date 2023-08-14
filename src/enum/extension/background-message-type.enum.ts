enum BackgroundMessageTypeEnum {
  WAKE_UP = 'WAKE_UP',
  START_WALLET = 'START_WALLET',
  GET_WALLET_STATUS = 'GET_WALLET_STATUS',
  GET_MAIN_ADDRESS = 'GET_MAIN_ADDRESS',
  GET_TOKEN = 'GET_TOKEN',
  GET_UNSPENT_TRANSACTIONS = 'GET_UNSPENT_TRANSACTIONS',
  GET_WATCHED_ASSETS_WITH_BALANCE = 'GET_WATCHED_ASSETS_WITH_BALANCE',
  GET_ASSET_BALANCE = 'GET_ASSET_BALANCE',
  GET_ALL_ASSET_BALANCE = 'GET_ALL_ASSET_BALANCE',
  GET_ASSETS_LIST = 'GET_ASSETS_LIST',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  GET_TRANSACTION_DETAILS = 'GET_TRANSACTION_DETAILS',
  WATCH_ASSET = 'WATCH_ASSET',
  UNSUBSCRIBE_ASSET = 'UNSUBSCRIBE_ASSET',
  UPDATE_BALANCE = 'UPDATE_BALANCE',
  ESTIMATE_FEE = 'ESTIMATE_FEE',
  ESTIMATE_FEE_TRX = 'ESTIMATE_FEE_TRX',
  PASSWORD_CHANGE = 'PASSWORD_CHANGE',
  CREATE_TRANSACTION = 'CREATE_TRANSACTION',
  SIGN_MESSAGE_WITH_ADDRESS = 'SIGN_MESSAGE_WITH_ADDRESS',
  APPROVE_PERMISSIONS = 'APPROVE_PERMISSIONS',
  DECODE_PSBT = 'DECODE_PSBT',
  UNLOCK = 'UNLOCK',
  LOCK = 'LOCK',
  LOGOUT = 'LOGOUT',
  CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION',
  SEND_TRANSACTION_REQUEST_STATUS = 'SEND_TRANSACTION_REQUEST_STATUS',
  SIGN_TRANSACTION = 'SIGN_TRANSACTION',
}

export default BackgroundMessageTypeEnum;
