import { HttpRequest, Response } from '../../../http-request';

interface UpdateMerchantReferenceBody {
  merchant_reference1: string;
  merchant_reference2: string;
}

export class Orders extends HttpRequest {
  /**
   * https://developers.klarna.com/api/#order-management-api-acknowledge-order
   */
  acknowledge(orderId: string): Promise<Response> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/acknowledge`
    );
  }

  /**
   * https://developers.klarna.com/api/#order-management-api-cancel-order
   */
  cancel(orderId: string): Promise<Response> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/cancel`,
      {}
    );
  }

  /**
   * https://developers.klarna.com/api/#order-management-api-release-remaining-authorization
   */
  releaseRemainingAuthorization(orderId: string): Promise<Response> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/release-remaining-authorization`,
      {}
    );
  }

  /**
   * https://developers.klarna.com/api/#order-management-api-update-merchant-references
   */
  updateMerchantReference(
    orderId: string,
    body: UpdateMerchantReferenceBody
  ): Promise<Response> {
    return this.invoke(
      `PATCH`,
      `/ordermanagement/v1/orders/${orderId}/merchant-references`,
      body
    );
  }

  getOrder(orderId: string): Promise<Response> {
    return this.invoke(`GET`, `/ordermanagement/v1/orders/${orderId}`);
  }
}
