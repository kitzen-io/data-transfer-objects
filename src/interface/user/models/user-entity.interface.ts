import { ITradeOfferEntity } from '../../trade';
import { IFeedbackEntity } from './user-feedback-entity.interface';
import IUserAddressEntity from './user-address-entity.interface';
import IUserNotificationsPreferencesEntity from './user-notifications-preferences-entity.interface';
import IUserReferralStatisticEntity from './user-referral-statistic-entity.interface';
import IBlacklistEntity from './user-blacklist-entity.interface';

export default interface IUserEntity {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  referralShareConfiguration: number;
  tradesCount: string;
  totalResponseSeconds: string;
  volume: number;
  lastOnline: Date;
  nameUpdateDate: Date;
  timezone: string;
  userNotificationPreferences: IUserNotificationsPreferencesEntity;
  referralStatisticModel: IUserReferralStatisticEntity;
  positiveFeedback: number;
  negativeFeedback: number;
  addresses: IUserAddressEntity[];
  writtenFeedbacks: IFeedbackEntity[];
  receivedFeedbacks: IFeedbackEntity[];
  blacklist: IBlacklistEntity[];
  offers: ITradeOfferEntity[];
  createdAt: Date;
  updatedAt: Date;
}
