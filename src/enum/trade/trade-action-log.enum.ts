enum TradeActionLogEnum {
  START_TRADE_REQUEST = 'START_TRADE_REQUEST',
  START_TRADE_APPROVED = 'START_TRADE_APPROVED',
  START_TRADE_TIMEOUT = 'START_TRADE_TIMEOUT',
  START_TRADE_CANCELED_TAKER = 'START_TRADE_CANCELED_TAKER',
  START_TRADE_CANCELED_MAKER = 'START_TRADE_CANCELED_MAKER',
  REQUEST_REQUISITES = 'REQUEST_REQUISITES',
  REQUEST_REQUISITES_TIMEOUT = 'REQUEST_REQUISITES_TIMEOUT',

  MAKER_ESCROW_CRYPTO_REQUEST = 'MAKER_ESCROW_CRYPTO_REQUEST',
  MAKER_ESCROW_CRYPTO_INSUFFICIENT = 'MAKER_ESCROW_CRYPTO_INSUFFICIENT',
  MAKER_ESCROW_CRYPTO_CANCELED_TIMEOUT = 'MAKER_ESCROW_CRYPTO_CANCELED_TIMEOUT',

  INTERNAL_MAKER_ESCROW_CRYPTO_APPROVED = 'INTERNAL_MAKER_ESCROW_CRYPTO_APPROVED', // when user press "APPROVE" button on wallet
  INTERNAL_MAKER_ESCROW_CRYPTO_CANCELED = 'INTERNAL_MAKER_ESCROW_CRYPTO_CANCELED', // when user press "CANCEL" button on wallet (may be missclick or smth..)
  INTERNAL_MAKER_ESCROW_CRYPTO_FAILED = 'INTERNAL_MAKER_ESCROW_CRYPTO_FAILED', // when wallet can't create a transaction after user approve

  MAKER_ESCROW_CRYPTO_CANCELED_TAKER = 'MAKER_ESCROW_CRYPTO_CANCELED_TAKER',
  MAKER_ESCROW_CRYPTO_CANCELED_MAKER = 'MAKER_ESCROW_CRYPTO_CANCELED_MAKER',
  MAKER_ESCROW_CRYPTO_SENT = 'MAKER_ESCROW_CRYPTO_SENT',
  MAKER_ESCROW_CRYPTO_SENT_WRONG_AMOUNT = 'MAKER_ESCROW_CRYPTO_SENT_WRONG_AMOUNT',

  TAKER_TRANSFER_FIAT_REQUEST = 'TAKER_TRANSFER_FIAT_REQUEST',
  TAKER_TRANSFER_FIAT_CANCELED = 'TAKER_TRANSFER_FIAT_CANCELED',
  TAKER_TRANSFER_FIAT_TIMEOUT_TAKER = 'TAKER_TRANSFER_FIAT_TIMEOUT_TAKER',
  TAKER_TRANSFER_FIAT_TRANSFERRED = 'TAKER_TRANSFER_FIAT_TRANSFERRED',
  TAKER_TRANSFER_FIAT_TIMEOUT_MAKER = 'TAKER_TRANSFER_FIAT_TIMEOUT_MAKER',
  TAKER_TRANSFER_FIAT_DISPUTED = 'TAKER_TRANSFER_FIAT_DISPUTED',

  INTERNAL_BROADCAST_TRANSACTION_FAILED = 'INTERNAL_BROADCAST_TRANSACTION_FAILED', // when broadcast transaction failed
  INTERNAL_MULTISIG_SIGNATURE_GET = 'INTERNAL_MULTISIG_SIGNATURE_GET', // when user press "RECEIVED" button on wallet, and get transaction for sign
  INTERNAL_MULTISIG_SIGNATURE_CANCELED = 'INTERNAL_MULTISIG_SIGNATURE_CANCELED', // when user get transaction for sign and press "CANCEL" button
  INTERNAL_MULTISIG_SIGNATURE_APPROVED = 'INTERNAL_MULTISIG_SIGNATURE_APPROVED', // when user get transaction for sign and press "APPROVE" button
  INTERNAL_MULTISIG_SIGNATURE_FAILED = 'INTERNAL_MULTISIG_SIGNATURE_FAILED', // when user get transaction for sign and press "APPROVE" button


  DISPUTE_MAKER_RIGHT = 'DISPUTE_MAKER_RIGHT',
  DISPUTE_TAKER_RIGHT = 'DISPUTE_TAKER_RIGHT',
  DISPUTE_MAKER_RELEASE_TO_TAKER = 'DISPUTE_MAKER_RELEASE_TO_TAKER',
  DISPUTE_TAKER_RELEASE_TO_MAKER = 'DISPUTE_TAKER_RELEASE_TO_MAKER',

  ESCROW_RELEASING_TO_TAKER = 'ESCROW_RELEASING_TO_TAKER',
  ESCROW_RELEASING_TO_MAKER = 'ESCROW_RELEASING_TO_MAKER',
  ESCROW_RELEASED_TO_TAKER = 'ESCROW_RELEASED_TO_TAKER',
  ESCROW_RELEASED_TO_MAKER = 'ESCROW_RELEASED_TO_MAKER',
}

export default TradeActionLogEnum;