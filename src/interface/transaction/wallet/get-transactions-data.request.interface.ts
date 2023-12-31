import { BlockchainNetworkEnum, TransactionTypeEnum } from '../../../enum';

export default interface IGetTransactionsDataRequest {
  network: BlockchainNetworkEnum;
  identifier?: string;

  page?: number;
  perPage?: number;

  address?: string;
  fingerprint?: string;
  type?: TransactionTypeEnum;

  ethBlockNumber?: number;
  ethIndex?: number;
  ethItemsCount?: number;
  ethValue?: string;
  ethInsertedAt?: Date;
  ethHash?: string;
  ethFee?: string;
  
  tokenBlockNumber?: number;
  tokenIndex?: number;
}
