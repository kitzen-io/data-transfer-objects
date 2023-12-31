enum SocketTopicEnum {
  SYSTEM_UPDATE_SYSTEM_FEE = 'SYSTEM.UPDATE_SYSTEM_FEE',
  SYSTEM_UPDATE_CURRENCY_RATE = 'SYSTEM.UPDATE_CURRENCY_RATE',

  OFFER_UPDATE_STATUS = 'OFFER.UPDATE_STATUS',

  NOTIFICATION_NEW_ENTITY = 'NOTIFICATION.NEW_ENTITY',

  TRADE_NEW_ACTION_LOG = 'TRADE.NEW_ACTION_LOG',
  TRADE_CHAT_NEW_MESSAGE = 'TRADE.CHAT_NEW_MESSAGE',

  INTEGRATION_ACTION_REQUEST = 'INTEGRATION.ACTION_REQUEST',
}

export default SocketTopicEnum;
