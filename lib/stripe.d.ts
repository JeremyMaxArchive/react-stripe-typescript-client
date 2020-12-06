import 'isomorphic-fetch';
import { CardDetails } from './types/CardDetails';
import { TokenResponse } from './types/TokenResponse';
export declare const STRIPE_URL = "https://api.stripe.com/v1/tokens";
export declare function createToken(publicKey: string, cardDetails: CardDetails): Promise<TokenResponse>;
