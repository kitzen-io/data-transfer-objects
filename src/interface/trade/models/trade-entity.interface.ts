import { BlockchainNetworkEnum, OfferTypeEnum, TradeActionLogEnum } from '../../../enum';
import ITradeOfferEntity from './trade-offer-entity.interface';
import { IPaymentMethodEntity } from '../../payment';
import { IUserEntity } from '../../user';

export default interface ITradeEntity {
  id: string;
  type: OfferTypeEnum;
  fiatCurrency: string;
  cryptoCurrencyNetwork: BlockchainNetworkEnum;
  cryptoCurrencyIdentifier: string;
  currencyRate: number;
  fiatAmount: number;
  cryptoAmountBuyer: bigint;
  cryptoAmountSeller: bigint;
  fee: bigint;
  blockchainFee: number;
  action: TradeActionLogEnum;
  depositTransactionId: string;
  escrowWalletAddress: string;
  releaseTransactionId: string;
  offerVersion: number;
  isRatedMaker: boolean;
  isRatedTaker: boolean;
  requisites?: string;
  method: IPaymentMethodEntity;
  methodId: number;
  offer: ITradeOfferEntity;
  offerId: string;
  offerOwner: IUserEntity;
  offerOwnerId: string;
  maker: IUserEntity;
  makerId: string;
  taker: IUserEntity;
  takerId: string;
  countdownRelease?: number;
  createdAt: Date;
  updatedAt: Date;
}
